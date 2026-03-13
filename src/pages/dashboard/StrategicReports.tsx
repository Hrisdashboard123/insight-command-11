import { motion } from "framer-motion";
import { FileText, Download, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { title: "Weekly Business Intelligence — W12", date: "Mar 17, 2026", type: "Weekly", highlights: ["Revenue up 12%", "3 new opportunities detected", "Churn risk mitigated"] },
  { title: "Monthly Strategic Summary — Feb 2026", date: "Mar 1, 2026", type: "Monthly", highlights: ["Q1 targets on track", "Marketing ROI at 340%", "2 anomalies resolved"] },
  { title: "Weekly Business Intelligence — W11", date: "Mar 10, 2026", type: "Weekly", highlights: ["User growth +8%", "Support efficiency improved", "Pipeline health: Strong"] },
  { title: "Quarterly Executive Brief — Q4 2025", date: "Jan 5, 2026", type: "Quarterly", highlights: ["Annual revenue +45%", "Market expansion successful", "AI adoption increased 2x"] },
];

const StrategicReports = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif mb-1">Strategic Reports</h1>
          <p className="text-sm text-muted-foreground">AI-generated intelligence reports and summaries</p>
        </div>
        <Button variant="hero" size="sm">
          <FileText className="h-4 w-4" />
          Generate Report
        </Button>
      </div>

      <div className="space-y-4">
        {reports.map((report, i) => (
          <motion.div
            key={report.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card-hover p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">{report.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{report.date}</span>
                    <span className="px-2 py-0.5 rounded bg-secondary text-xs">{report.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {report.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-primary" />{h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StrategicReports;
