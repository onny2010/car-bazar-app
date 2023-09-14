import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import './HomeService.css'

const HomeService = () => {
  const [products, setProducts] = useState([]);
console.log("hello", process.env.REACT_APP_MECHANIC);
  useEffect(() => {
    // fetch(`https://car-bazar-server-site.vercel.app/products`)
    fetch(`https://car-bazar-server-site.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, []);

  const showProducts = products.slice(0, 6);

  return (
    <div className="products-section  py-3 px-4">
      <h1 className="text-center fw-bold my-4">Our Products</h1>
      <Row>
        {showProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default HomeService;
