"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MailIcon, TwitterIcon, YoutubeIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-medium mb-6">お問い合わせ</h2>
          <p className="text-muted-foreground">
            お気軽にご連絡ください。プロジェクトのご相談やお問い合わせをお待ちしております。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-medium mb-6">問い合わせメール</h3>
              <p className="text-muted-foreground mb-6">
                以下のメールアドレスに直接ご連絡いただけます。
                お名前、ご連絡先、お問い合わせ内容を記載の上、お送りください。<br /><br />
                2営業日以内にご返信させて頂きます。
              </p>
              
              <div className="flex items-center gap-3 mb-8">
                <MailIcon className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:inoue12hiroki@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  inoue12hiroki@gmail.com
                </a>
              </div>
              
              <Button asChild variant="default">
                <a 
                  href="mailto:inoue12hiroki@gmail.com" 
                  className="flex items-center gap-2"
                >
                  メールを送る
                  <ExternalLinkIcon className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium mb-4">SNS</h3>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="https://x.com/1205malumalu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                  <span>Twitter</span>
                </Link>
                <Link 
                  href="https://www.youtube.com/@hiro_ai_1205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <YoutubeIcon className="h-5 w-5" />
                  <span>YouTube</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}