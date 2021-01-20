import logo from "./logo.svg";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
function App() {
  const [disappear, setDisappear] = useState(false);
  const variants = {
    deleted: {
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="App">
      <motion.h1
        initial={{ y: 250 }}
        animate={{ y: 10 }}
        whileHover={{ scale: 10 }}
        transition={{ duration: 0.5 }}
      >
        <h1> Hello world </h1>
      </motion.h1>
      <motion.div whileHover="deleted" variants={variants}>
        <p>Hello</p>
      </motion.div>
      <AnimatePresence>
        {!disappear && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            This is animate presence!
          </motion.p>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scaleX: 2, scaleY: 2 }}
        onClick={() => setDisappear((prevState) => !prevState)}
      >
        Appear/Disappear
      </motion.button>
    </div>
  );
}

export default App;
