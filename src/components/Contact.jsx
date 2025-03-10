import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#f7f7f7] to-[#e0e0e0]">
      {/* Contact Info Section */}
      <div className="w-full flex flex-col items-start justify-center h-[100vh] px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="uppercase font-semibold text-[#3C279C] text-sm tracking-wider">
            Contact Me
          </h1>
          <h1 className="text-[45px] tracking-tighter font-bold text-gray-900 leading-tight">
            Get in Touch Today
          </h1>
          <p className="text-gray-600 mt-2">
            I’m available for work. Let's connect!
          </p>

          {/* Contact Cards */}
          <div className="mt-6 space-y-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg transition rounded-xl w-[280px] px-6 py-4 cursor-pointer"
            >
              <CiMail className="text-[25px] text-[#3C279C]" />
              <div>
                <h1 className="text-gray-500 text-sm">E-mail</h1>
                <a
                  href="mailto:pria01307@gmail.com"
                  className="font-medium text-gray-900"
                >
                  pria01307@gmail.com
                </a>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg transition rounded-xl w-[280px] px-6 py-4 cursor-pointer"
            >
              <FaPhoneAlt className="text-[20px] text-[#3C279C]" />
              <div>
                <h1 className="text-gray-500 text-sm">Phone</h1>
                <a
                  href="tel:+8801307874914"
                  className="font-medium text-gray-900"
                >
                  +88 01307874914
                </a>
              </div>
            </motion.a>
          </div>

          {/* Reach Out Text */}
          <div className="flex items-center py-6">
            <h1 className="text-gray-700 text-lg font-medium">
              Reach out to me anytime! 🚀
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
