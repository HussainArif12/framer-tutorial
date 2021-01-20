import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Coffee() {
  let params = useParams();
  const [data, setData] = useState([]);
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
  const fetchData = () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(params);
  }, []);

  return (
    <motion.div
      exit="exit"
      animate="animate"
      initial="initial"
      variants={variants}
      transition={{ duration: 1 }}
    >
      {data.map((item) => (
        <p key={item.id}>
          <Link to={`/coffee/${params.type}/${item.id}`}>{item.title}</Link>
        </p>
      ))}
    </motion.div>
  );
}

export default Coffee;
