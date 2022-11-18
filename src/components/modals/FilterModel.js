import React from "react";
import { useForm } from "react-hook-form";

const FilterModel = ({ visiblity, onClose }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        onClose();
    };

    if (!visiblity) return null;

    const inlineStyle = () => {
        return {
            backgroundColor: "yellow",
            backgroundImage: "linear-gradient(166deg, rgb(242, 40, 118) -30%, rgb(148, 45, 217) 100%)",
            padding: "5px 65px",
            borderRadius: "5px",
            color: "white",
            fontSize: "25px",
            fontFamily: "Georgia, 'Times New Roman', Times, serif"
        };
    };

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white p-2 rounded w-full lg:w-2/5">
                    <div className="py-4">
                        <div className="flex justify-between">
                            <h1 className="text-3xl font-semibold">Filter Search</h1>
                            <button onClick={onClose} className="bg-gray-800 text-red-600 font-extrabold px-4 rounded-md">
                                X
                            </button>
                        </div>
                        <div className="py-6 px-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <div>
                                        <div className="px-4 h-25 items-center flex justify-center py-2 border-b">
                                            <div className="pr-4">I am : </div>
                                            <div className="form-check">
                                                <label htmlhtmlFor="pizza">
                                                    <input className="border rounded-full px-2"
                                                        {...register('iam', { required: true })}
                                                        type="radio"
                                                        name="iam"
                                                        value="man"
                                                        id="man"
                                                    />{' '}
                                                    Man
                                                </label>
                                            </div>
                                            <div className="form-check pl-6">
                                                <label htmlhtmlFor="woman">
                                                    <input
                                                        {...register('iam', { required: true })}
                                                        type="radio"
                                                        name="iam"
                                                        value="woman"
                                                        className="border rounded-full px-2"
                                                        id="woman"
                                                    />{' '}
                                                    Woman
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <hr />
                                    </div>
                                    <div>
                                        <div>
                                            <div className="px-4 h-25 items-center flex justify-center py-2 border-b">
                                                <div className="pr-4">Seeking a : </div>
                                                <div className="form-check">
                                                    <label htmlhtmlFor="pizza">
                                                        <input className="border rounded-full px-2"
                                                            {...register('interest', { required: true })}
                                                            type="radio"
                                                            name="interest"
                                                            value="man"
                                                            id="man"
                                                        />{' '}
                                                        Man
                                                    </label>
                                                </div>
                                                <div className="form-check pl-6">
                                                    <label htmlhtmlFor="woman">
                                                        <input
                                                            {...register('interest', { required: true })}
                                                            type="radio"
                                                            name="interest"
                                                            value="woman"
                                                            className="border rounded-full px-2"
                                                            id="woman"
                                                        />{' '}
                                                        Woman
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="single-option">
                                        <div className="px-4 flex justify-center py-2 border-b">
                                            <div className="pr-4">Age : </div>
                                            <div className="border rounded-full px-2">
                                                <select {...register("firstAge", { required: true })}>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                </select>
                                            </div>
                                            <div className="px-4">
                                                -
                                            </div>
                                            <div className="border rounded-full px-2">
                                                <select {...register("lastAge", { required: true })}>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <hr />
                                    </div>
                                    <div className="px-4 flex justify-center py-2 border-b">
                                        <div className="pr-4">Country : </div>
                                        <div className="border rounded-full px-2">
                                            <select {...register("country", { required: true })}>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="India">India</option>
                                                <option value="Pakistan">Pakistan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button style={inlineStyle()} type="submit">Join preimium</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModel;

/* 
<input defaultValue="test" {...register("example")} />
                                <input {...register("exampleRequired", { required: true })} />
*/