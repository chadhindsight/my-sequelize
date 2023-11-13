import { Link, Outlet, useLocation } from "react-router-dom";
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
  const location = useLocation(); // Get the current location  console.log(userId);

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
        <section id="detail">
          {location.pathname === "/" ? (
            <p
              className="font-normal text-gray-700 dark:text-white"
              style={{ padding: "8%" }}
            >
              There is currently a panoply of women, unattached and free, making
              music that they want to listen to — and finding that the appeal
              crosses gender lines. Last month, none other than Lil Baby, one of
              the best-selling and most-acclaimed rappers of this generation,
              put it plainly to the website Complex: “Females,” he said, are,
              “like, running the game right now.” One of these women is Flo
              Milli, whose “uplifting, confident, bad-bitch music” — her words —
              made her a star. When I asked her if she had any thoughts about
              the resurgence of interest in women’s hip-hop, she told me: “Girls
              are just blowing up now, because we’re putting more energy into
              the bars. We’re not on that killing [expletive] that they used to
              be so obsessed about. At the end of the day, nobody’s trying to be
              living like that forever.” - New York Times
            </p>
          ) : (
            <Outlet />
          )}
        </section>
      </section>
      <Footer />
    </main>
  );
}
