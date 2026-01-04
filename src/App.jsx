import "./App.css";

export default function App() {
  return (
    <div className="wrap">
      {/* Cabecera superior */}
      <header className="header">
        <div className="headerTop">
          <div className="logoBlock">
            <div className="txMark" aria-hidden="true">
              <span className="t">T</span>
              <span className="x">X</span>
            </div>
            <div className="logoText">
              <div className="logoTitle">TXURDINAGA</div>
              <div className="logoSub">CIFP&nbsp;&nbsp;&nbsp;&nbsp;LHII</div>
            </div>
          </div>

          <div className="topRight">
            <a className="access accessPurple" href="#alumnado">
              <span>Acceso</span>
              <strong>ALUMNADO</strong>
            </a>
            <a className="access accessGreen" href="#profesorado">
              <span>Acceso</span>
              <strong>PROFESORADO</strong>
            </a>
            <a className="access accessYellow" href="#empresas">
              <span>Acceso</span>
              <strong>EMPRESAS</strong>
            </a>

            <a className="langBox" href="#lang">EU</a>
          </div>
        </div>

        {/* Barra de navegación de colores */}
        <nav className="colorNav" aria-label="Menú principal">
          <a className="navItem navGreen" href="#centro">EL CENTRO</a>
          <a className="navItem navCyan" href="#oferta">OFERTA FORMATIVA</a>
          <a className="navItem navYellow" href="#proyectos">PROYECTOS</a>
          <a className="navItem navOrange" href="#servicios">SERVICIOS</a>
          <a className="navItem navTeal" href="#innovacion">INNOVACIÓN</a>
          <a className="navItem navMagenta" href="#secretaria">SECRETARÍA</a>
          <a className="navItem navLime" href="#noticias">NOTICIAS</a>
          <a className="navItem navRed" href="#contacto">CONTACTO</a>
        </nav>
      </header>

      {/* “Slider” (estático) */}
      <main className="hero" role="main">
        <button className="arrow left" aria-label="Anterior">‹</button>
        <button className="arrow right" aria-label="Siguiente">›</button>

        <section className="heroInner">
          <div className="heroCard">
            <h1>Proyectos de innovación en 2026</h1>
            <h2>Automatización en ciberseguridad e Impacto de redes sociales en la salud mental de jóvenes</h2>
            <p>Descubre más información sobre estos proyectos</p>
            <a className="cta" href="#proyectos">QUIERO SABER MÁS</a>
          </div>

          <div className="dots" aria-label="Paginación del slider">
            <span className="dot" />
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </section>
      </main>

      {/* Anclas “falsas” */}
      <div id="centro" />
      <div id="oferta" />
      <div id="proyectos" />
      <div id="servicios" />
      <div id="innovacion" />
      <div id="secretaria" />
      <div id="noticias" />
      <div id="contacto" />
      <div id="alumnado" />
      <div id="profesorado" />
      <div id="empresas" />
      <div id="lang" />
    </div>
  );
}
