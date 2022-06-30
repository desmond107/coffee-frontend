import React from 'react';
import Prodducts from './Prodducts';

const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white">
  <img src="/assets/cofe1.jpeg" className="card-img" alt="Background" height="700px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container"></div>
    <h5 className="card-title display-3" fw-bolder mb-0>NEW BARISTA SPECIAL</h5>
    <p className="card-text fw-bold">
      KAHAWA KAMA DAWA
      </p>
    
  </div>
</div>
<Prodducts/>
        </div>
  )
}

export default Home