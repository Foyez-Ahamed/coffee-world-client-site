import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import CoffeesCard from "../../Components/CoffeesCard/CoffeesCard";


const Home = () => {

    const loadedCoffees = useLoaderData();
    
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <Navbar></Navbar>

            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeesCard key={coffee._id} coffee={coffee} coffees = {coffees} setCoffees = {setCoffees}></CoffeesCard>)
                }
            </div>

        </div>
    );
};

export default Home;