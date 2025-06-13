// "use client";
// import './globals.css';
// import Head from "next/head";
// import Image from "next/image";
// import { Megaphone, User, Target, Database, Laptop } from "lucide-react";
// import { useState, useEffect } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// import LogoScroll from "@/components/LogoScroll";

// const slides = [
//   {
//     id: 1,
//     title: "We Are a B2B MARKETING",
//     highlight: "Solutions Company",
//     description:
//       "who specializes in providing high quality demand generation and lead generation services. We aim to be a trusted and valuable partner for B2B marketers and agencies by helping them execute their marketing programs and boost lead generation.",
//     buttonText: "Contact us",
//     image: "/images/slide2image.webp", // Marketing laptop image
//   },
//   {
//     id: 2,
//     title: "A Group of Experts",
//     highlight: "Planners",
//     description:
//       "At Quore B2B Marketing, we are passionate about helping businesses succeed. We take pride in delivering innovative and effective marketing solutions tailored to meet the unique needs of each client. Our team is dedicated to providing outstanding customer service and support every step of the way, ensuring our client partners achieve the results they desire.",
//     buttonText: "Learn More",
//     image: "/images/slide1image.webp", // Team meeting image
//   },
//   {
//     id: 3,
//     title: "Focus on Your",
//     highlight: "Business",
//     description:
//       "Our primary focus is on your business. Our goal is to ensure that you achieve maximum output and receive the best return on investment through our effective marketing strategies. We understand the importance of driving results while ensuring your business thrives.",
//     buttonText: "Contact us",
//     image: "/images/slide3image.webp", // Business meeting/presentation image
//   },
// ];

// const services = [
//   {
//     icon: <Megaphone size={24} className="text-green-500" />,
//     title: "Display Advertisement",
//     description:
//       "With our expertise in creating compelling digital campaigns, we are dedicated to helping businesses achieve unparalleled success in lead generation and customer acquisition.",
//   },
//   {
//     icon: <User size={24} className="text-green-500" />,
//     title: "Account-Based Marketing",
//     description:
//       "Account-based marketing (ABM) strategy encompasses a holistic approach that combines data-driven insights, cutting-edge technology, and personalized touch to help you win over target accounts and achieve exceptional ROI.",
//   },
//   {
//     icon: <Target size={24} className="text-green-500" />,
//     title: "Lead Generation",
//     description:
//       "Elevate your lead generation efforts and expand your reach through strategic content syndication with Quora B2B Marketing. Partner with us to drive quality leads and maximize your marketing impact.",
//   },
//   {
//     icon: <Database size={24} className="text-green-500" />,
//     title: "Data Solutions",
//     description:
//       "Why settle for outdated and unreliable data when you can harness the power of our Verified Database Solutions? Partner with Quora B2B Marketing today and unlock the potential of accurate and reliable data for your B2B marketing success.",
//   },
//   {
//     icon: <Laptop size={24} className="text-green-500" />,
//     title: "Web Development",
//     description:
//       "We provide end-to-end web development solutions, ensuring secure, scalable, and user-friendly digital experiences. Our expertise in modern technologies helps businesses establish a strong online presence and drive growth. From design to deployment, we deliver seamless and efficient web solutions.",
//   },
// ];

// export default function HomePage() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [counts, setCounts] = useState({
//     projects: 0,
//     comments: 0,
//     clients: 0,
//   });

//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const interval = duration / steps;

//     const increments = {
//       projects: 380 / steps,
//       comments: 3500 / steps,
//       clients: 100 / steps,
//     };

//     let current = { projects: 0, comments: 0, clients: 0 };
//     let step = 0;

//     const counterInterval = setInterval(() => {
//       if (step >= steps) {
//         clearInterval(counterInterval);
//         setCounts({ projects: 380, comments: 3500, clients: 100 });
//         return;
//       }

//       current.projects += increments.projects;
//       current.comments += increments.comments;
//       current.clients += increments.clients;

//       setCounts({
//         projects: Math.floor(current.projects),
//         comments: Math.floor(current.comments),
//         clients: Math.floor(current.clients),
//       });

//       step++;
//     }, interval);

//     return () => clearInterval(counterInterval);
//   }, []);

//   return (
//     <>
//      <Head>
//         <title>Contact Us | Quore B2B Marketing</title>
//         <meta name="description" content="Get in touch with Quore B2B Marketing. Contact details for our offices in India and USA, or send us a message directly." />
//         <meta name="keywords" content="contact, Quore B2B, marketing, Pune, Dallas, business inquiry" />
//       </Head>
//       {/* Hero Swiper Section */}
//       <div className="bg-white py-16 relative">
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={1}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           navigation={{
//             nextEl: ".swiper-button-next-custom",
//             prevEl: ".swiper-button-prev-custom",
//           }}
//           modules={[Autoplay, Navigation]}
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id}>
//               <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
//                 <div className="w-full md:w-1/2 text-left space-y-4">
//                   <p className="text-[#00d9a6] font-semibold">
//                     8 YEARS OF EXPERIENCE
//                   </p>
//                   <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
//                     {slide.title} <br />
//                     <span className="text-[#00d9a6]">{slide.highlight}</span>
//                   </h1>
//                   <p className="text-gray-600 text-sm sm:text-base">
//                     {slide.description}
//                   </p>
//                   <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white font-bold  shadow-md hover:scale-105 transition-transform duration-300">
                  
//                     {slide.buttonText}
//                   </button>
//                 </div>
//                 <div className="w-full md:w-1/2 flex justify-center">
//                  <div className="w-[300px] sm:w-[400px] md:w-[500px] aspect-square rounded-full border-[10px] border-[#00d9a6] overflow-hidden">

//                     <Image
//                       src={slide.image}
//                       alt="Slide Image"
//                       width={500}
//                       height={500}
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
       
//         <div className="swiper-button-prev-custom absolute bottom-6 left-1/2 transform -translate-x-[120%] z-10 cursor-pointer">
//           <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
//             <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
//           </div>
//         </div>

//         <div className="swiper-button-next-custom absolute bottom-6 left-1/2 transform translate-x-[120%] z-10 cursor-pointer">
//           <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
//             <ChevronRightIcon className="w-6 h-6 text-gray-600" />
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//  <section className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-10 md:py-20 bg-white flex flex-col md:flex-row justify-between items-center gap-10 max-w-screen-2xl mx-auto">
//   <div className="md:w-1/2 space-y-6">
//     <p className="text-lg md:text-xl lg:text-4xl font-medium leading-relaxed text-gray-700">
//       We combine{" "}
//       <span className="text-green-500 font-semibold">marketing</span>{" "}
//       methods for each client
//       <span className="text-teal-500 font-semibold"> generating </span>{" "}
//       Qualified leads,
//       <br />
//       Display advertising, Email Marketing, Content Syndication.
//     </p>
//     <button className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300">
//       VIEW ALL
//     </button>
//   </div>

//   <div className="md:w-1/2 w-full">
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {services.slice(0, 4).map((service, index) => (
//         <div
//           key={index}
//           onMouseEnter={() => setActiveIndex(index)}
//           onMouseLeave={() => setActiveIndex(null)}
//           className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden
//             ${
//               activeIndex === index
//                 ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
//                 : "bg-white text-gray-800"
//             }`}
//         >
//           <div className="mb-2 flex-shrink-0">
//             {activeIndex === index ? (
//               <div className="text-white">{service.icon}</div>
//             ) : (
//               service.icon
//             )}
//           </div>
//           <h4
//             className={`text-xl font-semibold flex-shrink-0 ${
//               activeIndex === index ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {service.title}
//           </h4>
//           <p
//             className={`text-sm leading-snug flex-1 overflow-hidden ${
//               activeIndex === index ? "text-white/90" : "text-gray-600"
//             }`}
//           >
//             {service.description}
//           </p>
//         </div>
//       ))}
//     </div>

//     {services.length > 4 && (
//       <div className="flex justify-center mt-6">
//         <div
//           onMouseEnter={() => setActiveIndex(4)}
//           onMouseLeave={() => setActiveIndex(null)}
//           className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden w-full sm:w-[calc(50%-0.75rem)] max-w-[400px]
//             ${
//               activeIndex === 4
//                 ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
//                 : "bg-white text-gray-800"
//             }`}
//         >
//           <div className="mb-2 flex-shrink-0">
//             {activeIndex === 4 ? (
//               <div className="text-white">{services[4].icon}</div>
//             ) : (
//               services[4].icon
//             )}
//           </div>
//           <h4
//             className={`text-xl font-semibold flex-shrink-0 ${
//               activeIndex === 4 ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {services[4].title}
//           </h4>
//           <p
//             className={`text-sm leading-snug flex-1 overflow-hidden ${
//               activeIndex === 4 ? "text-white/90" : "text-gray-600"
//             }`}
//           >
//             {services[4].description}
//           </p>
//         </div>
//       </div>
//     )}
//   </div>
// </section>

// {/* Mission Section */}
// <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 max-w-screen-2xl mx-auto">
//   <div className="relative w-full max-w-[500px] h-[400px] rounded-2xl bg-gradient-to-br from-green-400 to-lime-400 p-3 flex items-center justify-center group">
//     <Image
//       src="/images/missionimage.webp"
//       alt="Mission Image"
//       width={500}
//       height={550}
//       className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 object-cover"
//     />
//   </div>

//   <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
//     <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
//       Learn more about our <span className="text-green-500">missions</span>
//     </h2>
//     <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//       Quora B2B Marketing's mission is to help businesses achieve their
//       growth objectives by delivering innovative, data-driven marketing
//       strategies tailored to the unique needs of B2B companies. They focus
//       on creating measurable results through targeted campaigns, lead
//       generation, and customer engagement, ensuring their clients stay
//       competitive in their respective industries. Their approach often
//       combines creativity with analytics to optimize marketing efforts and
//       drive ROI for their clients.
//     </p>
//     <button className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300">
//       Read More
//     </button>
//   </div>
// </section>


// {/* Counter Section */}
// <section className="w-full py-16 bg-gradient-to-r from-green-400 to-lime-400 text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-0">
//     <div>
//       <p className="text-3xl sm:text-4xl font-bold">{counts.projects}+</p>
//       <p className="text-sm sm:text-base">PROJECTS</p>
//     </div>
//     <div>
//       <p className="text-3xl sm:text-4xl font-bold">{counts.comments}+</p>
//       <p className="text-sm sm:text-base">USERS' COMMENTS</p>
//     </div>
//     <div>
//       <p className="text-3xl sm:text-4xl font-bold">{counts.clients}+</p>
//       <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
//     </div>
//   </div>
// </section>

// {/* We Love What We Do Section */}
// <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-10">
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//     We <span className="text-green-500">Love</span> What <br className="hidden sm:block" /> We Do
//   </h2>
//   <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
//     <li>
//       ✓ We love forging strong, lasting connections—not just between
//       businesses and their clients, but also with our own partners. Your
//       success is our success, and we thrive on collaboration.
//     </li>
//     <li>
//       ✓ B2B marketing is anything but simple, and that's what excites us!
//       We love diving deep into your industry, understanding your unique
//       challenges, and crafting tailored solutions that deliver real
//       impact.
//     </li>
//     <li>
//       ✓ We're passionate about blending creativity with data-driven
//       strategies. Whether it's crafting compelling content or designing
//       innovative campaigns, we love finding the perfect balance between
//       art and analytics.
//     </li>
//     <li>
//       ✓ There's nothing more rewarding than seeing our clients grow. We
//       love being part of your journey, helping you reach new markets,
//       generate leads, and achieve your business goals.
//     </li>
//     <li>
//       ✓ The world of B2B marketing is always evolving, and we love staying
//       on the cutting edge. From emerging technologies to the latest
//       trends, we're constantly learning and adapting to keep your business
//       ahead of the competition.
//     </li>
//   </ul>
// </section>

//       <LogoScroll />
     
//     </>
       
//   );
// }

"use client";
import './globals.css';
import Head from "next/head";
import Image from "next/image";
import { Megaphone, User, Target, Database, Laptop } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import LogoScroll from "@/components/LogoScroll";

// SEO-optimized metadata
const siteMetadata = {
  title: "Quore B2B Marketing Solutions | Lead Generation & Digital Marketing Services",
  description: "Expert B2B marketing solutions company specializing in lead generation, account-based marketing, display advertising, and data solutions. 8+ years experience, 380+ projects, 100+ happy clients.",
  keywords: "B2B marketing, lead generation, account-based marketing, display advertising, data solutions, web development, digital marketing, business growth, ROI optimization",
  author: "Quore B2B Marketing",
  url: "https://quoreb2bmarketing.com",
  image: "/images/og-image.webp"
};

const slides = [
  {
    id: 1,
    title: "We Are a B2B MARKETING",
    highlight: "Solutions Company",
    description: "who specializes in providing high quality demand generation and lead generation services. We aim to be a trusted and valuable partner for B2B marketers and agencies by helping them execute their marketing programs and boost lead generation.",
    buttonText: "Contact us",
    image: "/images/slide2image.webp",
    alt: "B2B marketing solutions and lead generation services"
  },
  {
    id: 2,
    title: "A Group of Experts",
    highlight: "Planners",
    description: "At Quore B2B Marketing, we are passionate about helping businesses succeed. We take pride in delivering innovative and effective marketing solutions tailored to meet the unique needs of each client. Our team is dedicated to providing outstanding customer service and support every step of the way, ensuring our client partners achieve the results they desire.",
    buttonText: "Learn More",
    image: "/images/slide1image.webp",
    alt: "Expert B2B marketing team collaboration and planning"
  },
  {
    id: 3,
    title: "Focus on Your",
    highlight: "Business",
    description: "Our primary focus is on your business. Our goal is to ensure that you achieve maximum output and receive the best return on investment through our effective marketing strategies. We understand the importance of driving results while ensuring your business thrives.",
    buttonText: "Contact us",
    image: "/images/slide3image.webp",
    alt: "Business growth and ROI optimization strategies"
  },
];

const services = [
  {
    icon: <Megaphone size={24} className="text-green-500" />,
    title: "Display Advertisement",
    description: "With our expertise in creating compelling digital campaigns, we are dedicated to helping businesses achieve unparalleled success in lead generation and customer acquisition.",
    schema: {
      "@type": "Service",
      "name": "Display Advertisement",
      "description": "Digital display advertising campaigns for lead generation and customer acquisition"
    }
  },
  {
    icon: <User size={24} className="text-green-500" />,
    title: "Account-Based Marketing",
    description: "Account-based marketing (ABM) strategy encompasses a holistic approach that combines data-driven insights, cutting-edge technology, and personalized touch to help you win over target accounts and achieve exceptional ROI.",
    schema: {
      "@type": "Service",
      "name": "Account-Based Marketing",
      "description": "Strategic ABM approach combining data insights and personalized marketing for target accounts"
    }
  },
  {
    icon: <Target size={24} className="text-green-500" />,
    title: "Lead Generation",
    description: "Elevate your lead generation efforts and expand your reach through strategic content syndication with Quore B2B Marketing. Partner with us to drive quality leads and maximize your marketing impact.",
    schema: {
      "@type": "Service",
      "name": "Lead Generation",
      "description": "Strategic lead generation and content syndication services for B2B businesses"
    }
  },
  {
    icon: <Database size={24} className="text-green-500" />,
    title: "Data Solutions",
    description: "Why settle for outdated and unreliable data when you can harness the power of our Verified Database Solutions? Partner with Quore B2B Marketing today and unlock the potential of accurate and reliable data for your B2B marketing success.",
    schema: {
      "@type": "Service",
      "name": "Data Solutions",
      "description": "Verified database solutions and data management for B2B marketing success"
    }
  },
  {
    icon: <Laptop size={24} className="text-green-500" />,
    title: "Web Development",
    description: "We provide end-to-end web development solutions, ensuring secure, scalable, and user-friendly digital experiences. Our expertise in modern technologies helps businesses establish a strong online presence and drive growth. From design to deployment, we deliver seamless and efficient web solutions.",
    schema: {
      "@type": "Service",
      "name": "Web Development",
      "description": "End-to-end web development solutions for secure, scalable digital experiences"
    }
  },
];

// Company statistics for credibility
const stats = {
  projects: { count: 380, label: "PROJECTS" },
  comments: { count: 3500, label: "USERS' COMMENTS" },
  clients: { count: 100, label: "HAPPY CLIENTS" }
};

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [counts, setCounts] = useState({
    projects: 0,
    comments: 0,
    clients: 0,
  });

  // Optimized counter animation with useCallback
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const increments = {
      projects: stats.projects.count / steps,
      comments: stats.comments.count / steps,
      clients: stats.clients.count / steps,
    };

    let current = { projects: 0, comments: 0, clients: 0 };
    let step = 0;

    const counterInterval = setInterval(() => {
      if (step >= steps) {
        clearInterval(counterInterval);
        setCounts({
          projects: stats.projects.count,
          comments: stats.comments.count,
          clients: stats.clients.count
        });
        return;
      }

      current.projects += increments.projects;
      current.comments += increments.comments;
      current.clients += increments.clients;

      setCounts({
        projects: Math.floor(current.projects),
        comments: Math.floor(current.comments),
        clients: Math.floor(current.clients),
      });

      step++;
    }, interval);

    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    const cleanup = animateCounters();
    return cleanup;
  }, [animateCounters]);

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quore B2B Marketing",
    "description": siteMetadata.description,
    "url": siteMetadata.url,
    "logo": `${siteMetadata.url}/images/logo.webp`,
    "foundingDate": "2016",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/quore-b2b-marketing",
      "https://twitter.com/quoreb2b"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2B Marketing Services",
      "itemListElement": services.map(service => service.schema)
    }
  };

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.image} />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Quore B2B Marketing" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.image} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={siteMetadata.url} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      {/* Hero Swiper Section */}
      <section className="bg-white py-16 relative" aria-label="Hero banner with company services">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Autoplay, Navigation]}
          className="hero-swiper"
          aria-label="Hero carousel"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
                <div className="w-full md:w-1/2 text-left space-y-4">
                  <p className="text-[#00d9a6] font-semibold" aria-label="Company experience">
                    8 YEARS OF EXPERIENCE
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                    {slide.title} <br />
                    <span className="text-[#00d9a6]">{slide.highlight}</span>
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {slide.description}
                  </p>
                  <button 
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white font-bold shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    aria-label={`${slide.buttonText} - Get in touch with our B2B marketing experts`}
                  >
                    {slide.buttonText}
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-[300px] sm:w-[400px] md:w-[500px] aspect-square rounded-full border-[10px] border-[#00d9a6] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-full"
                      priority={slide.id === 1}
                      loading={slide.id === 1 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev-custom absolute bottom-6 left-1/2 transform -translate-x-[120%] z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Previous slide"
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </div>
        </button>

        <button 
          className="swiper-button-next-custom absolute bottom-6 left-1/2 transform translate-x-[120%] z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Next slide"
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </div>
        </button>
      </section>

      {/* Services Section */}
      <section className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-10 md:py-20 bg-white flex flex-col md:flex-row justify-between items-center gap-10 max-w-screen-2xl mx-auto" aria-labelledby="services-heading">
        <div className="md:w-1/2 space-y-6">
          <h2 id="services-heading" className="text-lg md:text-xl lg:text-4xl font-medium leading-relaxed text-gray-700">
            We combine{" "}
            <span className="text-green-500 font-semibold">marketing</span>{" "}
            methods for each client
            <span className="text-teal-500 font-semibold"> generating </span>{" "}
            Qualified leads,
            <br />
            Display advertising, Email Marketing, Content Syndication.
          </h2>
          <button 
            className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="View all our B2B marketing services"
          >
            VIEW ALL
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list" aria-label="Our marketing services">
            {services.slice(0, 4).map((service, index) => (
              <article
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden
                  ${
                    activeIndex === index
                      ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
                      : "bg-white text-gray-800"
                  }`}
                role="listitem"
                aria-labelledby={`service-${index}-title`}
              >
                <div className="mb-2 flex-shrink-0" aria-hidden="true">
                  {activeIndex === index ? (
                    <div className="text-white">{service.icon}</div>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3
                  id={`service-${index}-title`}
                  className={`text-xl font-semibold flex-shrink-0 ${
                    activeIndex === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-snug flex-1 overflow-hidden ${
                    activeIndex === index ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {services.length > 4 && (
            <div className="flex justify-center mt-6">
              <article
                onMouseEnter={() => setActiveIndex(4)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden w-full sm:w-[calc(50%-0.75rem)] max-w-[400px]
                  ${
                    activeIndex === 4
                      ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
                      : "bg-white text-gray-800"
                  }`}
                aria-labelledby="service-4-title"
              >
                <div className="mb-2 flex-shrink-0" aria-hidden="true">
                  {activeIndex === 4 ? (
                    <div className="text-white">{services[4].icon}</div>
                  ) : (
                    services[4].icon
                  )}
                </div>
                <h3
                  id="service-4-title"
                  className={`text-xl font-semibold flex-shrink-0 ${
                    activeIndex === 4 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {services[4].title}
                </h3>
                <p
                  className={`text-sm leading-snug flex-1 overflow-hidden ${
                    activeIndex === 4 ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {services[4].description}
                </p>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 max-w-screen-2xl mx-auto" aria-labelledby="mission-heading">
        <div className="relative w-full max-w-[500px] h-[400px] rounded-2xl bg-gradient-to-br from-green-400 to-lime-400 p-3 flex items-center justify-center group">
          <Image
            src="/images/missionimage.webp"
            alt="Quore B2B Marketing team mission and company values"
            width={500}
            height={550}
            className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 id="mission-heading" className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Learn more about our <span className="text-green-500">missions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Quore B2B Marketing's mission is to help businesses achieve their
            growth objectives by delivering innovative, data-driven marketing
            strategies tailored to the unique needs of B2B companies. They focus
            on creating measurable results through targeted campaigns, lead
            generation, and customer engagement, ensuring their clients stay
            competitive in their respective industries. Their approach often
            combines creativity with analytics to optimize marketing efforts and
            drive ROI for their clients.
          </p>
          <button 
            className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Read more about our company mission and values"
          >
            Read More
          </button>
        </div>
      </section>

      {/* Counter Section */}
      <section className="w-full py-16 bg-gradient-to-r from-green-400 to-lime-400 text-white" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-0">
          <div className="stat-item" role="region" aria-labelledby="projects-stat">
            <p id="projects-stat" className="text-3xl sm:text-4xl font-bold" aria-live="polite">
              {counts.projects}+
            </p>
            <p className="text-sm sm:text-base" aria-describedby="projects-stat">
              {stats.projects.label}
            </p>
          </div>
          <div className="stat-item" role="region" aria-labelledby="comments-stat">
            <p id="comments-stat" className="text-3xl sm:text-4xl font-bold" aria-live="polite">
              {counts.comments}+
            </p>
            <p className="text-sm sm:text-base" aria-describedby="comments-stat">
              {stats.comments.label}
            </p>
          </div>
          <div className="stat-item" role="region" aria-labelledby="clients-stat">
            <p id="clients-stat" className="text-3xl sm:text-4xl font-bold" aria-live="polite">
              {counts.clients}+
            </p>
            <p className="text-sm sm:text-base" aria-describedby="clients-stat">
              {stats.clients.label}
            </p>
          </div>
        </div>
      </section>

      {/* We Love What We Do Section */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-10" aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          We <span className="text-green-500">Love</span> What <br className="hidden sm:block" /> We Do
        </h2>
        <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed" role="list" aria-labelledby="values-heading">
          <li role="listitem">
            ✓ We love forging strong, lasting connections—not just between
            businesses and their clients, but also with our own partners. Your
            success is our success, and we thrive on collaboration.
          </li>
          <li role="listitem">
            ✓ B2B marketing is anything but simple, and that's what excites us!
            We love diving deep into your industry, understanding your unique
            challenges, and crafting tailored solutions that deliver real
            impact.
          </li>
          <li role="listitem">
            ✓ We're passionate about blending creativity with data-driven
            strategies. Whether it's crafting compelling content or designing
            innovative campaigns, we love finding the perfect balance between
            art and analytics.
          </li>
          <li role="listitem">
            ✓ There's nothing more rewarding than seeing our clients grow. We
            love being part of your journey, helping you reach new markets,
            generate leads, and achieve your business goals.
          </li>
          <li role="listitem">
            ✓ The world of B2B marketing is always evolving, and we love staying
            on the cutting edge. From emerging technologies to the latest
            trends, we're constantly learning and adapting to keep your business
            ahead of the competition.
          </li>
        </ul>
      </section>

      <LogoScroll />
    </>
  );
}