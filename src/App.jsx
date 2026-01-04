import { useState } from "react";
import "./App.css";

const QUICK_ACCESS = [
  { label: "Acceso ALUMNADO", href: "#alumnado" },
  { label: "Acceso PROFESORADO", href: "#profesorado" },
  { label: "Acceso EMPRESAS", href: "#empresas" },
];

const NAV_ITEMS = [
  { label: "El centro", href: "#centro" },
  { label: "Oferta formativa", href: "#oferta" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Innovación", href: "#innovacion" },
  { label: "Secretaría", href: "#secretaria" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

const WHY_CARDS = [
  { title: "NUESTRAS INSTALACIONES", desc: "Aulas, espacios técnicos y entornos preparados para aprender haciendo.", tag: "Centro" },
  { title: "METODOLOGÍA ETHAZI", desc: "Aprendizaje colaborativo basado en retos (alto rendimiento).", tag: "Aprendizaje" },
  { title: "ERASMUS+", desc: "Movilidad internacional y prácticas para vivir una experiencia real.", tag: "Internacional" },
  { title: "FORMACIÓN DUAL", desc: "Alterna formación en el centro y en empresa (según itinerario).", tag: "Empresa" },
  { title: "BOLSA DE TRABAJO", desc: "Conexión con oportunidades y ofertas relacionadas con tu perfil.", tag: "Empleo" },
  { title: "PROYECTOS CON ENTIDADES", desc: "Colaboración con empresas, universidades y otras entidades.", tag: "Colaboración" },
];

const STUDY_TILES = [
  { title: "Grado medio", subtitle: "Ciclos formativos", href: "#oferta" },
  { title: "Grado superior", subtitle: "Especialización y futuro", href: "#oferta" },
  { title: "Especialización", subtitle: "Cursos avanzados", href: "#oferta" },
  { title: "Trámites", subtitle: "Gestiones y documentación", href: "#secretaria" },
];

const NEWS = [
  { date: "20/11/2025", title: "Taller práctico y actividad tipo CTF", href: "#noticias" },
  { date: "23/10/2025", title: "Iniciativas y comunidad educativa", href: "#noticias" },
  { date: "13/10/2025", title: "Jornadas técnicas Erasmus+", href: "#noticias" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      {/* Barra superior */}
      <div className="topbar">
        <div className="container topbarInner">
          <div className="topbarLeft">
            {QUICK_ACCESS.map((q) => (
              <a key={q.label} className="pillBtn" href={q.href}>
                {q.label}
              </a>
            ))}
          </div>

          <div className="topbarRight">
            <span className="lang">
              <button className="linkBtn" type="button">EU</button>
              <span className="sep">|</span>
              <button className="linkBtn" type="button">ES</button>
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <div className="logoMark" aria-hidden="true">
              <span className="sq s1" />
              <span className="sq s2" />
              <span className="sq s3" />
              <span className="sq s4" />
              <span className="sq s5" />
              <span className="sq s6" />
            </div>
            <div className="brandText">
              <div className="brandName">TXURDINAGA</div>
              <div className="brandSub">CIFP · LHII</div>
            </div>
          </a>

          <button
            className="menuBtn"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href={n.href} onClick={closeMenu}>
                {n.label}
              </a>
            ))}
            <a className="navCta" href="#contacto" onClick={closeMenu}>
              QUIERO CONTACTAR
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="kicker">Centro Integrado de Formación Profesional</div>
              <h1>Descubre la pieza que encaja contigo</h1>
              <p>
                Demo con estructura tipo web institucional: accesos rápidos, menú, avisos,
                bloques informativos y noticias. Adapta textos y enlaces según lo que necesites.
              </p>

              <div className="heroBtns">
                <a className="btnPrimary" href="#oferta">VER OFERTA FORMATIVA</a>
                <a className="btnGhost" href="#secretaria">TRÁMITES</a>
              </div>

              <div className="notice">
                <div className="noticeBadge">AVISO</div>
                <div>
                  <strong>Ejemplo de aviso destacado</strong>
                  <div className="muted">Cámbialo por tu aviso real.</div>
                </div>
              </div>
            </div>

            <aside className="heroRight">
              <div className="panel">
                <div className="panelTitle">Trámites en curso</div>
                <a className="panelLink" href="#secretaria">Inscríbete →</a>
                <a className="panelLink" href="#secretaria">Ver todos los trámites →</a>
              </div>

              <div className="panel">
                <div className="panelTitle">Lista de espera</div>
                <a className="panelLink" href="#secretaria">Solicita plaza →</a>
              </div>

              <div className="panel subtle">
                <div className="panelTitle">Accesos</div>
                <div className="miniGrid">
                  <a className="miniCard" href="#alumnado">Alumnado</a>
                  <a className="miniCard" href="#profesorado">Profesorado</a>
                  <a className="miniCard" href="#empresas">Empresas</a>
                  <a className="miniCard" href="#contacto">Contacto</a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="section" id="centro">
          <div className="container">
            <div className="sectionHead">
              <h2>¿Por qué elegirnos?</h2>
              <p className="muted">Tarjetas con títulos en mayúsculas y mensajes cortos.</p>
            </div>

            <div className="cards">
              {WHY_CARDS.map((c) => (
                <article key={c.title} className="card">
                  <div className="tag">{c.tag}</div>
                  <h3>{c.title}</h3>
                  <p className="muted">{c.desc}</p>
                  <a className="cardLink" href="#contacto">+ INFO →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Estudia */}
        <section className="section alt" id="oferta">
          <div className="container">
            <div className="sectionHead">
              <h2>Estudia en nuestro centro</h2>
              <p className="muted">Accesos grandes y simples tipo “tiles”.</p>
            </div>

            <div className="tiles">
              {STUDY_TILES.map((t) => (
                <a key={t.title} className="tile" href={t.href}>
                  <div className="tileTitle">{t.title}</div>
                  <div className="tileSub">{t.subtitle}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Noticias */}
        <section className="section" id="noticias">
          <div className="container">
            <div className="sectionHead">
              <h2>¡Últimas noticias!</h2>
              <p className="muted">Lista sencilla con fecha + titular.</p>
            </div>

            <div className="news">
              {NEWS.map((n) => (
                <a key={n.title} className="newsItem" href={n.href}>
                  <div className="newsDate">{n.date}</div>
                  <div className="newsTitle">{n.title}</div>
                  <div className="newsArrow">→</div>
                </a>
              ))}
            </div>

            <div className="ctaRow">
              <a className="btnPrimary" href="#contacto">Contacto rápido</a>
              <a className="btnGhost" href="#contacto">Escríbenos</a>
            </div>
          </div>
        </section>

        {/* Placeholders */}
        <section className="section alt" id="proyectos">
          <div className="container">
            <h2>Proyectos</h2>
            <p className="muted">Contenido pendiente.</p>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <h2>Servicios</h2>
            <p className="muted">Contenido pendiente.</p>
          </div>
        </section>

        <section className="section alt" id="innovacion">
          <div className="container">
            <h2>Innovación</h2>
            <p className="muted">Contenido pendiente.</p>
          </div>
        </section>

        <section className="section" id="secretaria">
          <div className="container">
            <h2>Secretaría</h2>
            <p className="muted">Contenido pendiente.</p>
          </div>
        </section>

        {/* Contacto */}
        <section className="section alt" id="contacto">
          <div className="container">
            <h2>Contacto</h2>

            <div className="contactGrid">
              <div className="contactCard">
                <div className="contactTitle">Dirección</div>
                <div>C/ Doctor Ornilla 2</div>
                <div>48004 Bilbao</div>
              </div>
              <div className="contactCard">
                <div className="contactTitle">Teléfono</div>
                <div>+34 94 000 00 00</div>
              </div>
              <div className="contactCard">
                <div className="contactTitle">Email</div>
                <div>info@tucentro.eus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Anclas para accesos */}
        <div id="alumnado"></div>
        <div id="profesorado"></div>
        <div id="empresas"></div>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div><strong>TXURDINAGA</strong> · CIFP · LHII</div>
          <div className="muted">Política de privacidad · Cookies · Mapa web</div>
        </div>
      </footer>
    </div>
  );
}