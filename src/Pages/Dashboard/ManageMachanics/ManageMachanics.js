import React, { useEffect, useState } from "react";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
// import Product from "../../Shared/Product/Product";

const ManageMachanics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MECHANIC}/mechanic`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleRemoveProduct = (id) => {
    const isRemoveProduct = window.confirm("Are you sure delete this product?");
    if (isRemoveProduct) {
      fetch(`${process.env.REACT_APP_MECHANIC}/mechanic/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Machanic removed successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <h1 className="text-center fw-bold my-5">Our Machanics</h1>
      <Row>
        {products.map((product) => (
          <Col lg={4} sm={12}>
            <Card style={{ height: 350 }}>
              <Card.Img
                style={{ height: 150 }}
                variant="top"
                src={product.img}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
              <div>
                <Button
                  onClick={() => handleRemoveProduct(product._id)}
                  className="m-3"
                  variant="danger"
                >
                  Remove
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManageMachanics;
