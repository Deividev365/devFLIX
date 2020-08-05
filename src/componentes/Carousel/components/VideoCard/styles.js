import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  overflow: none;
  cursor: pointer;
  color: white;
  flex: 0 0 384px;
  width: 384px;
  height: 215px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
  border-radius: 5px;
  box-shadow: 5px 5px 4px var(--primary);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.3s ease-in-out;
  margin: 32px 4px;
  z-index: 1;


  
  &.highlight {
    transform: scale(0);
  }

  &:hover,
  &:focus {
    transform: scale(1.3);
    box-shadow: 0 4px 16px var(--shadowColor);
    z-index: 5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
