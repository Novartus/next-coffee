import Image from "next/image";
import styles from "../styles/Why.module.scss";
const Why = ({ imageURL, title, description, altText }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image_box}>
          <Image src={imageURL} alt={altText} height="72" width="72" />
        </div>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

Why.defaultProps = {
  imageURL: "/assets/data/coffee-bean-bag.png",
  title: "NextJS Coffee Shop",
  description: "We are coming soon !",
  altText: "Why choose us ?",
};

export default Why;
