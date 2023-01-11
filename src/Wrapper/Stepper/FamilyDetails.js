// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import CreatableSelect from "react-select/creatable";

// Components
import { useUpdateFamilyDetailsMutation } from "../../Redux/features/userInfo/userApi";

const FamilyDetails = ({ setPage }) => {
  // Variable
  const [fatherStatus, setFatherStatus] = useState();
  const [fatherProfession, setFatherProfession] = useState();
  const [fatherEducationalQualification, setFatherEducationalQualification] =
    useState();
  const [fatherDateOfBirth, setFatherDateOfBirth] = useState("");
  const [fatherDeathDate, setFatherDeathDate] = useState("");

  const [motherStatus, setMotherStatus] = useState();
  const [motherProfession, setMotherProfession] = useState();
  const [motherEducationalQualification, setMotherEducationalQualification] =
    useState();
  const [motherDateOfBirth, setMotherDateOfBirth] = useState("");
  const [motherDeathDate, setMotherDeathDate] = useState("");

  // Redux api
  const [updateFamilyDetails, { data: response, isLoading }] =
    useUpdateFamilyDetailsMutation();

  const { register, handleSubmit } = useForm();

  const onFatherDateOfBirthChange = (date, dateString) => {
    setFatherDateOfBirth(dateString);
  };
  const onFatherDeathDateChange = (date, dateString) => {
    setFatherDeathDate(dateString);
  };
  const onMotherDateOfBirthChange = (date, dateString) => {
    setMotherDateOfBirth(dateString);
  };
  const onMotherDeathDateChange = (date, dateString) => {
    setMotherDeathDate(dateString);
  };

  const onSubmit = async (data) => {
    data = {
      ...data,
      fatherProfession,
      fatherEducationalQualification,
      fatherDateOfBirth,
      fatherDeathDate,
      motherProfession,
      motherEducationalQualification,
      motherDateOfBirth,
      motherDeathDate,
    };
    await updateFamilyDetails(data);
  };

  useEffect(() => {
    if (response) {
      setPage(6);
    }
  }, [response, setPage]);

  return (
    <div className="w-full h-auto">
      <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
        <p>Family Info</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {/* ---------- Is Father Alive  ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <select
                {...register("isFatherAlive")}
                type="text"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="isFatherAlive"
                onChange={(e) => setFatherStatus(e.target.value)}
              >
                <option value="">Is Father Alive ?</option>
                <option value="yes">Alive</option>
                <option value="no">Dead</option>
              </select>
            </div>
          </section>
          {/* ---------- Father Death Date ---------- */}
          {fatherStatus === "no" && (
            <section>
              <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                <DatePicker
                  placeholder="Father Death Date"
                  className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                  id="fatherDeathDate"
                  bordered={false}
                  onChange={onFatherDeathDateChange}
                />
              </div>
            </section>
          )}
          {fatherStatus === "yes" && (
            <>
              {/*------------- Father Name ----------------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("fatherName")}
                    type="text"
                    placeholder="Father name"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="fatherName"
                  />
                </div>
              </section>
              {/* ---------- Father Date of Birth ---------- */}
              <section>
                <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    placeholder="Date of Birth"
                    className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="fatherDateOfBirth"
                    bordered={false}
                    onChange={onFatherDateOfBirthChange}
                  />
                </div>
              </section>
              {/* ---------- Father Profession ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) => setFatherProfession(val.value)}
                    type="text"
                    placeholder="Select Profession"
                    options={[
                      {
                        value: "Teacher",
                        label: "Teacher",
                      },
                      {
                        value: "Doctor",
                        label: "Doctor",
                      },
                    ]}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#9CA3AF",
                        height: "45px",
                      }),
                    }}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="fatherProfession"
                  />
                </div>
              </section>
              {/* ---------- Father Educational Qualification ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) =>
                      setFatherEducationalQualification(val.value)
                    }
                    type="text"
                    placeholder="Select Education"
                    options={[
                      {
                        value: "HSC",
                        label: "HSC",
                      },
                      {
                        value: "Hon's",
                        label: "Hon's",
                      },
                      {
                        value: "Master's",
                        label: "Master's",
                      },
                    ]}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#9CA3AF",
                        height: "45px",
                      }),
                    }}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="fatherEducationalQualification"
                  />
                </div>
              </section>
              {/* ---------- Father Income  ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("fatherIncome")}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="fatherIncome"
                  >
                    <option value="">Select Father Income</option>
                    <option value={"Below 15,000 BDT"}>Below 15,000 BDT</option>
                    <option value={"15000-20000 BDT"}>15000-20000 BDT</option>
                    <option value={"20000-25000 BDT"}>20000-25000 BDT</option>
                    <option value={"25000-30000 BDT"}>25000-30000 BDT</option>
                    <option value={"30000-35000 BDT"}>30000-35000 BDT</option>
                    <option value={"35000-40000 BDT"}>35000-40000 BDT</option>
                    <option value={"45000-50000 BDT"}>45000-50000 BDT</option>
                    <option value={"50000-60000 BDT"}>50000-60000 BDT</option>
                    <option value={"60000-70000 BDT"}>60000-70000 BDT</option>
                    <option value={"70000-80000 BDT"}>70000-80000 BDT</option>
                    <option value={"80000-90000 BDT"}>80000-90000 BDT</option>
                    <option value={"90000-100000 BDT"}>90000-100000 BDT</option>
                    <option value={"100000-150000 BDT"}>
                      100000-150000 BDT
                    </option>
                    <option value={"150000-200000 BDT"}>
                      150000-200000 BDT
                    </option>
                    <option value={"200000-250000 BDT"}>
                      200000-250000 BDT
                    </option>
                    <option value={"300000+ BDT"}>300000+ BDT</option>
                  </select>
                </div>
              </section>
            </>
          )}
        </section>
        <section className="md:w-full mt-3 w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {/* ---------- Is Mother Alive  ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <select
                {...register("isMotherAlive")}
                type="text"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="isMotherAlive"
                onChange={(e) => setMotherStatus(e.target.value)}
              >
                <option value="">Is Mother Alive ?</option>
                <option value="yes">Alive</option>
                <option value="no">Dead</option>
              </select>
            </div>
          </section>
          {/* ---------- Mother Death Date ---------- */}
          {motherStatus === "no" && (
            <section>
              <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                <DatePicker
                  placeholder="Mother Death Date"
                  className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                  id="motherDeathDate"
                  bordered={false}
                  onChange={onMotherDeathDateChange}
                />
              </div>
            </section>
          )}
          {motherStatus === "yes" && (
            <>
              {/*------------- Mother Name ----------------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("motherName")}
                    type="text"
                    placeholder="Mother name"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="motherName"
                  />
                </div>
              </section>
              {/* ---------- Mother Date of Birth ---------- */}
              <section>
                <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    placeholder="Date of Birth"
                    className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="motherDateOfBirth"
                    bordered={false}
                    onChange={onMotherDateOfBirthChange}
                  />
                </div>
              </section>
              {/* ---------- Mother Profession ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) => setMotherProfession(val.value)}
                    type="text"
                    placeholder="Select Profession"
                    options={[
                      {
                        value: "Teacher",
                        label: "Teacher",
                      },
                      {
                        value: "Doctor",
                        label: "Doctor",
                      },
                    ]}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#9CA3AF",
                        height: "45px",
                      }),
                    }}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="motherProfession"
                  />
                </div>
              </section>
              {/* ---------- Mother Educational Qualification ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) =>
                      setMotherEducationalQualification(val.value)
                    }
                    type="text"
                    placeholder="Select Education"
                    options={[
                      {
                        value: "HSC",
                        label: "HSC",
                      },
                      {
                        value: "Hon's",
                        label: "Hon's",
                      },
                      {
                        value: "Master's",
                        label: "Master's",
                      },
                    ]}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#9CA3AF",
                        height: "45px",
                      }),
                    }}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="motherEducationalQualification"
                  />
                </div>
              </section>
              {/* ---------- Mother Income  ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("motherIncome")}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="motherIncome"
                  >
                    <option value="">Select Mother Income</option>
                    <option value={"Below 15,000 BDT"}>Below 15,000 BDT</option>
                    <option value={"15000-20000 BDT"}>15000-20000 BDT</option>
                    <option value={"20000-25000 BDT"}>20000-25000 BDT</option>
                    <option value={"25000-30000 BDT"}>25000-30000 BDT</option>
                    <option value={"30000-35000 BDT"}>30000-35000 BDT</option>
                    <option value={"35000-40000 BDT"}>35000-40000 BDT</option>
                    <option value={"45000-50000 BDT"}>45000-50000 BDT</option>
                    <option value={"50000-60000 BDT"}>50000-60000 BDT</option>
                    <option value={"60000-70000 BDT"}>60000-70000 BDT</option>
                    <option value={"70000-80000 BDT"}>70000-80000 BDT</option>
                    <option value={"80000-90000 BDT"}>80000-90000 BDT</option>
                    <option value={"90000-100000 BDT"}>90000-100000 BDT</option>
                    <option value={"100000-150000 BDT"}>
                      100000-150000 BDT
                    </option>
                    <option value={"150000-200000 BDT"}>
                      150000-200000 BDT
                    </option>
                    <option value={"200000-250000 BDT"}>
                      200000-250000 BDT
                    </option>
                    <option value={"300000+ BDT"}>300000+ BDT</option>
                  </select>
                </div>
              </section>
            </>
          )}
        </section>
        <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
          <button
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            onClick={() => setPage(4)}
          >
            Previous
          </button>
          <input
            type="submit"
            value={isLoading ? "Saving..." : "Submit"}
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default FamilyDetails;
