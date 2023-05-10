import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import product from '../../Data/ProductData.json';
import Footer from '../Shared/Navbar/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { getStoredCart, removeCartItem, removeSingleItem } from '../utilities/utilitiesDtb';

const Cart = () => {
    const navigate = useNavigate();
    const [disable, setDisable] = useState(true);
    const shippingDetails = JSON.parse(localStorage.getItem("shipping"));


    const handelClick = () => {
        if (shippingDetails && cart.length > 0) {
            navigate('/payment')
            
        }
        else if(cart.length > 0){
            navigate('/Shipping')

        } 
        else {
            Swal.fire(
                'Error!',
                `You have no product!`,
                'error'
            )
        }
    }

    useEffect(() => {
        if (cart.length > 0) {
            setDisable(false)
            document.getElementById('btn_check_out').className = "btn btn-success mx-auto d-block"
        }
        //eslint-disable-next-line
    }, [])


    let savedCart = getStoredCart().cart
    let cart = [];
    for (let key in savedCart) {
        cart.push({
            ...product.find(pd => pd.id === key),
            quantity: savedCart[key]
        })
    }
    // console.log(cart)

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className='fs-5 '>Shopping Cart </h1>
                        {
                            cart?.length > 0 ?
                                <div className="table-responsive">
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Image</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Sub Total</th>
                                                <th scope="col">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((product, index) =>
                                                <tr key={index + 1}>
                                                    <th><img style={{ width: "40px" }} src={product.image} alt={product.name} /></th>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.price * product.quantity}</td>
                                                    <td><button onClick={() => removeSingleItem(product.id)} className='btn btn-danger'>Remove</button></td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table>
                                        <button onClick={() => removeCartItem()} className='btn btn-danger'> Remove all Item</button>
                                </div> :
                                <p>Your Cart is now Empty <Link to='/Product'>Go Back</Link> </p>
                        }
                    </div>
                    <div className="col-lg-3">
                        <div className="p-2" style={{ border: "1px solid gray" }}>
                            <h2 className='fs-5 text-center'>Total Items: {cart.reduce((a, b) => { return a + b.quantity }, 0)}</h2>
                            <h3 className='fs-5 text-center'>Total Price: {cart.reduce((a, b) => { return a + b.quantity * b.price }, 0)} Taka</h3>
                        </div>
                        <div onClick={() => handelClick()} className='py-2' style={{ border: "1px solid gray", borderTop: "0" }}>
                            <button id='btn_check_out' className="btn btn-secondary mx-auto d-block" disabled={disable}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>

    );
};

export default Cart;