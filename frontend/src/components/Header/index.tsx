import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Developed by
          <a href="https://www.instagram.com/ana.dunning">
            @ana.dunning - Spring React Week by DevSuperior
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
