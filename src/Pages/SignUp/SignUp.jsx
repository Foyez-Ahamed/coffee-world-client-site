import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

  const { userSignUp } = useContext(AuthContext);

//   console.log(userSignUp);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);

    userSignUp(email, password)
    .then(result => {
        console.log(result.user);

        const creationTime = result.user.metadata.creationTime;

        const newUser = {name, email, creationTime : creationTime };

        fetch('https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/users', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId) {
                Swal.fire({
                    title: 'success',
                    text: 'updated coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'Thanks'
                  })
            }

            form.reset();
        })
    })
    .catch(error => {
        console.log(error.message);
    }) 
    

  };

  return (
    <div>

      <Navbar></Navbar>

      <div className="flex justify-center items-center">
        <div className="shadow-lg p-10 rounded-lg">
          <div>
            <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
              Sign Up
            </h1>
          </div>

          {/* form start*/}
          <form onSubmit={handleSignUp}>
            <div className="relative">
              <label htmlFor="name">Name</label> <br />
              <input
                type="Text"
                placeholder="enter your name..."
                name="name"
                required
                className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs"
              />{" "}
              <br />
              <label htmlFor="photoURL">Photo URL</label> <br />
              <input
                type="text"
                placeholder="Photo URL..."
                name="photoURL"
                required
                className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs"
              />{" "}
              <br />
              <label htmlFor="email">Email address</label> <br />
              <input
                type="email"
                placeholder="enter your email..."
                name="email"
                required
                className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs"
              />{" "}
              <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                placeholder="enter your password"
                required
                name="password"
                className="mt-4 input bg-[#F3F3F3] w-[400px] max-w-xs"
              />
              <br />
              <input type="checkbox" name="terms" id="terms" className="mt-5" />
              <label htmlFor="terms" className="ml-2">
                Accepted our{" "}
                <a href="" className="text-[#403F3F]">
                  terms and conditions
                </a>
              </label>{" "}
              <br />
              {/* button  */}
              <input
                type="submit"
                value="Sign Up"
                className=" btn w-[400px] mt-5 font-bold bg-[#403F3F] text-white max-w-xs hover:bg-gray-600"
              />
            </div>
          </form>
          {/* form end */}

          {/* others content show here please */}
          <div className="mt-5">
            <p>
              {" "}
              Already have an account ?{" "}
              <Link
                to="/signIn"
                className="text-bold text-[#F75B5F] text-md uppercase underline"
              >
                Sign In
              </Link>{" "}
              <Link
                to="/signUpDetails"
                className="text-bold text-blue-700 text-md uppercase underline"
              >
                See details{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
