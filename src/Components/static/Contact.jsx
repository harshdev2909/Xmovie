import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className=" m-5 p-5 text-center w-[55%] mx-auto ">
        <h1 className="font-bold text-4xl">What can you host?</h1>
        <p className="font-medium mt-3 mb-5">
          As the purveyor of entertainment, X-Movies enables your event with end
          to end solutions from the time you register to the completion of the
          event. Let's look at what you can host.
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex justify-center gap-5">
          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/perf.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Performances</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/experiencess.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Experiences</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/expositionss.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Expositions</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/partiess.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Parties</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/sport.png"
              className="w-[61%] mb-3"
            />
            <h2 className="font-semibold mt-3">Sports</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-blue-100 flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/conferencess.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Conferences</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
        </div>
        <button className="bg-red-400 w-[12rem] rounded h-9 mx-auto mt-5 mb-5 text-white font-bold cursor-pointer">
          List your Show
        </button>
      </div>
      <div className=" m-5 p-5 text-center w-[55%] mx-auto ">
        <h1 className="font-bold text-4xl">What are the services we offer?</h1>
        <p className="font-medium mt-3 mb-5">
          After successful collaborations with the best event organisers over
          the past decade and a half, we're well equipped to bring your vision
          to life.
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex justify-center gap-5">
          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/online-saless.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Online Sales & Marketing</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/pricings.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">Pricing</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/food.png"
              className="w-[61%] mb-3"
            />
            <h2 className="font-semibold mt-3">Food & beverages</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/on-ground-support.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">
              On ground support & gate entry management
            </h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/report.png"
              className="w-[61%] mb-3"
            />
            <h2 className="font-semibold mt-3">Reports & business insights</h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>

          <div className="border rounded bg-[#FCF1F1] flex flex-col justify-center items-center p-5 w-60 h-60 transition-transform transform hover:-translate-y-2 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
            <img
              src="https://assets-in.bmscdn.com/static/2021/06/rfids.png"
              className="w-[50%] mb-3"
            />
            <h2 className="font-semibold mt-3">
              POS.RFID,Turnstiles & more...
            </h2>
            <span className="mt-auto text-red-500">ℹ</span>
          </div>
        </div>
        <button className="bg-red-400 w-[12rem] rounded h-9 mx-auto mt-5 mb-5 text-white font-bold cursor-pointer">
          List your Show
        </button>
      </div>
      <div className="flex items-center ">
        <div className="w-[46%] ms-12 mt-5 ">
          <img src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png" />
          <p className="ms-12">
            The NCPA shares a cherished 13 year bond with BMS, its online
            ticketing partner that has helped art lovers book their seats for
            their favourite shows in a seamless manner. The presence of a team
            from Bookmyshow in the NCPA premises on the day of the event further
            ensures the smooth-functioning of ticket-related formalities."
          </p>
          <h3 className="ms-12 mt-5 font-bold">
            NCPA- National Centre for the
          </h3>
          <h3 className="ms-12 mt-3 font-bold">Performing Arts.</h3>
        </div>
        
        <div className=" ms-12">
          <img src="https://assets-in.bmscdn.com/static/2021/06/ncpas.jpeg" className="w-[70%]"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
