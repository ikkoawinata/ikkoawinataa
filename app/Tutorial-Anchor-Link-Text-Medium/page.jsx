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
          Tutorial on Anchor Links Text in Medium Platform with Ease
          </h2>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
            January 31, 2025
          </p>
          <img
            src="./hero/medium1.jpeg"
            alt="Gambar Jaringan Ikko"
            className="w-full h-auto object-cover mb-4"
          />
          <p className="font-tentang text-md font-light text-gray-500 dark:text-gray-400 text-justify mb-6">
          Want to create an Anchor Link on Medium so readers can jump directly to a specific section of your article? Here are some easy steps! Pay close attention and read carefully.
          </p>
          <p className="font-tentang mt-4 text-md font-light text-gray-500 dark:text-white  text-left text-center">
            . . .
          </p>


          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-3 ">
            
            1. The First Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
            
          Before adding an Anchor Link, make sure your article is well-structured. A clearly structured article helps readers understand the content and navigate from one section to another easily. For example, see [Figure 1. Structured Article Example].
          </p>
          <img
            src="./hero/medium2.jpg"
            alt="Weekly Consultation 9"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
            [Figure 1. Structured Article Example].
          </figcaption>



          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            
            2. The Second Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
            Determine the target text you want to link to with the Anchor Link. As shown in [Figure 2. Second Step of the Anchor Link Tutorial on Medium], for example, the subheading “Artikel Kesehatan” is highlighted or selected with a red box.
         
          </p>
          <img
            src="./hero/medium3.jpg"
            alt="Weekly Consultation 9"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
            [Figure 2. Second Step of the Anchor Link Tutorial on Medium]
          </figcaption>





          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            
            3. The Third Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
            After highlighting, right-click the mouse or cursor, then click ‘Inspect,’ as shown in [Figure 3. Third Step of the Anchor Link Tutorial on Medium].
         
          </p>
          <img
            src="./hero/medium4.jpg"
            alt="The Third Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />

          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
            [Figure 3. Third Step of the Anchor Link Tutorial on Medium].
          </figcaption>











          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            4. The Fourth Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
           After clicking ‘Inspect’, the “inspect” panel will appear. Next, find the corresponding code elements that match the word or sentence you just highlighted.
          </p>
          <img
            src="./hero/medium5.jpg"
            alt="The Third Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
           [Figure 4. Fourth Step of the Anchor Link Tutorial on Medium].
          </figcaption>





 <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            5. The Fifth Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
          In the section ‘name = “39ff”’, as shown in [Figure 5. Fifth Step of the Anchor Link Tutorial on Medium], where I’ve highlighted it in red, highlight only the unique code part, which is 39ff. Then, copy it.
          </p>
          <img
            src="./hero/medium6.jpg"
            alt="The Fifth Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
          [Figure 5. Fifth Step of the Anchor Link Tutorial on Medium].
          </figcaption>

         

        
          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            6. The Sixth Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
          Next, highlight the text you want to turn into a link, as shown in [Figure 6. Sixth Step of the Anchor Link Tutorial on Medium]. Then, select and click the chain icon (link), which is highlighted in red.
          </p>
          <img
            src="./hero/medium8.jpg"
            alt="The Sixth Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
          [Figure 6. Sixth Step of the Anchor Link Tutorial on Medium].
          </figcaption>






          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            7. The Seventh Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
          Next, paste the unique code you copied in step five into the URL field, as shown in [Figure 7. Seventh Step of the Anchor Link Tutorial on Medium]. Don’t forget to start with a hashtag (#) at the beginning of the URL field. Make sure there are no spaces before or after the hashtag and the unique code.
          </p>
          <img
            src="./hero/medium7.jpg"
            alt="The Third Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
          [Figure 7. Seventh Step of the Anchor Link Tutorial on Medium].
          </figcaption>
        
         
          

          <p className="font-tentang text-md text-gray-500 dark:text-gray-200 text-left font-bold text-justify mt-10 ">
            8. The Eighth Step : 
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 ">
          After applying the Anchor Link to the word or sentence, the text will be underlined and will link to the intended destination.
          </p>
          <img
            src="./hero/medium9.jpg"
            alt="The Third Step"
            className="w-full h-auto object-cover pl-6 mt-1"
          />
          <figcaption className="mt-2 text-center text-xs font-light text-gray-400 dark:text-gray-500 font-light italic pl-12">
          [Figure 8. Eighth Step of the Anchor Link Tutorial on Medium].
          </figcaption>
         



          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 mt-10">
          By following the steps above, you can easily create an Anchor Link on Medium, allowing readers to jump directly to a specific section of your article. Make sure each step is followed correctly for the link to function properly.
          </p>
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 mt-5">
  If anything is unclear or you’d like to see further examples, feel free to check out my YouTube tutorial : <a href= " https://www.youtube.com/watch?v=sKYtwpG4oqQ&t=17s " target= " _blank " rel= " noopener noreferrer " className="text-blue-500 hover:underline">
     Easy Anchor Link Tutorial on Medium Platform
  </a>.
</p>

        
          <p className="font-tentang text-md text-gray-500 dark:text-gray-400 text-left text-justify pl-6 mt-5">
          I hope this is helpful, and good luck trying it out!
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
