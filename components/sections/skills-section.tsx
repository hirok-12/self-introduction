"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Layout, 
  Server, 
  TestTube, 
  Cloud, 
  GitBranch, 
  Terminal, 
  PenTool, 
  MessageSquare, 
  ListTodo, 
  Figma, 
  Bot, 
  Database, 
  Wrench
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "フロントエンド",
      icon: <Code2 className="h-5 w-5 mr-2" />,
      skills: ["HTML", "CSS(SCSS)", "JavaScript", "TypeScript"],
    },
    {
      title: "フロントエンドフレームワーク",
      icon: <Layout className="h-5 w-5 mr-2" />,
      skills: ["Vue.js", "Nuxt.js", "Svelte"],
    },
    {
      title: "サーバーサイド",
      icon: <Server className="h-5 w-5 mr-2" />,
      skills: ["Ruby", "Ruby on Rails"],
    },
    {
      title: "テスト",
      icon: <TestTube className="h-5 w-5 mr-2" />,
      skills: ["RSpec", "minitest"],
    },
    {
      title: "AWS",
      icon: <Cloud className="h-5 w-5 mr-2" />,
      skills: ["EC2", "VPC", "Route53", "RDS", "AppRunner", "Lambda", "APIGateway", "CloudFront", "Heroku"],
    },
    {
      title: "CI/CD",
      icon: <GitBranch className="h-5 w-5 mr-2" />,
      skills: ["Docker", "GitHub Actions"],
    },
    {
      title: "IaC",
      icon: <Terminal className="h-5 w-5 mr-2" />,
      skills: ["Terraform"],
    },
    {
      title: "設計",
      icon: <PenTool className="h-5 w-5 mr-2" />,
      skills: ["DB設計", "API設計"],
    },
    {
      title: "コミュニケーション",
      icon: <MessageSquare className="h-5 w-5 mr-2" />,
      skills: ["GitHub", "Slack", "Chatwork"],
    },
    {
      title: "タスク管理",
      icon: <ListTodo className="h-5 w-5 mr-2" />,
      skills: ["ZenHub", "Jira", "Wrike", "Trello"],
    },
    {
      title: "UI/UX",
      icon: <Figma className="h-5 w-5 mr-2" />,
      skills: ["Figma"],
    },
    {
      title: "AI開発",
      icon: <Bot className="h-5 w-5 mr-2" />,
      skills: ["Dify", "ChatGPT API", "RAG"],
    },
    {
      title: "DB",
      icon: <Database className="h-5 w-5 mr-2" />,
      skills: ["MySQL", "Elasticsearch", "PostgreSQL"],
    },
    {
      title: "その他",
      icon: <Wrench className="h-5 w-5 mr-2" />,
      skills: ["protocolbuffers", "rpc", "Git", "github", "Swagger", "SQL", "Vuex", "Vuetify", "Tailwind CSS", "bootstrap", "microCMS"],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl md:text-5xl">利用可能技術</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            幅広い技術スタックを活用して、最適なソリューションを提供します
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl group-hover:text-primary transition-colors duration-300">
                    <motion.div 
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.icon}
                    </motion.div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-1 px-3 transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}