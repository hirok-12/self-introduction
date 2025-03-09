"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Building2Icon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                井上 寛基
              </h1>
              <p className="text-xl text-muted-foreground">
                株式会社JAPANWAVE
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <span>1990年12月5日</span>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-2">
                  <Building2Icon className="h-5 w-5 text-muted-foreground" />
                  <span>株式会社JAPANWAVE</span>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                お問い合わせ
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#skills"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                スキル一覧
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Avatar className="h-[300px] w-[300px] rounded-full border-4 border-border shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" alt="井上寛基" />
              <AvatarFallback className="text-4xl">HI</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}