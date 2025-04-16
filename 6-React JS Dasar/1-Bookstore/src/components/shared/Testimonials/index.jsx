import styles from "./index.module.css";
import testimonials from "../../../Utils/testimonials";

export default function TestimonialCard() {
  return (
    <>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#03045E" }}>
        Apa Kata Mereka? 💬
      </h2>
      <div className={styles.sliderContainer}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.header}>
              <span style={{ color: "#fff", fontSize: "20px" }}>
                Testimonial
              </span>
            </div>
            <div className={styles.cardInner}>
              <div className={styles.profilePic}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.rating}>{"★".repeat(item.rating)}</div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
