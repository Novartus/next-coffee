import Link from "next/link";
import Collection from "../Components/Collection";
import Meta from "../Components/Meta";
import Why from "../Components/Why";
import CoffeeCollectionData from "../data/coffee";
import WhyData from "../data/why";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Meta />

      <main>
        <section className={styles.hero_container}>
          <div className={styles.hero_content}>
            <h1>Great simple coffee.</h1>
            <p>
              Good communication is just as stimulating as black coffee, and
              just as hard to sleep after.
            </p>
            <Link href="/">
              <button className="button-primary">Find Out More</button>
            </Link>
          </div>
        </section>

        <section className={styles.collection_container}>
          <h2 className="alternate-title">Our Collection</h2>
          <div className={styles.collection_card_container}>
            {CoffeeCollectionData.data.map((coffee, key) => (
              <Collection key={key} {...coffee} />
            ))}
          </div>
        </section>

        <section className={styles.why_container}>
          <div className={styles.why_text_content}>
            <h2>Why choose us?</h2>
            <p>
              Because we’re easy to work with. We take the work seriously, but
              not ourselves. We’re not prickly, precious or pretentious.
              <br />- abccopywriting
            </p>
          </div>
          <div className={styles.why_card_container}>
            {WhyData.data.map((data, key) => (
              <Why key={key} {...data} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
