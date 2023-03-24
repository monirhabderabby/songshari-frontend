import React, { useState } from "react";
import getCurrentRange from "../../../../../assets/utilities/Pagination/getCurrentRange";

export const CoursesCountBox = ({ total, page }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(1);

    let content;
    if (page) {
        content = <p>{getCurrentRange(9, page, total)}</p>;
    }

    const selection = [
        {
            id: 1,
            name: "Sort by Popularity",
        },
        {
            id: 2,
            name: "Sort by latest",
        },
        {
            id: 3,
            name: "Sort by price: low to high",
        },
        {
            id: 4,
            name: "Sort by price: high to low",
        },
    ];

    const getName = selectedID => {
        const item = selection.find(item => item.id === selectedID);
        return item ? item.name : null;
    };

    return (
        <div className="flex h-[52px] w-full gap-x-[10px] mb-[42px]">
            <div className="h-full hidden lg:flex w-9/12  border-[1px] text-[#585e8c] text-[16px] justify-start items-center border-[#d0deef] rounded-[4px] px-[20px] font-Nunito">
                {content}
            </div>
            <div className="w-full lg:w-3/12  h-full">
                <div>
                    <div class="relative">
                        <button
                            type="button"
                            class="relative w-full cursor-default rounded-[4px] bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 h-[52px] shadow-sm ring-1 ring-inset ring-[#d0deef] focus:outline-none focus:ring-1 focus:ring-pink-600 sm:text-sm sm:leading-6 -z-30 lg:z-50"
                            onClick={() => setShow(!show)}
                        >
                            <span class="flex items-center">
                                <span class="ml-3 block truncate">{getName(selected)}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>

                        <ul
                            class={`absolute z-10 mt-1 ${
                                show ? "top-[55px]" : "top-0"
                            } max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 duration-500 ${
                                show && "translate-y-[0px]"
                            } ring-black ring-opacity-5 focus:outline-none sm:text-sm ${show ? "block" : "hidden"}`}
                            tabindex="-1"
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-option-3"
                        >
                            {selection?.map(item => {
                                return (
                                    <li
                                        class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                                        id="listbox-option-0"
                                        key={item.id}
                                        role="option"
                                        aria-selected
                                        onClick={() => {
                                            setSelected(item.id);
                                            setShow(false);
                                        }}
                                    >
                                        <div class="flex items-center">
                                            <span class="font-normal text-[12px] ml-3 block truncate">{item.name}</span>
                                        </div>
                                        {selected === item.id && (
                                            <span class="text-[rgb(242,40,118)] absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
