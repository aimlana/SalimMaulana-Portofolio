import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Trubers
import tb1 from '../assets/images/Trubers/1.png';
import tb2 from '../assets/images/Trubers/2.png';
import tb3 from '../assets/images/Trubers/3.png';
import tb4 from '../assets/images/Trubers/4.png';
import tb5 from '../assets/images/Trubers/5.png';
import tb6 from '../assets/images/Trubers/6.png';

// WAJO
import wajo1 from '../assets/images/Wajo/1.png';
import wajo2 from '../assets/images/Wajo/2.png';
import wajo3 from '../assets/images/Wajo/3.png';
import wajo4 from '../assets/images/Wajo/4.png';
import wajo5 from '../assets/images/Wajo/5.png';
import wajo6 from '../assets/images/Wajo/6.png';

// Ratu-Boga
import rb1 from '../assets/images/Ratu-Boga/1.png';
import rb2 from '../assets/images/Ratu-Boga/2.png';
import rb3 from '../assets/images/Ratu-Boga/3.png';
import rb4 from '../assets/images/Ratu-Boga/4.png';
import rb5 from '../assets/images/Ratu-Boga/5.png';
import rb6 from '../assets/images/Ratu-Boga/6.png';

// SI-FA
import sifa1 from '../assets/images/SI-FA/1.png';
import sifa2 from '../assets/images/SI-FA/2.png';
import sifa3 from '../assets/images/SI-FA/3.png';
import sifa4 from '../assets/images/SI-FA/4.png';
import sifa5 from '../assets/images/SI-FA/5.png';
import sifa6 from '../assets/images/SI-FA/6.png';

// Travloc
import trv1 from '../assets/images/Travloc/1.png';
import trv2 from '../assets/images/Travloc/2.png';
import trv3 from '../assets/images/Travloc/3.png';
import trv4 from '../assets/images/Travloc/4.png';
import trv5 from '../assets/images/Travloc/5.png';
import trv6 from '../assets/images/Travloc/6.png';

// Portofolio
import porto1 from '../assets/images/Portofolio/1.png';
import porto2 from '../assets/images/Portofolio/2.png';
import porto3 from '../assets/images/Portofolio/3.png';
import porto4 from '../assets/images/Portofolio/4.png';
import porto5 from '../assets/images/Portofolio/5.png';
import porto6 from '../assets/images/Portofolio/6.png';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // atau 'smooth' untuk animasi
    });
  }, [projectId]);

  // Data project (sama seperti di ProjectSection dengan detail lengkap)
  const projects = {
    'ratu-boga-order': {
      id: 'ratu-boga-order',
      title: 'RM. Ratu Boga QR Order System',
      subtitle: 'Fullstack Food Ordering System',
      description:
        'End-to-end web-based self-ordering system using QR codes with real-time order processing via WebSocket.',
      fullDescription:
        'RM. Ratu Boga QR Order System is a comprehensive web application designed to revolutionize the dining experience. This full-stack solution allows customers to scan QR codes at their tables, browse digital menus, place orders, and make payments—all without waiter intervention. The system features real-time order tracking, admin dashboard for restaurant management, and automated notifications.',
      tags: [
        'React',
        'Express',
        'Node.js',
        'WebSocket',
        'MongoDB',
        'JWT',
        'REST API',
      ],
      color: '#FF6B6B',
      accentColor: 'bg-[#FF6B6B]',
      projectLink: 'https://ratuboga-order.example.com',
      githubLink: 'https://github.com/salimmlana/ratu-boga-order',
      images: [rb1, rb2, rb3, rb4, rb5, rb6],
      features: [
        'QR Code based ordering system for contactless dining',
        'Real-time order updates with WebSocket technology',
        'Comprehensive admin dashboard for menu and order management',
        'Secure payment integration and transaction history',
        'Responsive design optimized for mobile and desktop',
        'Multi-language support for international customers',
      ],
      role: 'Full Stack Developer',
      duration: '5 months',
      year: '2025',
      challenge:
        'Creating a seamless ordering experience while handling real-time updates across multiple devices.',
      solution:
        'Implemented WebSocket for instant updates and designed an intuitive UI for both customers and admins.',
    },
    trubers: {
      id: 'trubers',
      title: 'TRUBERS',
      subtitle: 'Trust Builder Telkomsel Sulawesi',
      description:
        'Content evaluation and leaderboard system developed during Telkomsel internship.',
      fullDescription:
        'TRUBERS is an internal platform for Telkomsel Regional Sulawesi to evaluate content creator performance. The system scrapes social media data, calculates engagement scores, and displays leaderboards. Features include admin dashboard for content management, automated scoring algorithms, and comprehensive analytics.',
      tags: [
        'React',
        'Express',
        'JavaScript',
        'Web Scraping',
        'Chart.js',
        'Puppeteer',
        'Data Visualization',
      ],
      color: '#4ECDC4',
      accentColor: 'bg-[#4ECDC4]',
      projectLink: 'https://trubers.example.com',
      githubLink: 'https://github.com/salimmlana/trubers',
      images: [tb1, tb2, tb3, tb4, tb5, tb6],
      features: [
        'Social media data scraping from TikTok & Instagram using Puppeteer',
        'Automated content scoring algorithm with customizable weights',
        'Interactive leaderboard with real-time ranking updates',
        'Comprehensive admin dashboard for content and user management',
        'Data visualization with interactive charts and graphs',
        'Export functionality for reports in multiple formats',
      ],
      role: 'Frontend Developer & Data Scraper',
      duration: '5 months',
      year: '2025',
      challenge:
        'Handling rate limiting and dynamic content from social media platforms.',
      solution:
        'Implemented rotating proxies and headless browser automation with error recovery.',
    },
    wajo: {
      id: 'wajo',
      title: 'WAJO',
      subtitle: 'WhatsApp Jadwal Otomatis',
      description: 'Automated WhatsApp scheduling and broadcast system.',
      fullDescription:
        'WAJO (WhatsApp Jadwal Otomatis) is an automated messaging system designed to help communities manage scheduled communications. The platform allows administrators to create message templates, schedule broadcasts, and manage contact lists. Built with React frontend and Express backend.',
      tags: [
        'React',
        'Express',
        'JavaScript',
        'WhatsApp API',
        'Node.js',
        'Cron Jobs',
        'MongoDB',
      ],
      color: '#06D6A0',
      accentColor: 'bg-[#06D6A0]',
      projectLink: 'https://wajo.example.com',
      githubLink: 'https://github.com/salimmlana/wajo',
      images: [wajo1, wajo2, wajo3, wajo4, wajo5, wajo6],
      features: [
        'Automated WhatsApp message scheduling with cron jobs',
        'Contact list management with CSV import/export',
        'Message template system with variables',
        'Broadcast analytics and delivery reports',
        'Multi-admin support with role-based permissions',
        'Message queue management for rate limiting',
      ],
      role: 'Full Stack Developer',
      duration: '3 months',
      year: '2025',
      challenge:
        'Integrating with WhatsApp API while maintaining message delivery reliability.',
      solution:
        'Implemented message queue system with retry logic and delivery status tracking.',
    },
    travloc: {
      id: 'travloc',
      title: 'Travloc',
      subtitle: 'Tourism & UMKM Promotion Platform',
      description: 'Capstone project for Baparekraf Digital Talent 2024.',
      fullDescription:
        'Travloc is a tourism and local business promotion platform created as a capstone project for Baparekraf Digital Talent 2024. The platform connects tourists with local businesses, featuring destination guides, business listings, booking systems, and user reviews.',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Figma',
        'UI/UX Design',
        'Responsive Design',
        'Local Storage',
      ],
      color: '#FFD166',
      accentColor: 'bg-[#FFD166]',
      projectLink: null,
      githubLink: 'https://github.com/salimmlana/travloc',
      images: [trv1, trv2, trv3, trv4, trv5, trv6],
      features: [
        'Destination directory with advanced filtering by category, rating, and location',
        'Comprehensive local business listings with photos and descriptions',
        'Booking and reservation system with calendar integration',
        'User review and rating system with moderation tools',
        'Responsive mobile-first design with offline capabilities',
        'Interactive maps with location markers and directions',
      ],
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 months',
      year: '2024',
      challenge:
        'Creating an intuitive interface for both tourists and business owners.',
      solution:
        'Conducted user research and created separate user flows for different user types.',
    },
    'academic-manager': {
      id: 'academic-manager',
      title: 'SI-FA Academic Information System',
      subtitle: 'Faculty Information System',
      description: 'UI/UX design project for Faculty of Pharmacy.',
      fullDescription:
        'Academic Information System for Faculty of Pharmacy, Universitas Hasanuddin. This project involved comprehensive UI/UX design following design system principles. The system manages student data, course schedules, academic records, and faculty administration.',
      tags: [
        'UI/UX',
        'Figma',
        'Design System',
        'Prototyping',
        'Wireframing',
        'User Research',
        'Accessibility',
      ],
      color: '#9D4EDD',
      accentColor: 'bg-[#9D4EDD]',
      projectLink: 'https://sifa.example.com',
      githubLink: null,
      images: [sifa1, sifa2, sifa3, sifa4, sifa5, sifa6],
      features: [
        'Comprehensive design system with color palette, typography, and components',
        'Interactive prototypes with user flow documentation',
        'Accessibility compliance (WCAG 2.1 AA standards)',
        'Responsive design patterns for all device sizes',
        'Dashboard designs with data visualization components',
        'User authentication and role-based interface variations',
      ],
      role: 'UI/UX Designer',
      duration: '6 months',
      year: '2023',
      challenge:
        'Designing for multiple user roles with different permissions and needs.',
      solution:
        'Created role-based interface variations and conducted usability testing with actual users.',
    },
    'portfolio-v3': {
      id: 'portfolio-v3',
      title: 'Personal Portfolio V3',
      subtitle: 'Modern Developer Portfolio',
      description:
        'Personal portfolio website built with React and Tailwind CSS.',
      fullDescription:
        'Personal portfolio website version 3 showcasing projects, experience, and skills. Built with modern technologies including React, Tailwind CSS, and Framer Motion for animations. Features dark/light mode, responsive design, and interactive elements.',
      tags: [
        'React',
        'Tailwind',
        'Vite',
        'Framer Motion',
        'Responsive Design',
        'Animation',
        'Performance',
      ],
      color: '#FF9E6D',
      accentColor: 'bg-[#FF9E6D]',
      projectLink: 'https://salimmaulana.example.com',
      githubLink: 'https://github.com/salimmlana/portfolio-v3',
      images: [porto1, porto2, porto3, porto4, porto5, porto6],
      features: [
        'Dark/light mode toggle with system preference detection',
        'Smooth animations and page transitions using Framer Motion',
        'Fully responsive design optimized for all screen sizes',
        'Project filtering and categorization system',
        'Contact form with validation and spam protection',
        'Performance optimization with code splitting and lazy loading',
      ],
      role: 'Frontend Developer & Designer',
      duration: '2 months',
      year: '2024',
      challenge: 'Balancing visual appeal with performance and accessibility.',
      solution:
        'Implemented performance optimizations while maintaining WCAG accessibility standards.',
    },
  };

  // Jika tidak ada projectId, tampilkan daftar semua project
  if (!projectId) {
    return (
      <>
        <Header />
        <div className='min-h-screen py-20 px-5 md:px-12 lg:px-13 font-alumni'>
          <button
            onClick={() => navigate('/')}
            className='flex items-center gap-2 text-black hover:text-crayola transition-colors duration-300 mb-12'
          >
            <ArrowLeft size={20} />
            <span className='text-xl'>Back to Home</span>
          </button>

          <h2 className='font-alumni text-6xl md:text-9xl lg:text-[10rem] text-black font-medium leading-[75%] mb-16'>
            All Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Object.values(projects).map((project) => (
              <button
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className='group text-left border border-gray-200 rounded-none p-6 hover:border-crayola transition-all duration-300'
              >
                <div className='aspect-video overflow-hidden mb-4'>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <h3 className='text-2xl font-medium text-black mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-gray-100 text-gray-700 text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const project = projects[projectId];

  if (!project) {
    return (
      <>
        <Header />
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h2 className='font-alumni text-4xl text-black mb-4'>
              Project not found
            </h2>
            <button
              onClick={() => navigate('/')}
              className='text-crayola hover:underline'
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Fungsi untuk menentukan grid berdasarkan jumlah gambar
  const getGridClass = (imageCount) => {
    if (imageCount === 1) return 'grid-cols-1';
    if (imageCount === 2) return 'grid-cols-1 md:grid-cols-2';
    if (imageCount === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (imageCount === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    if (imageCount >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1';
  };

  return (
    <>
      <Header />

      <main className='min-h-screen py-12 px-5 md:px-12 lg:px-13 font-alumni'>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className='flex items-center gap-2 text-black hover:text-crayola transition-colors duration-300 mb-12 group'
        >
          <ArrowLeft
            size={20}
            className='group-hover:-translate-x-1 transition-transform'
          />
          <span className='text-xl'>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className='mb-12'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8'>
            <div>
              <h1 className='font-alumni text-6xl md:text-8xl lg:text-[6rem] text-black font-medium leading-[85%] mb-4'>
                {project.title}
              </h1>
              <p className='text-2xl md:text-3xl text-gray-700'>
                {project.subtitle}
              </p>
            </div>

            {/* Project Links - Responsive dan fleksibel */}
            <div className='flex flex-col sm:flex-row gap-4'>
              {/* Live Demo Button */}
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white hover:bg-crayola transition-all duration-300 group whitespace-nowrap'
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}

              {/* Source Code Button */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`
                              inline-flex items-center justify-center gap-2 px-8 py-4 
                              ${
                                project.projectLink
                                  ? 'border-2 border-black text-black hover:bg-black hover:text-white'
                                  : 'bg-black text-white hover:bg-crayola'
                              }
                              transition-all duration-300 whitespace-nowrap
                            `}
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
              )}

              {/* Jika tidak ada link sama sekali */}
              {!project.projectLink && !project.githubLink && (
                <div className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-500 whitespace-nowrap'>
                  <span>Links coming soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Meta Info */}
          <div className='flex flex-wrap gap-6 py-6 border-t border-b border-gray-200'>
            <div className='flex items-center gap-2'>
              <User size={18} className='text-gray-500' />
              <span className='text-lg'>Role: {project.role}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar size={18} className='text-gray-500' />
              <span className='text-lg'>Year: {project.year}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock size={18} className='text-gray-500' />
              <span className='text-lg'>Duration: {project.duration}</span>
            </div>
          </div>
        </div>

        {/* Project Images Grid */}
        <div className='mb-16'>
          <h3 className='font-alumni text-3xl md:text-4xl text-black font-medium mb-8'>
            Project Gallery
          </h3>
          <div className={`grid ${getGridClass(project.images.length)} gap-4`}>
            {project.images.map((img, index) => (
              <div
                key={index}
                className='aspect-video overflow-hidden border border-gray-200 hover:border-crayola transition-colors duration-300'
              >
                <img
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className='mb-16'>
          <h3 className='font-alumni text-3xl md:text-4xl text-black font-medium mb-8'>
            Project Overview
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <p className='text-xl md:text-2xl text-gray-700 leading-relaxed'>
                {project.fullDescription}
              </p>
            </div>
            <div className='space-y-6'>
              {/* Challenge & Solution */}
              <div>
                <h4 className='text-xl font-medium text-black mb-3'>
                  Challenge
                </h4>
                <p className='text-gray-700'>{project.challenge}</p>
              </div>
              <div>
                <h4 className='text-xl font-medium text-black mb-3'>
                  Solution
                </h4>
                <p className='text-gray-700'>{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className='mb-16'>
          <h3 className='font-alumni text-3xl md:text-4xl text-black font-medium mb-8'>
            Key Features
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {project.features.map((feature, index) => (
              <div
                key={index}
                className='border border-gray-200 p-6 hover:border-crayola transition-colors duration-300'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-2 h-2 bg-crayola'></div>
                  <span className='text-lg font-medium text-black'>
                    Feature {index + 1}
                  </span>
                </div>
                <p className='text-gray-700'>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className='mb-12'>
          <h3 className='font-alumni text-3xl md:text-4xl text-black font-medium mb-8'>
            Technologies Used
          </h3>
          <div className='flex flex-wrap gap-3'>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className='px-5 py-2 border border-gray-300 text-gray-700 text-lg hover:border-crayola hover:text-crayola transition-all duration-300'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className='border-t border-gray-200 pt-12'>
          <h3 className='font-alumni text-3xl md:text-4xl text-black font-medium mb-8 text-center'>
            Explore Other Projects
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Object.values(projects)
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <button
                  key={otherProject.id}
                  onClick={() => navigate(`/projects/${otherProject.id}`)}
                  className='group text-left'
                >
                  <div className='aspect-video overflow-hidden mb-4'>
                    <img
                      src={otherProject.images[0]}
                      alt={otherProject.title}
                      className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <h4 className='text-xl font-medium text-black group-hover:text-crayola transition-colors duration-300'>
                    {otherProject.title}
                  </h4>
                  <p className='text-gray-600'>{otherProject.subtitle}</p>
                </button>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;
