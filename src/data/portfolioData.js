export const profile = {
  name: 'Anuj Tiwari',
  shortName: 'Anuj',
  title: 'Full Stack Developer & ML Engineer',
  tagline:
    'Building scalable web & mobile apps with React, Node.js, WebRTC, and AI — 4+ years crafting products at Vitt AI.',
  email: 'anshtiwari314@gmail.com',
  phone: '+91 8368751774',
  location: 'Ghaziabad, India',
  avatar: 'https://avatars.githubusercontent.com/u/68491888?v=4',
  aboutImage: '/anuj2.jpg',
  resumeUrl: '/AnujTiwari-recent2.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/anshtiwari314', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/anujtiwari3141', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://instagram.com/anuj314_/', icon: 'instagram' },
    { label: 'Dribbble', href: 'https://dribbble.com/anshtiwari314', icon: 'dribbble' },
  ],
  about: [
    'Hello, I\'m Anuj Tiwari — Senior Full Stack Developer at Vitt AI, a finance-tech startup building AI-powered sales and wealth platforms.',
    'My interest in technology spans Machine Learning, full-stack web development, and mobile apps. I love turning complex ideas into polished, production-ready products.',
    'Over 4+ years at Vitt AI, I\'ve shipped video conferencing tools, real-time AI assistants, React Native libraries, and client-facing dashboards for enterprises like Aditya Birla Wealth and HDFC.',
    'I thrive in positive, fast-moving teams — always learning, always building, and always excited to collaborate with talented people around the globe.',
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Machine Learning',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Scikit-learn', level: 60 },
      { name: 'Pandas', level: 50 },
      { name: 'Streamlit', level: 65 },
      { name: 'NumPy', level: 30 },
      { name: 'PyTorch / ONNX', level: 55 },
    ],
  },
  {
    title: 'Frontend & Mobile',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'React.js (TypeScript)', level: 90 },
      { name: 'React Native', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'WebSockets / WebRTC', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend & Data',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase', level: 70 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    title: 'Other',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Three.js', level: 45 },
      { name: 'Java', level: 75 },
      { name: 'Docker / AWS', level: 55 },
      { name: 'Electron.js', level: 60 },
    ],
  },
];

export const education = [
  {
    period: 'July 2018 – June 2022',
    title: 'B.Tech — Computer Science',
    org: 'Inderprastha Engineering College',
    location: 'Ghaziabad, UP, India',
  },
  {
    period: 'July 2016 – April 2017',
    title: 'Secondary School',
    org: 'DSR Modern School',
    location: 'Ghaziabad, India',
  },
  {
    period: 'July 2014 – April 2015',
    title: 'High School',
    org: 'DSR Modern School',
    location: 'Ghaziabad, India',
  },
];

export const experience = [
  {
    period: 'May 2022 – Present',
    title: 'Senior Full Stack Developer',
    org: 'Vitt AI (Jokanomy Tech Solutions)',
    location: 'Bengaluru, India',
    description:
      '4+ years building React/React Native apps, real-time AI assistants, WebRTC conferencing, and enterprise dashboards for wealth & insurance clients.',
  },
  {
    period: 'May 2019 – June 2019',
    title: 'Microsoft Training Programme — Intern',
    org: 'Inderprastha Engineering College',
    location: 'Ghaziabad, India',
    description: 'Web development internship during Microsoft-sponsored training programme.',
  },
  {
    period: 'July 2019 – Present',
    title: 'Member, Trinity Cyber Forum',
    org: 'Inderprastha Engineering College',
    location: 'Ghaziabad, India',
    description: 'Event coordinator for CodePile hackathon and cybersecurity community events.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Video Conferencing App',
    description:
      'Platform for relationship managers to interact with clients — screen sharing, chat, and AI-powered financial query answers.',
    image: '/images/vitt-meeting.gif',
    link: 'https://vitt-meeting.netlify.app/',
    tags: ['React', 'WebRTC', 'WebSockets', 'Node.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'Vitt AI Website',
    description:
      'Fully responsive company website built from Figma designs — showcases products and case studies.',
    image: '/images/vitt.ai.gif',
    link: 'https://vitt.ai/',
    tags: ['React', 'Responsive', 'Tailwind'],
    featured: true,
  },
  {
    id: 3,
    title: 'Voice Activity Detection',
    description:
      'Browser-based VAD model that listens on mic press and processes audio only after the user stops speaking.',
    image: '/images/jarvis-manual-vad.gif',
    link: 'https://jarvis-in-person-cues7.netlify.app/',
    tags: ['ONNX', 'React', 'Audio ML'],
    featured: true,
  },
  {
    id: 4,
    title: 'Movie Recommender',
    description: 'ML project using scikit-learn, trained on 10,000+ movie entries for personalized suggestions.',
    image: '/movie-recommend.png',
    link: 'https://movie-recommender.netlify.app/',
    tags: ['Python', 'Scikit-learn', 'ML'],
  },
  {
    id: 5,
    title: 'Email Spam Classifier',
    description: 'Identifies spam vs ham messages with ~90% accuracy using multiple classification algorithms.',
    image: '/email-spam.png',
    link: 'https://email-spam.app/',
    tags: ['Python', 'ML', 'NLP'],
  },
  {
    id: 6,
    title: 'Netflix Clone',
    description: 'Stream movie trailers with a Netflix-inspired UI powered by IMDB & YouTube APIs.',
    image: '/images/netflix-demo.gif',
    link: 'https://loving-knuth-79509c.netlify.app/',
    tags: ['React', 'API', 'CSS'],
  },
  {
    id: 7,
    title: 'Authentication System',
    description: 'Full login/signup flow with React and Firebase authentication.',
    image: '/images/Auth-sys.png',
    link: 'https://anshtiwari314.github.io/react-firebase-authentication-system/',
    tags: ['React', 'Firebase'],
  },
  {
    id: 8,
    title: 'Real Estate Platform',
    description: 'Property bidding app with Google Maps, live chat, and MERN stack backend.',
    image: '/images/real-estate.png',
    link: 'https://real-estate-project.app/',
    tags: ['MERN', 'Maps', 'Socket.io'],
  },
  {
    id: 9,
    title: 'Haunted House',
    description: 'Spooky 3D haunted house scene built with Three.js.',
    image: '/images/haunted-house.gif',
    link: 'https://infallible-allen-d0825a.netlify.app/',
    tags: ['Three.js', 'WebGL'],
  },
  {
    id: 10,
    title: 'Galaxy',
    description: 'Interactive 3D galaxy visualization using Three.js and bundlers.',
    image: '/images/Galaxy.gif',
    link: 'https://naughty-stonebraker-6acabb.netlify.app/',
    tags: ['Three.js', '3D'],
  },
  {
    id: 11,
    title: 'Physics in 3D World',
    description: 'Three.js world with Cannon.js physics simulation.',
    image: '/images/physics.png',
    link: 'https://awesome-kepler-162fae.netlify.app/',
    tags: ['Three.js', 'Cannon.js'],
  },
  {
    id: 12,
    title: 'Shadows in 3D Objects',
    description: 'Demonstrates realistic shadow rendering in a Three.js scene.',
    image: '/images/Objects-and-shadows.gif',
    link: 'https://gifted-swanson-af0b7b.netlify.app/',
    tags: ['Three.js', 'Lighting'],
  },
  {
    id: 13,
    title: 'Google Docs Clone',
    description: 'Rich text editor with color, font, and size controls — real-time collaboration ready.',
    image: '/images/docs.gif',
    link: 'https://docs-anshtiwari314.netlify.app/',
    tags: ['React', 'Editor', 'Firebase'],
  },
  {
    id: 14,
    title: 'Movies / TV Shows App',
    description: 'OTT-style app using TMDB API with search for movies and TV shows.',
    image: '/images/movie-app.gif',
    link: 'https://movie-anshtiwari314.netlify.app/',
    tags: ['React', 'TMDB API'],
  },
];

export const contactInfo = [
  { icon: 'mail', label: 'Email', value: profile.email },
  { icon: 'phone', label: 'Phone', value: profile.phone },
  { icon: 'map', label: 'Location', value: 'Vandana Vihar, Khora Colony — 201309' },
];
