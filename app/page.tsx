'use client';
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useState } from 'react';

type ProgrammeItem = {
  time: string;
  title: string;
  detail: string;
  kind: 'industry' | 'screening' | 'event';
};

type ProgrammeDay = {
  short: string;
  label: string;
  date: string;
  image: string;
  items: ProgrammeItem[];
};

const programme: ProgrammeDay[] = [
  {
    short: 'MIÉRCOLES',
    label: 'Miércoles 10 de junio',
    date: '10 JUN',
    image: '/images/program-wed.jpg',
    items: [
      { time: '09:00', title: 'Pitching', detail: 'Presentación de proyectos seleccionados', kind: 'industry' },
      { time: '10:30', title: 'Rías Baixas: buscando escenarios, construyendo historias', detail: 'Deputación de Pontevedra · Rías Baixas Film Commission · Jefaturas de localizaciones', kind: 'industry' },
      { time: '11:30', title: 'Detrás de la música en series', detail: 'Elisa Chía · Universal Music', kind: 'industry' },
      { time: '12:30', title: 'Made in Galicia', detail: 'Academia Galega do Audiovisual · Compostela BSO · CTV · CSAG · Bambú Producciones · Clúster Audiovisual Galego', kind: 'industry' },
      { time: '13:30', title: 'Cómo financiar una serie', detail: 'Portocabo · Ficción Producciones · Fondo Inversión BE&IN · Green Screen', kind: 'industry' },
      { time: '18:00', title: 'Contando los días', detail: 'Visionado + coloquio', kind: 'screening' },
      { time: '20:00', title: 'Alfombra + photocall', detail: 'Encuentro con el talento', kind: 'event' },
      { time: '21:00', title: 'Oasis', detail: 'Pase en primicia + coloquio · Bambú — Netflix', kind: 'screening' },
    ],
  },
  {
    short: 'JUEVES',
    label: 'Jueves 11 de junio',
    date: '11 JUN',
    image: '/images/program-thu.jpg',
    items: [
      { time: '09:00', title: 'Pitching', detail: 'Presentación de proyectos seleccionados', kind: 'industry' },
      { time: '10:30', title: 'La química en el reparto', detail: 'Alejandro Gil · Lainecasting · Conchi Iglesias · Dirección de casting', kind: 'industry' },
      { time: '11:30', title: 'Spain Audiovisual Hub', detail: 'Apoyando la industria audiovisual', kind: 'industry' },
      { time: '12:00', title: 'Producción y VFX en series: workflow real', detail: 'Carolina Jiménez · Laura Pazienza', kind: 'industry' },
      { time: '13:00', title: 'Celta Media', detail: 'Mónica Valderrama + Universidade de Vigo · Gael García · Andrés Montenegro', kind: 'industry' },
      { time: '13:30', title: 'Microdramas y contenido vertical', detail: 'La ficción en la era del scroll', kind: 'industry' },
      { time: '16:30', title: 'Vertical Series Pitch', detail: 'Presentación de proyectos en formato vertical', kind: 'industry' },
      { time: '18:00', title: 'Punto Nemo II', detail: 'Visionado + coloquio', kind: 'screening' },
      { time: '20:00', title: 'Alfombra + photocall', detail: 'Encuentro con el talento', kind: 'event' },
      { time: '21:00', title: 'Ágata y Lola', detail: 'Estreno + coloquio · Portocabo — Atresmedia', kind: 'screening' },
    ],
  },
  {
    short: 'VIERNES',
    label: 'Viernes 12 de junio',
    date: '12 JUN',
    image: '/images/program-fri.jpg',
    items: [
      { time: '18:00', title: 'Gastón, un actor de mierda', detail: 'Visionado + coloquio', kind: 'screening' },
      { time: '20:00', title: 'Alfombra + photocall', detail: 'Encuentro con el talento', kind: 'event' },
      { time: '21:00', title: 'Millonarios', detail: 'Preestreno + coloquio · TVG', kind: 'screening' },
      { time: '21:30', title: 'Gala + entrega de premios', detail: 'Premios Oliva · Clausura oficial', kind: 'event' },
    ],
  },
];

const navItems = [
  ['FESTIVAL', '#festival'],
  ['PROGRAMA', '#programa'],
  ['INDUSTRIA', '#industria'],
  ['PITCHING', '#pitching'],
  ['MOMENTOS', '#momentos'],
  ['CONTACTO', '#contacto'],
];

const supporters = [
  {
    name: 'Xunta de Galicia',
    detail: 'Xacobeo 2027',
    url: 'https://industriasculturais.xunta.gal/es',
  },
  {
    name: 'Deputación de Pontevedra',
    detail: 'Rías Baixas Film Commission',
    url: 'https://riasbaixasfilm.depo.gal/rbfc',
  },
  {
    name: 'Concello de Vigo',
    detail: 'Vigo Film Office',
    url: 'https://www.vigofilmoffice.com/gl/',
  },
  {
    name: 'Puerto de Vigo',
    detail: 'Autoridad Portuaria',
    url: 'https://www.apvigo.es/',
  },
];

const socialLinks = [
  ['Instagram', 'https://www.instagram.com/festivaldeseriesriadevigo'],
  ['TikTok', 'https://www.tiktok.com/@riadevigoseriesfest'],
  ['Facebook', 'https://www.facebook.com/share/18FdKJGFrj/'],
  ['LinkedIn', 'https://www.linkedin.com/in/r%C3%ADa-de-vigo-series-fest-a92b433ba/'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [lightbox, setLightbox] = useState<ProgrammeDay | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen && !lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setLightbox(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, lightbox]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setFormStatus('error');
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const topic = String(data.get('topic') ?? 'Consulta general');
    const message = String(data.get('message') ?? '');
    const subject = encodeURIComponent(`${topic} · ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hola@riadevigoseriesfest.com?subject=${subject}&body=${body}`;
    setFormStatus('success');
  }

  const selectedDay = programme[activeDay];

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${scrollProgress})` }} />
        <div className="header-inner content-wide">
          <a className="brand" href="#inicio" aria-label="Festival Internacional de Series Ría de Vigo — inicio">
            <img src="/images/logo.png" alt="" aria-hidden="true" width="911" height="530" fetchPriority="high" />
          </a>

          <p className="header-edition">3ª edición <span>·</span> Vigo, Galicia</p>

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

          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <div className="nav-primary">
              {navItems.map(([label, href]) => (
                <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
            <a className="nav-accreditation" href="#industria" onClick={() => setMenuOpen(false)}>
              ÁREA INDUSTRIA <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-content content-wide">
            <div className="hero-copy">
              <p className="eyebrow"><span /> FESTIVAL INTERNACIONAL DE SERIES</p>
              <h1><span>Historias</span><span>que cruzan</span><span>océanos.</span></h1>
              <p className="tagline">Tres días de estrenos, talento e industria frente al Atlántico.</p>
              <div className="hero-actions">
                <a className="hero-link hero-link-primary" href="#programa">DESCUBRIR EL PROGRAMA <span aria-hidden="true">↘</span></a>
                <a className="hero-link" href="#festival">CONOCER EL FESTIVAL <span aria-hidden="true">→</span></a>
              </div>
            </div>

            <aside className="hero-date-card" aria-label="Fechas y lugar del festival">
              <p>10—12</p>
              <strong>JUNIO<br />2026</strong>
              <span>O TINGLADO DO PORTO<br />VIGO · GALICIA</span>
            </aside>

            <div className="hero-meta" aria-label="Actividades del festival">
              <p>03 — SEASON</p>
              <div className="hero-features">
                <span><small>01</small> ESTRENOS</span>
                <span><small>02</small> CONVERSACIONES</span>
                <span><small>03</small> INDUSTRIA</span>
              </div>
              <a href="#festival">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="manifesto" id="festival">
          <div className="content-wide manifesto-grid">
            <div className="manifesto-index">
              <span>01</span>
              <p>EL FESTIVAL</p>
            </div>
            <div className="manifesto-copy">
              <p className="section-kicker">UN PUNTO DE ENCUENTRO EN EL ATLÁNTICO</p>
              <h2>Las series se ven.<br /><em>Aquí también se viven.</em></h2>
              <div className="manifesto-detail">
                <p>El Festival Internacional de Series Ría de Vigo reúne a público, talento y profesionales para descubrir nuevas historias y conversar con quienes las hacen posibles.</p>
                <p>Estrenos, coloquios, mesas, networking, pitching y la Gala de los Premios Oliva: una experiencia abierta a la ciudad y conectada con la industria audiovisual.</p>
              </div>
            </div>
          </div>

          <div className="content-wide festival-collage">
            <figure className="collage-main">
              <img src="/images/experience.jpg" alt="Invitados conversan con el público durante el festival" width="768" height="768" loading="lazy" />
              <figcaption>COLOQUIOS · TALENTO · PÚBLICO</figcaption>
            </figure>
            <div className="festival-facts" aria-label="Claves del festival">
              <div><strong>03</strong><span>JORNADAS</span></div>
              <div><strong>02</strong><span>MIRADAS<br />PÚBLICO + INDUSTRIA</span></div>
              <div><strong>01</strong><span>CIUDAD ATLÁNTICA</span></div>
            </div>
            <figure className="collage-secondary">
              <img src="/images/moment-premieres.jpg" alt="Alfombra del festival junto al mar" width="768" height="768" loading="lazy" />
              <figcaption>VIGO · GALICIA</figcaption>
            </figure>
          </div>
        </section>

        <section className="programme" id="programa">
          <div className="content-wide">
            <header className="section-heading section-heading-inverse">
              <div className="section-number"><span>02</span><p>PROGRAMA OFICIAL</p></div>
              <div>
                <p className="section-kicker">10—12 JUNIO 2026</p>
                <h2>Tres días.<br /><em>Infinitas historias.</em></h2>
              </div>
              <p className="section-intro">Explora la programación por día. Encuentros profesionales durante la mañana; estrenos, coloquios y eventos abiertos al público al caer la tarde.</p>
            </header>

            <div className="programme-tabs" role="tablist" aria-label="Días del festival">
              {programme.map((day, index) => (
                <button
                  key={day.date}
                  type="button"
                  role="tab"
                  id={`tab-day-${index}`}
                  aria-controls="programme-panel"
                  aria-selected={activeDay === index}
                  className={activeDay === index ? 'is-active' : ''}
                  onClick={() => setActiveDay(index)}
                >
                  <span>{day.date}</span>
                  <strong>{day.short}</strong>
                  <small>0{index + 1}</small>
                </button>
              ))}
            </div>

            <div className="programme-layout" id="programme-panel" role="tabpanel" aria-labelledby={`tab-day-${activeDay}`}>
              <div className="programme-list" aria-live="polite">
                {selectedDay.items.map((item, index) => (
                  <article className="programme-row" key={`${selectedDay.date}-${item.time}-${item.title}`}>
                    <time>{item.time}</time>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                    <span className={`programme-kind ${item.kind}`}>
                      {item.kind === 'industry' ? 'INDUSTRIA' : item.kind === 'screening' ? 'VISIONADO' : 'EVENTO'}
                    </span>
                    <small>0{index + 1}</small>
                  </article>
                ))}
              </div>

              <aside className="programme-poster">
                <p>PROGRAMA ORIGINAL</p>
                <button type="button" onClick={() => setLightbox(selectedDay)} aria-label={`Ampliar el programa del ${selectedDay.label.toLowerCase()}`}>
                  <img src={selectedDay.image} alt={`Cartel del programa del ${selectedDay.label.toLowerCase()}`} width="911" height="911" loading="lazy" />
                  <span>AMPLIAR <b aria-hidden="true">↗</b></span>
                </button>
                <small>La programación puede estar sujeta a cambios.</small>
              </aside>
            </div>
          </div>
        </section>

        <section className="audiences" id="industria">
          <div className="content-wide">
            <header className="section-heading">
              <div className="section-number"><span>03</span><p>DOS FORMAS DE VIVIRLO</p></div>
              <div>
                <p className="section-kicker">UN FESTIVAL ABIERTO Y CONECTADO</p>
                <h2>Del sofá a la sala.<br /><em>De la idea a la pantalla.</em></h2>
              </div>
            </header>

            <div className="audience-grid">
              <article className="audience-card audience-public">
                <div className="audience-image">
                  <img src="/images/moment-vibrant.jpg" alt="Público disfrutando del ambiente del festival" width="768" height="768" loading="lazy" />
                  <span>PARA EL PÚBLICO</span>
                </div>
                <div className="audience-copy">
                  <p className="card-index">A — 01</p>
                  <h3>Vive las series<br />como nunca antes.</h3>
                  <p>Acude a estrenos, descubre lanzamientos y rememora las historias que te emocionaron junto a su talento creativo.</p>
                  <ul>
                    <li>Estrenos y visionados</li>
                    <li>Encuentros con talento</li>
                    <li>Gala y Premios Oliva</li>
                  </ul>
                  <a href="#programa">VER PROGRAMA <span aria-hidden="true">→</span></a>
                </div>
              </article>

              <article className="audience-card audience-industry">
                <div className="audience-image">
                  <img src="/images/industry.jpg" alt="Profesionales conversan en un panel de industria" width="768" height="768" loading="lazy" />
                  <span>PARA LA INDUSTRIA</span>
                </div>
                <div className="audience-copy">
                  <p className="card-index">B — 02</p>
                  <h3>Conecta con quienes<br />mueven la industria.</h3>
                  <p>Conferencias, tendencias y un espacio de networking para conversar con productoras, plataformas, talento y profesionales del sector.</p>
                  <ul>
                    <li>Conferencias y tendencias</li>
                    <li>Networking profesional</li>
                    <li>Plataformas + productoras</li>
                  </ul>
                  <a href="#contacto">ACREDITACIÓN INDUSTRIA <span aria-hidden="true">→</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pitching" id="pitching">
          <div className="pitching-visual">
            <img src="/images/pitching.jpg" alt="Claqueta de producción audiovisual" width="768" height="768" loading="lazy" />
            <div className="pitching-badge"><span>OPEN CALL</span><strong>2026</strong></div>
          </div>
          <div className="pitching-copy">
            <p className="section-kicker">04 · PITCHING</p>
            <h2>¿Tienes una serie<br /><em>entre manos?</em></h2>
            <p>Buscamos ideas con potencial, talento y ganas de ser contadas. Los proyectos seleccionados podrán presentarse ante profesionales del sector audiovisual.</p>
            <div className="pitching-meta">
              <div><span>CONVOCATORIA</span><strong>PLAZAS LIMITADAS</strong></div>
              <div><span>FECHA LÍMITE</span><strong>30 DE ABRIL</strong></div>
              <div><span>FORMATO</span><strong>SERIES + VERTICAL</strong></div>
            </div>
            <a className="text-link" href="#contacto">SOLICITAR INFORMACIÓN <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="moments" id="momentos">
          <div className="content-wide">
            <header className="section-heading section-heading-inverse">
              <div className="section-number"><span>05</span><p>MOMENTOS</p></div>
              <div>
                <p className="section-kicker">SEASON 2 · ARCHIVO</p>
                <h2>Todo lo que pasa<br /><em>entre episodios.</em></h2>
              </div>
            </header>

            <div className="moments-grid">
              <figure className="moment moment-tall">
                <img src="/images/moment-talks.jpg" alt="Conversación con profesionales en el festival" width="768" height="768" loading="lazy" />
                <figcaption><span>01</span> VOCES QUE INSPIRAN</figcaption>
              </figure>
              <figure className="moment moment-wide">
                <img src="/images/moment-culture.jpg" alt="Actividad cultural durante el festival" width="768" height="768" loading="lazy" />
                <figcaption><span>02</span> CULTURA EN CADA ESQUINA</figcaption>
              </figure>
              <figure className="moment">
                <img src="/images/moment-premieres.jpg" alt="Estreno y photocall del festival" width="768" height="768" loading="lazy" />
                <figcaption><span>03</span> ESTRENOS JUNTO AL MAR</figcaption>
              </figure>
              <div className="moment-quote">
                <span>“</span>
                <p>Un lugar donde las historias encuentran público, conversación y futuro.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aftermovie">
          <div className="content-wide aftermovie-grid">
            <div className="aftermovie-copy">
              <p className="section-kicker">06 · SEASON 2</p>
              <h2>Así fue<br /><em>nuestra última temporada.</em></h2>
              <p>Tres días de visionados, estrenos, coloquios, mesas, cócteles, Gala y Entrega de Premios.</p>
              <p>Los Premios Oliva reconocieron la trayectoria de Xosé Touriñán y a <em>Ágata y Lola</em> con el Premio del Público a la Mejor Serie.</p>
            </div>
            <div className="video-shell">
              <div className="video-label"><span>AFTERMOVIE</span><small>02:24</small></div>
              <iframe
                src="https://www.youtube-nocookie.com/embed/XuM68HdX5Uc"
                title="Así fue nuestra Season 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="vigo-callout">
          <div className="vigo-glow" aria-hidden="true" />
          <div className="content-wide vigo-content">
            <p>42°14′N · 8°43′W</p>
            <h2>Donde el mar<br /><em>se junta con las estrellas.</em></h2>
            <div>
              <span>RÍA DE VIGO · GALICIA</span>
              <a href="#contacto">PLANEA TU VISITA <b aria-hidden="true">↗</b></a>
            </div>
          </div>
        </section>

        <section className="support" aria-labelledby="support-title">
          <div className="content-wide">
            <header className="section-heading">
              <div className="section-number"><span>07</span><p>RED DE APOYO</p></div>
              <div>
                <p className="section-kicker">INSTITUCIONES · ENTIDADES · COLABORADORES</p>
                <h2 id="support-title">Una industria<br /><em>que avanza unida.</em></h2>
              </div>
              <p className="section-intro">El festival es posible gracias al compromiso de las instituciones que impulsan la cultura y el audiovisual en Galicia.</p>
            </header>

            <div className="support-logos" aria-label="Instituciones colaboradoras">
              <img src="/images/sponsor-xunta.png" alt="Xunta de Galicia y Xacobeo 2027" width="500" height="480" loading="lazy" />
              <img src="/images/sponsor-depo.png" alt="Deputación de Pontevedra, Rías Baixas" width="500" height="500" loading="lazy" />
              <img src="/images/sponsor-vigo.png" alt="Concello de Vigo" width="500" height="500" loading="lazy" />
            </div>

            <div className="support-list">
              {supporters.map((supporter, index) => (
                <a href={supporter.url} target="_blank" rel="noreferrer" key={supporter.name}>
                  <small>0{index + 1}</small>
                  <strong>{supporter.name}</strong>
                  <span>{supporter.detail}</span>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="content-wide contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">08 · HABLEMOS</p>
              <h2>Tu próxima historia<br /><em>puede empezar aquí.</em></h2>
              <p>Festival, industria, pitching, prensa o acreditaciones. Cuéntanos qué necesitas y continuaremos la conversación por correo.</p>
              <a href="mailto:hola@riadevigoseriesfest.com">hola@riadevigoseriesfest.com <span aria-hidden="true">↗</span></a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label>Nombre <span>*</span><input name="name" type="text" autoComplete="name" maxLength={200} required /></label>
                <label>Email <span>*</span><input name="email" type="email" autoComplete="email" maxLength={200} required /></label>
              </div>
              <label>Me interesa <span>*</span>
                <select name="topic" defaultValue="Festival" required>
                  <option>Festival</option>
                  <option>Industria y acreditaciones</option>
                  <option>Pitching</option>
                  <option>Prensa y colaboraciones</option>
                </select>
              </label>
              <label>Mensaje <span>*</span><textarea name="message" rows={5} maxLength={2500} required /></label>
              <label className="checkbox-label">
                <input name="consent" type="checkbox" required />
                <span>Acepto que estos datos se utilicen únicamente para responder a mi consulta. Puedo revocar mi consentimiento en cualquier momento.</span>
              </label>
              <div className="form-footer">
                <p>* Campos obligatorios</p>
                <button type="submit">PREPARAR EMAIL <span aria-hidden="true">→</span></button>
              </div>
              {formStatus === 'error' && <p className="form-message error" role="alert">Revisa los campos obligatorios antes de continuar.</p>}
              {formStatus === 'success' && <p className="form-message success" role="status">Hemos abierto tu aplicación de correo para que puedas completar el envío.</p>}
            </form>
          </div>
        </section>

        <section className="social-bar" aria-label="Redes sociales">
          <div className="content-wide social-bar-inner">
            <p>SIGUE LA HISTORIA</p>
            <div>
              {socialLinks.map(([name, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={name}>{name} <span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wide footer-main">
          <a className="footer-brand" href="#inicio" aria-label="Volver al inicio">
            <img src="/images/logo.png" alt="" aria-hidden="true" width="911" height="530" loading="lazy" />
          </a>
          <div className="footer-dates"><strong>10—12 JUNIO 2026</strong><span>O TINGLADO DO PORTO<br />VIGO · GALICIA</span></div>
          <nav aria-label="Navegación en pie de página">
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </nav>
        </div>
        <div className="content-wide footer-legal">
          <p>© 2026 FESTIVAL INTERNACIONAL DE SERIES RÍA DE VIGO</p>
          <div><span id="aviso-legal">AVISO LEGAL</span><span id="privacidad">PRIVACIDAD</span><span>ES · EN</span></div>
        </div>
      </footer>

      {lightbox && (
        <div
          className="programme-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Programa del ${lightbox.label.toLowerCase()}`}
          onClick={(event) => { if (event.target === event.currentTarget) setLightbox(null); }}
        >
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} autoFocus>
            CERRAR <span aria-hidden="true">✕</span>
          </button>
          <div className="lightbox-body">
            <p>{lightbox.date} · {lightbox.label.toUpperCase()}</p>
            <img src={lightbox.image} alt={`Programa del ${lightbox.label.toLowerCase()}`} />
          </div>
        </div>
      )}
    </>
  );
}
