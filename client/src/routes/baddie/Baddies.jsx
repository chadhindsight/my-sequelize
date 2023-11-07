import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  let url = "/api/baddies";
  const response = await fetch(url);
  const baddies = await response.json();
  return { baddies };
}

const Baddies = () => {
  const { baddies } = useLoaderData();
  console.log(baddies);

  return (
    <div className="grid grid-cols-4 gap-4">
      {baddies.map((baddie) => {
        return (
          <Link
            key={baddie.id}
            to={`/baddies/${baddie.id}`}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {baddie.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2023 so
              far, in reverse chronological order.
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Baddies;
