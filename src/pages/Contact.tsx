"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#4A4033] text-[#F5EBDC]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-serif mb-6 text-[#D8C7A6]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-[#F5EBDC]/80 max-w-2xl mx-auto"
          >
            Get in touch with us — let’s discuss your dream space and bring your
            vision to life.
          </motion.p>
          <div className="w-24 h-[2px] bg-[#D4B85B] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#3B332A]">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-[#D8C7A6] mb-6 border-l-4 border-[#D4B85B] pl-4">
              Contact Info
            </h2>

            <Card className="bg-[#4A4033] border border-[#D8C7A6]/30 hover:shadow-[0_0_15px_rgba(212,184,91,0.3)] transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D8C7A6]/10 flex items-center justify-center rounded-full">
                  <Phone className="w-6 h-6 text-[#D4B85B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#D8C7A6] mb-1">
                    Call Us
                  </h3>
                  <p className="text-sm text-[#F5EBDC]/80">
                    +92 300 5012720
                    <br />
                    +92 321 2141000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#4A4033] border border-[#D8C7A6]/30 hover:shadow-[0_0_15px_rgba(212,184,91,0.3)] transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D8C7A6]/10 flex items-center justify-center rounded-full">
                  <MapPin className="w-6 h-6 text-[#D4B85B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#D8C7A6] mb-2">
                    Our Locations
                  </h3>
                  <p className="text-sm text-[#F5EBDC]/80 mb-3">
                    Bin Haider Factory Outlet, Plot#1134, Near Suzuki Capital
                    Motors, Main Industrial Area, Model, Humak Town, Islamabad,
                    45700, Pakistan
                  </p>
                  <p className="text-sm text-[#F5EBDC]/80">
                    Bin Haider Showroom, Plaza#18, Main Faqir Aipee Road, near
                    Metro Cash n Carry, I-11/3 I 11/3 I-11, Islamabad, Islamabad
                    Capital Territory 44800
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#4A4033] border border-[#D8C7A6]/30 hover:shadow-[0_0_15px_rgba(212,184,91,0.3)] transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D8C7A6]/10 flex items-center justify-center rounded-full">
                  <Mail className="w-6 h-6 text-[#D4B85B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#D8C7A6] mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@binhaider.pk"
                    className="text-sm text-[#F5EBDC]/80 hover:text-[#D4B85B] transition-colors"
                  >
                    info@binhaider.pk
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#4A4033] border border-[#D8C7A6]/40 shadow-lg shadow-[#2B2A29]">
              <CardContent className="p-10">
                <h2 className="text-3xl font-serif text-[#D8C7A6] mb-8 border-l-4 border-[#D4B85B] pl-4">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-[#F5EBDC]"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-[#3B332A] border-[#D8C7A6]/30 text-[#F5EBDC] placeholder:text-[#F5EBDC]/50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-[#F5EBDC]"
                    >
                      Your Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-[#3B332A] border-[#D8C7A6]/30 text-[#F5EBDC] placeholder:text-[#F5EBDC]/50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-[#F5EBDC]"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={6}
                      className="bg-[#3B332A] border-[#D8C7A6]/30 text-[#F5EBDC] placeholder:text-[#F5EBDC]/50"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#D4B85B] hover:bg-[#C4A94D] text-[#3B332A] font-semibold rounded-none transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
