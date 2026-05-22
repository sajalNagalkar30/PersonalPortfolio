export const experiences = [
  {
    date: 'June 2024 – Present',
    title: 'Flutter Developer & Full Stack Developer',
    subtitle: 'Mobile | React.js | Node.js',
    company: 'Parity Cube Pvt. Ltd.',
    location: 'Mumbai, India',
    description:
      'Developing Flutter mobile apps and contributing to the React.js/Node.js web platform in the fintech domain. Collaborating with product managers, designers, and backend developers to deliver robust cross-platform solutions.',
    projects: [
      {
        name: 'LetsEarn — Mobile App & Web Platform',
        tags: ['Flutter Mobile', 'React.js Web', 'Node.js Backend'],
        description: 'Cashback and affiliate rewards platform — contributed across mobile app, web frontend, and backend API.',
        achievements: [
          'Designed complete mobile architecture using Clean Architecture + BLoC, reducing feature dev time by 40%',
          'Built LetsEarn website using React.js — reusable components, responsive layouts, API integrations',
          'Developed RESTful APIs using Node.js and Express.js for mobile + web platforms',
          'Implemented deep linking via Branch.io, improving user engagement by 25%',
          'Reduced APK size by 35% through ProGuard/R8 optimization',
          'Achieved 85% code coverage; Codemagic CI/CD reduced deployment time by 60%',
        ],
        keyResults: [
          { label: 'Active Users', value: '900+' },
          { label: 'Crash-Free', value: '99.5%' },
          { label: 'App Rating', value: '4.2★' },
          { label: 'Code Coverage', value: '85%' },
        ],
        tags2: ['Flutter','React.js','Node.js','BLoC','Dio','Branch.io','FCM','Codemagic'],
      },
      {
        name: 'Zingoy — Mobile App Enhancement',
        tags: ['Flutter Mobile'],
        description: "India's leading cashback & gift card platform — maintained production app for 50,000+ active users.",
        achievements: [
          'Integrated Razorpay supporting UPI, cards, mobile wallets, and net banking',
          'Implemented Firebase Analytics + WebEngage SDK, improving user retention by 18%',
          'Achieved 22% stability improvement, 30% faster startup, and 25% memory reduction',
          'Resolved 50+ issues via Crashlytics across 50+ device configurations on LambdaTest',
        ],
        keyResults: [
          { label: 'Users', value: '50,000+' },
          { label: 'Stability', value: '+22%' },
          { label: 'Startup Speed', value: '+30%' },
          { label: 'Bugs Fixed', value: '50+' },
        ],
        tags2: ['Flutter','BLoC','Razorpay','WebEngage','Firebase Analytics','LambdaTest'],
      },
    ],
    current: true,
  },
  {
    date: 'August 2021 – May 2024',
    title: 'Junior Software Engineer',
    subtitle: 'Flutter Developer',
    company: 'Network Components Private Limited',
    location: 'Pune, Maharashtra',
    description:
      'Developed IoT-based mobile applications for smart home automation systems. Collaborated with hardware engineers and backend developers to create intuitive interfaces for connected devices.',
    projects: [
      {
        name: 'Enviroklenz & Clouzer Edge — IoT Smart Home Apps',
        tags: ['Flutter Mobile'],
        description: 'Smart home control apps for lights, HVAC, motorized shades, and air purifiers.',
        achievements: [
          'Delivered 3 IoT Flutter apps with shared reusable component library — 5,000+ installations',
          'Built control interfaces for lights, HVAC, motorized shades, and air purifiers',
          'Implemented BLE and WiFi provisioning with secure pairing flows and firmware updates',
          'Integrated MQTT and WebSockets for bi-directional communication between app and IoT devices',
          'Achieved 75% code coverage and reduced critical bugs by 35%',
          '🏆 Awarded "Star of the Quarter" — Q4 2021',
        ],
        keyResults: [
          { label: 'Apps Delivered', value: '3' },
          { label: 'Installations', value: '5,000+' },
          { label: 'Code Coverage', value: '75%' },
          { label: 'Bug Reduction', value: '35%' },
        ],
        tags2: ['Flutter','Dart','BLoC','BLE','MQTT','WebSockets','Firebase'],
      },
    ],
    current: false,
  },
];