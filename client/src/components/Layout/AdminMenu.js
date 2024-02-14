import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const AdminMenu = () => {
  return (
    <Wrapper className="text-center">
      <div className="list-group">
        <h4>Admin Pannel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item "
          activeClassName="active"
          aria-current="true"
        >
          Create Category
        </NavLink>

        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item "
          activeClassName="active"
        >
          Create Product
        </NavLink>

        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item "
          activeClassName="active"
        >
          Users
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .list-group {
    width: 100%;
    font-size: 2rem;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h4 {
    width: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.first};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 0.5rem;
    padding: 2rem;
    margin-bottom: 0;
  }
  .list-group-item {
    text-decoration: none;
    padding: 2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.first};
      transition: color 0.3s ease;
    }

    &.active {
      text-align: center;
      width: 100%;
      background-color: red;
      color: white;
      border-radius: 0.5rem;
      transition: background-color 0.3s ease;
    }
  }
`;
export default AdminMenu;
