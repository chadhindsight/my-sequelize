import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  let url = "/api/baddies";
  const response = await fetch(url);
  const baddies = await response.json();
  return { baddies };
}

export default function Root() {
  let baddieTextDm = "text-md underline dark:text-white";
  const { baddies } = useLoaderData();
  return (
    <main className="bg-neutral-200 text-center dark:bg-neutral-700">
      <section id="baddie-parent">
        <aside id="sidebar">
          <Link to="/">
            <h1 className="text-3xl font-bold dark:text-white">Baddies</h1>
          </Link>
          <nav>
            <ul>
              {baddies.map((baddie) => (
                <li className={baddieTextDm} key={baddie.id}>
                  <Link to={`/baddies/${baddie.id}`}>{baddie.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            There is currently a panoply of women, unattached and free, making
            music that they want to listen to — and finding that the appeal
            crosses gender lines.
          </p>
        </article>
        <section id="detail">
          <Outlet />
        </section>
      </section>
      <Footer />
    </main>
  );
}
