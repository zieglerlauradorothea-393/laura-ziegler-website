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
    text: 'Ich bringe Ziele, Zuständigkeiten und Zeitpläne in eine klare Struktur – und halte alle Beteiligten verlässlich im Prozess.',
    keywords: ['Setup', 'Steuerung', 'Teamkoordination', 'Dokumentation'],
  },
  {
    nr: '02',
    title: 'Veranstaltungsmanagement',
    text: 'Von der ersten Idee bis zum Veranstaltungstag: Ich plane Abläufe, koordiniere Gewerke und sorge dafür, dass vor Ort alles ineinandergreift.',
    keywords: ['Produktion', 'Locations', 'Dienstleister:innen', 'Durchführung'],
  },
  {
    nr: '03',
    title: 'Organisation & Förderung',
    text: 'Ich übernehme auch klar abgegrenzte Teilbereiche – besonders dort, wo Sorgfalt, Überblick und gute Kommunikation gefragt sind.',
    keywords: ['Verwaltung', 'Fördermittel', 'Abrechnung', 'Ergebnissicherung'],
  },
] as const;

export const erfahrung = {
  // Jede Zeile steht für sich; die längste bestimmt die Schriftgröße auf dem Desktop.
  lines: ['Projektleitung.', 'Kultur- und Veranstaltungsmanagement.', 'Lehre.'],
  text: 'In Kultur- und Vereinsarbeit, Filmproduktion und Theaterbetrieb.',
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
