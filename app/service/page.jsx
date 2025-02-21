// import React from "react";

// function Services() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-hero bg-cover text-black">
//       <div className="flex flex-col lg:flex-row w-full max-w-3xl p-4">
//         {/* Gambar di sebelah kiri atau di atas pada breakpoints kecil */}
//         <div className="flex-none w-full lg:w-1/2 p-2">
//           <img
//             src="/work/katalog.png"
//             alt="IKKO Awinata Cell Services"
//             className="rounded-lg w-full"
//           />
//         </div>

//         {/* Teks di sebelah kanan atau di bawah pada breakpoints kecil */}
//         <div className="flex-auto p-2 mt-6 lg:mt-0">
//           <p className="mb-3 text-sm text-justify">
//             We would like to convey to you that I provide services that can
//             provide solutions to your various needs.
//           </p>
//           <p className="mb-4 text-sm text-justify">
//             Services I offer include typing, photo editing, credit sales, and
//             E-Wallet top-up.
//           </p>
//           <p className="mb-8 text-sm text-justify">
//             Thank you for your attention
//           </p>
//           <div>
//             <p className="font-bold text-md">Author</p>
//             <p className="text-xl">AwinataX.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

// import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

// function Services() {
//   return (
//     <div>
//       {/* Existing section */}
//       <div className="relative flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
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

//       {/* Services section: 4 columns layout */}
//       <div className="py-16 bg-orange-50 dark:bg-gray-800">
//         <div className="w-full max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl font-bold text-start mb-6 text-black dark:text-white">
//             Our Services
//           </h2>
//           <p className="text-sm mb-4 text-black dark:text-gray-300">
//             We offer a range of services to meet your needs. Explore our offerings below and get in touch to learn more!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="/work/jasa1.png"
//                 alt="Service 1"
//                 className="w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Service 1
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Description of Service 1. We provide this service with the utmost care and attention.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="/work/jasa2.png"
//                 alt="Service 2"
//                 className="w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Service 2
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Description of Service 2. We ensure the highest quality for all our services.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="/work/jasa3.jpg"
//                 alt="Service 3"
//                 className="w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Service 3
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Description of Service 3. Contact us to learn more about this service.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">

//               <img
//                 src="/work/jasa4.jpg"
//                 alt="Service 4"
//                 className="w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Service 4
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Description of Service 4. We are dedicated to providing top-notch services.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden items-center">
//               <img
//                 src="/work/jasa5.jpg"
//                 alt="Service 5"
//                 className="w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
//                   Service 3
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Description of Service 3. Contact us to learn more about this service.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"; // Adjust import path if necessary
import { motion } from "framer-motion";
import "./styles.css"; // Import the CSS file
import PricingSlider from "@/components/PricingSlider.jsx"; // Sesuaikan dengan lokasi file


function Services() {
  return (
    <div>
      {/* Existing section */}
      <div className=" relative flex justify-center items-center min-h-[90vh] bg-orange-50 dark:bg-primary-foreground text-black dark:text-white">




    {/* GRADAAAAADAAAAAASSSSSIIIIIIIIIIIII */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-200 to-transparent dark:from-primary dark:to-transparent"></div> */}
        <div className="flex flex-col lg:flex-row w-full max-w-3xl p-4">
          {/* Gambar di sebelah kiri atau di atas pada breakpoints kecil */}
          <div className="flex-none w-full lg:w-1/2 p-2">
            <img
              src="./hero/katalog.png"
              alt="IKKO Awinata Cell Services"
              className="rounded-lg w-full"
            />
          </div>

          {/* Teks di sebelah kanan atau di bawah pada breakpoints kecil */}
          <div className="font-tentang flex-auto p-2 mt-6 lg:mt-0 relative text-gray-700 dark:text-white">
            <p className="mb-3 text-sm text-justify">
              We would like to convey to you that I provide services that can
              provide solutions to your various needs.
            </p>
            <p className="mb-4 text-sm text-justify">
              Services I offer include typing, photo editing, credit sales, and
              E-Wallet top-up.
            </p>
            <p className="mb-8 text-sm text-justify">
              Thank you for your attention
            </p>
            <div>
              <p className="font-bold text-md">Author</p>
              <p className="text-xl">Ikko Awinata</p>
            </div>

            <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 animate-bounce">
              <RiArrowDownSLine className="text-3xl text-primary dark:text-primary-dark" />
            </div>
            
          </div>
         
        </div>
      </div>

                
{/* TESTIMONI (Proof of Order) */}
<div className="py-16 bg-orange-50 dark:bg-transparent rounded-bl-[100px] rounded-br-[100px]">
  
 <PricingSlider />
    
    
  </div>























      {/* Services section: Stacked list layout */}
      <div className=" font-tentang py-16 bg-white dark:bg-gray-800">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className=" font-serif text-3xl font-bold text-start mb-6 text-black dark:text-white">
            Online Photo Editing Services
          </h2>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Online and Quality Photo Editing Services. We are ready to serve all
            your photo editing needs at affordable prices.
          </p>
          <div className="flex flex-col gap-6">
            {/* Service 1 */}
            <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/jasa1.jpeg"
                alt="Service 1"
                className="w-full lg:w-1/4 object-fill"
              />

              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Change color *tie only (IDR. 7000) / change color *suit only
                  (IDR. 7000) / change color *suit+tie (IDR. 12000)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - The final result is in JPEG/PNG format
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Maximum revision 1x *Additional fees will apply if the
                  maximum limit is exceeded
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Processing time -+1 hour (Depending on the complexity of the
                  image)
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/9qx738"
                >
                  <a href="https://wa.link/9qx738">Chat</a>
                </Button>
                {/* <button className="mt-4 px-4 py-2 bg-primary text-white rounded transition transform group-hover:scale-150">
    Learn More
  </button> */}
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/jasa2.jpeg"
                alt="Service 2"
                className="w-full lg:w-1/4 object-cover"
              />
              <div className=" font-tentang p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Photo Edit Wear Almameter Jacket Only (22k) or Change Clothes
                  Color, Hijab and others (17k)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - The final result is in JPEG/PNG format
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Maximum revision 1x *Additional fees will apply if the
                  maximum limit is exceeded
                </p>
                <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
                  <a href="https://wa.link/9qx738">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/jasa3.jpg"
                alt="Service 3"
                className="w-full lg:w-1/4 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Change photo size ( IDR. 7,000 / photo)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - The final result is in JPEG/PNG format
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Result is 1 photo if the size is 4x6 (you get 5) in the form
                  of a PDF file and Doc file
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Results in 1 photo if the size is 3x4, 2x3, 3x3, 2x2 (get 6
                  pieces) in the form of a PDF file and Doc File
                </p>
                <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
                  <a href="https://wa.link/9qx738">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/jasa4.jpg"
                alt="Service 4"
                className="w-full lg:w-1/4 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Photo background removal or replacement services (Rp.
                  10,000/photo)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Maximum revision 1x / photo
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - The final result is in JPEG/PNG format
                </p>
                <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
                  <a href="https://wa.link/9qx738">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/jasa5.jpg"
                alt="Service 5"
                className="w-full lg:w-1/4 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Edit photos add a tie only ( IDR. 7000/photo) or add suit +
                  tie ( IDR. 15.000/photo)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - The final result is in JPEG/PNG format
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Maximum revision 1x *Additional fees will apply if the
                  maximum limit is exceeded
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Processing time -+1 hour (Depending on the complexity of the
                  image)
                </p>
                <Button className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105">
                  <a href="https://wa.link/9qx738">Chat</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services ONLINE TYPING: Stacked list layout */}
      <div className="rounded-bl-[100px] rounded-tr-[100px]
 font-tentang py-16 pt-10 bg-orange-50 dark:bg-gray-950">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className=" font-serif text-3xl font-bold text-start mb-6 text-black dark:text-white">
            Online Typing Services
          </h2>
          <p className="text-lg mb-4 text-black dark:text-gray-300">
            We provide word typing services, pdf editing, CV creation, file
            tidying, other typing services
          </p>
          <div className="flex flex-col gap-6">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/list1.jpeg"
                alt="Service 1"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Typing Table of Contents
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Helps you compile a neat and properly structured table of
                  contents. With close attention to detail and appropriate
                  formatting, we ensure that your table of contents accurately
                  and professionally reflects the contents of the document,
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white late-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/list2.jpeg"
                alt="Service 2"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Typing Job Application Letters and CVs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  helps you create attractive and professional documents
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white late-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/list3.jpeg"
                alt="Service 2"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Creative CV Creation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  helps you create a unique and eye-catching CV, with innovative
                  design and professionally composed content
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white late-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/list4.jpeg"
                alt="Service 2"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                Making Invitations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                We provide invitation making services for various events such as tahlilan, selapan, etc., with attractive designs and formats that suit your needs.
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white late-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/List5.jpeg"
                alt="Service 2"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                Tidying up Document Text
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Helps ensure your documents are free of typos
               and inconsistent format, with neat and
                  professional, making it easier for readers and improve
                  the quality of your written presentation.
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
              <img
                src="./hero/List6.png"
                alt="Service 5"
                className="w-full lg:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Retyping
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Helps accurately retype your documents, ensuring every detail is recorded clearly and in consistent format
                </p>
                <Button
                  className="mt-4 px-3 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/7zd3yi"
                >
                  <a href="https://wa.link/7zd3yi">Chat</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-tentang py-3 pt-10 bg-white dark:bg-gray-900">
          <div className="w-full max-w-6xl mx-auto px-4">
            <h2 className=" font-serif text-3xl font-bold text-start mb-6 text-black dark:text-white">
              Online Purchase of Credit, Electricity Tokens and E-Wallets
            </h2>
            <p className="text-lg text-black dark:text-gray-300">
              We are ready to serve you with practical and fast credit,
              electricity token and e-wallet purchasing services.
            </p>
          </div>

          {/* Existing section */}
          <div className="relative flex justify-center items-center min-h-screen bg-white dark:bg-primary-foreground text-black dark:text-white">
            <div className="flex flex-col lg:flex-row w-full max-w-3xl p-4">
              {/* Gambar di sebelah kiri atau di atas pada breakpoints kecil */}
              <div className="flex-none w-full lg:w-1/2 p-2">
                <img
                  src="./hero/wallet1.png"
                  alt="IKKO Awinata Cell Services"
                  className="rounded-lg w-72 shadow-2xl"
                />
              </div>

              {/* Teks di sebelah kanan atau di bawah pada breakpoints kecil */}
              <div className=" font-tentangflex-auto p-2 mt-6 lg:mt-0 relative items-center">
                <p className="mx-auto text-lg text-justify">
                  Payment can be made via BCA, Dana, Ovo, Gopay, Linkaja,
                  ShopeePay and
                </p>
                <div>
                  <img src="./hero/byr.png" alt="" className="w-full mt-14" />
                </div>
                <Button
                  className="mt-4 px-3 mr-2 py-2 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://wa.link/vt6spw"
                >
                  <a href="https://wa.link/vt6spw">Beli</a>
                </Button>
                <Button
                  className="mt-4 px-2 py-1 bg-primary text-white rounded-xl transition transform group-hover:scale-105"
                  href="https://ikkoawinatacell.carrd.co/"
                >
                  <a href="https://ikkoawinatacell.carrd.co/">Cek Paket Data</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






  );




  
}

export default Services;
