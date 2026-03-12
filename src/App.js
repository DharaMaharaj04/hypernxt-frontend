import React from "react";
import logo from "./assets/images/Hypernext Logo Blue.png";
import Login from "./components/Login";
import PortalModal from "./components/PortalModal";
import datacenterrenewable from "./assets/images/data-center-renewable.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  Check,
  Cpu,
  Leaf,
  Shield,
  Thermometer,
  Zap,
  Building2,
  Globe,
  Sparkles,
  Award,
  Users,
  Newspaper,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Server,
  Battery,
  MoveRight,
  Droplet,
} from "lucide-react";

/*************************************************
 * BRAND SYSTEM (from logo)  - button : #2563eb
 *************************************************/
const BRAND = {
  primary: "#003366", // navy
  accent: "#00AEEF", // cyan
  bgLight: "#F5F9FC", // softer light
  line: "#E6EEF5", // hairline borders
  text: "#0B1F33",
  muted: "#5B6B7C",
};

const cn = (...classes) => classes.filter(Boolean).join(" ");

/*************************************************
 * REUSABLE UI (minimal)
 *************************************************/
function Button({ 
  children, 
  className = "", 
  variant = "solid", 
  size = "md", 
  asChild = false, 
  ...rest 
}) {
  const base = "inline-flex items-center justify-center rounded-xl transition-all duration-200";
  const variants = {
    solid: "bg-[#00ff64e6] text-white hover:bg-[#1d263d]",
    outline: "border border-[#00ff64e6] text-blue-600 hover:bg-[#1d263d]",
    ghost: "text-[#00ff64e6] hover:bg-[#1d263d]",
  };
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const styles = {
    ...rest.style,
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${base} ${variants[variant]} ${sizes[size]} ${className}`,
      style: { ...(children.props.style || {}), ...styles },
      ...rest,
    });
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={styles}
      {...rest}
    >
      {children}
    </button>
  );
}

function Card({ className = "", children, style }) {
  return (
    <div
      className={cn("rounded-lg border bg-white", className)}
      style={{ borderColor: BRAND.line, boxShadow: "none", ...(style || {}) }}
    >
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return <div className={cn("p-6 pb-2", className)}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return (
    <div className={cn("text-lg font-semibold", className)} style={{ color: BRAND.primary }}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={cn("p-6 pt-2", className)}>{children}</div>;
}



/*************************************************
 * BRAND / LOGO
 *************************************************/
const LOGO = "/mnt/data/Hypernext Logo Blue.png";
function BrandLogo({ size = 36 }) {
  const h = typeof size === "number" ? `${size}px` : size;
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="Hypernext" className="select-none" style={{ height: h }} />
      
    </div>
  );
}

/*************************************************
 * CONTENT DATA
 *************************************************/
const nav = [
  { label: "Why Hypernext", href: "#why" },
  { label: "Products", href: "#products" },
  { label: "HyperOne OS", href: "#hyperone" },
  { label: "Campuses", href: "#campuses" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Customers", href: "#customers" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "110 MW", label: "Hyderabad Campus" },
  { value: "250 MW", label: "Campus-1, Vizag" },
  { value: "250 MW", label: "Campus-2, Vizag" },
  { value: "Tier IV", label: "Fault-Tolerant" },
  { value: "99.995%", label: "Availability" },
  { value: "≤ 1.15", label: "PUE target" },
];

const features = [
  {
    icon: <Thermometer className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "Hybrid Direct-to-Chip Cooling",
    desc: "Liquid + air optimized manifolds; warm-water loops; hot-/cold-aisle containment for 30–100kW+ racks.",
  },
  {
    icon: <Shield className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "Zero-Downtime Resilience",
    desc: "2N/2N+1 power, concurrently maintainable paths, active-active regions, and DR runbooks.",
  },
  {
    icon: <Building2 className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "Carrier/Cloud Rich",
    desc: "Neutral meet-me rooms, CLS adjacency, cloud on-ramps, and private interconnects.",
  },
];

const campuses = [
  {
    city: "Hyderabad",
    badge: "AI Compute Hub",
    mw: "110 MW",
    points: ["Fintech and SaaS edge", "Cloud on-ramps", "Liquid-ready bays"],
  },
  {
    city: "Campus 1, Vizag (Visakhapatnam)",
    badge: "DC + CLS",
    mw: "250 MW",
    points: ["Tier IV build", "Cable Landing Station adjacency", "Green power PPAs"],
  },
  {
    city: "Campus 2, Vizag (Visakhapatnam)",
    badge: "DC + CLS",
    mw: "250 MW",
    points: ["Tier IV build", "Cable Landing Station adjacency", "Green power PPAs"],
  },
];

const products = [
  {
    icon: <Server className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "Colocation",
    desc: "From racks to private suites with 2N power, dedicated cooling, and hardened security.",
    bullets: ["30–100kW+/rack", "2N UPS + generators", "Smart hands 24x7"],
  },
  {
    icon: <Cpu className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "GPUaaS / Bare-Metal",
    desc: "Elastic H100/MI300 clusters—multi-tenant or dedicated. Scale to thousands of GPUs.",
    bullets: ["InfiniBand / RoCE", "Secure tenancy", "API & portal"],
  },
  {
    icon: <Battery className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "Energy & Edge",
    desc: "Green PPAs, BESS and microgrids; regional edge sites for sub-5ms experiences.",
    bullets: ["Hourly REC match", "BESS failover", "Edge PoPs"],
  },
  {
    icon: <Globe className="h-5 w-5" style={{ color: BRAND.primary }} />,
    title: "HyperOne OS",
    desc: "Data center operating system: single control plane for power, cooling, network, compute & security.",
    bullets: ["Single pane of control", "Policy & automation", "APIs & integrations"],
  },
];

const customers = [
  { name: "Financial Services", copy: "Low-latency trading, sovereign compliance, PCI-ready." },
  { name: "AI / Life Sciences", copy: "Petascale training, DGX-class nodes, warm-water loops." },
  { name: "Media & Gaming", copy: "Edge rendering, CDN peering, burstable compute." },
  { name: "Public Sector", copy: "Regional data residency and high-assurance controls." },
];

const news = [
  { title: "Hypernext announces 192MW multi-phase build", date: "Aug 2025", link: "#" },
  { title: "Hybrid direct-to-chip cooling patent granted", date: "Jun 2025", link: "#" },
  { title: "600MW captive solar plant (Khavda) announced", date: "May 2025", link: "#" },
];

const contactInfo = {
  address: "13rd Floor, Building 9, Raheja Mindspace Madhapur IT Park, Hyderabad - 500081",
  phone: "+91 9878423333",
  email: "info@hypernxt.com",
};

/*************************************************
 * ANIMATIONS
 *************************************************/
const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

/*************************************************
 * DEV SMOKE TESTS (non-blocking)
 *************************************************/
function SmokeTests() {
  React.useEffect(() => {
    try {
      console.assert(nav.length === 9, "nav should have 9 items");
      console.assert(products.some((p) => /HyperOne/.test(p.title)), "HyperOne product present");
     console.assert(campuses.length === 3, "Three campuses expected (Hyderabad + Vizag Campus 1 + Vizag Campus 2)");
      console.assert(campuses[0].mw === "110 MW" && campuses[1].mw === "250 MW", "MW figures correct");
      console.assert(/CLS/.test(campuses[1].badge), "Vizag badge includes CLS");
    } catch (e) {
      console.error("Smoke tests error", e);
    }
  }, []);
  return null;
}

/*************************************************
 * LAYOUT SECTIONS (MINIMAL)
 
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <BrandLogo />
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-600 hover:text-slate-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="secondary">
            <a href="#contact">Talk to Sales</a>
          </Button>
          <Button asChild>
            <a href="#products">Launch Portal</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

*************************************************/

function Header({ setPortalOpen })  {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="secondary">
            <a href="#contact">Talk to Sales</a>
          </Button>
          {/* Desktop Buttons
          <Button asChild>
            <a href="#products">Launch Portal</a>
          </Button>  */}

          <Button onClick={() => setPortalOpen(true)}>
            Launch Portal
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-slate-200"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <nav className="flex flex-col p-4 space-y-3 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-slate-700 text-center hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3">
              <Button asChild size="sm">
                <a href="#contact">Talk to Sales</a>
              </Button>
              <Button onClick={() => setPortalOpen(true)} size="sm">
                Launch Portal
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}




function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div {...fade} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border" style={{ borderColor: BRAND.line, color: BRAND.muted }}>
            <Sparkles className="h-3.5 w-3.5" style={{ color: BRAND.primary }} /> Responsible, Tier IV, 100% renewable
          </div>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight" style={{ color: BRAND.text }}>
            The responsible data center for the AI decade
          </h1>
          <p className="mt-5 text-base max-w-2xl" style={{ color: BRAND.muted }}>
            Hypernext operates Tier IV, fault-tolerant campuses powered by <strong style={{color: BRAND.primary}}>100% renewable energy</strong>—designed for dense GPU workloads and strict compliance.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <a href="#why" aria-label="Explore the Hypernext platform" className="inline-flex items-center">
                Explore the platform <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#campuses" aria-label="See Hypernext campuses">See our campuses</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Leaf className="h-4 w-4" style={{ color: BRAND.primary }} />
              <span style={{ color: BRAND.text }}>100% renewable energy</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4" style={{ color: BRAND.primary }} />
              <span style={{ color: BRAND.text }}>Tier IV fault-tolerant design</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4" style={{ color: BRAND.primary }} />
              <span style={{ color: BRAND.text }}>ISO 27001/22301/14001 • SOC 2 (ready)</span>
            </div>
          </div>

          {/* Slim KPI strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-0 border-t border-b" style={{ borderColor: BRAND.line }}>
            {stats.map((s) => (
              <div key={s.label} className="py-4 px-3 flex flex-col">
                <span className="text-base font-semibold" style={{ color: BRAND.text }}>{s.value}</span>
                <span className="text-xs" style={{ color: BRAND.muted }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade} className="lg:col-span-5">
  <div
    className="rounded-lg border overflow-hidden"
    style={{ background: "#fff", borderColor: BRAND.line }}
  >
    <img
      src={datacenterrenewable}
      alt="Responsible data center powered by renewable energy"
      className="w-full h-auto object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fade} className="max-w-2xl">
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Why Hypernext</h2>
          <p className="mt-3" style={{ color: BRAND.muted }}>
            Reliability, density, and clean power without clutter. We build for performance and clarity.
          </p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div key={f.title} {...fade}>
              <div className="flex items-start gap-3">
                {f.icon}
                <div>
                  <div className="text-base font-medium" style={{ color: BRAND.primary }}>{f.title}</div>
                  <div className="text-sm mt-1" style={{ color: BRAND.muted }}>{f.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-20" style={{ background: BRAND.bgLight }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fade} className="max-w-2xl">
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Products & Services</h2>
          <p className="mt-3" style={{ color: BRAND.muted }}>
            Colocation, dedicated AI clusters, GPUaaS, and HyperOne OS.
          </p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card key={p.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">{p.icon}<span className="font-medium" style={{ color: BRAND.primary }}>{p.title}</span></div>
              </CardHeader>
              <CardContent className="text-sm" style={{ color: BRAND.muted }}>
                <p>{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4" style={{ color: BRAND.primary }} /> <span>{b}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HyperOne() {
  return (
    <section id="hyperone" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <motion.div {...fade}>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>HyperOne OS</h2>
          <p className="mt-3" style={{ color: BRAND.muted }}>
            Single control plane for power, cooling, network, compute, and security. Policy, observability, open APIs.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm" style={{ color: BRAND.text }}>
            {[
              "Policy & guardrails",
              "Cluster automation",
              "Energy & cooling",
              "APIs & integrations",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND.primary }} /> {t}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button asChild><a href="#contact" aria-label="Request a HyperOne OS demo">Request a demo</a></Button>
            <Button asChild variant="secondary"><a href="#">Download whitepaper</a></Button>
          </div>
        </motion.div>
        <motion.div {...fade}>
          <div
  className="rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,100,0.15)]"
  style={{ background: "#fff", borderColor: "rgba(0,255,100,0.3)" }}
>
  <div className="text-sm font-medium" style={{ color: "rgba(1, 11, 5, 0.94)" }}>
    Control surfaces
  </div>

  <div className="mt-3 grid grid-cols-2 gap-3">
    {["Status", "Approvals", "Cooling", "Provisioning"].map((k, i) => (
      <div
        key={k}
        className="h-24 rounded border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,255,100,0.3)]"
        style={{
          borderColor: "rgba(0,255,100,0.25)",
          color: "#0b1220",
        }}
      >
        {k}
      </div>
    ))}
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}

function Campuses() {
  return (
    <section id="campuses" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fade} className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Campuses & Regions</h2>
            <p className="mt-3" style={{ color: BRAND.muted }}>CLS proximity, carrier-rich, renewable corridors—sub-5ms at scale.</p>
          </div>
          <Button asChild><a href="#contact" className="hidden md:inline-flex">Request a site visit</a></Button>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {campuses.map((c) => (
            <Card key={c.city}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{c.city}</CardTitle>
                  <span className="text-xs rounded-full px-2 py-1 border" style={{ background: "#fff", color: BRAND.primary, borderColor: BRAND.line }}>{c.badge}</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm" style={{ color: BRAND.muted }}>
                <div className="mb-3 flex items-center gap-2" style={{ color: BRAND.text }}>
                  <Zap className="h-4 w-4" style={{ color: BRAND.primary }} /> {c.mw}
                </div>
                <ul className="space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2"><Check className="h-4 w-4" style={{ color: BRAND.primary }} /> <span>{p}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section id="sustainability" className="py-20" style={{ background: BRAND.bgLight }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fade} className="max-w-3xl">
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Sustainability</h2>
          <p className="mt-3" style={{ color: BRAND.muted }}>
            Our campuses are powered by <strong style={{color: BRAND.primary}}>100% renewable energy</strong> including a 600 MW captive solar plant (Khavda). We practice hourly REC matching, water stewardship, and continuous efficiency improvements.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: Leaf, h: "100% Renewable Energy", p: "24/7 clean supply via PPAs + firming; hourly REC matching." },
            { icon: Zap, h: "High Efficiency", p: "PUE ≤ 1.15 design, hot/cold aisle + liquid-ready bays." },
            { icon: Droplet, h: "Water Stewardship", p: "Adiabatic-free modes, reuse & monitoring for lower WUE." },
          ].map((b) => (
            <div key={b.h} className="flex items-start gap-3">
              <b.icon className="h-5 w-5" style={{ color: BRAND.primary }} />
              <div>
                <div className="text-base font-medium" style={{ color: BRAND.primary }}>{b.h}</div>
                <div className="text-sm mt-1" style={{ color: BRAND.muted }}>{b.p}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance row */}
        <div className="mt-10 grid sm:grid-cols-4 gap-3 text-sm">
          {[
            { label: "ISO 27001", Icon: Shield },
            { label: "ISO 22301", Icon: Shield },
            { label: "ISO 14001", Icon: Shield },
            { label: "SOC 2 (ready)", Icon: Award },
          ].map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-2 rounded border px-3 py-2" style={{ borderColor: BRAND.line, background: "#fff" }}>
              <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
              <span style={{ color: BRAND.text }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section id="customers" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Built for regulated & performance-critical workloads</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customers.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" style={{ color: BRAND.primary }} />{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm" style={{ color: BRAND.muted }}>{c.copy}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="py-20" style={{ background: BRAND.bgLight }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>News & Updates</h2>
          <a href="#" className="text-sm" style={{ color: BRAND.primary }}>View all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Card key={n.title}>
              <CardHeader>
                <CardTitle>{n.title}</CardTitle>
                <div className="text-xs" style={{ color: BRAND.muted }}>{n.date}</div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary"><a href={n.link}>Read more</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Join the builders</h2>
            <p className="mt-3" style={{ color: BRAND.muted }}>Electrical, mechanical, networks, software, security, operations—world-class team pushing sustainable AI infrastructure.</p>
            <div className="mt-6 flex gap-3">
              <Button>Open roles</Button>
              <Button variant="secondary">Early talent</Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Tier IV operations", "AI cluster engineering", "Sustainability & energy", "Program management"].map((k) => (
              <Card key={k}><CardContent className="p-4 text-sm" style={{ color: BRAND.muted }}>{k}</CardContent></Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/****************************
 
 Vendor function 

******************************/



/****************************
 
 contact us function

******************************/


function Contact() {
  return (
    <section id="contact" className="py-20" style={{ background: BRAND.bgLight }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.text }}>Let's build your footprint</h2>
          <p className="mt-3" style={{ color: BRAND.muted }}>Tell us about density targets, latency needs, and sovereignty requirements. Our architects will propose a reference design and power roadmap.</p>
          <div className="mt-6 space-y-3 text-sm" style={{ color: BRAND.text }}>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: BRAND.primary }} /> Hyderabad • Vizag (Visakhapatnam)</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: BRAND.primary }} /> +91 9878423333</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: BRAND.primary }} /> info@hypernxt.com</div>
          </div>
        </div>
        <Card>
          <CardHeader><CardTitle>Request a design session</CardTitle></CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "name", label: "Full name", type: "text" },
                { name: "email", label: "Work email", type: "email" },
                { name: "company", label: "Company", type: "text" },
                { name: "workload", label: "Workload (AI/Fintech/etc.)", type: "text" },
              ].map((f) => (
                <div key={f.name} className="col-span-1">
                  <label className="block text-xs" style={{ color: BRAND.muted }}>{f.label}</label>
                  <input type={f.type} name={f.name} className="w-full rounded-md bg-white border px-3 py-2 text-sm" style={{ color: BRAND.text, borderColor: BRAND.line }} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-xs" style={{ color: BRAND.muted }}>Density & timeline</label>
                <textarea className="w-full rounded-md bg-white border px-3 py-2 text-sm h-24" style={{ color: BRAND.text, borderColor: BRAND.line }} placeholder="e.g., 40MW in 12 months; 70kW/rack; liquid ready" />
              </div>
              <div className="sm:col-span-2"><Button className="w-full">Submit</Button></div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <BrandLogo />
          <p className="mt-3 text-sm" style={{ color: BRAND.muted }}>Building world-class, sustainable, AI-ready data centers across India.</p>
        </div>
        {[
          { h: "Company", l: ["About", "Leadership", "Careers", "News"] },
          { h: "Products", l: ["Colocation", "GPUaaS", "Energy & Edge", "HyperOne OS"] },
          { h: "Legal", l: ["Privacy", "Security", "Terms", "Compliance"] },
        ].map((g) => (
          <div key={g.h}>
            <h4 className="font-semibold mb-3" style={{ color: BRAND.primary }}>{g.h}</h4>
            <ul className="space-y-2 text-sm">
              {g.l.map((x) => (
                <li key={x}><a href="#" className="text-slate-600 hover:text-slate-900">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div> 

        


      <div className="px-6 py-6 text-center text-xs text-slate-500">
        {"\u00A9 "}{new Date().getFullYear()} Hypernext Data Center Limited. All rights reserved.
      </div>
    </footer>
  );
}

/*************************************************
 * PAGE ENTRY
 *************************************************/
export default function HypernextSite() {

  const [portalOpen, setPortalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ color: BRAND.text }}>

      <SmokeTests />

      <Header setPortalOpen={setPortalOpen} />

      <Hero />
      <Why />
      <Products />
      <HyperOne />
      <Campuses />
      <Sustainability />
      <Customers />
      <News />
      <Careers />
      
      <Contact />


{portalOpen && (
  <PortalModal
    onLogin={() => {
      localStorage.setItem("token","logged");
      setPortalOpen(false);
    }}
    onClose={() => setPortalOpen(false)}
  />
)}

      <Footer />

    </div>
  );
}


