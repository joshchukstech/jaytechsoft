import { CompanyInfo, ServiceItem, ProjectItem } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'JayTechSoft',
  legalName: 'JayTechSoft Energy Solution Ltd',
  tagline: 'Energy. Technology. Network Solutions.',
  rcNumber: '9569988',
  address: 'West of Mines, Jos 930105',
  city: 'Jos',
  state: 'Plateau State',
  country: 'Nigeria',
  phone: '07039710652',
  phoneRaw: '+2347039710652',
  email: 'jaytechsoft@gmail.com',
};

export const COMPANY_HIGHLIGHTS = [
  {
    id: 'solar',
    title: 'Professional Solar Solutions',
    description: 'Customized photovoltaic systems designed for consistent energy generation and resilience.',
    icon: 'SunMedium',
    badge: 'Core Specialty'
  },
  {
    id: 'energy',
    title: 'Reliable Energy Systems',
    description: 'Dependable inverter setups and energy storage engineered to safeguard daily operations.',
    icon: 'Zap',
    badge: 'Power Reliability'
  },
  {
    id: 'ict',
    title: 'Technology & ICT Solutions',
    description: 'Modern digital infrastructure and technical consultancy empowering businesses and organizations.',
    icon: 'Cpu',
    badge: 'Digital Systems'
  },
  {
    id: 'network',
    title: 'Network & Security Solutions',
    description: 'Robust structured cabling, LAN connectivity, and 24/7 CCTV surveillance architecture.',
    icon: 'ShieldCheck',
    badge: 'Connectivity & Safety'
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'solar-energy',
    title: 'Solar Energy Solutions',
    category: 'solar',
    isFeatured: true,
    description: 'Professional solar power solutions designed to provide reliable and efficient alternative energy for homes, businesses and organizations.',
    features: [
      'Solar system design',
      'Solar panel installation',
      'Inverter systems',
      'Battery storage',
      'Solar system maintenance',
      'Energy assessment'
    ],
    iconName: 'Sun',
    image: '/public/jaytechsoft1.webp'
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    category: 'electrical',
    description: 'Professional electrical installation, maintenance and troubleshooting services for residential and commercial applications.',
    features: [
      'Electrical wiring',
      'Electrical installations',
      'Fault diagnosis',
      'Maintenance',
      'Power system solutions'
    ],
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80'
  },
  // {
  //   id: 'ict-solutions',
  //   title: 'Technology & ICT Solutions',
  //   category: 'tech',
  //   description: 'Practical technology solutions that help businesses and organizations improve their digital operations.',
  //   features: [
  //     'ICT solutions',
  //     'Computer/network support',
  //     'Technology consulting',
  //     'Digital infrastructure'
  //   ],
  //   iconName: 'Laptop',
  //   image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
  // },
  {
    id: 'network-solutions',
    title: 'Network Solutions',
    category: 'network',
    description: 'Reliable network infrastructure designed to keep homes, offices and organizations connected.',
    features: [
      'LAN installation',
      'Network configuration',
      'Structured cabling',
      'Network troubleshooting',
      'Wi-Fi/network infrastructure'
    ],
    iconName: 'Network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cctv-surveillance',
    title: 'CCTV & Security Surveillance',
    category: 'cctv',
    description: 'Professional surveillance solutions designed to improve visibility and security for homes, offices and businesses.',
    features: [
      'CCTV installation',
      'Camera configuration',
      'Surveillance systems',
      'Maintenance and support'
    ],
    iconName: 'Camera',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80'
  },
  // {
  //   id: 'renewable-energy',
  //   title: 'Renewable Energy Solutions',
  //   category: 'renewable',
  //   description: 'Clean and sustainable energy solutions designed to reduce dependence on conventional power sources.',
  //   features: [
  //     'Clean energy assessments',
  //     'Hybrid power architecture',
  //     'Sustainable backup integration',
  //     'Energy efficiency planning'
  //   ],
  //   iconName: 'Leaf',
  //   image: '/public/jaytechsoft4.webp'
  // },
];

export const SOLAR_SPECIALTIES = [
  {
    title: 'Solar System Design',
    desc: 'Precision load profiling and technical sizing tailored to your specific appliances, operating hours, and peak consumption.',
    icon: 'Layers',
    details: 'Calculated array tilt, inverter capacity rating, and safety surge allowances.'
  },
  {
    title: 'Installation',
    desc: 'High-standard mechanical mounting and electrical integration by qualified technicians adhering to safety best practices.',
    icon: 'Hammer',
    details: 'Secure rooftop or ground mounting, weather-proof DC cabling, and clean trunking.'
  },
  {
    title: 'Inverter & Battery Systems',
    desc: 'Pure sine wave inverter pairing with high-capacity tubular or lithium battery storage configurations for uninterrupted power.',
    icon: 'BatteryCharging',
    details: 'Seamless changeover switching, battery protection relays, and smart charging.'
  },
  {
    title: 'Maintenance & Support',
    desc: 'Routine panel cleaning, terminal tightening, battery health checks, and rapid troubleshooting to preserve system longevity.',
    icon: 'ShieldCheck',
    details: 'Preventative check-ups, diagnostic testing, and system optimization.'
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Understand your energy, technology or networking needs through an initial discussion of your requirements.',
    icon: 'MessageSquareText'
  },
  {
    step: '02',
    title: 'Assessment',
    desc: 'Evaluate your requirements, conduct on-site or technical load sizing, and identify the appropriate solution.',
    icon: 'ClipboardCheck'
  },
  {
    step: '03',
    title: 'Installation',
    desc: 'Professionally implement the agreed solution using quality components, neat cabling, and rigorous safety tests.',
    icon: 'Settings'
  },
  {
    step: '04',
    title: 'Support',
    desc: 'Provide maintenance, troubleshooting and technical support to ensure your system performs dependably over time.',
    icon: 'LifeBuoy'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Professional Service',
    description: 'Solutions delivered with attention to quality and technical requirements.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Reliable Solutions',
    description: 'Practical systems designed around the customer\'s actual needs.',
    icon: 'Shield'
  },
  {
    title: 'Energy Expertise',
    description: 'Focused on professional solar and renewable energy solutions.',
    icon: 'Zap'
  },
  {
    title: 'Integrated Solutions',
    description: 'Energy, technology, networking and security services from one provider.',
    icon: 'Boxes'
  },
  {
    title: 'Customer-Focused Approach',
    description: 'We work to understand each customer\'s needs before recommending a solution.',
    icon: 'HeartHandshake'
  }
];

export const PROJECT_PLACEHOLDERS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Solar Energy Installation',
    category: 'Solar Installation',
    description: 'Professional solar system installation and setup.',
    scope: ['Rooftop solar PV deployment', 'Pure sine wave inverter setup', 'Battery backup integration', 'Protection & isolator units'],
    image: '/public/jaytechsoft6.webp',
    locationPlaceholder: 'Residential / Commercial Facility, Jos'
  },
  {
    id: 'proj-5',
    title: 'Inverter & Battery Backup Configuration',
    category: 'Solar Installation',
    description: 'Dedicated energy storage and automatic changeover system.',
    scope: ['Hybrid solar inverter', 'Deep-cycle energy storage bank', 'Automatic transfer switch (ATS)', 'Battery monitoring'],
    image: '/public/jaytechsoft4.webp',
    locationPlaceholder: 'Private Estate / Business Unit, Jos'
  },
  {
    id: 'proj-2',
    title: 'Commercial & Residential Electrical Setup',
    category: 'Electrical Installation',
    description: 'Professional electrical installation and distribution service.',
    scope: ['Conduit & trunking wiring', 'Distribution board installation', 'Surge & earth fault safety', 'Phase load balancing'],
    image: '/public/jaytechsoftwork.webp',
    locationPlaceholder: 'Commercial Building, Plateau State'
  },
  {
    id: 'proj-3',
    title: 'CCTV & Security Surveillance Setup',
    category: 'CCTV & Security',
    description: 'Professional surveillance systems and camera configuration.',
    scope: ['High-definition IP cameras', 'Network Video Recorder (NVR) setup', 'Remote mobile viewing configuration', 'Perimeter coverage design'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80',
    locationPlaceholder: 'Office & Facility Compound, Jos'
  },
  {
    id: 'proj-4',
    title: 'Structured Cabling & Network Infrastructure',
    category: 'Network Infrastructure',
    description: 'Reliable network infrastructure designed to keep operations connected.',
    scope: ['Cat6 structured cabling', 'Server rack & patch panel termination', 'Managed switch & access point routing', 'Wi-Fi mesh deployment'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
    locationPlaceholder: 'Corporate Office Setup, Plateau State'
  },
  {
    id: 'proj-6',
    title: 'Enterprise Wireless & ICT Workstation Network',
    category: 'Network Infrastructure',
    description: 'Practical technology & network support setup for digital operations.',
    scope: ['Workstation network connections', 'Secure firewall configuration', 'Uninterrupted network power', 'ICT connectivity support'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    locationPlaceholder: 'Organization Head Office, Jos'
  }
];
