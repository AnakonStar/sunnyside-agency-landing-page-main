import '../../App.scss';

import ProjectsContent from '../ProjectsContent';

import photoEmilly from '../../images/image-emily.jpg';
import photoJennie from '../../images/image-jennie.jpg';
import photoThomas from '../../images/image-thomas.jpg';

export default function Projects() {
    return (
        <section className='clients-testimonials'>
            <h1>Client testimonials</h1>
            <div className='content'>
                <ProjectsContent photo={photoEmilly} name="Emily R." job="Marketing Director" text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." />
                <ProjectsContent photo={photoThomas} name="Thomas S." job="Chief Operating Officer" text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." />
                <ProjectsContent photo={photoJennie} name="Jennie F." job="Business Owner" text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" />
            </div>
        </section>
    );
}