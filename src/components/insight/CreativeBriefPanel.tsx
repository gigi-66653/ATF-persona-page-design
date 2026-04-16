import { useState } from "react";
import { X, FileText, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CreativeBriefPanelProps {
  open: boolean;
  directionTitle: string;
  onClose: () => void;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
      {children}
    </h3>
    <div className="mt-1.5 h-px bg-primary/20" />
  </div>
);

const SourceLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[11px] italic text-muted-foreground/60">Source: {children}</p>
);

const CreativeBriefPanel = ({ open, directionTitle, onClose }: CreativeBriefPanelProps) => {
  const { toast } = useToast();
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const handleDownload = () => {
    toast({
      title: "Coming Soon",
      description: "Document download will be available in the production version",
    });
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-in-out md:w-[60%] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-border/60 px-6 py-5">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h2 className="text-base font-bold text-foreground">Creative Brief</h2>
                <p className="mt-0.5 font-serif text-sm italic text-foreground/70">"{directionTitle}"</p>
                <p className="mt-1 text-[11px] text-muted-foreground/50">The Cautious First-Timer · {today}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Download bar */}
        <div className="border-b border-border/40 px-6 py-3">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="text-[11px] uppercase tracking-wider" onClick={handleDownload}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> Download Word
            </Button>
            <Button variant="outline" size="sm" className="text-[11px] uppercase tracking-wider" onClick={handleDownload}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> Download PDF
            </Button>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground/40">Demo — downloads not functional</p>
        </div>

        {/* Brief body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* THE INSIGHT */}
          <section>
            <SectionTitle>The Insight</SectionTitle>
            <SourceLabel>Consumer research &amp; social listening</SourceLabel>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
              <p>
                Medical authority is the dominant trust driver for first-time mothers navigating the breast-to-formula transition in DACH — but it's not enough on its own. Mothers consistently seek a second layer of validation from peers before they feel confident in their choice. As one mother put it: <em className="text-foreground/75">"My pediatrician said Aptamil is fine, but I still needed to read what other moms experienced before I felt okay giving it."</em> This dual-trust dynamic — clinical endorsement first, then peer confirmation — plays out most intensely during late-night feeding sessions and the first weeks post-discharge, when anxiety peaks and forums become the go-to source of reassurance: <em className="text-foreground/75">"I trust the science, but the forums are where I go to feel less alone at 3am."</em>
              </p>
              <p>
                The unmet need is clear: there is no trustworthy bridge between clinical recommendation and peer confirmation. Mothers want transition guidance that feels both medically endorsed and emotionally supportive — and no brand currently provides that in a unified way.
              </p>
            </div>
          </section>

          {/* 5C CONTEXT */}
          <section>
            <SectionTitle>5C Context</SectionTitle>
            <SourceLabel>Market &amp; cultural research, competitive analysis, channel data, brand audit</SourceLabel>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
              <p>
                <strong className="text-foreground">Culture:</strong> The DACH region is seeing a rise in "informed motherhood" — mothers expect scientific backing but reject paternalistic messaging. Medical expertise is respected yet increasingly questioned when it conflicts with lived peer experience. "Doctor says X but my baby…" is a recurring narrative pattern across parenting communities.
              </p>
              <p>
                <strong className="text-foreground">Category:</strong> HiPP dominates organic/natural positioning; Nestlé NAN leads clinical/medical messaging. No major brand currently owns the territory between medical authority and peer trust. The category is shifting from pure ingredient-led messaging toward emotional reassurance, opening a whitespace for "science + community" as a unified positioning.
              </p>
              <p>
                <strong className="text-foreground">Connection:</strong> Highest engagement happens on parenting forums (Urbia.de, NetMoms) and Instagram parenting accounts. Long-form personal stories outperform product-led content 4:1, and video testimonials from real mothers drive the highest trust scores. The influence chain runs: pediatricians as trigger → peer mothers as validators → parenting influencers as amplifiers.
              </p>
              <p>
                <strong className="text-foreground">Company:</strong> Aptamil positions itself as the science-led brand with "closest to breast milk" as its core claim. Key assets include Pronutra+ (scientific credibility anchor), 50+ years of breast milk research, and an existing HCP recommendation network. However, the current brand portfolio has no active peer/community-building initiative — the 2025 "Science of Closeness" campaign focused on R&D story with limited community angle.
              </p>
            </div>
          </section>

          {/* THE DIRECTION */}
          <section>
            <SectionTitle>The Direction</SectionTitle>
            <SourceLabel>Strategic analysis across all 5C dimensions</SourceLabel>
            <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">Communication Lead</p>
                <p className="font-medium italic text-foreground/90">"Backed by science. Validated by moms like you."</p>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">Key Scenarios</p>
                <ul className="space-y-1">
                  <li className="flex gap-2 text-foreground/80"><span>•</span>First pediatrician visit after birth — the moment clinical recommendation is given</li>
                  <li className="flex gap-2 text-foreground/80"><span>•</span>Late-night forum browsing during feeding — the moment peer validation is sought</li>
                  <li className="flex gap-2 text-foreground/80"><span>•</span>Formula aisle decision moment — where both trust layers converge</li>
                  <li className="flex gap-2 text-foreground/80"><span>•</span>Post-hospital discharge first week — peak anxiety window</li>
                </ul>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">Tone</p>
                <p className="text-foreground/80">Reassuring, warm-scientific, not preachy. Acknowledge the mother's agency and intelligence. Never dismiss peer experience as inferior to medical advice — position them as complementary.</p>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">Rationale</p>
                <p className="text-foreground/80">This direction leverages the core tension between medical authority and peer validation. No competitor currently occupies this positioning territory. Aptamil has strong existing assets on the clinical side (HCP network, research heritage) but no investment in the peer validation layer — bridging this gap creates a defensible position that neither HiPP (natural/organic) nor NAN (pure clinical) can easily replicate.</p>
              </div>
            </div>
          </section>

          {/* SOURCES — collapsible */}
          <section>
            <SectionTitle>Sources</SectionTitle>
            <button
              onClick={() => setSourcesOpen(!sourcesOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${sourcesOpen ? "rotate-90" : ""}`} />
              Sources (click to expand)
            </button>

            {sourcesOpen && (
              <ul className="mt-4 space-y-2 text-[13px] text-foreground/70">
                <li className="flex gap-2"><span>•</span><span><strong className="text-foreground/80">Consumer:</strong> Page 3 verification dataset; Persona "The Cautious First-Timer"; 42 posts analyzed, 12 high-relevance</span></li>
                <li className="flex gap-2"><span>•</span><span><strong className="text-foreground/80">Culture:</strong> "Digital Parenting in DACH 2025" (Statista); "Trust Dynamics in German Parenting Communities" (ZHAW Zurich); Urbia.de forum analysis (Tavily, Apr 2026)</span></li>
                <li className="flex gap-2"><span>•</span><span><strong className="text-foreground/80">Category:</strong> "Infant Formula Market DACH 2025-2026" (Euromonitor); HiPP, NAN, Holle positioning analysis (Tavily, Apr 2026)</span></li>
                <li className="flex gap-2"><span>•</span><span><strong className="text-foreground/80">Connection:</strong> NetMoms engagement data (Tavily, Apr 2026); Instagram #formulafeeding DACH analysis</span></li>
                <li className="flex gap-2"><span>•</span><span><strong className="text-foreground/80">Company:</strong> Aptamil.de; "Science of Closeness" campaign materials; Danone Annual Report 2025</span></li>
              </ul>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default CreativeBriefPanel;
