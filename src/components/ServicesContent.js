import '../App.scss';

export default function ServicesContent(props) {
    return (
        <div className='content'>
            <img src={props.img} alt='services' />
            <div className={props.style}>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}