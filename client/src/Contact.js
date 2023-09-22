// import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  // const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xwkdbdkg"
            method="post"
            className="contact-inputs"
          >
            <input
              type="text"
              required
              name="username"
              autoComplete="off"
              placeholder="Username"
              // value={isAuthenticated ? user.name : ""}
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Email"
              // value={isAuthenticated ? user.email : ""}
            />
            <input
              type="text"
              name="shopname"
              autoComplete="off"
              required
              placeholder="shop name"
              // value={isAuthenticated ? user.email : ""}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              autoComplete="off"
              required
              placeholder="Enter your Messages"
            ></textarea>
            <input type="submit" className="button" value="Send " />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .button {
    margin: auto;
    width: 100%;
    border-radius: 1rem;
  }
  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.firstLight};
            border: 1px solid ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }
  }
  .contact-inputs textarea {
    resize: none;
  }
`;

export default Contact;
