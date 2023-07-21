import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MechanicCard from '../../Shared/MechanicCard/MechanicCard';

const Mechanics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_MECHANIC}/mechanic`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    const showProducts = products.slice(0, 6);
  
    return (
      <div className="products-section  py-3 px-4">
        <h1 className="text-center fw-bold my-4">Available Mechanics</h1>
        <Row>
          {showProducts.map((product) => (
            <MechanicCard key={product._id} product={product}></MechanicCard>
          ))}
        </Row>
      </div>
    );
};

export default Mechanics;