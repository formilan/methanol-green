"use client";

import { Award, Users, Globe2, Building2 } from "lucide-react";

const credentials = [
  {
    icon: Globe2,
    title: "Caspian Energy Expertise",
    description:
      "Deep market knowledge from years of experience in Azerbaijan energy sector, including strategic partnership development with major producers.",
  },
  {
    icon: Award,
    title: "Industry Training",
    description:
      "MIP Politecnico di Milano management training. Active participant in EPCA and IMPCA industry networks.",
  },
  {
    icon: Users,
    title: "Baku Energy Summer School",
    description:
      "Alumni of the prestigious energy program, with ongoing connections to Caspian region energy leaders and emerging market opportunities.",
  },
  {
    icon: Building2,
    title: "Milan Based",
    description:
      "Strategically located in Milan, Italy's business and financial hub, with direct access to major European ports and shipping routes.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bridging Markets,
              <span className="text-green-600 block">Enabling Decarbonization</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Methanol.Green is a boutique trading house bringing together deep expertise
              in Caspian energy markets with the emerging opportunities in maritime
              decarbonization.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our founder&apos;s experience in representing major methanol producers to European
              markets, combined with strong industry networks and EU business infrastructure,
              positions us uniquely to serve shipowners navigating the green fuel transition.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">IT</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Milan Based</div>
                  <div className="text-sm text-gray-500">Italy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">AZ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Caspian Network</div>
                  <div className="text-sm text-gray-500">Azerbaijan Connections</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Credentials grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors"
              >
                <credential.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{credential.title}</h3>
                <p className="text-sm text-gray-600">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
