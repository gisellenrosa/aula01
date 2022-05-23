import './styles/global.scss';
import { RepositoryList } from './components/RespositoryList';
import { Counter } from './components/Counter';

export function App() {
    return (
        <>
            <RepositoryList/>
            <Counter/>
        </>
    )
}