import Link from "next/link";
import Collection from "../Components/Collection";
import Meta from "../Components/Meta";
import CoffeeCollectionData from "../data/coffee";
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
      </main>
    </>
  );
};
export default Home;
