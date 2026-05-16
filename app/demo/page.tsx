// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Full example usage page for ScrollRevealSlider.
// Place ScrollRevealSlider.tsx in components/ScrollRevealSlider.tsx
// and ensure gsap is installed: npm install gsap
// ─────────────────────────────────────────────────────────────────────────────

import ScrollRevealSlider from "@/components/Scrollrevealslider";

 

export default function Home() {
  return (
    <main style={{ background: "#07060400" }}>

      {/* ── Hero section above the slider ── */}
      {/* <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0906",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(201,169,110,0.7)",
            marginBottom: 24,
          }}
        >
          Scroll to reveal
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 400,
            color: "#f4ede2",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
            marginBottom: 32,
          }}
        >
          The Art of<br />
          <em>Transformation</em>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            color: "rgba(244,237,226,0.55)",
            maxWidth: "42ch",
            lineHeight: 1.7,
          }}
        >
          Scroll down to experience the cinematic before-and-after reveal.
          Every pixel crafted. Every frame intentional.
        </p>
        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.5,
          }}
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <rect x="1" y="1" width="16" height="26" rx="8" stroke="#c9a96e" strokeWidth="1.2" />
            <rect x="7.5" y="5" width="3" height="6" rx="1.5" fill="#c9a96e" />
          </svg>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 8,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            scroll
          </p>
        </div>
      </section> */}

      {/* ── Scroll Reveal Slider ── */}
      <ScrollRevealSlider
        leftImage="/clear.png"
        rightImage="/not-clear.png"
        leftAlt="Untouched"
        rightAlt="Transformed"
        scrollHeight="350vh"
        componentHeight="100vh"
        leftOverlay={{
          eyebrow: "The original",
          heading: "Untouched\nWilderness",
          subheading: "as nature intended",
          description:
            "Raw, unfiltered light falls across ridgelines that have never known a human hand. This is the world before.",
          buttonLabel: "View Original",
          buttonHref: "#",
        }}
        rightOverlay={{
          eyebrow: "The edit",
          heading: "Golden Hour\nReborn",
          subheading: "sculpted by light",
          description:
            "Every shadow deepened. Every highlight pulled to its limit. The landscape as it was always meant to be seen.",
          buttonLabel: "Explore Series",
          buttonHref: "#",
        }}
      />

      {/* ── Second comparison ── */}
      {/* <ScrollRevealSlider
        leftImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600&q=90"
        rightImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=90"
        leftAlt="Midday"
        rightAlt="Twilight"
        scrollHeight="300vh"
        componentHeight="100vh"
        leftOverlay={{
          eyebrow: "Midday study",
          heading: "Clarity\nof Noon",
          description:
            "Hard light carves every surface with surgical precision. Nothing hidden. Everything exposed.",
        }}
        rightOverlay={{
          eyebrow: "Blue hour",
          heading: "Twilight\nTransience",
          description:
            "That fragile window between day and night — when the sky still holds warmth but shadow has already won.",
          buttonLabel: "Night Series",
          buttonHref: "#",
        }}
      /> */}

      {/* ── Section after the sliders ── */}
      {/* <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0906",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(201,169,110,0.6)",
              marginBottom: 20,
            }}
          >
            — End of sequence —
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 400,
              color: "#f4ede2",
              letterSpacing: "-0.015em",
            }}
          >
            The reveal is complete.
          </h2>
        </div>
      </section> */}

    </main>
  );
}