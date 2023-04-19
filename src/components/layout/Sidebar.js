import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="flex bg-[#93BFCF] items-center justify-center shadow-inner">
        <div className="flex flex-col justify-center group items-center px-4   h-full">
          <Link to="/notifications">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex gap-2 flex-col items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700 "
                  viewBox="0 0 19 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.06237 0.996216C13.1123 0.996216 16.419 4.19096 16.5582 8.24527L16.5624 8.49622V12.5932L17.9424 15.7492C18.0114 15.9071 18.0471 16.0776 18.0471 16.25C18.0471 16.9403 17.4874 17.5 16.7971 17.5L12.0624 17.5015C12.0624 19.1583 10.7192 20.5015 9.06237 20.5015C7.46469 20.5015 6.15871 19.2526 6.06746 17.6778L6.06191 17.4992L1.33723 17.5C1.16589 17.5 0.996383 17.4648 0.83923 17.3965C0.206028 17.1215 -0.0843211 16.3852 0.190718 15.752L1.56237 12.5941V8.49611C1.56296 4.34132 4.91445 0.996216 9.06237 0.996216ZM10.5619 17.4992L7.56237 17.5015C7.56237 18.3299 8.23394 19.0015 9.06237 19.0015C9.84206 19.0015 10.4828 18.4066 10.5555 17.6459L10.5619 17.4992ZM9.06237 2.49622C5.74221 2.49622 3.06284 5.17047 3.06237 8.49622V12.9058L1.71839 16H16.4149L15.0624 12.9068L15.0625 8.50907L15.0587 8.28387C14.9477 5.0504 12.3039 2.49622 9.06237 2.49622Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[14px]  group-hover:text-blue-700 ">
              Notification
            </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/chats">

            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0663 0.5C18.4176 0.5 23.5663 5.64873 23.5663 12C23.5663 18.3513 18.4176 23.5 12.0663 23.5C10.1453 23.5 8.29145 23.0278 6.637 22.1401L2.13196 23.4928C1.47077 23.6913 0.773818 23.3163 0.575273 22.6551C0.504828 22.4205 0.504859 22.1704 0.575354 21.9358L1.92844 17.4333C1.03936 15.7779 0.566347 13.9226 0.566347 12C0.566347 5.64873 5.71507 0.5 12.0663 0.5ZM12.0663 2C6.5435 2 2.06635 6.47715 2.06635 12C2.06635 13.7703 2.52631 15.4718 3.38818 16.9725L3.54903 17.2526L2.14562 21.9225L6.81759 20.5197L7.09747 20.6803C8.59728 21.5408 10.2975 22 12.0663 22C17.5892 22 22.0663 17.5228 22.0663 12C22.0663 6.47715 17.5892 2 12.0663 2ZM8.31635 13.5H12.8146C13.2288 13.5 13.5646 13.8358 13.5646 14.25C13.5646 14.6297 13.2825 14.9435 12.9164 14.9932L12.8146 15H8.31635C7.90213 15 7.56635 14.6642 7.56635 14.25C7.56635 13.8703 7.8485 13.5565 8.21458 13.5068L8.31635 13.5H12.8146H8.31635ZM8.31635 9H15.8208C16.235 9 16.5708 9.33579 16.5708 9.75C16.5708 10.1297 16.2887 10.4435 15.9226 10.4932L15.8208 10.5H8.31635C7.90213 10.5 7.56635 10.1642 7.56635 9.75C7.56635 9.3703 7.8485 9.05651 8.21458 9.00685L8.31635 9H15.8208H8.31635Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[14px] group-hover:text-blue-700 ">Chat</span>
            </div>
          </Link>
        </div>

        {/* <div className="flex flex-col ml-1 justify-center group items-center px-4  h-full  ">
          <Link to="/voicecall">

            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[14px] group-hover:text-blue-700 ">Call</span>
            </div>
          </Link>
        </div> */}

        {/* <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/contact">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                    stroke="#222222"
                    strokeLinecap="round"
                    fill="currentColor"
                  />
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="#222222"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-[14px] group-hover:text-blue-700 ">
                Contacts
            </span>
            </div>
          </Link>
        </div> */}

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/video">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700"
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
                    <rect x="0.0625" width="20" height="20" fill="currentColor"/>
                  </g>
                </svg>
              </div>
              <span className="text-[14px] group-hover:text-blue-700">
              Video Call
            </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center group items-center px-4  h-full  ">
          <Link to="/calender">
            <div
              className="border-b-2 group-hover:border-blue-700 border-transparent  flex flex-col gap-2 items-center justify-between py-2">
              <div>
                <svg
                  className="h-5 w-6 group-hover:text-blue-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9V9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9V9Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM7 15C7 14.5286 7 14.2929 7.14645 14.1464C7.29289 14 7.5286 14 8 14H10C10.4714 14 10.7071 14 10.8536 14.1464C11 14.2929 11 14.5286 11 15C11 15.4714 11 15.7071 10.8536 15.8536C10.7071 16 10.4714 16 10 16H8C7.5286 16 7.29289 16 7.14645 15.8536C7 15.7071 7 15.4714 7 15ZM7.14645 18.1464C7 18.2929 7 18.5286 7 19C7 19.4714 7 19.7071 7.14645 19.8536C7.29289 20 7.5286 20 8 20H10C10.4714 20 10.7071 20 10.8536 19.8536C11 19.7071 11 19.4714 11 19C11 18.5286 11 18.2929 10.8536 18.1464C10.7071 18 10.4714 18 10 18H8C7.5286 18 7.29289 18 7.14645 18.1464ZM13 15C13 14.5286 13 14.2929 13.1464 14.1464C13.2929 14 13.5286 14 14 14H16C16.4714 14 16.7071 14 16.8536 14.1464C17 14.2929 17 14.5286 17 15C17 15.4714 17 15.7071 16.8536 15.8536C16.7071 16 16.4714 16 16 16H14C13.5286 16 13.2929 16 13.1464 15.8536C13 15.7071 13 15.4714 13 15ZM13.1464 18.1464C13 18.2929 13 18.5286 13 19C13 19.4714 13 19.7071 13.1464 19.8536C13.2929 20 13.5286 20 14 20H16C16.4714 20 16.7071 20 16.8536 19.8536C17 19.7071 17 19.4714 17 19C17 18.5286 17 18.2929 16.8536 18.1464C16.7071 18 16.4714 18 16 18H14C13.5286 18 13.2929 18 13.1464 18.1464Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7 3L7 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 3L17 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-[14px] group-hover:text-blue-700 ">
              Calendar
            </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
