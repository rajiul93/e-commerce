import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
    const { registerUserPassword, error , user} =UseAuth();


    let navigate =  useNavigate();
    let location =  useLocation();
    let from = location?.state?.from?.pathname || "/Profile";
    user.email && navigate (from,{replace:true})


 

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        registerUserPassword(data.name,data.image,  data.email, data.password );
        console.log(data)};

    return (
        <section>
            <Navbar />
            <div className="container mt-4 col-lg-4" >
                <h1 className='fs-4 text-center'>Register</h1>

                <form onSubmit={handleSubmit(onSubmit)}  style={{ border: "1px solid white ", padding: "20px", backgroundColor: "white" }}>

                  <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input htmlFor='name' type="name" className="form-control "  {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">Enter your valid email</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input htmlFor='image' type="text" className="form-control "  {...register("image", { required: true })} />
                        {errors.name && <span className="text-danger">Enter your valid email</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input htmlFor='email' type="email" className="form-control "  {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Enter your valid email</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"{...register("password", { required: true })} />
                        {errors.password && <span className="text-danger">Enter your valid password</span>}
                        <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                        <p>{error}</p>
                    <input className="mt-2 "  style={{ backgroundColor: "transparent", border: "1px solid black", padding: "5px" }} type="submit" value='Register' />
                </form>
                <div className="mt-3">
                    <Link to="/Login" className="text-decoration-none text-black">
                        Already have an account?   <span className="text-decoration-underline text-primary">  Sign In</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Register;