import React, { useEffect } from "react";

// components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../../shared/Footer/Footer";

export const RefundPolicy = () => {
    const refundEligibity = [
        {
            id: 1,
            text: "You must request a refund within [number of days] days from the date of purchase.",
        },
        {
            id: 2,
            text: "The item must be unused, in its original packaging, and in the same condition as when you received it.",
        },
        {
            id: 3,
            text: "Any product that is damaged, missing parts, or is not in its original condition for reasons not due to our error may not be eligible for a refund.",
        },
    ];

    const nonRefunfableItems = [
        {
            id: 1,
            text: "Digital products or services that have been downloaded or accessed.",
        },
        {
            id: 2,
            text: "Gift cards or vouchers.",
        },
        {
            id: 3,
            text: "Perishable goods such as food, flowers, or personalized items.",
        },
        {
            id: 4,
            text: "Items that have been used or damaged by the customer.",
        },
    ];

    // Scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Refund Policy" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name={"Refund Policy"} />
            </div>
            <div className="content max-w-[1200px] mx-auto mt-[10px] font-Inter mb-[50px] px-[16px]">
                <h1 className="text-[24px] font-semibold">Refund Policy,</h1>

                <p className="mt-[15px] text-[16px]">
                    Thank you for shopping with [Your Company Name]. We strive to provide the best customer experience and satisfaction. If you are
                    not entirely satisfied with your purchase, we're here to help.
                </p>

                <section>
                    <p className="mt-[25px] font-medium">1. Refund Eligibility</p>
                    <p>To be eligible for a refund, the following conditions must be met:</p>

                    <div className="mt-[15px]">
                        {refundEligibity?.map(item => {
                            return <li key={item.id}>{item.text}</li>;
                        })}
                    </div>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">2. Refund Process</p>
                    <p>
                        To request a refund, please contact our customer support team at [contact email/phone number]. Provide your order number and a
                        detailed explanation of the reason for the refund request. We may require additional information or evidence to process your
                        request.
                    </p>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">3. Non-Refundable Items</p>
                    <p>The following items are generally non-refundable:</p>

                    <div className="mt-[15px]">
                        {nonRefunfableItems?.map(item => {
                            return <li key={item.id}>{item.text}</li>;
                        })}
                    </div>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">4. Refund Approval</p>
                    <p>
                        Once your refund request is received and inspected, we will notify you of the approval or rejection of your refund. If
                        approved, your refund will be processed within [number of days] days and a credit will be automatically applied to your
                        original method of payment.
                    </p>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">5. Late or Missing Refunds</p>
                    <p>
                        If you haven't received your refund within the specified timeframe, please check your bank account again. Then, contact your
                        credit card company or payment provider as processing times may vary. If you have taken these steps and still have not
                        received your refund, please reach out to our customer support team for further assistance.
                    </p>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">6. Shipping Costs</p>
                    <p>
                        Shipping costs are generally non-refundable. If you receive a refund, the original shipping cost will be deducted from your
                        refund unless the return is due to our error.
                    </p>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">7. Return Shipping</p>
                    <p>
                        If you are eligible for a refund, you will be responsible for the cost of return shipping unless the return is due to our
                        error. We recommend using a trackable shipping service and obtaining a shipping receipt as proof of shipment.
                    </p>
                </section>
                <section>
                    <p className="mt-[25px] font-medium">8. Changes to the Refund Policy</p>
                    <p>
                        We reserve the right to modify or update this Refund Policy at any time. Any changes will be effective immediately upon
                        posting on our website. It is your responsibility to review this policy periodically.
                    </p>
                </section>
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
