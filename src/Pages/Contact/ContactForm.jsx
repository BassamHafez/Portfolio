import { useRef } from "react";
import emailjs from "@emailjs/browser";
import MainBtn from "../../Components/UI/Buttons/MainBtn";
import { useState } from "react";
import Toaster from "../../Components/UI/Toaster/Toaster";

const ContactForm = () => {
  const form = useRef();
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (toastData) => {
    setToast(toastData);
    form.current.reset();
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          showToast({
            show: true,
            type: "success",
            message: "Message sent successfully!",
          });
        },
        (error) => {
          console.log(error);
          showToast({
            show: true,
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full md:w-8/10"
      >
        <label className="floating-label mb-10">
          <input
            className="input input-md w-full"
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />
          <span>Email Address</span>
        </label>
        <textarea
          className="textarea mb-10 w-full"
          name="message"
          placeholder="Your Message"
          required
          rows={7}
        />
        <MainBtn classes="w-fit ms-auto" text="Send Message" type="submit" />
      </form>
      {toast.show && <Toaster toast={toast} />}
    </>
  );
};

export default ContactForm;
