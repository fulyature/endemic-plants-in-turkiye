import { useState } from "react";

const ContainerCard = ({ type, src, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="img-wrapper">
      <div
        className="img-container"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <img className="image" src={src} alt="img" />
        {isVisible && <div className="info">{info}</div>}
      </div>
      <div className="type">{type}</div>
    </div>
  );
};

export default ContainerCard;
