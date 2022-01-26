import { RepositoryItem } from "./RepositoryItem"
import './repositories.scss'; 
import { useEffect, useState } from "react";

export function RepositoryList () {
  
    const repo = {
        name:'Repositório 1', 
        description:'Esse é o primeiro repositório', 
        link:'https://fb.com',
    };

    const [repositories, setRepositories] = useState([]); 
    

    return (
        <section className="repository-list">
            <h1> Lista de repositórios </h1>
            <ul>
                <RepositoryItem repository={repo} />
                <RepositoryItem/>
                <RepositoryItem/>

            </ul>
        </section>
    )

    const b = 2; 
}  