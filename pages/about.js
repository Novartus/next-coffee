import Image from "next/image";
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

        <section className={styles.promise_container}>
          <div className={styles.promise_image_box}>
            <Image
              src="/assets/about/promise.jpg"
              alt="Our Promise"
              height="650"
              width="500"
            />
          </div>

          <div className={styles.promise_text_content}>
            <h2>Our Promise</h2>
            <p>
              Coffee is a plant (Coffea) and the name of the drink that is made
              from this plant. The coffee plant is a bush or tree that can grow
              up to ten meters (about 32 feet) high, but is usually cut shorter.
              Coffee plants originally grew in Africa, and now also grow in
              South America, Central America and Southeast Asia. They are an
              important crop for the economies of many countries.To make a drink
              from coffee beans, the beans must first be specially prepared by
              drying the beans and then roasting. The beans are dried a short
              time after they are picked. This preserves them and makes them
              ready to be packed or roasted. Before the beans are made into a
              drink, they must be roasted or ground (crushed into tiny pieces in
              a coffee mill). When the ground coffee is placed into boiling
              water, the flavour and dark brown colour of the beans goes into
              the water. Making coffee is called brewing coffee. There are
              several different ways that coffee can be brewed.
              <br />- Wikipedia
            </p>
          </div>
        </section>

        <section className={styles.quality_container}>
          <div className={styles.quality_image_box}>
            <Image
              src="/assets/about/quality-coffee.jpg"
              alt="Quality Work"
              height="500"
              width="800"
            />
          </div>

          <div className={styles.quality_text_content}>
            <h2>Quality means doing it right when no one is looking.</h2>
            <p>
              Quality is critical to satisfying our customers and retaining your
              loyalty so they continue to buy from us in the future. Quality
              products make an important contribution to long-term revenue and
              profitability. They also enable us to charge and maintain higher
              prices.
            </p>
          </div>
        </section>
        <br />
      </main>
    </>
  );
};
export default About;
