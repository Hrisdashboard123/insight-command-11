import { Bell, Menu, Search, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-4 lg:px-6 bg-background/80 backdrop-blur-xl sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Workspace:</span>
          <button className="flex items-center gap-1 font-medium hover:text-primary transition-colors">
            Acme Corp
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center ml-2">
          <User className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
