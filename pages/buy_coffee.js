import React, { useState } from "react";
import Meta from "../Components/Meta";
import Hero from "../Components/Hero";
import How from "../Components/How";
import Options from "../Components/Options";
import styles from "../styles/Buy_coffee.module.scss";
import HowData from "../data/how";
import BuyOptionsData from "../data/buy_options";

const totalHowCards = () => {
  const cards = [];
  for (let i = 0; i < HowData.data.length - 1; i++) {
    cards.push(
      <div className={styles.line} key={i} />,
      <div className={styles.circle} key={i + 2} />
    );
  }
  return cards;
};

export default function Buy_coffee() {
  // Default key value for the options according to BuyOptionsData
  const keyIDs = [];
  const valueIDs = [];

  BuyOptionsData.data.map((item) => {
    keyIDs.push(item.data[0].id);
    valueIDs.push("");
  });

  var result = valueIDs.reduce(function (result, field, index) {
    result[keyIDs[index]] = field;
    return result;
  }, {});
  const [coffee, setCoffee] = useState(result);

  return (
    <>
      <Meta />
      <Hero
        title="Buy Coffee"
        description="We are best in business buy fresh and rich coffee from Us!"
      />

      <section className={styles.how_container}>
        <div className={styles.how_illustration}>
          <div className={styles.circle} />
          {totalHowCards()}
        </div>

        <div className={styles.how_card_container}>
          {HowData.data.map((data, key) => (
            <How key={key} {...data} />
          ))}
        </div>
      </section>

      <section className={styles.buy_options_container}>
        <div className={styles.buy_options_card_container}>
          {BuyOptionsData.data.map((option, key) => (
            <Options
              key={key}
              question={option.question}
              options={option.data}
              setSelected={(value) => {
                setCoffee({ ...coffee, ...value });
              }}
              selected={coffee}
            />
          ))}
        </div>
      </section>
    </>
  );
}
