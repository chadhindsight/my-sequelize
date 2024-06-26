import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";

export async function loader() {
  let url = "/api/baddies";
  const response = await fetch(url);
  const baddies = await response.json();
  return { baddies };
}

export default function Root() {
  let baddieTextDm = "text-md underline dark:text-white";
  const { baddies } = useLoaderData();
  const location = useLocation(); // Get the current url location
  const navigate = useNavigate();

  return (
    <main className="bg-neutral-200 text-center dark:bg-neutral-700">
      <section id="baddie-parent">
        <aside id="sidebar">
          <Link to="/">
            <Header />
          </Link>
          <nav>
            <ul>
              {baddies.map((baddie) => (
                <li className={`${baddieTextDm} baddie-item`} key={baddie.id}>
                  <Link to={`/baddies/${baddie.id}`}>{baddie.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/baddies/new">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Add New Entry
            </button>
          </Link>
        </aside>

        <section id="detail">
          {
            // Only render the parapgraph if we are on the home route
            location.pathname === "/" ? (
              <p
                className="font-normal text-gray-700 dark:text-white"
                style={{ padding: "8%" }}
              >
                There is currently a panoply of women, unattached and free,
                making music that they want to listen to — and finding that the
                appeal crosses gender lines. Last month, none other than Lil
                Baby, one of the best-selling and most-acclaimed rappers of this
                generation, put it plainly to the website Complex: “Females,” he
                said, are, “like, running the game right now.” One of these
                women is Flo Milli, whose “uplifting, confident, bad-bitch
                music” — her words — made her a star. When I asked her if she
                had any thoughts about the resurgence of interest in women’s
                hip-hop, she told me: “Girls are just blowing up now, because
                we’re putting more energy into the bars. We’re not on that
                killing [expletive] that they used to be so obsessed about. At
                the end of the day, nobody’s trying to be living like that
                forever.” - New York Times
              </p>
            ) : (
              <Outlet />
            )
          }
        </section>
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-blue-700 hover:text-white px-3"
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Go Back</p>
          </div>
        </button>
      </section>
      <Footer />
    </main>
  );
}
