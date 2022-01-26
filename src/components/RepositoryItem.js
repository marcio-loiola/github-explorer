export function RepositoryItem (props){
    return (   
        <li>
            <strong> {props.repository?.name ?? 'Título padrão'} </strong>
            <p> {props.repository?.description ?? 'descrição padrão'} </p>
            <a href={props.repository?.link ?? ' '}>Acessa repositório  </a>

        </li>
    )
}