import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimetableCard from "@/components/TimetableCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Video, MessageCircle } from "lucide-react";

const Ratiba = () => {
  const week1 = {
    week: 1,
    title: "Basics za HTML",
    entries: [
      { day: "Jumatatu", topic: "Utangulizi wa HTML - HTML ni nini?", time: "18:00 - 19:00", platform: "Google Meet" },
      { day: "Jumatano", topic: "HTML Tags za Msingi - Headings, Paragraphs", time: "18:00 - 19:00", platform: "Google Meet" },
      { day: "Ijumaa", topic: "Links & Images - Practical Session", time: "18:00 - 19:00", platform: "Google Meet" },
    ],
  };

  const week2 = {
    week: 2,
    title: "Advanced & Project",
    entries: [
      { day: "Jumatatu", topic: "Lists & Tables - Organizing Data", time: "18:00 - 19:00", platform: "Google Meet" },
      { day: "Jumatano", topic: "HTML Forms - User Input", time: "18:00 - 19:00", platform: "Google Meet" },
      { day: "Ijumaa", topic: "Mini Project - Website Yako ONLINE!", time: "18:00 - 20:00", platform: "Google Meet" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-card via-background to-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ratiba ya Masomo
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Masomo yanaendeshwa mara 3 kwa wiki kwa wiki 2. Kila somo linachukua saa 1 (somo la mwisho saa 2).
              </p>
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Muda</p>
                      <p className="font-medium text-foreground">Wiki 2</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Muda wa Somo</p>
                      <p className="font-medium text-foreground">Saa 1</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Video className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Platform</p>
                      <p className="font-medium text-foreground">Google Meet</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Support</p>
                      <p className="font-medium text-foreground">WhatsApp</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timetable */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TimetableCard {...week1} />
              <TimetableCard {...week2} />
            </div>
            
            {/* Note */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-accent rounded-lg p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">📌 Muhimu!</h4>
                <p className="text-sm text-muted-foreground">
                  Masomo yanarekodiwa na unaweza kuyaangalia tena. Pia utapata support kwa WhatsApp 
                  siku zote za wiki kwa maswali yoyote!
                </p>
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

export default Ratiba;
