import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
export const HistoryBannerMov = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <img
          alt=""
          src="https://i.ibb.co/stTYBVf/Arrow-1.png"
          className="col-span-2 ml-8 mt-5"
        ></img>
        <img
          alt=""
          src="https://i.ibb.co/x2L99Cr/Arrow-2.png"
          className="ml-20 mt-5"
        ></img>
      </div>

      <h1 className="font-bold text-black text-lg ml-8 mb-4 mt-12">
        Our History
      </h1>
      <div className="grid grid-cols-2 gap-4 ml-4 mr-4">
        <div>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://i.ibb.co/pKPzjQs/bruce-mars-8-YG31-Xn4d-Sw-unsplash-1.png"
                alt="green iguana"
              />
              <CardContent>
                <p className="font-bold">Shonshari.com</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://i.ibb.co/pKPzjQs/bruce-mars-8-YG31-Xn4d-Sw-unsplash-1.png"
                alt="green iguana"
              />
              <CardContent>
                <p className="font-bold">Shonshari.com</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 ml-4 mr-4 mt-8">
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <p className="font-bold text-sm">Shonshari.com Tilte</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem quam cursus
                  varius eu imperdiet.
                </p>

                <Link className="text-sm text-primary">Shongshari.com</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};
