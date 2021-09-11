import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import styles from "../styles/Options.module.scss";

const OptionCard = ({ option, selected, setSelected, optionType }) => {
  const data = { [option.id]: option.value };
  return (
    <div
      className={
        selected
          ? `${styles.option_container} ${styles.selected}`
          : styles.option_container
      }
      onClick={() => setSelected(data)}
    >
      <h4>{option.value}</h4>
      <p>{option.description}</p>
      <br />
      {optionType === "bean" && <h3>Price: ${option.price}/kg</h3>}
      {optionType === "grind" && <h3>Fees: ${option.fees}</h3>}
    </div>
  );
};

const Options = ({ question, options, selected, setSelected, optionType }) => {
  const [modalToggle, setModalToggle] = useState(false);

  // on initial page load open the first question
  useEffect(() => {
    if (options[0].id === "Q1") {
      setModalToggle(true);
      setDropDownClicked(true);
    }
  }, []);

  const [dropDownClicked, setDropDownClicked] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.question_container}
          onClick={() => {
            setModalToggle(!modalToggle);
            setDropDownClicked(!dropDownClicked);
          }}
        >
          <h4>{question}</h4>

          {dropDownClicked ? (
            <IoIosArrowDropupCircle size={40} />
          ) : (
            <IoIosArrowDropdownCircle size={40} />
          )}
        </div>

        {modalToggle && (
          <div className={styles.options_container}>
            {options.map((option, key) => (
              <OptionCard
                optionType={optionType}
                setSelected={setSelected}
                key={key}
                option={option}
                selected={selected[option.id] === option.value}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

// Options.defaultProps = {

// };

export default Options;
