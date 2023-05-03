import React, { useEffect } from "react";

// Componets
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { ContactForm } from "./ContactForm";
import Footer from "../../shared/Footer/Footer";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";

const Contact = () => {
  useDocumentTitle("Shongshari | Contact");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="bg-[#f8f8ff] hidden lg:block">
        <CustomHeader title="Contact" />
        <ContactForm />
        <Footer />
      </div>

      {/* Mobile version */}
      <div className="lg:hidden">
        <MobileBackButton name={"Contact Us"} />
        <ContactForm />
        <BottomNav />
      </div>
    </div>
  );
};
export default Contact;
