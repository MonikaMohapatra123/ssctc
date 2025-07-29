
// import React, { useState } from "react";
// import "./NavBar.css";
// import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
// import navData from "../../json/data.json";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openSubmenus, setOpenSubmenus] = useState({});

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const toggleSubmenu = (index) => {
//     setOpenSubmenus((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const menuItems = navData["0"].menu;

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-left">
//           <img src="/logo.png" alt="Logo" className="logo" />
//           <button className="hamburger" onClick={toggleMenu}>
//             <FaBars />
//           </button>
//         </div>

//         <div className="nav-right">
//           {/* <FaSearch className="icon search-icon" /> */}
//           <button className="contact-btn">Contact Us</button>
//         </div>
//       </nav>

//       {/* Slide-in Mobile Menu */}
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         <button className="close-icon" onClick={toggleMenu}>
//           <FaTimes />
//         </button>

//         {menuItems.map((item, index) => (
//           <div key={index} className="menu-item">
//             <div
//               className="menu-link"
//               onClick={() =>
//                 item.submenu ? toggleSubmenu(index) : setMenuOpen(false)
//               }
//             >
//               <a href={item.link}>{item.name}</a>
//               {item.submenu && (
//                 <span className="submenu-arrow">
//                   {openSubmenus[index] ? "▲" : "▼"}
//                 </span>
//               )}
//             </div>

//             {item.submenu && openSubmenus[index] && (
//               <div className="submenu">
//                 {item.submenu.map((sub, subIndex) => (
//                   <a
//                     key={subIndex}
//                     href={sub.link}
//                     className="submenu-item"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {sub.name}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
//     </>
//   );
// };

// export default NavBar;












import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import navData from "../../json/data.json";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const menuItems = navData["0"].menu;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // mobile if width <= 768px
  };

  useEffect(() => {
    handleResize(); // check initially
    window.addEventListener("resize", handleResize); // update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // ✅ Render MobileNavBar for small screens
  if (isMobile) {
    return <MobileNavBar />;
  }

  // ✅ Render Desktop Navbar for large screens
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <button className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        <div className="nav-right">
          {/* <FaSearch className="icon search-icon" /> */}
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      {/* Slide-in Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </button>

        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div
              className="menu-link"
              onClick={() =>
                item.submenu ? toggleSubmenu(index) : setMenuOpen(false)
              }
            >
              <a href={item.link}>{item.name}</a>
              {item.submenu && (
                <span className="submenu-arrow">
                  {openSubmenus[index] ? "▲" : "▼"}
                </span>
              )}
            </div>

            {item.submenu && openSubmenus[index] && (
              <div className="submenu">
                {item.submenu.map((sub, subIndex) => (
                  <a
                    key={subIndex}
                    href={sub.link}
                    className="submenu-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default NavBar;
