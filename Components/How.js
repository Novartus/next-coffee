import styles from "../styles/How.module.scss";
const How = ({ title, description, number }) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.number}>{number}</span>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

How.defaultProps = {
  title: "Magic",
  description: "We believe in magical coffee",
  number: "00",
};

export default How;
