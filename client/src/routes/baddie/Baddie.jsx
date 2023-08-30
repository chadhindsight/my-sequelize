import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    let url = `/api/baddies/${params.baddieId}`;
    const response = await fetch(url);
    const baddie = await response.json();

    return { baddie };
}

export default function Baddie() {
   const {baddie} = useLoaderData();
   console.log(baddie)
    return (

<section className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">    
    <section className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg text-center text-neutral-700 dark:text-neutral-200" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie profile"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{baddie.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Age: {baddie.age}</span>
        <section className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</a>
        </section>
    </section>
</section>

   )
}

