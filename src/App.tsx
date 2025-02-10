import React from "react";
import {
  BookOpen,
  Users,
  Receipt,
  PlusCircle,
  MinusCircle,
  Mic,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import logo from "./assets/udhari.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-900">
              Manage Your Personal Finances with{" "}
              <span className="text-indigo-600">Udhari</span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-12">
              Take control of your financial life with our innovative personal
              finance management app. Track debts, loans, and transactions
              securely with voice-enabled commands.
            </p>
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://github.com/Henil-chhipani/udhari/releases/download/firstbuild/udhari.apk",
                  "_blank"
                )
              }
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1">
            <img
              // src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
              src={logo}
              alt="Financial Management"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-16">
            Simple Yet Powerful Workflow
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-indigo-600" />}
              title="Create Notebooks"
              description="Organize your finances by creating dedicated notebooks for different purposes"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-indigo-600" />}
              title="Add Entities"
              description="Add friends or organizations to track transactions with specific people"
            />
            <FeatureCard
              icon={<Receipt className="w-8 h-8 text-indigo-600" />}
              title="Record Transactions"
              description="Keep track of money owed and collected with detailed transaction records"
            />
          </div>
        </div>
      </section>

      {/* Balance Summary Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-16">
            Clear Financial Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <PlusCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Amount Collected</h3>
              </div>
              <p className="text-3xl font-bold text-green-500">₹25,000</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <MinusCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-semibold">Amount Owed</h3>
              </div>
              <p className="text-3xl font-bold text-red-500">₹15,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Navigation Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Voice-Enabled Navigation
              </h2>
              <div className="space-y-6">
                <VoiceFeature
                  title="Create & Delete Notebooks"
                  description="Simply say 'Create new notebook' or 'Delete current notebook'"
                />
                <VoiceFeature
                  title="Navigate Sections"
                  description="Use voice commands like 'Go to transactions' or 'Show summary'"
                />
                <VoiceFeature
                  title="Quick Transactions"
                  description="Record transactions by voice: 'Add new transaction for John'"
                />
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-full animate-pulse"></div>
              <Mic className="w-48 h-48 text-indigo-600 relative mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <TrustCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure Storage"
              description="Your data is stored locally and never leaves your device"
            />
            <TrustCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Real-time Updates"
              description="See your financial status update instantly as you add transactions"
            />
            <TrustCard
              icon={<Users className="w-8 h-8" />}
              title="Multi-entity Support"
              description="Manage transactions with multiple people and organizations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            effortlessly with Udhari
          </p>
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://github.com/Henil-chhipani/udhari/releases/download/firstbuild/udhari.apk",
                "_blank"
              )
            }
          >
            Download Udhari Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-4 bg-indigo-50 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function VoiceFeature({ title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <Mic className="w-6 h-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-indigo-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TrustCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-4 bg-indigo-800 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-indigo-100">{description}</p>
    </div>
  );
}

export default App;
