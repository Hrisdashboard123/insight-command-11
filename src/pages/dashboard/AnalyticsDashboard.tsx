import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const revenueData = [
  { month: "Jan", value: 18500 }, { month: "Feb", value: 22300 }, { month: "Mar", value: 19800 },
  { month: "Apr", value: 28400 }, { month: "May", value: 31200 }, { month: "Jun", value: 35800 },
  { month: "Jul", value: 33100 }, { month: "Aug", value: 38900 },
];

const growthData = [
  { month: "Jan", users: 1200, sessions: 4500 }, { month: "Feb", users: 1800, sessions: 6200 },
  { month: "Mar", users: 2400, sessions: 8100 }, { month: "Apr", users: 3100, sessions: 10400 },
  { month: "May", users: 3800, sessions: 12900 }, { month: "Jun", users: 4600, sessions: 15200 },
];

const pieData = [
  { name: "Direct", value: 35 }, { name: "Organic", value: 28 },
  { name: "Referral", value: 22 }, { name: "Paid", value: 15 },
];

const COLORS = ["hsl(330, 99%, 60%)", "hsl(330, 70%, 45%)", "hsl(215, 20%, 45%)", "hsl(228, 15%, 30%)"];

const tooltipStyle = { background: "hsl(228, 15%, 13%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: 8, color: "#fff" };

const AnalyticsDashboard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif mb-1">Analytics Dashboard</h1>
        <p className="text-sm text-muted-foreground">Interactive charts and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">Revenue Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="value" stroke="hsl(330, 99%, 60%)" fill="url(#revGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <XAxis dataKey="month" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="users" stroke="hsl(330, 99%, 60%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sessions" stroke="hsl(215, 20%, 65%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" stroke="none">
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                <div className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                <span className="text-muted-foreground">{d.name} ({d.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-card p-5">
          <h3 className="text-sm font-medium mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {[
              { label: "Conversion Rate", value: "4.2%", change: "+0.8%", bar: 42 },
              { label: "Avg. Session Duration", value: "8m 34s", change: "+12%", bar: 68 },
              { label: "Bounce Rate", value: "32%", change: "-5%", bar: 32 },
              { label: "Customer Satisfaction", value: "92%", change: "+3%", bar: 92 },
              { label: "NPS Score", value: "72", change: "+8", bar: 72 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{m.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="data-number text-xs">{m.value}</span>
                    <span className="text-xs text-emerald-400">{m.change}</span>
                  </div>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${m.bar}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
