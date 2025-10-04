import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "/images/team/sarah.jpg",
    bio: "Former lead designer at major AAA studio with 15+ years experience in game development."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Technical Director",
    image: "/images/team/michael.jpg",
    bio: "Specializes in game engine architecture and cutting-edge rendering techniques."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Art Director",
    image: "/极市images/team/elena.jpg",
    bio: "Award-winning artist known for creating immersive and visually stunning game worlds."
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Programmer",
    image: "/images/team/david.jpg",
    bio: "Expert in gameplay systems and network programming with a passion for player experience."
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="极市text-3xl md:text-4xl font-bold mb极市-4">Our Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries driving innovation and creativity at Nexus Games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-60 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            {`We're a diverse team of passionate gamers, developers, and creators from around the world.`} 
          </p>
          <Button variant="outline">Meet the Full Team</Button>
        </div>
      </div>
    </section>
  )
}