// configuration
import React, { useEffect } from "react";

// Components
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";

const EndUserAgreement = () => {
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
      title: "How we will use cookies",
      des: "A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
    },
    {
      id: 5,
      title: "Complaints",
      des: "To resolve a complaint regarding the Shongshari.com service, contact Shongshari.com Customer Care by sending an email to info@shongshari.com",
    },
    {
      id: 6,
      title: "Copyright Policy",
      des: "Termination of User Privileges for Infringement and Contact Information for Suspected Copyright Infringement: We will terminate the privileges of any user who uses this Site to unlawfully transmit copyrighted material without a license, express consent, valid defense or fair use exemption to do so. In particular, users who submit User Content to this Site, whether articles, images, stories, software or other copyrightable material must ensure that the content they upload does not infringe the copyrights nor other rights of third parties (such as privacy or publicity rights). After proper notification by the copyright holder or it agent to us, and confirmation through court order or admission by the user that they have used this Site as an instrument of unlawful infringement, we will terminate the infringing users' rights to use and/or access to this Site. We may also in our sole discretion decide to terminate a user's rights to use or access to the Site prior to that time if we have a good faith and belief that the alleged infringement has occurred. If you believe that your copyright has been infringed through the use of this Site, please contact us at info@shongshari.com",
    },
  ];

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"End User Agreement"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"End User Agreement"} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <h1 className="text-2xl font-semibold mt-4">
          Please Read This Agreement Carefully
        </h1>
        <p className="text-base mt-4">
          This is a legal agreement ("Agreement") between you and
          Shongshari.com. By registering for Shongshari.com, you become a member
          of the Service (Member), and you agree to be bound by the terms and
          conditions of this Agreement (Terms) for as long as you continue to be
          a Member. If you do not agree to the terms, please do not register for
          the Shongshari.com service. The terms are subject to change and may be
          modified at any time by Shongshari.com, effective upon notice to you.
          Shongshari.com is intended only to serve as a preliminary medium of
          contact and information for its users / members / visitors who have a
          bona fide intention to enter into a matrimonial alliance.
          Shongshari.com does not purport to be a marriage or business bureau or
          a dating /contact website and does not, in any manner whatsoever,
          monitor the first or subsequent contacts, introductions and/or
          interactions which may take place amongst / in between the user(s) /
          member(s) due to any information specified in the website.
        </p>

        <div className="mb-8">
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

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-16"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default EndUserAgreement;
