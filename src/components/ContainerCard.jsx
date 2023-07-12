const ContainerCard = ({ type, src }) => {
  return (
    <div className="img-wrapper">
      <div className="img-container">
        <img className="image" src={src} alt="img" />
      </div>
      <div className="type">{type}</div>
    </div>
  );
};

export default ContainerCard;
