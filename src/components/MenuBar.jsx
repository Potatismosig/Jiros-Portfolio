import "./styles.css";
import "./responsiv.css"
export default function Header() {
  return (
    <div className="headerMenu">
      <label htmlFor="bugerBox" className="bugerBoxLable"><i className="fa-solid fa-bars"></i></label>
      <input type="checkbox" className="bugerBox" id="bugerBox"/>
      <ul className="links">
        <li>
          <a href="#hello">Hello </a>
        </li>
        <li>
          <a href="#projects">Projects </a>
        </li>
        <li>
          <a href="#about-me">About me</a>
        </li>
      </ul>
    </div>
  );
}
