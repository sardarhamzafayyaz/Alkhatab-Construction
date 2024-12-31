import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex  items-center justify-between h-[70px] bg-[rgb(36,182,193)]  ">
        <img className="ml-2"></img>
        <div className="flex justify-between gap-6 ml-6 ">
        <a className="font-semibold  text-white text-xl " href="">Home</a>
        <a className=" text-xl  text-white "href="">About</a>
        <a className=" text-xl  text-white "href="">Services</a>
        <a className=" text-xl  text-white "href="">Projects</a>
        <a className=" text-xl  text-white "href="">Contact Us</a>
        </div>
        
        <div>
          <h1 className="mr-2 font-bold text-white ">ALKHATB-CONSTRUCTION</h1></div>
      </div>
      {/* hero section */}
      <div>
        <div className="relative h-[calc-100vh-70px]  w-screen">
         <img className="w-screen h-[calc(100vh-70px)]" src="ac13.avif" alt="" />
        <div className="absolute h-[calc(100dvh-70px)] w-screen top-0 left-0">
        <div className="h-full flex flex-col items-center justify-center">
        {/* <h1 className=" text-4xl text-black font-semibold">WELCOME TO ALKHATAB CONSTRUCTION</h1> */}
        <h1  className=" text-4xl text-white p-2 bg-[rgb(36,182,193)] rounded-md mt-5 font-bold">About Us</h1>
        </div>

        </div>
        </div>
      </div>
      {/* new */}
      {/* <div className="mt-10">
      
        <h1 className="flex justify-center text-3xl font-semibold text-[rgb(36,182,193)] my-2">"At Al-Khatab, We Treat Each Construction As Our Own"</h1>
        <p className="text-xl mx-6 mt-2">At our company, we approach every construction project with the same dedication and care as if it were our own home. Our team understands that each build reflects not just bricks and mortar, but also dreams, aspirations, and hard work. By prioritizing quality craftsmanship and meticulous attention to detail, we ensure that every aspect of the project meets our high standards. We believe that treating each construction as our own fosters trust and satisfaction, resulting in spaces that truly resonate with their owners.</p>
      </div> */}
      {/* <div className="flex justify-between items-center mx-10 my-10">
        <div>hamza</div>
        <div>hamza</div>
        <div>hamza</div>
      
        </div>   */}
      <div className=" mx-[75px]">
        <div className="flex flex-col text-center my-10"><h1 className="text-[rgb(36,182,193)] text-4xl font-bold">Excellence Delivered, innovation drives our success. </h1>
        </div>
        <div className="flex flex-col text-center my-10"><h1 className="text-[rgb(36,182,193)] text-4xl font-bold">Our Works!! </h1>
        </div>
      <div className="flex flex-1 ">
        <img className="rounded-md" src="ac5.png" alt="" />
        <div className="bg-slate-200 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-center text-[rgb(36,182,193)] text-3xl font-semibold">Aliminum Work</h1>
        <p className="text-center ml-4 mt-5">At Alkhatab Construction, we specialize in expert aluminum work, offering a wide range of custom solutions for both residential and commercial projects. Our skilled team is experienced in fabricating high-quality, durable, and corrosion-resistant aluminum products such as windows, doors, railings, and structural components. We focus on precision, ensuring that every project meets the highest standards of craftsmanship and design. Using advanced techniques and top-grade materials, we deliver aluminum work that enhances both functionality and aesthetics. Whether for new construction or renovation, we provide reliable, long-lasting results. Trust Alkhatab Construction for all your aluminum fabrication needs.
        </p>
        </div>
      </div>
      <div className="flex flex-1 my-5">
      <img className="rounded-md" src="ac6.png" alt="" />
      <div className="bg-slate-200 rounded-md">
      <h1 className="text-center text-[rgb(36,182,193)] text-3xl font-semibold items-center justify-center">Glass Work</h1>
        <p className="text-center ml-4 mt-5">Our glass collection includes a variety of thicknesses, from 6mm to 12mm, to suit different needs. The 6mm glass is perfect for lighter applications, while the 8mm tempered glass provides extra strength and safety for high-impact areas. For a premium, sturdy option, our 12mm glass combines elegance with durability. We also offer mirror glass with flawless clarity and reflection. Tempered glass is available for added safety, ideal for environments requiring extra resilience. Whether for decorative or functional use, our range covers all your glass needs with precision and quality.
        </p>
      </div>
      </div>
      <div className="flex flex-1">
        <img className="h-[430px] w-[400px] rounded-md" src="ac8.jpg" alt="" />
        <div className="bg-slate-200 rounded-md">
        <h1 className="text-center text-[rgb(36,182,193)] text-3xl font-semibold items-center justify-center">Ceiling Work</h1>
        <p className="text-center ml-4 mt-5">At Alkhatab Construction, we specialize in expert aluminum work, offering a wide range of custom solutions for both residential and commercial projects. Our skilled team is experienced in fabricating high-quality, durable, and corrosion-resistant aluminum products such as windows, doors, railings, and structural components. We focus on precision, ensuring that every project meets the highest standards of craftsmanship and design. Using advanced techniques and top-grade materials, we deliver aluminum work that enhances both functionality and aesthetics. Whether for new construction or renovation, we provide reliable, long-lasting results. Trust Alkhatab Construction for all your aluminum fabrication needs.
        </p>
        </div>
      </div>
      <div className="flex flex-1 mt-5">
      <img  className="h-[430px] w-[400px] mb-5 rounded-md " src="ac9.jpg" alt="" />
      <div className="bg-slate-200 h-[430px] rounded-md">
      <h1 className="text-center text-[rgb(36,182,193)] text-3xl font-semibold items-center justify-center">Clading Work</h1>
        <p className="text-center ml-4 mt-5">Our glass collection includes a variety of thicknesses, from 6mm to 12mm, to suit different needs. The 6mm glass is perfect for lighter applications, while the 8mm tempered glass provides extra strength and safety for high-impact areas. For a premium, sturdy option, our 12mm glass combines elegance with durability. We also offer mirror glass with flawless clarity and reflection. Tempered glass is available for added safety, ideal for environments requiring extra resilience. Whether for decorative or functional use, our range covers all your glass needs with precision and quality.
        </p>
      </div>
      </div>
      </div>  
     
      {/* <footer></footer> */}
      <footer className="bg-black">
        <div className=" text-white flex justify-between  h-[200px] ">
        <div className="flex flex-col ml-5 gap-2">
          <h1 className=" text-[rgb(36,182,193)] text-xl font-semibold mb-1">Websites</h1>
          <a href="https://al-khatab.com/">Al-khatab interiers</a>
          <a href="">Al-khatab Construction</a>
        </div>
        <div>
          <h1  className=" text-[rgb(36,182,193)] text-xl font-semibold mb-1">Services</h1>
          <p>Aliminum Work</p>
          <p>Glass Work</p>
          <p>Ceiling Work</p>
          <p>Clading Work</p>
        </div>
        <div>
          <h1  className=" text-[rgb(36,182,193)] text-xl font-semibold mb-1">
            Company
          </h1>
          <p>About</p>
          <p>Services</p>
          <p>Project</p>
          <p>Contact Us</p>
        </div>
        <div className="mr-5 mb-1">
          <h1  className=" text-[rgb(36,182,193)] text-xl font-semibold">Contact Us</h1>
          <p>.........</p>
          <p>.........</p>
          <p>.........</p>        
        </div>
        </div>
        <div className="text-white text-center justify-between">
          <h1>All rights are reserved</h1>
        </div>
      </footer>
    </div>
  );
}
