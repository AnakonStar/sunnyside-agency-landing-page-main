import '../App.scss';

export default function AboutContent(props) {
    return (
        <div className='content'>
            <div className='text'>
                <div>
                    <h1>{props.title}</h1>
                    <p>
                        {props.text}
                    </p>
                    <a href='#'>Learn more</a>
                </div>
            </div>
            <div>
                <img src={props.img} alt='about_image' />
            </div>
        </div>
    );
}

