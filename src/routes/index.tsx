import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-james-lass.png";
import portrait from "@/assets/james-portrait.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "James Lass — Coach Ejecutivo & Mentor Internacional" },
      {
        name: "description",
        content:
          "Liderazgo Neuroestratégico para CEOs, ejecutivos y organizaciones. +30 años transformando líderes con inteligencia emocional aplicada y cultura de alto desempeño.",
      },
      { property: "og:title", content: "James Lass — Liderazgo Neuroestratégico" },
      {
        property: "og:description",
        content:
          "Coach Profesional certificado IAC, Mentor Internacional, Instructor STPS y formación Harvard Business School. Acompaño la evolución del liderazgo moderno.",
      },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "James Lass",
          jobTitle: "Coach Profesional, Mentor Internacional, Instructor STPS",
          description:
            "Especialista en liderazgo neuroestratégico, transformación organizacional y desarrollo ejecutivo con más de 30 años de experiencia.",
          alumniOf: ["TU Dortmund", "Harvard Business School Online"],
          sameAs: [
            "https://www.linkedin.com/in/CoachJamesLass",
            "https://www.vivehoy.com.mx/jameslass.html",
            "https://www.instagram.com/coachjameslass/",
            "https://www.youtube.com/@CoachJamesLass",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/message/H3UB6UAZHKTSF1";

const credentials = [
  "Harvard Business School Online",
  "TU Dortmund — Lic. Informática Empresarial",
  "International Association of Coaching (IAC)",
  "World Coaching Corp.",
  "Confederación Interamericana de Coaching",
  "Instructor Externo STPS — México",
];

const pillars = [
  {
    n: "01",
    title: "Claridad Estratégica",
    body: "Decisiones ejecutivas bajo presión con visión, foco y arquitectura de pensamiento de largo plazo.",
  },
  {
    n: "02",
    title: "Inteligencia Neuroemocional",
    body: "Neurociencia aplicada al liderazgo para regular emociones, sostener desempeño y liderar sin desgaste.",
  },
  {
    n: "03",
    title: "Cultura Humana de Alto Desempeño",
    body: "Equipos alineados, resilientes y conscientes que entregan resultados extraordinarios sostenidos.",
  },
];

const numbers = [
  { k: "+30", v: "Años de experiencia ejecutiva" },
  { k: "2", v: "Continentes — Europa y LATAM" },
  { k: "+6", v: "Certificaciones internacionales" },
  { k: "100%", v: "Procesos confidenciales" },
];

const programs = [
  {
    tag: "Advisory 1:1",
    title: "Executive NeuroLeadership Advisory™",
    price: "Desde $25,000 MXN / mes",
    premium: "Premium desde $75,000 MXN trimestrales",
    bullets: [
      "Diagnóstico ejecutivo inicial",
      "Sesiones privadas 1:1 (90 min)",
      "Desarrollo de presencia ejecutiva",
      "Gestión de presión y fatiga ejecutiva",
      "Acceso prioritario WhatsApp / Email",
    ],
    ideal: "CEOs, founders, directores y líderes senior.",
    cta: "Agendar sesión",
  },
  {
    tag: "Corporativo",
    title: "Organizational Culture Transformation™",
    price: "Desde $120,000 MXN por proyecto",
    premium: "Corporativos avanzados desde $350,000 MXN",
    bullets: [
      "Diagnóstico cultural organizacional",
      "Detección de desconexión directiva",
      "Workshops ejecutivos in-company",
      "Plan estratégico de transformación cultural",
      "Seguimiento de implementación 3–12 meses",
    ],
    ideal: "Empresas y equipos directivos en evolución.",
    cta: "Iniciar programa",
  },
  {
    tag: "Programas",
    title: "High Performance Leadership Programs™",
    price: "Workshops desde $35,000 MXN",
    premium: "Bootcamps desde $150,000 MXN",
    bullets: [
      "Liderazgo neuroestratégico aplicado",
      "Toma de decisiones bajo presión",
      "Comunicación ejecutiva avanzada",
      "Resolución inteligente de conflictos",
      "Modalidad presencial, virtual o híbrida",
    ],
    ideal: "Líderes emergentes, mandos medios y directivos.",
    cta: "Aplicar ahora",
  },
  {
    tag: "Intensivos",
    title: "Executive Leadership Intensives™",
    price: "Intensivos privados desde $18,000 MXN",
    premium: "Executive Retreats desde $65,000 MXN",
    bullets: [
      "Diagnóstico estratégico acelerado",
      "Reestructuración de visión y liderazgo",
      "Gestión de crisis y transiciones",
      "Plan de acción personalizado",
      "Retiros privados de día completo",
    ],
    ideal: "Líderes en expansión, crisis o transición.",
    cta: "Solicitar acceso",
  },
];

const testimonials = [
  {
    n: "María Gómez",
    r: "Directora Ejecutiva",
    q: "Trabajar con James fue transformador. Me ayudó a superar barreras invisibles y a encontrar equilibrio entre vida personal y liderazgo.",
  },
  {
    n: "Carlos Ramírez",
    r: "Emprendedor",
    q: "Clarificó mi propósito y desbloqueó la pasión que necesitaba para llevar mi negocio al siguiente nivel. Su enfoque es quirúrgico.",
  },
  {
    n: "Laura Sánchez",
    r: "Gerente de RR. HH.",
    q: "Una de las mejores inversiones en mi desarrollo. Descubrí fortalezas que no sabía que tenía y hoy decido con seguridad.",
  },
  {
    n: "Roberto Díaz",
    r: "Consultor de Negocios",
    q: "Me dio herramientas y confianza para alcanzar metas que parecían inalcanzables. Crecimiento real, profesional y personal.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="James Lass" width={36} height={36} className="rounded-full ring-1 ring-gold/40" />
            <span className="font-serif text-lg tracking-wide">
              James <span className="text-gradient-gold">Lass</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#filosofia" className="hover:text-foreground transition">Filosofía</a>
            <a href="#credenciales" className="hover:text-foreground transition">Credenciales</a>
            <a href="#programas" className="hover:text-foreground transition">Programas</a>
            <a href="#testimonios" className="hover:text-foreground transition">Testimonios</a>
          </nav>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:scale-105 transition"
          >
            Agendar diagnóstico
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.2em] uppercase text-gold-soft mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Coach Profesional · Mentor Internacional · Instructor STPS
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              El liderazgo moderno
              <br />
              <span className="text-gradient-gold italic">necesita evolucionar.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Acompaño a CEOs, ejecutivos y organizaciones a desarrollar{" "}
              <span className="text-foreground">liderazgo neuroestratégico</span>, inteligencia
              emocional aplicada y culturas de alto desempeño sostenible.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:shadow-deep hover:scale-[1.02] transition"
              >
                Agendar diagnóstico ejecutivo
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#programas"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border hover:border-gold/60 transition text-foreground"
              >
                Ver programas
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {numbers.map((n) => (
                <div key={n.v}>
                  <div className="font-serif text-3xl text-gradient-gold">{n.k}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{n.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-fade-up">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-deep ring-1 ring-gold/20">
              <img
                src={portrait}
                alt="James Lass — Coach Ejecutivo"
                width={1024}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                <img src={logo} alt="" width={56} height={56} className="rounded-full ring-2 ring-gold/60" />
                <div>
                  <div className="font-serif text-xl">James Lass</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">
                    Co-Fundador · Vive Hoy Coaching
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-gold blur-3xl opacity-30" />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="filosofia" className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">El verdadero desafío</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            El problema no es el talento.
            <br />
            <span className="italic text-gradient-gold">Es la desconexión del liderazgo.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Las empresas modernas enfrentan niveles históricos de desgaste emocional, desconexión
            cultural y pérdida de alineación estratégica. El verdadero desafío aparece cuando el
            liderazgo pierde claridad humana, inteligencia emocional aplicada y capacidad adaptativa
            frente a la complejidad.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden ring-1 ring-border">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="bg-surface p-10 hover:bg-card transition group relative"
            >
              <div className="font-serif text-6xl text-gold/30 group-hover:text-gold/60 transition">
                {p.n}
              </div>
              <h3 className="font-serif text-2xl mt-4">{p.title}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENCIALES */}
      <section id="credenciales" className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Formación & Acreditaciones
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Una autoridad construida en
              <span className="text-gradient-gold italic"> dos continentes.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Alemán de origen, con trayectoria destacada en Europa y América Latina. Más de tres
              décadas integrando dirección organizacional, neurociencia aplicada y desarrollo
              ejecutivo de alto nivel.
            </p>

            <ul className="mt-10 space-y-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-gold shrink-0" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-surface to-background ring-1 ring-gold/20 p-10 flex flex-col justify-between shadow-deep relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <img src={logo} alt="James Lass" width={120} height={120} className="rounded-full ring-2 ring-gold/60" />
                <div className="hairline w-24 my-8" />
                <p className="font-serif text-2xl md:text-3xl leading-snug">
                  "Las organizaciones evolucionan cuando el liderazgo desarrolla{" "}
                  <span className="text-gradient-gold italic">claridad humana</span>."
                </p>
              </div>
              <div className="relative text-sm text-muted-foreground tracking-wider uppercase">
                — James Lass
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Programas</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Diseñados para líderes que generan
              <span className="text-gradient-gold italic"> transformación real.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-gold/50 transition shadow-deep flex flex-col"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="inline-block self-start text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 rounded-full px-3 py-1">
                  {p.tag}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl mt-6 leading-snug">{p.title}</h3>
                <div className="mt-5 space-y-1">
                  <div className="text-gradient-gold font-medium">{p.price}</div>
                  <div className="text-xs text-muted-foreground">{p.premium}</div>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-gold mt-0.5">◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border/60">
                  <div className="text-xs text-muted-foreground italic mb-4">{p.ideal}</div>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition"
                  >
                    {p.cta} <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-serif text-2xl md:text-3xl">
              Conferencias & Keynotes — <span className="text-gradient-gold italic">Executive Conferences™</span>
            </h3>
            <p className="text-muted-foreground mt-3">
              Conferencias desde $35,000 MXN · Keynotes premium desde $75,000 MXN
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full border border-gold/40 hover:bg-gold/10 transition text-sm"
            >
              Solicitar cotización corporativa →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Testimonios</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Líderes que ya viven
              <span className="text-gradient-gold italic"> la transformación.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.n}
                className="relative bg-surface border border-border rounded-2xl p-8 lg:p-10 hover:border-gold/40 transition"
              >
                <div className="font-serif text-6xl text-gold/40 leading-none">"</div>
                <blockquote className="text-lg leading-relaxed text-foreground/90 -mt-4">
                  {t.q}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border/60">
                  <div className="font-serif text-lg">{t.n}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">
                    {t.r}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <img
            src={logo}
            alt=""
            width={80}
            height={80}
            className="mx-auto rounded-full ring-2 ring-gold/60 mb-8"
          />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Es momento de evolucionar la forma en que
            <span className="text-gradient-gold italic"> lideras, decides y transformas.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conversemos sobre el futuro de tu liderazgo y tu organización. Un diagnóstico inicial
            confidencial es el primer paso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-105 transition"
            >
              Agendar diagnóstico por WhatsApp →
            </a>
            <a
              href="https://www.linkedin.com/in/CoachJamesLass"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-gold/60 transition"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={32} height={32} className="rounded-full ring-1 ring-gold/40" />
            <span className="font-serif">James Lass · Vive Hoy Coaching & Mentoring</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/CoachJamesLass" target="_blank" rel="noreferrer" className="hover:text-gold transition">LinkedIn</a>
            <a href="https://www.instagram.com/coachjameslass/" target="_blank" rel="noreferrer" className="hover:text-gold transition">Instagram</a>
            <a href="https://www.youtube.com/@CoachJamesLass" target="_blank" rel="noreferrer" className="hover:text-gold transition">YouTube</a>
            <a href="https://www.tiktok.com/@CoachJamesLass" target="_blank" rel="noreferrer" className="hover:text-gold transition">TikTok</a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} James Lass. Todos los derechos reservados.</div>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Iniciar conversación por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center hover:scale-110 transition"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary-foreground" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l.241.383-1 3.65 3.738-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
