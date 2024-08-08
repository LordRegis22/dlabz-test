"use client";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import jsonp from "jsonp";
import { Section } from "@/components/shared";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { ISectionProps, sections } from "@/static/content/sections";
// import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [errors, setErrors] = useState<{
    email: string;
    firstName: string;
  }>({ email: "", firstName: "" });
  const [hasBeenSubscribed, setHasBeenSubscribed] = useState<boolean>(false);
  const handleFieldUpdate = (
    e: ChangeEvent<HTMLInputElement>,
    updaterFunction: Dispatch<SetStateAction<string>>
  ) => {
    updaterFunction(e.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; firstName?: string } = {};

    if (!email) newErrors.email = "Email is required";
    if (!firstName) newErrors.firstName = "First Name is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors({ ...errors, ...newErrors });
      return;
    }

    const url =
      "https://destructionlabz.us22.list-manage.com/subscribe/post?u=681d080738c8af7072ba3d8d5&amp;id=89bcc8f490&amp;f_id=00f9cfe1f0";
    jsonp(
      `${url}&EMAIL=${email}&FNAME=${firstName}`,
      { param: "c" },
      (_, data) => {
        const { msg, result } = data;
        // do something with response
        setHasBeenSubscribed(true);
      }
    );
  };

  const sectionData = sections.contact as ISectionProps;
  return (
    <Section {...sectionData}>
      <div className="flex min-h-[400px] gap-18 flex-col lg:flex-row items-start justify-center relative z-50 mb-[100px]  mt-4 w-full">
        <div className="flex-3 w-full bg-contact-bg bg-cover bg-right">
          <form className="w-[70%]  p-4" onSubmit={handleSubmit}>
            {hasBeenSubscribed ? (
              <h1>Thank you for subscribing</h1>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-0 bg-transparent border-b-2 border-grey p-2 text-black"
                  value={firstName}
                  onChange={(e) => {
                    setErrors({ ...errors, firstName: "" });
                    handleFieldUpdate(e, setFirstName);
                  }}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-0 bg-transparent border-b-2 border-grey p-2 text-black mt-2"
                  value={email}
                  onChange={(e) => {
                    setErrors({ ...errors, email: "" });
                    handleFieldUpdate(e, setEmail);
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </>
            )}
            <button
              type="submit"
              className="bg-black text-primary w-full mt-2 p-2"
              disabled={hasBeenSubscribed}
            >
              {hasBeenSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
        <div
          className="md:flex-2 w-full bg-map-bg bg-no-repeat bg-center lg:bg-top mt-12 lg:mt-0"
          style={{
            backgroundSize: "contain",
          }}
        >
          <div
            //fade in from left
            // initial={{ x: 40, opacity: 0, scale: 0.8 }}
            // whileInView={{ x: 0, opacity: 1, scale: 1 }}
            // transition={{ duration: 0.75 }}
            className="flex w-full lg:mt-0 lg:items-center flex-col text-wrap "
          >
            <div className="flex flex-col sm:flex-row items-center justify-center lg:flex-col w-full mb-[150px]">
              <div className="w-full lg:w-1/3  text-left text-primary">
                <CiLocationOn size={32} />
                <h2>Location</h2>
                <p className="text-[#D1D5DB]">Los Angeles, CA, 90034</p>
              </div>

              <div className="w-full sm:w-[200px] lg:w-1/3 text-left text-primary mt-2">
                <h2>Follow Us</h2>
                <div className="text-[#D1D5DB] flex mt-2">
                  <a
                    href="https://twitter.com/destructionlabz"
                    aria-label="Twitter"
                    target="_blank"
                  >
                    <FaXTwitter size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
