import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Activity, TrendingUp, Zap, Brain } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const areaData = [
  { name: "Jan", value: 2400 }, { name: "Feb", value: 3600 }, { name: "Mar", value: 3200 },
  { name: "Apr", value: 4500 }, { name: "May", value: 4200 }, { name: "Jun", value: 5800 },
  { name: "Jul", value: 5200 },
];

const barData = [
  { name: "Sales", value: 82 }, { name: "Marketing", value: 65 },
  { name: "Product", value: 91 }, { name: "Support", value: 74 },
];

const insights = [
  { text: "Revenue growth accelerating — +23% QoQ", type: "positive" },
  { text: "Customer churn risk detected in Segment B", type: "warning" },
  { text: "Marketing ROI peaked at 340% this month", type: "positive" },
  { text: "Supply chain anomaly flagged for review", type: "warning" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const InsightOverview = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-serif mb-1">Insight Overview</h1>
        <p className="text-sm text-muted-foreground">AI-powered command center for your business intelligence</p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Business Health Score", value: "87/100", change: "+5", up: true, icon: Activity },
          { label: "Insights Generated", value: "1,284", change: "+142", up: true, icon: Brain },
          { label: "Revenue Trend", value: "$2.4M", change: "+23%", up: true, icon: TrendingUp },
          { label: "AI Processing", value: "Active", change: "12ms", up: true, icon: Zap },
        ].map((kpi) => (
          <div key={kpi.label} className="glass-card-hover p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground">{kpi.label}</span>
              <kpi.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="data-number text-2xl">{kpi.value}</div>
            <div className="flex items-center gap-1 mt-1.5">
              {kpi.up ? (
                <ArrowUpRight className="h-3 w-3 text-emerald-400" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-400" />
              )}
              <span className="text-xs text-emerald-400">{kpi.change}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Chart */}
        <div className="glass-card p-5 lg:col-span-2">
          <h3 className="text-sm font-medium mb-4">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "hsl(228, 15%, 13%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: 8, color: "#fff" }}
                />
                <Area type="monotone" dataKey="value" stroke="hsl(330, 99%, 60%)" fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Performance */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">Department Score</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical">
                <XAxis type="number" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} width={70} />
                <Tooltip
                  contentStyle={{ background: "hsl(228, 15%, 13%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: 8, color: "#fff" }}
                />
                <Bar dataKey="value" fill="hsl(330, 99%, 60%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* AI Insights + System Monitor */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Latest Insights */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">Latest AI Insights</h3>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${insight.type === "positive" ? "bg-emerald-400" : "bg-amber-400"}`} />
                <span className="text-sm text-muted-foreground">{insight.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Monitor */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">System Monitor</h3>
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
              Online
            </span>
          </div>
          <div className="space-y-4">
            {[
              { label: "AI Processing Time", value: "12ms", bar: 15 },
              { label: "System Latency", value: "4ms", bar: 8 },
              { label: "Insight Generation", value: "Active", bar: 92 },
              { label: "Data Pipeline", value: "Healthy", bar: 98 },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="data-number text-xs">{metric.value}</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.bar}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 text-xs text-primary">
              <Zap className="h-3 w-3" />
              Powered by Generative AI Insight Engine
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InsightOverview;
