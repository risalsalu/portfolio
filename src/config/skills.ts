export type SkillLevel = "core" | "secondary";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Building secure, maintainable APIs and enterprise application services across the .NET ecosystem.",
    skills: [
      { name: "C#", level: "core", icon: "TbBrandCSharp", description: "OBJECT-ORIENTED LANGUAGE" },
      { name: "ASP.NET Core", level: "core", icon: "SiDotnet", description: "WEB APP FRAMEWORK" },
      { name: ".NET 8", level: "core", icon: "SiDotnet", description: "MODERN RUNTIME PLATFORM" },
      { name: "ASP.NET Web API", level: "core", icon: "SiDotnet", description: "REST API FRAMEWORK" },
      { name: "RESTful APIs", level: "core", icon: "Globe", description: "API ARCHITECTURE" },
      { name: "Entity Framework Core", level: "secondary" },
      { name: "Dapper", level: "secondary" },
      { name: "LINQ", level: "secondary" },
      { name: "Dependency Injection", level: "secondary" },
      { name: "Middleware", level: "secondary" },
      { name: "Clean Architecture", level: "secondary" },
      { name: "Microservices Architecture", level: "secondary" },
      { name: "YARP API Gateway", level: "secondary" },
      { name: "Background Services", level: "secondary" },
      { name: "API Design", level: "secondary" }
    ]
  },
  {
    id: "python-backend",
    title: "Python Backend",
    description: "Constructing lightweight, fast APIs and scripting services using Python ecosystem utilities.",
    skills: [
      { name: "Python", level: "core", icon: "SiPython", description: "OBJECT-ORIENTED LANGUAGE" },
      { name: "FastAPI", level: "core", icon: "SiFastapi", description: "HIGH-PERFORMANCE API" },
      { name: "Uvicorn", level: "secondary" },
      { name: "Pydantic", level: "secondary" },
      { name: "SQLAlchemy", level: "secondary" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Developing responsive, component-driven interfaces with modern React and TypeScript.",
    skills: [
      { name: "React.js", level: "core", icon: "FaReact", description: "COMPONENT LIBRARY" },
      { name: "TypeScript", level: "core", icon: "SiTypescript", description: "TYPED PROGRAMMING LANGUAGE" },
      { name: "JavaScript ES6+", level: "core", icon: "SiJavascript", description: "DYNAMIC CLIENT LANGUAGE" },
      { name: "Vite", level: "core", icon: "SiVite", description: "MODERN FRONTEND TOOLING" },
      { name: "React Router", level: "core", icon: "SiReactrouter", description: "CLIENT-SIDE NAVIGATION" },
      { name: "Redux Toolkit", level: "core", icon: "SiRedux", description: "GLOBAL STATE MANAGEMENT" },
      { name: "HTML5", level: "secondary" },
      { name: "CSS3", level: "secondary" },
      { name: "Tailwind CSS", level: "secondary" },
      { name: "React Context API", level: "secondary" },
      { name: "Custom Hooks", level: "secondary" },
      { name: "Framer Motion", level: "secondary" },
      { name: "Axios", level: "secondary" },
      { name: "Component-Based Architecture", level: "secondary" },
      { name: "State Management", level: "secondary" },
      { name: "API Integration", level: "secondary" },
      { name: "Responsive UI Design", level: "secondary" }
    ]
  },
  {
    id: "database",
    title: "Database",
    description: "Designing and optimizing relational and NoSQL data systems for application workloads.",
    skills: [
      { name: "MS SQL Server", level: "core", icon: "DiMsqlServer", description: "RELATIONAL DATABASE ENGINE" },
      { name: "PostgreSQL", level: "core", icon: "SiPostgresql", description: "OPEN SOURCE DATABASE" },
      { name: "Oracle Database", level: "core", icon: "Database", description: "ENTERPRISE DATA SYSTEM" },
      { name: "MongoDB", level: "core", icon: "SiMongodb", description: "DOCUMENT STORE DATA" },
      { name: "Redis", level: "core", icon: "SiRedis", description: "IN-MEMORY KEY-VALUE" },
      { name: "SQLite", level: "secondary" },
      { name: "Entity Framework Core", level: "secondary" },
      { name: "SQLAlchemy", level: "secondary" },
      { name: "Database Design", level: "secondary" },
      { name: "Data Modeling", level: "secondary" },
      { name: "Query Optimization", level: "secondary" },
      { name: "Caching", level: "secondary" },
      { name: "Database Migrations", level: "secondary" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Deploying and managing modern applications with AWS, containers and CI/CD workflows.",
    skills: [
      { name: "AWS", level: "core", icon: "FaAws", description: "CLOUD INFRASTRUCTURE PLATFORM" },
      { name: "Docker", level: "core", icon: "SiDocker", description: "CONTAINER VIRTUALIZATION SYSTEM" },
      { name: "Git", level: "core", icon: "SiGit", description: "DISTRIBUTED VERSION CONTROL" },
      { name: "GitHub", level: "core", icon: "SiGithub", description: "CODE REPOSITORY PLATFORM" },
      { name: "Amazon EC2", level: "core", icon: "Cpu", description: "VIRTUAL COMPUTE INSTANCES" },
      { name: "Amazon S3", level: "core", icon: "Database", description: "SCALABLE OBJECT STORAGE" },
      { name: "GitHub Actions", level: "core", icon: "SiGithubactions", description: "AUTOMATED CI/CD PIPELINES" },
      { name: "AWS IAM", level: "secondary" },
      { name: "AWS RDS", level: "secondary" },
      { name: "Docker Compose", level: "secondary" },
      { name: "CI/CD", level: "secondary" },
      { name: "Linux", level: "secondary" },
      { name: "Vercel", level: "secondary" },
      { name: "Render", level: "secondary" },
      { name: "Postman", level: "secondary" },
      { name: "Swagger/OpenAPI", level: "secondary" }
    ]
  },
  {
    id: "security",
    title: "Security",
    description: "Implementing authentication, authorization and secure API communication.",
    skills: [
      { name: "JWT Authentication", level: "core", icon: "SiJsonwebtokens", description: "TOKEN-BASED SECURITY" },
      { name: "Keycloak", level: "core", icon: "SiKeycloak", description: "IDENTITY PROVIDER SYSTEM" },
      { name: "OAuth2", level: "core", icon: "Lock", description: "AUTHORIZATION FRAMEWORK" },
      { name: "OpenID Connect", level: "core", icon: "SiOpenid", description: "FEDERATED IDENTITY LAYER" },
      { name: "Role-Based Authorization", level: "secondary" },
      { name: "API Security", level: "secondary" },
      { name: "Protected Routes", level: "secondary" },
      { name: "Axios Interceptors", level: "secondary" },
      { name: "Middleware Security", level: "secondary" },
      { name: "CORS", level: "secondary" },
      { name: "Environment Variables", level: "secondary" },
      { name: "Secrets Management", level: "secondary" }
    ]
  },
  {
    id: "messaging",
    title: "Messaging & Real-Time",
    description: "Working with event-driven, asynchronous and real-time application communication.",
    skills: [
      { name: "Apache Kafka", level: "core", icon: "SiApachekafka", description: "DISTRIBUTED EVENT LOG" },
      { name: "WebSockets", level: "core", icon: "Network", description: "FULL-DUPLEX REAL-TIME" },
      { name: "SignalR", level: "core", icon: "Radio", description: "ASYNCHRONOUS PUSH CHANNEL" },
      { name: "Event-Driven Architecture", level: "secondary" },
      { name: "Asynchronous Programming", level: "secondary" },
      { name: "Message-Based Communication", level: "secondary" },
      { name: "Real-Time Data Streaming", level: "secondary" }
    ]
  },
  {
    id: "ai",
    title: "AI",
    description: "Designing AI-powered systems around LLMs, agents, retrieval, memory and tool execution.",
    skills: [
      { name: "Generative AI", level: "core", icon: "Zap", description: "SYNTHETIC COGNITIVE ENGINE" },
      { name: "Large Language Models", level: "core", icon: "Cpu", description: "NEURAL SEMANTIC PROCESSOR" },
      { name: "AI Agents", level: "core", icon: "Workflow", description: "AUTONOMOUS WORKFLOW EXECUTION" },
      { name: "Agentic AI", level: "core", icon: "Cpu", description: "INTENT-DRIVEN MACHINE ACTION" },
      { name: "RAG", level: "core", icon: "Layers", description: "KNOWLEDGE RETRIEVAL CHANNEL" },
      { name: "Vector Search", level: "core", icon: "Database", description: "HIGH-DIMENSIONAL SIMILARITY INDEX" },
      { name: "Semantic Search", level: "core", icon: "Globe", description: "INTENT-BASED RETRIEVAL KEY" },
      { name: "Embeddings", level: "core", icon: "Layers", description: "VECTOR REPRESENTATION SET" },
      { name: "LLMs", level: "secondary" },
      { name: "Prompt Engineering", level: "secondary" },
      { name: "Context Engineering", level: "secondary" },
      { name: "Retrieval-Augmented Generation", level: "secondary" },
      { name: "AI Memory Systems", level: "secondary" },
      { name: "Intent Detection", level: "secondary" },
      { name: "Task Planning", level: "secondary" },
      { name: "Tool Calling", level: "secondary" },
      { name: "AI Workflows", level: "secondary" },
      { name: "Multi-Provider AI Systems", level: "secondary" }
    ]
  },
  {
    id: "ai-providers",
    title: "AI Providers",
    description: "Working with foundation model endpoints, aggregators, and local execution runtimes.",
    skills: [
      { name: "OpenAI", level: "core", icon: "SiOpenai", description: "GENERATIVE AI PLATFORM" },
      { name: "Google Gemini", level: "core", icon: "SiGooglegemini", description: "MULTIMODAL AI PLATFORM" },
      { name: "Anthropic Claude", level: "core", icon: "SiClaude", description: "AI ASSISTANT MODEL" },
      { name: "OpenRouter", level: "core", icon: "Globe", description: "MULTI-MODEL AI GATEWAY" },
      { name: "Ollama", level: "core", icon: "SiOllama", description: "LOCAL AI RUNTIME" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Engineering",
    description: "Applying clean, modular and scalable engineering principles to application design.",
    skills: [
      { name: "Clean Architecture", level: "core", icon: "Layers", description: "ENTERPRISE LAYERING DESIGN" },
      { name: "Microservices", level: "core", icon: "Server", description: "DECOUPLED SERVICE ECOSYSTEM" },
      { name: "API Gateway Architecture", level: "core", icon: "Layers", description: "UNIFIED SYSTEM ENTRYWAY" },
      { name: "Event-Driven Architecture", level: "core", icon: "Workflow", description: "ASYNCHRONOUS SYSTEM TELEMETRY" },
      { name: "Object-Oriented Programming", level: "secondary" },
      { name: "SOLID Principles", level: "secondary" },
      { name: "Clean Code", level: "secondary" },
      { name: "Layered Architecture", level: "secondary" },
      { name: "Feature-Based Architecture", level: "secondary" },
      { name: "SaaS Architecture", level: "secondary" },
      { name: "AI System Architecture", level: "secondary" },
      { name: "Unit Testing", level: "secondary" },
      { name: "Integration Testing", level: "secondary" },
      { name: "Debugging", level: "secondary" },
      { name: "Code Reviews", level: "secondary" },
      { name: "Agile", level: "secondary" },
      { name: "Scrum", level: "secondary" }
    ]
  }
];
