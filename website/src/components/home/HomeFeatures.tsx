import {
  Boxes,
  Code2,
  Layers,
  Puzzle,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';

const features = [
  {
    title: 'Runtime inspector',
    description:
      'The @hyperse/inspector React component adds hotkey-driven inspect mode, reads source metadata from the tree, and calls your dev server to launch the editor.',
    icon: TerminalSquare,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    title: 'Dev-server bridge',
    description:
      '@hyperse/inspector-middleware exposes createLaunchEditorMiddleware so Webpack, Vite, or Rspack dev servers can open files with launch-editor.',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    title: 'Next.js integration',
    description:
      '@hyperse/next-inspector wires SWC, optional client injection, and API routes—minimal next.config changes for App Router projects.',
    icon: Puzzle,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    title: 'Babel & SWC transforms',
    description:
      '@hyperse/inspector-babel-plugin and @hyperse/inspector-swc-plugin annotate JSX during development so every inspected node carries file, line, and column.',
    icon: Code2,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    title: 'Shared contracts',
    description:
      '@hyperse/inspector-common centralizes launch URLs, trusted editors, and types so client, server, and plugins stay aligned.',
    icon: Boxes,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    title: 'Composable UI',
    description:
      '@hyperse/inspector-component powers overlays and context panels you can extend while keeping the core navigation flow intact.',
    icon: ShieldCheck,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
  },
];

export const HomeFeatures = () => {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-1/2 w-1/3 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything in the monorepo
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Pick the packages you need—transform, middleware, UI, and Next
            glue—and ship a consistent “click to code” workflow across stacks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-panel group rounded-2xl border border-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg border ${feature.bg} ${feature.border} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
