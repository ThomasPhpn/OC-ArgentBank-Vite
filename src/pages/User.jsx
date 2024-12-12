import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-grow flex items-center justify-center bg-cyan-950">
        <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-5">
          <div className="flex flex-col gap-2 items-center">
            <p>
              Welcome back {user.firstName} {user.lastName} !
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
