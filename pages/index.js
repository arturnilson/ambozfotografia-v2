import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container fluid className="container-fluid">
      <p className="p-home">
        <h1 className="title">Amboz Fotografia</h1><br />
        Duas pessoas que juntas encontraram na fotografia uma nova maneira de enxergar o mundo.
        <br /><br />
        Há 6 anos no mercado, construímos nossa identidade a partir da espontaneidade dos momentos verdadeiros.
        <br /><br />
        Somos especializados em registrar eventos, desde festas de aniversário, formaturas, casamentos e, também, eventos corporativos.
        <br /><br />
        Trabalhamos com ensaios fotográficos externos para pessoas e empresas, buscando sempre ressaltar as qualidades dos modelos, sejam profissionais ou momentâneos.
        <br /><br />
        Se quiser conhecer um pouco mais de quem somos e do que fazemos, acompanhe-nos nas redes sociais:
        <br /><br /><br />

        <div className="vl">
          <a href="https://www.instagram.com/ambozfotografia" target="_blank">
            @ambozfotografia
          </a>
          <br /><br />
          <a href="https://www.instagram.com/mandicandradefotografa" target="_blank">
            @mandicandradefotografa
          </a>
          <br /><br />
          <a href="https://www.instagram.com/henriquestandtfoto" target="_blank">
            @henriquestandtfoto
          </a>
        </div>
      </p>
    </Container>
  )
}
