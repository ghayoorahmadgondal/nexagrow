"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites designed to turn visitors into customers.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Smart digital strategies that help your business reach the right audience.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Brand Strategy",
    description:
      "Clear and memorable branding that gives your business a strong identity.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Business Growth",
    description:
      "Practical solutions focused on improving your online presence and results.",
    icon: "＋",
  },
];

const testimonials = [
  {
    quote:
      "NexaGrow completely transformed our online presence. We started receiving better-quality enquiries within weeks.",
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
  },
  {
    quote:
      "The team understood our business and created a website that actually represents our brand.",
    name: "Daniel Carter",
    role: "Owner, Carter & Co.",
  },
  {
    quote:
      "Professional, creative, and easy to work with. The final result was better than we expected.",
    name: "Emily Johnson",
    role: "Director, Elevate Living",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#17201b]">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f7f6f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="text-2xl font-black tracking-tight">
            Nexa<span className="text-[#e86d3f]">Grow</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium transition hover:text-[#e86d3f]"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium transition hover:text-[#e86d3f]"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition hover:text-[#e86d3f]"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium transition hover:text-[#e86d3f]"
            >
              Reviews
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#17201b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e86d3f] md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-black/5 bg-[#f7f6f2] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Reviews
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e86d3f]/20 bg-[#e86d3f]/5 px-4 py-2 text-sm font-semibold text-[#d95e32]">
              <span className="h-2 w-2 rounded-full bg-[#e86d3f]" />
              Helping businesses grow
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn your ideas into{" "}
              <span className="text-[#e86d3f]">real growth.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#53605a]">
              We help ambitious businesses build a stronger brand, improve
              their digital presence, and create experiences their customers
              remember.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#17201b] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#e86d3f]"
              >
                Start a Project →
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#17201b]/20 px-7 py-4 text-center font-semibold transition hover:border-[#e86d3f] hover:text-[#e86d3f]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-black/10 pt-7">
              <div>
                <p className="text-3xl font-black">120+</p>
                <p className="text-sm text-[#68736d]">Projects delivered</p>
              </div>
              <div>
                <p className="text-3xl font-black">98%</p>
                <p className="text-sm text-[#68736d]">Happy clients</p>
              </div>
              <div>
                <p className="text-3xl font-black">8+</p>
                <p className="text-sm text-[#68736d]">Years experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#e86d3f]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#17201b] p-4 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#26332c] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/60">
                    Growth Overview
                  </span>
                  <span className="rounded-full bg-[#e86d3f]/15 px-3 py-1 text-xs font-semibold text-[#ff9b76]">
                    +32.8%
                  </span>
                </div>

                <div className="mt-10 flex h-56 items-end gap-3">
                  {[35, 48, 42, 65, 58, 78, 92].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-[#e86d3f]/70 transition hover:bg-[#e86d3f]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-6 flex justify-between text-xs text-white/40">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e86d3f]">
              What we do
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need to move forward.
            </h2>
            <p className="mt-5 leading-7 text-[#66716b]">
              From your first idea to your next big milestone, we create
              digital solutions designed around your business goals.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-black/10 bg-[#f7f6f2] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#e86d3f]/30 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#e86d3f]">
                    {service.number}
                  </span>
                  <span className="text-2xl transition group-hover:scale-125">
                    {service.icon}
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-bold">{service.title}</h3>

                <p className="mt-4 text-sm leading-6 text-[#66716b]">
                  {service.description}
                </p>

                <div className="mt-7 text-sm font-bold text-[#17201b] group-hover:text-[#e86d3f]">
                  Learn more →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#17201b] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9b76]">
              Why NexaGrow
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Small team. Big ideas. Real results.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/65">
              We believe good digital work should do more than look beautiful.
              It should solve problems, communicate clearly, and help your
              business grow.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-black text-[#ff9b76]">01</p>
                <h3 className="mt-3 font-bold">Strategy first</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Every project starts by understanding your goals and
                  customers.
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-[#ff9b76]">02</p>
                <h3 className="mt-3 font-bold">Built for people</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  We create simple experiences that customers enjoy using.
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-[#ff9b76]">03</p>
                <h3 className="mt-3 font-bold">Results focused</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Our work is designed around measurable business outcomes.
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-[#ff9b76]">04</p>
                <h3 className="mt-3 font-bold">Long-term partner</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  We stay available as your business continues to evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f7f6f2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e86d3f]">
              Our process
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              From idea to launch.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Discover", "We learn about your business, audience, and goals."],
              ["02", "Create", "We design and build a solution tailored to your needs."],
              ["03", "Grow", "We launch, measure, improve, and help you scale."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative">
                <span className="text-6xl font-black text-black/5">
                  {number}
                </span>
                <h3 className="mt-[-20px] text-2xl font-bold">{title}</h3>
                <p className="mt-3 max-w-sm leading-7 text-[#66716b]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e86d3f]">
                Client stories
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                What our clients say.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#66716b]">
              We build relationships alongside websites, brands, and digital
              experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl border border-black/10 bg-[#f7f6f2] p-7"
              >
                <div className="text-xl tracking-widest text-[#e86d3f]">
                  ★★★★★
                </div>

                <p className="mt-7 leading-7 text-[#46524c]">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#77817c]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e86d3f]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s build something your customers remember.
            </h2>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-white px-7 py-4 text-center font-bold text-[#17201b] transition hover:-translate-y-1"
          >
            Start a Conversation →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#17201b] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9b76]">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/60">
              Tell us a little about your business and what you want to build.
              We&apos;ll get back to you to discuss the next steps.
            </p>

            <div className="mt-10 space-y-5 text-sm text-white/70">
              <p>✉ hello@nexagrow.com</p>
              <p>☎ +1 (555) 123-4567</p>
              <p>⌖ New York, United States</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-7 text-[#17201b] shadow-2xl sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#e86d3f]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#e86d3f]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                What do you need?
              </label>
              <select className="w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none focus:border-[#e86d3f]">
                <option>Website Design</option>
                <option>Digital Marketing</option>
                <option>Brand Strategy</option>
                <option>Business Growth</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Tell us about your project
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what you want to build..."
                className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#e86d3f]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#17201b] px-6 py-4 font-bold text-white transition hover:bg-[#e86d3f]"
            >
              {submitted ? "Message Sent ✓" : "Send Message →"}
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-green-600">
                Thanks! Your message has been received.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101612] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-lg font-black">
            Nexa<span className="text-[#e86d3f]">Grow</span>
          </p>

          <p className="text-sm text-white/40">
            © 2026 NexaGrow. Built for business growth.
          </p>

          <div className="flex gap-5 text-sm text-white/50">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}