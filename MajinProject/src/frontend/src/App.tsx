import {
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  Facebook,
  Gamepad2,
  Instagram,
  Mail,
  Menu,
  Music,
  Phone,
  Shield,
  Swords,
  Trophy,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  SiDiscord,
  SiGithub,
  SiPinterest,
  SiRoblox,
  SiSpotify,
  SiSteam,
  SiTiktok,
} from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gaming", href: "#gaming" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    icon: Shield,
    label: "Cybersecurity",
    desc: "Penetration testing, network security, vulnerability assessment",
  },
  {
    icon: Code2,
    label: "Web Development",
    desc: "Full-stack development with modern frameworks and tools",
  },
  {
    icon: Gamepad2,
    label: "Game Development",
    desc: "Game design, mechanics, and immersive experience creation",
  },
  {
    icon: Cpu,
    label: "Hardware & PC Building",
    desc: "Custom builds, overclocking, and hardware optimization",
  },
];

const TECH_SKILLS = [
  { label: "HTML", pct: 97 },
  { label: "CSS", pct: 87 },
  { label: "Python", pct: 69 },
  { label: "C", pct: 55 },
  { label: "Java", pct: 47 },
];

const GAME_PROFILES = [
  {
    name: "Steam",
    icon: SiSteam,
    username: "MAJIN_69X",
    url: "https://steamcommunity.com/id/MAJIN_69X/",
  },
  {
    name: "Roblox",
    icon: SiRoblox,
    username: "MAJIN_69X",
    url: "https://www.roblox.com/users/MAJIN_69X",
  },
  {
    name: "BloodStrike",
    icon: Gamepad2,
    username: "UID: 588169433936",
    url: null,
  },
  {
    name: "eFootball",
    icon: Gamepad2,
    username: "MAJIN_69X",
    url: null,
  },
  {
    name: "Epic Games",
    icon: Gamepad2,
    username: "Majin 69x",
    url: null,
  },
  {
    name: "XBOX",
    icon: Gamepad2,
    username: "MAJIN 6T9",
    url: null,
  },
];

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    icon: Youtube,
    username: "@_Only1boy_",
    url: "https://www.youtube.com/@_Only1boy_",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    name: "Facebook",
    icon: Facebook,
    username: "MAJIN69X",
    url: "https://www.facebook.com/MAJIN69X/",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    username: "@majin69x",
    url: "https://x.com/majin69x",
    color: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
  {
    name: "Instagram",
    icon: Instagram,
    username: "@majin_69x",
    url: "https://www.instagram.com/majin_69x/",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    username: "Majin",
    url: "https://open.spotify.com/user/31o2ioddlbispmhewyod7ul2fj7y?si=526255682a664fb7",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    username: "@majin69x",
    url: "https://www.tiktok.com/@majin69x?is_from_webapp=1&sender_device=pc",
    color: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
  {
    name: "Microsoft Teams",
    icon: Users,
    username: "MAJIN 69x",
    url: null,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    name: "Pinterest",
    icon: SiPinterest,
    username: "MAJIN_69X",
    url: "https://www.pinterest.com/MAJIN_69X/",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    username: "majin_69x",
    url: null,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    username: "Majin69x",
    url: "https://github.com/Majin69x",
    color: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
];

// ─── Aqua Dot Trail ──────────────────────────────────────────────
interface DotParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

function AquaDotTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<DotParticle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const DOT_COLORS = [
      "#00e5ff",
      "#00ffff",
      "#00bcd4",
      "#4dd0e1",
      "#80deea",
      "#26c6da",
    ];

    const onMove = (e: MouseEvent) => {
      const count = 2 + Math.floor(Math.random() * 2); // 2-3 dots
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 0.6;
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 1.5,
          alpha: 0.45 + Math.random() * 0.2,
          color: DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)],
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.alpha > 0.01);
      for (const p of particles.current) {
        // Gentle outward drift — no gravity, slight drag
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.alpha -= 0.03;
        p.size *= 0.985;
        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.shadowBlur = 4;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 0.1), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99990,
      }}
    />
  );
}

// ─── Custom Cursor ──────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<
    "default" | "interactive" | "heading"
  >("default");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      const target = e.target as Element;
      const isInteractive = target.closest(
        "a, button, [data-ocid], input, textarea, select",
      );
      const isHeading = target.closest("h1, h2, h3, h4, h5, h6");
      if (isHeading) setHoverType("heading");
      else if (isInteractive) setHoverType("interactive");
      else setHoverType("default");
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        const size = hoverType === "interactive" ? 50 : 28;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hoverType]);

  const ringSize = hoverType === "interactive" ? 50 : 28;
  const ringColor =
    hoverType === "heading" ? "oklch(0.88 0.18 85)" : "oklch(0.85 0.13 196)";
  const dotOpacity = hoverType === "interactive" ? 0 : 1;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: dotOpacity,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "oklch(0.85 0.13 196)",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `2px solid ${ringColor}`,
          background:
            hoverType === "interactive" ? `${ringColor}22` : "transparent",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
          transition:
            "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
}

// ─── Scroll Progress ────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
      aria-hidden
    >
      <div className="h-full w-full bg-aqua" />
    </motion.div>
  );
}

// ─── Floating Particles ──────────────────────────────────────────
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 5) % 100}%`,
    size: (i % 3) + 2,
    delay: `${(i * 0.4) % 6}s`,
    duration: `${6 + (i % 5)}s`,
    top: `${(i * 13 + 10) % 90}%`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-aqua/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-orbitron text-xl font-bold text-aqua glow-aqua-text tracking-wider"
        >
          MAJIN
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="nav-link text-sm font-space text-muted-foreground hover:text-aqua transition-colors duration-200 tracking-widest uppercase inline-block"
                whileHover={{ letterSpacing: "0.4em" }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden text-foreground hover:text-aqua transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          data-ocid="nav.menu.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/98 border-b border-aqua/20 px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                className="text-sm font-space text-muted-foreground hover:text-aqua transition-colors tracking-widest uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero Section ────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-grid-pattern"
    >
      <FloatingParticles />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-glow absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.13 196 / 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.13 196) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-aqua font-orbitron text-sm tracking-[0.3em] uppercase">
              &gt; Welcome to my portfolio
            </p>
            <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              {"I'M "}
              <span className="text-aqua glow-aqua-text">MAJIN</span>
            </h1>
          </div>
          <p className="font-space text-muted-foreground text-lg leading-relaxed max-w-md">
            Cybersecurity specialist &middot; Web developer &middot; Game
            enthusiast &middot; Hardware builder. Crafting digital experiences
            at the intersection of security, creativity, and technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#contact"
              data-ocid="hero.contact.primary_button"
              className="hero-btn-primary inline-flex items-center gap-2 px-6 py-3 bg-aqua text-background font-orbitron text-sm font-bold tracking-wider uppercase rounded relative overflow-hidden"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              Contact Me
              <span className="hero-pulse-ring" />
            </motion.a>
            <motion.a
              href="#about"
              data-ocid="hero.about.secondary_button"
              className="hero-btn-secondary inline-flex items-center gap-2 px-6 py-3 border border-aqua/50 text-aqua font-orbitron text-sm font-bold tracking-wider uppercase rounded relative"
              whileHover={{
                scale: 1.05,
                borderColor: "oklch(0.85 0.13 196)",
                backgroundColor: "oklch(0.85 0.13 196 / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              Learn More <ChevronDown size={16} />
              <span className="hero-pulse-ring" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                boxShadow:
                  "0 0 40px oklch(0.85 0.13 196 / 0.35), 0 0 80px oklch(0.85 0.13 196 / 0.15)",
              }}
            />
            {["top-left", "top-right", "bottom-left", "bottom-right"].map(
              (corner) => (
                <div
                  key={corner}
                  className={`absolute w-8 h-8 z-20 pointer-events-none ${
                    corner.includes("top") ? "-top-2" : "-bottom-2"
                  } ${corner.includes("left") ? "-left-2" : "-right-2"}`}
                  style={{
                    borderTop: corner.includes("top")
                      ? "3px solid oklch(0.85 0.13 196)"
                      : undefined,
                    borderBottom: corner.includes("bottom")
                      ? "3px solid oklch(0.85 0.13 196)"
                      : undefined,
                    borderLeft: corner.includes("left")
                      ? "3px solid oklch(0.85 0.13 196)"
                      : undefined,
                    borderRight: corner.includes("right")
                      ? "3px solid oklch(0.85 0.13 196)"
                      : undefined,
                  }}
                />
              ),
            )}
            <div
              className="rounded-lg overflow-hidden relative"
              style={{
                border: "1px solid oklch(0.85 0.13 196 / 0.6)",
                width: "340px",
                maxWidth: "100%",
              }}
            >
              <img
                src="/majin69x_.png"
                alt="Majin"
                style={{
                  width: "340px",
                  height: "420px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.85 0.13 196 / 0.03) 2px, oklch(0.85 0.13 196 / 0.03) 4px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 z-20 px-3 py-2"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.12 0 0 / 0.9), transparent)",
                }}
              >
                <p className="font-orbitron text-xs text-aqua tracking-widest">
                  {"[ MAJIN ] TECHNOLOGIST"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-aqua/50"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; about.exe
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              About <span className="text-aqua">Me</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-space text-foreground/80 text-lg leading-relaxed">
                {
                  "I'm Majin. I am a versatile and creative technologist with expertise spanning "
                }
                <span className="text-aqua">
                  cybersecurity, web development, gaming, and robotics
                </span>
                .
              </p>
              <p className="font-space text-foreground/80 leading-relaxed">
                My deep experience in hardware and PC building empowers me to
                deliver comprehensive solutions across the tech landscape.
                Immersing myself in the creative worlds of software, web, and
                game development is not just a profession but a unique passion.
              </p>
              <p className="font-space text-foreground/80 leading-relaxed">
                Music is my constant companion, and traveling introduces me to
                new places, cultures, and experiences. In every project, I
                strive to create distinctive and impactful work by perfectly
                balancing{" "}
                <span className="text-aqua">
                  security, functionality, and visual appeal
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cybersecurity", value: "Expert" },
                { label: "Web Dev", value: "Advanced" },
                { label: "Game Dev", value: "Passionate" },
                { label: "Hardware", value: "Specialist" },
                { label: "Robotics", value: "Skilled" },
                { label: "Music", value: "Enthusiast" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    scale: 1.08,
                    rotate: -3,
                    backgroundColor: "oklch(0.2 0.02 196)",
                    boxShadow: "0 0 18px oklch(0.85 0.13 196 / 0.45)",
                    borderColor: "oklch(0.85 0.13 196 / 0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-4 rounded border border-aqua/20 bg-card transition-colors duration-200"
                >
                  <p className="font-orbitron text-xs text-muted-foreground tracking-widest uppercase">
                    {item.label}
                  </p>
                  <p className="font-space text-aqua font-semibold mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Skill Bar ───────────────────────────────────────────────────
function SkillBar({
  label,
  pct,
  index,
  gradient,
  glowColor,
}: {
  label: string;
  pct: number;
  index: number;
  gradient?: string;
  glowColor?: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const barGradient =
    gradient ??
    "linear-gradient(90deg, oklch(0.85 0.13 196), oklch(0.75 0.15 196))";
  const barGlow = glowColor ?? "oklch(0.85 0.13 196 / 0.5)";

  return (
    <motion.div
      ref={ref}
      className="skill-bar-row space-y-2"
      whileHover={{
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-orbitron text-sm font-bold text-foreground tracking-wider">
          {label}
        </span>
        <span className="font-orbitron text-sm text-aqua">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
          style={{
            background: barGradient,
            boxShadow: `0 0 10px ${barGlow}`,
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Skills Section ──────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; skills.json
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              Core <span className="text-aqua">Skills</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px oklch(0.85 0.13 196 / 0.3)",
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded border border-aqua/20 bg-card hover:border-aqua/60 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <skill.icon size={32} className="text-aqua" />
                </motion.div>
                <h3 className="font-orbitron text-sm font-bold text-foreground tracking-wide mb-2">
                  {skill.label}
                </h3>
                <p className="font-space text-muted-foreground text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technical Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-orbitron text-xl font-bold text-foreground">
              Technical <span className="text-aqua">Proficiency</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {TECH_SKILLS.map((s, i) => (
                <SkillBar key={s.label} label={s.label} pct={s.pct} index={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Projects Section ────────────────────────────────────────────
function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; projects.log
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              My <span className="text-aqua">Projects</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <motion.div
            data-ocid="projects.item.1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-lg border p-8 bg-card group project-card project-border-cycle"
            style={{
              boxShadow: "0 0 30px oklch(0.78 0.18 85 / 0.1)",
            }}
          >
            {/* Shimmer */}
            <div className="project-shimmer" />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="flex-shrink-0">
                <Trophy
                  size={80}
                  className="text-yellow-400"
                  style={{
                    filter: "drop-shadow(0 0 20px oklch(0.78 0.18 85 / 0.8))",
                  }}
                />
              </div>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-orbitron text-xs font-bold tracking-wider"
                    style={{
                      background: "oklch(0.78 0.18 85 / 0.15)",
                      border: "1px solid oklch(0.78 0.18 85 / 0.5)",
                      color: "oklch(0.88 0.18 85)",
                    }}
                  >
                    🥇 1st Place — Gold Medal
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-foreground">
                    7th World Invention Competition &amp; Exhibition 2025
                  </h3>
                  <p
                    className="font-orbitron text-sm tracking-wider"
                    style={{ color: "oklch(0.88 0.18 85)" }}
                  >
                    Bangladesh National Round — 7th WICE
                  </p>
                </div>
                <p className="font-space text-foreground/80 leading-relaxed">
                  Competed in the 7th World Invention Competition &amp;
                  Exhibition 2025, Bangladesh National Round with Team 7th WICE.
                  We secured first place and were awarded the Gold Medal for our
                  invention.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Gaming Section ──────────────────────────────────────────────
function GamingSection() {
  return (
    <section id="gaming" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; gaming.profiles
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              Game <span className="text-aqua">Profiles</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAME_PROFILES.map((game, i) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`gaming.profile.item.${i + 1}`}
                style={{ perspective: "800px" }}
                className="p-5 rounded border border-aqua/20 bg-card hover:border-aqua/60 transition-all duration-300 game-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <game.icon size={24} className="text-aqua" />
                  <h3 className="font-orbitron text-sm font-bold text-foreground">
                    {game.name}
                  </h3>
                </div>
                <p className="font-space text-muted-foreground text-sm mb-3">
                  {game.username}
                </p>
                {game.url ? (
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-aqua text-xs font-orbitron tracking-wider hover:underline"
                  >
                    View Profile <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-muted-foreground text-xs font-orbitron">
                    In-Game Only
                  </span>
                )}
              </motion.div>
            ))}

            {/* Gaming Skill=99% Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <div
                className="relative p-6 rounded border border-aqua/40 bg-card overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,255,200,0.05) 100%)",
                }}
              >
                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,200,0.03) 2px, rgba(0,255,200,0.03) 4px)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <Trophy
                        size={28}
                        className="text-aqua drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]"
                      />
                      <div>
                        <h3 className="font-orbitron text-lg font-bold text-foreground tracking-wider">
                          Gaming Skill
                        </h3>
                        <p className="font-space text-xs text-muted-foreground tracking-widest uppercase">
                          MAX LEVEL · ELITE GAMER
                        </p>
                      </div>
                    </div>
                    <span
                      className="font-orbitron text-3xl font-black"
                      style={{
                        background: "linear-gradient(90deg, #ffd700, #00ffc8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      99%
                    </span>
                  </div>
                  {/* Animated progress bar */}
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #ffd700, #00ffc8)",
                        boxShadow: "0 0 12px rgba(0,255,200,0.6)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="font-orbitron text-xs text-muted-foreground">
                      BEGINNER
                    </span>
                    <span className="font-orbitron text-xs text-aqua">
                      MAX LEVEL
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Social Section ──────────────────────────────────────────────
type SocialItem = {
  name: string;
  icon: React.ElementType;
  username: string;
  url: string | null;
  color: string;
  bgColor: string;
  borderColor: string;
};

function SocialCard({ social, index }: { social: SocialItem; index: number }) {
  const cls = `flex items-center gap-4 p-5 rounded border ${social.borderColor} ${social.bgColor} transition-all duration-300 group`;
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.5, delay: index * 0.06 },
    whileHover: { x: 8, borderColor: "oklch(0.85 0.13 196)" },
    "data-ocid": `social.${social.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`,
    className: cls,
  };
  const Icon = social.icon;
  const content = (
    <>
      <div className={`p-3 rounded-full ${social.bgColor} relative`}>
        <motion.span
          whileHover={{ y: [0, -6, 0] }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
            duration: 0.5,
          }}
          className="block"
        >
          <Icon size={24} className={social.color} />
        </motion.span>
      </div>
      <div className="flex-1">
        <p className="font-orbitron text-sm font-bold text-foreground">
          {social.name}
        </p>
        <p className={`font-space text-sm ${social.color}`}>
          {social.username}
        </p>
      </div>
      {social.url && (
        <ExternalLink
          size={16}
          className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors"
        />
      )}
    </>
  );
  if (social.url) {
    return (
      <motion.a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }
  return <motion.div {...motionProps}>{content}</motion.div>;
}

function SocialSection() {
  return (
    <section id="social" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; find.me
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              Find Me <span className="text-aqua">Online</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_LINKS.map((social, i) => (
              <SocialCard key={social.name} social={social} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <p className="text-aqua font-orbitron text-xs tracking-[0.3em] uppercase">
              &gt; contact.init
            </p>
            <h2 className="font-orbitron text-4xl font-bold text-foreground">
              Contact <span className="text-aqua">Me</span>
            </h2>
            <div className="w-20 h-0.5 bg-aqua" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:majin101010@gmail.com"
              data-ocid="contact.email.link"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px oklch(0.85 0.13 196 / 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="contact-card flex items-center gap-4 p-6 rounded border border-aqua/20 bg-card hover:border-aqua/60 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="contact-shimmer" />
              <div className="p-3 rounded-full bg-aqua/10 relative z-10">
                <Mail size={24} className="text-aqua" />
              </div>
              <div className="relative z-10">
                <p className="font-orbitron text-xs text-muted-foreground tracking-widest uppercase mb-1">
                  Email
                </p>
                <p className="font-space text-foreground group-hover:text-aqua transition-colors">
                  majin101010@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+8801772972093"
              data-ocid="contact.phone.link"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px oklch(0.85 0.13 196 / 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="contact-card flex items-center gap-4 p-6 rounded border border-aqua/20 bg-card hover:border-aqua/60 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="contact-shimmer" />
              <div className="p-3 rounded-full bg-aqua/10 relative z-10">
                <Phone size={24} className="text-aqua" />
              </div>
              <div className="relative z-10">
                <p className="font-orbitron text-xs text-muted-foreground tracking-widest uppercase mb-1">
                  Phone
                </p>
                <p className="font-space text-foreground group-hover:text-aqua transition-colors">
                  +880 1772972093
                </p>
              </div>
            </motion.a>
          </div>

          <div className="p-8 rounded border border-aqua/20 bg-card text-center space-y-4">
            <Music size={32} className="text-aqua mx-auto" />
            <p className="font-orbitron text-sm text-foreground tracking-wider">
              Always creating, always exploring.
            </p>
            <p className="font-space text-muted-foreground">
              Feel free to reach out for collaborations, projects, or just a
              conversation about tech and gaming.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-aqua/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-orbitron text-xs text-muted-foreground tracking-wider">
          <span className="text-aqua">MAJIN</span>
          {" // PORTFOLIO"}
        </p>
        <p className="font-space text-xs text-muted-foreground">
          {`© ${year}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AquaDotTrail />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GamingSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
