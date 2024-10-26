import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-3">
        Ops! eu não encontrei a página que você está procurando.
      </p>
      <Link href={`/`}>
         <Button className="mt-8">
            Ir para a página inicial
         </Button>
      </Link>
    </div>
  );
}