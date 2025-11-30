"use client";

import { ArrowRight, Ship, Leaf, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
              <Leaf className="w-4 h-4" />
              FuelEU Maritime Compliant
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Green Methanol
              <span className="text-green-600 block">Trading</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Boutique trading house specialized in green methanol for maritime bunkering.
              Your trusted partner for FuelEU Maritime compliance and sustainable shipping solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg"
              >
                Our Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2025</div>
                  <div className="text-sm text-gray-500">FuelEU Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">EU</div>
                  <div className="text-sm text-gray-500">Based Company</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">ISCC</div>
                  <div className="text-sm text-gray-500">Certified Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-500">Market Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Ship className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Maritime Bunkering</h3>
              <p className="text-sm text-gray-600">
                Specialized solutions for shipping companies transitioning to green fuels
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mt-8">
              <Leaf className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Green Methanol</h3>
              <p className="text-sm text-gray-600">
                E-methanol and bio-methanol from certified sustainable sources
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <Shield className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Compliance Ready</h3>
              <p className="text-sm text-gray-600">
                Full documentation for FuelEU Maritime and EU ETS requirements
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mt-8">
              <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Market Expertise</h3>
              <p className="text-sm text-gray-600">
                Deep knowledge of Caspian and European energy markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
