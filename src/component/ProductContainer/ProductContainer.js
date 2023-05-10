import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProductData from "../../Data/ProductData.json";
import Footer from '../Shared/Navbar/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { addToDB } from '../utilities/utilitiesDtb';


const ProductContainer = () => {
    const { id }= useParams();
    const product = ProductData.find(product=>product.id ===id);
   
    const [cart, setCart] = useState([]);
    const addToCart = (product)=>{
    setCart([...cart, product])
    addToDB(product.id);
    
    Swal.fire(
        'Successful!',
        `You have added ${product.name}!`,
        'success'
      )
} 
const navigate = useNavigate()
    
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar></Navbar>
            <div className="container ">
                <h1 className='fs-4 mt-5 text-center'>Product Details</h1>
                <div className="row">
                    <div className="col-lg-4" style={{justifyContent:'center', alignItem:'center'}}>
                        <img src={product.image} className='img-fluid mx-auto d-block' alt={product.name}  style={{borderRadius:'1rem', width:'250px'}} />

                        <div  style={{display:'flex', justifyContent:'center', alignItem:'center', marginBottom:"20px"}}>
                        <button onClick={()=>{addToCart(product)}} className='btn btn-warning mt-4'>Add to cart</button>
                        <button onClick={()=>navigate("/Shipping")} className='btn btn-success mt-4 ms-2'>Buy Now</button>
                        </div>


                    </div>
                    <div className="col-lg-8" style={{backgroundColor:'white', borderRadius:'.5rem' , padding:"2rem", boxShadow:'0 5px 10px white', border:'2px solid white'}}>
                        <h2 className='fs-5'>Product Name: {product.name}</h2>
                        <hr />
                        <h4  className='fs-5'>Description:</h4>
                        {product.description}
                        <hr />
                        <p>Price: {product.price}/= TK</p>

                    </div>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ProductContainer;