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
          <h1 className="text-3xl font-bold dark:text-white">Baddies</h1>
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
        <section id="detail">
          <Outlet />
        </section>
      </section>
      <Footer />
    </main>
  );
}
