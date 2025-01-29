// "use client"; // This should be at the top of the file

// import { Button } from "@/components/ui/button";
// import Link from "next/link"; // Import Link for navigation
// import { useState } from 'react'; // Import useState to manage state
// import { ChevronRight } from "lucide-react"; // Import ChevronRight icon
// import Card from "@/components/Card"; // If you're using this, ensure it's used in the component
// import "./bangkit.css";

// const Candidates = () => {
//   // State for storing the clicked button information
//   const [clickedButton, setClickedButton] = useState(null);

//   return (
//     <section className="font-tentang min-h-screen py-2 xl:py-5 xl:pt-5 bg-no-repeat bg-bottom dark:bg-none relative flex items-center justify-center">
//   <div className="flex flex-col items-start">
//   {/* Image with Description */}
//   <div className="w-full max-w-md mx-auto p-4">
//     <h2 className="text-3xl text-left font-bold text-gray-800 dark:text-gray-200 mb-4 mt-10">
//       Starting New Journey as Machine Learning Cohort at Bangkit Academy 2024 Batch 2
//     </h2>
//     <p className="text-left text-gray-600 dark:text-gray-400 mb-4 text-sm font-light italic">
//       January 29, 2025
//     </p>
//     <img
//       src="./hero/headline1.jpeg"
//       alt="Gambar Jaringan Ikko"
//       className="w-full h-auto object-cover"
//     />
//     <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-gray-400  text-left text-justify">
//     Hello.......
//     Through this article, I would like to share my experience as one of the participants in the Machine Learning Cohort of the Certified Independent Study Program (MSIB 7) Bangkit Academy 2024 Batch 2. This program is led by renowned companies such as Google, Tokopedia, Gojek, and Traveloka.
//     </p>
//     <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
//     .     .       .

//     </p>
// <p className="font-tentang mt-4 text-md text-gray-500 dark:text-white text-left text-Left font-bold">
// Content

// </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400  text-left text-Left font-light italic">
// 1. What is Bangkit Academy?
//   </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
// 2. What are the company’s vision and mission?
//   </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
// 3. How is the registration process?
//   </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
// 4. What activities are offered during Bangkit Academy?
//   </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
// 5. What new learnings did you gain during the Bangkit Academy program??
//   </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
// 6. When will the Bangkit program be held again?
//   </p>

//     <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
//   .     .     .

//   </p>

//   <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
//   1. What is Bangkit Academy?
//     </p>
//  {/* Paragraf pertama dengan indentasi */}
//  <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
//  Bangkit Academy, organized by PT Dicoding Akademi Indonesia, is a key partner in providing technology training. Dicoding is renowned for its innovative learning approach, combining self-paced online modules, live online sessions, and real-world projects on a national scale. The program offers training in three technology fields or learning paths: Machine Learning, Mobile Development, and Cloud Computing, with the goal of preparing participants to succeed at leading technology companies.
// </p>

// {/* Paragraf kedua dengan indentasi */}
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
// Bangkit continues to evolve with a rigorous and structured curriculum. In 2024, more than 45,000 applicants competed for 4,636 spots, reflecting the high enthusiasm for the opportunities offered. Bangkit plans to introduce new learning paths, additional certifications, and more in-depth materials to meet industry needs, especially in the field of Artificial Intelligence (AI).
// </p>

//   <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
//   2.  What are the company’s vision and mission?
//     </p>
//  {/* Paragraf pertama dengan indentasi */}
//  <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
//  Bangkit is designed to equip students with relevant skills, both in terms of technology and soft skills, to advance their careers and foster innovation in world-class technology companies and Indonesian startups.

// </p>

// {/* Paragraf kedua dengan indentasi */}
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
// - Vision :
// </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-10">
// To develop Indonesia’s technology ecosystem and support the country’s journey as the largest digital economy power in Southeast Asia.
// </p>

// {/* Paragraf kedua dengan indentasi */}
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
// - Mission :
// </p>
// <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-10">
// To provide structured and high-quality training to produce top-tier graduates for world-class technology companies and startups in Indonesia.
// </p>

//   <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
//   3.   How is the registration process at Bangkit Academy?
//     </p>
//     <img
//     src="./hero/lolos-bangkit-2024-batch-2.jpeg"
//     alt="Gambar Jaringan Ikko"
//     className="w-full h-auto object-cover"
//   />
//    <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify">
//    Sebagai mahasiswa yang mengikuti program program Merdeka Belajar Kampus Merdeka (MBKM), saya adalah salah satu dari 4,6 ribu mahasiswa yang diterima di angkatan ini. Senang rasanya bisa menjadi bagian dari Bangkit
// </p>

//   </div>
// </div>

//         <div className="absolute top-4 left-4 md:top-8 md:left-8">
//           <Link href="/projects">
//             <Button
//               variant="outline"
//               size="icon"
//               className="flex items-center bg-gray-300 dark:bg-gray-700"
//             >
//               <ChevronRight className="h-4 w-4 transform rotate-180" />
//             </Button>
//           </Link>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Candidates;

"use client"; // This should be at the top of the file
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react"; // Import useState to manage state
import Card from "@/components/Card"; // If you're using this, ensure it's used in the component
import "./bangkit.css";

const Candidates = () => {
  return (
    <section className="font-tentang min-h-screen py-2 xl:py-5 bg-no-repeat bg-bottom dark:bg-none relative">
      <div className="font-tentang flex flex-col items-start px-4">
        {/* Artikel */}
        <div className="w-full max-w-2xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-justify">
            Starting New Journey as Machine Learning Cohort at Bangkit Academy
            2024 (Batch 2)
          </h2>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
            January 29, 2025
          </p>
          <img
            src="./hero/headline1.jpeg"
            alt="Gambar Jaringan Ikko"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="font-tentang text-md font-light text-gray-500 dark:text-gray-400 text-justify mb-6">
            Hello... Through this article, I would like to share my experience
            as one of the participants in the Machine Learning Cohort of the
            Certified Independent Study Program (MSIB 7) Bangkit Academy 2024
            (Batch 2).
          </p>
          <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
            . . .
          </p>

          <p className="font-tentang mt-4 text-md text-gray-500 dark:text-white text-left text-Left font-bold">
            Content
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400  text-left text-Left font-light italic">
            1. What is Bangkit Academy?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            2. What are the company’s vision and mission?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            3. How is the registration process?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            4. What activities are offered during Bangkit Academy?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            5. What new learnings did you gain during the Bangkit Academy
            program?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            6. When will the Bangkit program be held again?
          </p>

          <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
            . . .
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
            1. What is Bangkit Academy?
          </p>
          {/* Paragraf pertama dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
            Bangkit Academy, organized by PT Dicoding Akademi Indonesia, is a
            key partner in providing technology training. Dicoding is renowned
            for its innovative learning approach, combining self-paced online
            modules, live online sessions, and real-world projects on a national
            scale. The program offers training in three technology fields or
            learning paths: Machine Learning, Mobile Development, and Cloud
            Computing, with the goal of preparing participants to succeed at
            leading technology companies.
          </p>

          {/* Paragraf kedua dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-3">
            Bangkit continues to evolve with a rigorous and structured
            curriculum. In 2024, more than 45,000 applicants competed for 4,636
            spots, reflecting the high enthusiasm for the opportunities offered.
            Bangkit plans to introduce new learning paths, additional
            certifications, and more in-depth materials to meet industry needs,
            especially in the field of Artificial Intelligence (AI).
          </p>

          <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
            2. What are the company’s vision and mission?
          </p>
          {/* Paragraf pertama dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
            Bangkit is designed to equip students with relevant skills, both in
            terms of technology and soft skills, to advance their careers and
            foster innovation in world-class technology companies and Indonesian
            startups.
          </p>

          {/* Paragraf kedua dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
            - Vision :
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-10">
            To develop Indonesia’s technology ecosystem and support the
            country’s journey as the largest digital economy power in Southeast
            Asia.
          </p>

          {/* Paragraf kedua dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
            - Mission :
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-10">
            To provide structured and high-quality training to produce top-tier
            graduates for world-class technology companies and startups in
            Indonesia.
          </p>

          <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
            3. How is the registration process at Bangkit Academy?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mb-5 ">
          As a student enrolled in the Merdeka Belajar Kampus Merdeka (MBKM) program, I am proud to be one of the 4,636 students accepted in this batch out of more than 45,000 applicants. This is a significant achievement, and I am incredibly excited to be part of Bangkit. The MBKM program I am participating in is the Certified Independent Study Program Batch 7, where I have chosen Machine Learning as my learning path to deepen my knowledge and skills in this field.
          </p>
          <img
            src="./hero/lolos-bangkit-2024-batch-2.jpeg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
          Announcement of SIB Offering – Passed Bangkit 2024 (Batch 2)
          </figcaption>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-5 mb-5 ">
          For registration, you can go directly to the Bangkit Academy website 
            <a
              href=" https://grow.google/intl/id_id/bangkit/?tab=machine-learning "
              className="text-blue-500 hover:text-blue-700"
              target=" _blank "
              rel=" noopener noreferrer "
            >
              {" "}
              Bangkit Academy{" "}
            </a>{" "}
            or click this link{" "}
            <a
              href=" https://grow.google/intl/id_id/bangkit/?tab=machine-learning "
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              g.co/bangkit
            </a>
            . After filling in your details, you'll receive an email from Bangkit with more information on the next steps of the registration process. For further details, you can check out the "application process" section.
          </p>

          <img
            src="./hero/regis.jpeg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic mb-10">
          Bangkit 2024 (Batch 2) Registration Stages
          </figcaption>
          <img
            src="./hero/bangkitweb.jpg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic mb-10">
            Website Bangkit Academy
          </figcaption>
          <img
            src="./hero/applicationprocess.jpg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Application Proccess Section
          </figcaption>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-6 ">
          Besides that, I also check the registration status like in the image below (Registration Checkpoint Image). This way, I can see at what stage my registration process is, whether it's still at the beginning, progressing, or almost finished. By checking this, it's easier for me to follow the process without confusion. And it's also really important to always monitor the email you registered with on the Bangkit Academy platform.
            Academy
          </p>

          <img
            src="./hero/chek.jpg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6 mt-5"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Registration Checkpoint
          </figcaption>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-6 ">
          To do the Test Assessment in step 3, "Assessment Test on the Dicoding Platform," you need to have an account on the Dicoding platform first. The test itself takes around 3 hours in total, but don’t worry, you can take a break in between if you need to rest. So, make sure you’ve signed up and have a Dicoding account so you can jump right into the test!
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-3 ">
          For the assessment, as mentioned in step 3, it is:








          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            1. Technical Test in English Language
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            2. Technical Test in Indonesian
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            3. Traits Assessment
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            4. Learning Path Test
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-8 ">
          After finishing the assessment test, the next step is to apply to Bangkit Academy's partner through the MBKM Portal. Choose the learning path that matches what you selected and worked on in the previous assessment test. This step is crucial to officially register your data in the MBKM program and move on to the next stage!
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mt-3 ">
          Once you've applied to Bangkit according to the learning path you've chosen, don't forget to confirm through the Google Form that will be sent to you by Bangkit via email. This form is really important to ensure that your data is correctly recorded. You can see an example of it in the image below!
          </p>

          <img
            src="./hero/konfirmasi.jpg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-6 mt-5"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Step Terakhir Pendaftaran Bangkit 2024 Batch
          </figcaption>

          <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
            4. What activities are offered during Bangkit Academy?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 mb-3 ">
          The learning activities in Bangkit are conducted fully online (remote) over a 20-week period, with a total of 905 cumulative hours. In the Machine Learning learning path, this includes individual or self-paced learning by following classes in asynchronous format (online through modules on Dicoding Academy and the Coursera platform, specifically for the Machine Learning learning path). There is also ILT (Instructor Led – Training), which is an online learning activity led by instructors who are experts in the field. Additionally, there are weekly consultation sessions held every week with mentors from the same learning path. At the end of the program, participants collaborate in a capstone project that combines expertise in machine learning, cloud computing, and mobile development to create an innovative mobile-based application.
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
            {" "}
          
The learning process involves a combination of:
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left text-justify pl-6 ">
            {" "}
            1. Online Self-Paced Learning
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            where participants are required to implement the material they have learned directly through projects and tasks that need to be completed to finish each module.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 mt-3 ">
            {" "}
            - Self Paced di Coursera
          </p>
          <img
            src="./hero/coursera.jpg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-12 mt-5"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Self Paced Platform Coursera
          </figcaption>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 mt-10 ">
            {" "}
            - Self Paced di Dicoding
          </p>
          <img
            src="./hero/dicoding.jpeg"
            alt="Gambar Pengumuman Offering SIB"
            className="w-full h-auto object-cover pl-12 mt-5"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Self Paced Platform Dicoding
          </figcaption>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-light text-justify pl-6 mt-8 ">
            {" "}
            2. Online Synchronous Sessions
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            where participants are required to attend face-to-face sessions such as Instructor-Led Training, Soft Skill Sessions, English Learning, Study Groups, Guest Speaker Sessions, and more.
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 mt-3 ">
            {" "}
            - ILT (Instructor Led Training) Sessions
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-14">
          These sessions are divided into three parts: ILT-Soft Skill, ILT-EN, and ILT Tech, which in this case is referred to as ILT-ML (Machine Learning) because I chose the Machine Learning learning path. The sessions are tailored according to the learning path selected during the independent study at Bangkit Academy.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-20 mt-3 ">
            a. ILT Tech (Machine Learning)
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">
          ILT ML Machine Learning Path provides a range of comprehensive learning facilities to support participants' development in the field of machine learning. The platforms used for these learning sessions include two main platforms: Coursera and Dicoding.
          </p>
          <img
            src="./hero/tech2.jpeg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-5"
          />
          <img
            src="./hero/tech1.jpeg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Sesi ILT Machine Learning 
          </figcaption>




          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-20 mt-10 ">
            b. ILT SS (Soft Skill)
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24  ">
          ILT-Soft Skill This session covers various interpersonal skills (soft skills) that students can develop. With the material and explanations provided by mentors or instructors, this session is divided into 6 parts, which are:
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24 mt-1">1.  Growth Mindset and The Power of Feedback 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">2.  Time and Energy Management
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">3. Thriving Under Pressure: Essential Strategies for Adaptability and Resilience
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">4. Critical Thinking and Problem Solving
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">5. Project Management
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">6. Professional Branding and Interview Communication
          </p>
          <img
            src="./hero/ss1.jpeg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-5"
          />
          <img
            src="./hero/ss2.jpeg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Sesi ILT Soft Skill
          </figcaption>






          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-20 mt-10 ">
            c. ILT English
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24  ">Bangkit Academy makes English the primary language of communication to equip participants to become global talents, with the ILT English material focusing on three main aspects:
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24 mt-1">1. Spoken Correspondence 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">2. Expressing Opinion 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-24">3. Bussiness Presentation
          </p>
          <img
            src="./hero/eng1.jpg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-5"
          />
          <img
            src="./hero/eng2.jpg"
            alt="ILT Machine Learning"
            className="w-full h-auto object-cover pl-24 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Sesi ILT English
          </figcaption>






          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-light text-justify pl-6 mt-3 ">
            {" "}
            3. Reflection & Consultation
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            Where participants can reflect on their learning with academic advisors, Bangkit Alumni as facilitators, or individually.
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 mt-2 ">
            {" "}
            - Weekly Consultation
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-14">
          A regular session held every week, where each class is scheduled to have consultations with their mentor. In this session, participants have the opportunity to discuss, receive guidance, and solve problems encountered during the learning process or while working on their projects. These consultations aim to ensure that participants' progress is on track, reinforce their understanding of the material, and provide solutions to challenges that may arise during the program.
          </p>

          <img
            src="./hero/weekly1.jpeg"
            alt="Weekly Consultation 15"
            className="w-full h-auto object-cover pl-14 mt-5"
          />
          <img
            src="./hero/weekly2.jpeg"
            alt="Weekly Consultation 9"
            className="w-full h-auto object-cover pl-14 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Sesi Weekly Consultation
          </figcaption>














          

          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-light text-justify pl-6 mt-3 ">
            {" "}
            4. Capstone Project
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            Where participants work on a national-scale team project to solve problems around them.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            The capstone project at Bangkit is carried out after completing all the provided ILT sessions and courses. In the capstone project, participants will be divided into groups, with each group consisting of 5–7 members. The theme of the project is chosen by each group and must be approved by their mentor. 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 ">
            {" "}
            The project is divided into two types: Company-Based Project and Product-Based Project. The difference is that a Product-Based Project is determined by each group, while a Company-Based Project involves working on a project provided directly by an industry partner, such as Portier, Bizzagi, Lintasarta, Dicoding, and others. Of course, only the groups whose proposals are selected will be able to participate in the Company-Based Project.
          </p>
         

          <img
            src="./hero/company.jpeg"
            alt="Company Exposes Melalui Youtube"
            className="w-full h-auto object-cover pl-14 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Company Exposes Through Youtube
          </figcaption>



          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-12 mt-5">
            {" "}
            In this capstone project, my team and I developed a mobile application with the theme "Health Innovation: Empowering Vulnerable Communities for Health and Well-being." My team consists of 7 members, including 2 from Mobile Development, 2 from Cloud Computing, and 3 from Machine Learning. The application we created is called "FatTrack (Food Analysis Tool for Tracking Calories and Carbohydrates)."

FatTrack is a mobile app designed to help users track their calorie and nutrient intake by analyzing food images. Using AI technology and image processing, users can take pictures of their meals and instantly receive nutritional information, such as calorie counts and carbohydrate content.

This app aims to empower individuals, especially those in vulnerable communities, to make more informed choices about their diet and improve their overall health and well-being.
          </p>



          <img
            src="./hero/fattrack.jpeg"
            alt="Company Exposes Melalui Youtube"
            className="w-full h-auto object-cover pl-14 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Project Capstone Bangkit 2024 (Batch 2) Application
          </figcaption>



          <img
            src="./hero/cp1.jpeg"
            alt="Company Exposes Melalui Youtube"
            className="w-full h-auto object-cover pl-14 mt-6"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Peer Review Session
          </figcaption>

          <img
            src="./hero/cp2.jpeg"
            alt="Company Exposes Melalui Youtube"
            className="w-full h-auto object-cover pl-14 mt-7"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Persentation Session
          </figcaption>




          <p className="font-tentang mt-7 text-md text-gray-500 dark:text-white text-left text-Left font-bold italic">
          5. What new learnings did you gain during the Bangkit Academy?
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            {" "}
            Being part of the Independent Study Program at Bangkit Academy 2024 (Batch 2) has been such an amazing experience for me! Getting to learn directly from Google, with support from big companies like GoTo, Tokopedia, Traveloka, and DeepTech Foundation, has made this learning journey even more valuable. I’ve not only gained technical knowledge (hardskills) but also developed a lot of soft skills like communication, leadership, and teamwork.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            {" "}

            What excites me the most is the opportunity to earn a professional certification in Machine Learning. This is going to be a huge asset for my future career. Also, during the Capstone Project, I worked with teammates from different learning paths to create real-world solutions to societal problems. It was so much fun because it wasn’t just about coding – I also learned how to work in a team, manage projects, and strategize together.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 ">
            {" "}
            Interacting with new friends who have diverse perspectives and experiences gave me a lot of valuable insights. We exchanged knowledge, skills, and ideas, which made the learning process richer and more enjoyable. This diversity taught me to appreciate different viewpoints while also improving my ability to collaborate in interdisciplinary teams.
          </p>
          <img
            src="./hero/meet1.jpg"
            alt="Weekly Consultation 9"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Meet Team Capstone Project
          </figcaption>





          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold italic mt-5">
           6. When will the Bangkit program be held again?
          </p>
          {/* Paragraf pertama dengan indentasi */}
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6">
        
Based on information from Bangkit's partners, next semester, which is Semester Genap 2025, Bangkit will not be opening. They need time to develop a more refined curriculum that better aligns with the needs of the industry, especially in AI. Over the past five years, Bangkit has had a highly structured curriculum, but now they are focusing on improving the quality of the material and adding new learning paths. Because of this, they’ve decided to take a break next semester to ensure everything is fully prepared. But don’t worry, Bangkit will be back in Semester Ganjil 2025, and they say there will be new learning paths and specializations. So, for those who want to apply, get ready for the next batch!
          </p>



          
  <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
  <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justifymt-10">
  Alright, that’s all I have to share about my experience this time. I know there might be some shortcomings or mistakes in this post, so I hope you can understand. I really hope what I’ve written can be useful for all of you, especially for those who need insights or references. Thanks for reading until the end!
  </p>
  <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify mt-1">
  For more detailed documentation of my experience as a participant in Bangkit Academy 2024 (Batch 2), you can visit my LinkedIn <a href=" https://www.linkedin.com/feed/update/urn:li:activity:7286386011209711617/ " target=" _blank " className="text-blue-500 hover:underline"> Ikko Cahya Awinata </a>.</p>

  <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify mt-10">
  #LifeatBangkit #Bangkit2024 #MSIB7 
  </p>













        </div>

   

        

        {/* Tombol Navigasi */}
        <div className="flex justify-center w-full mt-4">
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-sm flex items-center"
            >
              <ChevronRight className="h-5 w-5 mr-2 transform rotate-180" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
