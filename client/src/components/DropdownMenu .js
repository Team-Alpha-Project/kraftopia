// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgProfile } from "react-icons/cg"; 


// const DropdownMenu = () => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <DropdownContainer>
//       <DropdownToggle onClick={toggleMenu}>
//         <Icon /> {/* Use AiFillAlert icon */}
//       </DropdownToggle>
//       {menuVisible && (
//         <DropdownList>
//           <DropdownItem>
//             <p to="#" onClick={toggleMenu}>
//               welcome email
//             </p>
//           </DropdownItem>
//           <DropdownItem>
//             <NavLink to="/profile" onClick={toggleMenu}>
//               Profile
//             </NavLink>
//           </DropdownItem>
//           <DropdownItem>
//             <NavLink to="/login" onClick={toggleMenu}>
//               Login
//             </NavLink>
//           </DropdownItem>
//           <DropdownItem>
//             <NavLink to="/seller" onClick={toggleMenu}>
//               seller
//             </NavLink>
//           </DropdownItem>
//           <DropdownItem>
//             <NavLink to="/wishlist" className="a" onClick={toggleMenu}>
//               wishlist
//             </NavLink>
//           </DropdownItem>
//         </DropdownList>
//       )}
//     </DropdownContainer>
//   );
// };

// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     display: none;
//   }
// `;

// const DropdownToggle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// // Use AiFillAlert icon
// const Icon = styled(CgProfile)`
//   font-size: 2.5rem;
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   // top: -100%;
//   top: 195%;

//   width: max-content;
//   right: -42px;
//   background-color: ${({ theme }) => theme.colors.container};
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   // transition: background-color 0.3s, box-shadow 0.3s;
//   transition: top 0.3s linear;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     position: relative;
//     background-color: ${({ theme }) => theme.colors.container};
//     box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
//     margin-top: 1rem;
//   }
// `;

// const DropdownItem = styled.li`
//   padding: 10px;
//   border-bottom: 1px solid #ccc;

//   &:last-child {
//     border-bottom: none;
//   }
//   p {
//     font-size: 1.2rem;
//     text-transform: uppercase;
//     color: black;
//   }
//   a {
//     text-decoration: none;
//     color: ${({ theme }) => theme.colors.black};
//     text-transform: uppercase;
//     &:hover {
//       color: ${({ theme }) => theme.colors.first};
//     }
//   }

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export default DropdownMenu;
