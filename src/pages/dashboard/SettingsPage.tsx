import { motion } from "framer-motion";
import { User, Building2, Key, Bell, Plug, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-serif mb-1">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile, workspace, and integrations</p>
      </div>

      {/* Profile */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Profile</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input defaultValue="Jane Smith" className="bg-secondary/50 border-border/50" maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="jane@acmecorp.com" className="bg-secondary/50 border-border/50" maxLength={255} />
          </div>
        </div>
        <Button variant="hero" size="sm">Save Changes</Button>
      </div>

      {/* Workspace */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Workspace</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Company Name</Label>
            <Input defaultValue="Acme Corp" className="bg-secondary/50 border-border/50" maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label>Industry</Label>
            <Input defaultValue="SaaS" className="bg-secondary/50 border-border/50" maxLength={100} />
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Key className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">API Keys</h3>
        </div>
        <div className="p-3 bg-secondary/30 rounded-lg flex items-center justify-between">
          <code className="text-xs text-muted-foreground">isk_live_••••••••••••••••••••1234</code>
          <Button variant="ghost" size="sm">Regenerate</Button>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Notifications</h3>
        </div>
        <div className="space-y-3">
          {[
            { label: "AI Insight Alerts", desc: "Get notified when new insights are generated", default: true },
            { label: "Anomaly Alerts", desc: "Immediate alerts for detected anomalies", default: true },
            { label: "Weekly Report", desc: "Receive weekly intelligence summary", default: false },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <div className="text-sm">{n.label}</div>
                <div className="text-xs text-muted-foreground">{n.desc}</div>
              </div>
              <Switch defaultChecked={n.default} />
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Plug className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Integrations</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Slack", "Zapier", "Salesforce", "HubSpot"].map((integration) => (
            <div key={integration} className="p-3 bg-secondary/30 rounded-lg flex items-center justify-between">
              <span className="text-sm">{integration}</span>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
