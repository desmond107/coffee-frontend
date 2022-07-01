import React, {useState, useEffect} from 'react';

const Prodducts = () => {

    const [data, setData] =useState([]);
    const [filter, setFilter] =useState(data);
    const [loading, setLoading] =useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("link here");

            if (componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)

            }
            return() => {
                componentMounted = false;
            }
        }
          getProducts();
       },[]);

       const Loading = () => {

        return( <>
        Loading....
        </>
        )
       }
       const ShowProducts = () => {

        return(
            <>
            <div className='buttons d-flex justify-content-center mp-5 pb-5'>
            <button className='btn btn-outline-dark'>All</button>
            <button className='btn btn-outline-dark'>Coffee Beans</button>
            <button className='btn btn-outline-dark'>Ground Coffee</button>
            <button className='btn btn-outline-dark'>Take-away Coffee</button>
            <button className='btn btn-outline-dark'>Coffee-Blends</button>
            <button className='btn btn-outline-dark'>Hybrid coffee</button>
            
        </div>
        {filter.map((Prodducts)=>{
            return(
                <>
                <div className='col-md-3' >
                <div class="card h-100 text-center p-4 " key={product.id}>
  <img src={Prodducts.image} class="card-img-top" alt={Prodducts.title}/>
  <div class="card-body">
    <h5 class="card-title">{Prodducts.title}</h5>
    <p class="card-text">${Prodducts.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                </>
            )
        })}
            </>
        )

        
       }

     return (
         <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Our Products</h1>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading? <Loading/> : <ShowProducts/> }
                </div>
            </div>
        </div>
           );
}

export default  Prodducts