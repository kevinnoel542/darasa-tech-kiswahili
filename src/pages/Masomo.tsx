import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LessonCard from "@/components/LessonCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Masomo = () => {
  const lessons = [
    {
      number: 1,
      title: "HTML ni nini?",
      description: "Utangulizi wa HTML na historia yake. Tutajifunza basics za web development na jinsi HTML inavyofanya kazi.",
      duration: "Dakika 45",
      status: "free" as const,
    },
    {
      number: 2,
      title: "Basic Tags",
      description: "Jifunze tags muhimu kama heading (h1-h6), paragraph (p), div, span na structure ya HTML document.",
      duration: "Dakika 60",
      status: "locked" as const,
    },
    {
      number: 3,
      title: "Links & Images",
      description: "Jinsi ya kuweka picha (img) na links (a) kwenye website yako. Tutajifunza attributes muhimu.",
      duration: "Dakika 50",
      status: "locked" as const,
    },
    {
      number: 4,
      title: "Lists & Tables",
      description: "Tengeneza orodha (ul, ol, li) na tables kwa kuonyesha data kwa mpangilio mzuri.",
      duration: "Dakika 55",
      status: "locked" as const,
    },
    {
      number: 5,
      title: "Forms",
      description: "Jifunze kutengeneza forms za kuchukua taarifa kutoka kwa watumiaji - input, button, select na zaidi.",
      duration: "Dakika 60",
      status: "locked" as const,
    },
    {
      number: 6,
      title: "Mini Project",
      description: "Tengeneza website yako kamili kwa kutumia maarifa yote uliyojifunza. Website yako itakuwa ONLINE!",
      duration: "Dakika 90",
      status: "downloadable" as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-card via-background to-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Masomo ya HTML
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Kozi yetu ina masomo 6 yaliyopangwa kwa hatua kwa hatua. Kila somo linajengwa juu ya lile lililopita.
              </p>
              <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg p-4 shadow-sm">
                <div>
                  <p className="text-sm text-muted-foreground">Jumla ya Masomo</p>
                  <p className="text-2xl font-bold text-primary">6</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-sm text-muted-foreground">Muda wa Kozi</p>
                  <p className="text-2xl font-bold text-foreground">Wiki 2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.number} {...lesson} />
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-accent rounded-xl p-6 max-w-xl mx-auto">
                <h3 className="font-semibold text-foreground mb-2">
                  Tayari kuanza kujifunza?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Jiunge na darasa letu na upate access kwa masomo yote. Ada ni 30,000 TZS tu!
                </p>
                <Button asChild size="lg">
                  <a
                    href="https://wa.me/255628587749?text=Habari!%20Nataka%20kujiunga%20na%20darasa%20la%20HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jiunge Sasa
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Masomo;
