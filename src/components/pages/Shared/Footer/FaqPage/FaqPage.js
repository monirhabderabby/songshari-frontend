// Configuration
import React, { useEffect } from "react";

// third party packages
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";

// Components

const FaqPage = () => {
  const faq = [
    {
      id: 1,
      question: "Is it FREE to create profile in Shongshari.com?",
      ans: "Absolutely. Creating a profile in Shongshari is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.",
    },
    {
      id: 2,
      question: "How can I create my profile on Shongshari.com?",
      ans: "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      id: 3,
      question: "How long does it take to create my profile?",
      ans: "It will take less than 10 minutes. However, we suggest you fill up all information nicely so that others will get a better understanding of you.",
    },
    {
      id: 4,
      question: "Is it FREE to create profile in Shongshari.com?",
      ans: "Absolutely. Creating a profile in Shongshari is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.",
    },
    {
      id: 5,
      question: "How can I create my profile on Shongshari.com?",
      ans: "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      id: 6,
      question: "How long does it take to create my profile?",
      ans: "It will take less than 10 minutes. However, we suggest you fill up all information nicely so that others will get a better understanding of you.",
    },
    {
      id: 7,
      question: "Is it FREE to create profile in Shongshari.com?",
      ans: "Absolutely. Creating a profile in Shongshari is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.",
    },
    {
      id: 8,
      question: "How can I create my profile on Shongshari.com?",
      ans: "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      id: 9,
      question: "How long does it take to create my profile?",
      ans: "It will take less than 10 minutes. However, we suggest you fill up all information nicely so that others will get a better understanding of you.",
    },
  ];

  const { Panel } = Collapse;

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"FAQ"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"FAQ"} />
      </div>
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-george text-center mt-7 mb-5 text-gray-700">
        Frequently Asked Question
      </h1>
      {/* All question and answers */}
      <div className="my-4 max-w-[1200px] mx-auto px-6 lg:px-0">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          {faq.map((q) => {
            return (
              <Panel
                key={q.id}
                header={
                  <p className="text-lg font-Poppins text-slate-500">
                    {q.question}
                  </p>
                }
              >
                <p className="px-6 text-base font-Inter text-slate-700">
                  {q.ans}
                </p>
              </Panel>
            );
          })}
        </Collapse>
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

export default FaqPage;
