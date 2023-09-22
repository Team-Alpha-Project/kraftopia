// import React, { useState } from "react";
// import styled from "styled-components";
// import { Button } from "../styles/Button";

// const Districts = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState("");

//   // Replace this with your actual district data
//   const districtsData = [
//     {
//       title: "Mysuru",
//       imageSrc: "images/mysuru.jpg",
//       districtName: "Mysore Silk & Sandalwood Crafts",
//       description:
//         "Mysuru, often referred to as the cultural capital of Karnataka, is renowned for its exquisite Mysore silk sarees and traditional sandalwood crafts. Visitors are captivated by the city's rich heritage and craftsmanship.",
//     },
//     // Add more district data here
//   ];

//   return (
//     <Wrapper>
//       <div className="container ">
//         <h1 className="title">Districts</h1>
//         <div className="district-dropdown">
//           <label htmlFor="district">Select a District:</label>
//           <input
//             type="text"
//             list="district"
//             value={selectedDistrict}
//             onChange={(e) => setSelectedDistrict(e.target.value)}
//           />
//           <datalist id="district" name="district">
//             {/* Add your district options here */}
//           </datalist>
//         </div>

//         <div className="districts grid grid-two-column">
//           <div className="left-container">
//             {/* {districtsData
//               .filter((district) =>
//                 selectedDistrict
//                   ? district.title.toLowerCase() ===
//                     selectedDistrict.toLowerCase()
//                   : true
//               )
//               .map((district, index) => (
//                 <div key={index} className="swiper-slide">
//                   <div className="city-title title">{district.title}</div>
//                   <div className="card">
//                     <div
//                       className="dist-img-block"
//                       style={{ textAlign: "center" }}
//                     >
//                       <img
//                         src={district.imageSrc}
//                         alt={district.title}
//                         style={{ maxWidth: "100%" }}
//                       />
//                     </div>
//                     <div className="city-state">{district.districtName}</div>
//                     <div className="short-desc">
//                       <p>{district.description}</p>
//                     </div>
//                     <div style={{ textAlign: "center", paddingTop: "20px" }}>
//                       <Button className="btn btn-info" href="#">
//                         View Products
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))} */}
//           </div>
//           {/* <div className="map-container">
//             <figure>
//               <img src="images/karnatakamap.gif" alt="" />
//             </figure>
//           </div> */}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .city-state {
//     font-size: 2rem;
//   }
//   .title {
//     font-size: 3rem;
//   }
//   p {
//     font-size: 1.5rem;
//   }
//   Button {
//     width: 50%;
//     margin: 1rem auto 1rem;
//     font-size: 1rem;
//   }
//   figure {
//     width: 100%;
//     // height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//   }
//   img {
//     //   max-width: 100%;
//     width: 100%;
//     height: 100%;
//     margin-top: 1.5rem;
//     //   height: 20rem;
//     transition: all 0.2s linear;
//   }

//   .districts {
//     width: 100%;
//   }
//   .grid {
//     gap: 2rem;
//   }
//   /* Styling for the district dropdown */
//   .district-dropdown {
//     width: 100%;
//     text-align: center;
//     margin-block: 20px;
//   }

//   .district-dropdown label {
//     display: block;
//     margin-bottom: 5px;
//   }

//   .district-dropdown input[type="text"] {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid var(--white-color); /* Replace with your desired border color */
//     border-radius: 4px;
//   }

//   .card {
//     display: flex;

//     gap: 1rem;
//     flex-direction: column;
//   }

//   /* Styling for the left container (Swiper) */
//   .left-container {
//     flex: 1 1 0%;
//     max-width: 100%;
//   }

//   /* Styling for the Swiper card */
//   .swiper-card {
//     background-color: #fff; /* Card background color */
//     border-radius: 8px; /* Card border radius */
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Card box shadow */
//     padding: 20px; /* Card padding */
//   }

//   /* Styling for the Swiper container */
//   .swiper-container {
//     width: 100%;
//     height: auto; /* Allow the height to adjust based on content */
//   }

//   .swiper-slide {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     /* Customize styles for individual swiper slides as needed */
//   }

//   .map-container {
//     width: 100%;
//     // height: 100%;
//   }

//   @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
//     .districts {
//       display: flex;
//       text-align: center;
//       font-size: 2rem;
//     }
//     .map-container {
//       display: none;
//     }
//   }
// `;
// export default Districts;
