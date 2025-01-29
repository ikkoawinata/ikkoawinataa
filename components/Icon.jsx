import Link from "next/link";
import { Button } from "@/components/ui/button"; // Pastikan jalur ini benar
import { Send } from "lucide-react";
import DevImg from "@/components/DevImg"; // Pastikan jalur ini benar
import Badge from "@/components/Badge"; // Pastikan jalur ini benar
import Socials from "@/components/Socials"; // Pastikan jalur ini benar
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import "./hero.css";
import Marquee from "react-fast-marquee";



import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";


const App = () => (
    <Marquee>
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </Marquee>
  );
  
  export default App;


