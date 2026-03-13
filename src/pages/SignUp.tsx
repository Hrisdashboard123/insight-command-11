import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AuthVisual from "@/components/AuthVisual";
import { ArrowRight } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen gradient-bg">
      <AuthVisual
        headline="Turn Raw Data Into Strategic Intelligence"
        subtext="Start generating automated AI insights for your business."
      />

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8 rounded-2xl">
            <div className="lg:hidden flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg gradient-primary neon-glow-sm" />
              <span className="text-lg font-semibold">Insightsora</span>
            </div>

            <h2 className="text-2xl font-serif mb-2">Create your workspace</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Set up your AI insight command center
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Smith" className="bg-secondary/50 border-border/50 focus:border-primary" required maxLength={100} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-email">Work Email</Label>
                <Input id="work-email" type="email" placeholder="jane@company.com" className="bg-secondary/50 border-border/50 focus:border-primary" required maxLength={255} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Corp" className="bg-secondary/50 border-border/50 focus:border-primary" required maxLength={100} />
              </div>

              <div className="space-y-2">
                <Label>Role</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/50 border-border/50">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="founder">Founder</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="bg-secondary/50 border-border/50 focus:border-primary" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" className="bg-secondary/50 border-border/50 focus:border-primary" required />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                />
                <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg" disabled={!agreed}>
                Create Insight Workspace
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
