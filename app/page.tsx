'use client';
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from 'react';

const programDays = [
  { day: 'MIÉRCOLES 10 JUNIO', date: '10 JUN', image: '/images/program-wed.jpg' },
  { day: 'JUEVES 11 JUNIO', date: '11 JUN', image: '/images/program-thu.jpg' },
  { day: 'VIERNES 12 JUNIO', date: '12 JUN', image: '/images/program-fri.jpg' },
];

const highlights = [
  {
    title: 'Estrenos exclusivos',
    copy: 'Sé el primero en descubrir las últimas series que llegarán a la pantalla.',
    image: '/images/moment-premieres.jpg',
  },
  {
    title: 'Conferencias inspiradoras',
    copy: 'Interactúa con expertos y creativos de la industria audiovisual.',
    image: '/images/moment-talks.jpg',
  },
  {
    title: 'Ambiente vibrante',
    copy: 'Disfruta de la magia de Vigo en un entorno festivo y acogedor.',
    image: '/images/moment-vibrant.jpg',
  },
  {
    title: 'Cultura en cada esquina',
    copy: 'Deja que la cultura y el arte te envuelvan durante el festival.',
    image: '/images/moment-culture.jpg',
  },
];

const navItems = [
  ['PROGRAMA', '#programa'],
  ['EXPERIENCIA', '#edicion-2025'],
  ['INDUSTRIA', '#industria'],
  ['PITCHING', '#pitching'],
  ['MOMENTOS', '#vertical'],
  ['CONTACTO', '#contacto'],
];

const sponsors = [
  {
    name: 'XUNTA DE GALICIA',
    detail: 'XACOBEO 2027',
    url: 'https://industriasculturais.xunta.gal/es',
    domain: 'industriasculturais.xunta.gal',
  },
  {
    name: 'DIPUTACIÓN DE PONTEVEDRA',
    detail: 'RÍAS BAIXAS FILM COMMISSION',
    url: 'https://riasbaixasfilm.depo.gal/rbfc',
    domain: 'riasbaixasfilm.depo.gal',
  },
  {
    name: 'CONCELLO DE VIGO',
    detail: 'VIGO FILM OFFICE',
    url: 'https://www.vigofilmoffice.com/gl/',
    domain: 'vigofilmoffice.com',
  },
  {
    name: 'PUERTO DE VIGO',
    detail: 'AUTORIDAD PORTUARIA',
    url: 'https://www.apvigo.es/',
    domain: 'apvigo.es',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'error' | 'success'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setFormStatus('error');
      return;
    }
    setFormStatus('success');
    form.reset();
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Festival Internacional de Series Ría de Vigo">
            <img src="/images/logo.png" alt="" aria-hidden="true" width="911" height="530" fetchPriority="high" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Navegación principal"
          >
            <div className="nav-primary">
              {navItems.map(([label, href]) => (
                <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
            <div className="nav-secondary">
              <a href="#vertical" onClick={() => setMenuOpen(false)}>VERTICAL SERIES PITCH</a>
              <a href="#edicion-2025" onClick={() => setMenuOpen(false)}>EDICIÓN 2025</a>
              <a className="nav-accreditation" href="#industria" onClick={() => setMenuOpen(false)}>ACREDITACIÓN INDUSTRIA</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-content content content-wide">
            <div className="hero-copy">
              <p className="eyebrow"><span /> VIGO · GALICIA</p>
              <h1>FESTIVAL INTERNACIONAL<span>DE SERIES</span></h1>
              <p className="hero-date">10—12 JUNIO 2026</p>
              <p className="tagline">Donde el mar se junta con las estrellas</p>
              <div className="hero-actions">
                <a className="hero-link hero-link-primary" href="#programa">EXPLORAR PROGRAMA <span aria-hidden="true">↘</span></a>
                <a className="hero-link" href="#industria">ACREDITACIÓN INDUSTRIA</a>
              </div>
            </div>
            <div className="hero-meta">
              <p>SEASON 2</p>
              <div className="hero-features" aria-label="Actividades del festival">
                <span>VISIONADO DE SERIES</span>
                <span>COLOQUIOS</span>
                <span>NETWORKING</span>
              </div>
            </div>
          </div>
        </section>

        <section className="opening">
          <div className="content content-wide opening-grid">
            <div className="opening-copy">
              <p className="section-label">SEASON 2 · AFTERMOVIE</p>
              <h2>ASÍ FUE NUESTRA<br />SEASON 2</h2>
              <p>3 días de visionados de series, estrenos, coloquios, mesas, cócteles y por supuesto la Gala y Entrega de Premios.</p>
              <p>Nuestros Premios Oliva fueron para XOSÉ TOURIÑÁN, valorando su gran trayectoria, y para ÁGATA Y LOLA, Premio del Público a la Mejor Serie.</p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/XuM68HdX5Uc"
                title="Así fue nuestra Season 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="program" id="programa">
          <div className="content content-wide">
            <header className="editorial-heading">
              <div>
                <p className="section-label">03 · PROGRAMACIÓN OFICIAL</p>
                <h2>PROGRAMA <span>2026</span></h2>
              </div>
              <div className="heading-aside">
                <p>Tres jornadas para descubrir nuevas historias, conversar con quienes las crean y conectar con la industria.</p>
                <a className="button button-dark" href="http://entradas.ataquilla.com/es/ventaentradas/cine/971-o-tinglado-do-porto/x3am00zc-festival-internacional-de-series-ria-de-vigo" target="_blank" rel="noreferrer">
                  CERRADO <span aria-hidden="true">↗</span>
                </a>
              </div>
            </header>
            <div className="program-grid">
              {programDays.map((item, index) => (
                <article className="program-card" key={item.day}>
                  <div className="program-image">
                    <img src={item.image} alt={`Programa del ${item.day.toLowerCase()}`} width="911" height="911" loading="lazy" />
                    <span className="program-index">0{index + 1}</span>
                  </div>
                  <div className="program-card-copy">
                    <p>{item.date}</p>
                    <h3>{item.day}</h3>
                    <span>PROGRAMA OFICIAL</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section experience-section" id="edicion-2025">
          <div className="content content-wide feature-grid">
            <div className="feature-visual">
              <img src="/images/experience.jpg" alt="Coloquio del festival con actores invitados" width="768" height="768" loading="lazy" />
              <span>FESTIVAL · VIGO</span>
            </div>
            <div className="feature-copy">
              <p className="section-label">04 · PARA EL PÚBLICO</p>
              <h2>VIVE LA EXPERIENCIA<br />DE LAS SERIES</h2>
              <p>En el Festival Internacional de Series Ría de Vigo creamos un espacio para disfrutar de tus series como no lo habías hecho hasta ahora, con coloquios que te harán sentir parte de su creación. Acude a estrenos, descubre recientes lanzamientos y rememora aquellas que tanto te han emocionado.</p>
              <ul className="feature-list" aria-label="Experiencias del festival">
                <li>Estrenos y visionados</li>
                <li>Encuentros con talento</li>
                <li>Gala y Premios Oliva</li>
              </ul>
              <a className="button button-outline" href="http://entradas.ataquilla.com/es/ventaentradas/cine/971-o-tinglado-do-porto/x3am00zc-festival-internacional-de-series-ria-de-vigo" target="_blank" rel="noreferrer">
                CERRADO <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="feature-section industry-section" id="industria">
          <div className="content content-wide feature-grid feature-grid-reverse">
            <div className="feature-visual">
              <img src="/images/industry.jpg" alt="Panel profesional de la industria audiovisual" width="768" height="768" loading="lazy" />
              <span>INDUSTRY · NETWORKING</span>
            </div>
            <div className="feature-copy">
              <p className="section-label">05 · INDUSTRIA</p>
              <h2>LO MEJOR DE LA<br />INDUSTRIA AUDIOVISUAL</h2>
              <p>Conferencias inspiradoras, tendencias del sector y últimas novedades. Maximiza tu tiempo en nuestro espacio de networking exclusivo para industria, donde podrás conversar con lo mejor del sector. Todo esto y más lo encontrarás en el Festival Internacional de Series Ría de Vigo.</p>
              <div className="industry-pillars" aria-label="Áreas profesionales">
                <span>PLATAFORMAS</span><span>PRODUCTORAS</span><span>TALENTO</span>
              </div>
              <a className="button button-light" href="#contacto">CERRADO <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="feature-section pitching-section" id="pitching">
          <div className="content content-wide feature-grid">
            <div className="feature-visual">
              <img src="/images/pitching.jpg" alt="Claqueta cinematográfica preparada para un proyecto" width="768" height="768" loading="lazy" />
              <span>OPEN CALL · 2026</span>
            </div>
            <div className="feature-copy">
              <p className="section-label">06 · PITCHING</p>
              <h2>¿TIENES UNA SERIE<br />ENTRE MANOS?</h2>
              <p>El <strong>Festival Internacional de Series Ría de Vigo</strong> abre su convocatoria de pitching para proyectos que quieran dar el salto a la industria.</p>
              <p>Buscamos ideas con potencial, talento y ganas de ser contadas.</p>
              <p>Los proyectos seleccionados podrán presentarse ante profesionales del sector audiovisual.</p>
              <div className="pitching-deadline"><span>PLAZAS LIMITADAS</span><strong>FECHA LÍMITE · 30 DE ABRIL</strong></div>
              <a className="button button-dark" href="#contacto">INSCRIPCIÓN <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="highlights" id="vertical">
          <div className="content content-wide">
            <header className="editorial-heading editorial-heading-light">
              <div>
                <p className="section-label">07 · VERTICAL SERIES PITCH</p>
                <h2>MOMENTOS<br /><span>DESTACADOS</span></h2>
              </div>
              <div className="heading-aside"><p>Descubre lo mejor del festival y sumérgete en un mundo de creatividad.</p></div>
            </header>
            <div className="highlight-grid">
              {highlights.map((item, index) => (
                <article className="highlight-card" key={item.title}>
                  <div className="highlight-image">
                    <img src={item.image} alt="" width="768" height="768" loading="lazy" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="life-callout">
          <div className="content content-wide callout-inner">
            <p className="section-label">RÍA DE VIGO · GALICIA</p>
            <h2>DONDE LAS SERIES<br /><span>COBRAN VIDA</span></h2>
            <div>
              <p>Un festival único en el corazón de Galicia</p>
              <a className="button button-white" href="#contacto">NOVEDADES PRÓXIMAMENTE <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="content content-wide contact-grid">
            <div className="contact-intro">
              <p className="section-label">08 · CONTACTO</p>
              <h2>¿QUÉ TE GUSTARÍA<br /><span>SABER?</span></h2>
              <p>Festival, industria, pitching o acreditaciones. Escríbenos y nuestro equipo se pondrá en contacto contigo.</p>
              <a href="mailto:hola@riadevigoseriesfest.com">hola@riadevigoseriesfest.com</a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label>Nombre<span aria-hidden="true">*</span><input name="name" type="text" maxLength={200} required /></label>
                <label>Correo electrónico<input name="email" type="email" maxLength={200} /></label>
              </div>
              <label>Mensaje<textarea name="message" rows={7} maxLength={2500} /></label>
              <label className="checkbox-label">
                <input name="consent" type="checkbox" required />
                <span>Por la presente acepto que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento*</span>
              </label>
              <div className="form-footer">
                <p className="required-note">* Rellene todos los campos obligatorios</p>
                <button className="button form-button" type="submit">ENVIAR <span aria-hidden="true">→</span></button>
              </div>
              {formStatus === 'error' && <p className="form-message error" role="alert">Revisa los campos obligatorios antes de enviar.</p>}
              {formStatus === 'success' && <p className="form-message success" role="status">El mensaje se ha enviado correctamente.</p>}
            </form>
          </div>
        </section>

        <section className="social-strip" aria-label="Redes sociales">
          <div className="content content-wide social-inner">
            <p>SÍGUENOS</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/18FdKJGFrj/" target="_blank" rel="noreferrer">FACEBOOK <span>↗</span></a>
              <a href="https://www.instagram.com/festivaldeseriesriadevigo" target="_blank" rel="noreferrer">INSTAGRAM <span>↗</span></a>
              <a href="https://www.tiktok.com/@riadevigoseriesfest" target="_blank" rel="noreferrer">TIKTOK <span>↗</span></a>
              <a href="https://www.linkedin.com/in/r%C3%ADa-de-vigo-series-fest-a92b433ba/" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a>
              <a href="mailto:hola@riadevigoseriesfest.com">EMAIL <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="sponsor-logos" aria-labelledby="collaborators-title">
          <div className="content content-wide">
            <p className="section-label">INSTITUCIONES Y ENTIDADES</p>
            <h2 id="collaborators-title">COLABORAN</h2>
            <div className="sponsor-logo-grid">
              <img src="/images/sponsor-xunta.png" alt="Xunta de Galicia y Xacobeo 2027" width="500" height="480" loading="lazy" />
              <img src="/images/sponsor-depo.png" alt="Deputación de Pontevedra, Rías Baixas" width="500" height="500" loading="lazy" />
              <img src="/images/sponsor-vigo.png" alt="Concello de Vigo" width="500" height="500" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="sponsors">
          <div className="content content-wide">
            <header className="editorial-heading">
              <div>
                <p className="section-label">09 · APOYO INSTITUCIONAL</p>
                <h2>ADMINISTRACIONES<br /><span>PATROCINADORAS</span></h2>
              </div>
              <div className="heading-aside"><p>El festival es posible gracias al compromiso de las instituciones que impulsan la cultura y la industria audiovisual en Galicia.</p></div>
            </header>
            <div className="sponsor-grid">
              {sponsors.map((sponsor, index) => (
                <a href={sponsor.url} target="_blank" rel="noreferrer" key={sponsor.name}>
                  <span className="sponsor-index">0{index + 1}</span>
                  <strong>{sponsor.name}</strong>
                  <span>{sponsor.detail}</span>
                  <small>{sponsor.domain} ↗</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-panel">
          <div className="content content-wide legal-inner">
            <p>FESTIVAL INTERNACIONAL DE SERIES RÍA DE VIGO</p>
            <div className="legal-links">
              <a href="#aviso-legal">Aviso legal</a>
              <a href="#privacidad">Política de privacidad</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content content-wide footer-inner">
          <a className="footer-brand" href="#inicio" aria-label="Volver al inicio"><img src="/images/logo.png" alt="" aria-hidden="true" width="911" height="530" loading="lazy" /></a>
          <nav aria-label="Navegación en pie de página">
            <a href="#inicio">INICIO</a><a href="#vertical">VERTICAL SERIES PITCH</a><a href="#pitching">PITCHING</a><a href="#industria">ACREDITACIÓN INDUSTRIA</a><a href="#contacto">CONTACTO</a><a href="#edicion-2025">EDICIÓN 2025</a>
          </nav>
          <p>©Derechos de autor. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
