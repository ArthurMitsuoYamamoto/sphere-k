import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <nav className="absolute right-2 top-2">
    <ModeToggle />
    </nav>
     <h1>Sphere</h1>
     <Button>Login</Button>
    </main>
  );
}
