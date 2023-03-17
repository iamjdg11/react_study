import { useRouter } from "next/router";

export default function idPage(){

    const router = useRouter();
    const id = Number(router.query.id)
    return(
        <>
        <h2>id: {id}</h2>
        <ul>
            <li><a href="/">pages/index.tsx</a></li>
        </ul>
        </>
    )
}