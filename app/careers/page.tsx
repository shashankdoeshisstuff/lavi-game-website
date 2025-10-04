import Benefits from "./components/Benefits";
import CareersHero from "./components/CareersHero";
import OpenPositions from "./components/OpenPositions";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <CareersHero />
      <Benefits />
      <OpenPositions />
    </main>
  )
}