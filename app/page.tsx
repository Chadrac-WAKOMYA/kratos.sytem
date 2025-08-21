export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Bienvenu dans Kratos <span>.System</span></h1>
        <div className="flex flex-col gap-4">
          <button className="btn btn-accent">Se connecter</button>
          <button className="btn">Créer Mon compte</button>
        </div>
      </div>
    </div>
  );
}
