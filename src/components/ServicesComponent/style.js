import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  width: 70%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    svg{
      color: ${({theme}) => theme.COLORS.RED};
    }

    p {
      font-size: 2.4rem;
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }


`