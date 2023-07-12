import ContainerCard from "./ContainerCard";
import { data } from "../helper/data";

const Homepage = () => {
  return (
    <div className="home-cantainer">
      <h1>ENDEMIC PLANTS IN TURKIYE</h1>
      <div className="container">
        {data.map((data) => {
          const { type, img, info } = data;
          return <ContainerCard type={type} src={img} info={info} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
