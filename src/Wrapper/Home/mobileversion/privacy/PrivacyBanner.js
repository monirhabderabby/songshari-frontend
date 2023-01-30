import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

export const PrivacyBanner = () => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <MobileBackButton name="Privacy & Policy" />
            <Card className="mx-6">
                <CardActionArea>
                    <CardContent>
                        <h1 className="font-bold mt-8">Privacy Policy</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-text mb-2 mt-4">Latest Updated: Aug 20, 2022</p>
                                <p className="text-text mb-2">Interpretation & Defination</p>
                                <p className="text-text mb-2">Collecting & Using Personal Data</p>
                                <p className="text-text mb-2">Personal Data</p>
                                <p className="text-text mb-2">Usage Data</p>
                                <p className="text-text">Tracking Technologies & Cookies</p>
                            </div>
                            <div>
                                <p className="text-text mb-2 mt-4">Latest Updated: Aug 20, 2022</p>
                                <p className="text-text mb-2">Interpretation & Defination</p>
                                <p className="text-text mb-2">Collecting & Using Personal Data</p>
                                <p className="text-text mb-2">Personal Data</p>
                                <p className="text-text mb-2">Usage Data</p>
                                <p className="text-text">Tracking Technologies & Cookies</p>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div className="ml-4 mr-2 mt-12">
                <p className="text-sm font-bold mb-4 mt-5">Privacy Policy</p>
                <p className="text-sm">
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use
                    the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <br></br>
                <p className="text-sm">
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of
                    information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the
                </p>
            </div>
            <br></br>
            <br></br>
            <div className="ml-4 mr-2">
                <p className="text-sm font-bold">Contact Us</p>
                <p className="text-sm">If you have any questions about this Privacy Policy, You can contact us:</p>
            </div>

            <BottomNav />
        </div>
    );
};
