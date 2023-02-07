// Configuration
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Third party packages
import Select from "react-select";
import {
    setAgentSearchTerm,
    setKaziSearchTerm,
    setLawyerSearchTerm,
} from "../../../../Redux/features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterSlice";

export const FindLawyerKaziAgentHeader = ({ page }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const dispatch = useDispatch();
    const options = [
        {
            value: "Recent",
            label: "Recent",
        },
        {
            value: "Top Seller",
            label: "Top seller",
        },
        {
            value: "Best Seller",
            label: "Best Seller",
        },
    ];

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (page === "lawyer") {
            dispatch(setLawyerSearchTerm(debouncedSearchTerm));
        } else if (page === "kazi") {
            dispatch(setKaziSearchTerm(debouncedSearchTerm));
        } else if (page === "agent") {
            dispatch(setAgentSearchTerm(debouncedSearchTerm));
        }
    }, [debouncedSearchTerm, page, dispatch]);
    return (
        <div className="w-full flex justify-between px-[20px]">
            <div
                style={{
                    border: "2px solid #FFE8F3",
                }}
                className="relative flex items-center w-[386px] h-[45px] shadow-sm rounded-lg bg-white overflow-hidden"
            >
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search user name.."
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <Select
                    styles={{
                        control: (base, state) => ({
                            ...base,
                            height: "43px",
                            border: state.isFocused ? "2px solid #A32CCB" : "2px solid #FFE8F3",
                        }),
                    }}
                    defaultValue={options[0]}
                    options={options}
                    onChange={selected => console.log(selected)}
                    isDisabled
                />
            </div>
        </div>
    );
};
