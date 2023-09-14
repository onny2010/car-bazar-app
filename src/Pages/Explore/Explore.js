import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Product from "../Shared/Product/Product";

const Explore = () => {
  const { searchText } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://car-bazar-server-site.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        if(searchText?.length > 0){
          const matchedProducts = data?.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
          setProducts(matchedProducts);
        }
        else{
          setProducts(data)
        }
      })
      .catch(err => console.log(err))
  }, [searchText]);

  return (
      <Container>
        <h1 className="text-center fw-bold my-5">Our All Products</h1>
        <Row>
          { products?.length === 0 ?
            <h2>Not Show Any Product</h2>
            :
            products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </Container>
  );
};

export default Explore;
