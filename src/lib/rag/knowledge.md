## Overview
Sounak Hazra is a Full-Stack Developer based in Howrah, West Bengal, India. He builds production-style systems end to end with JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js and MongoDB, and deploys them with Docker and Vercel. His work spans real-time applications, containerized code execution environments, secure payment systems, booking platforms, workflow automation and LLM-powered features such as RAG and AI assistants. He is currently a Full Stack Developer intern at AaoStays and is pursuing a B.Tech in Computer Science and Engineering with an AI and ML specialization.

## Contact and links
The best way to reach Sounak Hazra is by email at hazrasounak87@gmail.com. His GitHub is github.com/Sounak-Hazra and his LinkedIn is linkedin.com/in/sounak-hazra-6099a7292. His portfolio is at portfolio-six-iota-92.vercel.app. He is based in Howrah, West Bengal, India, and works remotely. He is open to opportunities in full-stack development and LLM-powered products.

## Education
Sounak Hazra is studying B.Tech in Computer Science and Engineering with an AI and ML specialization at Brainware University in Barasat, West Bengal, from 2023 to 2027. His CGPA is 9.2 out of 10, and he was awarded a 3-year full scholarship for academic excellence. He completed Higher Secondary (Class XII) in 2023 with 74.8 percent and Secondary (Class X) in 2021 with 84 percent.

## Experience at AaoStays
Sounak Hazra works as a Full Stack Developer Intern at AaoStays, a property and room booking platform, from February 2026 to the present, remotely. He led a team of 4 to 5 interns to architect a unified backend that powers three applications (user, employee and admin) with shared authentication, database models and business logic, which lets the product add features without duplicating code. He also built a multi-role admin dashboard for property management, booking oversight and Cloudinary media handling, bringing the operational workflows into one interface.

## AaoStays availability API
At AaoStays, Sounak Hazra engineered a smart availability API that calculates the best room combinations for both shared-room bookings and whole-property bookings. He optimized it so that response time dropped from 800 milliseconds to 200 milliseconds, which is a 75 percent improvement. This is his strongest example of backend performance work and algorithmic problem solving on a real product.

## Experience at Avinna Groups
Sounak Hazra worked as a Software Developer Intern at Avinna Groups from September 2025 to November 2025, remotely. He built a rule-based HR leave management system with custom leave policies, approval constraints and carry-over rules, which replaced manual tracking and enforced company-wide policy compliance. He also designed a hierarchical approval workflow with manager assignments, automated leave calculations and automatic quota refills, which reduced operational overhead by 40 percent.

## Project: Vibe Code Editor
Vibe Code Editor is a multi-language IDE that runs in the browser, built by Sounak Hazra and positioned as a SaaS product rather than a student project. Every user gets a dedicated, language-specific Docker container, supporting more than 10 languages including Python, JavaScript, C++, Rust and Go, so there is no interference between users and code runs in isolation. The stack is Next.js, Node.js, Express, Docker, WebSockets, PTY, Monaco Editor, Zustand, WebContainers and Ollama. It is the project Sounak considers his standout piece.

## Project: Vibe Code Editor technical details
In Vibe Code Editor, Sounak Hazra built a real-time terminal pipeline using Docker, WebSockets, PTY and xterm.js, with sub-second two-way input and output between the browser and the container. The editor uses Monaco with a multi-file workspace, persistent file state, execution monitoring, and live tracking of CPU, memory and run-time history. It also includes an AI assistant powered by Ollama with token-by-token streaming and swappable models, which runs fully offline at zero external API cost, and AI code completion with a Qwen coder model. He also added a GitHub import flow built with Next.js, TypeScript and shadcn/ui.

## Project: SoulStich
SoulStich is a full-stack fashion e-commerce platform built by Sounak Hazra and deployed live on Vercel. The stack is Next.js, Node.js, Express.js, MongoDB, Razorpay, Cloudinary, TanStack Query, Shadcn UI, Twilio and JWT. It has product catalog management, advanced filtering, a cart, checkout and end-to-end order processing. Payments use Razorpay with webhook verification and automated order reconciliation to keep transactions consistent.

## Project: SoulStich admin dashboard
For SoulStich, Sounak Hazra built an admin dashboard with real-time order management, inventory control, product CRUD with Cloudinary image uploads, JWT authentication and TanStack Query for state management. It removed manual workflows and made the platform more responsive for the store owner.

## Project: Distill
Distill is a RAG-over-codebase product that Sounak Hazra is currently building: a tool that analyzes a GitHub repository so users can chat with the codebase. Its pipeline uses AST-aware code chunking with tree-sitter, hierarchical LLM summaries at the file, folder and repository level, vector storage in Qdrant, and embeddings generated with Ollama. Questions are answered by a ReAct-style agent loop that uses custom tree-based tools to navigate the repository. He improved retrieval precision by fixing duplicate-collection issues, cleaning the embedding text, generating real per-chunk, per-file and per-folder descriptions, and classifying queries by level. It is still in development, and he is considering LangGraph to manage the growing number of pipeline stages.

## Skills: languages, frontend and backend
Sounak Hazra's languages are JavaScript (ES6+), TypeScript, Python and C. On the frontend he uses React.js, Next.js, Zustand, TanStack Query, HTML5, CSS3, Tailwind CSS and Shadcn UI. On the backend he uses Node.js, Express.js, RESTful APIs and JWT authentication. His databases are MongoDB and SQL. For cloud and DevOps he uses Docker and Vercel, and his tools are Postman, Git and GitHub.

## Skills: AI, real-time and integrations
Sounak Hazra works with LLM API integration, RAG pipelines, embeddings, vector search, ReAct-style agents and local models through Ollama, in both Python and JavaScript. He has built streaming AI responses and has experience with rate-limit trade-offs across Groq, Gemini and local Ollama models. For real-time systems he uses WebSockets and PTY terminals with Docker. He has integrated Razorpay payments with webhooks, Cloudinary for media, and Twilio for messaging.

## Highlights and strengths
Sounak Hazra's key results are a 75 percent faster availability API at AaoStays, a 40 percent reduction in operational overhead from an HR workflow system at Avinna Groups, a browser IDE with isolated Docker containers for more than 10 languages, and a 9.2 CGPA with a full scholarship. He has led a team of 4 to 5 interns on a shared backend, and he combines full-stack product work with hands-on LLM and RAG engineering.

## This portfolio and the Ask Sounak assistant
This portfolio website was built by Sounak Hazra with Next.js, React, Tailwind CSS, Framer Motion and GSAP. It has an admin panel with authentication for posting blogs and projects, stored in MongoDB. The Ask Sounak assistant on the site is a small RAG pipeline: his resume and project details are split into chunks and embedded with Gemini's embedding model, the chunks are stored in a JSON file, and at question time the question is embedded and matched by cosine similarity to retrieve the best chunks. Gemini then streams an answer based only on those chunks. He skipped a vector database on purpose because the knowledge is small.