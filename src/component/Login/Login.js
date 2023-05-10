import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import gitHubImage from "../../images/github.png";
import googleImage from "../../images/google.png";
import Footer from '../Shared/Navbar/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


const Login = () => {
  const {user, google, github, logIn, error} = UseAuth();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || '/product';
 
  user.email && navigate(from, {replace:true});

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    
    logIn(data.email , data.password)
    console.log(data)
  };

  return (
    <section >
      <Navbar />
      <h2 className="text-center mt-4 fs-4"> Sign In</h2>
      <div className="container mt-3  col-lg-4 ">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        style={{ border: "1px solid white ", padding: "20px", backgroundColor: "white" }}
        >

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
            htmlFor='email' 
            type="email" 
            className="form-control "  {...register("email", { required: true })} 
            />

            {errors.email && <span className="text-danger">Enter your valid email</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="password"{...register("password", { required: true })} 
            />

            {errors.password && <span className="text-danger">Enter your valid password</span>}
            <div id="email" className="form-text">We'll never share your email with anyone else.</div>
          </div>
<p>{error} </p>
          <input className="mt-2 text-white bg-primary" style={{outline: "0px  blue", border:"none",borderRadius:"2px" , padding: "5px" }} type="submit" value='Sign In' />

        </form>
        <div className="mt-3">
          <Link to="/Register" className="text-decoration-none text-black">
            Don't have an account?   <span className="text-decoration-underline text-primary">  Register a new account</span>
          </Link>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className=" col-sm-2"><hr /></div>
          <p className="text-center mt-2 px-3"> or Sign Using</p>
          <div className=" col-sm-2"><hr /></div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button onClick={google} style={{ margin: "4px", border: "1px solid black", paddingRight: "7px", backgroundColor: "transparent" }}> <img src={googleImage} alt="" /> google</button>
          <button onClick={github} style={{ margin: "4px", border: "1px solid black", paddingRight: "7px", backgroundColor: "transparent" }}> <img src={gitHubImage} alt="" /> gitHub</button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;