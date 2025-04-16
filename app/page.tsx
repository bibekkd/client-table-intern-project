import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Client Information App
        </h1>
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            Explore and manage your client information with ease
          </p>
          <Link 
            href="/clients"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all hover:bg-blue-700 hover:shadow-md active:transform active:scale-95"
          >
            View Clients
          </Link>
        </div>
      </div>
    </div>
  );
}
