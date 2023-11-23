import Logo from '../../images/Logo';
import { Container } from './style';

export function Header(){
  return (
    <Container>
      <Logo className='logo-pequeno'/>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Trabalhos</li>
          <li>Clientes</li>
          <li>Contato</li>
        </ul>
      </nav>
    </Container>
  );
}
