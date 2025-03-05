import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-white/80 backdrop-blur-md flex items-center justify-center fixed top-0 left-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-gray-900 text-xl mt-4 font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;
