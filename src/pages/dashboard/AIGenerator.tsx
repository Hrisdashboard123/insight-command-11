import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Upload, Loader2, CheckCircle2, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const generatedInsights = [
  { type: "trend", icon: TrendingUp, title: "Revenue Growth Acceleration", description: "Q3 revenue shows 23% growth driven primarily by enterprise segment expansion. Recommend increasing enterprise sales capacity." },
  { type: "risk", icon: AlertTriangle, title: "Churn Risk — Mid-Market Segment", description: "Customer engagement scores dropped 15% in mid-market accounts. 12 accounts flagged for immediate outreach." },
  { type: "opportunity", icon: Lightbulb, title: "Cross-Sell Opportunity Detected", description: "38% of Pro plan users show usage patterns matching Enterprise needs. Estimated upsell revenue: $420K." },
];

const AIGenerator = () => {
  const [stage, setStage] = useState<"upload" | "processing" | "done">("upload");

  const handleGenerate = () => {
    setStage("processing");
    setTimeout(() => setStage("done"), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif mb-1">AI Insight Generator</h1>
        <p className="text-sm text-muted-foreground">Upload data or select a dataset to generate strategic insights</p>
      </div>

      {/* Upload / Input */}
      <div className="glass-card p-6">
        <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors">
          <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm font-medium mb-1">Drop your dataset here</p>
          <p className="text-xs text-muted-foreground mb-4">CSV, Excel, or connect via API</p>
          <Button variant="outline" size="sm">Browse Files</Button>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or select existing dataset</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {["Q4 Sales Data", "Marketing Metrics", "Customer Analytics", "Product Usage"].map((ds) => (
            <button key={ds} className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs hover:bg-secondary transition-colors">
              {ds}
            </button>
          ))}
        </div>

        <Button variant="hero" className="w-full mt-6" size="lg" onClick={handleGenerate} disabled={stage === "processing"}>
          {stage === "processing" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating Insights...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Generate AI Insights
            </>
          )}
        </Button>
      </div>

      {/* Processing Visualizer */}
      {stage === "processing" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-primary neon-glow-sm flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-medium">AI Processing</h3>
              <p className="text-xs text-muted-foreground">Analyzing dataset patterns...</p>
            </div>
          </div>

          {/* Animated bars */}
          <div className="space-y-3">
            {["Data Ingestion", "Pattern Recognition", "Insight Extraction", "Report Assembly"].map((step, i) => (
              <div key={step}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{step}</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: i * 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-2 rounded-lg bg-primary/5 border border-primary/10 text-center">
            <span className="text-xs text-primary">Powered by Generative AI Insight Engine</span>
          </div>
        </motion.div>
      )}

      {/* Results */}
      {stage === "done" && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            3 strategic insights generated in 2.4s
          </div>

          {generatedInsights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-5"
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  insight.type === "trend" ? "bg-emerald-500/10 text-emerald-400" :
                  insight.type === "risk" ? "bg-amber-500/10 text-amber-400" :
                  "bg-primary/10 text-primary"
                }`}>
                  <insight.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AIGenerator;
