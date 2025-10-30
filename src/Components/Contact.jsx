import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact-us.png";
import { CONTACT_DATA } from "../Constants";

const ICONS_MAP = { Facebook, Linkedin, Twitter, Instagram };

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Debug: Check if env variables are loaded
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setPopup("success");
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setPopup("error");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setPopup(null), 3000);
      });
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  const inputBaseClasses = "w-full bg-[#0B1521] text-white border-none rounded-lg p-3 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner";

  return (
    <div className="min-h-screen bg-[#070F17] flex flex-col justify-center items-center p-4 sm:p-8 font-sans">
      {/* Popup */}
   <AnimatePresence>
  {popup && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`bg-[#0B1521] p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center w-80`}
      >
        {popup === "success" ? (
          <>
            <motion.div
              className="text-green-400 mb-4 text-6xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              ✅
            </motion.div>
            <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm">Thanks for reaching out. I’ll get back to you soon.</p>
          </>
        ) : (
          <>
            <motion.div
              className="text-red-400 mb-4 text-6xl"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              ❌
            </motion.div>
            <h3 className="text-white text-2xl font-bold mb-2">Failed to Send</h3>
            <p className="text-gray-400 text-sm">Something went wrong. Try again later.</p>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



      {/* Contact Card */}
      <motion.div
        className="max-w-5xl w-full bg-[#101E2E] rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden p-6 sm:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left Panel */}
        <motion.div className="lg:w-1/3 flex flex-col items-center text-center bg-[#070F17] rounded-2xl mb-6 lg:mb-0" variants={containerVariants}>
          <motion.div className="w-56 h-72 bg-[#031D34] rounded-xl overflow-hidden shadow-lg mb-6" variants={itemVariants}>
            <img src={contactImg} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <motion.p className="font-semibold text-sm text-gray-400" variants={itemVariants}>WRITE AN E-MAIL</motion.p>
          <motion.p className="text-blue-200 mb-4" variants={itemVariants}>{CONTACT_DATA.email}</motion.p>
          <motion.p className="font-semibold text-sm text-gray-400" variants={itemVariants}>CALL ME</motion.p>
          <motion.p className="text-blue-200 mb-4" variants={itemVariants}>{CONTACT_DATA.phone}</motion.p>

          <motion.div className="flex space-x-4 mt-0" variants={containerVariants}>
            {CONTACT_DATA.socials.map((social, idx) => {
              const Icon = ICONS_MAP[social.icon];
              return (
                <motion.a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} variants={itemVariants}>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white" style={{ backgroundColor: social.bgColor }}>
                    <Icon size={19} />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div className="lg:w-2/3 flex flex-col p-4 sm:p-8" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold mb-3 text-white text-center lg:text-left" variants={itemVariants}>
            {CONTACT_DATA.title}
          </motion.h2>
          <motion.p className="text-gray-400 mb-6 text-center lg:text-left" variants={itemVariants}>
            {CONTACT_DATA.subtitle}
          </motion.p>

          <motion.form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4" variants={containerVariants}>
            <motion.div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0" variants={containerVariants}>
              <motion.input type="text" name="user_name" placeholder="Name *" required className={inputBaseClasses} variants={itemVariants} />
              <motion.input type="email" name="user_email" placeholder="Email *" required className={inputBaseClasses} variants={itemVariants} />
            </motion.div>

            <motion.input type="text" name="subject" placeholder="Subject *" required className={inputBaseClasses} variants={itemVariants} />
            <motion.textarea name="message" placeholder="Your message *" required className={`${inputBaseClasses} h-32 resize-none`} variants={itemVariants} />

           <motion.button
  type="submit"
  className="relative overflow-hidden bg-blue-600 text-white font-bold py-2 rounded-xl disabled:bg-gray-700 flex items-center justify-center"
  whileHover={{ scale: 1.05 }}
  disabled={loading}
  variants={itemVariants}
>
  {loading ? (
    <div className="flex items-center gap-2">
      {/* spinning circle */}
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      <span>Sending...</span>
    </div>
  ) : (
    CONTACT_DATA.buttonText
  )}
</motion.button>

          </motion.form>
        </motion.div>
      </motion.div>

      <motion.footer className="mt-6 py-2 w-full text-center text-gray-400 text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {CONTACT_DATA.footerText}
      </motion.footer>
    </div>
  );
};

export default ContactForm;