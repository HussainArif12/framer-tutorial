import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
function CoffeeInfo() {
  let params = useParams();
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}/${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIngredients(data.ingredients);
      });
  };
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
  useEffect(() => {
    fetchData();
    console.log(params);
    //console.log(ingredients);
  }, []);
  return (
    <motion.div
      variants={variants}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <p>ingredients</p>
      {ingredients.map((item) => (
        <p>{item}</p>
      ))}
    </motion.div>
  );
}
export default CoffeeInfo;
