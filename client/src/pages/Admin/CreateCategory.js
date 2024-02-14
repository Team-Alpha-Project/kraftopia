import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { styled } from "styled-components";
const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Create category's"}>
      <Wrapper className="container">
        <div className="pannel grid grid-two-column">
          <div className="panel-items">
            <AdminMenu />
          </div>
          <div className="pannel-content">
            <h1>Create category</h1>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};
const Wrapper = styled.div`
  width: 100%;
  margin: 1.5rem 3rem;
  justify-content: center;
  display: flex;
  align-items: center;

  .pannel {
    width: 100vw;
    display: flex;
    gap: 1rem;

    .pannel-items {
      width: 30%;
    }
  }
  .pannel-content {
    width: 70%;
    flex-grow: 1;

    .card {
      width: 100%;
      padding: 3rem;
    }
  }
`;
export default CreateCategory;
