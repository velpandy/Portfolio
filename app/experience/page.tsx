import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    period: "Summer 2024",
    location: "Mountain View, CA",
    tags: ["Full Stack", "Cloud Infrastructure", "Machine Learning"],
    description: [
      {
        situation: "Joined the Cloud AI team working on improving model deployment infrastructure.",
        task: "Tasked with optimizing the model serving pipeline to reduce latency and resource usage.",
        action: "Developed a caching layer using Redis and implemented intelligent batch processing for inference requests.",
        result: "Reduced average model serving latency by 40% and decreased cloud costs by 25% for the service."
      }
    ]
  },
  {
    title: "Research Assistant",
    company: "Stanford AI Lab",
    period: "Jan 2023 - Present",
    location: "Stanford, CA",
    tags: ["Deep Learning", "Computer Vision", "PyTorch"],
    description: [
      {
        situation: "Working on computer vision research for autonomous systems.",
        task: "Develop and implement novel deep learning architectures for real-time object detection.",
        action: "Created a lightweight neural network architecture and optimized it for edge devices.",
        result: "Published research paper at CVPR 2024 and achieved 2x faster inference with 95% accuracy retention."
      }
    ]
  },
  {
    title: "Open Source Contributor",
    company: "React Core Team",
    period: "2023 - Present",
    location: "Remote",
    tags: ["React", "JavaScript", "TypeScript", "Documentation"],
    description: [
      {
        situation: "Identified gaps in React documentation and component performance.",
        task: "Improve documentation and implement performance optimizations for React core components.",
        action: "Contributed detailed guides, fixed bugs, and implemented performance improvements.",
        result: "Merged 15+ pull requests, improved documentation coverage, and received React contributor badge."
      }
    ]
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16 fade-in">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.title + exp.company}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {exp.company}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{exp.period}</div>
                  <div className="text-sm text-muted-foreground">{exp.location}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              {exp.description.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="grid gap-2">
                    <div>
                      <span className="font-semibold">Situation: </span>
                      <span className="text-muted-foreground">{item.situation}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Task: </span>
                      <span className="text-muted-foreground">{item.task}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Action: </span>
                      <span className="text-muted-foreground">{item.action}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Result: </span>
                      <span className="text-muted-foreground">{item.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}