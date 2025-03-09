"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "スキル", href: "/skills" },
  { name: "経歴", href: "/career" },
  { name: "お問い合わせ", href: "/contact" }
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed top-4 right-4 z-50 bg-background border-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center space-y-6 p-8"
            >
              <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-serif-jp mb-4">
                H.
              </div>
              <p className="text-sm text-muted-foreground mb-4">井上 寛基</p>
              
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-xl py-2 transition-colors duration-200",
                    pathname === item.href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}