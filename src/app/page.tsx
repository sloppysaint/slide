import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { CheckCircle } from "lucide-react"; // Make sure lucide-react is installed

const plans = [
  {
    name: "Basic",
    description: "Ideal for getting started",
    price: "$10",
    features: [
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    description: "For serious businesses",
    price: "$25",
    features: [
      "Everything in Basic",
      "Unlimited automation rules",
      "Dedicated account manager",
    ],
    cta: "Upgrade Now",
  },
  // Add more plans as needed
];

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background"> {/* bg-background adapts to light/dark mode */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Choose Your Plan</h2>
          <p className="max-w-[900px] text-muted-foreground"> {/* Text color adapts to light/dark mode */}
            Select the perfect plan to boost your Instagram engagement
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"> {/* Responsive grid */}
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col justify-between"> {/* Card from shadcn/ui */}
              <CardHeader>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="me-2 h-4 w-4 text-primary" /> {/* Icon with theme color */}
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.cta}</Button> {/* Button from your components */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
