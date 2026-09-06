// Zentrale Angaben – einmal pflegen, überall verwenden.
export const site = {
  name: 'Laura Ziegler',
  role: 'Projekt- & Veranstaltungsmanagement',
  city: 'Bremen',
  url: 'https://laura-ziegler.com',
  email: 'hallo@laura-ziegler.com',
  mailSubject: 'Projektanfrage',
  linkedin: 'https://www.linkedin.com/in/laura-ziegler-19a6321a3/',
  address: {
    street: 'Osterdeich 18',
    zip: '28203',
    city: 'Bremen',
    country: 'Deutschland',
  },
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.mailSubject)}`;

export const nav = [
  { hash: 'leistungen', label: 'Leistungen' },
  { hash: 'erfahrung', label: 'Erfahrung' },
  { hash: 'kontakt', label: 'Kontakt' },
] as const;

export const hero = {
  intro: 'Ich begleite Projekte in Kunst, Kultur und Bildung.',
  cta: 'Projektidee? Schreib mir.',
  image: {
    src: '/images/laura-ziegler.jpg',
    alt: 'Laura Ziegler, Projekt- und Veranstaltungsmanagerin in Bremen',
    width: 800,
    height: 800,
  },
} as const;

export const leistungen = [
  {
    nr: '01',
    title: 'Projektmanagement',
    text: 'Ich unterstütze bei der operativen Steuerung von Projekten oder in einzelnen Projektphasen.',
    // Schlagworte werden per CSS in Großbuchstaben dargestellt
    keywords: [
      'Projekt-Setup',
      'Terminplanung',
      'Aufgabensteuerung',
      'Koordination',
      'Interne Kommunikation',
      'Dokumentation',
    ],
  },
  {
    nr: '02',
    title: 'Veranstaltungsmanagement',
    text: 'Ich übernehme die Organisation von Veranstaltungen.',
    keywords: [
      'Ablaufplanung',
      'Produktionsplanung',
      'Locations',
      'Dienstleister:innen',
      'Vor-Ort-Koordination',
    ],
  },
  {
    nr: '03',
    title: 'Projektadministration & Förderabwicklung',
    text: 'Ich bearbeite die förderbezogene Abwicklung und Nachweisführung von Projekten.',
    keywords: [
      'Verwaltung',
      'Dokumentenmanagement',
      'Mittelabruf',
      'Abrechnung',
      'Verwendungsnachweise',
      'Ergebnissicherung',
    ],
  },
] as const;

export const erfahrung = {
  // Jede Zeile steht für sich; die längste bestimmt die Schriftgröße auf dem Desktop.
  lines: ['Projektleitung.', 'Kulturmanagement.', 'Veranstaltungen. Lehre.'],
  text: 'Erfahrung aus Vereinsarbeit, Filmproduktion und Theaterbetrieb.',
  image: {
    src: '/images/laura-projekte.jpg',
    alt: 'Laura Ziegler vor einer farbigen Wand in Bremen',
    width: 800,
    height: 1200,
  },
} as const;

export const kontakt = {
  eyebrow: 'Ein Projekt, eine Idee oder erst einmal eine Frage?',
  heading: 'Lass uns reden.',
} as const;
