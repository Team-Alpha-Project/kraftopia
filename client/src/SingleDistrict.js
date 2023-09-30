import React from "react";
import styled from "styled-components";
import Product from "../src/components/Product";
import { useProductContext } from "../src/context/productcontext";

const SingleDistrict = () => {
  const { isLoading, products } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <Wrapper>
      <div className="container sd">
        <div className="info-data">
          <h1>districtName Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            vitae neque fugit fuga, porro corporis tempora ducimus quisquam
            accusamus sapiente?
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            vitae neque fugit fuga, porro corporis tempora ducimus quisquam
            accusamus sapiente?
          </p>
          <figure className="grid grid-two-column">
            <img className="img-style" src="/images/hero.jpg" alt="" />
            <img className="img-style" src="/images/mysuru.jpg" alt="" />
          </figure>
        </div>

        <div className="product_con grid grid-three-column">
          {products.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 3rem;
  // height: auto;
  .container {
    max-width: 120rem;
  }

  .pro_fig {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    .pro_img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  .product_con {
    padding: 4rem;
  }
  .sd {
    font-size: 3rem;
  }
  .info-data {
    display: grid;
  }
  p {
    margin-block: 1rem;
  }
  h1 {
    margin-block: 1rem;
    text-align: center;
  }
  .grid {
    gap: 1rem;
  }
  figure {
    position: relative;
  }
  .img-style {
    width: 100%;
    height: auto;
    margin-block: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h1 {
      font-size: 100%;
    }
    .img-style {
      width: 80%;
      margin: 1rem auto;
    }
    .product_con {
      padding: 1rem;
    }
  }
`;
export default SingleDistrict;
