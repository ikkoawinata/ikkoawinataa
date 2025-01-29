
"use client"; // This should be the first lin

import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button"; // Adjust import path if necessary
import { motion } from "framer-motion";
import "./styles.css"; // Import the CSS file
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Kartu from "@/components/Kartu";


const posts = [
  {
    id: 1,
    title: " Design Personal Website (AwinataX.)",
    href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
    description:
      "Hi Folks! Introducing my first project Please scroll down for more detail👇 So the concept of this design is a personal web design that has 4 menus (about, portfolio, services, and contact) where the written part of the contact menu is a different color, because the user is in that menu. In this contact form section, the user can send a message to the website owner by entering their first name, last name, email and the message they want to convey, after that the user can send it using the submit button.",
    date: "2024",
    datetime: "2024-05-10",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198229151/Personal-Website-(AwinataX)",
      imageUrl: "./hero/p1.jpeg", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 2,
    title: "AwinataX. - New Logo",
    href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
    description: "Hi Folks! AwinataX. logo This is the first logo I created",
    date: "2024",
    datetime: "2024-05-10",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198230843/AwinataX-New-Logo",
      imageUrl: "./hero/p2.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 3,
    title: "Sengoku Basara (UI Design)",
    href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    description:
      "Hi Folks! This is my #2 Project Please scroll down for more detail👇 Sengoku Basara UI Project 🎮 Welcome to my design project featuring a new look for the Sengoku Basara website! Combining the epic feel of the Sengoku Jidai period with a modern aesthetic, the project aims to provide a more immersive web experience for fans of anime and history.",
    date: "2024",
    datetime: "2024-05-10",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
      imageUrl: "./hero/p3.jpeg",
    },
    marketingTags: ["CorelDRAW", "Figma"],
  },
  {
    id: 4,
    title: "2D Motion Graphic | Project 1",
    href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
    description:
      "In this video, I would like to introduce my first project, which is a Logo Animation. To create this 2D logo project, I used Adobe After Effects to bring it to life.",
    date: "2024",
    datetime: "2024-05-14",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/198520153/1-Logo-Animation",
      imageUrl: "./hero/L1.jpg",
    },
    marketingTags: ["Adobe After Effect"],
  },

  {
    id: 5,
    title: "Stomp Typography | After Effects Edit | Project 2",
    href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
    description:
      "Hi Folks! In this project, we are exploring simple kinetic stomp typography.",
    date: "2024",
    datetime: "2024-05-21",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/199109427/2-Stomp-Typography-After-Effects-Edit-Project-2",
      imageUrl: "./hero/intro.jpeg", // Gambar placeholder
    },
    marketingTags: ["Adobe After Effect"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 6,
    title: "CloudBeauty - Register Page",
    href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
    description:
      "Hi Folks! Introducing the Register page for CloudBeauty project. Here we create a registration form with a new UI for the user. For this reason, we will also create a website menu section for CloudBeauty products which will be integrated into the user registration form. We hope you like it. Thank you for visiting our project!",
    date: "2024",
    datetime: "2024-06-3",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/200099671/CloudBeauty-Register-Page-(UI-Design)",
      imageUrl: "./hero/beauty.jpg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW", "Figma"], // Menambahkan tag marketing sebagai contoh
  },

  {
    id: 7,
    title: "DESIGN Interactive Tab Bar Menu",
    href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
    description:
      "This project is to create an interactive design animation on the menu bar tab as a reference idea that is suitable for various other project displays. hope you like this design. Thank you for visiting our project!",
    date: "2024",
    datetime: "2024-06-24",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/201660997/Interactive-Tab-Bar-Menu",
      imageUrl: "./hero/p6.jpeg", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 8,
    title: "Redesign Website Unilever Indonesia",
    href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
    description:
      "Currently I am redoing the Unilever Indonesia website design. I hope you like this project. Thank you for visiting this project.",
    date: "2024",
    datetime: "2024-07-9",
    category: {
      title: "More",
      href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://www.behance.net/gallery/202859285/Redesign-Website-Unilever-Indonesia",
      imageUrl: "./hero/p5.jpeg", // Gambar placeholder
    },
    marketingTags: ["Figma"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 9,
    title: "MultiCalcPro",
    href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
    description:
      "The MultiCalcPro project is designed to be a comprehensive calculator capable of handling a wide range of calculations, including temperature, mass units, and more",
    date: "2024",
    datetime: "2024-08  -10",
    category: {
      title: "More",
      href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://github.com/ikkoawinata/MultiCalcPro-app/tree/ikkoawinata.github.io",
      imageUrl: "./hero/multicalcpro.jpeg", // Gambar placeholder
    },
    marketingTags: ["Bootstrap"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 10,
    title: "Computer Network",
    href: "./computernetwork",
    description:
      "In this project, I designed a school computer network that covers 11 rooms using Cisco Packet Tracer. This project combines various network topologies to ensure optimal connectivity throughout the school area. Each room, including the computer lab, teachers room, administration room, and classrooms, is connected through a combination of star, bus, and mesh topologies. This infrastructure is designed to support various network services such as FTP, DNS, and DHCP",
    date: "2023",
    datetime: "2024-08  -10",
    category: { title: "More", href: "./computernetwork" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/jaringan.jpeg", // Gambar placeholder
    },
    marketingTags: ["Cisco Packet Tracer"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 11,
    title: "First Personal Website",
    href: "https://awinatax.vercel.app/",
    description:
      "Build a simple first landing page website project using the Bootstrap framework",
    date: "2023",
    datetime: "2024-08  -10",
    category: { title: "More", href: "https://awinatax.vercel.app/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://awinatax.vercel.app/",
      imageUrl: "./hero/web1.png", // Gambar placeholder
    },
    marketingTags: ["Bootstrap"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 12,
    title: "Second Personal Website Development",
    href: "https://ikkoawinataa.vercel.app/",
    description:
      " Build development from the first personal website before. This project using NextJS, Tailwind, Framer Motion for little animation view",
    date: "2024",
    datetime: "2024-08  -10",
    category: { title: "More", href: "https://ikkoawinataa.vercel.app/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "https://awinata.vercel.app/",
      imageUrl: "./hero/web2.jpeg", // Gambar placeholder
    },
    marketingTags: ["Reactjs", "Tailwind", "Framer Motion", "NextJS"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 29,
    title: "Currency Converter",
    href: "https://ikkoawinata.github.io/matauang/",
    description:
      "This project was created using ReactJS and Tailwind framework. This project is to convert money from several currencies in the world",
    date: "2024",
    datetime: "2024-08  -10",
    category: { title: "More", href: "https://ikkoawinata.github.io/matauang/" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/matauang.jpeg", // Gambar placeholder
    },
    marketingTags: ["Reactjs", "Tailwind"], // Menambahkan tag marketing sebagai contoh
  },

  {
    id: 30,
    title: "Design Carousel Jus D-Tox",
    href: "./design5",
    description:
      "Designed and created visual content for a case study project under PT Digimarly Solusi Digital, focusing on graphic design aligned with the guidelines (S&K) for case study work",
    date: "2025",
    datetime: "2025-01 -12",
    category: { title: "More", href: "./design5" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port5.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDraw"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 32,
    title: "CRUD Data ",
    href: "./design5",
    description:
      "A simple CRUD project using MySQL and PHPMyAdmin to manage and manipulate data efficiently",
    date: "2023",
    datetime: "2025-01 -12",
    category: { title: "More", href: "https://github.com/ikkoawinata/Crud1" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/crud1.jpeg", // Gambar placeholder
    },
    marketingTags: ["Bootstrap","MSyQL"], // Menambahkan tag marketing sebagai contoh
  },

  ];

const design = [
  {
    id: 13,
    title: "PROTECT YOUR PRIVACY IF YOU WANNA ALIVE",
    href: "./design1",
    description:
      'Cyber Security Competition Activities in 2022 with the theme "Protect Your Privacy For Millennial Generation" organized by the Informatics Engineering Student Association Faculty of Engineering, Surabaya State University',
    date: "2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "./design1" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port1.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 14,
    title: "3rd Place in Infographic Challenge",
    href: "./design2",
    description:
      "Organized by the GEMA UNESA Campus Press Institute with the theme Take Your Infographic to the Next Level with Illustrations",
    date: "2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "./design2" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port3.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 15,
    title: "Perkembangan Teknologi Informasi Era Digital 5.0",
    href: "./design3",
    description:
      'Graphic Design Training Activities with the theme "Explore Your Passion, Build Your Imagination with Your Design Creation", organized by the Science Department Student Association, Faculty of Mathematics and Natural Sciences, Surabaya State University',
    date: "2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "./design3" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port2.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 16,
    title: "Lestarikan Alam Hijau Untuk Masa Depan Bumi Kita ",
    href: "./design4",
    description:
      "Graphic Design Webinar Activity organized by IMJ UNESA (Jombang Student Association, Surabaya State University)",
    date: "2022",
    datetime: "2022-06-25",
    category: { title: "More", href: "./design4" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port4.jpg", // Gambar placeholder
    },
    marketingTags: ["CorelDRAW"], // Menambahkan tag marketing sebagai contoh
  },
   {
    id: 31,
    title: "Design Carousel Jus D-Tox",
    href: "./design5",
    description:
      "Designed and created visual content for a case study project under PT Digimarly Solusi Digital, focusing on graphic design aligned with the guidelines (S&K) for case study work",
    date: "2025",
    datetime: "2025-01 -12",
    category: { title: "More", href: "./design5" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "",
      imageUrl: "./hero/port5.jpeg", // Gambar placeholder
    },
    marketingTags: ["CorelDraw"], // Menambahkan tag marketing sebagai contoh
  },

  
];


const blog = [
  {
    // id: 32,
    title: "Starting New Journey as Machine Learning Cohort at Bangkit Academy 2024 (Batch 2)", 
    // href: "./design1",
    description:
      'Hello... Through this article, I would like to share my experience as one of the participants in the Machine Learning Cohort of the Certified Independent Study Program (MSIB 7) Bangkit Academy 2024 (Batch 2).',
    date: "29 January 2025",
    datetime: "",
    category: { title: "Read More", href: "./Pengalaman-MSIB-Bangkit" },
    author: {
    }
    }
];



const photography = [
  {
    id: 17,
    title: "",
    description:
      '',
    date: "",
    datetime: "2024-08-10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/satu.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 18,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/dua.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 19,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/tiga.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 20,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/empat.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 21,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/lima.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 22,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/enam.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 23,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/tujuh.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 24,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/delapan.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 25,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sembilan.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 26,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sepuluh.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 27,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/sebelas.jpg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 28,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/duabelas.jpeg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
  {
    id: 34,
    title: " ",
    description:
      '',
    date: "",
    datetime: "2024-08  -10",
    category: { title: "More", href: "" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "./hero/grahapena.jpeg", // Gambar placeholder
    } // Menambahkan tag marketing sebagai contoh
  },
 
];

export default function Example() {
  const [activeSection, setActiveSection] = useState("projects");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const cardRefs = useRef([]);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add("opacity-100");
      }
    });
  }, [activeSection]);

    return (
      <div className="font-tentang flex flex-col min-h-screen">
        <main className="font-tentang flex-grow py-10 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-[16px] pt-[12px] font-normal tracking-tight text-gray-700 dark:text-gray-100">
                A showreel of my personal projects and work that I have done for various.
              </h2>
              <div className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Button
                    className={`button ${activeSection === "projects" ? "active" : ""}`}
                    onClick={() => handleButtonClick("projects")}
                  >
                    All My Projects
                  </Button>
                  <Button
                    className={`button ${activeSection === "blog" ? "active" : ""}`}
                    onClick={() => handleButtonClick("blog")}
                  >
                    Blog
                  </Button>
                  <Button
                    className={`button ${activeSection === "photos" ? "active" : ""}`}
                    onClick={() => handleButtonClick("photos")}
                  >
                    Design
                  </Button>
                  <Button
                    className={`button ${activeSection === "photography" ? "active" : ""}`}
                    onClick={() => handleButtonClick("photography")}
                  >
                    Photography
                  </Button>
                </div>
              </div>
            </div>
            <div className="font tentang mx-auto mt-6 grid max-w-2xl gap-x-8 gap-y-16 pt-2 sm:mt-3 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {activeSection === "projects" &&
                posts.map((post, index) => (
                  <Card
                    key={post.id}
                    post={post}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                    onClick={() => handleCardClick(post.id)}
                  />
                ))}

                {/* ASLIIIINYA */}
              {/* {activeSection === "blog" && (
                <div className="text-gray-600 dark:text-gray-400 font-tentang">
                  <h3 className="text-lg font-semibold font-tentang ">Blog Content Here</h3>
                  <p>Coming Soon :) </p>
            
                </div>
              )} */}
              {/* {/* ASLIIIINYA */}



                            
              {/* {activeSection === "blog" &&
                blog.map((post, index) => (
                  <Card
                    key={post.id}
                    post={post}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                    onClick={() => handleCardClick(post.id)}
                  >
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{post.date}</p>
                  </Card>
                ))
              }; */}


              
              {activeSection === "blog" &&
                blog.map((post, index) => (
                  <Kartu
                    key={post.id}
                    post={post}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                    onClick={() => handleCardClick(post.id)}
                  >
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{post.date}</p>
                  </Kartu>
                ))
              }





                  



  
              {activeSection === "photos" &&
                design.map((post, index) => (
                  <Card
                    key={post.id}
                    post={post}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                    onClick={() => handleCardClick(post.id)}
                  />
                ))}
              {activeSection === "photography" &&
                photography.map((post, index) => (
                  <div
                    key={post.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`card-container opacity-0 ${selectedCardId === post.id ? 'selected' : ''}`}
                  >
                    <a href={post.href}>
                      <img
                        src={post.author.imageUrl}
                        alt={post.title}
                        className="card-image w-full h-full rounded-md"
                      />
                    </a>
                  </div>
                ))}
            </div>
            {selectedCardId === 10 && (
              <section className=" font-tentang mt-6 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold">
                  Detailed View of Computer Project
                </h3>
                <p>
                  This detailed view provides additional insights into the
                  Computer project, which involves designing a school computer
                  network. You can explore the network topology, learn about the
                  services included, and understand the overall infrastructure.
                </p>
              </section>
            )}
          </div>
        </main>
      </div>
    );
  }
