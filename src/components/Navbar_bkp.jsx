import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <div className="navbar-logo h1 mt-2 text-secondary" onClick={handleClick}>
            RUN
            <i className="fa-solid fa-person-running bg-warning rounded ms-2" />
          </div>

          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* Hamburger Menu */}

          <ul className={click ? 'nav-menu list-unstyled active' : 'nav-menu list-unstyled'}>
            <li className='nav-item mt-2'>
              <a href='/#' className='nav-links text-secondary' onClick={closeMobileMenu}>Home</a>
            </li>
            <li className='nav-item mt-2'>
              <a href='/#run2022' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2022</a>
            </li>
            <li className='nav-item mt-2'>
              <a href='/#run2023' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2023</a>
            </li>
            <li className='nav-item mt-2 align-items-right'>
              <a href='/#run2024' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2024</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;



// 1st attempt

// import React, { useState } from 'react';
// // import './Navbar.css'

// function Navbar() {

//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <nav class="navbar bg-body-tertiary fixed-top">
//         <div class="container-fluid">
//           <div className="navbar-logo h1 mt-2 text-secondary">
//             <a class="navbar-brand" onClick={handleClick} href="/#">RUN</a>
//             <i className="fa-solid fa-person-running bg-warning rounded ms-2" />
//           </div>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar"
//             aria-label="Toggle navigation"
//             onClick={closeMobileMenu}
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>

//           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//             <div class="offcanvas-header">
//               <h5 class="offcanvas-title" id="offcanvasNavbarLabel">RUN</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>

//             <div class="offcanvas-body">
//               <ul className={click ? 'nav-menu list-unstyled active' : 'nav-menu list-unstyled'}>
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" onClick={closeMobileMenu} href="/#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" onClick={closeMobileMenu} href="/#run2022">Run 2022</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" onClick={closeMobileMenu} href="/#run2023">Run 2023</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" onClick={closeMobileMenu} href="/#run2024">Run 2024</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;








// 2 nd attempt



// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/index.css";

// function Navbar(props) {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const handlePageChange = (page) => {
//     props.handlePageChange(page);
//     setCurrentPage(page);
//   };

//   return (
//     <nav className="navbar bg-body-tertiary fixed-top">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/#" onClick={() => handlePageChange('Home')}>RUN</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="offcanvas offcanvas-end" tabIndex="-5" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//           <div className="offcanvas-header">
//             <h5 className="offcanvas-title" id="offcanvasNavbarLabel">RUN</h5>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <a
//                   href="/#"
//                   onClick={() => handlePageChange('Home')}
//                   className={`nav-link ${props.currentPage === 'Home' ? 'active' : ''}`}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="/#run2022"
//                   onClick={() => handlePageChange('run2022')}
//                   className={`nav-link ${props.currentPage === 'run2022' ? 'active' : ''}`}
//                 >
//                   Run 2022
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="/#run2023"
//                   onClick={() => handlePageChange('run2023')}
//                   className={`nav-link ${props.currentPage === 'run2023' ? 'active' : ''}`}
//                 >
//                   Run 2023
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="/#run2024"
//                   onClick={() => handlePageChange('run2024')}
//                   className={`nav-link ${props.currentPage === 'run2024' ? 'active' : ''}`}
//                 >
//                   Run 2024
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   currentPage: PropTypes.string.isRequired,
//   handlePageChange: PropTypes.func.isRequired,
// };

// export default Navbar;




