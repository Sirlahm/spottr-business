import "./Feature1.css";

const Feature1 = ({ item: { title, desc, icon } }) => {
  return (
    <div className="featureItem1">
      <div className="item1Icon">
        <img src={icon} alt="Spottr" className="image" />
      </div>

      <p className="item1Title mb-4">{title}</p>
      <p className="item1Desc">{desc}</p>
    </div>
  );
};

export default Feature1;
