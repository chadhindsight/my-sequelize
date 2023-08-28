import { useLoaderData } from "react-router-dom";
import Baddie from "../../components/Baddie";

export async function loader() {
    // "/api/baddies" not working, might need to check Dakota's code
    let url = "/api/baddies";
    const response = await fetch(url);
    const baddies = await response.json();

    return { baddies };
}

export default function Placeholder() {
    const {baddies} = useLoaderData()
    console.log(baddies)
    return (
        <Baddie />
    );
}

