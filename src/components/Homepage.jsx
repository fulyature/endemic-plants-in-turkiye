import ContainerCard from "./ContainerCard";
import { data } from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1>ENDEMIC PLANTS IN TURKIYE</h1>
      <div className="container">
        {data.map((data) => {
          const { type, img } = data;
          return <ContainerCard type={type} src={img} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
