import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className=" font-tentang bg-transparent m-0 p-0">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Socials
            containerStyles="flex gap-x-4 sm:gap-x-6"
            iconsStyles="text-primary text-[18px] sm:text-[17px] transition-transform transform hover:scale-110 dark:hover:text-[#FFF8E8] hover:text-[#080c14] cursor-pointer"
          />
          <div className="mt-4 sm:mt-0 text-muted-foreground text-[7px] sm:text-[12px] text-center sm:text-left">
            ©2022 – 2025 Ikko Cahya Awinata. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
