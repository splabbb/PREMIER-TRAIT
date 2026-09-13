import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import './styles.css';

import heroImg from './assets/images/hero_craftsman_hands_1789220360041.jpg';
import caseStudyImg from './assets/images/case_study_wireframes_1789220375619.jpg';
import expertiseImg from './assets/images/expertise_plasterer_1789220397877.jpg';

// --- DATA ---

const navLinks = [
  { id: 'n1', label: 'Projets', href: '#projets' },
  { id: 'n2', label: 'Métiers', href: '#metiers' },
  { id: 'n3', label: 'Méthode', href: '#methode' },
  { id: 'n4', label: 'Services', href: '#services' },
  { id: 'n5', label: 'Studio', href: '#studio' },
];

const problems = [
  {
    id: 'p1',
    title: 'ON NE VOUS TROUVE PAS.',
    text: 'Votre réputation sur le terrain est excellente, mais les nouveaux clients ne vous trouvent pas en ligne.',
  },
  {
    id: 'p2',
    title: 'VOTRE SITE N’INSPIRE PAS CONFIANCE.',
    text: "Un design générique ou daté fait paraître votre entreprise moins professionnelle qu'elle ne l'est.",
  },
  {
    id: 'p3',
    title: 'DEMANDER UN DEVIS EST TROP COMPLIQUÉ.',
    text: 'Un parcours utilisateur confus ou un formulaire mal conçu font fuir les prospects qualifiés.',
  },
  {
    id: 'p4',
    title: 'VOS CONCURRENTS SONT MIEUX PRÉSENTÉS.',
    text: "À compétences égales, le client choisit l'entreprise dont l'image digitale rassure le plus.",
  },
];

const trades = [
  { id: 't1', num: '01', label: 'COUVERTURE' },
  { id: 't2', num: '02', label: 'ÉLECTRICITÉ' },
  { id: 't3', num: '03', label: 'PLOMBERIE' },
  { id: 't4', num: '04', label: 'PEINTURE' },
  { id: 't5', num: '05', label: 'MENUISERIE' },
];

const methodSteps = [
  {
    id: 'm1',
    num: '01',
    title: 'RELEVÉ',
    text: 'Comprendre le métier, le marché et les objectifs commerciaux.',
  },
  {
    id: 'm2',
    num: '02',
    title: 'PLAN',
    text: "Architecture de l'information, contenus, parcours de conversion.",
  },
  {
    id: 'm3',
    num: '03',
    title: 'CONCEPTION',
    text: 'Direction visuelle matérielle et expérience utilisateur spécialisée.',
  },
  {
    id: 'm4',
    num: '04',
    title: 'CONSTRUCTION',
    text: 'Développement, optimisation des performances techniques, SEO local.',
  },
  {
    id: 'm5',
    num: '05',
    title: 'LIVRAISON',
    text: 'Contrôle qualité, déploiement, vérification des métriques.',
  },
];

const services = [
  {
    id: 's1',
    title: 'ÊTRE TROUVÉ',
    text: 'Visibilité locale et référencement SEO.',
  },
  {
    id: 's2',
    title: 'ÊTRE CRÉDIBLE',
    text: 'Preuve, réputation et positionnement.',
  },
  {
    id: 's3',
    title: 'ÊTRE COMPRIS',
    text: 'Architecture claire des services proposés.',
  },
  {
    id: 's4',
    title: 'ÊTRE CONTACTÉ',
    text: 'Parcours de conversion et génération de devis.',
  },
];

const faqItems = [
  {
    id: 'f1',
    question: 'Ai-je besoin d’avoir déjà un site ?',
    answer:
      "Non. Nous pouvons partir de zéro et concevoir l'ensemble de votre infrastructure digitale.",
  },
  {
    id: 'f2',
    question: 'Le site fonctionnera-t-il sur téléphone ?',
    answer:
      "Absolument. Nous concevons chaque interface en priorisant l'usage mobile, là où se font la majorité des recherches locales.",
  },
];

// --- COMPONENTS ---

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
};

const Reveal = ({
  children,
  delay = 0,
  style = {},
  className = '',
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: 'var(--header-height)',
        background: 'var(--charcoal)',
        borderBottom: '1px solid var(--iron)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <a
          href="#"
          className="font-display"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'var(--chalk)',
            whiteSpace: 'nowrap',
          }}
        >
          PREMIER TRAIT
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <nav
            style={{
              display: 'flex',
              gap: '2rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-body"
                style={{
                  color: 'var(--stone)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.875rem',
            }}
          >
            Audit ↗
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="label-tech mobile-nav-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'var(--chalk)' }}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? 'FERMER' : 'MENU'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--header-height)',
            background: 'var(--charcoal)',
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display"
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--chalk)',
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-display"
              style={{
                fontSize: '2.5rem',
                color: 'var(--oxide)',
                marginTop: '2rem',
              }}
            >
              DEMANDER UN AUDIT ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section
    className="section-charcoal"
    style={{
      paddingTop: '4rem',
      minHeight: 'calc(100svh - var(--header-height))',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div
      className="container grid grid-12"
      style={{ alignItems: 'center' }}
    >
      <Reveal
        className="hero-col-copy"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          className="font-mono"
          style={{
            color: 'var(--stone)',
            marginBottom: '1.5rem',
            display: 'inline-block',
          }}
        >
          STUDIO DIGITAL DES MÉTIERS
        </span>

        <h1
          className="font-display"
          style={{
            fontSize: 'var(--text-display-lg)',
            maxWidth: '1000px',
          }}
        >
          VOTRE SAVOIR-FAIRE MÉRITE MIEUX QU'UN SITE GÉNÉRIQUE.
        </h1>

        <p
          style={{
            marginTop: '2rem',
            marginBottom: '3rem',
            fontSize: 'var(--text-body-lg)',
            color: 'var(--stone)',
            maxWidth: '540px',
          }}
        >
          Sites et systèmes digitaux conçus pour les artisans qui veulent être
          trouvés, inspirer confiance et transformer les recherches locales en
          demandes de devis.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a href="#contact" className="btn btn-primary">
            Demander un audit ↗
          </a>

          <a href="#projets" className="btn btn-secondary-light">
            Voir les projets ↓
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="hero-col-visual">
        <div
          className="photo-container"
          style={{ aspectRatio: '3/4' }}
        >
          <img
            src={heroImg}
            alt="Mains d'un artisan utilisant un cordeau à craie sur des ardoises, détail macro du métier"
            className="photo-img"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />

          <span
            className="font-mono photo-mark-tr"
            style={{
              zIndex: 2,
              color: 'var(--workshop-white)',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            PT / 001
          </span>

          <span
            className="font-mono photo-mark-bl"
            style={{
              zIndex: 2,
              color: 'var(--workshop-white)',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            MÉTIER / MATIÈRE
          </span>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: '1px',
              height: '2rem',
              background: 'var(--oxide)',
              zIndex: 2,
            }}
          />
        </div>
      </Reveal>
    </div>
  </section>
);

const QuickProof = () => (
  <div
    style={{
      borderTop: '1px solid var(--iron)',
      borderBottom: '1px solid var(--iron)',
      background: 'var(--charcoal)',
    }}
  >
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5rem var(--gutter)',
        flexWrap: 'wrap',
        gap: '2rem',
      }}
    >
      {['SEO LOCAL', 'UX MÉTIER', 'RESPONSIVE', 'LIVRAISON PRODUCTION'].map(
        (proof) => (
          <span
            key={proof}
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            {proof}
          </span>
        ),
      )}
    </div>
  </div>
);

const Problems = () => (
  <section className="section section-chalk">
    <div className="container">
      <Reveal>
        <h2
          className="font-display"
          style={{
            fontSize: 'var(--text-display-md)',
            marginBottom: '4rem',
            maxWidth: '800px',
          }}
        >
          VOTRE TRAVAIL EST SOLIDE. VOTRE SITE DOIT LE PROUVER.
        </h2>
      </Reveal>

      <div className="grid grid-2">
        {problems.map((problem, index) => (
          <Reveal
            key={problem.id}
            delay={index * 0.1}
          >
            <div
              style={{
                borderTop: '2px solid var(--charcoal)',
                paddingTop: '1rem',
              }}
            >
              <span
                className="font-mono"
                style={{ color: 'var(--charcoal)' }}
              >
                0{index + 1}
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  margin: '1rem 0',
                }}
              >
                {problem.title}
              </h3>

              <p style={{ color: 'var(--iron)' }}>
                {problem.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section
    id="metiers"
    className="section section-iron"
  >
    <div
      className="container grid grid-2"
      style={{
        gap: '4rem',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Reveal>
          <span
            className="font-mono"
            style={{
              color: 'var(--stone)',
              display: 'block',
              marginBottom: '2rem',
            }}
          >
            EXPERTISE MÉTIERS
          </span>
        </Reveal>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {trades.map((trade, index) => (
            <Reveal
              key={trade.id}
              delay={index * 0.05}
            >
              <div
                style={{
                  borderBottom: '1px solid var(--stone)',
                  paddingBottom: '1rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    color: 'var(--ochre)',
                    marginRight: '1rem',
                  }}
                >
                  {trade.num} /
                </span>

                <span
                  className="font-display"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--chalk)',
                  }}
                >
                  {trade.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <div
          className="photo-container"
          style={{ aspectRatio: '3/4' }}
        >
          <img
            src={expertiseImg}
            alt="Détail macro d'une truelle appliquant du plâtre, geste technique"
            className="photo-img"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          <div
            style={{
              position: 'absolute',
              top: 0,
              right: '10%',
              width: '1px',
              height: '3rem',
              background: 'var(--chalk)',
              opacity: 0.5,
              zIndex: 2,
            }}
          />

          <span
            className="font-mono photo-mark-bl"
            style={{
              zIndex: 2,
              color: 'var(--charcoal)',
              background: 'var(--chalk)',
              padding: '0.25rem 0.5rem',
            }}
          >
            APPLICATION MATÉRIAU
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

const CaseStudy = () => (
  <section
    id="projets"
    className="section section-charcoal"
  >
    <div className="container">
      <Reveal>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--iron)',
            paddingBottom: '1rem',
          }}
        >
          <span
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            PROJET — 001
          </span>

          <span
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            TYPE — CAS CONCEPTUEL
          </span>

          <span
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            MÉTIER — COUVERTURE
          </span>

          <span
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            ZONE — LILLE MÉTROPOLE
          </span>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: 'var(--text-display-md)',
            marginBottom: '4rem',
          }}
        >
          SYSTÈME DIGITAL / COUVERTURE
        </h2>
      </Reveal>

      <div className="grid grid-12">
        <div
          className="hero-col-copy"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          <Reveal>
            <h3
              className="font-mono"
              style={{
                marginBottom: '1rem',
                color: 'var(--ochre)',
              }}
            >
              01 — SITUATION & DIAGNOSTIC
            </h3>

            <p style={{ color: 'var(--stone)' }}>
              Services mal hiérarchisés, zone d'intervention invisible,
              aucune preuve de réalisation claire et un référencement local
              insuffisant pour générer des appels entrants.
            </p>
          </Reveal>

          <Reveal>
            <h3
              className="font-mono"
              style={{
                marginBottom: '1rem',
                color: 'var(--ochre)',
              }}
            >
              02 — RÉPONSE
            </h3>

            <p style={{ color: 'var(--stone)' }}>
              Refonte totale de l'architecture UX autour des pages métiers,
              optimisation de la structure sémantique SEO local et intégration
              d'un parcours de demande de devis qualifié.
            </p>
          </Reveal>

          <Reveal>
            <h3
              className="font-mono"
              style={{
                marginBottom: '1rem',
                color: 'var(--ochre)',
              }}
            >
              03 — RÉSULTATS TECHNIQUES
            </h3>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <li
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  borderBottom: '1px solid var(--iron)',
                  paddingBottom: '0.5rem',
                }}
              >
                RESPONSIVE
                <span
                  style={{
                    color: 'var(--oxide)',
                    float: 'right',
                  }}
                >
                  VALIDÉ
                </span>
              </li>

              <li
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  borderBottom: '1px solid var(--iron)',
                  paddingBottom: '0.5rem',
                }}
              >
                PARCOURS DEVIS
                <span
                  style={{
                    color: 'var(--oxide)',
                    float: 'right',
                  }}
                >
                  INTÉGRÉ
                </span>
              </li>

              <li
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  borderBottom: '1px solid var(--iron)',
                  paddingBottom: '0.5rem',
                }}
              >
                ARCHITECTURE SEO
                <span
                  style={{
                    color: 'var(--oxide)',
                    float: 'right',
                  }}
                >
                  STRUCTURÉE
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="hero-col-visual"
        >
          <div
            className="photo-container"
            style={{
              aspectRatio: '3/4',
              minHeight: '100%',
            }}
          >
            <img
              src={caseStudyImg}
              alt="Plans de construction à côté d'une tablette digitale affichant une interface de wireframe"
              className="photo-img"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <span
              className="font-mono photo-mark-tr"
              style={{
                zIndex: 2,
                color: 'var(--workshop-white)',
                background: 'var(--charcoal)',
                padding: '0.25rem 0.5rem',
              }}
            >
              04 — INTERFACE
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Studio = () => (
  <section
    id="studio"
    className="section section-iron"
  >
    <div className="container">
      <Reveal>
        <div style={{ maxWidth: '800px' }}>
          <span
            className="font-mono"
            style={{
              color: 'var(--stone)',
              display: 'block',
              marginBottom: '2rem',
            }}
          >
            LE STUDIO
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: 'var(--text-display-md)',
              marginBottom: '2rem',
              color: 'var(--chalk)',
            }}
          >
            UN STUDIO DIGITAL CONSTRUIT AUTOUR DES RÉALITÉS DU TERRAIN.
          </h2>

          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--stone)',
              maxWidth: '600px',
            }}
          >
            PREMIER TRAIT n'est pas une agence créative généraliste. C'est un
            studio spécialisé combinant UX, design, développement web et
            visibilité locale avec une logique commerciale spécifique aux
            métiers et à l'artisanat.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const MethodAndServices = () => (
  <section
    id="methode"
    className="section section-charcoal"
  >
    <div className="container grid grid-2">
      <Reveal>
        <span
          className="font-mono"
          style={{
            color: 'var(--stone)',
            display: 'block',
            marginBottom: '2rem',
          }}
        >
          MÉTHODE
        </span>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {methodSteps.map((step) => (
            <div key={step.id}>
              <span
                className="font-mono"
                style={{
                  color: 'var(--ochre)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                {step.num} — {step.title}
              </span>

              <p style={{ color: 'var(--stone)' }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <span
          id="services"
          className="font-mono"
          style={{
            color: 'var(--stone)',
            display: 'block',
            marginBottom: '2rem',
          }}
        >
          SERVICES ORIENTÉS RÉSULTATS
        </span>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                borderTop: '1px solid var(--iron)',
                paddingTop: '1rem',
              }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: 'var(--chalk)',
                }}
              >
                {service.title}
              </h3>

              <p style={{ color: 'var(--stone)' }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const PositioningStatement = () => (
  <section
    className="section-iron"
    style={{
      padding: '6rem 0',
      borderTop: '1px solid var(--stone)',
    }}
  >
    <div className="container">
      <Reveal>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--chalk)',
              marginBottom: '1.5rem',
            }}
          >
            COMPRENDRE LE MÉTIER AVANT DE DESSINER LE SITE.
          </h2>

          <p
            className="font-mono"
            style={{ color: 'var(--stone)' }}
          >
            ARCHITECTURE, CONTENU ET CONVERSION COMMENCENT PAR LA COMPRÉHENSION
            DU TERRAIN.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const FAQ = () => (
  <section className="section section-charcoal">
    <div className="container">
      <Reveal>
        <h2
          className="font-display"
          style={{
            fontSize: 'var(--text-display-md)',
            marginBottom: '4rem',
          }}
        >
          FAQ
        </h2>
      </Reveal>

      {faqItems.map((item, index) => (
        <Reveal
          key={item.id}
          delay={index * 0.1}
        >
          <details
            style={{
              borderBottom: '1px solid var(--iron)',
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <summary
              className="font-display"
              style={{
                padding: '0.5rem 0',
                cursor: 'pointer',
                fontSize: '1.25rem',
              }}
            >
              {item.question}
            </summary>

            <p
              style={{
                paddingTop: '1rem',
                color: 'var(--stone)',
              }}
            >
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="section section-chalk"
    style={{ padding: '6rem 0' }}
  >
    <div className="container grid grid-2">
      <Reveal>
        <h2
          className="font-display"
          style={{ fontSize: 'var(--text-display-md)' }}
        >
          VOUS MAÎTRISEZ LE MÉTIER.
        </h2>

        <h2
          className="font-display"
          style={{
            fontSize: 'var(--text-display-md)',
            color: 'var(--stone)',
          }}
        >
          NOUS CONSTRUISONS LE SYSTÈME QUI LE VEND.
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <form
          style={{
            background: 'var(--workshop-white)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            color: 'var(--charcoal)',
            border: '1px solid var(--stone)',
          }}
          onSubmit={(event) => event.preventDefault()}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <label
              htmlFor="nom"
              className="font-mono"
            >
              01 — NOM
            </label>

            <input
              id="nom"
              type="text"
              style={{
                padding: '1rem',
                border: '1px solid var(--stone)',
                background: 'transparent',
              }}
              required
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <label
              htmlFor="entreprise"
              className="font-mono"
            >
              02 — ENTREPRISE
            </label>

            <input
              id="entreprise"
              type="text"
              style={{
                padding: '1rem',
                border: '1px solid var(--stone)',
                background: 'transparent',
              }}
              required
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <label
              htmlFor="metier"
              className="font-mono"
            >
              03 — MÉTIER
            </label>

            <input
              id="metier"
              type="text"
              style={{
                padding: '1rem',
                border: '1px solid var(--stone)',
                background: 'transparent',
              }}
              required
            />
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: '1 1 200px',
              }}
            >
              <label
                htmlFor="email"
                className="font-mono"
              >
                04 — EMAIL
              </label>

              <input
                id="email"
                type="email"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--stone)',
                  background: 'transparent',
                }}
                required
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: '1 1 200px',
              }}
            >
              <label
                htmlFor="telephone"
                className="font-mono"
              >
                05 — TÉLÉPHONE
              </label>

              <input
                id="telephone"
                type="tel"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--stone)',
                  background: 'transparent',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            Demander mon audit ↗
          </button>
        </form>
      </Reveal>
    </div>
  </section>
);

const Footer = () => (
  <footer
    className="section-charcoal"
    style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--iron)',
    }}
  >
    <div className="container">
      <span
        className="font-display"
        style={{
          fontSize: 'clamp(1.5rem, 5vw, 3rem)',
          color: 'var(--stone)',
        }}
      >
        PREMIER TRAIT
      </span>

      <span
        className="font-mono"
        style={{
          display: 'block',
          marginTop: '1rem',
          color: 'var(--iron)',
        }}
      >
        © {new Date().getFullYear()} — STUDIO DIGITAL DES MÉTIERS
      </span>
    </div>
  </footer>
);

// --- APP ---

export default function App() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Hero />
        <QuickProof />
        <Problems />
        <Expertise />
        <CaseStudy />
        <Studio />
        <MethodAndServices />
        <PositioningStatement />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}