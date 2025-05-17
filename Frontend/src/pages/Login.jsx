import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setLoading(true);
      //simulam autentificarea
      setTimeout(() => {
        console.log("Autentificare reușită:", { email, password });
        setLoading(false);
        alert("Te-ai logat cu succes!");
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img
            src="/hero6.png"
            alt="login"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="p-10 w-[500px]">
          <h2 className="text-2xl font-bold text-gray-600 mb-5">Login</h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>

              <input
                type="email"
                id="email"
                className="w-full px-4 border py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="ionionescu@exemplu.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Parolă
              </label>

              <input
                type="password"
                id="password"
                className="w-full px-4 border py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105"
            >
              {loading ? "Se conectează..." : "Conectează-te"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
