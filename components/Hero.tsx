import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Streamline Your Business with SaaSify
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Boost productivity, simplify workflows, and scale your operations with our all-in-one SaaS solution.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}