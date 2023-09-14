import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MechanicCard from '../Shared/MechanicCard/MechanicCard';

const AllMechanic = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
      fetch(`https://car-bazar-server-site.vercel.app/mechanic`)
        .then((res) => res.json())
        .then((data) => {
          if(searchText?.length > 0){
            const matchedProducts = data?.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
            setProducts(matchedProducts);
          }
          else{
            setProducts(data)
          }
        });
    }, [searchText]);
    return (
        <div className="products-section  py-3 px-4">
        <h1 className="text-center fw-bold my-4">All Mechanics Here</h1>
        <div className="text-center">
          <input type="search" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search"/>
        </div>
        <Row>
          { products?.length === 0 ?
            <h2>No Mechanics Available</h2>
            :
            products.map((product) => (
            <MechanicCard key={product._id} product={product}></MechanicCard>
          ))}
        </Row>
      </div>
    );
};

export default AllMechanic;