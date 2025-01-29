// import Link from "next/link";
// import { Button } from "@/components/ui/button"; // Pastikan jalur ini benar
// import { Send } from "lucide-react";
// import DevImg from "@/components/DevImg"; // Pastikan jalur ini benar
// import Badge from "@/components/Badge"; // Pastikan jalur ini benar
// import Socials from "@/components/Socials"; // Pastikan jalur ini benar
// import { RiArrowDownSLine } from "react-icons/ri";

// const Hero = () => {
//   return (
//     <section className="py-12 xl:py-24 h-[100vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center justify-center">
//       <div className="container mx-auto flex flex-col items-center text-center">
//         <div className="text-md uppercase font-bold mb-2 text-primary tracking-[5px]">
//           Web Developer & UI/UX
//         </div>
//         <h1 className="h1 mb-6 max-w-[650px]">
//           Hello, my name is Ikko Cahya Awinata
//         </h1>
//         <p className="subtitle max-w-[550px]">
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
//KODE ASLIIII




import Link from "next/link";
import { Button } from "@/components/ui/button"; // Pastikan jalur ini benar
import { Send } from "lucide-react";
import DevImg from "@/components/DevImg"; // Pastikan jalur ini benar
import Badge from "@/components/Badge"; // Pastikan jalur ini benar
import Socials from "@/components/Socials"; // Pastikan jalur ini benar
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import "./tentang.css";


const Hero = () => {
  return (
    <section className="font tentang py-12 xl:py-24 h-[100vh] xl:pt-9 bg-[#ffffff] bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center justify-center">
      <div className="font-tentang container mx-auto flex flex-col items-center text-center">
        <div className="text-md uppercase font-bold mb-2 text-yellow-600 dark:text-primary tracking-[5px]">
          Web Developer & UI/UX
        </div>
        <h1 className="h1 mb-6 max-w-[650px]">
          Hello, my name is{' '}
          <span className="text-yellow-600 dark:text-primary">
            Ikko Cahya Awinata
          </span>
        </h1>
        <p className="subtitle font-tentang text-gray-600 dark:text-white max-w-[550px]">
          njnjI've done various projects in the fields of UI/UX design, motion
          graphics, front-end development, and video editing. With over two
          years of experience in coding, I have designed attractive and
          engaging user interfaces and developed dynamic web applications
          and statistical websites.
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




