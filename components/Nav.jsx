// // link (next js)
// import Link from "next/link";

// // next hooks
// import { usePathname } from "next/navigation";

// //framer motion
// import {motion} from 'framer-motion';





// const links = [
//   { path: "/", name: " About " },
//   { path: "/projects", name: " Projects " },
//   { path: "/contact", name: " Contact " },
//   {path:'/blog', name: 'Blog'},
//   {path:'/service', name: 'Service'},
// ];

// const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
// const path =usePathname();

//   return (
//     <nav className={`${containerStyles}`}>
//       {links.map((link, index) => {
//         return (
//           <Link
//             href={link.path}
//             key={index}
//             className={`capitalize ${linkStyles}`}
//           >
//             {link.path === path && (
//               <motion.span initial={{y:'-100%' }} animate={{y: 0}} transition={{type:'tween'}} layoutId='underline' className={`${underlineStyles}`}/>
//             )}
//             {link.name}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// };

// export default Nav;
//KODEE ASLIIIII





import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

// links data
const links = [

  { path: "/", name: "Home" },
  { path: "/tentang", name: "About" },
  { path: "/projects", name: "Projects" },
  // { path: "/blog", name: "Blog" },
  { path: "/service", name: "Service" },
  { path: "/computernetwork", name: "" },
  // { path: "/contact", name: "Contact" },

];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onNavClick }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={onNavClick} // Menambahkan event handler untuk menutup sidebar
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

