
import NextImage from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, BarChart3, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <NextImage 
            src="/images/explore.png"
            alt="CME Duck Official Portrait"
            width={150} 
            height={150} 
            className="mx-auto rounded-full mb-6 border-4 border-accent shadow-lg object-contain"
            data-ai-hint="explorer duck"
          />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-accent">CME Duck</span> & The Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the feathered friend behind the code and discover the values that drive our technological pursuits.
        </p>
      </section>

      <Card className="card-base">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-secondary" />
            Who is CME Duck?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-foreground/80">
          <div className="md:flex md:items-center md:gap-6">
            <NextImage 
              src="/images/eureka.png"
              alt="CME Duck having an idea"
              width={400} 
              height={300}
              className="rounded-md shadow-md mb-4 md:mb-0 float-left mr-6 md:float-none md:mr-0 object-contain"
              data-ai-hint="duck idea" />
              <p className="mt-2">
                Through humorous stories and relatable challenges, CME Duck demystifies technical concepts, making learning an adventure. Whether optimizing performance, hardening security, or implementing new frameworks, CME Duck tackles each task with a can-do attitude and a hearty "Quack!"
              </p>
            </div>
          </CardContent>
      </Card>

      <Card className="card-base">
        <CardHeader>
          <CardTitle className="text-3xl">The CME Portfolio: Enabling Value Streams</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/80">
            The CME Portfolio represents a collection of tools, practices, and philosophies aimed at delivering exceptional value through technology. We focus on key pillars that ensure robust, efficient, and secure digital experiences:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-base p-6 bg-background/50 hover:shadow-accent/20 hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Performance Optimisation</h3>
              <p className="text-sm text-muted-foreground">
                Delivering lightning-fast applications that provide seamless user experiences. We fine-tune every aspect, from front-end rendering to back-end processing.
              </p>
            </div>
            <div className="card-base p-6 bg-background/50 hover:shadow-accent/20 hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Security Hardening</h3>
              <p className="text-sm text-muted-foreground">
                Protecting data and systems with state-of-the-art security measures. We build resilient applications that users can trust.
              </p>
            </div>
            <div className="card-base p-6 bg-background/50 hover:shadow-accent/20 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Efficient Frameworks</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging modern frameworks and best practices to build scalable, maintainable, and innovative solutions rapidly.
              </p>
            </div>
          </div>
          <p className="text-lg text-foreground/80 mt-4">
 We are the enablers for the Value streams, the CME Portfolio, championed by CME Duck, strives to push the boundaries of what's possible in technology, always with a focus on delivering tangible benefits and a touch of fun. (Also the protecting of Sky estate for now and the future...) Brought to you by Quacktastic Solutions ™
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
