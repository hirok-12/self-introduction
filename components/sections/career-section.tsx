"use client";

import { motion } from "framer-motion";
import { CalendarIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";

export function CareerSection() {
  const education = [
    {
      school: "サンタロサジュニアカレッジ（米国）",
      degree: "行動環境学科",
      period: "2012 - 2014",
    },
    {
      school: "カルフォルニア州立大学サンノゼ校（米国）",
      degree: "国際ビジネス学部",
      period: "2014 - 2016",
    }
  ];

  const career = [
    {
      company: "株式会社大塚商会",
      position: "マーケティング",
      period: "2016 - 2018",
      description: "社内システムの開発・保守",
      skills: ["お茶汲み"]
    },
    {
      company: "株式会社BuySellTechnologies",
      position: "エンジニア",
      period: "2019",
      description: "ECサイトの開発・保守",
      skills: ["Rails", "Vue.js", "API開発"]
    },
    {
      company: "UUUM株式会社",
      position: "シニアエンジニア",
      period: "2019 - 2020",
      description: "社内システムの開発・保守、新規サービス開発",
      skills: ["Ruby on Rails", "Vue.js", "AWS"]
    },
    {
      company: "個人事業主",
      position: "フリーランスエンジニア",
      period: "2020 - 2023",
      description: "Web開発、モバイルアプリ開発、技術コンサルティング",
      skills: ["Vue.js", "React", "Ruby on Rails", "AWS"]
    },
    {
      company: "株式会社JAPANWAVE",
      position: "代表取締役",
      period: "2023 - 現在",
      description: "自社サービスの開発・運営、クライアントワーク",
      skills: ["Next.js", "Ruby on Rails", "AWS", "AI開発"]
    }
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
          <h2 className="text-3xl font-medium mb-6">経歴</h2>
          <p className="text-muted-foreground">
            これまでの学歴と職歴の概要
          </p>
        </motion.div>
        
        {/* 学歴セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-medium mb-6 flex items-center">
            <GraduationCapIcon className="h-5 w-5 mr-2 text-primary" />
            学歴
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium">{edu.school}</h4>
                  <p className="text-muted-foreground mb-1">{edu.degree}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* 職歴セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-6 flex items-center">
            <BriefcaseIcon className="h-5 w-5 mr-2 text-primary" />
            職歴
          </h3>
          
          <div className="space-y-8">
            {career.map((job, index) => (
              <div key={index} className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium">{job.company}</h4>
                  <p className="text-muted-foreground mb-1">{job.position}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {job.period}
                  </div>
                  <p className="mb-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-sm text-muted-foreground">
                        {skill}{skillIndex < job.skills.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}