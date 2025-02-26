import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SkillCard = ({ title, skills, color }) => {
  const borderColorClasses = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    green: 'border-green-500',
  };

  return (
    <Card className={`overflow-hidden border-t-4 ${borderColorClasses[color]}`}>
      <CardContent className='p-6'>
        <h3 className='text-xl font-bold mb-4'>{title}</h3>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <Badge key={skill} variant='secondary' className='py-1'>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
