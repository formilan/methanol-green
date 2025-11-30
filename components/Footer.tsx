"use client";

import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">
                Methanol<span className="text-green-500">.Green</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Boutique trading house specialized in green methanol for maritime bunkering.
              Helping shipowners navigate the transition to sustainable fuels.
            </p>
            <p className="text-sm text-gray-500">
              Milan, Italy
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-green-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#market" className="hover:text-green-500 transition-colors">
                  Market
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:info@methanol.green"
                  className="hover:text-green-500 transition-colors"
                >
                  info@methanol.green
                </a>
              </li>
              <li>Milan, Italy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Methanol.Green. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
