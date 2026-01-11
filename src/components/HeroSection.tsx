import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-card via-background to-accent/30">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <Badge variant="secondary" className="inline-flex">
              🌍 Elimu ya Tech kwa Kiswahili
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Jifunze HTML na Tengeneza Website Yako{" "}
              <span className="text-primary">Ndani ya Wiki 2</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Hakuna experience inahitajika – Mafunzo kwa Kiswahili. 
              Anza safari yako ya web development leo!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Wiki 2</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Video className="h-4 w-4 text-primary" />
                <span>Google Meet + WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Nafasi 5 tu</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/masomo">Angalia Masomo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/255628587749?text=Habari!%20Nataka%20kujiunga%20na%20darasa%20la%20HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jiunge na Darasa
                </a>
              </Button>
            </div>

            {/* Price Tag */}
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg p-4 shadow-sm">
              <div>
                <p className="text-sm text-muted-foreground">Ada ya Kozi</p>
                <p className="text-2xl font-bold text-primary">30,000 TZS</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <a
                href="tel:0628587749"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">0628 587 749</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mwanafunzi akijifunza HTML"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-4 shadow-lg border border-border">
              <p className="text-sm font-medium text-foreground">Hakuna Experience!</p>
              <p className="text-xs text-muted-foreground">Anza leo, jifunze kesho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
