export type ProjectStatus = 'ACTIVE' | 'EXPERIMENTAL' | 'IN DEVELOPMENT' | 'ARCHIVED / EXPERIMENTAL'

export interface Project {
  index: string
  title: string
  description: string
  technologies: string[]
  status: ProjectStatus
  featured?: boolean
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Spatial AI NPC',
    description: 'A multimodal AI NPC system exploring perception, speech, behavior, memory and long-term human-AI interaction.',
    technologies: ['Python', 'Computer Vision', 'STT', 'TTS', 'LLM', 'Unity', 'Memory System'],
    status: 'ACTIVE',
    featured: true,
  },
  {
    index: '02',
    title: 'MiniLLM-Serve',
    description: 'A lightweight local LLM inference and serving project focused on understanding model deployment, inference pipelines and performance.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Qwen'],
    status: 'EXPERIMENTAL',
  },
  {
    index: '03',
    title: 'AI Study System',
    description: 'An experimental intelligent learning system designed to explore AI-assisted university learning.',
    technologies: ['AI', 'Knowledge System', 'Learning Tools'],
    status: 'IN DEVELOPMENT',
  },
  {
    index: '04',
    title: 'YuanXiangLu',
    description: 'An experimental 2D action game project exploring interactive systems and game development.',
    technologies: ['Unity', 'C#'],
    status: 'ARCHIVED / EXPERIMENTAL',
  },
]
