import React  from "react";


const Landingpage = () =>{

  
    
    return (
      <>
        <div className="bg-[#6096B4] py-2 px-5">
          <div className="flex item-center justify-center">
            <div className="relative min-w-[120px]">
              <img className="w-12" src="./images/icons/convobuzz.svg"/>
            </div>
            <div className="flex justify-center item-center w-[calc(100%_-_120px)]">
              
                
                 <p className= "text-4xl text-[#303B69] ">ConVoBuzZ</p>
               
              </div>
              <div className="hidden md:flex items-center ">
              
                <button
                  type="submit"
                  className="text-lg  w-[134px] h-[38px] bg-[#BDCDD6] rounded-xl hover:bg-[#9FCFEB] shadow-xl"
                > Sign in 
                </button>
              
              </div>
            </div>
          </div>
        
      </>
    );
  }
  
  export default Landingpage;
  