import senate from '../assets/senate.jpeg';
import '../Stylesheets/welcomefont.css';
import '../Stylesheets/Welcome.css';

export let AboutUs = () => {
    return (
        <section>
            <section className='welcome_container'>
                <section className="welcome left">
                    <h1>ABOUT UNIVERSITY OF LAGOS</h1>
                    <section>
                    The University of Lagos was founded in 1962. It presently has three Campuses in Yaba and Surulere. Whereas two of its Campuses are located in Yaba (the main campus in Akoka and the recently created campus at the former School of Radiography), its College of Medicine is located in Idi-Araba, Surulere. It is remarkable that all the three campuses are located in the Mainland of Lagos. Its main campus is largely surrounded by the scenic view of the Lagos lagoon on 802 acres of land in Akoka, North Eastern part of Yaba.
                    </section>
                    <section>
                    From a modest intake of 131 students in 1962, enrolment in the university has now grown to over 40,000. The University’s staff strength is 3,365 made up as follows: 1,386 Administrative and Technical, 1,164 Junior and 813 Academic Staff.
                    </section>
                    <section>
                    University of Lagos currently has twelve Faculties, namely, Arts, Basic Medical Sciences, Business Administration, Clinical Sciences, Dental Sciences, Education, Engineering, Environmental Sciences, Law, Pharmacy, Science, and Social Sciences. UNILAG, as the university is fondly called, also offers Master’s and Doctorate degrees in most of the aforementioned programmes. In addition, it has two Centres, namely, the Centre for Human Rights and the Centre for African Regional Integration and Borderland Studies. The Distance Learning Institute (DLI) of the University also offers courses in Accounting, Business Administration, Science Education and Library / Information Sciences.
                    </section>
                </section>
                <section className='image right'>
                    <img src={senate} alt=""></img>
                </section>
            </section>
        </section>
    );
}