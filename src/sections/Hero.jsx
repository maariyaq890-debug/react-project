import "../styles/Hero.css";

const Avatar = ({ className, img }) => {
    return (
        <div
            className={`avatar ${className}`}
            style={{ backgroundImage: `url(${img})` }}
        ></div>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <h1>
                The <span className="underline">thinkers</span> and <br />
                doers were <span className="highlight pink">changing</span> <br />
                the <span className="highlight green">status</span> Quo with
            </h1>

            <p>
                We are a team of strategists, designers, communicators, researchers.
                Together,<br />
                we believe that progress only happens when you refuse to play things safe.
            </p>

            <div className="hero-avatars">
                <Avatar className="a1" img="/p1.png" />
                <Avatar className="a2" img="/p2.png" />
                <Avatar className="a3" img="/p3.png" />
                <Avatar className="a4" img="/p4.png" />
                <Avatar className="a5" img="/i2.png" />
                <Avatar className="a6" img="/i4.png" />
                <Avatar className="a7" img="/i5.png" />
            </div>
        </section>
    );
};

export default Hero;