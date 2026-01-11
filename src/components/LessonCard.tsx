import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Lock, Eye, Download } from "lucide-react";

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  duration: string;
  status: "free" | "locked" | "downloadable";
}

const LessonCard = ({ number, title, description, duration, status }: LessonCardProps) => {
  const statusConfig = {
    free: { label: "Bure", icon: Eye, variant: "default" as const },
    locked: { label: "Imefungwa", icon: Lock, variant: "secondary" as const },
    downloadable: { label: "Pakua", icon: Download, variant: "outline" as const },
  };

  const { label, icon: Icon, variant } = statusConfig[status];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
              {number}
            </span>
            <div>
              <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
          </div>
          <Badge variant={variant} className="flex items-center gap-1">
            <Icon className="h-3 w-3" />
            {label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-3">
          {description}
        </CardDescription>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
