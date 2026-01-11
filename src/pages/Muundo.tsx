import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Rocket } from "lucide-react";

const Muundo = () => {
  const week1Topics = [
    "Utangulizi wa HTML na web development",
    "Jinsi browser inavyofanya kazi",
    "HTML document structure",
    "Headings na Paragraphs (h1-h6, p)",
    "Divs na Spans",
    "Links (anchor tags)",
    "Kuweka picha (img tags)",
    "Practical: Tengeneza ukurasa wa kwanza",
  ];

  const week2Topics = [
    "Ordered na Unordered Lists",
    "Tables za HTML",
    "Forms na Input fields",
    "Buttons na selections",
    "Basic layout techniques",
    "Testing na debugging",
    "Hosting na domains",
    "Project: Website yako ONLINE!",
  ];

  const outcomes = [
    "Uelewe structure ya HTML document",
    "Uweze kutengeneza web pages kwa tags zote muhimu",
    "Uweze kuweka picha, links, tables na forms",
    "Uwe na website yako hai (LIVE) kwenye internet",
    "Uwe na msingi mzuri wa kuendelea kujifunza CSS na JavaScript",
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
                Muundo wa Kozi
              </h1>
              <p className="text-lg text-muted-foreground">
                Kozi yetu imepangwa kwa wiki 2 zenye mafunzo ya hatua kwa hatua. 
                Kila wiki ina masomo matatu ya live.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly Breakdown */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Week 1 */}
              <Card>
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      Wiki ya 1
                    </CardTitle>
                    <Badge variant="secondary">Basics</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Utakachojifunza:</h4>
                  <ul className="space-y-3">
                    {week1Topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Week 2 */}
              <Card>
                <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      Wiki ya 2
                    </CardTitle>
                    <Badge variant="outline">Advanced & Project</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Utakachojifunza:</h4>
                  <ul className="space-y-3">
                    {week2Topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Final Outcome */}
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/50 bg-accent/50">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                      <Globe className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Mwisho wa Kozi
                    </h3>
                    <p className="text-muted-foreground">
                      Mwanafunzi atakuwa na website yake ONLINE!
                    </p>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-4">Matokeo ya Kujifunza:</h4>
                  <ul className="space-y-3 mb-6">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Rocket className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Button asChild size="lg">
                      <a
                        href="https://wa.me/255628587749?text=Habari!%20Nataka%20kujiunga%20na%20darasa%20la%20HTML"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Anza Safari Yako - 30,000 TZS
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Muundo;
