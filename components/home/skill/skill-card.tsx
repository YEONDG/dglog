import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  skills: string[];
  color: "blue" | "purple" | "green";
}

export const SkillCard = ({ title, skills, color }: SkillCardProps) => {
  const borderColorClasses = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    green: "border-green-500",
  };

  return (
    <Card className={`overflow-hidden border-t-4 ${borderColorClasses[color]}`}>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
