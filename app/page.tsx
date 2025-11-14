export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 font-sans">
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Hero Section */}
        <div className="mb-12 flex flex-col items-center gap-6">
          <h1 className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
            King Legend
          </h1>
          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-400 sm:text-2xl">
            Premium Brand & Entertainment Excellence
          </p>
        </div>

        {/* Tagline */}
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-8 text-zinc-500">
            Building extraordinary experiences at the intersection of innovation, creativity, and excellence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Innovation"
            description="Pioneering new frontiers in brand development and entertainment."
          />
          <FeatureCard
            title="Excellence"
            description="Delivering premium quality in every project and partnership."
          />
          <FeatureCard
            title="Vision"
            description="Creating lasting impact through strategic brand building."
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-zinc-200">
            Get Started
          </button>
          <button className="rounded-full border border-zinc-700 px-8 py-3 font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-900">
            Learn More
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} King Legend, Inc. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}
