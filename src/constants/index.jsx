import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Funktionen", href: "#" },
  { label: "Arbeitsablauf", href: "#" },
  { label: "Preise", href: "#" },
  { label: "Kundenstimmen", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Ich bin äußerst zufrieden mit den bereitgestellten Dienstleistungen. Das Team war reaktionsschnell, professionell und hat Ergebnisse geliefert, die meine Erwartungen übertroffen haben.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Das Ergebnis unseres Projekts könnte nicht besser sein. Die Kreativität und Problemlösungsfähigkeiten des Teams waren entscheidend, um unsere Vision zum Leben zu erwecken.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Die Zusammenarbeit mit diesem Unternehmen war ein Vergnügen. Ihre Liebe zum Detail und ihr Engagement für Exzellenz sind lobenswert. Ich würde sie jedem empfehlen, der erstklassigen Service sucht.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Die Zusammenarbeit mit dem Team von XYZ Company hat unser Projekt auf eine neue Ebene gehoben. Ihre Liebe zum Detail und innovativen Lösungen haben uns geholfen, unsere Ziele schneller zu erreichen, als wir es für möglich gehalten hätten. Wir sind dankbar für ihre Expertise und Professionalität!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Ich bin beeindruckt von dem hohen Maß an Professionalität und Engagement des Teams. Sie haben unsere Erwartungen übertroffen und herausragende Ergebnisse geliefert.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Das Team hat alles getan, um sicherzustellen, dass unser Projekt ein Erfolg wird. Ihre Expertise und ihr Engagement sind unvergleichlich. Ich freue mich auf die weitere Zusammenarbeit in der Zukunft.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Technische Beratung",
    description:
      "Erhalten Sie fundierte technische Ratschläge, um Ihre Projekte effizienter und professioneller zu gestalten.",
  },
  {
    icon: <Fingerprint />,
    text: "Effiziente Projektverwaltung",
    description:
      "Optimieren Sie Ihre Arbeitsabläufe und beschleunigen Sie die Umsetzung Ihrer Projekte.",
  },
  {
    icon: <ShieldHalf />,
    text: "Automatisierte Prozesse",
    description:
      "Nutzen Sie automatisierte Prozesse, um die Produktivität Ihres Teams zu steigern und Fehler zu minimieren.",
  },
  {
    icon: <BatteryCharging />,
    text: "Echtzeit-Überwachung",
    description:
      "Überwachen Sie den Fortschritt Ihrer Projekte in Echtzeit und nehmen Sie bei Bedarf sofortige Anpassungen vor.",
  },
  {
    icon: <PlugZap />,
    text: "Team-Kollaboration",
    description:
      "Arbeiten Sie nahtlos mit Ihrem Team zusammen, um die besten Ergebnisse in kürzester Zeit zu erzielen.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytik-Dashboard",
    description:
      "Erhalten Sie wertvolle Einblicke in die Leistung Ihrer Projekte und treffen Sie datengestützte Entscheidungen.",
  },
];

export const checklistItems = [
  {
    title: "Einfache Code-Integration",
    description:
      "Erhalten Sie technische Ratschläge, die die Integration und Zusammenarbeit vereinfachen.",
  },
  {
    title: "Sorglose Code-Überprüfung",
    description:
      "Ermöglichen Sie Ihrem Team, Code effizient zu überprüfen und Qualität zu gewährleisten.",
  },
  {
    title: "KI-Unterstützung zur Zeitersparnis",
    description:
      "Nutzen Sie KI-gestützte Tools, um Zeit zu sparen und die Produktivität zu steigern.",
  },
  {
    title: "Teilen Sie Ihre Arbeit in Minuten",
    description:
      "Machen Sie es einfach, Arbeitsergebnisse in kürzester Zeit mit anderen zu teilen.",
  },
];

export const pricingOptions = [
  {
    title: "Kostenlos",
    price: "0€",
    features: [
      "Private Projektfreigabe",
      "5 GB Speicher",
      "Web-Analytik",
      "Privater Modus",
    ],
  },
  {
    title: "Pro",
    price: "10€",
    features: [
      "Private Projektfreigabe",
      "10 GB Speicher",
      "Erweiterte Web-Analytik",
      "Privater Modus",
    ],
  },
  {
    title: "Enterprise",
    price: "200€",
    features: [
      "Private Projektfreigabe",
      "Unbegrenzter Speicher",
      "Hochleistungsnetzwerk",
      "Privater Modus",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Erste Schritte" },
  { href: "#", text: "Dokumentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API-Referenz" },
  { href: "#", text: "Community-Foren" },
];

export const platformLinks = [
  { href: "#", text: "Funktionen" },
  { href: "#", text: "Unterstützte Geräte" },
  { href: "#", text: "Systemanforderungen" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Veranstaltungen" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Konferenzen" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
