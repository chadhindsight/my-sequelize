import { useLoaderData } from "react-router-dom";
import Baddie from "../../components/Baddie";

export async function loader() {
    // "/api/baddies" not working, might need to check Dakota's code
    let url = "/api/baddies";
    const response = await fetch(url);
    const baddies = await response.json();

    return { baddies };
}

export default function BaddieList() {
    const {baddies} = useLoaderData()
    console.log(baddies)
    return (
        <>
        {/* <ul>
                {
                    baddies.map(baddie =>{
                        return <li key={baddie.id}>{baddie.name}</li>
                    })
                }
        </ul> */}
        <Baddie />
        </>
    );
}

