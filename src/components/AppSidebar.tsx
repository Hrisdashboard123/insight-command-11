import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Database,
  Sparkles,
  BarChart3,
  FileText,
  BrainCircuit,
  Rss,
  Settings,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Insight Overview", path: "/dashboard", icon: LayoutDashboard },
  { title: "Data Sources", path: "/dashboard/data-sources", icon: Database },
  { title: "AI Generator", path: "/dashboard/ai-generator", icon: Sparkles },
  { title: "Analytics", path: "/dashboard/analytics", icon: BarChart3 },
  { title: "Strategic Reports", path: "/dashboard/reports", icon: FileText },
  { title: "Predictive Intel", path: "/dashboard/predictive", icon: BrainCircuit },
  { title: "BI Feed", path: "/dashboard/feed", icon: Rss },
  { title: "Data Exports", path: "/dashboard/exports", icon: Download },
  { title: "Settings", path: "/dashboard/settings", icon: Settings },
];

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const AppSidebar = ({ collapsed, onToggle, mobileOpen, onMobileClose }: AppSidebarProps) => {
  const location = useLocation();

  const sidebarContent = (
    <div className={cn(
      "h-full flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-[68px]" : "w-[240px]"
    )}>
      {/* Logo */}
      <div className="flex items-center gap-2 p-4 h-16 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg gradient-primary neon-glow-sm flex-shrink-0" />
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-semibold text-foreground tracking-tight"
          >
            Insightsora
          </motion.span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path ||
            (item.path !== "/dashboard" && location.pathname.startsWith(item.path));

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onMobileClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group relative",
                isActive
                  ? "text-primary-foreground bg-primary/10 font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-r-full bg-primary neon-glow-sm"
                />
              )}
              <item.icon className={cn(
                "h-5 w-5 flex-shrink-0",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="hidden lg:flex items-center justify-center h-12 border-t border-sidebar-border text-muted-foreground hover:text-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block flex-shrink-0">
        {sidebarContent}
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={onMobileClose}
          />
          <motion.div
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 z-50 lg:hidden"
          >
            {sidebarContent}
          </motion.div>
        </>
      )}
    </>
  );
};

export default AppSidebar;
