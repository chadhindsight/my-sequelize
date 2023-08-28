import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
 let baddieTextDm = "text-md underline dark:text-white";

  return (
    <main className="bg-neutral-200 text-center dark:bg-neutral-700">
    <section id="baddie-parent">

      <aside id="sidebar">
        <h1 className="text-3xl font-bold dark:text-white">Baddies</h1>
        <nav>
          <ul>
            <li  className={baddieTextDm}>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li className={baddieTextDm}>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </aside> 
       <section id="detail">
        <Outlet />
      </section>
    </section>
      <Footer/>
    </main>
  );
}