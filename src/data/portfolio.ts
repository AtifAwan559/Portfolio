/**
 * Portfolio Data
 * Centralized configuration for portfolio content
 */

export const portfolioData = {
  name: 'Alex Chen',
  title: 'Full Stack Developer',
  tagline: 'Crafting digital experiences that matter',
  description: 'Building beautiful and performant web applications with modern technologies',
  email: 'alex.chen@example.com',

  socials: {
    github: 'https://github.com/alexchen',
    twitter: 'https://twitter.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    email: 'mailto:alex.chen@example.com',
  },

  bio: {
    short: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.',
    story: 'My journey began with a curiosity about how websites work, which led me to dive deep into web development. Over the years, I\'ve had the privilege of working with startups and established companies, building everything from MVPs to enterprise-scale applications. What drives me is the intersection of technology and human experience - creating tools that make people\'s lives better.',
    highlights: [
      'Led development of a SaaS platform serving 10k+ users',
      'Built and scaled microservices architecture handling 1M+ requests/day',
      'Mentored junior developers and established coding best practices',
      'Contributed to open-source projects with 50k+ downloads'
    ]
  },

  skills: {
    frontend: [
      { name: 'TypeScript', level: 'Expert', icon: '🔷' },
      { name: 'React', level: 'Expert', icon: '⚛️' },
      { name: 'Next.js', level: 'Expert', icon: '▲' },
      { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
      { name: 'Framer Motion', level: 'Advanced', icon: '✨' },
      { name: 'Vue.js', level: 'Intermediate', icon: '💚' }
    ],
    backend: [
      { name: 'Node.js', level: 'Expert', icon: '🟢' },
      { name: 'Python', level: 'Advanced', icon: '🐍' },
      { name: 'PostgreSQL', level: 'Expert', icon: '🐘' },
      { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
      { name: 'GraphQL', level: 'Advanced', icon: '🔺' },
      { name: 'REST APIs', level: 'Expert', icon: '🔗' }
    ],
    database: [
      { name: 'PostgreSQL', level: 'Expert', icon: '🐘' },
      { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
      { name: 'Redis', level: 'Intermediate', icon: '🔴' },
      { name: 'MySQL', level: 'Advanced', icon: '🟡' }
    ],
    tools: [
      { name: 'Git', level: 'Expert', icon: '📚' },
      { name: 'Docker', level: 'Advanced', icon: '🐳' },
      { name: 'AWS', level: 'Advanced', icon: '☁️' },
      { name: 'VS Code', level: 'Expert', icon: '💻' },
      { name: 'Figma', level: 'Intermediate', icon: '🎯' },
      { name: 'Jest', level: 'Advanced', icon: '🃏' }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with Next.js, Stripe, and PostgreSQL.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      link: '#',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform with interactive charts, custom reports, and data visualization. Handles millions of data points.',
      tags: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      link: '#',
      image: '/placeholder.svg',
      featured: false
    },
  ],
  
  experience: [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading a team of 5 developers, architecting scalable web applications, and mentoring junior developers. Implemented microservices architecture serving 100k+ users.',
      achievements: [
        'Reduced application load time by 40% through performance optimizations',
        'Led migration from monolith to microservices architecture',
        'Established coding standards and CI/CD pipelines'
      ]
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Built MVPs and production applications from scratch. Worked closely with product team to deliver features that drove user engagement by 300%.',
      achievements: [
        'Developed core product features used by 10k+ active users',
        'Implemented A/B testing framework reducing development time by 50%',
        'Built automated deployment pipeline'
      ]
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.',
      achievements: [
        'Delivered 15+ client projects with 100% satisfaction rate',
        'Improved website performance scores from 60 to 95+',
        'Introduced component-based architecture'
      ]
    },
  ],
}
