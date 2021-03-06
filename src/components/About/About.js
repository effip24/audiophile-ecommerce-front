import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__contianer">
        <div className="about__info">
          <p className="about__title">
            Bringing you the <span className="about__title_orange">best</span>{" "}
            audio gear
          </p>
          <p className="about__text">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="about__img"></div>
      </div>
    </section>
  );
};
export default About;
