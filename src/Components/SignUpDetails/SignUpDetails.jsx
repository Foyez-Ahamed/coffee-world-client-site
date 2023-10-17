import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SignUpDetails = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>

            <Navbar></Navbar>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation Time</th>
      </tr>
    </thead>
    <tbody>

      {
        users.map(user => <tr key={user.id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.creationTime}</td>
          </tr>)
      }

    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default SignUpDetails;