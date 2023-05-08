import React from "react";

// components
import { TopMenu } from "../../../../../Wrapper/Home/mobileversion/TopMenu";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";

export const CookiePolicy = () => {
  const data = [
    {
      id: 1,
      title: "What we collect",
      des: "We may collect the following information:",
      footer:
        "For the exhaustive list of cookies we collect see the List of cookies we collect section.",
      feature: [
        {
          id: 1,
          text: "name",
        },
        {
          id: 2,
          text: "contact information including email address",
        },
        {
          id: 3,
          text: "demographic information such as postcode, preferences and interests",
        },
        {
          id: 4,
          text: "other information relevant to customer surveys and/or offers",
        },
      ],
    },
    {
      id: 2,
      title: "What we do with the information we gather",
      des: "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
      feature: [
        {
          id: 1,
          text: "Internal record keeping.",
        },
        {
          id: 2,
          text: "We may use the information to improve our products and services.",
        },
        {
          id: 3,
          text: "We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.",
        },
        {
          id: 4,
          text: "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.",
        },
      ],
    },
    {
      id: 3,
      title: "Security",
      des: "We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
    },
    {
      id: 4,
      title: "How we use cookies",
      des: "A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
    },
  ];
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title="Cookie Policy" />
      </div>
      <div className="block lg:hidden">
        <TopMenu />
      </div>
      <div className="content max-w-[1200px] mx-auto mt-[10px] font-Inter mb-[50px] px-[16px]">
        <h1 className="text-[24px] font-semibold">
          Privacy and Cookie Policy,
        </h1>
        <p className="mt-[15px] text-[16px]">
          This privacy policy sets out how this website (hereafter "the Store")
          uses and protects any information that you give the Store while using
          this website. The Store is committed to ensuring that your privacy is
          protected. Should we ask you to provide certain information by which
          you can be identified when using this website, then you can be assured
          that it will only be used in accordance with this privacy statement.
          The Store may change this policy from time to time by updating this
          page. You should check this page from time to time to ensure that you
          are happy with any changes.
        </p>

        <div>
          {data?.map((item) => {
            return (
              <section key={item?.id}>
                <p className="mt-[25px] text-[24px] font-medium">
                  {item?.id}. {item?.title}
                </p>
                <p>{item?.des}</p>

                {item?.feature && (
                  <div className="mt-[15px]">
                    {item?.feature?.map((item) => {
                      return <li key={item.id}>{item.text}</li>;
                    })}
                  </div>
                )}
                {item?.footer && <p className="mt-[15px]">{item?.footer}</p>}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
