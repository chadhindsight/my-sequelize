import { useLoaderData } from "react-router-dom";
import Baddie from "../../components/Baddie";

export async function loader() {
    let url = "/api/baddies";
    const response = await fetch(url);
    const baddies = await response.json();

    return { baddies };
}

export default function Baddies() {
    const {baddies} = useLoaderData()
    console.log(baddies)
    return (
        <Baddie />
    );
}

