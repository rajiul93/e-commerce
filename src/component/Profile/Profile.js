import React from 'react';
import UseAuth from '../../hooks/useAuth';
import Footer from '../Shared/Navbar/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import "./Profile.css";

const Profile = () => {
    const shippingDetails = JSON.parse(localStorage.getItem("shipping"));



    const { logOut, user } = UseAuth();
    const { displayName, email, photoURL } = user;
    return (
        <section className='bg-brand bg-brand-container' >
            <Navbar />
            <div className='container text-center'>
                Profile
                <br />
                <div className="shippingDetails_span_container ">
                    {shippingDetails ? <span className='shippingDetails_span'>
                        <p><span>Name: </span>{displayName}</p>
                        <p><span>Email:</span> {email}</p>
                        <p><span>country:</span> {shippingDetails.country} <span> City : </span>{shippingDetails.city}</p>
                        <p><span>Address:</span> {shippingDetails.address}</p>
                        <p><span>Number:</span> {shippingDetails.number}</p>
                        <p><span>Postal Code: </span>{shippingDetails.postal_code}</p>
                    </span> : <button className='btn btn-secondary'>Add address</button>}
                    <img className='img-fluid' width={100} src={photoURL} alt="" />
                </div>
                <button onClick={logOut} className='bg-danger btn mt-3 '>Log Out</button>
            </div>

            <Footer />
        </section>
    );
};

export default Profile;