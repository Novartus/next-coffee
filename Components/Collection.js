import styles from "../styles/Collection.module.scss";

const Collection = ({ imageURL, title, description, altText }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={imageURL} alt={altText} width="200" height="151" />
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

Collection.defaultProps = {
  imageURL: "/assets/data/coffee-bean-bag.png",
  title: "NextJS Coffee Shop",
  description: "We are coming soon !",
  altText: "Coffee Collection",
};

export default Collection;
