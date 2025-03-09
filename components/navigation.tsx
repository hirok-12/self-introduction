"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "スキル", href: "/skills" },
  { name: "経歴", href: "/career" },
  { name: "お問い合わせ", href: "/contact" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border/20 p-10 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-serif-jp mb-8">
            H.
          </div>
          <h2 className="text-lg font-medium">井上 寛基</h2>
          <p className="text-sm text-muted-foreground">自己紹介</p>
        </div>
        
        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={cn(
                "block py-1 text-muted-foreground hover:text-foreground transition-colors duration-200",
                pathname === item.href && "text-foreground font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto pt-8">
          <div className="text-xs text-muted-foreground">
            © 2025 井上寛基
          </div>
        </div>
      </div>
    </div>
  );
}