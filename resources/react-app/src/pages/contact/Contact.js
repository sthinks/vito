import React, { useEffect, useState } from "react";
import contactBanner from "../../assets/contact/contactbanner.png";
import contactLogo from "../../assets/contact/contactlogo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { IoLocationSharp } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import service from "../../service/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
    const [loading, setLoading] = useState(false);
    const notify = () =>
        toast.success("The form was sent successfully.", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const notifyError = () =>
        toast.error("Form could not be sent.", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            mail: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().min(2).required("Zorunlu alan"),
            phone: Yup.string()
                .matches(/^\d{11}$/, "Geçerli bir telefon numarası girin")
                .required("Zorunlu alan"),
            mail: Yup.string()
                .email("Geçerli bir e-posta adresi girin")
                .required("Zorunlu alan"),
        }),

        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const result = await service.contactForm(values);
                if (result.data.message === "Success") {
                    resetForm();
                    notify();
                    setLoading(false);
                } else {
                    notifyError();
                }
            } catch (error) {
                setLoading(false);
                notifyError();
            }
        },
    });
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <>
            <Helmet>
                <meta name="description" content="Vito Contact" />
                <meta name="keywords" content="Vito İletisim" />
                <meta
                    name="og:title"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="og:title" content="ViTO Energy Engineering " />
                <meta name="og:title" content="ViTO Enerji " />
                <meta name="og:title" content="ViTO Contact " />
                <meta name="og:title" content="ViTO İletişim " />
                <meta
                    name="og:title"
                    content="ViTO Energy Engineering Contact"
                />
            </Helmet>
            <ToastContainer />
            <div
                className="w-full bg-[#093977] relative"
                style={{
                    backgroundImage: `url(${contactBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50 z-20" />
                <div className="w-full flex justify-center items-center z-40 relative">
                    <div className="w-1/4 h-[1300px] max-lg:h-[900px]  flex justify-start items-end max-sm:hidden z-30 ">
                        <img
                            src={contactLogo}
                            className="w-32 tracking-[1.2rem] mb-5 "
                            style={{ writingMode: "vertical-rl" }}
                            alt="ContactLogo"
                        />
                    </div>
                    <div className="w-3/4  flex justify-start items-start mt-52  flex-col ">
                        <div className="w-full pt-36">
                            <p className="text-4xl text-white font-bold">
                                Regional Offices
                            </p>
                            <hr className="w-full my-4 border-2" />
                            <div className="text-white text-lg mb-4 flex">
                                <IoLocationSharp className="text-red-700 text-3xl mt-3 mr-2" />
                                <p>
                                    Vadistanbul Ayazağa Mah. <br />
                                    Azerbaycan Cad. 3B 1B Blok <br />
                                    34485 Sarıyer-İstanbul <br />
                                    Türkiye
                                </p>
                            </div>
                            <div className="text-white text-lg mb-4 flex justify-start items-center">
                                <BsTelephone className="text-[#4b99ff] text-xl mr-4" />{" "}
                                <a href="tel:902122323030">+90 212 232 30 30</a>
                            </div>
                            <div className="text-white text-lg mb-4 flex justify-start items-center">
                                <AiOutlineMail className="text-[#4b99ff] text-xl mr-4" />
                                <a href="mailto:info@vito.com.tr">
                                    info@vito.com.tr
                                </a>
                            </div>
                        </div>
                        <div className="w-full my-10">
                            <p className="text-4xl text-white font-bold">
                                Contact Form
                            </p>
                            <hr className="w-full my-4 border-2" />
                            <form
                                className="flex justify-center items-start flex-col relative w-[400px] max-sm:w-full mt-10"
                                onSubmit={formik.handleSubmit}
                            >
                                <label
                                    className="text-white py-2 font-medium"
                                    htmlFor="firstName"
                                >
                                    Name / Surname
                                </label>
                                <input
                                    className={
                                        formik.touched.fullname &&
                                        formik.errors.fullname
                                            ? "bg-[#041c3b] rounded-lg py-2 p-2 shadow-lg w-full text-white  max-sm:w-full border-2 border-red-400"
                                            : "bg-[#041c3b] rounded-lg border border-white py-2 p-2 text-white shadow-lg w-full  max-sm:w-full"
                                    }
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                />
                                <label
                                    className="text-white py-2 font-medium"
                                    htmlFor="firstName"
                                >
                                    Mobile Phone
                                </label>
                                <input
                                    className={
                                        formik.touched.phone &&
                                        formik.errors.phone
                                            ? "bg-[#041c3b] rounded-lg mt-2 py-2 p-2 shadow-lg w-full text-white  max-sm:w-full border-2 border-red-400"
                                            : "bg-[#041c3b] rounded-lg mt-2 border border-white py-2 p-2 text-white shadow-lg w-full  max-sm:w-full"
                                    }
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                                <label
                                    className="text-white py-2 font-medium"
                                    htmlFor="firstName"
                                >
                                    E-mail
                                </label>
                                <input
                                    className={
                                        formik.touched.mail &&
                                        formik.errors.mail
                                            ? " bg-[#041c3b] rounded-lg mt-2 py-2 p-2 shadow-lg w-full text-white max-sm:w-full border-2 border-red-400"
                                            : "  bg-[#041c3b] border border-white rounded-lg mt-2 py-2 p-2 text-white shadow-lg w-full  max-sm:w-full"
                                    }
                                    id="mail"
                                    name="mail"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.mail}
                                />
                                <div className="w-full flex justify-start items-center mt-5">
                                    {loading ? (
                                        <button
                                            type="button"
                                            className="bg-[#041c3b] rounded-lg border border-white px-5 py-2 text-[#ffffff9e] animate-bounce"
                                            disabled
                                        >
                                            SENDING
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-[#041c3b] rounded-lg border border-white px-5 py-2 hover:bg-[#16365e] duration-150 hover:scale-105 text-white "
                                            type="submit"
                                        >
                                            SUBMIT
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                className="z-50"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12739.72970742042!2d28.97910437317034!3d41.10884830411325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab513dfba929d%3A0xea7a818b5624572f!2sVito%20Enerji%20Ticaret%20ve%20Yat%C4%B1r%C4%B1m%20A.%C5%9E.!5e0!3m2!1str!2str!4v1691149819430!5m2!1str!2str"
                width="100%"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}

export default Contact;
