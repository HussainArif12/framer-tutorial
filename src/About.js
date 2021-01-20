import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <h1>Simple About page</h1>
      <p>Built with React!</p>
    </motion.div>
  );
}
export default About;
