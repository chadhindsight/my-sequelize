import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    // TODO: Add Header, and Footer 
    <>
    <section id="baddie-parent">

      <div id="sidebar">
        <h1 className="text-3xl font-bold underline">Baddies</h1>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div> 
       <section id="detail">
        <Outlet />
      </section>
    </section>
      <Footer/>
    </>
  );
}