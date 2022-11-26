import React from "react";

export const PolicyPage = () => {
    const content = [
        {
            id: 1,
            heading: "Advanced Registration",
            content:
                "The site offers paid membership to a user wishing to use our advanced features such as Contact Information of other Registered Members, Video calling, and special discounts on other services of the site. Here a user must provide contact information and financial information (like credit card number, and expiration date). This information is used for billing purposes and to fill customer's orders. If we have trouble processing an order, this contact information is used to get in touch with the user.",
        },
        {
            id: 2,
            heading: "Log Files",
            content:
                "The site uses IP addresses to analyze trends, administer the site, track users’ movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information.",
        },
        {
            id: 3,
            heading: "Sharing",
            content:
                "We do not share your personal information with anybody. We will share aggregated demographic information with our partners and advertisers. This is not linked to any personal information that can identify any person.",
        },
        {
            id: 4,
            heading: "Links",
            content:
                "This website contains links to other sites. Please be aware that the site is not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of every website that collects personally identifiable information. This privacy statement applies solely to information collected by this Web site.",
        },
        {
            id: 5,
            heading: "Security",
            content:
                "This site takes every precaution to protect our users’ information. When users submit sensitive information via the website, your information is protected both online and off-line. When our registration/order form asks users to enter sensitive information (such as credit card number and/or social security number), that information is encrypted and is protected with the best encryption software in the industry - SSL.",
            content1:
                "While on a secure page, such as our order form, the lock icon on the bottom of Web browsers such as Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed to un-locked, or open, when you are just ‘surfing’. To learn more about SSL, follow this link Verisign While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect user-information off-line.",
            content2:
                "All of our users’ information, not just the sensitive information mentioned above, is restricted in our offices. Only employees who need the information to perform a specific job (for example, our billing clerk or a customer service representative) are granted access to personally identifiable information. Our employees must use password-protected screen-savers when they leave their desk. When they return, they must re-enter their password to re-gain access to your information. Furthermore, ALL employees are kept up-to-date on our security and privacy practices. Every quarter, as well as any time new policies, are added, our employees are notified and/or reminded about the importance we place on privacy, and what they can do to ensure our customers’ information is protected. Finally, the servers that we store personally identifiable information on are kept in a secure environment, behind a locked cage. If you have any questions about the security at our website, you can send an email to info@taslimamarriagemedia.com.",
        },
        {
            id: 6,
            heading: "Supplementation of Information",
            content:
                "Email Messages, Registration Forms, and other related forms. We make the contents of the registration form visible to you and other registered members of the marriage bureau. Please remember that any information that is disclosed in these areas becomes public information. You should exercise caution when deciding to disclose your personal information. For this website to properly fulfill its obligation to our customers, we must supplement the information we receive with information from 3rd party sources.",
            content1:
                "For example, to determine if our customers qualify for one of our credit cards, we use their names and social security numbers to request a credit report. Once we determine a user’s credit worthiness, this document is destroyed. (or) For this website to enhance its ability to tailor the site to an individual’s preference, we combine information about the purchasing habits of users with similar information from our partners, Company Y & Company Z, to create a personalized user profile. When a user purchases either of these two companies, the companies collect and share that purchase information with us so we can tailor the site to our users’ preferences.",
        },
        {
            id: 7,
            heading: "Correction/Updating Personal Information",
            content:
                "If a user’s personally identifiable information changes (such as your zip code), or if a user no longer desires our service, we will endeavor to provide a way to correct, update or remove that user’s data provided to us. This can usually be done at the member information page or by email to the Customer Support of the marriage bureau at hello@shongshari.com.",
        },
    ];
    return (
        <div className="text-[#33475B]">
            <h1 className="text-[32px]  leading-[44px] font-bold mb-[20px]">Privacy Policy</h1>
            <span className="text-[23px]">Last updated: August 20, 2021</span>
            <p className="mt-[43px] mb-[10px] text-[15px] font-normal">
                To use this website, a user must first complete the registration form. During registration, a user is required to give their contact
                information (such as name and email address). This information is used to contact the user about the services on our site for which
                they have expressed interest. It is optional for the user to provide demographic information (such as income level and gender), and
                unique identifiers (such as social security number), but encouraged so we can provide a more personalized experience on our site. The
                site collects personal information necessary to respond to your requests for customized matrimonial services and to allow you to use
                the resources available on our website.
            </p>
            <p className="mb-[40px] text-[15px] font-normal">
                Personal information includes, but is not limited to, name, physical address, email address, date of birth, religion, time of birth,
                caste, fathers name, mothers name, age and any other information that itself identifies or, when tied to the above information, may
                identify you as a specific individual.
            </p>
            {content?.map(content => {
                return (
                    <div key={content.id} className="mb-[40px]">
                        <h3 className="text-[#33475B] mb-[8px] font-bold text-[22px]">{content?.heading}</h3>
                        <p className="text-[15px] font-normal">{content?.content}</p>
                    </div>
                );
            })}
        </div>
    );
};
