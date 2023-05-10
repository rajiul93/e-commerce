import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Order = () => {
    const shippingDetails = JSON.parse(localStorage.getItem("shipping"));
    let { country, city, address, number, postal_code } = shippingDetails;

    const payment_mode = JSON.parse(localStorage.getItem("payment_Mood"));

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container col-md-8 col-sm-12">

                <h2 className='fs-5 mt-3 text-center'>Shipping Summary</h2>
                <h2 className='fs-5 mt-5'>Shipping Details</h2>
           <hr />

                <p className='m-1'>country: {country}  City : {city}</p>
                <p className='m-1'>Address: {address}</p>
                <p className='m-1'>Number: {number}</p>
                <p className='m-1'>Postal Code: {postal_code}</p>
                <hr />
                <h2 className='fs-5'>Payment Mode</h2>
                Payment Mode: {payment_mode}
                <hr />
                <h2 className='fs-5'>Order Items</h2>
            </div>
        </section>
    );
};

export default Order;