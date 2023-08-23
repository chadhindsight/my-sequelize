import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    // TODO: Add Header, and Footer 
    <>
      <div id="sidebar">
        <h1 className="text-3xl font-bold underline">Baddies</h1>
        <div>
    
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
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
      <div id="detail">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}