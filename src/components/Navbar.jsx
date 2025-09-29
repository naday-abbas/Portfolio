import logo from "../assets/NA-LOGO.webp"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/naday-abbas" target="_blank"
            rel="noopener norefferer"
            aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/naday-abbas/" target="_blank"
            rel="noopener norefferer"
            aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/nadayabbas/" target="_blank"
            rel="noopener norefferer"
            aria-label="Instagram">
                <FaInstagram />
            </a>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
