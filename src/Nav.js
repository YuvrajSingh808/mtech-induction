// import logo from "../assets/CollegeLogo.png";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import React, { useRef } from "react";
import { ThemeContext } from './themeContext';

export default function Navbar({ fixed }) {
  var [navbarOpen, setNavbarOpen] = React.useState(false);
  setNavbarOpen = () => {
    navbarOpen = !navbarOpen;
  }
  const { theme, setTheme } = React.useContext(ThemeContext);
  // const {theme, setTheme} = useTheme()
  function scroll(ref) {
    console.log(ref);
    ref && ref.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto md:p-6 z-50 relative">
        <button className="focus:outline-none p-4">
          <h1 className="flex items-center no-underline">
            <a href="https://iiitd.ac.in/" target="_blank" rel="noopener noreferrer"> <img src="CollegeLogo.png" width="70" alt="logo" /></a>
          </h1>
        </button>

        <nav className={`md:block lg:flex md:items-center md:w-auto`}>
          <button onClick={() => {document.getElementById("Team").scrollIntoView({behavior: 'smooth'})}}
            className="block font-semibold py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out focus:outline-none dark:text-gray-200 dark:hover:text-gray-100">
            Team
          </button>
          <button onClick={() => {document.getElementById("Speakers").scrollIntoView({behavior: 'smooth'})}}
            className="cursor-pointer block font-semibold py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out focus:outline-none dark:text-gray-200 dark:hover:text-gray-100">
            Speakers
          </button>
          <NavButton title="Events" />
          <DarkModeSwitch style={{ marginLeft: '2rem' }} checked={theme === 'dark'} onClick={() => setTheme(theme === 'dark' ?
            'light' : 'dark')}
            size={36}
          />
        </nav>
      </div>
    </div>
  );
}


function NavButton(props) {
  return <button onClick={() => {document.getElementById(props.title).scrollIntoView({behavior: 'smooth'})}}
    className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2  rounded-full bg-green-100 hover:bg-green-200 border border-green-200 text-green-700 transition duration-150 ease-in-out focus:outline-none">
    {props.title}
  </button>;
}