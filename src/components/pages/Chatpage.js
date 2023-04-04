function Chatpage() {
  return (
    <>
      <div className=" flex flex-col w-full   border h-[calc(100vh_-_115px)]">
        <div className="py-2 px-3 bg-[#BDCDD6] flex flex-row justify-between items-center">
          <div className="flex items-center">
            <div>
             <img className=" w-10 h-10 rounded-full " src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4">
              <p className="text-grey-darkest">User Name</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <button className=" flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                className="h-6 w-6 group-hover:text-blue-700"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_9523_235350"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="20"
                >
                  <path
                    d="M5.0625 5C3.95793 5 3.0625 5.89543 3.0625 7V13C3.0625 14.1046 3.95793 15 5.0625 15H11.0625C12.1671 15 13.0625 14.1046 13.0625 13V11.9713L15.9038 13.8182C16.4027 14.1425 17.0625 13.7844 17.0625 13.1893V6.81097C17.0625 6.21571 16.4023 5.85768 15.9034 6.18236L13.0625 8.03118V7C13.0625 5.89543 12.1671 5 11.0625 5H5.0625ZM13.0625 9.22429L16.0625 7.27195V12.7287L13.0625 10.7787V9.22429ZM12.0625 7V13C12.0625 13.5523 11.6148 14 11.0625 14H5.0625C4.51022 14 4.0625 13.5523 4.0625 13V7C4.0625 6.44772 4.51022 6 5.0625 6H11.0625C11.6148 6 12.0625 6.44772 12.0625 7ZM6.95413 2.0301C6.5876 2.16339 6.30181 2.29759 6.10465 2.40046C6.00604 2.45191 5.92947 2.49558 5.87593 2.52748C5.84916 2.54343 5.82813 2.55645 5.81296 2.56603L5.79462 2.57776L5.78877 2.58158L5.78668 2.58296L5.78515 2.58397C5.78498 2.58409 5.78515 2.58397 6.0625 3L5.78515 2.58397C5.55539 2.73715 5.4933 3.04759 5.64648 3.27735C5.79959 3.50702 6.10941 3.56943 6.33914 3.4165L6.34695 3.41151C6.35498 3.40644 6.36862 3.39797 6.38774 3.38658C6.426 3.36379 6.48615 3.32934 6.56722 3.28704C6.72944 3.20241 6.9749 3.08661 7.29587 2.9699C7.93775 2.73649 8.87977 2.5 10.0625 2.5C11.2452 2.5 12.1872 2.73649 12.8291 2.9699C13.1501 3.08661 13.3956 3.20241 13.5578 3.28704C13.6389 3.32934 13.699 3.36379 13.7373 3.38658C13.7564 3.39797 13.77 3.40644 13.778 3.41151L13.7858 3.41646C13.7857 3.41637 13.7852 3.41603 14.0473 3.02283L13.7858 3.41646C14.0155 3.56908 14.3255 3.5069 14.4785 3.27735C14.6317 3.04759 14.5689 2.73669 14.3392 2.58351L14.0625 3C14.3399 2.58397 14.3393 2.58362 14.3392 2.58351L14.3383 2.58296L14.3362 2.58158L14.3304 2.57776L14.312 2.56603C14.2969 2.55645 14.2758 2.54343 14.2491 2.52748C14.1955 2.49558 14.119 2.45191 14.0203 2.40046C13.8232 2.29759 13.5374 2.16339 13.1709 2.0301C12.4378 1.76351 11.3798 1.5 10.0625 1.5C8.74523 1.5 7.68725 1.76351 6.95413 2.0301ZM6.33914 3.4165C6.33855 3.41689 6.33902 3.41658 6.33914 3.4165ZM13.7858 3.41646C13.7857 3.41639 13.7859 3.41653 13.7858 3.41646ZM6.95413 17.9699C7.68725 18.2365 8.74523 18.5 10.0625 18.5C11.3798 18.5 12.4378 18.2365 13.1709 17.9699C13.5374 17.8366 13.8232 17.7024 14.0203 17.5995C14.119 17.5481 14.1955 17.5044 14.2491 17.4725C14.2758 17.4566 14.2969 17.4436 14.312 17.434L14.3304 17.4222L14.3362 17.4184L14.3383 17.417L14.3392 17.4165C14.3393 17.4164 14.3399 17.416 14.0625 17L14.3392 17.4165C14.5689 17.2633 14.6317 16.9524 14.4785 16.7226C14.3255 16.4931 14.0155 16.4309 13.7858 16.5835L14.0473 16.9772C13.7852 16.584 13.7857 16.5836 13.7858 16.5835L13.778 16.5885C13.77 16.5936 13.7564 16.602 13.7373 16.6134C13.699 16.6362 13.6389 16.6707 13.5578 16.713C13.3956 16.7976 13.1501 16.9134 12.8291 17.0301C12.1872 17.2635 11.2452 17.5 10.0625 17.5C8.87977 17.5 7.93775 17.2635 7.29587 17.0301C6.9749 16.9134 6.72944 16.7976 6.56722 16.713C6.48615 16.6707 6.426 16.6362 6.38774 16.6134C6.36862 16.602 6.35498 16.5936 6.34695 16.5885L6.33914 16.5835C6.10941 16.4306 5.79959 16.493 5.64648 16.7226C5.4933 16.9524 5.55539 17.2628 5.78515 17.416L6.0625 17C5.78515 17.416 5.78498 17.4159 5.78515 17.416L5.78668 17.417L5.78877 17.4184L5.79462 17.4222L5.81296 17.434C5.82813 17.4436 5.84916 17.4566 5.87593 17.4725C5.92947 17.5044 6.00604 17.5481 6.10465 17.5995C6.30181 17.7024 6.5876 17.8366 6.95413 17.9699ZM6.33914 16.5835C6.33855 16.5831 6.33902 16.5834 6.33914 16.5835ZM13.7858 16.5835C13.7857 16.5836 13.7859 16.5835 13.7858 16.5835Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_9523_235350)">
                  <rect x="0.0625" width="20" height="20" fill="currentColor" />
                </g>
              </svg>
              </button>
            </div>

            <div className="ml-1">
              <button className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                className="h-6 w-6 group-hover:text-blue-700 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                  fill="currentColor"
                />
              </svg>
              </button>
            </div>


            <div className="ml-2">
              <button className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentcolor"
                  fill-opacity=".6"
                  d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                ></path>
              </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto  bg-[#F2EFEF] ">
          <div className="py-2 px-3">
            <div className="flex justify-center mb-2">
              <div className="rounded py-2 px-4 bg-[#DDECF2]">
                <p className="text-sm uppercase">March 27, 2023</p>
              </div>
            </div>

            
            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex justify-end mb-2">
              <div className="rounded py-2 px-3 bg-[#E2F7CB]">
                <p className="text-sm mt-1">Hi guys.</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>


            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-[#F2F2F2]">
                <p className="text-sm text-teal text-green-400">User Name</p>
                <p className="text-sm mt-1">Hii</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  12:45 pm
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className=" bg-[#BDCDD6]  px-4 py-2 flex items-center">
          <div>
            <button className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                className="inline w-6 h-6 "
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.32841 10.4852L10.9853 4.82839C12.1568 3.65681 14.0563 3.65681 15.2279 4.82839C16.3995 5.99996 16.3995 7.89945 15.2279 9.07103L8.51039 15.7885C7.9246 16.3743 6.97485 16.3743 6.38907 15.7885C5.80328 15.2028 5.80328 14.253 6.38907 13.6672L12.3995 7.65681C12.5947 7.46155 12.5947 7.14497 12.3995 6.94971C12.2042 6.75444 11.8876 6.75444 11.6924 6.94971L5.68196 12.9601C4.70565 13.9364 4.70565 15.5193 5.68196 16.4956C6.65827 17.472 8.24118 17.472 9.21749 16.4956L15.935 9.77813C17.4971 8.21604 17.4971 5.68338 15.935 4.12128C14.3729 2.55918 11.8403 2.55918 10.2782 4.12128L4.6213 9.77813C4.42604 9.9734 4.42604 10.29 4.6213 10.4852C4.81656 10.6805 5.13315 10.6805 5.32841 10.4852Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div>
            <button className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                className="inline w-6 h-6 "
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 2C14.9183 2 18.5 5.58172 18.5 10C18.5 14.4183 14.9183 18 10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2ZM10.5 3C6.63401 3 3.5 6.13401 3.5 10C3.5 13.866 6.63401 17 10.5 17C14.366 17 17.5 13.866 17.5 10C17.5 6.13401 14.366 3 10.5 3ZM7.65467 12.4273C9.16416 13.9463 11.5877 14.0045 13.1671 12.5961L13.3453 12.4273C13.54 12.2314 13.8566 12.2304 14.0524 12.4251C14.2265 12.5981 14.2467 12.8674 14.1123 13.0627L14.0547 13.1322L14.0323 13.1545C12.0691 15.1054 8.89616 15.0953 6.94533 13.1322C6.75069 12.9363 6.75169 12.6197 6.94757 12.4251C7.14344 12.2304 7.46002 12.2314 7.65467 12.4273ZM13 7.5C13.5523 7.5 14 7.94772 14 8.5C14 9.05228 13.5523 9.5 13 9.5C12.4477 9.5 12 9.05228 12 8.5C12 7.94772 12.4477 7.5 13 7.5ZM8 7.5C8.55228 7.5 9 7.94772 9 8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5C7 7.94772 7.44772 7.5 8 7.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 mx-4  relative">
            <input
              type="text"
              className=" w-full rounded-xl bg-[#EBEBEB] focus:outline-none pl-4 px-2 py-2 h-10"
              placeholder="Type a message"
            />
            <button className="flex p-2 absolute right-1 top-0.5 rounded-lg  text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent ">
              <svg
                className="w-5 h-5 "
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.22113 0.0514945L16.5756 7.61746C16.8233 7.73952 16.9252 8.03927 16.8031 8.28697C16.7544 8.3858 16.6744 8.46578 16.5756 8.51448L1.22144 16.0803C0.973739 16.2023 0.673989 16.1005 0.551933 15.8528C0.498561 15.7445 0.486189 15.6205 0.517102 15.5038L2.4858 8.07012L0.516755 0.627888C0.446124 0.360932 0.605278 0.087263 0.872235 0.0166325C0.988927 -0.0142416 1.11285 -0.001859 1.22113 0.0514945ZM1.76445 1.43403L3.37357 7.51612L3.43555 7.50412L3.5 7.5H10.5C10.7761 7.5 11 7.72386 11 8C11 8.24546 10.8231 8.44961 10.5899 8.49194L10.5 8.5H3.5C3.4686 8.5 3.43787 8.4971 3.40807 8.49157L1.76508 14.6976L15.2234 8.06597L1.76445 1.43403Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatpage;
