'use client';

import { FormEvent, useState } from 'react';

const programDays = [
  { day: 'MIÉRCOLES 10 JUNIO', image: '/images/program-wed.jpg' },
  { day: 'JUEVES 11 JUNIO', image: '/images/program-thu.jpg' },
  { day: 'VIERNES 12 JUNIO', image: '/images/program-fri.jpg' },
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
  ['INICIO', '#inicio'],
  ['VERTICAL SERIES PITCH', '#vertical'],
  ['PITCHING', '#pitching'],
  ['ACREDITACIÓN INDUSTRIA', '#industria'],
  ['CONTACTO', '#contacto'],
  ['EDICIÓN 2025', '#edicion-2025'],
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
            <img src="/images/logo.png" alt="" aria-hidden="true" />
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
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Navegación principal"
          >
            {navItems.map(([label, href], index) => (
              <a
                className={index === 0 ? 'active' : undefined}
                href={href}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="opening">
          <div className="content content-narrow">
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/XuM68HdX5Uc"
                title="Así fue nuestra Season 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h1>ASÍ FUE NUESTRA SEASON 2</h1>
            <p>
              3 días de visionados de series, estrenos, coloquios, mesas, cócteles y por supuesto la Gala y Entrega de Premios.
            </p>
            <p>
              Nuestros Premios Oliva fueron para XOSÉ TOURIÑÁN, valorando su gran trayectoria, y para ÁGATA Y LOLA, Premio del Público a la Mejor Serie.
            </p>
          </div>
        </section>

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">SEASON 2</p>
            <h2>10, 11 Y 12 JUNIO 2026</h2>
            <p className="tagline">DONDE EL MAR SE JUNTA CON LAS ESTRELLAS</p>
            <div className="hero-features" aria-label="Actividades del festival">
              <span>VISIONADO DE SERIES</span>
              <span>COLOQUIOS</span>
              <span>NETWORKING</span>
            </div>
          </div>
        </section>

        <section className="program" id="programa">
          <div className="content content-wide">
            <div className="section-heading">
              <h2>PROGRAMA 2026</h2>
              <a
                className="button button-dark"
                href="http://entradas.ataquilla.com/es/ventaentradas/cine/971-o-tinglado-do-porto/x3am00zc-festival-internacional-de-series-ria-de-vigo"
                target="_blank"
                rel="noreferrer"
              >
                CERRADO
              </a>
            </div>
            <div className="program-grid">
              {programDays.map((item) => (
                <article className="program-card" key={item.day}>
                  <img src={item.image} alt={`Programa del ${item.day.toLowerCase()}`} />
                  <h3>{item.day}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section" id="edicion-2025">
          <div className="content feature-grid">
            <div className="feature-copy">
              <h2>VIVE LA EXPERIENCIA DE LAS SERIES</h2>
              <p>
                En el Festival Internacional de Series Ría de Vigo creamos un espacio para disfrutar de tus series como no lo habías hecho hasta ahora, con coloquios que te harán sentir parte de su creación. Acude a estrenos, descubre recientes lanzamientos y rememora aquellas que tanto te han emocionado.
              </p>
              <a
                className="button button-light"
                href="http://entradas.ataquilla.com/es/ventaentradas/cine/971-o-tinglado-do-porto/x3am00zc-festival-internacional-de-series-ria-de-vigo"
                target="_blank"
                rel="noreferrer"
              >
                CERRADO
              </a>
            </div>
            <img className="feature-image" src="/images/experience.jpg" alt="Coloquio del festival con actores invitados" />
          </div>
        </section>

        <section className="dark-section dark-section-alt" id="industria">
          <div className="content feature-grid feature-grid-reverse">
            <img className="feature-image" src="/images/industry.jpg" alt="Panel profesional de la industria audiovisual" />
            <div className="feature-copy">
              <h2>LO MEJOR DE LA<br />INDUSTRIA AUDIOVISUAL</h2>
              <p>
                Conferencias inspiradoras, tendencias del sector y últimas novedades. Maximiza tu tiempo en nuestro espacio de networking exclusivo para industria, donde podrás conversar con lo mejor del sector. Todo esto y más lo encontrarás en el Festival Internacional de Series Ría de Vigo.
              </p>
              <a className="button button-light" href="#contacto">CERRADO</a>
            </div>
          </div>
        </section>

        <section className="dark-section" id="pitching">
          <div className="content feature-grid">
            <div className="feature-copy">
              <h2>¿TIENES UNA SERIE ENTRE MANOS?</h2>
              <p>
                El <strong>Festival Internacional de Series Ría de Vigo</strong> abre su convocatoria de pitching para proyectos que quieran dar el salto a la industria.
              </p>
              <p>Buscamos ideas con potencial, talento y ganas de ser contadas.</p>
              <p>Los proyectos seleccionados podrán presentarse ante profesionales del sector audiovisual.</p>
              <p>Plazas limitadas</p>
              <p>Fecha límite: 30 de abril</p>
              <a className="button button-light" href="#contacto">INSCRIPCIÓN</a>
            </div>
            <img className="feature-image" src="/images/pitching.jpg" alt="Claqueta cinematográfica preparada para un proyecto" />
          </div>
        </section>

        <section className="highlights" id="vertical">
          <div className="content content-wide">
            <div className="section-heading section-heading-dark">
              <h2>MOMENTOS DESTACADOS</h2>
              <p>Descubre lo mejor del festival y sumérgete en un mundo de creatividad.</p>
            </div>
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="life-callout">
          <div className="content">
            <h2>DONDE LAS SERIES<br />COBRAN VIDA</h2>
            <p>Un festival único en el corazón de Galicia</p>
            <a className="button button-white" href="#contacto">NOVEDADES PRÓXIMAMENTE</a>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="content content-narrow">
            <h2>¿QUÉ TE GUSTARÍA SABER?</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Nombre<span aria-hidden="true">*</span>
                <input name="name" type="text" maxLength={200} required />
              </label>
              <label>
                Correo electrónico
                <input name="email" type="email" maxLength={200} />
              </label>
              <label>
                Mensaje
                <textarea name="message" rows={7} maxLength={2500} />
              </label>
              <label className="checkbox-label">
                <input name="consent" type="checkbox" required />
                <span>
                  Por la presente acepto que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento*
                </span>
              </label>
              <p className="required-note">* Rellene todos los campos obligatorios</p>
              <button className="button form-button" type="submit">Enviar</button>
              {formStatus === 'error' && (
                <p className="form-message error" role="alert">Revisa los campos obligatorios antes de enviar.</p>
              )}
              {formStatus === 'success' && (
                <p className="form-message success" role="status">El mensaje se ha enviado correctamente.</p>
              )}
            </form>
          </div>
        </section>

        <section className="social-strip" aria-label="Redes sociales">
          <div className="social-links">
            <a href="https://www.facebook.com/share/18FdKJGFrj/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/festivaldeseriesriadevigo" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://www.tiktok.com/@riadevigoseriesfest" target="_blank" rel="noreferrer" aria-label="TikTok">♪</a>
            <a href="https://www.linkedin.com/in/r%C3%ADa-de-vigo-series-fest-a92b433ba/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="mailto:hola@riadevigoseriesfest.com" aria-label="Email">@</a>
          </div>
        </section>

        <section className="sponsor-logos">
          <div className="content sponsor-logo-grid">
            <img src="/images/sponsor-xunta.png" alt="Xunta de Galicia y Xacobeo 2027" />
            <img src="/images/sponsor-depo.png" alt="Deputación de Pontevedra, Rías Baixas" />
            <img src="/images/sponsor-vigo.png" alt="Concello de Vigo" />
          </div>
        </section>

        <section className="sponsors">
          <div className="content content-wide">
            <h2>ADMINISTRACIONES PATROCINADORAS</h2>
            <div className="sponsor-grid">
              <a href="https://industriasculturais.xunta.gal/es" target="_blank" rel="noreferrer">
                <strong>XUNTA DE GALICIA</strong>
                <span>XACOBEO 2027</span>
                <small>industriasculturais.xunta.gal</small>
              </a>
              <a href="https://riasbaixasfilm.depo.gal/rbfc" target="_blank" rel="noreferrer">
                <strong>DIPUTACIÓN DE PONTEVEDRA</strong>
                <span>RÍAS BAIXAS FILM COMMISSION</span>
                <small>riasbaixasfilm.depo.gal</small>
              </a>
              <a href="https://www.vigofilmoffice.com/gl/" target="_blank" rel="noreferrer">
                <strong>CONCELLO DE VIGO</strong>
                <span>VIGO FILM OFFICE</span>
                <small>vigofilmoffice.com</small>
              </a>
              <a href="https://www.apvigo.es/" target="_blank" rel="noreferrer">
                <strong>PUERTO DE VIGO</strong>
                <span>AUTORIDAD PORTUARIA</span>
                <small>apvigo.es</small>
              </a>
            </div>
          </div>
        </section>

        <section className="legal-panel">
          <div className="legal-links">
            <a href="#aviso-legal">Aviso legal</a>
            <a href="#privacidad">Política de privacidad</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <nav aria-label="Navegación en pie de página">
          {navItems.filter(([label]) => label !== 'ACREDITACIÓN INDUSTRIA').map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
        <p>©Derechos de autor. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
