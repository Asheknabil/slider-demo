// app/page.tsx  — Example usage of ImageComparisonSlider
// ─────────────────────────────────────────────────────────
// Drop ImageComparisonSlider.tsx into your components folder
// and import it here.

import ImageComparisonSlider from "@/components/ImageComparisonSlider";

export default function Home() {
  return (
    <main className="bg-[#0d0b08] min-h-screen">

      {/* ── Hero Comparison ── */}
      <ImageComparisonSlider
        leftImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90"
        rightImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90"
        leftAlt="Before"
        rightAlt="After"
        height="100vh"
        initialPosition={48}
        leftOverlay={{
          eyebrow: "The original",
          heading: "Untouched\nWilderness",
          description:
            "Raw and unfiltered — the landscape as nature intended, before the hand of light began its work.",
          buttonLabel: "Explore Series",
          buttonHref: "#",
        }}
        rightOverlay={{
          eyebrow: "The edit",
          heading: "Golden Hour\nTransformed",
          description:
            "A single moment suspended in amber. Every shadow sculpted, every highlight burnished to perfection.",
          buttonLabel: "View Portfolio",
          buttonHref: "#",
        }}
      />

      {/* ── Second comparison — shorter height ── */}
      <section className="py-2">
        <ImageComparisonSlider
          leftImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600&q=90"
          rightImage="https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1600&q=90"
          leftAlt="Day"
          rightAlt="Night"
          height="70vh"
          initialPosition={55}
          leftOverlay={{
            eyebrow: "Daylight study",
            heading: "Clarity\nof Dawn",
            description: "Morning light pours across the facade, revealing every texture in crystalline detail.",
          }}
          rightOverlay={{
            eyebrow: "Nocturne",
            heading: "City After\nMidnight",
            description: "The city breathes differently at night — shadow and neon rewrite every familiar surface.",
            buttonLabel: "Night Series",
            buttonHref: "#",
          }}
        />
      </section>

    </main>
  );
}