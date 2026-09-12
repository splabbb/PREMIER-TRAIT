import React, { useState } from 'react';
import './styles.css';

// --- DATA ---
const navLinks = [
  { id: 'n1', label: 'Projets', href: '#projets' },
  { id: 'n2', label: 'Métiers', href: '#metiers' },
  { id: 'n3', label: 'Méthode', href: '#methode' },
  { id: 'n4', label: 'Services', href: '#services' },
  { id: 'n5', label: 'Studio', href: '#studio' }
];

const problems = [
  { id: 'p1', title: "ON NE VOUS TROUVE PAS.", text: "Votre réputation sur le terrain est excellente, mais les nouveaux clients ne vous trouvent pas en ligne." },
  { id: 'p2', title: "VOTRE SITE N’INSPIRE PAS CONFIANCE.", text: "Un design générique ou daté fait paraître votre entreprise moins professionnelle qu'elle ne l'est." },
  { id: 'p3', title: "DEMANDER UN DEVIS EST TROP COMPLIQUÉ.", text: "Un parcours utilisateur confus ou un formulaire mal conçu font fuir les prospects qualifiés." },
  { id: 'p4', title: "VOS CONCURRENTS SONT MIEUX PRÉSENTÉS.", text: "À compétences égales, le client choisit l'entreprise dont l'image digitale rassure le plus." }
];

const trades = [
  { id: 't1', num: '01', label: 'COUVERTURE' },
  { id: 't2', num: '02', label: 'ÉLECTRICITÉ' },
  { id: 't3', num: '03', label: 'PLOMBERIE' },
  { id: 't4', num: '04', label: 'PEINTURE' },
  { id: 't5', num: '05', label: 'MENUISERIE' }
];

const methodSteps = [
  { id: 'm1', num: '01', title: 'RELEVÉ', text: 'Comprendre le métier, le marché et les objectifs.' },
  { id: 'm2', num: '02', title: 'PLAN', text: 'Architecture, contenus, parcours.' },
  { id: 'm3', num: '03', title: 'CONCEPTION', text: 'Direction visuelle et UX.' },
  { id: 'm4', num: '04', title: 'CONSTRUCTION', text: 'Développement, performance, SEO.' },
  { id: 'm5', num: '05', title: 'LIVRAISON', text: 'QA, déploiement, analytics.' }
];

const services = [
  { id: 's1', title: 'ÊTRE TROUVÉ', text: 'Visibilité locale et référencement SEO.' },
  { id: 's2', title: 'ÊTRE CRÉDIBLE', text: 'Preuve, réputation et positionnement.' },
  { id: 's3', title: 'ÊTRE COMPRIS', text: 'Architecture claire des services proposés.' },
  { id: 's4', title: 'ÊTRE CONTACTÉ', text: 'Parcours de conversion et génération de devis.' }
];

const faqItems = [
  { id: 'f1', question: "Ai-je besoin d’avoir déjà un site ?", answer: "Non. Nous pouvons partir de zéro et concevoir l'ensemble de votre présence digitale." },
  { id: 'f2', question: "Le site fonctionnera-t-il sur téléphone ?", answer: "Absolument. Nous concevons chaque interface en priorisant l'usage mobile, là où se font 70% des recherches locales." }
];

// --- COMPONENTS ---
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, height: 'var(--header-height)', background: 'var(--charcoal)', borderBottom: '1px solid var(--iron)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <a href="#" className="font-display" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--chalk)', whiteSpace: 'nowrap' }}>PREMIER TRAIT</a>
        <button className="label-tech" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--chalk)' }}>
          {menuOpen ? 'FERMER' : 'MENU'}
        </button>
      </div>
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, top: 'var(--header-height)', background: 'var(--charcoal)', padding: '2rem' }}>
           <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {navLinks.map(link => (
               <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)} className="font-display" style={{ fontSize: '2rem' }}>{link.label}</a>
             ))}
           </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="section-charcoal" style={{ paddingTop: '12rem', minHeight: '90vh' }}>
    <div className="container">
      <span className="label-tech" style={{ color: 'var(--stone)' }}>STUDIO DIGITAL DES MÉTIERS</span>
      <h1 className="font-display" style={{ fontSize: 'var(--text-display-lg)', marginTop: '2rem', maxWidth: '1000px' }}>VOTRE SAVOIR-FAIRE MÉRITE MIEUX QU'UN SITE GÉNÉRIQUE.</h1>
      <p style={{ marginTop: '2rem', marginBottom: '3rem', fontSize: 'var(--text-body-lg)', color: 'var(--stone)', maxWidth: '580px' }}>
        Sites et systèmes digitaux conçus pour les artisans qui veulent être trouvés, inspirer confiance et transformer les recherches locales en demandes de devis.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#contact" className="btn btn-primary">Demander un audit ↗</a>
        <a href="#projets" className="btn btn-secondary-light">Voir les projets ↓</a>
      </div>
    </div>
  </section>
);

const QuickProof = () => (
  <div style={{ borderTop: '1px solid var(--iron)', borderBottom: '1px solid var(--iron)', background: 'var(--charcoal)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem var(--gutter)', flexWrap: 'wrap', gap: '1rem' }}>
      {['SEO LOCAL', 'UX MÉTIER', 'RESPONSIVE', 'LIVRAISON PRODUCTION'].map((proof, i) => (
         <span key={i} className="font-mono" style={{ color: 'var(--stone)' }}>{proof}</span>
      ))}
    </div>
  </div>
);

const Problems = () => (
  <section className="section section-chalk">
    <div className="container">
      <h2 className="font-display" style={{ fontSize: 'var(--text-display-md)', marginBottom: '4rem', maxWidth: '800px' }}>VOTRE TRAVAIL EST SOLIDE. VOTRE SITE DOIT LE PROUVER.</h2>
      <div className="grid grid-2">
        {problems.map((p, i) => (
          <div key={p.id} style={{ borderTop: '2px solid var(--charcoal)', paddingTop: '1rem' }}>
            <span className="font-mono">0{i + 1}</span>
            <h3 className="font-display" style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{p.title}</h3>
            <p style={{ color: 'var(--iron)' }}>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="metiers" className="section section-iron">
    <div className="container">
       <span className="font-mono" style={{ color: 'var(--stone)', display: 'block', marginBottom: '2rem' }}>EXPERTISE MÉTIERS</span>
       <div className="grid grid-3">
         {trades.map(t => (
           <div key={t.id} style={{ borderBottom: '1px solid var(--stone)', paddingBottom: '1rem' }}>
             <span className="font-mono" style={{ color: 'var(--ochre)', marginRight: '1rem' }}>{t.num} /</span>
             <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--chalk)' }}>{t.label}</span>
           </div>
         ))}
       </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section id="projets" className="section section-chalk">
    <div className="container">
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <span className="font-mono" style={{ color: 'var(--stone)' }}>PROJET — 003</span>
        <span className="font-mono" style={{ color: 'var(--stone)' }}>MÉTIER — COUVERTURE</span>
        <span className="font-mono" style={{ color: 'var(--stone)' }}>ZONE — LILLE MÉTROPOLE</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 'var(--text-display-md)', marginBottom: '4rem' }}>ÉTUDE DE CAS : ENTREPRISE DE COUVERTURE</h2>
      <div className="grid grid-2">
        <div>
          <h3 className="font-mono" style={{ marginBottom: '1rem', color: 'var(--oxide)' }}>SITUATION & DIAGNOSTIC</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--iron)' }}>Services mal hiérarchisés, zone d'intervention invisible, aucune preuve de réalisation claire et un référencement local insuffisant pour générer des appels.</p>
          <h3 className="font-mono" style={{ marginBottom: '1rem', color: 'var(--oxide)' }}>RÉPONSE</h3>
          <p style={{ color: 'var(--iron)' }}>Refonte totale de l'architecture UX autour des pages métiers, optimisation du SEO local (Lille Métropole) et intégration d'un parcours de devis simplifié.</p>
        </div>
        <div style={{ borderLeft: '1px solid var(--stone)', paddingLeft: '2rem' }}>
          <h3 className="font-mono" style={{ marginBottom: '1rem', color: 'var(--charcoal)' }}>RÉSULTATS TECHNIQUES</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="font-display" style={{ fontSize: '2rem' }}>PAGESPEED <span style={{ color: 'var(--oxide)' }}>95</span></li>
            <li className="font-display" style={{ fontSize: '2rem' }}>SEO LOCAL <span style={{ color: 'var(--oxide)' }}>+40%</span></li>
            <li className="font-display" style={{ fontSize: '2rem' }}>CONVERSION <span style={{ color: 'var(--oxide)' }}>OPTIMISÉE</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const MethodAndServices = () => (
  <section id="methode" className="section section-charcoal">
    <div className="container grid grid-2">
      <div>
        <span className="font-mono" style={{ color: 'var(--stone)', display: 'block', marginBottom: '2rem' }}>MÉTHODE</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {methodSteps.map(m => (
            <div key={m.id}>
              <span className="font-mono" style={{ color: 'var(--ochre)', display: 'block', marginBottom: '0.5rem' }}>{m.num} — {m.title}</span>
              <p style={{ color: 'var(--stone)' }}>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span id="services" className="font-mono" style={{ color: 'var(--stone)', display: 'block', marginBottom: '2rem' }}>SERVICES ORIENTÉS RÉSULTATS</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map(s => (
            <div key={s.id} style={{ borderTop: '1px solid var(--iron)', paddingTop: '1rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--chalk)' }}>{s.title}</h3>
              <p style={{ color: 'var(--stone)' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="section-iron" style={{ padding: '4rem 0', borderTop: '1px solid var(--stone)' }}>
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
         <p className="font-display" style={{ fontSize: '2rem', color: 'var(--chalk)', marginBottom: '2rem' }}>"PREMIER TRAIT A COMPRIS NOTRE MÉTIER AVANT MÊME DE PARLER DE SITE WEB. RÉSULTAT : +40% DE DEMANDES DE DEVIS LOCALES."</p>
         <span className="font-mono" style={{ color: 'var(--ochre)' }}>— DIRIGEANT, ENTREPRISE DE COUVERTURE</span>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="section section-iron">
    <div className="container">
      <h2 className="font-display" style={{ fontSize: 'var(--text-display-md)', marginBottom: '4rem' }}>FAQ</h2>
      {faqItems.map(item => (
        <details key={item.id} style={{ borderBottom: '1px solid var(--stone)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <summary className="font-display" style={{ padding: '0.5rem 0', cursor: 'pointer', fontSize: '1.25rem' }}>{item.question}</summary>
          <p style={{ paddingTop: '1rem', color: 'var(--stone)' }}>{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section section-charcoal" style={{ padding: '6rem 0' }}>
    <div className="container grid grid-2">
      <div>
        <h2 className="font-display" style={{ fontSize: 'var(--text-display-md)' }}>VOUS MAÎTRISEZ LE MÉTIER.</h2>
        <h2 className="font-display" style={{ fontSize: 'var(--text-display-md)', color: 'var(--stone)' }}>NOUS CONSTRUISONS LE SYSTÈME QUI LE VEND.</h2>
      </div>
      <form style={{ background: 'var(--chalk)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--charcoal)' }} onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Nom" style={{ padding: '1rem', border: '1px solid var(--stone)', background: 'transparent' }} />
        <input type="text" placeholder="Entreprise" style={{ padding: '1rem', border: '1px solid var(--stone)', background: 'transparent' }} />
        <input type="text" placeholder="Métier" style={{ padding: '1rem', border: '1px solid var(--stone)', background: 'transparent' }} />
        <input type="email" placeholder="Téléphone ou email" style={{ padding: '1rem', border: '1px solid var(--stone)', background: 'transparent' }} />
        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>Demander mon audit ↗</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="section-charcoal" style={{ padding: '4rem 0', borderTop: '1px solid var(--iron)' }}>
    <div className="container">
      <span className="font-display" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--stone)' }}>PREMIER TRAIT</span>
      <span className="font-mono" style={{ display: 'block', marginTop: '1rem', color: 'var(--iron)' }}>© {new Date().getFullYear()} — STUDIO DIGITAL DES MÉTIERS</span>
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
        <MethodAndServices />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
