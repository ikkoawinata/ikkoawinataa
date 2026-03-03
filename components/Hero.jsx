// import Link from "next/link";
// import { Button } from "./ui/button";
// import { Download, Send } from "lucide-react";

// import {
//   RiBriefcaseFill,
//   RiTeamFill,
//   RiTodoFill,
//   RiArrowDownSLine,
// } from "react-icons/ri";

// //components

// import DevImg from "./DevImg";
// import Badge from "./Badge";
// import Socials from "./Socials";

// const Hero = () => {
//   return (
//     <section className="py-12 xl:py-24 h-[130vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
//       <div className="container mx-auto">
//         <div className="flex justify-between gap-x-8">
//           {/*Text*/}
//           <div className="flex max-w-[600] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
//             <div className="text-md uppercase font-bold mb-2 text-primary tracking-[5px]">
//               Web Developer & UI/UX
//             </div>
//             <h1 className="h1 mb-6 max-w-[650px]">Hello, my name is Ikko Cahya Awinata</h1>
//             <p className="subtitle max-w-[550px] mx-auto xl:mx-0">
//               I've done various projects in the fields of UI/UX design, motion
//               graphics, front-end development, and video editing. With over two
//               years of experience in coding, I have designed attractive and
//               engaging user interfaces and developed dynamic web applications
//               and statistical websites.
//             </p>
//             {/*Buttons*/}
//             <div>
//               <Link href="/contact">
//                 <Button className="gap-x-2">
//                   Contact Me
//                   <Send size={18} />
//                 </Button>
//               </Link>
//             </div>
//             {/*Socials*/}
//             <Socials containerStyles='socials-icon flex gap-x-6 mx-auto xl:mx-0 spacing-top'
//             iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />

//           </div>
//           {/*Image FFF8E8 */}
//           <div className="hidden xl:flex relative">
//             <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
//             <DevImg containerStyles='bg-hero_shape w-[509px] h-[465px] bg-no-repeat relative bg-bottom' imgSrc='/hero/dev2.png'/>
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














// import Link from "next/link";
// import { Button } from "@/components/ui/button"; // Pastikan jalur ini benar
// import { Send } from "lucide-react";
// import DevImg from "@/components/DevImg"; // Pastikan jalur ini benar
// import Badge from "@/components/Badge"; // Pastikan jalur ini benar
// import Socials from "@/components/Socials"; // Pastikan jalur ini benar
// import { RiArrowDownSLine } from "react-icons/ri";
// import Image from "next/image";
// import "./hero.css";


// const Hero = () => {
//   return (
//     <section className="py-12 xl:py-24 h-[100vh] xl:pt-9 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center justify-center">
//       <div className="container mx-auto flex flex-col items-center text-center">
//         <div className="text-md uppercase font-bold mb-2 text-yellow-600 dark:text-primary tracking-[5px]">
//           Web Developer & UI/UX
//         </div>
//         <h1 className="h1 mb-6 max-w-[650px]">
//           Hello, my name is{' '}
//           <span className="text-yellow-600 dark:text-primary">
//             Ikko Cahya Awinata
//           </span>
//         </h1>
//         <p className="subtitl font-tentangg text-gray-600 dark:text-white max-w-[550px]">
//           I've done various projects in the fields of UI/UX design, motion
//           graphics, front-end development, and video editing. With over two
//           years of experience in coding, I have designed attractive and
//           engaging user interfaces and developed dynamic web applications
//           and statistical websites.
//         </p>
//         {/* Buttons */}
//         <div>
//           {/* Add your buttons here */}
//         </div>
//         {/* Socials */}
//       </div>
//     </section>
//   );
// };

// export default Hero;







import Link from "next/link";
import { Button } from "@/components/ui/button"; // Pastikan jalur ini benar
import { Send } from "lucide-react";
import DevImg from "@/components/DevImg"; // Pastikan jalur ini benar
import Badge from "@/components/Badge"; // Pastikan jalur ini benar
import Socials from "@/components/Socials"; // Pastikan jalur ini benar
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import "./hero.css";




const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[100vh] xl:pt-9 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="text-md uppercase font-tentang font-bold mb-2 text-yellow-600 dark:text-primary tracking-[5px]">
          Web Developer & UI/UX
        </div>
        <h1 className="h1 mb-6 max-w-[650px]">
          Hello, my name is{' '}
          <span className="text-yellow-600 dark:text-primary">
            Ikko Cahya Awinata
          </span>
        </h1>
        <p className="subtitle font-tentang text-gray-600 dark:text-white max-w-[550px]">
          I work across UI/UX design, motion graphics, front-end development, and video editing. I transform ideas into engaging digital experiences by designing intuitive interfaces and building responsive, dynamic web applications.
        </p>
        {/* Buttons */}
        <div>
          {/* Add your buttons here */}
        </div>
        {/* Socials */}
      </div>
    </section>
  );
};

export default Hero;