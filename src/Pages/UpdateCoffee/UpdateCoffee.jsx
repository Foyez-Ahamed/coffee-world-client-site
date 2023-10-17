import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffees = useLoaderData();

    const {_id, name, quantity, category, details, photo, supplier, taste} = coffees || {};

    const handleUpdate = e => {
        e.preventDefault();
        
        const form = e.target;
        
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};

        console.log(updateCoffee);

        fetch(`https://coffee-world-server-site-e1ci9lvr6-foyez-ahameds-projects.vercel.app/coffee/${_id}`, {

            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'updated coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'Thanks'
                  })
            }
        })


    }



    return (
        <div>

            <Navbar></Navbar>

            <section className="flex justify-center items-center bg-[#F4F3F0] p-3">
             <div>

             {/* main div */}

            <div>
            <h1 className="text-center text-4xl font-medium">Updated coffee : {coffees.name}</h1>
          </div>

          {/* form */}
          <div className="mt-10">
            <form onSubmit={handleUpdate}>
              
              <div className="flex gap-6">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter coffee name"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    placeholder="Enter Quantity"
                    className="input input-bordered"
                  />
                </label>
              </div>

              </div>

              <div className="flex gap-6">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter supplier name"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Enter Taste"
                    className="input input-bordered"
                  />
                </label>
              </div>

              </div>


              <div className="flex gap-6">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter category name"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter details"
                    className="input input-bordered"
                  />
                </label>
              </div>

              </div>


              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter photo url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>


              {/* add button */}
              <div className="form-control mt-4">
                <label className="input-group">
                  <input
                    type="submit"
                    value="Updated coffee"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

            </form>
          </div>
          {/* form */}

          {/* main div */}
        </div>
      </section>
            
        </div>
    );
};

export default UpdateCoffee;