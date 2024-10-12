import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, BarChart, Users, Lock } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed and performance.',
    icon: Zap,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics tools.',
    icon: BarChart,
  },
  {
    title: 'Team Collaboration',
    description: 'Seamlessly work together with your team members.',
    icon: Users,
  },
  {
    title: 'Enterprise-grade Security',
    description: 'Your data is protected with state-of-the-art security measures.',
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}