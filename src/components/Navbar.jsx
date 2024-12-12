import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as faCircleUserSolid } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {token ? (
        <nav className="flex flex-row justify-between items-center px-[20px] py-[5px]">
          <Link to="/">
            <img src={Logo} alt="ArgentBank" className="w-[200px]" />
          </Link>
          <div className="flex flex-row items-center gap-3">
            <FontAwesomeIcon icon={faCircleUserSolid} size="1x" />
            <p className="font-bold">{user.userName}</p>
            <button onClick={handleLogout} className="font-bold">
              Logout
            </button>
          </div>
        </nav>
      ) : (
        <nav className="flex flex-row justify-between items-center px-[20px] py-[5px]">
          <Link to="/">
            <img src={Logo} alt="ArgentBank" className="w-[200px]" />
          </Link>
          <Link to="/login">
            <div className="flex flex-row items-center gap-3 hover:underline">
              <FontAwesomeIcon icon={faCircleUserSolid} size="1x" />
              <p className="font-bold">Sign in</p>
            </div>
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
