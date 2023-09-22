import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="services grid grid-three-column ">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-column-2">
              <MdSecurity className="icon" />
              <h3>Non contact shipping</h3>
            </div>
            <div className="services-column-2">
              <GiReceiveMoney className="icon" />
              <h3>money back Guranteed</h3>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure payment system</h3>
            </div>
          </div>
        </div>
        
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .grid {
    gap: 2rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.firstLight};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
    gap: 2rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2 {
      width: 100%;
      background: ${({ theme }) => theme.colors.firstLight};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      h3 {
        margin-top: 0;
        margin-left: 1rem;
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    text-transform: capitalize;
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    font-size: 2rem;
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.first};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .services {
      display: grid;
      // gap: 5rem;
    }
    // .services-1,
    // .services-3 {
    //   width: 100%;
    //   height: 8rem;
    //   background: ${({ theme }) => theme.colors.firstLight};
    //   display: flex;
    //   flex-direction: row;
    //   // flex: 1;
    //   justify-content: center;
    //   align-items: center;
    //   border-radius: 2rem;
    //   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    //   h3 {
    //     margin-top: 0;
    //     margin-left: 1rem;
    //   }
    //   div {
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: center;
    //     align-items: center;
    //     gap: 1rem;
    //   }
    // }
    // .services-2 {
    //   height: 10rem;
    // }
  }

`;

export default Services;
