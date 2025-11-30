"use client";

import { Fuel, FileCheck, Handshake, BarChart3, Globe, Truck } from "lucide-react";

const services = [
  {
    icon: Fuel,
    title: "Green Methanol Supply",
    description:
      "Access to certified green methanol from verified sustainable sources. Both e-methanol (from renewable electricity) and bio-methanol (from sustainable biomass) available.",
  },
  {
    icon: FileCheck,
    title: "Compliance Documentation",
    description:
      "Complete documentation package for FuelEU Maritime regulation, EU ETS, and ISCC certification. Audit-ready chain of custody records.",
  },
  {
    icon: Handshake,
    title: "Offtake Agreements",
    description:
      "Flexible contract structures from spot to long-term offtake. Tailored solutions for shipowners, charterers, and bunker suppliers.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Real-time market insights on green methanol pricing, availability, and regulatory developments. Stay ahead of the decarbonization curve.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Network of producers across Europe, Caspian region, and beyond. Diversified supply chain for reliability and competitive pricing.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "End-to-end logistics support from production to bunkering location. Ship-to-ship transfer and terminal delivery options.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive green methanol trading solutions to support your maritime
            decarbonization journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <service.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
