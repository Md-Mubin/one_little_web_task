"use client"
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Minus, Plus } from "lucide-react";
import CommonSectionHeader from "../reuseable/CommonSectionHeader";

const FAQComponent = () => {
    const faqs = [
        {
            question: "Is there a free trial available?",
            answer:
                "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer:
                "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "You can cancel your subscription at any time with no questions asked. You'll retain access until the end of your current billing period, and we won't charge you again after that.",
        },
        {
            question: "Can other info be added to an invoice?",
            answer:
                "Yes. From your billing settings you can add your company name, VAT or tax ID, billing address, and any custom reference number you need on invoices.",
        },
        {
            question: "How does billing work?",
            answer:
                "Plans are billed monthly or annually. We accept all major credit cards and PayPal. Annual subscribers receive a 20% discount compared to the monthly rate.",
        },
        {
            question: "How do I change my account email?",
            answer:
                "Head to Account → Profile in your settings. Enter your new email and confirm the change via the verification link we'll send to both the old and new address.",
        },
    ];


    return (
        <section className="font-dm_sans py-18.5">
            <div className="container">
                <CommonSectionHeader
                    headFirstPart={"Frequently asked"}
                    headSecondPart={"questions"} />
                <p className="font-normal text-xl text-black leading-7.5 mt-5 text-center">
                    Everything you need to know about the product and billing.
                </p>
                <div className="max-w-3xl mx-auto mt-20">
                    {/* Accordion */}
                    <Accordion
                        allowMultiple={false}
                        transition
                        transitionTimeout={350}
                    >
                        {faqs?.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                initialEntered={index === 0}
                                header={({ state }) => (
                                    <div className="w-full flex items-center justify-between gap-4 pt-4 pb-8">
                                        <span className="text-lg font-bold text-black leading-7">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`w-6 h-6 rounded-full border-2 text-brandColor flex items-center justify-center transition-colors duration-300`}
                                        >
                                            {state.isEnter ? (
                                                <Minus size={12} />
                                            ) : (
                                                <Plus size={12} />
                                            )}
                                        </span>
                                    </div>
                                )}
                                className="border-b last:border-0 border-brand-color2"
                                buttonProps={{
                                    className:
                                        "w-full text-left bg-transparent border-none cursor-pointer p-0 focus:outline-none",
                                }}
                                contentProps={{
                                    style: { transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)" },
                                }}
                            >
                                <p className="pt-2 pb-8 font-normal text-[16px] leading-6 text-[#606060]">
                                    {faq.answer}
                                </p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQComponent