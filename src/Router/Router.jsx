import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import SignIn from "../Pages/SignIn/SignIn";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import SignUp from "../Pages/SignUp/SignUp";
import SignUpDetails from "../Components/SignUpDetails/SignUpDetails";

const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/coffee')
            },

            {
                path:"/coffeeDetails/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params}) => fetch(`https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/coffee/${params.id}`)
            },

            {
                path:"/addCoffee",
                element: <AddCoffee></AddCoffee>
            },

            {
                path:"/updateCoffee/:id",
                element:<UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/coffee/${params.id}`)

            },

            {
                path: "/signUp",
                element:<SignUp></SignUp>
            },

            {
                path: "/signUpDetails",
                element : <SignUpDetails></SignUpDetails>,
                loader: () => fetch('https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/users')
            },

            {
                path:"/signIn",
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default MyCreatedRouter;