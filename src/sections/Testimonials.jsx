import "../styles/Testimonials.css";

const Testimonials = () => {
    return (
        <section className="testimonials">

            <h2 className="testimonials-title">
                <span className="highlight">What</span> our customer <br />
                says <span className="underline">About Us</span>
            </h2>

            <div className="testimonial-box">
                <p>
                     Elementum delivered the site within the timeline as they requested.
                    In the end, the client found a 50% increase in traffic within 6 months.
                    They also had an impressive ability to use technologies that the company
                    hasn’t used, which have also proved to be easy to use and reliable 
                </p>
            </div>

            {/* Floating images */}
            <img src="/i1.png" className="avatar avatar1" />
            <img src="/i2.png" className="avatar avatar2" />
            <img src="/i3.png" className="avatar avatar3" />
            <img src="/i4.png" className="avatar avatar4" />
            <img src="/i5.png" className="avatar avatar5" />

        </section>
    );
};

export default Testimonials;