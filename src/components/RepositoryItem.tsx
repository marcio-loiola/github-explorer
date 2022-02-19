
interface RepositoryItemProps {
    repository: {
      name: string;
      description?: string;
      html_url: string;
    };
  }
  
  export function RepositoryItem(props: RepositoryItemProps) {
    return (
      <li>
        <strong>
          {(props.repository && props.repository.name) || 'Título padrão'}
        </strong>
        <p>{props.repository?.description ?? 'Descrição do repositório'}</p>
        <a href={props.repository?.html_url ?? ''}>Acessar repositório</a>
      </li>
    );
  }