import Link from "next/link";
import LogoSystemV from "../component/LogoSystemV";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <LogoSystemV />
        <h1 className="mt-6">Bienvenu dans le sytème du complexe scolaire Kratos </h1>
        {/* <h2 className="mb-2">Un système adapté aux besoins scolaires </h2> */}
        <h1 className="mb-2">Efficace et intuitif </h1>
        {/* <div className="flex gap-4 mt-6 mb-2"> */}
          <Link className="btn btn-sm btn-accent " href={"/primaire"}>Se connecter</Link>
          <button className="btn ">Créer Mon compte</button>
        </div>
      </div>
    </div>
  );
}
