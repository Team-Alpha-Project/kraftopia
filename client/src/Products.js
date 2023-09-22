import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  // getting products from filtercontext
  const { filter_products } = useFilterContext();
  // console.log(filter_products, "filter");
  return (
    <Wrapper>
      <div className="container grid grid-filter-column ">
        <div>
          <FilterSection />
        </div>
        <div className="prduct-view-sort">
          <div className="sort">
            <Sort />
          </div>
          <div className="products">
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  height: auto;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
