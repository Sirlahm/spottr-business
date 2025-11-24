import { Container } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bg from "../components/Blog";

import "./contact.css";
import Pattern from "../assets/pattern.png";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Container className="">
        <Bg />
      </Container>
      <Footer />
      <img src={Pattern} alt="Pattern" className="pattern" />
    </>
  );
};

export default Blog;
