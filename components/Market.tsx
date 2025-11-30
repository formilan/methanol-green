"use client";

import { Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "FuelEU Maritime Starts",
    description:
      "GHG intensity reduction requirements begin. Ships must reduce emissions by 2% compared to 2020 baseline.",
    status: "upcoming",
  },
  {
    year: "2030",
    title: "6% Reduction Target",
    description:
      "Stricter requirements demand significant green fuel adoption. Early movers gain competitive advantage.",
    status: "future",
  },
  {
    year: "2035",
    title: "14.5% Reduction",
    description:
      "Green methanol becomes mainstream fuel. Infrastructure widely available across EU ports.",
    status: "future",
  },
  {
    year: "2050",
    title: "80% Reduction",
    description:
      "Near-complete decarbonization. Green methanol as primary maritime fuel.",
    status: "future",
  },
];

export default function Market() {
  return (
    <section id="market" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <AlertCircle className="w-4 h-4" />
            Regulation Starting January 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FuelEU Maritime Timeline
          </h2>
          <p className="text-xl text-gray-600">
            The clock is ticking. Position your fleet for the new regulatory landscape.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div
                    className={`p-6 rounded-2xl ${
                      item.status === "upcoming"
                        ? "bg-green-50 border-2 border-green-500"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-2xl font-bold ${
                          item.status === "upcoming" ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {item.year}
                      </span>
                      {item.status === "upcoming" && (
                        <span className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded">
                          STARTING SOON
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center">
                  {item.status === "upcoming" ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <Calendar className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Green Methanol */}
        <div className="mt-24 bg-green-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Green Methanol?
              </h3>
              <ul className="space-y-4">
                {[
                  "Drop-in fuel for dual-fuel methanol engines",
                  "Up to 95% GHG reduction vs conventional fuels",
                  "Growing bunkering infrastructure in EU ports",
                  "Maersk, CMA CGM leading industry adoption",
                  "Lower compliance costs than penalty payments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-green-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">€2,400</div>
                <div className="text-green-200 mb-6">Penalty per tonne CO2 excess</div>
                <p className="text-green-100 text-sm">
                  Non-compliance with FuelEU Maritime will result in significant financial
                  penalties. Investing in green methanol now protects your bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
