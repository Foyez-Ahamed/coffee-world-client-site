import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-16 py-5"> 

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;