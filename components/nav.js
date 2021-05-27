import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " width={100}>
      <Link href="/">
        <a className="navbar-brand ">Amina Abidi </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/contentPages/projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contentPages/experience">
              <a className="nav-link">Experience</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contentPages/trainingSkills">
              <a className="nav-link">Training & Skills</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contentPages/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}