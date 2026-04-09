import "../styles/About.css";

const About = () => {
    return (
        <>
            <section className="about">
                <div className="about-left">
                    <h2>
                        <span className="underline">Tomorrow</span> should <br />
                        be better than <span className="blob">today</span>
                    </h2>

                    <p>
                        We are a team of strategists, designers communicators, researchers.
                        Together, we believe that progress only happens when you refuse
                        to play things safe.
                        <br />
                        <span className="read-more">
                            Read More <span className="arrow">→</span>
                        </span>
                    </p>
                </div>

                <div className="about-right">
                    <div className="about-image circle img1"></div>
                </div>
            </section>

            <section className="about about-second">
                <div className="about-left">
                    <div className="about-image circle img2"></div>
                </div>

                <div className="about-right">
                    <h2>
                        See how we can help you{" "}
                        <span className="underline">progress</span>
                    </h2>

                    <p>
                        We add a layer of fearless insights and action that allows change
                        makers to accelerate their progress in areas such as brand, design
                        digital, comms and social research.
                        <br />
                        <span className="read-more">
                            Read More <span className="arrow">→</span>
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
