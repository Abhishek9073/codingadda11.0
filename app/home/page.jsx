import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Review from "@/components/Review";

export default function Home() {
  return (
    <>

   

    <HeroSection/>

    <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800 cursor-pointer text-center mt-24 hover:text-green-700 ">Services</h1>
       
        </div>
        <Services/>

    <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800 cursor-pointer text-center mt-24 hover:text-green-700 ">Courses</h1>
        
        </div>
    <Courses/>



      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800 cursor-pointer text-center mt-24 hover:text-green-700 ">Contact Us</h1>
        
        <ContactForm />

      </div>


      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800 cursor-pointer text-center mt-20 pb-8 hover:text-green-700 ">Feedback</h1>
        
        <Review />

      </div>
        
     
    </>
  );
}
