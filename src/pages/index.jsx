import { ArrowDown } from "../components/ArrowDown/index.jsx";
import { Services } from '../components/ServicesComponent';
import Empty from '../images/empty-image.svg';
import { Header } from '../components/Header';
import Logo from '../images/logo-grande.svg';
import { Container } from './style';



export function Home(){
  const services = [
    {
      "name":"Portas e portões em ACM",
    },
    {
      "name":"Letras caixa"
    },
    {
      "name":"Revestimentos em ACM"
    },
    {
      "name":"Totens"
    },
    {
      "name":"Painéis personalizados"
    },
    {
      "name":"Fachadas em ACM"
    },
    {
      "name":"Placas"
    },
  ];
  return(
    <Container>
      <Header/>
      <main>
          <section className="home">
            <div className="wrapper">
              <img src={Logo} alt="Logo da Hope Fachadas"></img>
              <h1>Construindo sonhos, impactando olhares, deixando sua marca em destaque</h1>
              <ArrowDown link='#about'/>
            </div>
          </section>
          <section className="about" id="about">
            <div className="wrapper">
              <div className="box-about">
               <div className="box-image">
                <img src={Empty} />
               </div>
                <article>
                  <h2>Quem somos?</h2>
                  <div>
                    <p>Fundada em 2021 nas raízes de Juara no Mato Grosso, a Hope Fachadas é uma empresa de comunicação visual.</p>
                    <p>Somos movidos pelo desejo de transformar espaços e contar histórias através de fachadas memoráveis, realizando com compromisso, excelência e a inovação. Somos referência local em fachadas para lojas, tótems, letreiros em aço galvanizado, painéis em ACM e muito mais!</p>
                  </div>
                </article>
              </div>

            <div className="box-service">
              <h2>Serviços</h2>
              <Services
                name={services}
              />
            </div>

            </div>
          </section>
          <section className="service" id="service">
            <div className="wrapper">

            </div>
          </section>
      </main>
    </Container>
  )
}