/* eslint-disable react/prop-types */
import { Container } from './style';

export function ArrowDown({className, link}){
  return(
    <Container href={link}>
      <svg className={className} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.866476 16.6582C2.02178 15.5029 3.89489 15.5029 5.05019 16.6582L17.75 29.358L30.4498 16.6582C31.6051 15.5029 33.4782 15.5029 34.6335 16.6582C35.7888 17.8135 35.7888 19.6866 34.6335 20.8419L19.8419 35.6335C18.6866 36.7888 16.8134 36.7888 15.6581 35.6335L0.866476 20.8419C-0.288825 19.6866 -0.288825 17.8135 0.866476 16.6582Z" fill="#96989A"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.11648 0.866476C2.27178 -0.288825 4.14489 -0.288825 5.30019 0.866476L18 13.5663L30.6998 0.866476C31.8551 -0.288825 33.7282 -0.288825 34.8835 0.866476C36.0388 2.02178 36.0388 3.89489 34.8835 5.05019L20.0919 19.8419C18.9366 20.9972 17.0634 20.9972 15.9081 19.8419L1.11648 5.05019C-0.0388253 3.89489 -0.0388253 2.02178 1.11648 0.866476Z" fill="white"/>
      </svg>
    </Container>
  )
}