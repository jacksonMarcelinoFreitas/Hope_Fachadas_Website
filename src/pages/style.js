import { styled } from 'styled-components';

export const Container = styled.div`

.wrapper{
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4.8rem;
}

.home, .about, .service, .work, .client, .contact{
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10.8rem;
}

.about, .service, .work, .client, .contact{
  height: 110vh;
}



.home{
  background: ${({theme}) => theme.COLORS.CIRCULAR_GRADIENT_BACKGROUND} ;

  h1{
    width: 50%;

    text-align: center;
    letter-spacing: 0.3rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  img{
    width: 44.2rem;
  }
}

.about{
  background: ${({theme}) => theme.COLORS.BLACK} ;
  padding: 0;
  justify-content: left;
  position: relative;
  /* height: fit-content; */


  .box-about{
    position: absolute;
    top: 19.2rem;
    right: 10.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;

  }

  .box-service{
    position: absolute;
    width: 100vw;
    bottom: 19.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;

    padding: 0 10.8rem;


    h2{
      width: 100%;
    }

  }

  .box-image{
    /* position: absolute; */
    width: 60%;
    border-radius: 0 1.6rem 1.6rem 0;
    background: ${({theme}) => theme.COLORS.GRAY_500} ;
  }

  article{
    width: 40%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
    text-align: justify;
    gap: 2.4rem;

    h2{
      color: ${({theme}) => theme.COLORS.RED} ;
      font-size: 4.8rem;
      word-wrap: break-word;
    }

    div{
      p{
        color: ${({theme}) => theme.COLORS.WHITE} ;
        font-size: 2rem;
        word-wrap: break-word;

        &:nth-child(1){
          margin-bottom: 1.6rem;
        }
      }

    }
  }


}

/* .service{
  background: ${({theme}) => theme.COLORS.CIRCULAR_GRADIENT_BACKGROUND};


} */
`
