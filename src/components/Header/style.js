import styled from "styled-components";
import texture from "../../images/header_texture.png";

export const Container = styled.header`
  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 9.6rem;
  width: 100%;
  padding: 0 10.8rem;

  border-bottom: .2rem solid ${({theme}) => theme.COLORS.RED};

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  background-image: url(${texture});
  background-position: center;
  background-size: auto;

  .logo-pequeno{
    height: 70%;
  }

  nav, ul, li{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
  }

  ul{
    font-size: 2.2rem;
    font-weight: 400;
    list-style: none;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  li{
    padding: 3.2rem;

    &:hover{
      border-bottom: .6rem solid red;
    }
  }

  li:last-child {
      border-right: none;
  }

`