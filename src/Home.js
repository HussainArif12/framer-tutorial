import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  const [x, setX] = useCycle(10, 20, 40);
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
    pStyle: {
      x: x,
    },
  };
  return (
    <>
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
      <motion.p variants={variants} animate="pStyle">
        Hello World
      </motion.p>
      <motion.button onClick={() => setX()}>button</motion.button>
      <motion.div
        drag
        dragElastic={0.2}
        layout
        onDrag={(event, info) => {
          console.log(event);
        }}
        animate={{ backgroundColor: "blue", height: 10, width: 10 }}
      ></motion.div>
    </>
  );
}
export default Home;
