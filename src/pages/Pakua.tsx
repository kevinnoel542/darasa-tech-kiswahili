import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadCard from "@/components/DownloadCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Code, FileCheck } from "lucide-react";

const Pakua = () => {
  const lessonNotes = [
    { title: "Somo 1: HTML ni nini?", description: "Utangulizi wa HTML - notes", type: "pdf" as const, filename: "somo-1-html-intro.pdf" },
    { title: "Somo 2: Basic Tags", description: "Tags muhimu za HTML", type: "pdf" as const, filename: "somo-2-basic-tags.pdf" },
    { title: "Somo 3: Links & Images", description: "Picha na viungo", type: "pdf" as const, filename: "somo-3-links-images.pdf" },
    { title: "Somo 4: Lists & Tables", description: "Orodha na majedwali", type: "pdf" as const, filename: "somo-4-lists-tables.pdf" },
    { title: "Somo 5: Forms", description: "Fomu za HTML", type: "pdf" as const, filename: "somo-5-forms.pdf" },
    { title: "Somo 6: Mini Project", description: "Muongozo wa project", type: "pdf" as const, filename: "somo-6-mini-project.pdf" },
  ];

  const codeExamples = [
    { title: "Mfano: HTML Basic", description: "Structure ya msingi ya HTML", type: "code" as const, filename: "basic-html.html" },
    { title: "Mfano: Headings na Paragraphs", description: "Matumizi ya h1-h6 na p", type: "code" as const, filename: "headings-paragraphs.html" },
    { title: "Mfano: Links na Images", description: "Kuweka picha na viungo", type: "code" as const, filename: "links-images.html" },
    { title: "Mfano: Lists", description: "Orodha za ordered na unordered", type: "code" as const, filename: "lists.html" },
    { title: "Mfano: Tables", description: "Kutengeneza majedwali", type: "code" as const, filename: "tables.html" },
    { title: "Mfano: Contact Form", description: "Form ya kuwasiliana", type: "code" as const, filename: "contact-form.html" },
  ];

  const assignments = [
    { title: "Zoezi 1: My First Page", description: "Tengeneza ukurasa wako wa kwanza", type: "assignment" as const, filename: "zoezi-1.pdf" },
    { title: "Zoezi 2: About Me Page", description: "Ukurasa wa kujitambulisha", type: "assignment" as const, filename: "zoezi-2.pdf" },
    { title: "Zoezi 3: Photo Gallery", description: "Tengeneza gallery ya picha", type: "assignment" as const, filename: "zoezi-3.pdf" },
    { title: "Zoezi 4: Product List", description: "Orodha ya bidhaa na majedwali", type: "assignment" as const, filename: "zoezi-4.pdf" },
    { title: "Zoezi 5: Contact Form", description: "Form ya mawasiliano", type: "assignment" as const, filename: "zoezi-5.pdf" },
    { title: "Zoezi la Mwisho: Portfolio", description: "Website yako kamili", type: "assignment" as const, filename: "zoezi-final.pdf" },
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
                Pakua Nyaraka
              </h1>
              <p className="text-lg text-muted-foreground">
                Pakua notes za masomo, mifano ya code, na mazoezi yako hapa. Faili zote zinapatikana baada ya kujiandikisha.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads Tabs */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="notes" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="notes" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Pakua Somo</span>
                  <span className="sm:hidden">Notes</span>
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">Mfano wa Code</span>
                  <span className="sm:hidden">Code</span>
                </TabsTrigger>
                <TabsTrigger value="assignments" className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Mazoezi</span>
                  <span className="sm:hidden">Zoezi</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="notes" className="space-y-4">
                {lessonNotes.map((item, index) => (
                  <DownloadCard key={index} {...item} />
                ))}
              </TabsContent>
              
              <TabsContent value="code" className="space-y-4">
                {codeExamples.map((item, index) => (
                  <DownloadCard key={index} {...item} />
                ))}
              </TabsContent>
              
              <TabsContent value="assignments" className="space-y-4">
                {assignments.map((item, index) => (
                  <DownloadCard key={index} {...item} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pakua;
