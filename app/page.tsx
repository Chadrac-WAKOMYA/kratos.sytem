import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>Bienvenu dans Kratos <span>.System</span></h1>      
      <button className="btn">Se connecter</button>
      <button>Créer Mon compte</button>
    </div>
  );
}
