import { Badge } from "@/components/ui/badge";

export function AboutIntro({description}: { description: string }) {
  return (
    <div>
      <Badge variant="secondary" className="mb-4 uppercase text-primary">
        BENEFITS
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        Why you Need this Service
      </h2>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}