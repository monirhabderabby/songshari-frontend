// configuration
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Third party package
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// Component
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";

export const HistoryBannerMov = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1024px] mx-auto">
            <MobileBackButton name="History" />
            <h1 className="font-bold text-black text-lg ml-8 mb-4 mt-[10px]">Our History</h1>
            <div className="grid grid-cols-2 gap-4 ml-4 mr-4">
                <div>
                    <Card onClick={() => navigate("/shongshari-journey")}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/pKPzjQs/bruce-mars-8-YG31-Xn4d-Sw-unsplash-1.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <p className="font-bold text-sm">Journey</p>
                                <p className="text-sm">
                                    Shongshari.Com started its journey as Bangladesh's first all-in-all family management platform in November 2022 by
                                    launching its main feature “Matrimony & Matchmaking Service”.
                                </p>
                                <Link to="/shongshari-journey" className="text-sm text-primary">
                                    Read more
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card onClick={() => navigate("/shongshari-mission")}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/pKPzjQs/bruce-mars-8-YG31-Xn4d-Sw-unsplash-1.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <p className="font-bold text-sm">Our Mission</p>
                                <p className="text-sm">
                                    "Choosing the Perfect Life Partner" is the core condition of a happy and beautiful family. Shongshari.Com started
                                    its journey to become the most reliable source of finding the right life partner.
                                </p>

                                <Link to="/shongshari-mission" className="text-sm text-primary">
                                    Read more
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 ml-4 mr-4 mt-8">
                <div>
                    <Card onClick={() => navigate("/shongshari-story")}>
                        <CardActionArea>
                            <CardContent>
                                <p className="font-bold text-sm">Our Story</p>
                                <p className="text-sm">
                                    Shongshari.Com dreams of a society where every family lives happily and prosperously through harmony and mutual
                                    understanding, overcoming family feuds, obstacles, and all kinds of complications.
                                </p>

                                <Link to="/shongshari-story" className="text-sm text-primary">
                                    Read more
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    );
};
