import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
const Hire = () => {
  const { user,setOrderData,product, setProduct } = useAuth();
  const [record,setRecord] = useState({})
  const { id } = useParams();
  const history = useHistory()
  useEffect(() => {
    fetch(`${process.env.REACT_APP_MECHANIC}/mechanic/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id,setProduct]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_MECHANIC}/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecord(data.find(d => d.email===user?.email));
    });
}, [user.email]);
console.log(record)

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!data.name) {
      data.name = user.displayName;
    }
    if (!data.email) {
      data.email = user.email;
    }
    const productName = product.name;
    let productPrice
    if (record?.payment==='complete') {
        productPrice = 10;  
    }else{
        productPrice = product.price;
    }
    const status = "Pending";
    const payment = "payment";
    const submittedData = { ...data, productName, productPrice, status, payment };
      setOrderData(submittedData)
      history.push("/payment")
  };


  const { name, img, price, description } = product;
  return (
    <div>
      <Container className="booking-sections">
        <Row>
          <Col lg={6} sm={12}>
            <h1 className="text-center fw-bold my-5">Please Fill the form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-3"
                defaultValue={user.displayName}
                {...register("name")}
                disabled
              />
              <input
                className="form-control mb-3"
                defaultValue={user.email}
                {...register("email")}
                disabled
              />
              <input
                className="form-control mb-3"
                placeholder="Your Address"
                {...register("address", { required: true })}
              />
              <input
                className="form-control mb-3"
                placeholder="Your Phone"
                type="number"
                {...register("phone", { required: true })}
              />
              <input type="submit" />
            </form>
          </Col>
          <Col lg={6} sm={12}>
            <img className="product-details-image" src={img} alt="" />
            <h3 className="product-name">Mechanic : {name}</h3>
            <h4 className="price">Charge: ${record?.payment==='complete' ? 10 : price}</h4>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hire;
