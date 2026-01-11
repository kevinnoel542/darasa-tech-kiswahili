import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="text-center hover:shadow-md transition-all duration-300 hover:border-primary/50">
      <CardContent className="pt-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4">
          <Icon className="h-7 w-7 text-accent-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
