import logo from "../imgs/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Sidebar;
