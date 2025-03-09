"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from "lucide-react";

export function TechStackSection() {
  const technologies = [
    {
      id: "nextjs",
      name: "Next.js App Router",
      description: "Reactベースのフレームワークで、サーバーコンポーネントとクライアントコンポーネントを組み合わせた最新のアプリケーション構造を提供します。",
      icon: <ServerIcon className="h-10 w-10" />,
      features: [
        "サーバーコンポーネント",
        "クライアントコンポーネント",
        "ファイルベースのルーティング",
        "APIルート",
        "静的サイト生成(SSG)",
        "サーバーサイドレンダリング(SSR)",
      ],
    },
    {
      id: "tailwind",
      name: "TailwindCSS",
      description: "ユーティリティファーストのCSSフレームワークで、カスタマイズ性が高く、効率的なスタイリングが可能です。",
      icon: <LayoutIcon className="h-10 w-10" />,
      features: [
        "ユーティリティファースト",
        "レスポンシブデザイン",
        "ダークモード対応",
        "カスタマイズ可能なテーマ",
        "JIT(Just-In-Time)コンパイラ",
        "プラグインシステム",
      ],
    },
    {
      id: "shadcn",
      name: "shadcn/ui",
      description: "美しくカスタマイズ可能なコンポーネントライブラリで、アクセシビリティを考慮した設計がされています。",
      icon: <CodeIcon className="h-10 w-10" />,
      features: [
        "アクセシブルなコンポーネント",
        "Radix UIベース",
        "TailwindCSSとの統合",
        "ダークモード対応",
        "カスタマイズ可能なデザイン",
        "TypeScript対応",
      ],
    },
    {
      id: "framer",
      name: "framer-motion",
      description: "Reactのためのアニメーションライブラリで、複雑なアニメーションを簡単に実装できます。",
      icon: <WrenchIcon className="h-10 w-10" />,
      features: [
        "宣言的アニメーション",
        "ジェスチャー認識",
        "スクロールアニメーション",
        "レイアウトアニメーション",
        "SVGアニメーション",
        "3Dアニメーション",
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">利用技術</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4">
            このポートフォリオサイトで使用している主要な技術スタック
          </p>
        </motion.div>

        <div className="mt-12">
          <Tabs defaultValue="nextjs" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {technologies.map((tech) => (
                <TabsTrigger key={tech.id} value={tech.id}>
                  {tech.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-secondary p-2">
                        {tech.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{tech.name}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {tech.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tech.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}