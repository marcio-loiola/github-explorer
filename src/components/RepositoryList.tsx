import React, { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';
import api from '../_config/api'
import '../styles/repositories.scss'; 

type Repository = {
  name: string;
  description?: string;
  html_url: string;
};

export function RepositoryList() {
  // Estado porque vai mudar
  const [repositories, setRepositories] = useState<Repository[]>([]); // inicialmente vazio

  /* const [userName, SetUserName] = useState('willianspraciano'); 
      Aqui era quando se explorava os repositórios de um usuário específico pelo seu username
  */
  // Consumir API -> Efeito que é disparado quando a interface for montada
  useEffect(()=>{
    const fetchData = async () => {
      const response = await api.get('https://api.github.com/orgs/rocketseat/repos')
      setRepositories
      (response?.data);
    }
    fetchData();
  },[]);

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}