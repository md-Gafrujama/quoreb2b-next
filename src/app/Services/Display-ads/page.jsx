"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaAd, FaVideo, FaChartLine, FaPaintBrush, FaCube, FaHeartbeat, FaInfoCircle, FaLightbulb } from "react-icons/fa";
import LogoScroll from "@/components/LogoScroll";

// Service data moved to constants for better organization
const SERVICES = [
  {
    title: "Display Advertisement",
    description: "Reach your target audience with strategic display ads across premium websites and platforms.",
    bullets: ["Strategic ad placement", "Retargeting capabilities", "Performance tracking"],
    image: "/images/ads1.jpg",
  },
  {
    title: "Email Marketing",
    description: "Drive engagement and conversions with targeted email campaigns tailored to your audience segments.",
    bullets: ["Personalized automation sequences", "A/B testing and optimization", "Detailed analytics and reporting"],
    image: "/images/ads2.png",
  },
  {
    title: "B2B Content Syndication",
    description: "Expand your content reach and generate quality B2B leads by distributing your content across relevant platforms.",
    bullets: ["Access to 100+ industry platforms", "Targeted audience segmentation", "Lead validation and scoring"],
    image: "/images/ads3.png",
  },
  {
    title: "Account-Based Marketing",
    description: "Focus your resources on high-value accounts with personalized marketing strategies that drive results.",
    bullets: ["Target account identification", "Multi-channel engagement", "ROI-focused measurement"],
    image: "/images/ads4.webp",
  },
  {
    title: "Lead Generation",
    description: "Attract and convert high quality leads with our comprehensive lead generation solutions.",
    bullets: ["Intent-based targeting", "Sales-qualified lead delivery", "CRM integration capabilities"],
    image: "/images/ads5.png",
  },
  {
    title: "Sales-Qualified Lead Generation",
    description: "Generate high-quality, sales-ready leads that are pre-qualified and ready for your sales team.",
    bullets: ["Custom qualification criteria", "Leads matched with sales pipeline", "Quality guarantee"],
    image: "/images/ads6.jpg",
  },
  {
    title: "Intent Leads",
    description: "Target prospects showing active buying signals with our advanced intent data solutions.",
    bullets: ["Behavioral data analysis", "Buyer journey mapping", "High conversion potential"],
    image: "/images/ads7.png",
  },
  {
    title: "Data Solutions",
    description: "Leverage high-quality data to inform your marketing decisions and drive better business outcomes.",
    bullets: ["Verified business intelligence", "Advanced segmentation", "Data enrichment and appending"],
    image: "/images/ads8.jpg",
  },
  {
    title: "Web Design & Development",
    description: "Create engaging, conversion-focused websites that drive traffic and generate leads.",
    bullets: ["SEO driven design", "UI/UX optimization", "Custom-coded web solutions"],
    image: "/images/ads9.jpg",
  },
];

const OUR_SERVICES = [
  {
    icon: <FaAd className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Digital Advertising",
    desc: "We create and manage digital ad campaigns across platforms like Google, Facebook, and Instagram.",
  },
  {
    icon: <FaVideo className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Video Production",
    desc: "High-quality video content for commercials, social media, and corporate presentations.",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Marketing Strategy",
    desc: "Data-driven strategies to maximize ROI and achieve your business goals.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Creative Design",
    desc: "Eye-catching designs for logos, banners, and branding materials.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: <FaCube className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Industry Expertise",
    desc: "With over 10 years of experience, our team brings deep knowledge and specialized skills to every project.",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Proven Results",
    desc: "Our data-driven approach has consistently delivered exceptional ROI and measurable growth for our clients.",
  },
  {
    icon: <FaInfoCircle className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Dedicated Support",
    desc: "Our clients receive personalized attention and responsive support throughout the entire project lifecycle.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-[#00d9a6]" aria-hidden="true" />,
    title: "Innovative Approach",
    desc: "We stay ahead of industry trends and leverage cutting-edge technologies to deliver creative solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5f5f5] py-20 text-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-3xl font-bold mb-4 text-[#1e293b] leading-snug">
              Powering B2B Growth with <span className="text-[#00d9a6]">Smart Solutions</span>
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              At <strong className="text-[#00d9a6]">QuoreB2B</strong>, we bridge the gap between businesses and high-value
              opportunities. With data-driven strategies and cutting-edge digital
              solutions, we help companies expand, engage, and convert their ideal
              prospects into long-term success.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              Our expert team specializes in B2B lead generation, sales automation, and
              CRM integration to streamline your business growth. We leverage advanced
              technology and market insights to deliver high-quality leads, boost
              conversions, and maximize ROI.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              Whether you're a startup or an enterprise, <strong className="text-[#00d9a6]">QuoreB2B</strong> empowers you
              with the tools and strategies needed to stay ahead in a competitive market.
            </p>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/displayads.png"
              alt="QuoreB2B digital marketing solutions"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
              priority
              quality={85}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Service Section */}
      <section className="bg-white rounded-3xl shadow-md p-8 md:p-12 my-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl" aria-hidden="true">🧊</div>
              <h2 className="text-2xl font-semibold text-gray-800">Display Advertisement</h2>
            </div>
            <p className="text-gray-600">
              Strategic digital advertising solutions to maximize your reach and engagement.
              Our team specializes in creating targeted ad campaigns that drive results.
              Whether you're looking to increase brand awareness or generate leads, we have
              the expertise to help you succeed.
            </p>
            <Image
              src="/images/service1.jpg"
              alt="Display Advertising services by QuoreB2B"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
              quality={85}
            />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold text-black">How We Drive Results</h3>

            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "Strategic Targeting",
                  description: "Reach the right audience at the right time with precise demographic and behavior targeting."
                },
                {
                  number: "2",
                  title: "Creative Excellence",
                  description: "Eye-catching designs and compelling messaging that resonate with your audience."
                },
                {
                  number: "3",
                  title: "Data-Driven Optimization",
                  description: "Continuous performance analysis and campaign refinement for maximum ROI."
                }
              ].map((item) => (
                <div key={item.number} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#00d9a6] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.number}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-6 mt-4 text-sm text-gray-700">
              {["Retargeting Campaigns", "A/B Testing", "Performance Analytics", "Cross-Platform Reach"].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#00d9a6]" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>

            <Link href="/contact" passHref legacyBehavior>
              <button 
                className="mt-6 bg-[#00d9a6] hover:bg-[#00c196] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
                aria-label="Get started with QuoreB2B services"
              >
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="w-full py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Comprehensive Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div 
                key={service.title.replace(/\s+/g, '-').toLowerCase()} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    className="object-contain rounded-lg"
                    quality={80}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                  {service.bullets.map((point) => (
                    <li key={point.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}>{point}</li>
                  ))}
                </ul>
                <Link href="/contact" passHref legacyBehavior>
                  <button 
                    className="mt-auto bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] text-white px-4 py-2 rounded-full transition-all text-sm"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services and Why Choose Us Section */}
      <div className="w-full py-16 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          {/* Services Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {OUR_SERVICES.map((service) => (
                <article 
                  key={service.title.replace(/\s+/g, '-').toLowerCase()}
                  className="bg-white border rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500"
                >
                  <div className="mb-4 flex justify-center" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl text-black font-bold text-center mb-6">Why Choose QuoreB2B</h2>
            <div className="w-24 h-1 bg-[#00d9a6] mx-auto mb-10 rounded-full" aria-hidden="true"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <article
                  key={item.title.replace(/\s+/g, '-').toLowerCase()}
                  className="bg-white border rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500"
                >
                  <div className="mb-4 flex justify-center" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Logo Scroller */}
      <LogoScroll />
    </>
  );
}