import { Link, useLoaderData } from "react-router-dom";
import { randomizeBaddiePhoto } from "./baddiePhotoNames";
import { randomizeBaddieInfo } from "./data/baddieInfo";

export async function loader() {
  let url = "/api/baddies";
  const response = await fetch(url);
  const baddies = await response.json();
  return { baddies };
}
// tropics
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
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 left-alignment"
          >
            <img
              className="w-16 h-16 mb-3 rounded-full shadow-lg text-center text-neutral-700 dark:text-neutral-200"
              alt="Bonnie profile"
              src={`/images/${randomizeBaddiePhoto()}`}
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {baddie.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {randomizeBaddieInfo()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Baddies;
