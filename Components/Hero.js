import styles from "../styles/Hero.module.scss";

const Hero = ({ imageClassName, title, description }) => {
  return (
    <>
      <section className={styles.container + ` ${imageClassName}`}>
        <div className={styles.text_content}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
};

Hero.defaultProps = {
  imageClassName: "white-image",
  title: "NextJS Coffee Shop",
  description: "We are coming soon !",
};

export default Hero;
