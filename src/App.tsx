import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-black text-white">
              Media<span className="text-yellow-400">Connect</span>
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-2xl hover:shadow-yellow-400/50">
              GET STARTED 🚀
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400/40 rounded-full blur-2xl animate-ping"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg animate-bounce shadow-2xl">
              🔥 REVOLUTIONIZING MEDIA PARTNERSHIPS
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            CONNECT
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              INSTANTLY
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-bold leading-relaxed">
            Find perfect media partners in <span className="text-yellow-400">minutes</span>, not months.
            <br />
            The future of brand partnerships is here! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-12 py-6 rounded-2xl font-black text-2xl hover:scale-110 transform transition-all shadow-2xl hover:shadow-yellow-500/50 animate-pulse">
              START NOW 🔥
            </button>
            <button className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white/30 hover:scale-105 transform transition-all">
              WATCH DEMO ▶️
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-yellow-500/20 hover:border-yellow-400 hover:scale-105 transform transition-all">
              <div className="text-6xl font-black text-yellow-400 mb-4">⚡ 2H</div>
              <div className="text-white font-bold text-xl">Lightning Fast</div>
              <div className="text-white/70">Average Connection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-orange-500/20 hover:border-orange-400 hover:scale-105 transform transition-all">
              <div className="text-6xl font-black text-orange-400 mb-4">🎯 100%</div>
              <div className="text-white font-bold text-xl">Perfect Matches</div>
              <div className="text-white/70">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-red-500/20 hover:border-red-400 hover:scale-105 transform transition-all">
              <div className="text-6xl font-black text-red-400 mb-4">🚀 24/7</div>
              <div className="text-white font-bold text-xl">Always On</div>
              <div className="text-white/70">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black text-white mb-16">
            WHAT WE <span className="text-yellow-400">DO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-3xl p-8 hover:scale-105 transform transition-all hover:shadow-2xl hover:shadow-yellow-500/30">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-black text-white mb-4">AI MATCHING</h3>
              <p className="text-white/80 text-lg">Smart algorithms find your perfect media partners instantly</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 rounded-3xl p-8 hover:scale-105 transform transition-all hover:shadow-2xl hover:shadow-orange-500/30">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-black text-white mb-4">INSTANT CONNECT</h3>
              <p className="text-white/80 text-lg">Skip the networking hassle - we handle everything</p>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-3xl p-8 hover:scale-105 transform transition-all hover:shadow-2xl hover:shadow-red-500/30">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black text-white mb-4">LAUNCH FAST</h3>
              <p className="text-white/80 text-lg">Get campaigns running in record time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black text-black mb-8">
            READY TO <span className="text-white">LAUNCH?</span>
          </h2>
          <p className="text-2xl text-black/80 mb-12 font-bold">
            Join the future of media partnerships today! 🚀
          </p>
          <button className="bg-black text-white px-16 py-8 rounded-2xl font-black text-3xl hover:scale-110 transform transition-all shadow-2xl hover:shadow-black/50 animate-pulse">
            GET STARTED NOW 🔥
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
