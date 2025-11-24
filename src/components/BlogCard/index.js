import { Col } from "react-bootstrap";
// import ph from "../../assets/placeholder.png";
import "./styles.css";

const BlogCard = ({ image, link, header, subtext, timing }) => {
  return (
    <Col md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="blog-card">
          <img src={image} alt="Spottr" className="w-100 pl-img" />
          <div className="blog-deet">
            <p className="blog-headline">{header}</p>
            <p className="blog-desc">{subtext}</p>
            <span className="d-flex justify-content-between">
              <span>READ NOW {">>"}</span>
              <span className="timing">{timing}</span>
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default BlogCard;
