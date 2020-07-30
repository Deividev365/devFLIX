import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 6px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 356px;
  height: 230px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .5s;
  &:hover,
  &:focus {
    opacity: .3;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
