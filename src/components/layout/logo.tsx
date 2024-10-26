import Link from "next/link";


export default function Logo(){
    return (
        <Link href={`/`} className="text-3xl font-bold">
            Fly<b className="text-blue-600">Movie</b>
        </Link>
    )
}