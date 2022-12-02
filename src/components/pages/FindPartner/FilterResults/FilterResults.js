import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/topProfile.css";
import { buildFilterQueryString } from "../../../../assets/utilities/getUsersByFilter/buildFilterQueryString";
import { useGetRecentUsersQuery } from "../../../../Redux/features/AllRecentData/recentApi";
import { UserCard } from "../../Shared/userCard/UserCard";

export const FilterResults = () => {
    const { data, isLoading } = useGetRecentUsersQuery();
    const array = [1, 2, 3];
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        const result = buildFilterQueryString(filter);
        console.log(result);
    }, [filter]);

    return (
        <div className="mt-[30px] grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3  gap-x-8">
            {data?.map(profile => {
                return <UserCard />;
            })}
            {isLoading &&
                array.map(a => {
                    return (
                        <>
                            <div key={a} className="h-[400px] w-[300px] shadow-2xl">
                                <div className="h-[290px] w-full bg-gray-100"></div>
                                <div className="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
                                    <div className="flex items-center justify-start gap-x-5">
                                        <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                                        <div className="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                    <div className="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    );
};
