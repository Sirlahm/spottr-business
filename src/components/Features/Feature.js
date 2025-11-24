import "./Feature.css";

const Feature = ({ item: { title, desc } }) => {
  return (
    <div className=" featureItem">
      <p className="itemTitle">{title}</p>
      <p className="itemDesc">{desc}</p>
    </div>
  );
};

export default Feature;
