import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {

  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogOut = ()=>{
    try{
      dispatch(removeUser());
      navigate('/login');
    }
    catch(e){
      console.error(e);      
    }
  }

  return (
    <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost text-xl">🤝 DevMeet</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-7">
            {
              user && (
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user[0]?.image} />
              </div>
            </div>)
            }
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogOut}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar;