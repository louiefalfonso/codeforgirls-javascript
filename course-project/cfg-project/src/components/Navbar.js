import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <div className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/aboutus">About Us</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/teams">Teams</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/faq">FAQ</CustomLink>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/contactus">Contact Us</CustomLink>
        </ul>
    </div>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }