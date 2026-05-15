import {
  BarChart3,
  Compass,
  Database,
  DraftingCompass,
  Handshake,
  Map,
  Mountain,
  Phone,
  RadioTower,
  ShieldCheck,
  TentTree,
} from "lucide-react";
import Header from "./components/Header.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import CapabilityCard from "./components/CapabilityCard.jsx";
import ValuePillar from "./components/ValuePillar.jsx";
import ContactForm from "./components/ContactForm.jsx";
import logo from "../assets/company-logo.png";
import fieldImage from "../assets/aurora-mining-hero.png";

const capabilities = [
  {
    title: "Alluvial Gold Mining Support",
    description:
      "Operational planning, field evaluation, equipment coordination, and practical support for alluvial gold projects.",
    icon: Mountain,
  },
  {
    title: "Exploration & Field Evaluation",
    description:
      "Ground truthing, access planning, sample program support, and practical assessment of early-stage opportunities.",
    icon: Compass,
  },
  {
    title: "Geomatics, GIS & Mapping",
    description:
      "Surveying workflows, digital mapping, spatial data organization, and clear project maps for field and management teams.",
    icon: Map,
  },
  {
    title: "Remote Project Coordination",
    description:
      "Crew planning, supplier coordination, site readiness, daily tracking, and communication for remote operations.",
    icon: RadioTower,
  },
  {
    title: "Camp & Logistics Planning",
    description:
      "Camp setup, supply coordination, movement planning, access routes, and support systems for field teams.",
    icon: TentTree,
  },
  {
    title: "Mining Data & Operational Systems",
    description:
      "Structured field data, reporting workflows, operational registers, and practical systems that improve project control.",
    icon: Database,
  },
  {
    title: "JV / Pilot Project Support",
    description:
      "Disciplined project setup, field planning, documentation, and coordination for cooperative or pilot-stage work.",
    icon: Handshake,
  },
];

const values = [
  {
    title: "Precision",
    description: "Accurate mapping, planning, and field evaluation.",
    icon: DraftingCompass,
  },
  {
    title: "Reliability",
    description: "Practical execution in remote and challenging environments.",
    icon: ShieldCheck,
  },
  {
    title: "Results",
    description: "Focused on measurable progress and disciplined operations.",
    icon: BarChart3,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-aurora-ink text-white">
      <Header logo={logo} />

      <main>
        <section id="top" className="relative isolate overflow-hidden bg-aurora pt-28 lg:pt-32">
          <div className="topographic-pattern opacity-35" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-aurora-ink to-transparent" />
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-3 border border-aurora-gold/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-aurora-paleGold">
                <span className="h-px w-9 bg-aurora-gold" />
                Mining services | geomatics | remote operations
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Mining Services Driven by Field Experience and Technology
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-aurora-mist/85 sm:text-xl">
                Aurora Mining Services combines practical mining operations, geomatics, digital mapping, and project management experience to support exploration and resource development in remote environments.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a className="btn-primary" href="#contact">
                  Contact Us
                </a>
                <a className="btn-secondary" href="#capabilities">
                  Our Capabilities
                </a>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="logo-orbit absolute -inset-10 rounded-full blur-2xl" aria-hidden="true" />
              <div className="logo-plate relative overflow-hidden border border-aurora-gold/45 p-3 shadow-panel">
                <img
                  src={logo}
                  alt="Aurora Mining Services logo"
                  className="relative z-10 mx-auto aspect-square w-full max-w-[520px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 border border-aurora-gold/25 bg-black/35 text-center text-xs font-semibold uppercase tracking-[0.18em] text-aurora-paleGold backdrop-blur-sm">
                <span className="border-r border-aurora-line px-2 py-4">Precision</span>
                <span className="border-r border-aurora-line px-2 py-4">Reliability</span>
                <span className="px-2 py-4">Results</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-aurora-ink py-24 sm:py-28">
          <div className="map-grid opacity-30" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:px-10">
            <SectionHeading
              eyebrow="About Aurora"
              title="Practical field experience shaped by technical discipline."
            />
            <div className="space-y-6 text-lg leading-8 text-aurora-mist/78">
              <p>
                Aurora Mining Services was created to bring together practical field experience, technical knowledge, and disciplined project coordination for mining and exploration projects. The company is built around hands-on operational understanding, modern geomatics tools, and a practical approach to remote resource development.
              </p>
              <div className="gold-rule" />
              <p>
                The company supports teams that need clear planning, reliable coordination, and field-ready systems without adding unnecessary complexity to the work.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-aurora-blue py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <SectionHeading eyebrow="Founder Background" title="Technical planning with operational context." />
              <p className="mt-7 max-w-3xl text-lg leading-8 text-aurora-mist/80">
                Our leadership background combines surveying, geomatics, GIS, computer science, and hands-on mining project coordination. This technical and operational foundation allows us to approach mining projects with both field practicality and data-driven planning.
              </p>
            </div>
            <div className="border border-aurora-line bg-aurora-panel/70 p-6 shadow-panel">
              <ul className="space-y-4 text-aurora-mist/85">
                {[
                  "Background in geomatics, GIS, surveying, and computer science",
                  "Experience in remote mining operations and project coordination",
                  "Logistics, field teams, camp setup, supply coordination, and operational planning",
                  "Practical involvement in alluvial gold mining projects in West Africa",
                  "Technology, mapping, and data systems for project evaluation and execution",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-8 shrink-0 bg-aurora-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="capabilities" className="relative overflow-hidden bg-aurora-ink py-24 sm:py-28">
          <div className="survey-lines opacity-40" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Capabilities"
              title="Integrated support for exploration and resource development."
              intro="Aurora works across the practical and technical parts of remote mining projects, from field evaluation to data organization and operating support."
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <CapabilityCard key={capability.title} {...capability} />
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="bg-aurora-blue py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="relative min-h-[360px] overflow-hidden border border-aurora-gold/25 bg-aurora-panel shadow-panel">
              <img
                src={fieldImage}
                alt="Remote mining operation support scene"
                className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-navy via-aurora-blue/88 to-aurora-ink/74" />
              <div className="absolute inset-x-8 bottom-8 border-l-2 border-aurora-gold pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aurora-paleGold">
                  Mapping | Survey | Operations
                </p>
              </div>
            </div>
            <div className="self-center">
              <SectionHeading eyebrow="Technology" title="Technology-Enabled Field Operations" />
              <p className="mt-7 text-lg leading-8 text-aurora-mist/80">
                We use mapping, GIS, surveying workflows, data organization, and operational tracking to support better decision-making in mining and exploration projects. Our approach is practical: technology should improve field execution, reduce uncertainty, and support responsible development.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {["Digital mapping", "Field data", "Operational tracking"].map((item) => (
                  <div key={item} className="border border-aurora-line bg-white/[0.03] p-4 text-sm font-semibold text-aurora-paleGold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="bg-aurora-ink py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="Values" title="Precision. Reliability. Results." />
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {values.map((value) => (
                <ValuePillar key={value.title} {...value} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-aurora py-24 sm:py-28">
          <div className="topographic-pattern opacity-25" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Discuss mining services, exploration support, or project cooperation."
              />
              <p className="mt-7 text-lg leading-8 text-aurora-mist/80">
                Connect with us to discuss mining services, exploration support, or project cooperation.
              </p>
              <div className="mt-8 space-y-4 text-aurora-mist/75">
                <p>
                  <span className="font-semibold text-aurora-paleGold">Email:</span>{" "}
                  info@auroraminingservices.com
                </p>
                <p>
                  <span className="font-semibold text-aurora-paleGold">LinkedIn:</span>{" "}
                  linkedin.com/company/aurora-mining-services
                </p>
              </div>
              <div className="mt-10 border border-aurora-gold/25 bg-aurora-navy/60 p-5 shadow-gold">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-paleGold">
                  Company Contacts
                </h3>
                <div className="mt-5 grid gap-4">
                  {[
                    { name: "Leo Fan", role: "CEO", phone: "+231 777755577", href: "tel:+231777755577" },
                    { name: "Allen Liu", role: "General Manager", phone: "+231 773339999", href: "tel:+231773339999" },
                  ].map((contact) => (
                    <div key={contact.name} className="border-l-2 border-aurora-gold pl-4">
                      <p className="text-lg font-semibold text-white">{contact.name}</p>
                      <p className="text-sm text-aurora-mist/65">{contact.role}</p>
                      <a
                        className="mt-2 inline-flex items-center gap-2 font-semibold text-aurora-paleGold transition hover:text-white"
                        href={contact.href}
                      >
                        <Phone size={16} />
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-aurora-line bg-aurora-ink px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-aurora-mist/65 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <span>Aurora Mining Services</span>
          </div>
          <span>Precision | Reliability | Results</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
