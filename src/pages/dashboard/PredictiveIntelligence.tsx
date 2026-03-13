import { motion } from "framer-motion";
import { BrainCircuit, TrendingUp, AlertTriangle, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const forecastData = [
  { month: "Mar", actual: 35800, predicted: 35800 },
  { month: "Apr", actual: null, predicted: 39200 },
  { month: "May", actual: null, predicted: 42800 },
  { month: "Jun", actual: null, predicted: 46100 },
  { month: "Jul", actual: null, predicted: 50300 },
  { month: "Aug", actual: null, predicted: 54700 },
];

const predictions = [
  { title: "Revenue Forecast", value: "$54.7K", confidence: 87, trend: "up", description: "Expected 53% growth by August based on current trajectory" },
  { title: "Demand Surge", value: "Q3 2026", confidence: 74, trend: "up", description: "Product demand likely to peak in Q3 driven by market expansion" },
  { title: "Anomaly Detected", value: "Support Tickets", confidence: 92, trend: "alert", description: "Unusual spike in support volume — investigate root cause" },
  { title: "Churn Prediction", value: "3.2%", confidence: 81, trend: "stable", description: "Churn rate expected to decrease with new engagement features" },
];

const tooltipStyle = { background: "hsl(228, 15%, 13%)", border: "1px solid hsl(228, 15%, 22%)", borderRadius: 8, color: "#fff" };

const PredictiveIntelligence = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif mb-1">Predictive Intelligence</h1>
        <p className="text-sm text-muted-foreground">AI forecasting engine with probability indicators</p>
      </div>

      {/* Forecast Chart */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-medium mb-4">Revenue Forecast</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(330, 99%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis stroke="hsl(215, 20%, 45%)" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="actual" stroke="hsl(330, 99%, 60%)" fill="url(#predGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="predicted" stroke="hsl(330, 70%, 60%)" fill="none" strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Prediction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predictions.map((pred, i) => (
          <motion.div
            key={pred.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-5"
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                pred.trend === "alert" ? "bg-amber-500/10 text-amber-400" : "bg-primary/10 text-primary"
              }`}>
                {pred.trend === "alert" ? <AlertTriangle className="h-4 w-4" /> :
                 pred.trend === "up" ? <TrendingUp className="h-4 w-4" /> :
                 <BarChart3 className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium">{pred.title}</h3>
                  <span className="data-number text-sm text-primary">{pred.value}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{pred.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full gradient-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${pred.confidence}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{pred.confidence}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PredictiveIntelligence;
