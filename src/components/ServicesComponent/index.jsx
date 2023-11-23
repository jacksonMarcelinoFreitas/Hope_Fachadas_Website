/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container } from './style';
import { LuCheckCircle } from "react-icons/lu";

export function Services({name}){
  return(
    <Container>
      {
        name.map((service, index) => (
            <div key={index}>
              <LuCheckCircle size={24}/>
              <p>{service.name}</p>
            </div>
        ))
      }
    </Container>
  )
}