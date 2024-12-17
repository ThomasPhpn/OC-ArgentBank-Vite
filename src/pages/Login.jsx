import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as faCircleUserSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, fetchProfile } from "../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (result.meta.requestStatus === "fulfilled") {
      await dispatch(fetchProfile(result.payload.token));
      navigate("/user");
      //  console.log(email);
      //  console.log(password);
      //  console.log(result.payload.token);
      //  console.log(profilResult.payload);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-grow flex items-center justify-center bg-cyan-950">
        <div className="bg-white p-8 rounded shadow-md shadow-customGreen w-96 flex flex-col gap-5">
          <div className="flex flex-col gap-2 items-center">
            <FontAwesomeIcon icon={faCircleUserSolid} size="2x" />
            <h1 className="text-2xl font-bold text-center">Sign In</h1>
            {error && <p className="text-red-500">Erreur : {error}</p>}
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customGreen text-white py-2 px-4 rounded font-bold transition duration-150 ease-in-out transform hover:scale-[103%]"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
