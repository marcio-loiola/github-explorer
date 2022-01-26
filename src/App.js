import './App.scss'; 
import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';
import './App.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter/>
    </>
  ); 
}


/* 
Componente -> Código isoladoo com estilização e a própria funcionalidade

No Código ->  Componente é a Função (com a primeira letra maiúscula)
que retorna uma espécie de HTML. 

*/