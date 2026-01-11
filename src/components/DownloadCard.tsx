import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, FileCheck, Download } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  type: "pdf" | "code" | "assignment";
  filename: string;
}

const DownloadCard = ({ title, description, type, filename }: DownloadCardProps) => {
  const typeConfig = {
    pdf: { icon: FileText, label: "PDF", color: "text-destructive" },
    code: { icon: Code, label: "HTML", color: "text-primary" },
    assignment: { icon: FileCheck, label: "Zoezi", color: "text-chart-3" },
  };

  const { icon: Icon, label, color } = typeConfig[type];

  const handleDownload = () => {
    // In production, this would link to actual files
    alert(`Pakua: ${filename} - Faili itapatikana baada ya kujiandikisha!`);
  };

  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg bg-muted ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground truncate">{title}</h4>
            <p className="text-sm text-muted-foreground truncate">{description}</p>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-1" />
            Pakua
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
