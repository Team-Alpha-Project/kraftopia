import { NavLink } from "react-router-dom";
import React from "react";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, price, image, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure className="pro_fig">
          <img src={image} className="pro_img" alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
