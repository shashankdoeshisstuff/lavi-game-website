import { Badge } from "@/components/ui/badge";

export function AboutIntro() {
  return (
    <div>
      <Badge variant="secondary" className="mb-4 uppercase text-primary">WHO WE ARE</Badge>
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        About our Company
      </h2>
      <p className="text-gray-400 leading-relaxed">
        Let’s get acquainted! We’re not your average IT Services Company - We
        work with a team of an{" "}
        <span className="text-yellow-400">experienced software engineers</span>{" "}
        who have worked for over 7+ years in the corporate field. We ensure
        full customer satisfaction by providing enterprise level products and
        best in class support to our clients.
      </p>
    </div>
  );
}