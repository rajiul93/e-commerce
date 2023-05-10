import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../Shared/Navbar/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Shipping = () => {
let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        localStorage.setItem("shipping", JSON.stringify(data));
        navigate("/payment")
        console.log(data)
    };
    // const shippingDetails = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem('shipping')) : {};

    return (
        <section className='bg-brand-container'>
            <Navbar />
            <div className="container mt-3">
            </div>

            <div className="col-lg-6 col-md-8  col-sm-8 " style={{ margin: "0 auto" }}  >
                <form onSubmit={handleSubmit(onSubmit)} style={{ border: "1px solid white ", padding: "20px", backgroundColor: "white" }}>
                    <h1 className='text-center fs-4'>Shipping Address </h1>

                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input
                            // value={shippingDetails.country}
                            placeholder='Ty pe Only Bangladesh'
                            htmlFor='country' type="country"
                            className="form-control "  {...register("country", { required: true })}
                        />
                        {errors.country && <span className="text-danger">Fell in the gap</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                            // value={shippingDetails.city}
                            htmlFor='city'
                            type="city"
                            className="form-control "  {...register("city", { required: true })}
                        />
                        {errors.city && <span className="text-danger">Fell in the gap</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="postal_code" className="form-label">Postal Code</label>
                        <input
                            // value={shippingDetails.postal_code}
                            htmlFor='postal_code'
                            type="postal_code"
                            className="form-control "  {...register("postal_code", { required: true })}
                        />
                        {errors.postal_code && <span className="text-danger">Fell in the gap</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            // value={shippingDetails.address}
                            htmlFor='address'
                            type="address"
                            className="form-control "  {...register("address", { required: true })}
                        />
                        {errors.address && <span className="text-danger">Fell in the gap</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Phone Number</label>
                        <input
                            // value={shippingDetails.number}
                            htmlFor='number'
                            type="number"
                            className="form-control "  {...register("number", { required: true })}
                        />
                        {errors.number && <span className="text-danger">Fell in the gap</span>}
                    </div>





                    <input className="mt-2 " style={{ backgroundColor: "transparent", border: "1px solid black", padding: "5px" }} type="submit" value='continue' />
                </form>
            </div>

            <Footer />

        </section>
    );
};

export default Shipping;