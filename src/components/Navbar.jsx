import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content ">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">React Chat</a>
        {currentUser ? <button className="btn btn-ghost normal-case text-lg" onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};
