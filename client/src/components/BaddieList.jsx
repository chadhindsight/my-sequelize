
export default function BaddieList() { 
   let baddieTextDm = "text-md underline dark:text-white";
    return (
      
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
    )
}