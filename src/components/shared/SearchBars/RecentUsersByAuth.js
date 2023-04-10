// import React, { useEffect, useRef, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { useGetRegistrationRequestQuery } from "../../../../Redux/features/User/registrationRequestApi";

// const SearchManyUsers = ({ role, setUser, page, limit }) => {
//     const input = useRef(null);
//     const [inputText, setInputText] = useState("");
//     const { data, isLoading, error } = useGetRegistrationRequestQuery({
//         page: page,
//         searchTerm: inputText,
//         role: role || "member",
//         limit: limit,
//     });

//     useEffect(() => {
//         setUser({ data: data?.data, isLoading, error });
//     }, [data, isLoading, error, setUser]);

//     useEffect(() => {
//         let typingTimer;
//         input.current.addEventListener("keyup", function () {
//             typingTimer && clearTimeout(typingTimer);

//             if (input.current.value) {
//                 typingTimer = setTimeout(function () {
//                     setInputText(input.current.value);
//                 }, 300); //user is "finished typing," send search request
//             } else {
//                 setInputText("");
//             }
//         });

//         //on keydown, clear the countdown
//         input.current.addEventListener("keydown", function () {
//             typingTimer && clearTimeout(typingTimer);
//         });
//     });

//     return (
//         <div>
//             <div className="flex mx-auto items-center w-[492px] h-[52px] bg-[#FFFFFF] border border-[#FFE8F3] py-[14px] px-[21px] text-base rounded-lg gap-6">
//                 <FiSearch className="text-[#353751] text-2xl" />
//                 <input
//                     ref={input}
//                     className="font-poppins font-normal text-[#AAAAAA] focus: outline-none h-full w-full"
//                     name="searchUser"
//                     id="search_many"
//                     placeholder="Search user name"
//                 />
//             </div>
//         </div>
//     );
// };

// export default SearchManyUsers;
