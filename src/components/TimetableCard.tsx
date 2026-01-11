import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video } from "lucide-react";

interface TimetableEntry {
  day: string;
  topic: string;
  time: string;
  platform: string;
}

interface TimetableCardProps {
  week: number;
  title: string;
  entries: TimetableEntry[];
}

const TimetableCard = ({ week, title, entries }: TimetableCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Wiki ya {week}
          </CardTitle>
          <Badge variant="secondary">{title}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {entries.map((entry, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <p className="font-medium text-foreground">{entry.day}</p>
                <p className="text-sm text-muted-foreground">{entry.topic}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{entry.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Video className="h-4 w-4" />
                  <span>{entry.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimetableCard;
