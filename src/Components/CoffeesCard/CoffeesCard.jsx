import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';


const CoffeesCard = ({ coffee, coffees, setCoffees }) => {
    const {_id, name, quantity, supplier, taste,  photo} = coffee || {} ;

    const handleDelete = (_id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

             fetch(`https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/coffee/${_id}`, {
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                console.log(data);

                if(data.deletedCount > 0){
                 Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              const remaining = coffees.filter(singleCoffee => singleCoffee._id !== _id );

              setCoffees(remaining);

                }
             })
            
            }
          })



    }

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src= {photo}
      alt="image"
      className="w-full h-[200px] object-cover"
    />
  </div>
  
  <div className="ml-6 flex justify-center gap-6">
    <div className="space-y-2">
    <h1>Name : {name}</h1>
    <p>Quantity : {quantity}</p>
    <p>Supplier : {supplier}</p>
    <p>Taste : {taste}</p>
    </div>

    <div>
    <div className="btn-group btn-group-vertical">
    <Link to={`/coffeeDetails/${_id}`}><button  className="btn bg-[#D2B48C]"><AiOutlineEye className="text-2xl text-white hover:text-[#D2B48C]"></AiOutlineEye></button></Link>
    

    <Link to={`/updateCoffee/${_id}`}><button className="btn bg-[#3C393B] mt-4"><AiOutlineEdit className="text-2xl text-white hover:text-[#3C393B]"></AiOutlineEdit></button></Link>


    <button onClick={ () => handleDelete(_id)} className="btn bg-[#EA4744] mt-4"><AiOutlineDelete className="text-2xl text-white hover:text-red-500"></AiOutlineDelete></button>
    </div>
    </div>
  </div>
</div>
  );
};

export default CoffeesCard;
