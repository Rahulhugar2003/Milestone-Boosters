import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Brain, Stethoscope, FileText, Pill, LineChart, HeartPulse,
  Sparkles, ArrowRight, Check, X, Menu, Baby,
  ShieldCheck, MessageCircle, ChevronDown, Star, Twitter,
  Linkedin, Instagram, Facebook, Cloud, Heart, Smile,
  Layers, Database, Compass, Lock, Activity, ClipboardList,
  Target, Award, BookOpen, Calendar, HelpCircle, GraduationCap,
  Video, MonitorPlay, AlertCircle, Phone, Mail, MapPin, ChevronRight, UserCheck, Users
} from "lucide-react";

import heroImg from "@/assets/hero-pediatric.png";
import cardDiagnosis from "@/assets/card-diagnosis.jpg";
import cardReports from "@/assets/card-reports.jpg";
import cardInsights from "@/assets/card-insights.jpg";
import stepInputImg from "@/assets/step-input-symptoms.png";
import stepAiImg from "@/assets/step-ai-analyzes.png";
import stepDoctorImg from "@/assets/step-doctor-decides.png";

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Milestone Boosters — 25 Years of Dedicated Developmental Pediatric Services" },
      { name: "description", content: "A smart, educational companion preparing children with diverse developmental profiles for school readiness. Integrating structured tools for assessments, progress tracking, and collaboration." },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg sm:text-xl tracking-tight">
          <span className="w-10 h-10 rounded-2xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-soft shrink-0">
            <Compass className="w-5.5 h-5.5 text-white" />
          </span>
          <span className="bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent dark:from-white dark:to-sky-300 truncate">
            Milestone Boosters
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-muted-foreground">
          <a href="#why-matters" className="hover:text-primary transition-colors">Why It Matters</a>
          <a href="#infrastructure" className="hover:text-primary transition-colors">OS Infrastructure</a>
          <a href="#access-points" className="hover:text-primary transition-colors">Discovery & Pathways</a>
          <a href="#interactive-suite" className="hover:text-primary transition-colors">Interactive Suite</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-sm font-extrabold px-6 py-3 rounded-full bg-gradient-cta text-primary-foreground shadow-soft hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 animate-fade-in"
          >
            Get in Touch
          </a>
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/40 bg-white/98 dark:bg-slate-900/98 shadow-xl px-6 py-4 space-y-3 relative z-50 backdrop-blur-lg"
          >
            <a href="#why-matters" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">Why It Matters</a>
            <a href="#infrastructure" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">OS Infrastructure</a>
            <a href="#access-points" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">Discovery & Pathways</a>
            <a href="#interactive-suite" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">Interactive Suite</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">Services</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-muted-foreground hover:text-primary">Contact</a>
            
            <div className="pt-2 sm:hidden">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block text-sm font-extrabold py-3 rounded-full bg-gradient-cta text-primary-foreground shadow-soft hover:opacity-95 active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function FloatingCard({ image, title, sub, className, delay = 0 }: { image: string; title: string; sub: string; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute bg-card/95 backdrop-blur rounded-2xl shadow-card p-3 flex items-center gap-3 animate-float border border-white/50 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={image}
        alt={title}
        width={48}
        height={48}
        loading="lazy"
        className="w-12 h-12 rounded-xl object-cover bg-secondary"
      />
      <div>
        <div className="text-sm font-bold leading-tight">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-28">
      {/* Decorative Blobs */}
      <div className="blob bg-[var(--sky)] w-[450px] h-[450px] -top-24 -left-24" />
      <div className="blob bg-[var(--lavender)] w-[400px] h-[400px] top-40 right-0" />
      <div className="blob bg-[var(--mint)] w-[350px] h-[350px] -bottom-24 left-1/3" />

      {/* Decorative Floating Sun */}
      <div className="absolute top-10 right-10 lg:right-20 w-24 h-24 hidden md:block animate-float-rotate pointer-events-none select-none z-20">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-[var(--sun)] opacity-30 blur-xl animate-pulse-slow rounded-full" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[oklch(0.88_0.15_85)] to-[oklch(0.96_0.08_95)] shadow-md flex items-center justify-center relative border-2 border-white/60">
            <div className="absolute w-8 h-6 flex flex-col items-center justify-between py-0.5">
              <div className="flex justify-between w-full px-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>
              <div className="flex justify-between w-full px-0.5 -mt-0.5">
                <span className="w-2 h-1 rounded-full bg-rose-400 opacity-70" />
                <span className="w-2 h-1 rounded-full bg-rose-400 opacity-70" />
              </div>
              <svg className="w-4 h-2 -mt-1" viewBox="0 0 16 8" fill="none">
                <path d="M1 1C1 1 4 6 8 6C12 6 15 1 15 1" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="absolute w-20 h-20 border-2 border-dashed border-[oklch(0.90_0.12_90)] rounded-full animate-spin-slow opacity-50" />
        </div>
      </div>

      {/* Fluffy Cloud Decors */}
      <div className="absolute top-20 left-6 lg:left-12 hidden lg:block animate-float-horizontal pointer-events-none select-none z-20">
        <div className="relative">
          <div className="bg-white/50 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/70 shadow-sm flex items-center gap-2">
            <Cloud className="w-7 h-7 text-sky-400 fill-sky-100" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">


          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Welcome to <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Milestone Boosters
            </span>
          </h1>

          <p className="mt-3 text-lg md:text-xl font-bold text-sky-700/80 max-w-xl italic">
            A product after 25 years of dedicated Developmental Pediatrics Services
          </p>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Unlike siloed systems, at its core, our platform is an <strong className="text-slate-800">educational companion</strong> — preparing children with diverse developmental profiles for school readiness and lifelong learning. We bridge early identification, growth monitoring, structured intervention, and school readiness into one unified ecosystem.
          </p>

          {/* Core Bullet points cards */}
          <div className="mt-8 p-6 rounded-3xl bg-white/60 border border-white/80 backdrop-blur-sm shadow-card max-w-xl">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Heart className="w-5.5 h-5.5 text-primary fill-primary/10" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800">Strengthening Integration</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Helping you understand developmental differences, plan structured skill enhancement, and educate better for successful integration in the family, school, and community.
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-200/50 pt-5 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <UserCheck className="w-5.5 h-5.5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800">Empowering the Ecosystem</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Blending playful skill-building, milestone tracking, and guided pathways, empowering parents, educators, and specialists (medical & paramedical) to collaborate seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#interactive-suite" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-cta text-primary-foreground font-bold shadow-soft hover:scale-[1.02] hover:opacity-95 transition-all duration-200">
              Try Interactive Suite <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#why-matters" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card border border-border font-bold hover:bg-muted transition">
              Learn More
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> HIPAA & FERPA Compliant</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> GDPR Compliant</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative aspect-square max-w-[520px] mx-auto">
            <div className="absolute inset-6 rounded-[3rem] bg-card shadow-soft border border-white/40" />
            <img
              src={heroImg}
              alt="Developmental play therapy illustration"
              width={1024}
              height={1024}
              className="relative z-10 w-full h-full object-contain"
            />
            <FloatingCard image={cardDiagnosis} title="Discovery Points" sub="Assessments & Tests" className="hidden md:flex left-0 top-12 z-20" delay={0.3} />
            <FloatingCard image={cardReports} title="Booster Pathways" sub="Dynamic Intervention" className="hidden md:flex right-0 top-[58%] z-20" delay={0.6} />
            <FloatingCard image={cardInsights} title="Skill Milestones" sub="Progress Tracking" className="hidden md:flex left-8 bottom-4 z-20" delay={0.9} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyItMatters() {
  const points = [
    {
      num: "1",
      title: "Deep Profiles",
      desc: "Demographic data, birth history, and previous medical records are organized securely for medical and educational providers.",
      tint: "var(--sky)"
    },
    {
      num: "2",
      title: "Historical Mapping",
      desc: "Log and review past therapies, medical treatments, and educational achievements to map developmental trends.",
      tint: "var(--mint)"
    },
    {
      num: "3",
      title: "Baseline Skills",
      desc: "Document current behaviors, communication levels, social skills, and academic standing with precision.",
      tint: "var(--lavender)"
    },
    {
      num: "4",
      title: "File Vault",
      desc: "Securely upload and manage previous clinical reports, genetic test results, school IEPs, and therapy summaries.",
      tint: "var(--sun)"
    },
    {
      num: "5",
      title: "Execution & Monitoring",
      desc: "Plan and track the direct effectiveness of active interventions, helping successfully integrate the child into family and school.",
      tint: "var(--sky)"
    }
  ];

  return (
    <section id="why-matters" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="blob bg-[var(--sky)] w-80 h-80 -right-20 top-20" />
      <div className="blob bg-[var(--mint)] w-72 h-72 -left-20 bottom-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight break-keep">
            Why Milestone Boosters Matters?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Children with developmental differences often face fragmented support: home, school, and therapy systems rarely connect. Families struggle with documentation, educators lack visibility, and professionals miss longitudinal insights.
          </p>
          <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200/60 inline-flex items-center gap-2.5 text-amber-800 text-sm font-semibold">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            Milestone Boosters creates a child‑centered learning environment that makes growth joyful, transparent, and connected.
          </div>
        </motion.div>

        <div className="mt-16 bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-card backdrop-blur-sm">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl font-black text-slate-900">
              The Smart-Entry System
            </h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">
              Our unique intake architecture captures the comprehensive, full-spectrum picture of every child to frame customized goals perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {points.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-3xl bg-card border border-slate-200/50 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: p.tint }}
                >
                  {p.num}
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfrastructureLayers() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: "A",
      title: "Parent & Family Engagement",
      subtitle: "Daily logs & progress on the go",
      icon: Users,
      color: "from-sky-400 to-sky-600",
      bgLight: "bg-sky-50",
      textDark: "text-sky-900",
      badgeColor: "bg-sky-100 text-sky-800",
      points: [
        "Quick child profile initiation (name, age, sex, complaints)",
        "Easy-to-use assessment forms with 'help me' wizard support",
        "Streamlined recording of milestones reached during play",
        "Guided home learning ideas and tips for daily activities"
      ]
    },
    {
      id: "B",
      title: "Specialists’ Suite",
      subtitle: "Integrated clinical clinical management",
      icon: Stethoscope,
      color: "from-teal-400 to-emerald-600",
      bgLight: "bg-teal-50",
      textDark: "text-teal-900",
      badgeColor: "bg-teal-100 text-teal-800",
      points: [
        "Interactive developmental growth charts (WHO & IAP models)",
        "BMI tracking with pediatric assessment feedback",
        "Prioritized immunization schedules and trackers",
        "Prescription management integrated with clinical guidelines"
      ]
    },
    {
      id: "C",
      title: "Developmental Suite",
      subtitle: "Screening & diagnostic tracking",
      icon: Brain,
      color: "from-indigo-400 to-purple-600",
      bgLight: "bg-indigo-50",
      textDark: "text-indigo-900",
      badgeColor: "bg-indigo-100 text-indigo-800",
      points: [
        "Detailed developmental history logs (prenatal to present)",
        "Provision for ordering advanced screening & diagnostic tests",
        "Standardized results entry for educational & developmental assessments",
        "Centralized logs for interdisciplinary clinical assessments"
      ]
    },
    {
      id: "D",
      title: "Child Development & Education Management Suite",
      subtitle: "Dual-pathway dynamic care plans",
      icon: ClipboardList,
      color: "from-amber-400 to-orange-500",
      bgLight: "bg-amber-50",
      textDark: "text-amber-900",
      badgeColor: "bg-amber-100 text-amber-800",
      points: [
        "Dynamic care plans automatically generated from assessment data",
        "Pathway 1: Focus on core developmental domains (communication, motor, cognition, social)",
        "Pathway 2: Focus on disorder-specific structured interventions",
        "Integration of academic goals and daily school learning benchmarks"
      ]
    },
    {
      id: "E",
      title: "Integrated Virtual Clinic & Ecosystem Management",
      subtitle: "Role-based school & therapy collaboration",
      icon: Video,
      color: "from-rose-400 to-rose-600",
      bgLight: "bg-rose-50",
      textDark: "text-rose-900",
      badgeColor: "bg-rose-100 text-rose-800",
      points: [
        "Built-in pediatric secure videoconferencing & teletherapy",
        "AI-assisted clinical observation tools for telehealth sessions",
        "Dedicated portals for parents, specialists, and school educators",
        "Seamless communication stream for collaborative care meetings"
      ]
    }
  ];

  return (
    <section id="infrastructure" className="py-20 md:py-28 bg-gradient-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 break-keep">
            Five Layers of Milestone Boosters OS
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            We provide cohesive support by unifying therapeutic, educational, and medical tracks through five deeply integrated application layers.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Layer Selector Stack */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {layers.map((layer, index) => {
              const IconComp = layer.icon;
              const isActive = activeLayer === index;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${isActive
                    ? "bg-white border-primary shadow-soft scale-[1.01]"
                    : "bg-white/40 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-xs font-extrabold uppercase px-2 py-0.5 rounded ${layer.badgeColor}`}>
                      Layer {layer.id}
                    </span>
                    <h3 className="font-extrabold text-slate-800 text-sm md:text-base mt-1 whitespace-normal md:truncate">
                      {layer.title}
                    </h3>
                  </div>
                  <ChevronRight className={`ml-auto w-5 h-5 transition-transform duration-300 ${isActive ? "text-primary translate-x-1" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Layer Details Display */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={`h-full rounded-[2.5rem] bg-white border border-slate-200/60 p-8 md:p-12 shadow-card flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Decorative background shape */}
                <div className={`absolute -right-20 -top-20 w-44 h-44 rounded-full opacity-10 bg-gradient-to-br ${layers[activeLayer].color}`} />

                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-black uppercase px-3 py-1 rounded-lg ${layers[activeLayer].badgeColor}`}>
                      Layer {layers[activeLayer].id}
                    </span>
                    <span className="text-slate-400 text-xs md:text-sm font-semibold">{layers[activeLayer].subtitle}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 leading-tight">
                    {layers[activeLayer].title}
                  </h3>

                  <div className="mt-8 space-y-4">
                    {layers[activeLayer].points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 p-6 rounded-2xl ${layers[activeLayer].bgLight} border border-slate-100`}>
                  <div className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-primary shrink-0 animate-pulse-slow" />
                    <div>
                      <h5 className={`font-black text-xs md:text-sm ${layers[activeLayer].textDark}`}>
                        Key Ecosystem Impact
                      </h5>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        Unlocks cross-functional coordination. Assessment answers are translated immediately to actionable strategies for both educators and home environments.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessPointsDashboard() {
  const [activeTab, setActiveTab] = useState("discovery");

  const accessPoints = {
    discovery: {
      title: "Discovery Points",
      subtitle: "Your Assessments & Diagnostic Tests",
      desc: "We analyze child patterns from a position of capability. All developmental assessments, quizzes, diagnostic records, and screening forms are securely stored and structured here.",
      badge: "Clinical Screening & Diagnosis",
      color: "bg-sky-500",
      content: (
        <div className="space-y-4 text-slate-700">
          <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100/60 flex items-center justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase text-sky-800 tracking-wider">Screening Tool Recommendation</span>
              <h5 className="font-extrabold text-sm md:text-base text-slate-800 mt-0.5">Automated Risk Analysis Questionnaire</h5>
            </div>
            <span className="text-xs bg-sky-200/60 text-sky-800 font-extrabold px-3 py-1 rounded-full">Recommended</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-slate-200 flex gap-3 items-center">
              <ClipboardList className="w-5 h-5 text-sky-600 shrink-0" />
              <div>
                <h6 className="font-bold text-sm text-slate-800">WHO Growth Chart Logs</h6>
                <p className="text-xs text-muted-foreground">Standard growth tracking</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-slate-200 flex gap-3 items-center">
              <Brain className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <h6 className="font-bold text-sm text-slate-800">Standardized ADHD Screening</h6>
                <p className="text-xs text-muted-foreground">Comprehensive observation checklist</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-slate-200 flex gap-3 items-center">
              <Baby className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h6 className="font-bold text-sm text-slate-800">Autism M-CHAT Forms</h6>
                <p className="text-xs text-muted-foreground">Early diagnosis screeners</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-slate-200 flex gap-3 items-center">
              <CameraIcon className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <h6 className="font-bold text-sm text-slate-800">Webcam AI Video Observation</h6>
                <p className="text-xs text-muted-foreground">Safe computer-vision analysis</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    pathways: {
      title: "Milestone Booster Pathways",
      subtitle: "Your Child's Intervention Plans",
      desc: "Direct intervention frameworks selected specifically for your child. Dynamic paths adjust in real-time as assessment metrics progress, bridging the gaps in development.",
      badge: "Dynamic Interventions",
      color: "bg-teal-500",
      content: (
        <div className="space-y-4 text-slate-700">
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-card">
            <div className="p-4 bg-teal-50/50 border-b border-slate-200 flex items-center justify-between">
              <h5 className="font-extrabold text-sm md:text-base text-teal-900">Active Path: Autism Spectrum Intervention</h5>
              <span className="text-xs bg-teal-100 text-teal-800 font-extrabold px-3 py-1 rounded-full">Primary Pathway</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Domain Focus: Communication & Behavior</span>
                <span>72% Overall Target Readiness</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-cta rounded-full" style={{ width: "72%" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold mt-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-teal-600" /> Play-Based Joint Attention Path
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-teal-600" /> Sensory Integration Exercises
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-teal-600" /> Visual Schedules Coordination
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-teal-600" /> Functional Speech Strategies
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    milestones: {
      title: "Skill Milestones",
      subtitle: "Your Child's Real-time Progress Tracking",
      desc: "Interactive timeline logging every achievement. Track motor, cognitive, and social milestones chronologically, helping you see the growth patterns clearly.",
      badge: "Real-time Progress Tracker",
      color: "bg-indigo-500",
      content: (
        <div className="space-y-4 text-slate-700">
          <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-6">
            <div className="relative">
              <span className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
              <h5 className="font-extrabold text-sm md:text-base text-slate-800">Mastered: Intentional Nonverbal Gestures</h5>
              <p className="text-xs text-muted-foreground mt-0.5">Achieved on May 12, 2026. Verified during parent play logs.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
              <h5 className="font-extrabold text-sm md:text-base text-slate-800">Mastered: Eye-Contact Response</h5>
              <p className="text-xs text-muted-foreground mt-0.5">Achieved on April 28, 2026. Logged by developmental specialist.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-slate-200 border-2 border-indigo-300 text-indigo-700 flex items-center justify-center font-bold text-xs shadow-sm">➔</span>
              <h5 className="font-extrabold text-sm md:text-base text-indigo-900">In Progress: Simple Sentence Building</h5>
              <p className="text-xs text-muted-foreground mt-0.5">Active exercises running in communication pathway daily.</p>
            </div>
          </div>
        </div>
      )
    },
    focus: {
      title: "Focus Areas",
      subtitle: "Reframing Delays and Building Strengths",
      desc: "Delays or learning deficits are handled with complete confidentiality and reframed positively as 'Focus Areas'. Rather than labelling deficiencies, we address difficulties by building on unique natural strengths.",
      badge: "Strengths-Based Focus",
      color: "bg-amber-500",
      content: (
        <div className="space-y-4 text-slate-700">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/50">
            <h5 className="font-extrabold text-sm md:text-base text-amber-900 flex items-center gap-2">
              <Smile className="w-5 h-5 text-amber-600" />
              Focus Reframing Philosophy
            </h5>
            <p className="text-xs md:text-sm text-slate-700 mt-2 leading-relaxed">
              &quot;We refrain from using negative deficit labels. Delays are pathways of unique timeline adjustment. We anchor every focus area to a matching child strength.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-slate-200">
              <h6 className="font-extrabold text-sm text-slate-800">Coordination & Fine Motor</h6>
              <div className="mt-2 text-xs text-slate-600">
                <span className="font-semibold text-emerald-600">Strength Anchor:</span> High visual attention and spatial awareness.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-slate-200">
              <h6 className="font-extrabold text-sm text-slate-800">Social Communication</h6>
              <div className="mt-2 text-xs text-slate-600">
                <span className="font-semibold text-emerald-600">Strength Anchor:</span> Very responsive to musical and rhythmic cues.
              </div>
            </div>
          </div>
        </div>
      )
    },
    interventions: {
      title: "Interventions & Daily Activities",
      subtitle: "What You Should Do to Train Your Child",
      desc: "Playful skill-building designed for home integration. Exercises are formulated by developers with 25 years of pediatric experience, helping parents train in comfortable settings.",
      badge: "Daily Learning Play",
      color: "bg-rose-500",
      content: (
        <div className="space-y-4 text-slate-700">
          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
              <Heart className="w-5.5 h-5.5 text-rose-600 fill-rose-100" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm md:text-base text-slate-800">Activity of the Day: The Mirror Mimicry Game</h5>
              <p className="text-xs text-slate-600 mt-1">
                Encourages facial awareness and emotional identification. Spend 10 minutes in front of a mirror making funny expressions with prompt cards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold">
            <div className="p-3 bg-card border border-slate-200 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" /> Balloon Balancing (Motor focus)
            </div>
            <div className="p-3 bg-card border border-slate-200 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" /> Sensory Box Guessing (Cognition focus)
            </div>
            <div className="p-3 bg-card border border-slate-200 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" /> Rhythmic Nursery Stretches (Physical focus)
            </div>
            <div className="p-3 bg-card border border-slate-200 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" /> Emotional Card Match (Social focus)
            </div>
          </div>
        </div>
      )
    }
  };

  const currentPoint = accessPoints[activeTab as keyof typeof accessPoints];

  return (
    <section id="access-points" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight break-keep">
            Your Guided Access Points
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            We refrain from deficit terminology. Instead, we map development from clinical assessment to parent play through clear, action-oriented guiding points.
          </p>
        </motion.div>

        {/* Access Points Main Dashboard Mockup */}
        <div className="mt-16 bg-slate-900 text-white rounded-[2.5rem] p-6 md:p-10 shadow-soft overflow-hidden relative border border-slate-800">
          {/* Subtle neon glowing backdrops */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 bg-indigo-500 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 bg-rose-500 blur-3xl" />

          {/* Simulated App Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-6 gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center font-black text-xs text-white">
                MB
              </span>
              <div>
                <h4 className="font-extrabold text-sm md:text-base">Ecosystem Portal</h4>
                <p className="text-[10px] md:text-xs text-slate-400">Child Code: MB-2026-ARIA</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setActiveTab("discovery")}
                className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "discovery" ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
              >
                🔍 Discovery Points
              </button>
              <button
                onClick={() => setActiveTab("pathways")}
                className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "pathways" ? "bg-teal-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
              >
                🚀 Booster Pathways
              </button>
              <button
                onClick={() => setActiveTab("milestones")}
                className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "milestones" ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
              >
                📈 Skill Milestones
              </button>
              <button
                onClick={() => setActiveTab("focus")}
                className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "focus" ? "bg-amber-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
              >
                🎯 Focus Areas
              </button>
              <button
                onClick={() => setActiveTab("interventions")}
                className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "interventions" ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
              >
                🧩 Daily Activities
              </button>
            </div>
          </div>

          {/* Interactive Screen Body */}
          <div className="mt-8 grid lg:grid-cols-12 gap-8 relative z-10 items-stretch">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className={`inline-flex items-center gap-1.5 text-[10px] md:text-xs font-black uppercase px-3 py-1 rounded-md text-white ${currentPoint.color}`}>
                  {currentPoint.badge}
                </span>

                <h3 className="text-2xl md:text-3xl font-black text-white mt-4">
                  {currentPoint.title}
                </h3>
                <p className="text-xs md:text-sm font-bold text-indigo-300 mt-1">
                  {currentPoint.subtitle}
                </p>
                <p className="mt-4 text-xs md:text-sm text-slate-300 leading-relaxed">
                  {currentPoint.desc}
                </p>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-[10px] md:text-xs text-slate-400 leading-normal">
                  All guided activities and assessments are calibrated with developmental pediatricians to guarantee school integration.
                </span>
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-6 md:p-8 flex flex-col justify-center text-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  {currentPoint.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveSuite() {
  const [activeWidget, setActiveWidget] = useState("screening");
  const [assessmentSelect, setAssessmentSelect] = useState("autism");
  const [quizStep, setQuizStep] = useState(0);
  const [selectedStreamOption, setSelectedStreamOption] = useState<string | null>(null);

  // Widget A: Screening tool recommendation finder
  const toolRecommendations = {
    autism: {
      toolName: "M-CHAT-R/F (Modified Checklist for Autism in Toddlers)",
      method: "Screening & Follow-Up Questionnaire",
      timing: "Ages 16 to 30 months",
      suggestedAction: "Select pathways focusing on Social Communication and Joint Play Activities.",
      webcamObservation: "Webcam behavioral AI observation tools are available for tracking nonverbal markers.",
      details: "An immediate parent-reported screener mapping social communication milestones."
    },
    adhd: {
      toolName: "Vanderbilt Assessment Scales",
      method: "Clinician & Parent Diagnostic Scales",
      timing: "Ages 4 to 12 years",
      suggestedAction: "Select disorder-specific pathways prioritizing Focus, Attention, and Behavioral Markers.",
      webcamObservation: "Optionally perform real-time diagnostic consultations via integrated virtual sessions.",
      details: "Comprehensive mapping of attention issues and academic performance profiles."
    },
    motor: {
      toolName: "PEDI (Pediatric Evaluation of Disability Inventory)",
      method: "Motor & Functional Ability Assessment",
      timing: "Ages 6 months to 7.5 years",
      suggestedAction: "Select pathways focusing on Motor Domains, Cerebral Palsy, and balancing issues.",
      webcamObservation: "Webcam tracking helps our specialists evaluate physical posture, balance, and fine motor skills.",
      details: "Helps plan functional physical therapy, posture, and coordination goals."
    },
    speech: {
      toolName: "PLS-5 (Preschool Language Scales)",
      method: "Developmental Communication Screener",
      timing: "Birth to 7 years",
      suggestedAction: "Select communication domain pathways tracking speech delays, apraxia of speech, or misarticulation.",
      webcamObservation: "webcam observation with AI-assisted video analysis captures acoustic articulation markers.",
      details: "Identifies language differences, slow learner signs, and early verbal progress metrics."
    }
  };

  // Widget B: Stream Selector Quiz (Playful Quiz)
  const quizQuestions = [
    {
      q: "What type of activities does your child engage in most during playtime?",
      opts: [
        { label: "Building models, puzzle games, and logical blocks", score: "Science/Tech" },
        { label: "Drawing pictures, storytelling, and roleplay games", score: "Humanities/Arts" },
        { label: "Directing other kids, organizing files, and play store", score: "Commerce/Management" }
      ]
    },
    {
      q: "When encountering a challenging situation at school, what does your child do?",
      opts: [
        { label: "Analyzes step-by-step and experiments with pieces", score: "Science/Tech" },
        { label: "Seeks social collaboration and expresses emotions", score: "Humanities/Arts" },
        { label: "Tries to negotiate and organize resources", score: "Commerce/Management" }
      ]
    }
  ];

  const handleQuizAnswer = (score: string) => {
    setSelectedStreamOption(score);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(2); // End State
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setSelectedStreamOption(null);
  };

  const selectedTool = toolRecommendations[assessmentSelect as keyof typeof toolRecommendations];

  return (
    <section id="interactive-suite" className="py-20 md:py-28 relative overflow-hidden bg-gradient-soft">
      <div className="blob bg-[var(--sun)] w-96 h-96 -right-20 top-10" />
      <div className="blob bg-[var(--lavender)] w-96 h-96 -left-10 bottom-20" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight break-keep">
            Milestone Boosters Interactive Suite
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Experience our features firsthand. Toggle between assessment tool suggestions and our playful stream selector quiz.
          </p>
        </motion.div>

        {/* Interactive Shell */}
        <div className="mt-16 bg-white border border-slate-200/80 rounded-[2.5rem] shadow-card overflow-hidden grid lg:grid-cols-12 items-stretch max-w-6xl mx-auto">

          {/* Shell Sidebar */}
          <div className="lg:col-span-4 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200/60 p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-extrabold text-slate-800 text-lg mb-6">Select Experience</h4>

              <div className="space-y-4">
                <button
                  onClick={() => setActiveWidget("screening")}
                  className={`w-full text-left p-4 rounded-xl border flex gap-3 items-center transition-all ${activeWidget === "screening"
                    ? "bg-white border-primary shadow-sm scale-[1.01]"
                    : "border-slate-200/60 hover:bg-white"
                    }`}
                >
                  <ClipboardList className={`w-5 h-5 ${activeWidget === "screening" ? "text-primary" : "text-slate-400"}`} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Assessment Tool Selector</h5>
                    <p className="text-xs text-muted-foreground mt-0.5">Find standardized pediatric tests</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveWidget("quiz")}
                  className={`w-full text-left p-4 rounded-xl border flex gap-3 items-center transition-all ${activeWidget === "quiz"
                    ? "bg-white border-primary shadow-sm scale-[1.01]"
                    : "border-slate-200/60 hover:bg-white"
                    }`}
                >
                  <GraduationCap className={`w-5 h-5 ${activeWidget === "quiz" ? "text-primary" : "text-slate-400"}`} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Stream Selector Quiz</h5>
                    <p className="text-xs text-muted-foreground mt-0.5">Quiz after 10th & 12th grades</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <span className="text-[10px] font-black uppercase text-primary tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Help Me Feature
              </span>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Click our &quot;Help Me&quot; option at any point during screeners or school stream quizzes to receive instant developmental explanations.
              </p>
            </div>
          </div>

          {/* Shell Main Screen */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-card">

            {activeWidget === "screening" ? (
              <div>
                <span className="text-xs font-extrabold uppercase text-sky-800 tracking-wider">Smart Screening Recommendation</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 leading-tight">
                  Choose a Concern to Find the Assessment
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  Select a category below to see which advanced developmental diagnostic tools we integrate.
                </p>

                {/* Categories Row */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["autism", "adhd", "motor", "speech"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setAssessmentSelect(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition ${assessmentSelect === cat
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                      {cat} Delay / Issues
                    </button>
                  ))}
                </div>

                {/* Selected Tool Details Card */}
                <div className="mt-8 p-6 rounded-2xl bg-sky-50/50 border border-sky-100/60 relative overflow-hidden">
                  <div className="absolute right-4 top-4 w-10 h-10 rounded-full bg-sky-100/50 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-sky-600" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-800">
                    Recommended Diagnostic Tool
                  </span>

                  <h4 className="text-lg md:text-xl font-extrabold text-slate-800 mt-1">
                    {selectedTool.toolName}
                  </h4>
                  <p className="text-xs text-sky-700 font-semibold mt-0.5">
                    Methodology: {selectedTool.method} | Timing: {selectedTool.timing}
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 mt-4 leading-relaxed">
                    {selectedTool.details}
                  </p>

                  <div className="mt-4 pt-4 border-t border-sky-200/50 space-y-2 text-xs text-slate-600">
                    <div className="flex gap-2 items-start">
                      <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span><strong>Care Pathways Effect:</strong> {selectedTool.suggestedAction}</span>
                    </div>

                    <div className="flex gap-2 items-start mt-2 p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100/50">
                      <MonitorPlay className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span><strong>Webcam Permission Note:</strong> {selectedTool.webcamObservation} You may have to grant browser webcam permissions.</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-800 tracking-wider">Stream Selector Tool</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 leading-tight">
                  Ecosystem Playful Career Quiz
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  Helps children after 10th or 12th grade understand their unique cognitive interests with smart guidance.
                </p>

                {quizStep < 2 ? (
                  <div className="mt-8 space-y-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/50">
                      <span className="text-[10px] font-extrabold text-slate-400">Question {quizStep + 1} of 2</span>
                      <h5 className="font-extrabold text-slate-800 text-sm md:text-base mt-1">
                        {quizQuestions[quizStep].q}
                      </h5>
                    </div>

                    <div className="space-y-3">
                      {quizQuestions[quizStep].opts.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizAnswer(opt.score)}
                          className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all font-semibold text-xs md:text-sm text-slate-700"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100">
                      <button
                        onClick={() => alert("Help Me Explainer: This question tracks whether the child has stronger visual-spatial logical skills or verbal-social empathy skills.")}
                        className="text-amber-600 font-extrabold hover:underline flex items-center gap-1"
                      >
                        <HelpCircle className="w-4 h-4" /> Need help answering?
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-amber-600" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">Recommended Career Stream</span>
                    <h4 className="text-2xl font-black text-slate-900 mt-1">
                      {selectedStreamOption || "Commerce & Management"}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
                      Based on cognitive traits logged, this pathway focuses on logical organizational setups. Choose after-10th streams focusing on practical execution.
                    </p>

                    <div className="mt-8 flex gap-3 justify-center">
                      <button
                        onClick={resetQuiz}
                        className="px-6 py-2.5 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-50 transition"
                      >
                        Retake Quiz
                      </button>
                      <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-gradient-cta text-white text-xs font-bold shadow-soft hover:opacity-95 transition"
                      >
                        Speak with Specialist
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const servicesList = [
    { title: "Autism (ASD) & Communication", desc: "Targeted communication logs and social capability training.", icon: Brain, tint: "var(--sky)" },
    { title: "ADHD & Attention Problems", desc: "Focus pathways building attention span and executive functioning.", icon: Sparkles, tint: "var(--mint)" },
    { title: "Learning Difficulties", desc: "Structured aid for slow learners and SLD (Specific Learning Disabilities).", icon: BookOpen, tint: "var(--lavender)" },
    { title: "Motor Disorders & Cerebral Palsy", desc: "Physical coordination timelines and balancing pathways.", icon: Activity, tint: "var(--sun)" },
    { title: "Intellectual Gaps / GDD / ID", desc: "Cognitive expansion plans for Global Developmental Delay.", icon: ClipboardList, tint: "var(--sky)" },
    { title: "Speech Delay & Stammering", desc: "Apraxia of speech, misarticulation, and vocal tracking.", icon: MessageCircle, tint: "var(--mint)" },
    { title: "Genetic Syndromes & Disorders", desc: "Specialist-guided plans tailored to chromosome-specific profiles.", icon: Heart, tint: "var(--lavender)" },
    { title: "High-risk Infant Follow-up", desc: "NICU tracking schedules and early development screens.", icon: Baby, tint: "var(--sun)" },
    { title: "Eating & Chewing Challenges", desc: "Support for picky eaters, chewing and swallowing difficulties.", icon: Smile, tint: "var(--sky)" },
    { title: "Eating Disorders / Anorexia / Bulimia", desc: "Behavioral nourishment models and adolescent focus pathways.", icon: HeartPulse, tint: "var(--mint)" },
    { title: "DCD & Balance Issues", desc: "Motor coordination skill enhancement and spatial exercises.", icon: Target, tint: "var(--lavender)" },
    { title: "Behavioral Disorders", desc: "AI-assisted video analysis and markers for early interventions.", icon: Video, tint: "var(--sun)" }
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="blob bg-[var(--sky)] w-96 h-96 -left-20 top-20" />
      <div className="blob bg-[var(--mint)] w-96 h-96 -right-20 bottom-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 break-keep">
            Our Services & Portfolios
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            Intervene successfully across all developmental profiles with reports auto-generated after integration with standardized assessment tools.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv, idx) => {
            const IconC = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 rounded-3xl bg-card border border-slate-200/50 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: srv.tint }}
                >
                  <IconC className="w-5.5 h-5.5 text-slate-800" />
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-primary transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dual highlights cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[2rem] bg-gradient-cta text-primary-foreground shadow-soft flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-100 bg-white/20 px-3 py-1 rounded-md inline-block">
                Actionable Plans
              </span>
              <h3 className="text-xl md:text-2xl font-black mt-4">
                Dynamic Care Plans
              </h3>
              <p className="mt-2 text-xs md:text-sm opacity-90 leading-relaxed">
                Automatically generate educational and intervention goals based on clinical screening data. Plan an intervention plan for your child and help in monitoring progress through direct dashboard integration.
              </p>
            </div>
            <div className="mt-8 flex gap-2 items-center text-xs font-bold text-white">
              <Check className="w-4 h-4 text-teal-300" /> Auto-goals Generation
              <span className="opacity-50">|</span>
              <Check className="w-4 h-4 text-teal-300" /> Parent Training whispering
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-soft flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 bg-slate-800 px-3 py-1 rounded-md inline-block">
                Regulatory Alignment
              </span>
              <h3 className="text-xl md:text-2xl font-black mt-4">
                Compliance & Data Privacy
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                We enforce the highest regulatory standards. Our unified digital medical-education database is fully compliant with HIPAA, FERPA, and GDPR data architecture requirements.
              </p>
            </div>
            <div className="mt-8 flex gap-3 text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-teal-400" /> HIPAA Secure</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> FERPA Compliant</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-teal-400" /> GDPR Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-slate-50">
      <div className="blob bg-[var(--sky)] w-[400px] h-[400px] -right-24 -bottom-24 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-900 break-keep">
                Contact Us
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Have questions about our intake screening, diagnostic suite integrations, or virtual parent training? Drop us a line.
              </p>
            </div>

            <div className="my-8 space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-800 text-sm">Email Support</h5>
                  <a href="mailto:contact@milestoneboosters.com" className="text-sm text-primary hover:underline">
                    contact@milestoneboosters.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-800 text-sm">Phone Hotline</h5>
                  <a href="tel:+919876543210" className="text-sm text-slate-600 hover:text-slate-800 transition">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-800 text-sm">Headquarters</h5>
                  <p className="text-sm text-slate-600">
                    Jinvtech Pvt Ltd, Supported by Edsols Pvt Ltd
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                Publisher Brand
              </span>
              <p className="text-xs text-slate-600 mt-1 leading-normal font-semibold">
                A product of Jinvtech pvt Ltd supported by Edsols pvt Ltd.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 p-8 md:p-12 rounded-[2.5rem] shadow-card h-full flex flex-col justify-center">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-slate-500">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary text-sm transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase text-slate-500">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase text-slate-500">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Intake or Diagnostic Setup Query"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary text-sm transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase text-slate-500">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi, I am interested in exploring the Milestone Boosters OS..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary text-sm transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-cta text-white font-extrabold text-sm shadow-soft hover:opacity-95 active:scale-[0.99] transition-all duration-150"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you for reaching out to Milestone Boosters. A developmental pediatric specialist will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-50 transition"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-xl bg-gradient-cta grid place-items-center text-white">
            <Compass className="w-4.5 h-4.5" />
          </span>
          <span className="text-slate-800">Milestone Boosters</span>
        </a>

        <div className="flex gap-6 text-xs text-muted-foreground font-semibold">
          <a href="#why-matters" className="hover:text-primary transition">Why Us</a>
          <a href="#infrastructure" className="hover:text-primary transition">OS Layers</a>
          <a href="#access-points" className="hover:text-primary transition">Access Points</a>
          <a href="#services" className="hover:text-primary transition">Our Services</a>
        </div>

        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Milestone Boosters. A Product of Jinvtech Pvt Ltd supported by Edsols Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <Hero />
      <WhyItMatters />
      <InfrastructureLayers />
      <AccessPointsDashboard />
      <InteractiveSuite />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  );
}
