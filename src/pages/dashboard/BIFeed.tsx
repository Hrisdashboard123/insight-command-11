import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb, Activity, Clock } from "lucide-react";

const feedItems = [
  { time: "2 min ago", icon: AlertTriangle, color: "text-amber-400 bg-amber-500/10", title: "Customer churn risk increasing", description: "Segment B engagement dropped 15% — 12 accounts at risk. Automated outreach recommended.", severity: "warning" },
  { time: "15 min ago", icon: TrendingUp, color: "text-emerald-400 bg-emerald-500/10", title: "Revenue growth opportunity detected", description: "Cross-sell analysis reveals $420K upsell potential in Pro plan users matching Enterprise patterns.", severity: "positive" },
  { time: "32 min ago", icon: TrendingDown, color: "text-red-400 bg-red-500/10", title: "Marketing efficiency drop detected", description: "CAC increased 18% this week. Paid channel ROI declining — consider budget reallocation.", severity: "critical" },
  { time: "1 hr ago", icon: Lightbulb, color: "text-primary bg-primary/10", title: "New market segment identified", description: "AI analysis found an underserved segment in healthcare vertical with 3x growth potential.", severity: "insight" },
  { time: "2 hrs ago", icon: Activity, color: "text-emerald-400 bg-emerald-500/10", title: "Pipeline health improvement", description: "Sales pipeline velocity increased 22%. Deal close rate improved in enterprise segment.", severity: "positive" },
  { time: "3 hrs ago", icon: AlertTriangle, color: "text-amber-400 bg-amber-500/10", title: "Supply chain delay predicted", description: "AI forecasting indicates potential 5-day delay in Q2 inventory shipments.", severity: "warning" },
  { time: "5 hrs ago", icon: TrendingUp, color: "text-emerald-400 bg-emerald-500/10", title: "Product adoption milestone reached", description: "Feature X adoption crossed 70% threshold. Usage correlates with 25% lower churn.", severity: "positive" },
];

const BIFeed = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif mb-1">Business Intelligence Feed</h1>
        <p className="text-sm text-muted-foreground">Live AI-generated insight stream</p>
      </div>

      <div className="space-y-3">
        {feedItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card-hover p-4"
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-medium truncate">{item.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BIFeed;
