import "../scss/components/_sidebar.scss";
import sunshine from "../img/sunshine.png";
import ThemeToggle from "../auth/ThemeToggle";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header className="sidebar__header">
        <div className="image">
          <span className="image__span">
            <img src={sunshine} alt="logo sunshine"></img>
          </span>
        </div>
        <i className="bx bx-chevron-right toggle"></i>
      </header>

      <div className="menu">
        <div className="menu__bar">
          <ul className="menu__links">
            <li className="link">
              <a href="#" className="enlace">
                <i className="bx bx-home-alt enlace__icon"></i>
                <span className="enlace__text">Dashboard</span>
              </a>
            </li>
            <li className="link">
              <a href="#" className="enlace">
                <i className="bx bx-home-alt enlace__icon"></i>
                <span className="enlace__text">Dashboard</span>
              </a>
            </li>
            <li className="link">
              <a href="#" className="enlace">
                <i className="bx bx-home-alt enlace__icon"></i>
                <span className="enlace__text">Dashboard</span>
              </a>
            </li>
            <li className="link">
              <a href="#" className="enlace">
                <i className="bx bx-home-alt enlace__icon"></i>
                <span className="enlace__text">Dashboard</span>
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
