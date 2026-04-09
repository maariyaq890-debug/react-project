import "../styles/Services.css";

const servicesData = [
    {
        small: "Office of multiple interest content",
        title: "Collaborative & partnership",
    },
    {
        small: "The hanger US Air force digital experimental",
        title: "We talk about our weight",
    },
    {
        small: "Delta faucet content, social, digital",
        title: "Piloting digital confidence",
    },
];

const ServiceRow = ({ small, title }) => {
    return (
        <div className="service-row">
            <p className="service-small">
                <p className="service-small">{small}</p>
            </p>
            <h3>{title}</h3>
            <span>→</span>
        </div>
    );
};

const Services = () => {
    return (
        <section className="services">
            <h2 className="services-title">
                What we <span className="highlight">can</span> <br />
                <span className="underline">offer</span> you!
            </h2>

            <div className="services-list">
                {servicesData.map((item, index) => (
                    <ServiceRow
                        key={index}
                        small={item.small}
                        title={item.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;