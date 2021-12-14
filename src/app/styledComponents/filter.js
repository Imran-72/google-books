import styled from "styled-components";

export const Filter = styled.div`
  &:after {
    background-color: rgba(0, 0, 0, 0.4);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;
