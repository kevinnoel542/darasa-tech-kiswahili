import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import LessonCard from "@/components/LessonCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Video,
  Users,
  Download,
  Trophy,
  Headphones,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Mafunzo kwa Kiswahili",
      description: "Maelezo yote kwa Kiswahili rahisi kueleweka",
    },
    {
      icon: Video,
      title: "Google Meet Live",
      description: "Darasa la moja kwa moja na mwalimu",
    },
    {
      icon: Users,
      title: "Darasa Dogo",
      description: "Wanafunzi 5 tu kwa kila kozi",
    },
    {
      icon: Download,
      title: "Nyaraka za Kupakua",
      description: "PDF, HTML na mazoezi ya kujifunzia",
    },
    {
      icon: Trophy,
      title: "Website Yako",
      description: "Tengeneza na weka website yako ONLINE",
    },
    {
      icon: Headphones,
      title: "Msaada wa Mwalimu",
      description: "Support mpaka mwanafunzi aelewe",
    },
  ];

  const previewLessons = [
    {
      number: 1,
      title: "HTML ni nini?",
      description: "Utangulizi wa HTML na historia yake. Tutajifunza basics za web development.",
      duration: "Dakika 45",
      status: "free" as const,
    },
    {
      number: 2,
      title: "Basic Tags",
      description: "Jifunze tags muhimu kama heading, paragraph, div, span na nyinginezo.",
      duration: "Dakika 60",
      status: "locked" as const,
    },
    {
      number: 3,
      title: "Links & Images",
      description: "Jinsi ya kuweka picha na links kwenye website yako.",
      duration: "Dakika 50",
      status: "locked" as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Kwa Nini camelDarasa?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tunakupa mafunzo bora ya HTML kwa Kiswahili na msaada wa mwalimu kila wakati.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Preview Lessons Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Masomo Yetu
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kozi yetu ina masomo 6 yaliyopangwa vizuri. Angalia masomo yetu hapa chini.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {previewLessons.map((lesson) => (
                <LessonCard key={lesson.number} {...lesson} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/masomo">Angalia Masomo Yote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Anza Safari Yako ya Web Development Leo!
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Jifunze, Tengeneza, Weka Online. Hakuna experience – Anza leo na uwe web developer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/255628587749?text=Habari!%20Nataka%20kujiunga%20na%20darasa%20la%20HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jiunge na Darasa - 30,000 TZS
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/wasiliana">Wasiliana Nasi</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
