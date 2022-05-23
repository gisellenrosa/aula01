import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
    const repository = {
      name:"Esse nome aqui pow",
       description:"form for react",
       link:"http://google.com"
    }

  return (
      <section>
        <h1>Lista de repositorios</h1>
        <ul>
          <RepositoryItem  repository={repository} />
          <RepositoryItem  repository={repository}/>
          <RepositoryItem  repository={repository}/>
          <RepositoryItem  repository={repository} />
        </ul>
      </section>
  );
}
