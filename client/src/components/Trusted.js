import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>trusted by 1000+ companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://imgs.search.brave.com/RZjRVu42e67Tw7X-L4XXXK2pOS9UiEouMw5OJ2OcX3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU1Mzk3MS92ZWN0/b3IvYWJzdHJhY3Qt/YnVzaW5lc3MtYXJy/b3ctdXAtbG9nby1p/Y29uLXZlY3Rvci1k/ZXNpZ24tdGVtcGxh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU42YkZXYUtm/bUZva0dTZlROSmhF/YllEbkYxUnBsV29t/Y05yT0tJNjVjV1U9"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.colors.container};
  .container {
    padding: 4rem;
  }
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: text;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.SemiBold};
  }

  img {
    min-width: 10rem;
    border-radius: 2rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      text-align: center;
    }
  }
`;

export default Trusted;
