import { url } from "inspector";
import styles from "../Advantage_Component/Advantage.module.css";

export interface IAdvantageItemProps {
  imgSrc: string;
  title: string;
  description: string;
  bgImage: string;
}

export default function AdvantageItem({
  imgSrc,
  title,
  description,
  bgImage,
}: IAdvantageItemProps) {
  return (
    <div
      className={styles.flipCard}
      style={{
        cursor: "pointer",
      }}
    >
      <div
        className={styles.flipCardFront}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.inner}>
          <img
            src={imgSrc}
            className={styles.icon}
            style={{ width: 150, height: 150 }}
          />

          <h3>{title}</h3>

          <p style={{ textAlign: "justify", padding: "0 10px" }}>
            {description}
          </p>
        </div>
      </div>

      <div
        className={styles.flipCardBack}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.inner}>
          <img
            src={imgSrc}
            className={styles.icon}
            style={{ width: 150, height: 150 }}
          />

          <h3 style={{ textAlign: "center" }}>{title}</h3>

          <p style={{ textAlign: "justify", padding: "0 10px" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
