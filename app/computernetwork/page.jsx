// "use client"; // This should be at the top of the file

// import { Button } from "@/components/ui/button";
// import Link from "next/link"; // Import Link for navigation
// import { useState } from 'react'; // Import useState to manage state
// import { ChevronRight } from "lucide-react"; // Import ChevronRight icon
// import Card from "@/components/Card"; // If you're using this, ensure it's used in the component
// import "./computer.css";

// const Candidates = () => {
//   // State for storing the clicked button information
//   const [clickedButton, setClickedButton] = useState(null);

//   return (
//     <section className="font-tentang py-2 xl:py-10 h-[140vh] xl:pt-10 bg-no-repeat bg-bottom dark:bg-none relative flex items-center justify-center">
//       <div className="flex flex-col items-center text-center">
//         {/* Image with Description */}
//         <div className="w-full max-w-md mx-auto p-4">
//           <img 
//             src="./hero/jaringan.jpeg" 
//             alt="Gambar Jaringan Ikko" 
//             className="w-full h-auto object-cover"
//           />
//           <p className="font-tentang mt-4 text-md font-light text-gray-700 dark:text-gray-300 text-justify">
//           In this project, I designed a school computer network that covers 11 rooms using Cisco Packet Tracer. This project combines various network topologies to ensure optimal connectivity throughout the school area. Each room, including the computer lab, teacher's room, administration room, and classrooms, is connected through a combination of star, bus, and mesh topologies. This infrastructure is designed to support various network services such as FTP, DNS, and DHCP
//           </p>
//         </div>

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
//       </div>
//     </section>
//   );
// };

// export default Candidates;










"use client"; // This should be at the top of the file

import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link for navigation
import { useState } from 'react'; // Import useState to manage state
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon
import "./computer.css";

const Candidates = () => {
  return (
    <section className="font-tentang py-2 xl:py-10 h-[140vh] xl:pt-10 bg-no-repeat bg-bottom dark:bg-none relative flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        {/* Image with Description */}
        <div className="w-full max-w-md mx-auto p-4">
          <img 
            src="./hero/jaringan.jpeg" 
            alt="Gambar Jaringan Ikko" 
            className="w-full h-auto object-cover"
          />
          <p className="font-tentang mt-4 text-md font-light text-gray-700 dark:text-gray-300 text-justify">
          In this project, I designed a school computer network that covers 11 rooms using Cisco Packet Tracer. This project combines various network topologies to ensure optimal connectivity throughout the school area. Each room, including the computer lab, teacher's room, administration room, and classrooms, is connected through a combination of star, bus, and mesh topologies. This infrastructure is designed to support various network services such as FTP, DNS, and DHCP.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center w-full mt-6">
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
