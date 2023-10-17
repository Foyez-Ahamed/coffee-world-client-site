import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";


const SignIn = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="flex justify-center items-center">

            <div className="shadow-lg p-10 rounded-lg">

            <div>
            <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6"> Sign In </h1>
            </div>

            {/* form start*/}
            <form>

            <div className="relative">
            <label htmlFor="email">Email address</label> <br /> 
            <input type= "email"
             placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs" /> <br />

            <label htmlFor="password">Password</label> <br />
            <input type = "password" placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[400px] max-w-xs"/>
             <br />

            <h1 className="mt-3 cursor-pointer text-[#403F3F]">Forgot password ? </h1>

             {/* button  */}
            <input type="submit" value= "Login" className=" btn w-[400px] mt-5 font-bold bg-[#403F3F] text-white max-w-xs hover:bg-gray-600" />
            </div>

            </form>
            {/* form end */}

            {/* others content show here please */}
            <div className="mt-5">
                <p>Do not have an account ? <Link to='/signUp' className="text-bold text-[#F75B5F] text-md uppercase underline">Sign Up</Link></p>
            </div>

        </div>
    </div>
            
        </div>
    );
};

export default SignIn;