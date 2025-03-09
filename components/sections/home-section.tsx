"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HomeSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-2">井上 寛基</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">ひろエンジニア</p>
            
            <div className="space-y-6 mb-10">
              <div>
                <p className="text-sm text-muted-foreground mb-1">会社名</p>
                <p>株式会社JAPANWAVE</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">活動拠点</p>
                <p>福岡（リモートワーク）</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                フロントエンドからバックエンド、インフラまで幅広い技術スタックを持つエンジニアです。
                バックエンド開発ではRuby on Railsを用いた開発に強みを持っています。
                アプリケーションレイヤーのAI開発も経験があります。
              </p>
              
              <div className="pt-4">
                <Button asChild variant="outline" className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    お問い合わせ
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl">
              <Image
                src="/images/main.jpeg"
                alt="井上寛基"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-full hover:scale-105 transition-transform duration-300 grayscale"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 max-w-3xl"
        >
          <h2 className="text-xl font-medium mb-6">自己紹介</h2>
          <p className="text-muted-foreground leading-relaxed">
            大学卒業後、株式会社大塚商会にてマーケティング職として経験を積むなかで、
            自分の力でアプリケーションを作り出せるエンジニアという存在に強く惹かれました。
            その憧れから思い切ってキャリアを転換し、ゼロからエンジニアとしての道をスタート。
            現在は個人事業を経て独立し、自身で法人を立ち上げました。
            エンジニアとして得た技術力とマーケティングの経験を活かし、
            ITを通じた新しい価値の提供に日々取り組んでいます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}