import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Navigator bar</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}