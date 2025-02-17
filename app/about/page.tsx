import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  "DevOps": ["AWS", "Docker", "Git", "CI/CD", "Linux"],
  "Tools": ["VS Code", "Figma", "Postman", "Jest", "GitHub"]
}

export default function About() {
  return (
    <div className="container mx-auto px-36 py-16 fade-in">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I'm a pre-final year Computer Science student at KCT with a 
              passion for building innovative web applications. My journey in 
              software development began when I created my first website at my first year of College, 
              and since then, I've been constantly learning and growing in this 
              field.
            </p>
            <p>
              During my academic career, I've maintained a 8.3 GPA while actively 
              participating in hackathons, learning coding from leetcode, 
              and completing multiple projects.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>First Place - Stanford Hackathon 2023</li>
              <li>President of Stanford Coding Club (2022-2023)</li>
              <li>Published research paper on ML optimization techniques</li>
              <li>Dean's List - All semesters</li>
              <li>Open Source Contributor - React ecosystem</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}