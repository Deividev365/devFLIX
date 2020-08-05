import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  margin-bottom: 5px;
  border: 1px solid var(--white);
  background: var(--darkbckground);

  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition:  .3s;

  &:hover,
  &:focus {
    border: 1px solid var(--primary);

  }
`;

export default Button