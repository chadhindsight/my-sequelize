import { useState } from "react";
import { useLoaderData, useFetcher, useNavigate } from "react-router-dom";

export async function loader({params}) {     
    let url = `/api/baddies/${params.baddieId}`;
    const response = await fetch(url);
    const baddie = await response.json();

    return { baddie };
}

export default function Baddie() {
   const fetcher = useFetcher();
   const {baddie} = useLoaderData();
   const navigate = useNavigate();
   const [toggleModal, setToggleModal] = useState(false);

    const onSubmitDelete = async (event) => {
  if (!window.confirm("Please confirm you want to delete this record.")) {
    event.preventDefault();
    return;
  }

  try {
    await fetch(`/api/baddies/${baddie.id}`, { method: "DELETE" });
    navigate("/"); // Navigate back to the home route after successful deletion
  } catch (error) {
    console.error("Error deleting entry:", error);
    // Handle errors here if necessary
  }
    };

    
    // NB: Update Baddie client side route is /update/${baddie.id}
    const handleUpdate = () => {
    // Toggle the modal by setting the opposite value of toggleModal
    setToggleModal(!toggleModal);
  };

    // const onUpdateSubmit = async (event) => {
        
    // }
  

 


return (

<section className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">    
    <section className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg text-center text-neutral-700 dark:text-neutral-200" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie profile"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{baddie.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Age: {baddie.age}</span>
        <section className="flex mt-4 space-x-3 md:mt-6">
            <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleUpdate}>
                Update
            </button>
             <fetcher.Form
            method="delete"
            action={`/baddies/${baddie.id}`}
            onSubmit={onSubmitDelete}
          >
            {/* This button just deals with rendering the update modal */}
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
          </fetcher.Form>
        </section>
    </section>
</section>
   )
}

