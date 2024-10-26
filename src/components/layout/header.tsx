import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="flex justify-start items-center py-3 px-3 shadow-md bg-white text-black">
           <div className="flex flex-row w-full justify-between mx-auto items-center gap-2 px-60">
                <Logo/>
                <Navbar/>
           </div>
       </header>
    );
}