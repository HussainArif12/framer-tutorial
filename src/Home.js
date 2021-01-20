import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  const variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <h1>Welcome home!</h1>
      <h1>Type of coffees:</h1>
      <ul>
        <li>
          <Link to={"/coffee/hot"}>Hot Coffees</Link>
        </li>
        <li>
          <Link to="/coffee/iced">Cold coffees</Link>
        </li>
      </ul>
    </motion.div>
  );
}
export default Home;
