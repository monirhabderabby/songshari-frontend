import React from "react";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../Redux/features/userInfo/userApi";
import { CircularProgress } from "material-ui";

const DeactivateForm = ({ register, onSubmit, handleSubmit, isLoading }) => {
  const { data } = useGetProfileDetailsWIthAuthQuery();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="option1">
          Deactivate for
        </label>
        <select
          {...register("deactivatedFor",{ required: true })}
          className="block appearance-none w-full border border-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
          id="option1"
        >
          <option value="">--Please select an option--</option>
          <option value="7">7 days</option>
          <option value="15">15 days</option>
          <option value="30">1 month</option>
          <option value="180">6 month</option>
          <option value="365">1 year</option>
          <option value="">Until I activate my account</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="option2">
          Why do you want to deactivate
        </label>
        <select
          {...register("reason",{ required: true })}
          className="block appearance-none w-full border border-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
          id="option2"
          // value={option2}
          //   onChange={handleOption2Change}
        >
          <option value="">--Please select an option--</option>
          <option value="This is temporary. I'll be back">
            This is temporary. I'll be back
          </option>
          <option value="I get too many mail from Shonshari">
            I get too many mail from Shonshari
          </option>
          <option value="I spend too much time here">
            I spend too much time here
          </option>
          <option value="I have a privacy concern">
            I have a privacy concern
          </option>
          <option value="I have another account">I have another account</option>
          <option value="I don't fine Shongshari useful">
            I don't fine Shongshari useful
          </option>
          <option value="I don't understand how to use Shongshari">
            I don't understand how to use Shongshari
          </option>
          <option value="I don't feel safe on Shonshari">
            I don't feel safe on Shonshari
          </option>
          <option value="My account was hacked">My account was hacked</option>
          <option className="h-24" value="Other reason">
            Other reason
          </option>
        </select>
      </div>
      {data?.password && <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="pass">
          Enter your current password
        </label>
        <input
          {...register("password")}
          className="block appearance-none w-full border border-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
          type="password"
          placeholder="Enter your password"
          id="pass"
        />
      </div>}

      <div className="flex items-center justify-center">
        {!isLoading && <button
          className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-56 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>}

        {isLoading && <button
          className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-56  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <CircularProgress size={19}/> 
        </button>}
      </div>
    </form>
  );
};

export { DeactivateForm };
