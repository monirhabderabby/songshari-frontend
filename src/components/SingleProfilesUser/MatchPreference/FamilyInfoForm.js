import React from "react";
import { AutoComplete, Radio, Space } from "antd";

export default function FamilyInfoForm({ professions, familyInfo, setFamilyInfo }) {
    return (
        <div className="w-full mx-4">
            <div className="mb-4">
                <h1>Family information</h1>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Father Status</h1>
                <Radio.Group onChange={e => setFamilyInfo({ ...familyInfo, fatherStatus: e.target.value })} value={familyInfo?.fatherStatus} className="mb-4">
                    <Space direction="vertical">
                        <Radio value={"alive"}>Alive</Radio>
                        <Radio value={"dead"}>Dead</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Father Profession</h1>
                <AutoComplete
                    placeholder="Input profession"
                    className="w-full mb-4"
                    onChange={(value) => setFamilyInfo({ ...familyInfo, fatherProfession: value })}
                    filterOption={true}
                >
                    {professions.map((prof, index) => {
                        return (
                            <AutoComplete.Option key={index} value={prof}>
                                {prof}
                            </AutoComplete.Option>
                        );
                    })}
                </AutoComplete>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mt-2 mb-2">Father Income</h1>
                <Radio.Group onChange={e => setFamilyInfo({ ...familyInfo, fatherIncome: e?.target.value })} value={familyInfo?.fatherIncome} className="mb-4">
                    <Space direction="vertical">
                        <Radio value={"Below 15,000 BDT"}>Below 15,000 BDT</Radio>
                        <Radio value={"15000-20000 BDT"}>15000-20000 BDT</Radio>
                        <Radio value={"20000-25000 BDT"}>20000-25000 BDT</Radio>
                        <Radio value={"25000-30000 BDT"}>25000-30000 BDT</Radio>
                        <Radio value={"30000-35000 BDT"}>30000-35000 BDT</Radio>
                        <Radio value={"35000-40000 BDT"}>35000-40000 BDT</Radio>
                        <Radio value={"45000-50000 BDT"}>45000-50000 BDT</Radio>
                        <Radio value={"50000-60000 BDT"}>50000-60000 BDT</Radio>
                        <Radio value={"60000-70000 BDT"}>60000-70000 BDT</Radio>
                        <Radio value={"70000-80000 BDT"}>70000-80000 BDT</Radio>
                        <Radio value={"80000-90000 BDT"}>80000-90000 BDT</Radio>
                        <Radio value={"90000-100000 BDT"}>90000-100000 BDT</Radio>
                        <Radio value={"100000-150000 BDT"}>100000-150000 BDT</Radio>
                        <Radio value={"150000-200000 BDT"}>150000-200000 BDT</Radio>
                        <Radio value={"200000-250000 BDT"}>200000-250000 BDT</Radio>
                        <Radio value={"300000+ BDT"}>300000+ BDT</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mt-2 mb-2">Mother Status</h1>
                <Radio.Group onChange={e => setFamilyInfo({ ...familyInfo, motherStaus: e.target.value })} value={familyInfo.motherStaus} className="mb-4">
                    <Space direction="vertical">
                        <Radio value={"alive"}>Alive</Radio>
                        <Radio value={"dead"}>Dead</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mt-2 mb-2">Mother Profession</h1>
                <AutoComplete
                    placeholder="Input profession"
                    className="w-full mb-4"
                    onChange={(value) => setFamilyInfo({ ...familyInfo, motherProfession: value })}
                    filterOption={true}
                >
                    {professions.map((prof, index) => {
                        return (
                            <AutoComplete.Option key={index} value={prof}>
                                {prof}
                            </AutoComplete.Option>
                        );
                    })}
                </AutoComplete>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mt-2 mb-2">Mother Income</h1>
                <Radio.Group onChange={e => setFamilyInfo({ ...familyInfo, mohterIncome: e?.target.value })} value={familyInfo?.mohterIncome} className="mb-4">
                    <Space direction="vertical">
                        <Radio value={"Below 15,000 BDT"}>Below 15,000 BDT</Radio>
                        <Radio value={"15000-20000 BDT"}>15000-20000 BDT</Radio>
                        <Radio value={"20000-25000 BDT"}>20000-25000 BDT</Radio>
                        <Radio value={"25000-30000 BDT"}>25000-30000 BDT</Radio>
                        <Radio value={"30000-35000 BDT"}>30000-35000 BDT</Radio>
                        <Radio value={"35000-40000 BDT"}>35000-40000 BDT</Radio>
                        <Radio value={"45000-50000 BDT"}>45000-50000 BDT</Radio>
                        <Radio value={"50000-60000 BDT"}>50000-60000 BDT</Radio>
                        <Radio value={"60000-70000 BDT"}>60000-70000 BDT</Radio>
                        <Radio value={"70000-80000 BDT"}>70000-80000 BDT</Radio>
                        <Radio value={"80000-90000 BDT"}>80000-90000 BDT</Radio>
                        <Radio value={"90000-100000 BDT"}>90000-100000 BDT</Radio>
                        <Radio value={"100000-150000 BDT"}>100000-150000 BDT</Radio>
                        <Radio value={"150000-200000 BDT"}>150000-200000 BDT</Radio>
                        <Radio value={"200000-250000 BDT"}>200000-250000 BDT</Radio>
                        <Radio value={"300000+ BDT"}>300000+ BDT</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Number of Siblings</h1>
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Brothers</h1>
                    <div className="flex justify-center items-center mb-4">
                        <button
                            onClick={() => setFamilyInfo({ ...familyInfo, brother: familyInfo?.brother > 0 ? familyInfo?.brother - 1 : 0 })}
                            className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                        >
                            -
                        </button>
                        <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{familyInfo?.brother}</div>
                        <button
                            onClick={() => setFamilyInfo({ ...familyInfo, brother: familyInfo?.brother + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Sisters</h1>
                    <div className="flex justify-center items-center mb-4">
                        <button
                            onClick={() => setFamilyInfo({ ...familyInfo, sister: familyInfo?.sister > 0 ? familyInfo?.sister - 1 : 0 })}
                            className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                        >
                            -
                        </button>
                        <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{familyInfo?.sister}</div>
                        <button
                            onClick={() => setFamilyInfo({ ...familyInfo, sister: familyInfo?.sister + 1 })}
                            className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
