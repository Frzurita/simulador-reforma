import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__glow landing__glow--a" aria-hidden />
      <div className="landing__glow landing__glow--b" aria-hidden />
      <div className="landing__grain" aria-hidden />

      <main className="landing__main">
        <motion.p
          className="landing__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Para ti
        </motion.p>

        <motion.h1
          className="landing__name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Coral
        </motion.h1>

        <motion.p
          className="landing__age"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Feliz 31
        </motion.p>

        <motion.p
          className="landing__letter"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Gracias por construir conmigo una vida que, incluso en los días más
          caóticos, se siente como un hogar.
          <br />
          <br />
          Te quiero.
          <span className="landing__sign">— Fran</span>
        </motion.p>

        <motion.div
          className="landing__actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          <Link className="landing__cta" to="/simulacion-reforma">
            Hay algo esperándote
          </Link>
          <p className="landing__bridge">
            Y como no sabemos vivir sin un poco de caos… Tendrás que superar un pequeño desafío para ver tus regalos.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
