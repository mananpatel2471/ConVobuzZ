function Navbar() {
  return (
    <>
      <div className="bg-blue-b1 py-2 px-5">
        <div className="flex item-center justify-center">
          <div className="relative min-w-[120px]">
            <img className="w-8" src="./images/icons/convobuzz.svg"/>
          </div>
          <div className="flex justify-between item-center w-[calc(100%_-_120px)]">
            <div className="relative flex iteams-center text-grey w-full md:w-[calc(100%_-_50px)]">
              <div className="relative w-full md:w-auto mx-auto">
                <input
                  type="text"
                  className="w-full md:w-[468px] placeholder:text-[#000000] h-8 bg-gray-g1 outline-none p-4 text-[#000000] rounded-md pl-10"
                  placeholder="Search"
                />
                <img
                  className="absolute ml-3 top-1"
                  src="./images/icons/Search_light.svg"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center ">
              <div>
                <img className="w-8" src="./images/icons/Icon-button.svg" />
              </div>
              <div className="relative">
                <img className="w-8" src="./images/icons/profile.svg" />
                <img
                  className="w-3 absolute top-5 right-0 "
                  src="./images/icons/online-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
