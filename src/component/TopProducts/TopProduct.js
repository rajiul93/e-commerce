import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProductData from "../../Data/ProductData.json";
import { addToDB } from '../utilities/utilitiesDtb';

const TopProduct = () => {
    const navigate = useNavigate()

    // console.log(ProductData)
    let topProduct =[];
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random()* ProductData.length);
        
        if (!topProduct.includes(ProductData[number])) {
            topProduct.push(ProductData[number])
        }
        else{
            i--;
        }
        
    }
    const [cart, setCart] = useState([]);
    const addToCart = (product)=> {
        setCart([...cart, product])
        addToDB(product.id);

        Swal.fire(
            'Successful!',
            `You have added ${product.name}!`,
            'success'
          )
    } 

    return (
        <section className='container'>

            <div className='row product-container justify-content-center align-item-center ' style={{ textAlign:"left" }}>
                {
                    topProduct.map((product) => {
                        return ( 
                            <div key={product.id} className="cart-deck col-lg-3 col-md-5 col-sm-8 mx-1">
                                <div className="cart" style={{width:"100%"}}>
                                <Link to={`/productContainer/${product.id}`} className="text-decoration-none">

                                    <img src={product.image} alt={product.name} className= "card-ing-top img-fluid mx-auto d-block" />
                                </Link>
                                        
                                <div className=' d-flex justify-content-between  align-item-left container'>
                                    <div className='card-body mt-3  col-sm-6 '>
                                            <h5 className='card-title fs-6'> {product.name}</h5>
                                            <p className='card-text'>Price: {product.price}TK</p>
                                    </div>
                                    <div  className='d-flex col-sm-6 mx-2' >
                                            <div className="col-sm-6" onClick={()=>{
                                                navigate(`/productContainer/${product.id}`)
                                            }}>
                                            <button className='  btn btn-outline-dark my-3' >Details</button>
                                            </div>
                                            <div className=" col-sm-6 mx-3">
                                                <button className='btn btn-outline-secondary my-3 ms-2' onClick={()=>{addToCart(product)}}>Cart</button>
                                            </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                          )
                    }
              
                  )
                }
                  
            </div>
        </section>
    );
};

export default TopProduct;