import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as faCircleUserSolid } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket as faRightFromBracketSolid } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-[20px] py-[5px] shadow-md">
      <Link to="/">
        <img src={Logo} alt="ArgentBank" className="w-[200px]" />
      </Link>

      {token ? (
        <div className="flex items-center gap-5 space-x-4">
          <Link
            to="/user"
            className="flex items-center gap-2 text-gray-700 font-bold"
          >
            <FontAwesomeIcon
              icon={faCircleUserSolid}
              size="1x"
              className="text-customGreen"
            />{" "}
            {user?.userName || user?.firstName}
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-gray-700 font-bold"
          >
            <FontAwesomeIcon
              icon={faRightFromBracketSolid}
              size="1x"
              className="text-customGreen"
            />{" "}
            Sign Out
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-2 text-gray-700 font-bold"
        >
          <FontAwesomeIcon
            icon={faCircleUserSolid}
            size="1x"
            className="text-customGreen"
          />
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
