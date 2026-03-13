import { motion } from "framer-motion";

interface AuthVisualProps {
  headline: string;
  subtext: string;
}

const AuthVisual = ({ headline, subtext }: AuthVisualProps) => {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + i * 60,
              height: 100 + i * 60,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 18}%`,
              background: `radial-gradient(circle, hsl(330 99% 60% / ${0.08 - i * 0.01}) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Node network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 12}%`}
              y1={`${20 + (i % 3) * 25}%`}
              x2={`${25 + i * 10}%`}
              y2={`${40 + (i % 4) * 15}%`}
              stroke="hsl(330 99% 60%)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={`${10 + i * 8}%`}
              cy={`${15 + (i % 5) * 18}%`}
              r="2"
              fill="hsl(330 99% 60%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>

        {/* Wave effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
          <motion.div
            className="absolute bottom-0 w-[200%] h-full"
            style={{
              background: `repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(330 99% 60% / 0.1) 40px, hsl(330 99% 60% / 0.1) 42px)`,
            }}
            animate={{ x: [0, -80] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-12 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg gradient-primary neon-glow-sm" />
            <span className="text-xl font-semibold tracking-tight">Insightsora</span>
          </div>
          <h1 className="text-4xl font-serif leading-tight mb-4">{headline}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">{subtext}</p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-12 flex gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: "Insights Generated", value: "2.4M+" },
            { label: "Enterprise Clients", value: "500+" },
            { label: "Data Sources", value: "120+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="data-number text-2xl text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthVisual;
