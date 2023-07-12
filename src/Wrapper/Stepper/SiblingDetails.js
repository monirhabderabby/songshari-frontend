// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { useFieldArray, useForm } from "react-hook-form";
import { DatePicker } from "antd";
import CreatableSelect from "react-select/creatable";

// Components
import { useSetSiblingDetailMutation } from "../../Redux/features/userInfo/userApi";

const SiblingDetails = ({ setPage }) => {
  // Variable
  const [siblingStatus, setSiblingStatus] = useState();
  const [siblingProfession, setSiblingProfession] = useState();
  const [siblingEducationalQualification, setSiblingEducationalQualification] =
    useState();
  const [siblingDeathDate, setSiblingDeathDate] = useState("");

  const [addedSiblingProfession, setAddedSiblingProfession] = useState([""]);
  const [
    addedSiblingEducationalQualification,
    setAddedSiblingEducationalQualification,
  ] = useState([""]);

  // Redux api
  const [setSiblingDetail, { data: response, isLoading }] =
    useSetSiblingDetailMutation();

  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "siblings",
    control,
  });

  const onSiblingDeathDateChange = (date, dateString) => {
    setSiblingDeathDate(dateString);
  };

  const onSubmit = async (data) => {
    data.siblings.map((s) => delete s.siblingProfession);
    data.siblings.map((s) => delete s.siblingEducationalQualification);
    data.siblings.map((s) => delete s.siblingDeathDate);
    data.siblings.map((s) => (s.ageGap = Number(s.ageGap)));

    data.siblings.map(
      (s, i) => (s.siblingProfession = addedSiblingProfession[i])
    );
    data.siblings.map(
      (s, i) =>
        (s.siblingEducationalQualification =
          addedSiblingEducationalQualification[i])
    );

    const newObject = Object.create(data);

    newObject.siblingName = data.siblingName;
    newObject.elderOrYounger = data.elderOrYounger;
    newObject.ageGap = Number(data.ageGap);
    newObject.siblingProfession = siblingProfession;
    newObject.siblingEducationalQualification = siblingEducationalQualification;
    newObject.siblingIncome = data.siblingIncome;
    newObject.maritalStatus = data.maritalStatus;
    newObject.siblingFamilyInfo = data.siblingFamilyInfo;
    newObject.isSiblingAlive = data.isSiblingAlive;
    newObject.siblingDeathDate = siblingDeathDate;
    newObject.siblingDeathReason = data.siblingDeathReason;

    delete data.siblingName;
    delete data.elderOrYounger;
    delete data.ageGap;
    delete data.siblingIncome;
    delete data.maritalStatus;
    delete data.siblingFamilyInfo;
    delete data.isSiblingAlive;
    delete data.siblingDeathReason;

    data.siblings.push(newObject);

    await setSiblingDetail(data);
  };

  useEffect(() => {
    if (response) {
      setPage(7);
    }
  }, [response, setPage]);

  return (
    <div className="w-full h-auto">
      <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
        <p>Siblings Info</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {/* ---------- Is Sibling Alive  ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <select
                {...register("isSiblingAlive")}
                type="text"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="isSiblingAlive"
                onChange={(e) => setSiblingStatus(e.target.value)}
              >
                <option value="">Is Sibling Alive ?</option>
                <option value="yes">Alive</option>
                <option value="no">Dead</option>
              </select>
            </div>
          </section>
          {/* ---------- Sibling Death Date & Reason ---------- */}
          {siblingStatus === "no" && (
            <>
              <section>
                <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    placeholder="Sibling Death Date"
                    className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="SiblingDeathDate"
                    bordered={false}
                    onChange={onSiblingDeathDateChange}
                  />
                </div>
              </section>
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <textarea
                    {...register("siblingDeathReason")}
                    type="text"
                    rows="1"
                    placeholder="Sibling Death Reason"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="siblingDeathReason"
                  />
                </div>
              </section>
            </>
          )}
          {siblingStatus === "yes" && (
            <>
              {/*------------- Sibling Name ----------------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("siblingName")}
                    type="text"
                    placeholder="Sibling name"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="siblingName"
                  />
                </div>
              </section>
              {/* ---------- Elder Or Younger  ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("elderOrYounger")}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="elderOrYounger"
                  >
                    <option value="">Elder or Younger ?</option>
                    <option value="elder">Elder</option>
                    <option value="younger">Younger</option>
                  </select>
                </div>
              </section>
              {/*------------- Age Gap ----------------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("ageGap")}
                    type="number"
                    placeholder="Age Gap"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="ageGap"
                  />
                </div>
              </section>
              {/* ---------- Sibling Profession ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) => setSiblingProfession(val.value)}
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
                    id="siblingProfession"
                  />
                </div>
              </section>
              {/* ---------- Sibling Educational Qualification ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <CreatableSelect
                    onChange={(val) =>
                      setSiblingEducationalQualification(val.value)
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
                    id="siblingEducationalQualification"
                  />
                </div>
              </section>
              {/* ---------- Sibling Income  ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("siblingIncome")}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="siblingIncome"
                  >
                    <option value="">Select Sibling Income</option>
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
              {/* ---------- Marital Status ---------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("maritalStatus")}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="maritalStatus"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="unmarried">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </section>
              {/*------------- Sibling Family Info ----------------- */}
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <textarea
                    {...register("siblingFamilyInfo")}
                    type="text"
                    rows="1"
                    placeholder="Sibling Family Info"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="siblingFamilyInfo"
                  />
                </div>
              </section>
            </>
          )}
          {fields.map((field, index) => {
            return (
              <section
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                key={field.id}
              >
                {/*------------- Sibling Name ----------------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`siblings.${index}.siblingName`)}
                      type="text"
                      placeholder="Sibling name"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="siblingName"
                    />
                  </div>
                </section>
                {/* ---------- Elder Or Younger  ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register(`siblings.${index}.elderOrYounger`)}
                      type="text"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="elderOrYounger"
                    >
                      <option value="">Elder or Younger ?</option>
                      <option value="elder">Elder</option>
                      <option value="younger">Younger</option>
                    </select>
                  </div>
                </section>
                {/*------------- Age Gap ----------------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(`siblings.${index}.ageGap`)}
                      type="number"
                      placeholder="Age Gap"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="ageGap"
                    />
                  </div>
                </section>
                {/* ---------- Sibling Profession ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <CreatableSelect
                      {...register(`siblings.${index}.siblingProfession`)}
                      onChange={(val) =>
                        setAddedSiblingProfession([
                          ...addedSiblingProfession,
                          val.value,
                        ])
                      }
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
                      id="siblingProfession"
                    />
                  </div>
                </section>
                {/* ---------- Sibling Educational Qualification ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <CreatableSelect
                      {...register(
                        `siblings.${index}.siblingEducationalQualification`
                      )}
                      onChange={(val) =>
                        setAddedSiblingEducationalQualification([
                          ...addedSiblingEducationalQualification,
                          val.value,
                        ])
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
                      id="siblingEducationalQualification"
                    />
                  </div>
                </section>
                {/* ---------- Sibling Income  ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register(`siblings.${index}.siblingIncome`)}
                      type="text"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="siblingIncome"
                    >
                      <option value="">Select Sibling Income</option>
                      <option value={"Below 15,000 BDT"}>
                        Below 15,000 BDT
                      </option>
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
                      <option value={"90000-100000 BDT"}>
                        90000-100000 BDT
                      </option>
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
                {/* ---------- Marital Status ---------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register(`siblings.${index}.maritalStatus`)}
                      type="text"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="maritalStatus"
                    >
                      <option value="">Select Marital Status</option>
                      <option value="unmarried">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </section>
                {/*------------- Sibling Family Info ----------------- */}
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <textarea
                      {...register(`siblings.${index}.siblingFamilyInfo`)}
                      type="text"
                      rows="1"
                      placeholder="Sibling Family Info"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="siblingFamilyInfo"
                    />
                  </div>
                </section>
                <button
                  className="p-3 text-sm text-center font-medium bg-red-100 text-red-500 rounded-lg"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </section>
            );
          })}
          <button
            type="button"
            className="p-3 text-sm text-center font-medium text-gray-400 bg-gray-100 rounded-lg"
            onClick={() => {
              append({
                siblingName: "",
                elderOrYounger: "",
                ageGap: null,
                siblingProfession: "",
                siblingEducationalQualification: "",
                siblingIncome: "",
                maritalStatus: "",
                siblingFamilyInfo: "",
              });
            }}
          >
            + Add More Siblings
          </button>
        </section>
        <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
          <button
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            onClick={() => setPage(5)}
          >
            Previous
          </button>
          <input
            type="submit"
            value={isLoading ? "Saving..." : "Next"}
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default SiblingDetails;
