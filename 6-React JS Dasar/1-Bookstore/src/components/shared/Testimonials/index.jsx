import styles from "./index.module.css";

export default function TestimonialCard() {

  // Array testimoni
  const testimonials = [
    {
      name: "Jake",
      role: "Penyanyi",
      rating: 5,
      text: "Bukunya bagus banget! Pengiriman cepat dan aman.",
      image:
        "https://i.namu.wiki/i/pYOrpdCECy9T2gt1_Pgf8iJEEqp-z_gJz8clGuMzTiAm_qrPTNuq86OL3MooT2n3vH5BZc0h2v6i8h0cMPkmPw.webp",
    },
    {
      name: "Zayn Malik",
      role: "Penyanyi",
      rating: 5,
      text: "Pesan di Bukabuku selalu memuaskan.",
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/03/896/500/Zayn-Malik-GETTY.jpg?ve=1&tl=1",
    },
    {
      name: "Justin Bieber",
      role: "Penyanyi",
      rating: 5,
      text: "Suka banget sama koleksi bukunya. Banyak pilihan menarik!",
      image:
        "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg",
    },
  ];

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
