import React from "react";
import { DatePicker, Input, Radio, Select, Space } from "antd";

export default function MartialInfoForm({ basicInfo, setBasicInfo }) {
    return (
        <div>
            {basicInfo?.martialStatus === "married" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">How Many Partner Do You Have</h1>
                    <div className="flex justify-center items-center mb-4">
                        <button onClick={() => setBasicInfo({ ...basicInfo, partnerQuantity: basicInfo?.partnerQuantity > 0 ? basicInfo?.partnerQuantity - 1 : 0 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                            -
                        </button>
                        <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{basicInfo?.partnerQuantity}</div>
                        <button onClick={() => setBasicInfo({ ...basicInfo, partnerQuantity: basicInfo?.partnerQuantity + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                            +
                        </button>
                    </div>
                </div>
            )}
            {basicInfo?.martialStatus === "married" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Reason For Another Marriage</h1>
                    <Input className="w-full mb-4" onChange={e => setBasicInfo({ ...basicInfo, marriedReason: e?.target.value })} placeholder="Type reason" />
                </div>
            )}

            {basicInfo?.martialStatus === "married" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-4">
                        Is Your Current Partner Aware Of Your Decision About Another Marriage?
                    </h1>
                    <Radio.Group onChange={(e) => { setBasicInfo({ ...basicInfo, awareOfPartner: e?.target.value }) }} value={basicInfo?.awareOfPartner} className="mb-4">
                        <Space direction="vertical">
                            <Radio value={"yes"}>Yes</Radio>
                            <Radio value={"no"}>No</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            )}

            {basicInfo?.martialStatus === "divorced" || basicInfo?.martialStatus === "married" ? (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Marriage Date</h1>
                    <DatePicker placeholder="Marriage Date" className="w-full mb-4" onChange={(date, dateString) => setBasicInfo({ ...basicInfo, marriageDate: dateString })} />
                </div>
            ) : (<></>)}

            {basicInfo?.martialStatus === "divorced" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Divorce Date</h1>
                    <DatePicker placeholder="Divorce Date" className="w-full mb-4" onChange={(date, dateString) => setBasicInfo({ ...basicInfo, divorceDate: dateString })} />
                </div>
            )}

            {basicInfo?.martialStatus === "divorced" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Reason of Divorce</h1>
                    <Input className="w-full mb-4" onChange={e => setBasicInfo({ ...basicInfo, divorceReason: e?.target.value })} placeholder="Type reason" />
                </div>
            )}

            {basicInfo?.martialStatus === "widowed" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Marriage Date</h1>
                    <DatePicker placeholder="Marriage Date" className="w-full mb-4" onChange={(date, dateString) => setBasicInfo({ ...basicInfo, marriageDate: dateString })} />
                </div>
            )}

            {basicInfo?.martialStatus === "widowed" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Partner's Death Date</h1>
                    <DatePicker placeholder="Partner's Death Date" className="w-full mb-4" onChange={(date, dateString) => setBasicInfo({ ...basicInfo, partnerDeathDate: dateString })} />
                </div>
            )}

            {basicInfo?.martialStatus !== "" && basicInfo?.martialStatus !== "single" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Do You Have children</h1>
                    <Select
                        className="w-full mb-4"
                        onChange={value => setBasicInfo({ ...basicInfo, haveChildren: value })}
                        placeholder="Have any children?"
                        options={[
                            {
                                value: "yes",
                                label: "Yes",
                            },
                            {
                                value: "no",
                                label: "No",
                            },
                        ]}
                    />
                </div>
            )}

            {basicInfo?.haveChildren === "yes" && basicInfo?.maritalStatus !== "single" && (
                <div>
                    <div>
                        <h1 className="text-base leading-6 font-medium mb-2">Number of Boy</h1>
                        <div className="flex justify-center items-center mb-4">
                            <button onClick={() => setBasicInfo({ ...basicInfo, boyQuantity: basicInfo?.boyQuantity > 0 ? basicInfo?.boyQuantity - 1 : 0 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                -
                            </button>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{basicInfo?.boyQuantity}</div>
                            <button onClick={() => setBasicInfo({ ...basicInfo, boyQuantity: basicInfo?.boyQuantity + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base leading-6 font-medium mb-2">Boy Age</h1>
                        <div className="flex justify-center items-center mb-4">
                            <button onClick={() => setBasicInfo({ ...basicInfo, boyAge: basicInfo?.boyAge > 0 ? basicInfo?.boyAge - 1 : 0 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                -
                            </button>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{basicInfo?.boyAge}</div>
                            <button onClick={() => setBasicInfo({ ...basicInfo, boyAge: basicInfo?.boyAge + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base leading-6 font-medium mb-2">Number of Girl</h1>
                        <div className="flex justify-center items-center mb-4">
                            <button onClick={() => setBasicInfo({ ...basicInfo, girlQuantity: basicInfo?.girlQuantity > 0 ? basicInfo?.girlQuantity - 1 : 0 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                -
                            </button>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{basicInfo?.girlQuantity}</div>
                            <button onClick={() => setBasicInfo({ ...basicInfo, girlQuantity: basicInfo?.girlQuantity + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base leading-6 font-medium mb-2">Girl Age</h1>
                        <div className="flex justify-center items-center mb-4">
                            <button onClick={() => setBasicInfo({ ...basicInfo, girlAge: basicInfo?.girlAge > 0 ? basicInfo?.girlAge - 1 : 0 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                -
                            </button>
                            <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">{basicInfo?.girlAge}</div>
                            <button onClick={() => setBasicInfo({ ...basicInfo, girlAge: basicInfo?.girlAge + 1 })} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {basicInfo?.martialStatus === "divorced" && basicInfo?.haveChildren === "yes" && (
                <div>
                    <h1 className="text-base leading-6 font-medium mb-2">Do Your Children Live with You</h1>
                    <Radio.Group onChange={(e) => setBasicInfo({ ...basicInfo, childrenLiveStatus: e.target.value })} value={basicInfo?.childrenLiveStatus} className="mb-4">
                        <Space direction="vertical">
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                            <Radio value="sometimes">Sometimes</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            )}
        </div>
    )
}
