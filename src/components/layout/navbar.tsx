import { NavbarItem } from "./navbar-item";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center gap-2">
      <NavbarItem text="Início" href="/" />
      <NavbarItem text="Filmes" href="/movies" />
      <NavbarItem text="Series" href="/series" />
      <NavbarItem text="Minhas coleções" href="/collections" />
    </div>
  );
}