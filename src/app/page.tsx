"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section id="home" className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Sayan Das
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Full Stack Developer | Software Engineer | Backend Specialist
        </p>
        <div className="flex justify-center gap-4">
          <Link href="mailto:sayanwastaken@gmail.com">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </Link>
          <Link href="/Sayan-Das-Resume.pdf" target="_blank">
            <Button variant="outline" size="lg">
              View Resume
            </Button>
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-zinc-500 mt-4">
          <Link href="https://github.com/sayanwastaken" target="_blank">
            <Github className="h-6 w-6 hover:text-indigo-500" />
          </Link>
          <Link href="https://linkedin.com/in/sayanwastaken" target="_blank">
            <Linkedin className="h-6 w-6 hover:text-indigo-500" />
          </Link>
        </div>
      </section>

      <Separator />

      {/* ABOUT */}
      <section id="about">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I am a versatile full stack developer with over 3 years of experience
          building fast, scalable applications. I transitioned from a commerce
          background into software development through an intensive bootcamp,
          focusing on backend systems, scalable architectures, and real-time
          collaboration tools.
        </p>
      </section>

      <Separator />

      {/* EXPERIENCE */}
      <section id="experience" className="space-y-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        {[
          {
            role: "Sheshi.ai — SDE-2",
            period: "07/2024 – 06/2025",
            details: [
              "Led development of a cloud-based accounting/reporting platform.",
              "Migrated monolith to microservices for scalability.",
              "Integrated third-party accounting tools.",
              "Mentored junior developers.",
            ],
          },
          {
            role: "Sheshi.ai — SDE-1",
            period: "05/2022 – 06/2024",
            details: [
              "Developed core features using React, NestJS, PostgreSQL.",
              "Implemented user access control, data pipelines, reports.",
              "Optimized report rendering by 30%.",
              "Created onboarding guides.",
            ],
          },
        ].map((job, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{job.role}</CardTitle>
              <p className="text-sm text-zinc-500">{job.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {job.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <Separator />

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Job Queue & Worker System",
              desc: "Distributed job system with retries, priorities, and delayed execution. Handles 50k+ jobs/day with 99.98% success.",
              stack: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Next.js"],
            },
            {
              title: "Real-Time Collaborative Whiteboard",
              desc: "CRDT-based collaborative editor with sub-100ms sync latency. Includes presence and cursor tracking.",
              stack: ["Yjs", "WebSockets", "NestJS", "Next.js"],
            },
          ].map((p, idx) => (
            <Card key={idx} className="hover:scale-[1.02] transition">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* SKILLS WITH ICONS */}
      <section id="skills">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "React", icon: "/icons/react.svg" },
            { name: "Next.js", icon: "/icons/nextjs.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "NestJS", icon: "/icons/nestjs.svg" },
            { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "AWS", icon: "/icons/aws.svg" },
            { name: "Docker", icon: "/icons/docker.svg" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center hover:scale-105 transition"
            >
              <Image src={skill.icon} alt={skill.name} width={40} height={40} />
              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* CONTACT */}
      <section id="contact" className="text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Let’s work together on your next project.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="mailto:sayanwastaken@gmail.com">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/sayanwastaken" target="_blank">
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
