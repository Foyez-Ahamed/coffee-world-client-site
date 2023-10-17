import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const CoffeeDetails = () => {
  const coffees = useLoaderData();
  

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex justify-center items-center mt-16">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={coffees.photo}
              alt="Movie"
            />
          </figure>
          <div className="p-3">
            <h2 className="card-title">Name :{coffees.name}</h2>
            <p>Supplier : {coffees.supplier}</p>
            <p>Taste : {coffees.taste}</p>
            <p> Quantity : {coffees.quantity} </p>
            <p>Details : {coffees.details}</p>
            <div className="card-actions justify-end mt-3">
              <Link to='/'><button className="btn text-black">Go Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
