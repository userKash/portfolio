"use client";
import { motion, LayoutGroup } from "framer-motion";
import GridBackground from "@/app/components/ui/grid-background";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { Lexend } from "next/font/google";
import { Lobster } from "next/font/google";
import { DecryptButton } from "@/app/components/ui/decrypt-button";
import { TypewriterLoop } from "@/app/components/ui/typewriter-loop";
import MobileMockupShowcase from "@/app/components/ui/MobileMockupShowcase";
import ProjectCard from "@/app/components/ui/ProjectCard";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export default function Home() {
  return (
    <section className="min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white flex flex-col items-center justify-center px-4 pt-32">
      <FloatingNav />

      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 opacity-50"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <GridBackground />
        </motion.div>

        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-radial from-transparent via-black to-black opacity-70"></div>

        <div className="relative z-20 text-center px-6 py-16">
          <motion.p
            className="text-sm italic mb-2 text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hello, I’m{" "}
            <span className="font-semibold text-white">Karl Lumabi</span>
          </motion.p>

          <motion.div
            className={`${lexend.className} text-4xl sm:text-6xl font-bold text-center leading-tight`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            UI/UX & FRONTEND{" "}
            <TypewriterLoop
              textClassName="text-[#0099ff] font-extrabold"
              cursorClassName="h-6 sm:h-8 md:h-10 lg:h-[3rem]"
            />
          </motion.div>

          <motion.p
            className="mt-6 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Crafting intelligent, playful, and purposeful digital experiences
            through elegant code, clean interfaces, and intentional design.
          </motion.p>

          <div className="mt-8 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              className="mt-8 w-full flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <DecryptButton text="VIEW WORK" icon="↗" />
              <DecryptButton text="VIEW RESUME" icon="📄" />
            </motion.div>
          </div>
        </div>
      </div>

      <MobileMockupShowcase />

      <section className="w-full px-4 py-20 text-center">
        <motion.h2
          className={`text-3xl sm:text-5xl font-bold text-[#0099ff] mb-4 ${lobster.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Projects that reflect how I approach UX — grounded in research, shaped
          by behavior, and always focused on making things work better.
        </motion.p>

        <LayoutGroup>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "EngliQuest",
                description:
                  "Personalized English learning using AI-generated quizzes...",
                category: "Research • Design • Prototype",
                imageSrc: "/EngliQuest.png",
                link: "/case-studies/engliquest",
              },
              {
                title: "NextTrip",
                description: "AI recommendations, real-time weather alerts...",
                category: "Research • Design • Prototype",
                imageSrc: "/NextTrip.png",
                link: "/case-studies/nexttrip",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                layoutId={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </section>
    </section>
  );
}
