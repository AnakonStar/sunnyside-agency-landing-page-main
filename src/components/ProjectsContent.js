import '../App.scss';

export default function ProjectsContent(props) {
    return (
        <div>
            <img src={props.photo} alt='projects' />
            <p>{props.text}</p>
            <h2>
                {props.name}
            </h2>
            <span>
                {props.job}
            </span>
        </div>
    );
}