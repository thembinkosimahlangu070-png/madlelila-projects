'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-gray-900 text-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Madlelila Projects
          </h1>
          <p className="text-3xl text-emerald-400 mb-8">Recycling for Mines</p>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            We recycle old conveyor belts and steel frames, delivering major cost savings to Zibulo Colliery and other mining operations.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#services" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full text-lg font-medium transition">
              Our Services
            </a>
            <a href="#contact" className="border border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">♻️</div>
              <h3 className="text-2xl font-semibold mb-4">Conveyor Belt Recycling</h3>
              <p className="text-gray-600">Collection, processing, and repurposing of used conveyor belts from mining operations.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">🔧</div>
              <h3 className="text-2xl font-semibold mb-4">Steel Frame Recovery</h3>
              <p className="text-gray-600">Salvaging, refurbishing, and recycling old steel structures and frames.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4">Cost Saving Partnerships</h3>
              <p className="text-gray-600">Proven track record with Zibulo Colliery – reducing waste disposal costs significantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Proven Impact at Zibulo Colliery</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <div className="text-5xl font-bold text-emerald-400 mb-2">40%</div>
              <p className="text-emerald-100">Average cost reduction in waste management</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <div className="text-5xl font-bold text-emerald-400 mb-2">Tons</div>
              <p className="text-emerald-100">of material diverted from landfills</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <div className="text-5xl font-bold text-emerald-400 mb-2">♻️</div>
              <p className="text-emerald-100">Sustainable mining practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500" />
            <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500" />
            <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500" />
            <textarea placeholder="Tell us about your project..." rows={5} className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500"></textarea>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-medium text-lg transition">
              Send Message
            </button>
          </form>
          <p className="text-center mt-8 text-gray-600">
            📍 Johannesburg, South Africa<br />
            📞 +27 XX XXX XXXX<br />
            ✉️ info@madlelila.co.za
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        © 2026 Madlelila Projects. Empowering sustainable mining in South Africa.
      </footer>
    </div>
  );
}
