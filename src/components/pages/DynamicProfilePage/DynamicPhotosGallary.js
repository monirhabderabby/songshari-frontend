import React from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";

export const DynamicPhotosGallary = () => {
    const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    return (
        <div>
            <CustomHeader title={"Galerry"} />
            <section className="max-w-[1200px] mx-auto mt-[58px]">
                <h1 className="text-[32px] leading-[31px] font-semibold font-fira text-[#333333]">All Photos</h1>
                <div className="mt-[40px] grid grid-cols-3 gap-[41px] ">
                    {photos.map(p => {
                        return (
                            <>
                                <img
                                    src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/310814492_3383940818533755_1197676094327108122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGA9lfn6WujkVz6fYFMVoFwjDMuNZrRHNWMMy41mtEc1bicZO-AvSF9FXCNTfRYimndHxJlLdYlNYLMqh4qcFXK&_nc_ohc=5U4tQU61ozwAX_tpt4B&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBsaMUFAS7yYXwbj1q1dtbGWDGbsQBJ6zjMlpr6hm2VYQ&oe=6391729C"
                                    className={`${p === 1 && "col-span-2"} ${p === 2 && "grid-rows-2"} rounded-[15px]`}
                                    alt=""
                                />
                            </>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
