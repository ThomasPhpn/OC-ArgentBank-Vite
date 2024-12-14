import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/authSlice";
import axios from "axios";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUsername] = useState(user.userName);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setIsEditing(false);
        dispatch(fetchProfile(token));
        console.log(user);
      }
    } catch (error) {
      console.error("Erreur, la mise à jour de UserName à échoué :", error);
    }
  };

  const dateString = user.updatedAt;
  const date = new Date(dateString);

  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-grow flex items-start justify-center gap-4 pt-6 bg-cyan-950">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center">
              <p className="font-bold text-2xl mb-4">
                Welcome back {user.userName} !
              </p>
              <p>Firstname : {user.firstName}</p>
              <p>Lastname : {user.lastName}</p>
              <p className="text-customGreen font-bold">
                Username :{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="border-[1px] border-cyan-900 rounded px-2"
                  />
                ) : (
                  user.userName
                )}
              </p>
              <i className="text-sm">
                Last update : {date.toLocaleDateString()}
              </i>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md ">
            <div className="text-center font-bold">
              {isEditing ? (
                <button
                  className="bg-customGreen rounded p-4 shadow-md text-white transition duration-150 ease-in-out transform hover:scale-[103%]"
                  onClick={handleSaveClick}
                >
                  Save Username
                </button>
              ) : (
                <button
                  className="bg-customGreen rounded p-4 shadow-md text-white transition duration-150 ease-in-out transform hover:scale-[103%]"
                  onClick={handleEditClick}
                >
                  Edit Username
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
