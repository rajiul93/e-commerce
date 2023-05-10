import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Payment = () => {
    let navigate =  useNavigate()
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        localStorage.setItem("payment_Mood", JSON.stringify(data.payment_mode));
        navigate("/Order")
        // console.log(data)
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container mt-5">
                <h1 className='text-center fs-4'>enter your  Payment mode</h1>
                <div className=" d-flex justify-content-center align-item-center">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="">
                            <label className='mb-2' htmlFor="amar_pay">
                                <input className='mx-1'
                                    {...register("payment_mode", { require: true })}
                                    type="radio"
                                    name="payment_mode"
                                    value="Amar Pay"
                                    id='amar_pay'
                                    checked
                                />
                                Amar Pay
                            </label>
                        </div>

                      <div className="">
                      <label className='mb-2' htmlFor="cash_on_delivery">
                            <input className='mx-1'
                                {...register("payment_mode", { require: true })}
                                type="radio"
                                name="payment_mode"
                                value="Cash On Delivery"
                                id="cash_on_delivery"
                            />
                            Cash On Delivery
                        </label>
                      </div>

                        <button type="submit" className='btn btn-dark  mt-3'>
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Payment;