import { motion } from "framer-motion";
import { Database, Cloud, FileSpreadsheet, Globe, CheckCircle2, AlertCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const sources = [
  { name: "Salesforce CRM", type: "CRM", status: "connected", records: "142K", icon: Cloud },
  { name: "PostgreSQL Database", type: "Database", status: "connected", records: "2.3M", icon: Database },
  { name: "Google Analytics", type: "Marketing", status: "connected", records: "890K", icon: Globe },
  { name: "CSV Upload — Q4 Sales", type: "File", status: "connected", records: "45K", icon: FileSpreadsheet },
  { name: "HubSpot Marketing", type: "Marketing", status: "error", records: "—", icon: Cloud },
  { name: "REST API — Inventory", type: "API", status: "connected", records: "12K", icon: Globe },
];

const DataSources = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif mb-1">Data Sources</h1>
          <p className="text-sm text-muted-foreground">Manage your connected data sources and integrations</p>
        </div>
        <Button variant="hero" size="sm">
          <Plus className="h-4 w-4" />
          Add Source
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sources.map((source, i) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card-hover p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <source.icon className="h-5 w-5 text-primary" />
              </div>
              {source.status === "connected" ? (
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-amber-400">
                  <AlertCircle className="h-3 w-3" /> Error
                </span>
              )}
            </div>
            <h3 className="font-medium text-sm">{source.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{source.type}</p>
            <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Records</span>
              <span className="data-number">{source.records}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DataSources;
