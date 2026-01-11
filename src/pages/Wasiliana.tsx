import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Clock, MapPin, Users } from "lucide-react";

const Wasiliana = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-card via-background to-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Wasiliana Nasi
              </h1>
              <p className="text-lg text-muted-foreground">
                Tuko tayari kusaidia! Wasiliana nasi kwa maswali yoyote kuhusu kozi yetu au mchakato wa kujiandikisha.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {/* WhatsApp */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mx-auto mb-2">
                    <MessageCircle className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Njia rahisi na ya haraka kupata msaada. Jibu la papo hapo!
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href="https://wa.me/255628587749?text=Habari!%20Nataka%20kujiunga%20na%20darasa%20la%20HTML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ongea na Mwalimu
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mx-auto mb-2">
                    <Phone className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">Simu</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Piga simu moja kwa moja kwa mazungumzo ya kina.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:0628587749">
                      0628 587 749
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mx-auto mb-2">
                    <Mail className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Tuma email yako na tutakujibu haraka iwezekanavyo.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:info@cameldarasa.co.tz">
                      Tuma Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Instructor Section */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle>Kuhusu Mwalimu Wako</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent text-2xl font-bold mb-4">
                      👨‍🏫
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Mwalimu wa camelDarasa</h3>
                    <p className="text-muted-foreground">Web Developer & Educator</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Saa za Kazi</p>
                      <p className="text-xs text-muted-foreground">8:00 - 20:00</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Mahali</p>
                      <p className="text-xs text-muted-foreground">Tanzania (Online)</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Wanafunzi</p>
                      <p className="text-xs text-muted-foreground">Max 5 kwa kozi</p>
                    </div>
                  </div>
                  
                  <div className="bg-accent rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Ahadi yetu:</strong> Support mpaka mwanafunzi aelewe! 
                      Tunakuwepo kila wakati kupitia WhatsApp na Google Meet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Quick */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Maswali ya Kawaida
              </h2>
              <div className="space-y-6 text-left">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">Je, ninahitaji computer?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ndiyo, unahitaji computer (laptop au desktop) na internet. Simu haifai kwa coding.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">Je, naweza kulipa kwa installment?</h4>
                  <p className="text-sm text-muted-foreground">
                    Wasiliana nasi kupitia WhatsApp kujadili mpango wa malipo.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">Je, nitapata cheti?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ndiyo! Utapata cheti cha kumaliza kozi baada ya kutengeneza project yako.
                  </p>
                </div>
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

export default Wasiliana;
