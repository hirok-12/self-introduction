"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Building2Icon } from "lucide-react";

export function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">井上 寛基</h1>
            <p className="text-xl text-muted-foreground mb-6">株式会社JAPANWAVE</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                <span>1990年12月5日</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2Icon className="h-5 w-5 text-muted-foreground" />
                <span>株式会社JAPANWAVE</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Badge variant="outline" className="mr-2">フロントエンド開発</Badge>
              <Badge variant="outline" className="mr-2">バックエンド開発</Badge>
              <Badge variant="outline" className="mr-2">クラウドインフラ</Badge>
              <Badge variant="outline">AI開発</Badge>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
                alt="井上寛基"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl"
        >
          <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
          <p className="text-muted-foreground leading-relaxed">
            フロントエンドからバックエンド、インフラまで幅広い技術スタックを持つエンジニアです。
            特にJavaScriptエコシステムとRuby on Railsを用いた開発に強みを持っています。
            最近ではAI開発にも取り組んでおり、RAGシステムの構築やChatGPT APIを活用したアプリケーション開発も行っています。
            常に新しい技術に挑戦し、ユーザーにとって価値のあるプロダクトを作ることを心がけています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}