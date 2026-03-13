import { motion } from "framer-motion";
import { Download, Calendar, FileSpreadsheet, Clock, CheckCircle2, Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const exports = [
  { name: "Revenue Report — March 2026", format: "CSV", status: "completed", date: "Mar 12, 2026", size: "2.4 MB" },
  { name: "Customer Analytics Export", format: "Excel", status: "completed", date: "Mar 10, 2026", size: "8.1 MB" },
  { name: "Predictive Forecast Data", format: "PDF", status: "processing", date: "Mar 13, 2026", size: "—" },
  { name: "Weekly KPI Snapshot — W11", format: "CSV", status: "completed", date: "Mar 9, 2026", size: "1.1 MB" },
  { name: "Full Pipeline Export", format: "Excel", status: "completed", date: "Mar 5, 2026", size: "14.3 MB" },
];

const scheduled = [
  { name: "Weekly Revenue Summary", frequency: "Every Monday", format: "CSV", nextRun: "Mar 17, 2026" },
  { name: "Monthly Intelligence Digest", frequency: "1st of month", format: "PDF", nextRun: "Apr 1, 2026" },
];

const DataExports = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif mb-1">Data Exports</h1>
          <p className="text-sm text-muted-foreground">Export and schedule data deliveries</p>
        </div>
        <Button variant="hero" size="sm">
          <Plus className="h-4 w-4" />
          New Export
        </Button>
      </div>

      {/* Quick Export */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-medium mb-4">Quick Export</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select>
            <SelectTrigger className="bg-secondary/50 border-border/50 flex-1">
              <SelectValue placeholder="Select dataset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue Data</SelectItem>
              <SelectItem value="customers">Customer Analytics</SelectItem>
              <SelectItem value="pipeline">Sales Pipeline</SelectItem>
              <SelectItem value="insights">AI Insights</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-secondary/50 border-border/50 w-full sm:w-36">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="hero" size="default">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Recent Exports */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-medium mb-4">Recent Exports</h3>
        <div className="space-y-3">
          {exports.map((exp, i) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileSpreadsheet className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{exp.name}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{exp.format}</span>
                    <span>·</span>
                    <span>{exp.date}</span>
                    <span>·</span>
                    <span>{exp.size}</span>
                  </div>
                </div>
              </div>
              {exp.status === "completed" ? (
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Download className="h-4 w-4" />
                </Button>
              ) : (
                <span className="flex items-center gap-1 text-xs text-primary flex-shrink-0">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Processing
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scheduled Exports */}
      <div className="glass-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Scheduled Exports</h3>
          <Button variant="outline" size="sm">
            <Calendar className="h-3 w-3" />
            Schedule New
          </Button>
        </div>
        <div className="space-y-3">
          {scheduled.map((s) => (
            <div key={s.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
              <div>
                <div className="text-sm font-medium">{s.name}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <Clock className="h-3 w-3" />
                  <span>{s.frequency}</span>
                  <span>·</span>
                  <span>{s.format}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next run</div>
                <div className="text-xs data-number">{s.nextRun}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DataExports;
