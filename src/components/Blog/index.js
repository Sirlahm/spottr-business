import { Row, Col } from "react-bootstrap";
import FilterResults from 'react-filter-search'
import Card from "../../components/BlogCard";
import cards from './data'
import "./styles.css";
import { useState } from "react";

const Blog = () => {
  const [search, setSearch] = useState('')

  function handleChange(e){
      setSearch(e.target.value)
  }
  
  return (
    <>
      <div className="text-center blog-header pt-5">
        Simple guide to using the spottR platform
      </div>
      <div className="text-center mt-3 blog-subtitle">
        Useful and actionable information that helps you focus on building and
        effectively growing a successful business that people will love.
      </div>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <input
            type="text"
            onChange={handleChange}
            className="input-field w-100 reg24 mt-5"
            placeholder="Search article"
          />
        </Col>
        <Col md={2} />
      </Row>
      <Row className="mt-5 mb-5">
        <FilterResults
          value={search}
          data={cards}
          renderResults={result => (
            <Row className="mt-5 mb-5">
              {result.map((card,index) => (
                <Card 
                key={index}
                image={card.img}
                header={card.header}
                subtext={card.subtext}
                timing={card.timing}
                link={card.link}
              />
              ))}
            </Row>
          )}
        />
        
      </Row>
    </>
  );
};

export default Blog;
