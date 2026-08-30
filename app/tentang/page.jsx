// import Link from "next/link";
// import { Button } from "@/components/ui/button"; // Adjust the path as needed
// import { Send } from "lucide-react";
// import DevImg from "@/components/DevImg"; // Adjust the path as needed
// import Badge from "@/components/Badge"; // Adjust the path as needed
// import Socials from "@/components/Socials"; // Adjust the path as needed
// import { RiArrowDownSLine } from "react-icons/ri";

// const Hero = () => {
//   return (
//     <section className="py-12 xl:py-24 h-[130vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
//       <div className="container mx-auto">
//         <div className="flex justify-between gap-x-8">
//           {/* Text */}
//           <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
//             <div className="text-md uppercase font-bold mb-2 text-primary tracking-[5px]">
//               Web Developer & UI/UX
//             </div>
//             <h1 className="hero-heading mb-6 max-w-[650px]">Hello, my name is Ikko Cahya Awinata</h1>
//             <p className="subtitle max-w-[550px] mx-auto xl:mx-0">
//               I've done various projects in the fields of UI/UX design, motion
//               graphics, front-end development, and video editing. With over two
//               years of experience in coding, I have designed attractive and
//               engaging user interfaces and developed dynamic web applications
//               and statistical websites.
//             </p>
//             {/* Buttons */}
//             <div>
//               <Link href="/contact">
//                 <Button className="gap-x-2">
//                   Contact Me
//                   <Send size={18} />
//                 </Button>
//               </Link>
//             </div>
//             {/* Socials */}
//             <Socials
//               containerStyles='socials-icon flex gap-x-6 mx-auto xl:mx-0 spacing-top'
//               iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
//             />
//           </div>
//           {/* Image */}
//           <div className="hidden xl:flex relative">
//             <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
//             <DevImg
//               containerStyles='bg-hero_shape w-[509px] h-[465px] bg-no-repeat relative bg-bottom'
//               imgSrc='/hero/dev2.png'
//             />
//           </div>
//         </div>
//         {/* Icon */}
//         <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-0 animate-bounce">
//           <RiArrowDownSLine className="text-3xl text-primary" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Button } from "@/components/ui/button"; // Adjust import path if necessary
// import { motion } from "framer-motion";
// import "./tentang.css"; // Import the CSS file

// function Services() {
//   return (

//     <section className="py- xl:py-24 h-[150vh] xl:pt-3 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center justify-center">
//       <div className="relative flex justify-center items-center min-h-screen dark:bg-primary-foreground text-black dark:text-white">
//         <div className="flex flex-col lg:flex-row w-full max-w-3xl p-4">
//           <div className="flex-none w-full lg:w-1/2 p-2">
//             <img
//               src="/work/wallet1.png"
//               alt="IKKO Awinata Cell Services"
//               className="rounded-lg w-72 shadow-2xl"
//             />
//           </div>

//           {/* Teks di sebelah kanan atau di bawah pada breakpoints kecil */}
//           <div className="flex-auto p-2 mt-6 lg:mt-0 relative">
//             <p className="mx-auto text-lg text-justify">
//               Payment can be made via BCA, Dana, Ovo, Gopay, Linkaja, ShopeePay
//               and
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

// import React from 'react';
// import { RiGithubLine, RiInstagramLine, RiLinkedinBoxLine, RiTwitterLine } from 'react-icons/ri';

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center bg-gray-900 text-white">
//       <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">

//         {/* Text Section */}
//         <div className="flex-1 lg:pr-16">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             I'm Spencer Sharp. <br />
//             I live in New York City, <br />
//             where I design the future.
//           </h1>
//           <p className="mb-4">
//             I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
//           </p>
//           <p className="mb-4">
//             The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
//           </p>
//           <p className="mb-4">
//             I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.
//           </p>
//           <p className="mb-4">
//             Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.
//           </p>
//         </div>

//         {/* Image and Social Section */}
//         <div className="flex flex-col items-center lg:items-start">
//           <img
//             src="/hero/dev2.png"
//             alt="Spencer Sharp"
//             className="w-80 h-80 object-cover rounded-lg mb-6"
//           />

//           <div className="flex flex-col gap-4 text-lg">
//             <a href="#" className="flex items-center gap-2">
//               <RiTwitterLine size={24} />
//               Follow on X
//             </a>
//             <a href="#" className="flex items-center gap-2">
//               <RiInstagramLine size={24} />
//               Follow on Instagram
//             </a>
//             <a href="#" className="flex items-center gap-2">
//               <RiGithubLine size={24} />
//               Follow on GitHub
//             </a>
//             <a href="#" className="flex items-center gap-2">
//               <RiLinkedinBoxLine size={24} />
//               Follow on LinkedIn
//             </a>
//           </div>

//           <div className="mt-6">
//             <a href="mailto:spencer@planetaria.tech" className="text-lg">
//               spencer@planetaria.tech
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import { RiArrowDownSLine } from 'react-icons/ri';
// import { Button } from '@/components/ui/button'; // Adjust import path if necessary
// import { motion } from 'framer-motion';

// function Services() {
//   return (
//     <div>
//       {/* New Branding Section */}

//       {/* Services section: Existing content */}
//       <div className="relative flex justify-center items-center min-h-screen bg-orange-50 dark:bg-primary-foreground text-black dark:text-white">
//         <div className="flex flex-col lg:flex-row w-full max-w-3xl p-4">
//           {/* Gambar di sebelah kiri atau di atas pada breakpoints kecil */}
//           <div className="flex-none w-full lg:w-1/2 p-2">
//             <img
//               src="/work/katalog.png"
//               alt="IKKO Awinata Cell Services"
//               className="rounded-lg w-full"
//             />
//           </div>

//           {/* Teks di sebelah kanan atau di bawah pada breakpoints kecil */}
//           <div className="flex-auto p-2 mt-6 lg:mt-0 relative">
//             <p className="mb-3 text-sm text-justify">
//               We would like to convey to you that I provide services that can
//               provide solutions to your various needs.
//             </p>
//             <p className="mb-4 text-sm text-justify">
//               Services I offer include typing, photo editing, credit sales, and
//               E-Wallet top-up.
//             </p>
//             <p className="mb-8 text-sm text-justify">
//               Thank you for your attention
//             </p>
//             <div>
//               <p className="font-bold text-md">Author</p>
//               <p className="text-xl">AwinataX.</p>
//             </div>

//             <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 animate-bounce">
//               <RiArrowDownSLine className="text-3xl text-primary dark:text-primary-dark" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services section: Stacked list layout */}
//       <div className="py-16 bg-white dark:bg-gray-800">
//         <div className="w-full max-w-6xl mx-auto px-4">
//           <h2 className=" font-serif text-3xl font-bold text-start mb-6 text-black dark:text-white">
//             Online Photo Editing Services
//           </h2>
//           <p className="text-lg mb-4 text-black dark:text-gray-300">
//             Online and Quality Photo Editing Services. We are ready to serve all
//             your photo editing needs at affordable prices.
//           </p>
//           <div className="flex flex-col gap-6">
//             {/* Service 1 */}
//             <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
//               <img
//                 src="/work/jasa1.png"
//                 alt="Service 1"
//                 className="w-full lg:w-1/4 object-fill"
//               />
//               <div className="p-6 flex-1">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Change color *tie only (IDR. 7000) / change color *suit only
//                   (IDR. 7000) / change color *suit+tie (IDR. 12000)
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - The final result is in JPEG/PNG format
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Maximum revision 1x *Additional fees will apply if the
//                   maximum limit is exceeded
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Processing time -+1 hour (Depending on the complexity of the
//                   image)
//                 </p>
//                 <Button
//                   className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
//                   href="https://wa.link/9qx738"
//                 >
//                   <a href="https://wa.link/9qx738">Chat</a>
//                 </Button>
//               </div>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
//               <img
//                 src="/work/jasa2.png"
//                 alt="Service 2"
//                 className="w-full lg:w-1/4 object-cover"
//               />
//               <div className="p-6 flex-1">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Photo Edit Wear Almameter Jacket Only (22k) or Change Clothes
//                   Color, Hijab and others (17k)
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - The final result is in JPEG/PNG format
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Maximum revision 1x *Additional fees will apply if the
//                   maximum limit is exceeded
//                 </p>
//                 <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
//                   <a href="https://wa.link/9qx738">Chat</a>
//                 </Button>
//               </div>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
//               <img
//                 src="/work/jasa3.jpg"
//                 alt="Service 3"
//                 className="w-full lg:w-1/4 object-cover"
//               />
//               <div className="p-6 flex-1">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Change photo size ( IDR. 7,000 / photo)
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - The final result is in JPEG/PNG format
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Result is 1 photo if the size is 4x6 (you get 5) in the form
//                   of a PDF file and Doc file
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Results in 1 photo if the size is 3x4, 2x3, 3x3, 2x2 (get 6
//                   pieces) in the form of a PDF file and Doc File
//                 </p>
//                 <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
//                   <a href="https://wa.link/9qx738">Chat</a>
//                 </Button>
//               </div>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
//               <img
//                 src="/work/jasa4.jpg"
//                 alt="Service 4"
//                 className="w-full lg:w-1/4 object-cover"
//               />
//               <div className="p-6 flex-1">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Photo background removal or replacement services (Rp.
//                   10,000/photo)
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Maximum revision 1x / photo
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - The final result is in JPEG/PNG format
//                 </p>
//                 <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
//                   <a href="https://wa.link/9qx738">Chat</a>
//                 </Button>
//               </div>
//             </div>

//             {/* Service 5 */}
//             <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
//               <img
//                 src="/work/jasa5.jpg"
//                 alt="Service 5"
//                 className="w-full lg:w-1/4 object-cover"
//               />
//               <div className="p-6 flex-1">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Edit photos add a tie only (20k) / add a suit only (30k) /
//                   add suit+tie (50k)
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - Maximum revision 1x / photo
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   - The final result is in JPEG/PNG format
//                 </p>
//                 <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
//                   <a href="https://wa.link/9qx738">Chat</a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

"use client";
import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import "./tentang.css";
import { LuFigma } from "react-icons/lu";
import { SiCoreldraw, SiNotion } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiWondersharefilmora } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { SiMysql } from "react-icons/si";
import { usePathname } from "next/navigation";
import Image from "next/image";

// const BrandingSection = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Check for user's theme preference
//     const prefersDarkMode = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     setIsDarkMode(prefersDarkMode);

//     // Add a listener to update the theme preference
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.matches);
//     };
//     window
//       .matchMedia("(prefers-color-scheme: dark)")
//       .addEventListener("change", handleThemeChange);

//     return () => {
//       window
//         .matchMedia("(prefers-color-scheme: dark)")
//         .removeEventListener("change", handleThemeChange);
//     };
//   }, []);

//   return (
//     <>
//       <section className="flex items-center justify-between min-h-[120vh] px-8 lg:px-28 bg-hero bg-cover bg-center dark:bg-none">
//         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:-mt-14 mt-28">
//           {/* Text Content */}
//           <div className="max-w-lg mt-10 lg:mt-0 lg:order-1">
//             <h1 className="text-4xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
//               Hi, I’m <br />
//               <span className="font-size-12 text-yellow-600 dark:text-primary">
//                 Ikko Cahya Awinata
//               </span>
//             </h1>
//             <p className="text-sm-about subtitle font-tentang text-gray-600 dark:text-gray-300 mb-6">
//               An undergraduate Informatic Engineer from Universitas Negeri
//               Surabaya, with a strong passion for UI/UX and Front-End
//               Development. I thrive on creating innovative web solutions that
//               make a difference and am dedicated to continually learning and
//               exploring new technologies.
//             </p>
//             <div className="flex space-x-8 mb-36 text-sm text-primary">
//               <a
//                 href="./projects"
//                 className="text-sm font-medium text-yellow-600 dark:text-primary hover:text-yellow-500 dark:hover:text-yellow-300 transition"
//               >
//                 Explore My Work
//               </a>
//             </div>
//           </div>

//           {/* Illustration Image */}
//           <div className="mt-8 lg:-mt-32 lg:order-2 flex justify-center">
//             <img
//               src="./hero/dev3.png" // Replace with the correct path to your image
//               alt="Illustration"
//               className="w-full lg:w-10/12 -mt-12 md:w-1/2 h-auto shadow-[0px_10px_30px_rgba(252,211,77,0.6)] transform -rotate-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(3,174,210,0.8)] hover:rotate-0" // Adjusted negative top margin
//             />
//           </div>
//         </div>
//       </section>
//       <section className="py-10 bg-white dark:bg-gray-12">
//   <section className="container -mt-5 mx-auto text-center">

// {/* <h2 className="text-3xl underline font-normal text-gray-900 dark:text-gray-100 mb-10">
//       Experience
//     </h2>

//       {/* Tabel Pengalaman */}
//   <div className="mx-auto mt-6 max-w-4xl overflow-x-auto mb-20">
//     <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
//       <thead>
//         <tr className="bg-gray-100 dark:bg-gray-800">
//           <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Date</th>
//           <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Role</th>
//           <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Company</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* Baris Pertama */}
//         <tr>
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
//             September 2024 - January 2025
//           </td>
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
//             Bangkit Machine Learning Path Cohort
//           </td>
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
//     <a href="https://grow.google/intl/id_id/bangkit/?tab=machine-learning" className="text-blue-500">PT. Dicoding Akademi Indonesia</a>

//       </td>

//         </tr>

//         {/* Baris Kedua */}
//         <tr className="">
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
//           Desember 2020 - January 2023
//           </td>
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
//             Operational Staff
//           </td>
//           <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
//           <a href="https://linktr.ee/abeenet" className="text-blue-500">Abee Net & Payment</a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div> */}

//       {/* Icons INI YANG LAMA*/}
//     {/* <h2 className="text-3xl underline font-normal text-gray-900 dark:text-gray-100 mb-6">
//       Here is the stack of technologies I work with:
//     </h2>
//     <div className="mx-auto mt-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 max-w-2xl">
//       <div className="flex justify-center items-center">
//         <LuFigma className="text-4xl-skill hover:transform hover:scale-110 transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiCoreldraw className="text-4xl-skill hover:transform hover:scale-110 transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiAdobeillustrator className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiAdobeaftereffects className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiAdobepremierepro className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiWondersharefilmora className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <FaReact className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <FaVuejs className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiTailwindcss className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <RiNextjsFill className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <FaBootstrap className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <FaGitAlt className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiAdobephotoshop className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <FaGolang className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiTypescript className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <IoLogoVercel className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiVisualstudiocode className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiMysql className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//       <div className="flex justify-center items-center">
//         <SiNotion className="text-4xl-skill hover:transform hover:scale-110  transition-all duration-300 ease-in-out" />
//       </div>
//     </div> */}
//     {/* Icons INI YANG LAMA*/}

// <h2 className="text-3xl underline font-normal text-gray-900 dark:text-gray-100 mb-6">
//   Here is the stack of technologies I work with:
// </h2>

// <div className="mx-auto mt-6 max-w-4xl overflow-x-hidden mb-20">
//   <div className="icon-scroll-container overflow-hidden w-full px-10 md:px-20 lg:px-32">
//     <div className="icon-scroll-content">
//       {[
//         LuFigma, SiCoreldraw, SiAdobeillustrator, SiAdobeaftereffects,
//         SiAdobepremierepro, SiWondersharefilmora, FaReact, FaVuejs,
//         SiTailwindcss, RiNextjsFill, FaBootstrap, FaGitAlt, SiAdobephotoshop,
//         FaGolang, SiTypescript, IoLogoVercel, SiVisualstudiocode, SiMysql, SiNotion
//       ].map((Icon, index) => (
//         <div key={`original-${index}`} className="icon-item">
//           <Icon />
//         </div>
//       ))}
//       {/* Duplikasi ikon untuk seamless looping */}
//       {[
//         LuFigma, SiCoreldraw, SiAdobeillustrator, SiAdobeaftereffects,
//         SiAdobepremierepro, SiWondersharefilmora, FaReact, FaVuejs,
//         SiTailwindcss, RiNextjsFill, FaBootstrap, FaGitAlt, SiAdobephotoshop,
//         FaGolang, SiTypescript, IoLogoVercel, SiVisualstudiocode, SiMysql, SiNotion
//       ].map((Icon, index) => (
//         <div key={`duplicate-${index}`} className="icon-item">
//           <Icon />
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// <div>
//   <Marquee>

//   </Marquee>
// </div>

//    </section>
// </section>

//       {/* Downward Arrow Icon with Text */}
//       <div className="mouse-scroll-container hidden lg:flex flex-col items-center">
//         <div className="mouse-icon">
//           <div className="wheel"></div>
//         </div>
//         <div className="scroll-text"></div>
//       </div>
//     </>
//   );
// };

// export default BrandingSection;

const BrandingSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's theme preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Add a listener to update the theme preference
    const handleThemeChange = (event) => {
      setIsDarkMode(event.matches);
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <>
      <section className="flex items-center justify-between min-h-[120vh] px-8 lg:px-28 bg-hero bg-cover bg-center dark:bg-none">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:-mt-14 mt-28">
          {/* Text Content */}
          <div className="max-w-lg mt-10 lg:mt-0 lg:order-1">
            {/* OPEN TO WORK Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              OPEN TO WORK
            </div>

            <h1 className="text-4xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Hi, I’m <br />
              <span className="font-size-12 text-yellow-600 dark:text-primary">
                Ikko Cahya Awinata
              </span>
            </h1>

            <p className="text-sm-about subtitle font-tentang text-gray-600 dark:text-gray-300 mb-8 max-w-[550px]">
              With a strong passion for UI/UX and Front-End Development. I
              thrive on creating innovative web solutions that make a difference
              and dedicated to continually learning and exploring new
              technologies.
            </p>

            <div className="flex space-x-8 mb-36 text-sm text-primary">
              <a
                href="./projects"
                className="text-sm font-tentang text-yellow-600 dark:text-primary hover:text-yellow-500 dark:hover:text-yellow-300 transition"
              >
                Explore My Work
              </a>
            </div>
          </div>

          {/* Illustration Image */}
          <div className="mt-8 lg:-mt-32 lg:order-2 flex justify-center">
            <img
              src="./hero/dev3.png"
              alt="Illustration"
              className="w-full lg:w-10/12 -mt-12 md:w-1/2 h-auto shadow-[0px_10px_30px_rgba(252,211,77,0.6)] transform -rotate-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(3,174,210,0.8)] hover:rotate-0"
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-white dark:bg-gray-12">
        <section className="container -mt-5 mx-auto text-center">
          <h2 className="text-3xl underline font-normal text-gray-900 dark:text-gray-100 mb-10">
            Experience
          </h2>

          {/* Tabel Pengalaman */}
          <div className="mx-auto mt-6 max-w-4xl overflow-x-auto mb-20">
            <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {/* No */}
                  <th className="px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-center">
                    No.
                  </th>

                  {/* Role */}
                  <th className="px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Role
                  </th>

                  {/* Company */}
                  <th className="px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Company
                  </th>

                  {/* Date */}
                  <th className="px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* 2 */}
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center">
                    2
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Crew Kedai
                  </td>

                  <td className="font-tentang px-4 py-2 border underline border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <a href="#" className="black">
                      Kedai Rindu Kangen
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    May 2026
                  </td>
                </tr>

                {/* 3 */}
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center">
                    3
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Graphic Designer
                  </td>

                  <td className="font-tentang px-4 py-2 border underline border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <a
                      href="https://www.instagram.com/millenialzkece.official/"
                      className="black"
                    >
                      Millenialzkece Team
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    August 2025 - October 2025
                  </td>
                </tr>

                {/* 4 */}
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center">
                    4
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    IT Support
                  </td>

                  <td className="font-tentang px-4 py-2 border underline border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <a
                      href="https://www.instagram.com/bidtik_poldajatim/"
                      className="black"
                    >
                      Kepolisian Daerah Jawa Timur (Polda Jatim)
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    February 2025 - June 2025
                  </td>
                </tr>

                {/* 5 */}
                <tr>
                  <td
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center"
                    rowSpan={2}
                  >
                    5
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Ads Creative Video Intern – Pubmedia Project
                  </td>

                  <td
                    className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 underline"
                    rowSpan={2}
                  >
                    <a
                      href="https://www.linkedin.com/posts/rafihakim12_pt-renjana-sinergi-indonesia-adalah-perusahaan-activity-7192670234678288385-fQj4/"
                      className="black"
                    >
                      PT. Renjana Sinergi Indonesia
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    February 2025 – March 2025
                  </td>
                </tr>

                <tr>
                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Ads Creative – Serena Hills Puncak Project
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    January 2025 – March 2025
                  </td>
                </tr>

                {/* 6 */}
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center">
                    6
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Bangkit Machine Learning Path Cohort
                  </td>

                  <td className="font-tentang px-4 py-2 border underline border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <a
                      href="https://grow.google/intl/id_id/bangkit/?tab=machine-learning"
                      className="black"
                    >
                      PT. Dicoding Akademi Indonesia
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    September 2024 - January 2025
                  </td>
                </tr>

                {/* 7 */}
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 text-center">
                    7
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    Operational Staff
                  </td>

                  <td className="font-tentang px-4 py-2 border underline border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <a href="https://linktr.ee/abeenet" className="black">
                      Abee Net & Payment
                    </a>
                  </td>

                  <td className="font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                    December 2020 - January 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl underline font-normal text-gray-900 dark:text-gray-100 mb-6">
            Tech Stack I Work With:
          </h2>

          <div className="mx-auto mt-6 max-w-4xl overflow-x-hidden mb-20">
            <Marquee speed={50} gradient={false}>
              {[
                LuFigma,
                SiCoreldraw,
                SiAdobeillustrator,
                SiAdobeaftereffects,
                SiAdobepremierepro,
                SiWondersharefilmora,
                FaReact,
                FaVuejs,
                SiTailwindcss,
                RiNextjsFill,
                FaBootstrap,
                FaGitAlt,
                SiAdobephotoshop,
                FaGolang,
                SiTypescript,
                IoLogoVercel,
                SiVisualstudiocode,
                SiMysql,
                SiNotion,
              ].map((Icon, index) => (
                <div key={`original-${index}`} className="icon-item mx-5">
                  <Icon size={50} className="transition-all transform" />
                </div>
              ))}
              {/* Duplicate icons for seamless scrolling */}
              {[
                LuFigma,
                SiCoreldraw,
                SiAdobeillustrator,
                SiAdobeaftereffects,
                SiAdobepremierepro,
                SiWondersharefilmora,
                FaReact,
                FaVuejs,
                SiTailwindcss,
                RiNextjsFill,
                FaBootstrap,
                FaGitAlt,
                SiAdobephotoshop,
                FaGolang,
                SiTypescript,
                IoLogoVercel,
                SiVisualstudiocode,
                SiMysql,
                SiNotion,
              ].map((Icon, index) => (
                <div key={`duplicate-${index}`} className="icon-item mx-5">
                  <Icon size={50} className="transition-all transform" />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      </section>

      {/* Downward Arrow Icon with Text */}
      <div className="mouse-scroll-container hidden lg:flex flex-col items-center">
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text"></div>
      </div>
    </>
  );
};

export default BrandingSection;
