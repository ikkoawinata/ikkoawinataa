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
          Fat Track - Bangkit Academy 2024 (Batch 2) Capstone by C242-PS030
          </h2>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
          December 11, 2024
          </p>
          <img
            src="./hero/bangkitp.jpeg"
            alt="Gambar Project Bangkit Gambar"
            className="w-full h-auto object-cover mb-4"
          />
          <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic">
            Figure 1 
          </figcaption>
          
          <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
            . . .
          </p>

          <p className="font-tentang mt-4 text-md text-gray-500 dark:text-white text-left text-Left font-bold">
            Content
          </p>

          <p className="font-tentang text-md text-gray-500 dark:text-gray-400  text-left text-Left font-light italic">
            1. About Project
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            2. Team Member Bangkit Academy 2024 (Batch 2)
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            3. Machine Learning Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            4. Android Development Learning Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            5. Cloud Computing Learning Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-Left font-light italic">
            6. Application
          </p>




          <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
            . . .
          </p>
         
          <p className="font-tentang mt-4 text-md text-gray-500 dark:text-white text-left text-Left font-bold">
            1. About Project
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-6">
          Fat Track is an AI-based application that helps users monitor their daily food content by recognizing images of food captured by the user and displaying the nutritional content of the food. Fat Track will display information such as calories, protein, fat, and carbohydrates of the food, which will then be stored to track the nutritional intake of the user's daily meals.
          </p>
        

         
          <p className="font-tentang mt-6 text-md text-gray-500 dark:text-white text-left text-Left font-bold">
            2.  Team Member Bangkit Academy 2024 (Batch 2)
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-6">
          Team Member Bangkit Academy 2024 (Batch 2)
          </p>
          
          <div className="mx-auto mt-3 max-w-4xl overflow-x-auto mb-10 pl-6">
    <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <th className="px-4 py-2 font-size border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">ID Bangkit</th>
          <th className="px-4 py-2 border font-size font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Name</th>
          <th className=" font-size px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Path</th>
          <th className=" font-size px-4 py-2 border font-tentang border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">University</th>
        </tr>
      </thead>
      <tbody>
        {/* Baris Pertama Auliya*/}
        <tr>
          <td className=" font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100 font-size">
          A528B4KX0731
          </td>
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-00">
          Auliya Ikhsana Nasution
          </td>
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Mobile Development
          </td>
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Politeknik Negeri Medan
      </td>
        </tr>


        

        {/* Baris Kedua */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          A528B4KY2764
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          Muhammad Bobby Oktaviano
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Mobile Development
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Politeknik Negeri Medan
          </td>
        </tr>





        {/* Baris Ketiga */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          C304B4KY2321
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          M. Iqbal Nazwan Wijaya
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Cloud Computing
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Politeknik Negeri Medan
          </td>
        </tr>





        {/* Baris Keempat */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          C528B4KY2733
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          Muhamad Aqlifa Ikramulah
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Cloud Computing
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Politeknik Negeri Medan
          </td>
        </tr>



        {/* Baris Kelima */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          M211B4KY0204
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          Ahmad Ferdiansyah
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Machine Learning
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Universitas Indraprasta PGRI
          </td>
        </tr>



        {/* Baris Keenam */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          M284B4KX1925
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          Ikko Cahya Awinata
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Machine Learning
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Universitas Negeri Surabaya
          </td>
        </tr>



        {/* Baris Keenam */}
        <tr className="">
          <td className=" font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-100">
          M319B4KY0637
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          Arif Adrian
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Machine Learning
          </td>
          <td className="font-size font-tentang px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">Universitas Sumatera Utara
          </td>
        </tr>
      </tbody>
    </table>


    <figcaption className="mt-1 text-xs font-light text-gray-400 dark:text-gray-500 italic text-center">
      [Table 1. Table Team Member]
    </figcaption>
  </div>



  {/* bagian machine learning path */}
  <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold">
            3. Machine Learning Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            a. Steps To Generate Model
          </p>

          <ol className="list-decimal pl-16 text-gray-500 dark:text-gray-500 text-justify">
  <li className="font-tentang text-md">
  Download the Notebook
  </li>
  <li className="font-tentang text-md">
  Import to colab
  </li>
  <li className="font-tentang text-md">
  Run all
  </li>
  <li className="font-tentang text-md">
  Save the model or use model that automaticly saved via Model Checkpoint ( the Fine-tuned One)
  </li>
</ol>


          <p className="mt-2 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            b. Featured Technologies
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-white">
  <ul className="list-disc pl-10">
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://www.tensorflow.org/">TensorFlow</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://colab.research.google.com/">Google Colab</a>
    </li>
  </ul>
</ul>
          <p className="mt-2 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            c. Dataset
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-white">
  <ul className="list-disc pl-10">
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://drive.google.com/file/d/1B311xmZPac-LeUwJwfn-qODAzAbdSLAS/view">Dataset Fat Track</a>
    </li>
  </ul>
</ul>




          <p className="mt-2 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            d. Models Accuracy and Loss
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-12">
            1. Train and Val Loss (train 0.23 and val 0.42)
          </p>
          <img
            src="./hero/train.png"
            alt="Gambar Train Loss"
            className="w-full h-auto object-cover mb-4 text-center pl-12"
          />
          <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
           [Figure 2.  Train and Val Loss]
          </figcaption>



          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-12 mt-6">
            2. Train and Val Accuracy (train &gt; 89 and &gt; val 88)
          </p>
          <img
            src="./hero/trainacc.png"
            alt="Gambar Train Loss"
            className="w-full h-auto object-cover mb-4 pl-12"
          />
          <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-16">
           [Figure 3.  Train and Val Accuracy]
          </figcaption>
{/* bagian machine learning */}
        






 {/* bagian machine mobile dev */}
 <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold mt-6">
            4. Mobile Development Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            a. Steps To Clone Project
          </p>


 
          <p className="font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-12">
            1. Clone this repository to your device
          </p>
          <p className=" dark:text-gray-500 font-tentang text-md text-gray-500 dark:text-gray-500text-left text-Left text-justify pl-12">
            2. Open In Android Studio
          </p>
          <p className=" dark:text-gray-500 font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-12">
            3. Build Project Sync Gradle
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-12">
            4. Run and debugging the project on your emulator
          </p>


          <p className="mt-2 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            b. Featured Technologies
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-white">
  <ul className="list-disc pl-10">
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://kotlinlang.org/">Kotlin</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://square.github.io/retrofit/">Reftrofit</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://developer.android.com/jetpack">Android Jetpack</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://junit.org/junit5/">JUnit</a>
    </li>
  </ul>

</ul>




          <p className="mt-2 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
            c. Screenshot Application
          </p>
          <div className="grid grid-cols-2 gap-4 items-start">
  {/* Kolom 1 - Train and Val Loss */}
  <div>

    <img
      src="./hero/screenshot1.jpg"
      alt="Splashscreen"
      className="w-full h-auto object-cover mb-2 pl-12"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 4. Opening Page]
    </figcaption>
  </div>

  <div>
    <img
      src="./hero/screenshot2.jpg"
      alt="Gambar Train Accuracy"
      className="pl-12 w-full h-auto object-cover mb-2"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 5. SignIn & SignUp Page]
    </figcaption>
  </div>




 
  <div>
    <img
      src="./hero/screenshot3.jpg"
      alt="Gambar Train Accuracy"
      className="pl-12 w-full h-auto object-cover mb-2"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 6. Home Page & Article Page]
    </figcaption>
  </div>

  <div>
    <img
      src="./hero/screenshot4.jpg"
      alt="Gambar Train Accuracy"
      className="pl-12 w-full h-auto object-cover mb-2"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 7. Predict Image & Chatbot]
    </figcaption>
  </div>



  <div>
    <img
      src="./hero/screenshot5.jpg"
      alt="Gambar Train Accuracy"
      className="pl-12 w-full h-auto object-cover mb-2"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 8. Profile & Forgot Password]
    </figcaption>
  </div>

  <div>
    <img
      src="./hero/screenshot6.jpg"
      alt="Gambar Train Accuracy"
      className="pl-12 w-full h-auto object-cover mb-2"
    />
    <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 italic pl-12">
      [Figure 9. Dashboard (Daily & Weekly)]
    </figcaption>
  </div>
</div>
  {/* bagian mobile dev */}
        










  {/* bagian Cloud Computing path */}
  <p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold mt-6">
            5. Cloud Computing Path
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-500 text-left text-Left text-justify pl-6">
            a. Steps To Deploy Backend API To Cloud Run
          </p>
          <ol className="list-decimal pl-16 text-gray-500 dark:text-gray-500">
  <li className="font-tentang text-md">
  Clone Project Github Cloud Computing to cloud shell
  </li>
  <li className="font-tentang text-md">
  Open Edit in cloud shell
  </li>
  <li className="font-tentang text-md">
  Add Service Account key to code
  </li>
  <li className="font-tentang text-md">
  Push Kode to Artifact Registry become image dockerfile
  </li>
  <li className="font-tentang text-md">
  Open Cloud Run
  </li>
  <li className="font-tentang text-md">
  Set Image From Artifact Registry
  </li>
  <li className="font-tentang text-md">
  Set Region
  </li>
  <li className="font-tentang text-md">
  Set Memory And CPU
  </li>
  <li className="font-tentang text-md">
  Set Port to 3000(Backend) and 8080(Machine Learning API)
  </li>
  <li className="font-tentang text-md">
  Set Request time out to 600
  </li>
  <li className="font-tentang text-md">
  And Deploy!
  </li>
</ol>



          <img
            src="./hero/cloudarch.jpg"
            alt="Gambar Train Loss"
            className="w-full h-auto object-cover mb-4 text-center pl-12"
          />
          <figcaption className="mt-1 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
           [Figure 10. Cloud Architecture]
          </figcaption>



<p className="mt-6 font-tentang text-md text-gray-500 dark:text-white text-left text-Left text-justify pl-6">
c. Featured Technologies
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-white">
  <ul className="list-disc pl-10">
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://cloud.google.com/?hl=en">Google Cloud Platform</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://firebase.google.com/">Firebase</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://fastapi.tiangolo.com/">FastAPI</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://nodejs.org/en">Node JS</a>
    </li>
    <li className="font-tentang text-md text-blue-700 underline">
      <a href="https://hapi.dev/">Hapi JS</a>
    </li>
  </ul>

</ul>




<p className="font-tentang text-md text-gray-500 dark:text-white text-left text-Left font-bold mt-6">
            6. Application
          </p>
        
          <ul className="list-disc text-gray-500 dark:text-white">
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left font-light text-justify pl-6 "> You can download Fat Track apps
            <a
              href= " https://drive.google.com/file/d/1waEaMWZ1WkcRzu2SZQ4PRAKg5w10bSjs/view " 
              className="text-blue-500 hover:text-blue-700 underline"
              target=" _blank "
              rel=" noopener noreferrer "
            >
            {" "} here {" "}
            </a>{" "}
          
          </p>
  <ul className="list-disc pl-10">
  </ul>

</ul>









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
