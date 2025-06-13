// "use client";
// import Head from "next/head";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   RocketLaunchIcon,
//   ServerStackIcon,
//   PresentationChartLineIcon,
//   PaperAirplaneIcon,
// } from "@heroicons/react/24/solid";
// import React from "react";
// import LogoScroll from "@/components/LogoScroll";

// export default function AboutPage() {
//   return (
//     <>
//     <Head><title>About.</title>
//         <meta property="og:title" content="Aboutus" />
//         <meta property="og:description" content="ABout QuoreB2B Marketing." />
//         {/* <meta property="og:image" content="https:///images/logo.png" /> */}
//         {/* <meta property="og:url" content={currentUrl} /> */}
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="QuoreB2B" />
//         <meta name="twitter:card" content="summary_large_image" />
//         </Head>

//       {/* ABOUT Section */}
//       <section className="w-full bg-white  mt-4 py-12 px-4 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between font-quicksand">
//         {/* Left Text Content */}
//         <div className="max-w-xl text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
//             We are a creative <br />
//             <span className="text-[#00d9a6]">B2B Marketing Solutions Company</span>
//           </h1>
//           <p className="text-gray-700 text-base md:text-lg mb-6">
//             Welcome to Quore B2B Marketing, where our passion for excellence drives us to
//             deliver top-tier marketing solutions for businesses across various industries.
//             With a focus on innovation, customer-centric strategies, and measurable results,
//             we are committed to empowering our clients’ growth and success.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
//           >
//             READ MORE
//           </Link>
//         </div>

//         {/* Right Image */}
//         <div className="mb-8 lg:mb-2 lg:ml-12 w-full lg:w-[50%]">
//           <Image
//             src="/images/aboutus.jpg"
//             alt="About Quore B2B"
//             width={700}
//             height={500}
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//       </section>

//       <section
//   className="w-full py-16 px-4 md:px-12 lg:px-24 text-white text-center font-quicksand"
//   style={{
//     background: "linear-gradient(90deg, #d9eb72, #00D4A4)",
//   }}
// >
//   <h2 className="text-4xl font-bold mb-8">Our Visions</h2>
//   <div className="w-16 h-1 mx-auto bg-white rounded mb-12"></div>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//     {/* Mission */}
//     <div className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105">
//       <RocketLaunchIcon className="h-12 w-12 mx-auto mb-4 text-white" />
//       <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
//       <p className="text-sm text-white">
//         At Quore B2B Marketing, our mission is to revolutionize the B2B marketing
//         landscape through forward-thinking strategies, cutting-edge technology, and a
//         deep understanding of our clients’ unique needs and aspirations.
//         <br />
//         <br />
//         We strive to be the trusted partner that propels businesses towards sustainable
//         growth and prosperity.
//       </p>
//     </div>

//     {/* Approach */}
//     <div className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105">
//       <ServerStackIcon className="h-12 w-12 mx-auto mb-4 text-white" />
//       <h3 className="text-xl font-semibold mb-2 text-white">Our Approach</h3>
//       <p className="text-sm text-white">
//         We believe in the power of data-driven insights, creative ingenuity, and a
//         relentless pursuit of excellence.
//         <br />
//         <br />
//         Our approach is rooted in a deep understanding of B2B dynamics, enabling us to
//         craft tailored marketing solutions that speak directly to the challenges and
//         opportunities faced by our clients.
//       </p>
//     </div>

//     {/* Values */}
//     <div className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105">
//       <PresentationChartLineIcon className="h-12 w-12 mx-auto mb-4 text-white" />
//       <h3 className="text-xl font-semibold mb-2 text-white">Our Values</h3>
//       <p className="text-sm text-white">
//         Innovation: We are committed to exploring new frontiers and pushing the
//         boundaries of B2B marketing to deliver fresh, impactful strategies.
//         <br />
//         <br />
//         Collaboration: Our success is intertwined with the success of our clients. We
//         believe in building strong, collaborative partnerships to achieve common goals.
//       </p>
//     </div>

//     {/* Vision */}
//     <div className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105">
//       <PaperAirplaneIcon className="h-12 w-12 mx-auto mb-4 text-white" />
//       <h3 className="text-xl font-semibold mb-2 text-white">Our Vision</h3>
//       <p className="text-sm text-white">
//         Integrity: Trust is at the core of everything we do. We uphold the highest
//         standards of integrity in all our interactions and strategies.
//         <br />
//         <br />
//         Results-Driven: We are relentless in our pursuit of achieving tangible,
//         measurable results for our clients.
//       </p>
//     </div>
//   </div>
// </section>
// {/* WHAT WE LOVE Section */}
// <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700">
//   <h2 className="text-4xl font-bold mb-4">What We Love</h2>
//   <p className="text-base md:text-lg max-w-4xl mx-auto mb-12 text-gray-700">
//     At Quore B2B Marketing, we are passionate about helping businesses grow, thrive, and connect in meaningful ways.
//     We believe that marketing is more than just a service—it’s a partnership, a creative journey, and a strategic mission to drive results.
//   </p>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     {/* Card 1 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">💚</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Building Relationships</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         We love forging strong, lasting connections—not just between businesses and their clients,
//         but also with our own partners. Your success is our success, and we thrive on collaboration.
//       </p>
//     </div>

//     {/* Card 2 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">🧩</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Solving Complex Challenges</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         B2B marketing is anything but simple. We love diving deep into your industry,
//         understanding your unique challenges, and crafting tailored solutions that deliver real impact.
//       </p>
//     </div>

//     {/* Card 3 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">🎨</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Creativity Meets Strategy</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         We’re passionate about blending creativity with data-driven strategies.
//         From content to campaigns, we find the perfect balance between art and analytics.
//       </p>
//     </div>

//     {/* Card 4 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4]hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">📈</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Driving Growth</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         There’s nothing more rewarding than seeing our clients grow. We love helping you reach new markets,
//         generate leads, and achieve your business goals.
//       </p>
//     </div>

//     {/* Card 5 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">🚀</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Staying Ahead of the Curve</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         We’re constantly learning and adapting to keep your business ahead of the competition,
//         leveraging the latest trends and technologies.
//       </p>
//     </div>

//     {/* Card 6 */}
//     <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300  hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group">
//       <div className="text-3xl mb-2 group-hover:text-white transition-colors">🌐</div>
//       <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">Global Perspective</h3>
//       <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
//         We embrace a worldwide approach to marketing. Our global mindset allows us to craft strategies that
//         resonate across different cultures and business landscapes.
//       </p>
//     </div>
//   </div>
// </section>
// {/* WHAT WE DO Section */}
// <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700">
//   <h2 className="text-4xl font-bold mb-4">What We Do</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     {[
//       {
//         icon: "📊",
//         title: "Strategic Marketing Consulting",
//         text: "We work closely with you to develop a clear, actionable marketing strategy that aligns with your business objectives. From market research to competitive analysis, we lay the foundation for success."
//       },
//       {
//         icon: "📝",
//         title: "Content Marketing & Storytelling",
//         text: "We create high-quality, engaging content that resonates with your audience. Whether it's blogs, whitepapers, case studies, or videos, we help you tell your story in a way that builds trust and drives action."
//       },
//       {
//         icon: "📬",
//         title: "Lead Generation & Nurturing",
//         text: "We design targeted campaigns to attract and convert high-quality leads. From email marketing to account-based marketing (ABM), we ensure your pipeline is always full."
//       },
//       {
//         icon: "🌐",
//         title: "Digital Marketing & SEO",
//         text: "We optimize your online presence to ensure you're visible where it matters most. Our team specializes in SEO, PPC, social media, and website optimization to drive traffic and conversions."
//       },
//       {
//         icon: "✏",
//         title: "Brand Development",
//         text: "Your brand is your identity, and we help you make it unforgettable. From logo design to messaging, we ensure your brand stands out and speaks directly to your target audience."
//       },
//       {
//         icon: "📈",
//         title: "Data-Driven Analytics",
//         text: "We believe in measurable results. Our team uses advanced analytics tools to track performance, measure ROI, and refine strategies for continuous improvement."
//       },
//       {
//         icon: "🎤",
//         title: "Event Marketing",
//         text: "Whether it’s virtual or in-person, we help you create memorable experiences that connect you with your audience and amplify your brand."
//       },
//       {
//         icon: "🤝",
//         title: "Why Choose Quore B2B Marketing?",
//         text: "We’re not just another marketing agency—we’re your growth partners. With deep B2B expertise and a passion for results, we're here to help you go beyond your goals. Let's build something extraordinary together."
//       },
//       {
//         icon: "✨",
//         title: "Integrated Marketing Solutions",
//         text: "We create seamless, omnichannel marketing experiences. Our integrated strategy ensures consistent messaging, maximized reach, and a unified brand narrative across all touchpoints."
//       }
//     ].map((card, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group"
//       >
//         <div className="text-3xl mb-2 group-hover:text-white transition-colors duration-300">
//           {card.icon}
//         </div>
//         <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
//           {card.title}
//         </h3>
//         <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
//           {card.text}
//         </p>
//       </div>
//     ))}
//   </div>
// </section>
// {/* CONTACT PROMPT Section */}
// <section className="w-full bg-[#5a5a5a] text-white py-24 flex flex-col items-center justify-center text-center px-4">
//   <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
//     PLEASE SEND US YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">QUESTIONS</span> AND
//   </h2>
//   <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
//     WE CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">HELP</span> YOU BETTER
//   </h2>

//   <button className="bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:opacity-90 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
//     CONTACT US
//   </button>
// </section>
// <LogoScroll />

//     </>
//   );
// }



"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  RocketLaunchIcon,
  ServerStackIcon,
  PresentationChartLineIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import LogoScroll from "@/components/LogoScroll";

// SEO-optimized structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quore B2B Marketing",
  "description": "Creative B2B Marketing Solutions Company specializing in strategic marketing consulting, content marketing, lead generation, and digital marketing services.",
  "url": "https://quoreb2b.com",
  "logo": "https://quoreb2b.com/images/logo.png",
  "foundingDate": "2020",
  "sameAs": [
    "https://linkedin.com/company/quoreb2b",
    "https://twitter.com/quoreb2b"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://quoreb2b.com/contact"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Strategic Marketing Consulting",
      "description": "Comprehensive marketing strategy development and consulting services"
    },
    {
      "@type": "Service", 
      "name": "Lead Generation",
      "description": "Targeted B2B lead generation and nurturing campaigns"
    },
    {
      "@type": "Service",
      "name": "Content Marketing",
      "description": "High-quality content creation and storytelling for B2B audiences"
    },
    {
      "@type": "Service",
      "name": "Digital Marketing & SEO",
      "description": "Search engine optimization and digital marketing solutions"
    }
  ]
};

// Optimized service data with better structure
const servicesData = [
  {
    icon: "📊",
    title: "Strategic Marketing Consulting",
    description: "We work closely with you to develop a clear, actionable marketing strategy that aligns with your business objectives. From market research to competitive analysis, we lay the foundation for success.",
    keywords: "marketing strategy, business consulting, market research"
  },
  {
    icon: "📝",
    title: "Content Marketing & Storytelling", 
    description: "We create high-quality, engaging content that resonates with your audience. Whether it's blogs, whitepapers, case studies, or videos, we help you tell your story in a way that builds trust and drives action.",
    keywords: "content marketing, storytelling, B2B content"
  },
  {
    icon: "📬",
    title: "Lead Generation & Nurturing",
    description: "We design targeted campaigns to attract and convert high-quality leads. From email marketing to account-based marketing (ABM), we ensure your pipeline is always full.",
    keywords: "lead generation, email marketing, ABM"
  },
  {
    icon: "🌐", 
    title: "Digital Marketing & SEO",
    description: "We optimize your online presence to ensure you're visible where it matters most. Our team specializes in SEO, PPC, social media, and website optimization to drive traffic and conversions.",
    keywords: "SEO, digital marketing, PPC, social media"
  },
  {
    icon: "✏️",
    title: "Brand Development",
    description: "Your brand is your identity, and we help you make it unforgettable. From logo design to messaging, we ensure your brand stands out and speaks directly to your target audience.",
    keywords: "brand development, logo design, brand messaging"
  },
  {
    icon: "📈",
    title: "Data-Driven Analytics", 
    description: "We believe in measurable results. Our team uses advanced analytics tools to track performance, measure ROI, and refine strategies for continuous improvement.",
    keywords: "analytics, ROI measurement, performance tracking"
  },
  {
    icon: "🎤",
    title: "Event Marketing",
    description: "Whether it's virtual or in-person, we help you create memorable experiences that connect you with your audience and amplify your brand.",
    keywords: "event marketing, virtual events, brand amplification"
  },
  {
    icon: "🤝",
    title: "Partnership & Growth Solutions", 
    description: "We're not just another marketing agency—we're your growth partners. With deep B2B expertise and a passion for results, we're here to help you go beyond your goals.",
    keywords: "B2B partnerships, growth solutions, marketing expertise"
  },
  {
    icon: "✨",
    title: "Integrated Marketing Solutions",
    description: "We create seamless, omnichannel marketing experiences. Our integrated strategy ensures consistent messaging, maximized reach, and a unified brand narrative across all touchpoints.",
    keywords: "integrated marketing, omnichannel, unified branding"
  }
];

const valuesData = [
  {
    icon: "💚",
    title: "Building Relationships",
    description: "We love forging strong, lasting connections—not just between businesses and their clients, but also with our own partners. Your success is our success, and we thrive on collaboration."
  },
  {
    icon: "🧩", 
    title: "Solving Complex Challenges",
    description: "B2B marketing is anything but simple. We love diving deep into your industry, understanding your unique challenges, and crafting tailored solutions that deliver real impact."
  },
  {
    icon: "🎨",
    title: "Creativity Meets Strategy", 
    description: "We're passionate about blending creativity with data-driven strategies. From content to campaigns, we find the perfect balance between art and analytics."
  },
  {
    icon: "📈",
    title: "Driving Growth",
    description: "There's nothing more rewarding than seeing our clients grow. We love helping you reach new markets, generate leads, and achieve your business goals."
  },
  {
    icon: "🚀",
    title: "Staying Ahead of the Curve",
    description: "We're constantly learning and adapting to keep your business ahead of the competition, leveraging the latest trends and technologies."
  },
  {
    icon: "🌐",
    title: "Global Perspective", 
    description: "We embrace a worldwide approach to marketing. Our global mindset allows us to craft strategies that resonate across different cultures and business landscapes."
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Quore B2B Marketing | Leading B2B Marketing Solutions Company</title>
        <meta 
          name="description" 
          content="Discover Quore B2B Marketing - a creative B2B marketing solutions company specializing in strategic consulting, lead generation, content marketing, and digital marketing services for business growth." 
        />
        <meta 
          name="keywords" 
          content="B2B marketing, marketing solutions, lead generation, content marketing, digital marketing, SEO, strategic consulting, brand development, marketing analytics, business growth" 
        />
        <meta name="author" content="Quore B2B Marketing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://quoreb2b.com/about" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Quore B2B Marketing | Leading B2B Marketing Solutions" />
        <meta property="og:description" content="Creative B2B Marketing Solutions Company driving business growth through strategic marketing, lead generation, and innovative digital strategies." />
        <meta property="og:image" content="https://quoreb2b.com/images/aboutus.jpg" />
        <meta property="og:image:alt" content="Quore B2B Marketing team working on creative marketing solutions" />
        <meta property="og:url" content="https://quoreb2b.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Quore B2B Marketing" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Quore B2B Marketing | Creative B2B Solutions" />
        <meta name="twitter:description" content="Leading B2B marketing company specializing in strategic consulting, lead generation, and digital marketing solutions." />
        <meta name="twitter:image" content="https://quoreb2b.com/images/aboutus.jpg" />
        <meta name="twitter:site" content="@quoreb2b" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Main Content with semantic HTML */}
      <main>
        {/* Hero/About Section */}
        <section className="w-full bg-white mt-4 py-12 px-4 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between font-quicksand">
          <div className="max-w-xl text-center lg:text-left">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
                We are a creative <br />
                <span className="text-[#00d9a6]">B2B Marketing Solutions Company</span>
              </h1>
            </header>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              Welcome to Quore B2B Marketing, where our passion for excellence drives us to
              deliver top-tier marketing solutions for businesses across various industries.
              With a focus on innovation, customer-centric strategies, and measurable results,
              we are committed to empowering our clients' growth and success.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D4A4] focus:ring-opacity-50"
              aria-label="Learn more about our services - Contact us"
            >
              LEARN MORE
            </Link>
          </div>

          <div className="mb-8 lg:mb-2 lg:ml-12 w-full lg:w-[50%]">
            <Image
              src="/images/aboutus.jpg"
              alt="Quore B2B Marketing team collaborating on innovative marketing strategies and solutions"
              width={700}
              height={500}
              className="rounded-lg shadow-xl"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section
          className="w-full py-16 px-4 md:px-12 lg:px-24 text-white text-center font-quicksand"
          style={{
            background: "linear-gradient(90deg, #d9eb72, #00D4A4)",
          }}
          aria-labelledby="vision-heading"
        >
          <header>
            <h2 id="vision-heading" className="text-4xl font-bold mb-8">Our Vision & Values</h2>
            <div className="w-16 h-1 mx-auto bg-white rounded mb-12" aria-hidden="true"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mission */}
            <article className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105 focus-within:bg-[rgba(82,194,95,0.952)]">
              <RocketLaunchIcon className="h-12 w-12 mx-auto mb-4 text-white" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
              <p className="text-sm text-white leading-relaxed">
                At Quore B2B Marketing, our mission is to revolutionize the B2B marketing
                landscape through forward-thinking strategies, cutting-edge technology, and a
                deep understanding of our clients' unique needs and aspirations.
                <br />
                <br />
                We strive to be the trusted partner that propels businesses towards sustainable
                growth and prosperity.
              </p>
            </article>

            {/* Approach */}
            <article className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105 focus-within:bg-[rgba(82,194,95,0.952)]">
              <ServerStackIcon className="h-12 w-12 mx-auto mb-4 text-white" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2 text-white">Our Approach</h3>
              <p className="text-sm text-white leading-relaxed">
                We believe in the power of data-driven insights, creative ingenuity, and a
                relentless pursuit of excellence.
                <br />
                <br />
                Our approach is rooted in a deep understanding of B2B dynamics, enabling us to
                craft tailored marketing solutions that speak directly to the challenges and
                opportunities faced by our clients.
              </p>
            </article>

            {/* Values */}
            <article className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105 focus-within:bg-[rgba(82,194,95,0.952)]">
              <PresentationChartLineIcon className="h-12 w-12 mx-auto mb-4 text-white" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2 text-white">Our Values</h3>
              <p className="text-sm text-white leading-relaxed">
                <strong>Innovation:</strong> We are committed to exploring new frontiers and pushing the
                boundaries of B2B marketing to deliver fresh, impactful strategies.
                <br />
                <br />
                <strong>Collaboration:</strong> Our success is intertwined with the success of our clients. We
                believe in building strong, collaborative partnerships to achieve common goals.
              </p>
            </article>

            {/* Vision */}
            <article className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105 focus-within:bg-[rgba(82,194,95,0.952)]">
              <PaperAirplaneIcon className="h-12 w-12 mx-auto mb-4 text-white" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2 text-white">Our Vision</h3>
              <p className="text-sm text-white leading-relaxed">
                <strong>Integrity:</strong> Trust is at the core of everything we do. We uphold the highest
                standards of integrity in all our interactions and strategies.
                <br />
                <br />
                <strong>Results-Driven:</strong> We are relentless in our pursuit of achieving tangible,
                measurable results for our clients.
              </p>
            </article>
          </div>
        </section>

        {/* What We Love Section */}
        <section 
          className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700"
          aria-labelledby="values-heading"
        >
          <header>
            <h2 id="values-heading" className="text-4xl font-bold mb-4">What We Love</h2>
            <p className="text-base md:text-lg max-w-4xl mx-auto mb-12 text-gray-700 leading-relaxed">
              At Quore B2B Marketing, we are passionate about helping businesses grow, thrive, and connect in meaningful ways.
              We believe that marketing is more than just a service—it's a partnership, a creative journey, and a strategic mission to drive results.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group focus-within:bg-gradient-to-r focus-within:from-[#d9eb72] focus-within:to-[#00D4A4]"
              >
                <div className="text-3xl mb-2 group-hover:text-white group-focus-within:text-white transition-colors" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white group-focus-within:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white group-focus-within:text-white transition-colors leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section 
          className="w-full bg-gray-50 py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700"
          aria-labelledby="services-heading"
        >
          <header>
            <h2 id="services-heading" className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-base md:text-lg max-w-4xl mx-auto mb-12 text-gray-700 leading-relaxed">
              We offer comprehensive B2B marketing solutions designed to drive growth, generate leads, and build lasting business relationships.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group focus-within:bg-gradient-to-r focus-within:from-[#d9eb72] focus-within:to-[#00D4A4]"
              >
                <div className="text-3xl mb-2 group-hover:text-white group-focus-within:text-white transition-colors duration-300" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white group-focus-within:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white group-focus-within:text-white transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
                {/* Hidden keywords for SEO */}
                <span className="sr-only">{service.keywords}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          className="w-full bg-[#5a5a5a] text-white py-24 flex flex-col items-center justify-center text-center px-4"
          aria-labelledby="cta-heading"
        >
          <header>
            <h2 id="cta-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              READY TO GROW YOUR BUSINESS? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">LET'S TALK</span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
              WE CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">HELP</span> YOU ACHIEVE YOUR GOALS
            </p>
          </header>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:opacity-90 text-white text-sm font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Contact Quore B2B Marketing for a consultation"
          >
            GET FREE CONSULTATION
          </Link>
        </section>

        {/* Logo Scroll Component */}
        <LogoScroll />
      </main>
    </>
  );
}