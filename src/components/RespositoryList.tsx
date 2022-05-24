import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  // Disparo uma função quando algo acontecer na minha aplicação, por exemplo  amudança de uma variável
  // Recebe dois parametros 1. Qual função eu quero executar
  //2. Quando quero executar a funçào - Quais informações que quando mudarem ele vai mudar de novo.
  // useEffect(() =>{}, [repositories])
  // toda vez que repositories for alterado a função vai ser executada.

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map(repo => {
         return <RepositoryItem  key= {repo.name} repository={repo} />
          }
        )}

      </ul>
    </section>
  );
}
