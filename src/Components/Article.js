import '../Stylesheets/Article.css';
import '../Stylesheets/font.css';
import '../Stylesheets/welcomefont.css';
import question from '../assets/question2.jpg';
import mistake from '../assets/mistake.jpg';
import freedom from '../assets/freedom.jpg';


export let Article = () => {
    return (

        <section className='Articles'>
            <section className="align">
                <h1>ARTICLES</h1>
            </section>
            <section className='blogs'>
                <section className='blog'>
                    <section className='blog-img'>
                        <img src={question} alt=''></img>
                    </section>
                    <section>
                        <section className='title'>CAN I HAVE A 5.0 GP</section>
                        <section className='redirect'>Read more</section>
                    </section>
                </section>
                <section className='blog'>
                    <section className='blog-img'>
                        <img src={mistake} alt=''></img>
                    </section>
                    <section>
                        <section className='title'>THE FRESHERS MISTAKES</section>
                        <section className='redirect'>Read more</section>
                    </section>
                </section>
                <section className='blog'>
                    <section className='blog-img'>
                        <img src={freedom} alt=''></img>
                    </section>
                    <section>
                        <section className='title'>FREEDOM AT LAST</section>
                        <section className='redirect'>Read more</section>
                    </section>
                </section>
            </section>
        </section>

    );
}