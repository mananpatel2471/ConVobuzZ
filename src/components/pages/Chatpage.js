function Chatpage() {
  return (
    <>
      <div className="w-full h-screen bg-[#EEE9DA] shadow hover:shadow-lg ">
        <div className=" w-full h-14 bg-y bg-[#EEE9DA] shadow :shadow-xl"></div>



        <div className=" bg-slate-400 py-3 item-center justify-center w-full h-14  ">



          <div className="relative flex iteams-center justify-center text-grey w-full h-14 ">
            <div className="relative w-full md:w-auto mx-auto">
              <input
                type="text"
                className="w-full md:w-[700px] placeholder:text-[#000000] h-8 bg-gray-g1 outline-none p-2  text-[#000000] rounded-xl pl-5"
                placeholder="Type a message"
              />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Chatpage;
