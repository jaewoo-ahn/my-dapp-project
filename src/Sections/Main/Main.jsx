import axios from "axios";
import {useEffect, useState} from "react";
import {PortfolioCard, Introduce, Contact} from "../../Components/index";

const Footer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <main>
      <Introduce />
      <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
        {data.map((res) => {
          return <PortfolioCard img={res.thumbnailUrl} />;
        })}
      </ul>
      <Contact />
    </main>
  );
};

export default Footer;
