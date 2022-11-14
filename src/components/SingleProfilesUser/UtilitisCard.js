import React from "react";
import "../../assets/css/utiliticard.css";

const UtilitisCard = () => {
    return (
        <div>
            <div className="utiliti-card my-6 flex items-center justify-around">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100">
                    <button
                        type="button"
                        className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-sm font-medium text-center"
                    >
                        <svg color="#FF1D8E" class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span class="sr-only">Notifications</span>
                        <div class="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-gradient rounded-full border-2 border-white dark:border-gray-900">
                            <small>20</small>
                        </div>
                    </button>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100">
                    <button
                        type="button"
                        className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-sm font-medium text-center"
                    >
                        <svg color="#FF1D8E" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>

                        <span class="sr-only">Notifications</span>
                        <div class="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-gradient rounded-full border-2 border-white dark:border-gray-900">
                            <small>12</small>
                        </div>
                    </button>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100">
                    <button
                        type="button"
                        className="w-12 h-12 rounded-full inline-flex relative items-center p-3 text-sm font-medium text-center text-white "
                    >
                        <svg color="#FF1D8E" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default UtilitisCard;
