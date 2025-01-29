// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { AlignJustify } from "lucide-react";

// import Nav from "./Nav";
// import Logo from "./Logo";
// import Socials from "./Socials";

// const MobileNav = () => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <AlignJustify className="cursor-pointer" />
//       </SheetTrigger>
//       <SheetContent>
//         <div className='flex flex-col items-center justify-between h-full py-4'>
//           <div className='flex flex-col items-center gap-y-32'>
//             <Logo />
//             <Nav containerStyles= 'flex flex-col items-center gap-y-6'
//              linkStyles='text-2xl'/>
//           </div>
//           <Socials containerStyles={'flex gap-x-4'} iconsStyles={'text-2xl'}/>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;
//KODEEE ASLIII




import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-4'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav 
              containerStyles='flex flex-col items-center gap-y-6' 
              linkStyles='text-2xl hover:text-gray-300 transition-colors duration-300'
              onNavClick={handleNavClick} 
            />
          </div>
          <Socials 
            containerStyles='flex gap-x-4' 
            iconsStyles='text-2xl hover:text-gray-500 hover:scale-110 transition-transform duration-300' 
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;


