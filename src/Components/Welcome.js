import '../Stylesheets/welcomefont.css';
import '../Stylesheets/Welcome.css';
import welcome from '../assets/welcome2.jpg'

export let Welcome = () => {
    return (
        <section className='content'>
            <section className='welcome_container'>
                <section className='welcome'>
                    <h1>WELCOME TO UNIVERSITY OF LAGOS</h1>
                    <section>
                    Congratulations on your admission to The University of First Choice and Nation’s Pride. We are delighted to welcome you to another new phase of your life, one that you can only experience once. The beauty of being a fresher is that you can only be a freshman once, after which you become a stay lite. Don't deny yourself the opportunity to create meaningful memories now that will last a lifetime. That's why we have made all the resources available to ensure you have a graceful experience on campus.
                    </section>
                    <section>
                    It's reassuring to know that it's not a crime to be a fresher or to be called one, as we were all once freshers ourselves. You can't become a stay lite unless you first experience being a fresher. So, while browsing through the content on this page, you will find all the necessary details to help you create wonderful memories on campus without making mistakes.
                    </section>
                </section>
                <section className='image'>
                    <img src={welcome} alt=""></img>
                </section>
            </section>
        </section>
    );
}