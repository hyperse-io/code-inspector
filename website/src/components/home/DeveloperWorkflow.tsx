'use client';

import type { ElementType } from 'react';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Cpu, Gauge, Route, Zap } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type MetricType = 'locate' | 'setup' | 'precision';

const metrics: Record<
  MetricType,
  {
    label: string;
    description: string;
    icon: ElementType;
    details: string;
    data: { name: string; value: number; color: string; unit: string }[];
  }
> = {
  locate: {
    label: 'Locate component source',
    description:
      'Rough time to land in the right module for an unfamiliar screen (illustrative).',
    icon: Route,
    details:
      'Inspector reads compile-injected metadata on the selected React node, so you skip global search and file guessing.',
    data: [
      { name: 'Manual search', value: 120, color: '#3b82f6', unit: 's' },
      { name: 'Symbol peek', value: 35, color: '#a855f7', unit: 's' },
      { name: 'Inspector', value: 3, color: '#06b6d4', unit: 's' },
    ],
  },
  setup: {
    label: 'Integration effort',
    description:
      'Approximate time to wire transforms + middleware for a greenfield app.',
    icon: Gauge,
    details:
      'Official packages cover Babel, SWC, Next, Webpack, Vite, and Rspack with the same launch contract end-to-end.',
    data: [
      { name: 'Custom tooling', value: 180, color: '#3b82f6', unit: 'min' },
      { name: 'Ad-hoc launcher', value: 45, color: '#a855f7', unit: 'min' },
      { name: 'Hyperse stack', value: 12, color: '#06b6d4', unit: 'min' },
    ],
  },
  precision: {
    label: 'Cursor precision',
    description:
      'How often you still need manual scrolling after opening a file (lower is better).',
    icon: Zap,
    details:
      'Transforms carry line and column alongside file paths, so editors open exactly where JSX was authored.',
    data: [
      { name: 'File only', value: 68, color: '#3b82f6', unit: '% rework' },
      { name: 'Line only', value: 22, color: '#a855f7', unit: '% rework' },
      { name: 'Line + column', value: 4, color: '#06b6d4', unit: '% rework' },
    ],
  },
};

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: { name: string; value: number; unit: string } }[];
}) => {
  const first = payload?.[0];
  if (active && first) {
    const data = first.payload;
    return (
      <div className="glass-panel rounded-lg border border-white/10 bg-gray-900/90 p-3 shadow-xl backdrop-blur-xl">
        <p className="mb-1 font-medium text-gray-200">{data.name}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-cyan-400">{data.value}</span>
          <span className="font-mono text-sm text-gray-400">{data.unit}</span>
        </div>
      </div>
    );
  }
  return null;
};

const ChartWrapper = ({
  data,
}: {
  data: { name: string; value: number; color: string; unit: string }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        queueMicrotask(() => {
          if (width > 0 && height > 0) {
            setIsReady(true);
            setHasError(false);
          } else {
            setIsReady(false);
          }
        });
      }
    };

    checkDimensions();

    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        checkDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDimensions, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      resizeObserver?.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      if (
        event.error &&
        (String(event.error.message).includes('chart') ||
          String(event.error.message).includes('recharts') ||
          String(event.error.message).includes('ResponsiveContainer') ||
          String(event.error.message).includes('width') ||
          String(event.error.message).includes('height'))
      ) {
        event.preventDefault();
        setHasError(true);
        setIsReady(false);
      }
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError || !isReady) {
    return (
      <div
        ref={containerRef}
        className="flex h-full w-full items-center justify-center"
      >
        <p className="text-center text-sm text-gray-400">Chart loading…</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full min-h-0 w-full min-w-0">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={0}
        minHeight={0}
        debounce={150}
      >
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
          barGap={20}
          barSize={48}
        >
          <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            width={120}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={1000}>
            {data.map((entry) => (
              // eslint-disable-next-line @typescript-eslint/no-deprecated -- recharts per-segment fill
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const DeveloperWorkflow = () => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('locate');
  const currentMetric = metrics[activeMetric];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black/40 py-24">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wide text-cyan-300 uppercase">
              Workflow
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Built for fast feedback
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
            Code Inspector removes friction between what you see in the browser
            and where you edit in the repo—without bolting on another heavy
            devtool.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-1">
              {(Object.keys(metrics) as MetricType[]).map((key) => {
                const metric = metrics[key];
                const isActive = activeMetric === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveMetric(key)}
                    className={`group flex items-center gap-4 rounded-lg px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 shadow-lg'
                        : 'border border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div
                      className={`rounded-lg p-2 ${isActive ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'}`}
                    >
                      <metric.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}
                      >
                        {metric.label}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        {key === 'locate'
                          ? 'Navigation'
                          : key === 'setup'
                            ? 'Onboarding'
                            : 'Accuracy'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="glass-panel mt-auto rounded-xl border border-white/10 p-6">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-white">
                <Cpu className="h-4 w-4 text-cyan-400" />
                Why it feels instant
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {currentMetric.details}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Client + server contract
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1121] p-6 shadow-2xl sm:p-8">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {currentMetric.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {currentMetric.description}
                  </p>
                </div>
                <div className="hidden items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-xs text-gray-500 sm:flex">
                  Lower is better{' '}
                  <ArrowUpRight className="h-3 w-3 rotate-180" />
                </div>
              </div>

              <div className="min-h-0 flex-grow">
                <ChartWrapper data={currentMetric.data} />
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-4">
                  {currentMetric.data.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-gray-500">
                  Illustrative UX comparison — not a formal benchmark.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
