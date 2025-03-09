"use client";

import { motion } from "framer-motion";
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
  Wrench,
  CheckCircle2
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
      skills: ["Vue.js", "Nuxt.js", "Svelete"],
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
      title: "AED",
      icon: <Cloud className="h-5 w-5 mr-2" />,
      skills: ["EC2", "VPC", "Route53", "RDS", "AppRunner", "Lamda", "APIGateway", "CloudFront", "Heroku"],
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
      skills: ["ZebHub", "Jira", "Wrike", "Trello"],
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
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-medium mb-6">利用可能技術</h2>
          <p className="text-muted-foreground">
            幅広い技術スタックを活用して、最適なソリューションを提供します
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="text-xl font-medium mb-4 flex items-center">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pr-4">
                    <p className="text-muted-foreground flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-primary/70" />
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}