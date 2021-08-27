import Meta from "../Components/Meta";
import Hero from "../Components/Hero";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <Meta />
      <main className="page-container">
        <Hero
          description="The original domesticated coffee plant is said to have been from Harar, and the native population is thought to be derived from Ethiopia with distinct nearby populations in Sudan and Kenya. Coffee was primarily consumed in the Islamic world where it originated and was directly related to religious practices."
          title="About us"
          imageClassName="white-image"
        />
      </main>
    </>
  );
};
export default About;
