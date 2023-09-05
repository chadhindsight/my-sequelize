import { Form, redirect, useActionData } from "react-router-dom";


export async function action({ params, request }) {
  let formData = await request.formData();
  let baddieData = Object.fromEntries(formData);
  
  try {
    // Filter out empty fields from baddieData
    let nonEmptyFields = Object.entries(baddieData).filter(([, value]) => value !== "")
    if(baddieData.age) baddieData.age = parseInt(baddieData.age);

    const response = await fetch(`/api/baddies/${params.baddieId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(nonEmptyFields)),
    });
     if (response.ok) {
      return redirect(`/baddies/${params.baddieId}`);
    }
    if (!response.ok) {
      const { errors } = await response.json();
      return errors;
    }

    return null;
  } catch (error) {
    console.error("Error updating entry:", error);
    throw error; // Rethrow the error if needed
  }
}


const UpdateBaddie = () => {
    const errors = useActionData()
    return (
       
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    {errors && <div className="text-red-300">{errors}</div>}
    <Form method="patch" className="space-y-6" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Update {}</h5>
        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" name="name" id="Updatename" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Baddie Name" />
        </div>
        <div>
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input name="age" id="Updatepassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Baddie Age"/>
        </div>
        <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
        type="submit"
      ></input>
    </Form>
</div>

    );
};
export default UpdateBaddie;