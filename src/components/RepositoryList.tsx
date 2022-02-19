// src/components/RepositoryList.tsx

import React, { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss'; 

type Repository = {
  name: string;
  description?: string;
  html_url: string;
};

export function RepositoryList() {
  // Estado porque vai mudar
  const [repositories, setRepositories] = useState<Repository[]>([]); // inicialmente vazio

  const [userName, SetUserName] = useState('willianspraciano');

  // Consumir API -> Efeito que é disparado quando a interface for montada
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json()) //converte para json
      .then((data) => setRepositories(data));
  }, []);

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