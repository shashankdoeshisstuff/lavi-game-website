import {
  Smartphone,
  Gamepad2,
  Globe,
  BrainCircuit,
  LucideIcon,
  PenTool,
  Monitor,
  Database,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Layout,
  Code,
  ShoppingCart,
  BarChart,
  Cpu,
  Users,
  Palette,
  Sparkles,
  RefreshCw,
  Award,
  Zap,
  Eye,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Settings,
  RectangleGoggles,
} from 'lucide-react'

export interface AccordionItem {
  title: string;
  content: string;
}

export interface FeaturesItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  ctaText?: string;
  icon: LucideIcon;
  why_description?: string;
  accordion_item?: AccordionItem[];
  features?: FeaturesItem[];
}

export const services: Service[] = [
  {
    slug: 'mobile-app',
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'We design and develop custom mobile application for Android and IOS platforms. Our mobile app developers have expertise to create mobile applications using Flutter, React, Native Android and IOS technologies.',
    ctaText: 'LEARN MORE',
    icon: Smartphone,
    why_description:
      "In today’s fast-paced digital world, a mobile app is more than just an add-on—it’s a vital tool for enhancing customer engagement, streamlining business processes, and driving growth. Whether you want to reach a broader audience, provide a seamless user experience, or stay ahead of the competition, a well-designed mobile app can transform your business. With increasing reliance on mobile devices, having a dedicated app not only strengthens your brand’s presence but also opens new revenue streams and improves customer retention. Investing in professional mobile app development ensures that your app is built to deliver value, performance, and scalability—giving your business the competitive edge it needs to succeed.",
    accordion_item: [
      { title: 'Custom-Tailored Solutions', content: 'Get a mobile app designed specifically to meet your unique business requirements and goals.' },
      { title: 'Cross-Platform Development', content: 'Reach a wider audience with apps that seamlessly work on both iOS and Android platforms.' },
      { title: 'Enhanced User Experience', content: 'Deliver intuitive, user-friendly designs that engage users and boost customer satisfaction.' },
      { title: 'High Performance & Scalability', content: 'Build robust apps optimized for speed and capable of handling growing user demands.' },
      { title: 'Advanced Features Integration', content: 'Incorporate cutting-edge technologies like AI, AR, and IoT to stay ahead of the competition.' },
      { title: 'Faster Time to Market', content: 'Benefit from an efficient development process that ensures timely delivery without compromising quality.' },
      { title: 'Ongoing Support & Maintenance', content: 'Receive continuous updates, bug fixes, and improvements to keep your app running smoothly.' },
      { title: 'Cost-Effective Development', content: 'Maximize ROI with high-quality, scalable solutions developed within your budget.' },
    ],
    features: [
      { title: 'Requirement Analysis and Conceptualization', icon: Smartphone, description: 'Understanding your business needs, target audience, and objectives to create a detailed app development roadmap tailored to your vision.' },
      { title: 'UI/UX Design', icon: PenTool, description: 'Crafting visually appealing and highly intuitive user interfaces that enhance the user experience and increase engagement.' },
      { title: 'Cross-Platform Development', icon: Monitor, description: 'Developing apps using frameworks like Flutter or React Native to ensure seamless performance on both iOS and Android platforms, reducing development time and cost.' },
      { title: 'Native App Development', icon: Globe, description: 'Building high-performance apps tailored for specific platforms (iOS or Android) using their respective SDKs for a superior user experience.' },
      { title: 'Backend Development and API Integration', icon: Database, description: 'Creating robust and secure backend systems, along with seamless API integrations, to ensure smooth data flow and app functionality.' },
      { title: 'Quality Assurance and Testing', icon: ShieldCheck, description: 'Conducting rigorous testing across multiple devices, platforms, and use cases to deliver bug-free and reliable apps.' },
      { title: 'Deployment and Launch', icon: Rocket, description: 'Assisting with app store submission (App Store & Google Play), ensuring compliance with platform guidelines, and launching your app successfully.' },
      { title: 'Ongoing Support and Maintenance', icon: LifeBuoy, description: 'Providing continuous updates, performance monitoring, and technical support to keep your app up-to-date and running smoothly.' },
    ],
  },
  {
    slug: 'web',
    title: 'WEB DEVELOPMENT',
    description:
      'We offer end-to-end web development solutions, creating responsive, scalable, and visually engaging websites and web applications tailored to enhance user experience and drive business growth.',
    ctaText: 'LEARN MORE',
    icon: Globe,
    why_description:
      'In the digital-first era, a strong online presence is essential for any business aiming to grow and succeed. A professionally developed website not only enhances your brand’s credibility but also serves as a powerful tool to attract and engage potential customers. Whether you want to showcase your services, sell products online, or provide valuable information to your audience, a well-designed and functional website is key to achieving your business goals. By investing in expert web development, you ensure that your website is responsive, fast, secure, and optimized for search engines—giving you a competitive advantage and helping your business thrive in today’s dynamic online marketplace.',
    accordion_item: [
      { title: 'Custom Solutions', content: 'Tailor-made websites built to fit your specific business needs and brand identity.' },
      { title: 'Responsive Design', content: 'Flawless user experience across all devices – desktop, tablet, and mobile.' },
      { title: 'Scalable Architecture', content: 'Future-ready code that grows with your business without performance loss.' },
      { title: 'SEO-Friendly Development', content: 'Clean code and optimized structure that improves search engine visibility.' },
      { title: 'Enhanced User Experience', content: 'Intuitive navigation and interactions that keep visitors engaged.' },
      { title: 'Fast Load Times', content: 'Performance-optimized websites that reduce bounce rates and boost conversions.' },
      { title: 'Secure Solutions', content: 'Robust security measures to protect your data and your users.’' },
      { title: 'Ongoing Support & Maintenance', content: 'Regular updates, security patches, and technical support to keep your site healthy.' },
    ],
    features: [
      { title: 'Requirement Analysis and Planning', icon: Layout, description: 'Understanding your business needs and goals to craft a detailed development strategy and project roadmap.' },
      { title: 'UI/UX Design', icon: PenTool, description: 'Designing user-centric, visually appealing interfaces that enhance usability and create memorable experiences.' },
      { title: 'Frontend Development', icon: Monitor, description: 'Building interactive and responsive user interfaces using modern frameworks like React, Angular, or Vue.js for optimal performance across all devices.' },
      { title: 'Backend Development', icon: Database, description: 'Developing robust, scalable, and secure backend systems using technologies such as Node.js, Laravel, or Django to support seamless functionality.' },
      { title: 'E-commerce Solutions', icon: ShoppingCart, description: 'Creating custom e-commerce platforms with features like product management, payment gateways, and order tracking to help you sell online effortlessly.' },
      { title: 'ERP Integration', icon: Settings, description: 'Developing and integrating ERP systems tailored to your business processes, ensuring seamless data flow, better resource management, and improved operational efficiency.' },
      { title: 'SEO-Friendly Development', icon: BarChart, description: 'Ensuring your website is built with clean code, fast loading times, and optimized structure to improve search engine visibility.' },
      { title: 'Ongoing Support and Maintenance', icon: LifeBuoy, description: 'Providing continuous updates, bug fixes, and performance improvements to ensure your website remains secure and up to date.' },
    ],
  },
  {
    slug: 'game',
    title: 'GAME DEVELOPMENT',
    description:
      'We offer immersive game development solutions, specializing in mobile, web, and desktop platforms, with expertise in augmented reality (AR) and virtual reality (VR) development to create engaging, high-quality experiences using cutting-edge technologies and captivating design.',
    ctaText: 'LEARN MORE',
    icon: Gamepad2,
    why_description:
      'In an increasingly digital world, offering engaging, interactive, and immersive experiences is crucial for capturing the attention of your audience. Our game development service covers mobile phones, desktop apps, websites, and AR/VR platforms, enabling you to reach a diverse audience across various devices and environments. Whether you aim to entertain, educate, or provide a unique brand experience, our team can bring your vision to life with stunning visuals, seamless gameplay, and innovative features. With expertise in both traditional game development and cutting-edge AR/VR technologies, we ensure that your game stands out, delivering unforgettable, immersive experiences that engage users and leave a lasting impact.',
    accordion_item: [
      { title: 'Cross-Platform Compatibility', content: 'Reach players on mobile, desktop, web, and consoles with a single codebase.' },
      { title: 'Immersive Experiences with AR/VR', content: 'Create next‑level interactive worlds using augmented and virtual reality.' },
      { title: 'Tailored Game Design', content: 'Unique mechanics, storylines, and art styles that match your vision.' },
      { title: 'High-Quality Graphics and Performance', content: 'Stunning visuals and smooth gameplay even on resource‑constrained devices.' },
      { title: 'Innovative Gameplay Features', content: 'Multiplayer modes, leaderboards, achievements, and real‑time interactions.' },
      { title: 'Enhanced User Engagement', content: 'Reward systems, social sharing, and retention-focused mechanics.' },
      { title: 'Scalable Solutions', content: 'Architectures that support growth from a few hundred to millions of players.' },
      { title: 'Comprehensive Support & Maintenance', content: 'Regular updates, bug fixes, and performance monitoring post‑launch.' },
    ],
    features: [
      { title: 'Conceptualization & Game Design', icon: Lightbulb, description: 'We work closely with you to understand your vision and design a game concept that aligns with your goals and target audience.' },
      { title: 'Custom Game Development', icon: Gamepad2, description: 'Building custom, scalable games with interactive elements, captivating gameplay, and seamless mechanics across various platforms.' },
      { title: 'AR/VR Integration', icon: RectangleGoggles, description: 'Incorporating augmented and virtual reality to create immersive experiences that push the boundaries of traditional gaming.' },
      { title: 'Graphics and Visual Design', icon: Palette, description: 'Developing stunning visuals and 3D models to create a realistic, visually engaging environment for players.' },
      { title: 'Multiplayer & Interactive Features', icon: Users, description: 'Integrating real-time multiplayer functionality, leaderboards, and social interaction features to enhance user engagement.' },
      { title: 'Game Testing & Quality Assurance', icon: ShieldCheck, description: 'Conducting extensive testing to ensure smooth performance, bug-free gameplay, and high-quality user experiences across devices.' },
      { title: 'Platform Deployment & Launch', icon: Rocket, description: 'Assisting with the deployment process, ensuring compatibility with various platforms, and launching the game successfully on app stores or websites.' },
      { title: 'Ongoing Maintenance & Updates', icon: RefreshCw, description: 'Providing continuous support, bug fixes, and game updates to keep your game fresh and running smoothly.' },
    ],
  },
  {
    slug: 'ai',
    title: 'AI DEVELOPMENT',
    description:
      'We offer advanced AI development solutions, leveraging machine learning, deep learning, and natural language processing to build intelligent systems that enhance decision-making, automation, and user experiences across various industries.',
    ctaText: 'LEARN MORE',
    icon: BrainCircuit,
    why_description:
      'In today’s rapidly evolving digital landscape, integrating artificial intelligence into your business operations can provide a significant competitive advantage. Whether you’re looking to automate processes, enhance customer experiences, or derive insights from data, AI offers powerful solutions that streamline operations and improve decision-making. By adopting AI technologies, you can unlock new possibilities, boost efficiency, and drive innovation. Our AI development service ensures that you stay ahead of the curve by delivering customized, intelligent systems tailored to your unique needs, helping you harness the full potential of AI to grow your business and achieve your objectives.',
    accordion_item: [
      { title: 'Enhanced Decision-Making', content: 'Data‑driven insights that help you make smarter business choices.' },
      { title: 'Automation of Repetitive Tasks', content: 'Free up your team by automating manual, time‑consuming processes.' },
      { title: 'Personalized User Experiences', content: 'Tailor content, recommendations, and interactions to each user.' },
      { title: 'Improved Efficiency and Productivity', content: 'Streamline workflows and reduce operational overhead.' },
      { title: 'Cost Reduction', content: 'Lower long‑term costs through intelligent automation and optimization.' },
      { title: 'Scalable Solutions', content: 'AI models that grow with your data volume and business complexity.' },
      { title: 'Predictive Analytics', content: 'Anticipate market trends, customer behavior, and potential risks.' },
      { title: 'Advanced Problem Solving', content: 'Tackle complex challenges that traditional software cannot address.' },
    ],
    features: [
      { title: 'AI Strategy and Consultation', icon: BrainCircuit, description: 'We begin by understanding your business objectives and identifying opportunities where AI can create value, guiding you through the implementation of AI solutions.' },
      { title: 'Machine Learning and Deep Learning Models', icon: Cpu, description: 'We develop and train custom machine learning and deep learning models tailored to your business needs, enabling data-driven decision-making and predictive analytics.' },
      { title: 'Generative AI Solutions', icon: Sparkles, description: 'Implementing generative AI models that can create new content, such as text, images, videos, and more, to enhance creativity and drive innovation within your business.' },
      { title: 'Automation and Process Optimization', icon: Zap, description: 'Implementing AI-driven automation solutions to streamline workflows, reduce errors, and increase productivity.' },
      { title: 'Predictive Analytics and Insights', icon: TrendingUp, description: 'Building AI models that analyze historical data and predict future trends, enabling proactive decision-making and smarter business strategies.' },
      { title: 'Custom AI Application Development', icon: Code, description: 'Developing AI-powered applications that are scalable, secure, and optimized to meet your specific business requirements and objectives.' },
      { title: 'AI Integration and Deployment', icon: Settings, description: 'Integrating AI solutions into your existing systems and ensuring seamless deployment, allowing you to leverage AI effectively within your organization.' },
      { title: 'Ongoing AI Model Maintenance', icon: RefreshCw, description: 'Providing continuous model optimization, updates, and monitoring to ensure your AI systems evolve with changing data and business needs.' },
    ],
  },

  /* Additional for game development */
  {
    slug: 'vr-development',
    title: 'VR DEVELOPMENT',
    description:
      'We design immersive virtual reality experiences with realistic environments, interactive gameplay mechanics, motion controls, and engaging simulations for modern VR platforms and devices.',
    ctaText: 'LEARN MORE',
    icon: RectangleGoggles,
    why_description:
      'Virtual Reality is transforming the way users interact with digital experiences by creating immersive worlds that feel realistic and engaging. From gaming and education to training simulations and virtual tours, VR development opens endless opportunities for businesses to captivate audiences. Our VR development services combine advanced technology, creative storytelling, and optimized performance to build interactive experiences that deliver high levels of engagement and realism. Whether you want to create immersive games, simulations, or enterprise solutions, we help bring your vision into the virtual world.',
    accordion_item: [
      { title: 'Immersive User Experiences', content: 'Create highly engaging virtual environments that feel realistic and interactive.' },
      { title: 'Cross-Platform VR Compatibility', content: 'Develop VR applications compatible with Oculus, HTC Vive, PlayStation VR, and more.' },
      { title: 'Interactive Gameplay Mechanics', content: 'Build intuitive interactions using motion tracking and VR controllers.' },
      { title: 'High Performance Optimization', content: 'Ensure smooth VR experiences with optimized rendering and low latency.' },
      { title: 'Realistic 3D Environments', content: 'Design visually stunning and immersive virtual worlds with realistic details.' },
      { title: 'Scalable VR Solutions', content: 'Create VR experiences that can expand with new features and content updates.' },
      { title: 'Advanced Motion Tracking', content: 'Implement responsive movement systems for immersive interaction.' },
      { title: 'Continuous Support & Updates', content: 'Receive ongoing maintenance, improvements, and technical support.' },
    ],
    features: [
      { title: 'VR Experience Planning', icon: Lightbulb, description: 'We analyze your goals and create a detailed VR strategy tailored to your audience and platform.' },
      { title: 'Immersive Environment Design', icon: Palette, description: 'Designing realistic and engaging 3D virtual environments for maximum immersion.' },
      { title: 'Interactive VR Gameplay', icon: Gamepad2, description: 'Building interactive gameplay systems with motion controls and real-time feedback.' },
      { title: '3D Modeling & Animation', icon: Sparkles, description: 'Creating detailed 3D assets, animations, and effects to enhance realism.' },
      { title: 'VR Optimization', icon: Zap, description: 'Optimizing performance to ensure smooth and comfortable VR experiences.' },
      { title: 'Testing & Quality Assurance', icon: ShieldCheck, description: 'Testing VR experiences across devices to ensure stability and responsiveness.' },
      { title: 'VR Deployment', icon: Rocket, description: 'Deploying VR applications to multiple platforms and headsets efficiently.' },
      { title: 'Maintenance & Updates', icon: RefreshCw, description: 'Providing continuous improvements, updates, and technical support for VR projects.' },
    ],
  },

  {
    slug: 'game-art-design',
    title: 'GAME ART & DESIGN',
    description:
      'We create visually stunning game art, character designs, animations, environments, and user interfaces that bring immersive gaming worlds and engaging visual storytelling to life.',
    ctaText: 'LEARN MORE',
    icon: Palette,
    why_description:
      'Game art and design play a critical role in shaping player experiences and emotional engagement. High-quality visuals, immersive environments, and memorable characters are essential for making games stand out in today’s competitive gaming market. Our team of artists and designers specialize in crafting visually captivating assets that align perfectly with your game’s style and vision. From concept art and UI design to 3D modeling and animation, we help create immersive worlds that players remember.',
    accordion_item: [
      { title: 'Unique Visual Identity', content: 'Develop custom art styles and visual assets tailored to your game.' },
      { title: 'Immersive Environment Design', content: 'Create detailed and visually rich worlds that enhance gameplay.' },
      { title: 'Character & Creature Design', content: 'Design memorable characters with expressive animations and personalities.' },
      { title: 'UI/UX for Games', content: 'Build intuitive interfaces that improve player engagement and usability.' },
      { title: '2D & 3D Asset Creation', content: 'Produce high-quality game assets optimized for performance and visuals.' },
      { title: 'Animation & Effects', content: 'Add life to your game with smooth animations and cinematic effects.' },
      { title: 'Creative Storytelling', content: 'Enhance narrative experiences through visual storytelling and design.' },
      { title: 'Scalable Design Workflow', content: 'Maintain consistency across large-scale game projects and updates.' },
    ],
    features: [
      { title: 'Concept Art Creation', icon: PenTool, description: 'Designing concept art that defines the visual direction of your game.' },
      { title: 'Character Design', icon: Users, description: 'Creating unique characters, costumes, and personalities for engaging gameplay.' },
      { title: 'Environment & Level Art', icon: Globe, description: 'Building immersive worlds and detailed environments for players to explore.' },
      { title: '3D Modeling & Sculpting', icon: Sparkles, description: 'Crafting detailed 3D models and assets optimized for games.' },
      { title: 'Animation & Rigging', icon: RefreshCw, description: 'Producing fluid animations and rigging systems for realistic movements.' },
      { title: 'Game UI/UX Design', icon: Layout, description: 'Designing intuitive game menus, HUDs, and user interfaces.' },
      { title: 'Visual Effects Design', icon: Zap, description: 'Adding cinematic visual effects, particles, and dynamic lighting.' },
      { title: 'Art Optimization & Support', icon: ShieldCheck, description: 'Ensuring assets are optimized for smooth performance across devices.' },
    ],
  },

  {
    slug: 'multiplayer-game-development',
    title: 'MULTIPLAYER GAME DEVELOPMENT',
    description:
      'We develop scalable multiplayer games with real-time networking, matchmaking systems, voice chat, leaderboards, and synchronized gameplay experiences across platforms.',
    ctaText: 'LEARN MORE',
    icon: Users,
    why_description:
      'Multiplayer games are one of the most engaging forms of digital entertainment, allowing players to connect, compete, and collaborate in real time. Building a successful multiplayer game requires advanced networking architecture, synchronization systems, and scalable infrastructure. Our multiplayer game development services focus on delivering smooth, low-latency gameplay experiences with secure backend systems and interactive social features that keep players engaged.',
    accordion_item: [
      { title: 'Real-Time Multiplayer Systems', content: 'Enable seamless real-time gameplay for players worldwide.' },
      { title: 'Cross-Platform Connectivity', content: 'Allow players across devices to connect and play together.' },
      { title: 'Scalable Server Architecture', content: 'Support growing player bases with reliable backend infrastructure.' },
      { title: 'Secure Matchmaking Systems', content: 'Create balanced and secure multiplayer matchmaking experiences.' },
      { title: 'Voice & Chat Integration', content: 'Improve player interaction with built-in communication tools.' },
      { title: 'Leaderboards & Rankings', content: 'Increase competition and engagement with ranking systems.' },
      { title: 'Low Latency Optimization', content: 'Deliver responsive gameplay with minimal lag and synchronization issues.' },
      { title: 'Ongoing Multiplayer Support', content: 'Maintain and improve online systems with regular updates and monitoring.' },
    ],
    features: [
      { title: 'Network Architecture Development', icon: Database, description: 'Building scalable networking systems for real-time multiplayer games.' },
      { title: 'Matchmaking Systems', icon: Users, description: 'Implementing balanced matchmaking and ranking systems for players.' },
      { title: 'Cross-Platform Multiplayer', icon: Globe, description: 'Enabling multiplayer functionality across mobile, desktop, and consoles.' },
      { title: 'Voice & Chat Features', icon: Smartphone, description: 'Integrating real-time communication systems for better interaction.' },
      { title: 'Backend Infrastructure', icon: Cpu, description: 'Developing secure servers and cloud infrastructure for online gaming.' },
      { title: 'Anti-Cheat & Security', icon: ShieldCheck, description: 'Protecting multiplayer games with advanced anti-cheat systems.' },
      { title: 'Deployment & Scaling', icon: Rocket, description: 'Deploying scalable multiplayer systems capable of handling high traffic.' },
      { title: 'Maintenance & Live Updates', icon: RefreshCw, description: 'Providing continuous server maintenance and live feature updates.' },
    ],
  },

  {
    slug: 'pc-console-development',
    title: 'PC & CONSOLE GAME DEVELOPMENT',
    description:
      'We build high-performance PC and console games with advanced gameplay mechanics, cinematic storytelling, optimized graphics, and immersive player experiences.',
    ctaText: 'LEARN MORE',
    icon: Monitor,
    why_description:
      'PC and console gaming continues to dominate the gaming industry with players expecting visually rich, high-performance, and immersive experiences. Developing for consoles and PC requires optimized rendering, responsive controls, and platform-specific expertise. Our PC and console game development services focus on delivering premium-quality games with engaging gameplay, realistic visuals, and scalable architectures tailored for modern gaming platforms.',
    accordion_item: [
      { title: 'AAA Quality Experiences', content: 'Develop premium-quality games with immersive gameplay and visuals.' },
      { title: 'Platform Optimization', content: 'Ensure smooth performance across PC and major gaming consoles.' },
      { title: 'Advanced Graphics Rendering', content: 'Utilize modern rendering technologies for realistic visuals.' },
      { title: 'Immersive Storytelling', content: 'Create compelling narratives and cinematic experiences.' },
      { title: 'Responsive Controls', content: 'Deliver smooth and intuitive gameplay mechanics.' },
      { title: 'Scalable Performance', content: 'Optimize games for both high-end and mid-range hardware.' },
      { title: 'Multiplayer & Online Features', content: 'Integrate online connectivity and multiplayer systems.' },
      { title: 'Post-Launch Support', content: 'Provide updates, patches, and ongoing content improvements.' },
    ],
    features: [
      { title: 'Game Planning & Design', icon: Lightbulb, description: 'Planning gameplay systems, mechanics, and player experiences.' },
      { title: 'Console Optimization', icon: Monitor, description: 'Optimizing games for PlayStation, Xbox, Nintendo, and PC platforms.' },
      { title: 'Advanced Graphics Development', icon: Sparkles, description: 'Creating realistic graphics, shaders, and cinematic effects.' },
      { title: 'Gameplay Mechanics', icon: Gamepad2, description: 'Building smooth and responsive gameplay systems.' },
      { title: 'Performance Optimization', icon: Zap, description: 'Ensuring stable frame rates and efficient resource usage.' },
      { title: 'Testing & Certification', icon: ShieldCheck, description: 'Testing games thoroughly for platform certification and stability.' },
      { title: 'Launch & Publishing Support', icon: Rocket, description: 'Assisting with game publishing and deployment across platforms.' },
      { title: 'Content Updates & Support', icon: RefreshCw, description: 'Providing continuous content updates and technical support.' },
    ],
  },

  {
    slug: 'metaverse-development',
    title: 'METAVERSE DEVELOPMENT',
    description:
      'We create interactive metaverse platforms with virtual worlds, customizable avatars, social interaction systems, digital assets, and immersive multiplayer experiences.',
    ctaText: 'LEARN MORE',
    icon: Sparkles,
    why_description:
      'The metaverse is redefining digital interaction by combining virtual reality, social connectivity, gaming, and digital economies into immersive online spaces. Businesses and brands can leverage metaverse experiences for entertainment, collaboration, virtual events, and digital commerce. Our metaverse development services focus on building scalable virtual environments with real-time interaction, immersive experiences, and advanced multiplayer systems that drive engagement and innovation.',
    accordion_item: [
      { title: 'Immersive Virtual Worlds', content: 'Build engaging and interactive 3D virtual environments.' },
      { title: 'Real-Time Social Interaction', content: 'Enable live communication and interaction between users.' },
      { title: 'Customizable Avatars', content: 'Allow users to personalize their virtual identities.' },
      { title: 'Digital Asset Integration', content: 'Support NFTs, virtual goods, and digital ownership systems.' },
      { title: 'Scalable Multiplayer Systems', content: 'Handle thousands of users in shared virtual spaces.' },
      { title: 'Cross-Platform Accessibility', content: 'Ensure metaverse experiences work across devices and platforms.' },
      { title: 'Interactive Events & Experiences', content: 'Host virtual events, games, and collaborative experiences.' },
      { title: 'Continuous Expansion & Updates', content: 'Expand and evolve virtual worlds with ongoing development.' },
    ],
    features: [
      { title: 'Virtual World Design', icon: Globe, description: 'Creating immersive and visually rich metaverse environments.' },
      { title: 'Avatar Development', icon: Users, description: 'Building customizable and interactive avatar systems.' },
      { title: 'Real-Time Networking', icon: Database, description: 'Developing scalable multiplayer infrastructure for the metaverse.' },
      { title: 'Digital Economy Systems', icon: ShoppingCart, description: 'Integrating virtual goods, NFTs, and digital marketplaces.' },
      { title: 'AR/VR Integration', icon: RectangleGoggles, description: 'Enhancing immersion with augmented and virtual reality technologies.' },
      { title: 'Interactive Features', icon: Gamepad2, description: 'Adding games, social spaces, and real-time activities.' },
      { title: 'Platform Deployment', icon: Rocket, description: 'Deploying metaverse platforms across web, mobile, and VR devices.' },
      { title: 'Ongoing Support', icon: RefreshCw, description: 'Providing updates, maintenance, and scalability improvements.' },
    ],
  },

  {
    slug: 'blockchain-game-development',
    title: 'BLOCKCHAIN GAME DEVELOPMENT',
    description:
      'We develop blockchain-powered games with NFT integration, digital asset ownership, secure smart contracts, token economies, and decentralized gaming ecosystems.',
    ctaText: 'LEARN MORE',
    icon: ShieldCheck,
    why_description:
      'Blockchain technology is transforming the gaming industry by enabling secure digital ownership, decentralized economies, and transparent transactions. Blockchain-based games empower players with ownership of in-game assets, NFTs, and tokenized rewards. Our blockchain game development services focus on building secure, scalable, and engaging gaming ecosystems that combine immersive gameplay with modern decentralized technologies.',
    accordion_item: [
      { title: 'NFT Integration', content: 'Enable ownership and trading of unique in-game digital assets.' },
      { title: 'Secure Smart Contracts', content: 'Implement transparent and tamper-proof blockchain logic.' },
      { title: 'Tokenized Economies', content: 'Create reward systems powered by digital tokens and currencies.' },
      { title: 'Decentralized Gaming Ecosystems', content: 'Build blockchain-powered multiplayer and marketplace systems.' },
      { title: 'Player Asset Ownership', content: 'Allow players full ownership of virtual items and collectibles.' },
      { title: 'Cross-Platform Blockchain Access', content: 'Ensure blockchain games work across web, mobile, and desktop.' },
      { title: 'Transparent Transactions', content: 'Provide secure and transparent digital asset trading.' },
      { title: 'Scalable Blockchain Infrastructure', content: 'Support growing user bases with scalable decentralized systems.' },
    ],
    features: [
      { title: 'Blockchain Strategy', icon: Lightbulb, description: 'Planning blockchain game mechanics and decentralized ecosystems.' },
      { title: 'NFT Marketplace Development', icon: ShoppingCart, description: 'Building integrated NFT trading platforms and marketplaces.' },
      { title: 'Smart Contract Development', icon: Code, description: 'Developing secure and transparent smart contracts for games.' },
      { title: 'Digital Wallet Integration', icon: ShieldCheck, description: 'Integrating secure cryptocurrency wallet systems.' },
      { title: 'Token Economy Design', icon: TrendingUp, description: 'Creating balanced in-game economies powered by blockchain tokens.' },
      { title: 'Multiplayer Blockchain Systems', icon: Users, description: 'Developing decentralized multiplayer game infrastructures.' },
      { title: 'Deployment & Security Testing', icon: Rocket, description: 'Testing and deploying secure blockchain game systems.' },
      { title: 'Ongoing Blockchain Support', icon: RefreshCw, description: 'Providing updates, optimizations, and blockchain maintenance.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((p) => p.slug === slug)
}