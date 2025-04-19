import { useRef } from "react";
import emailjs from "@emailjs/browser";
import MainBtn from "../../Components/UI/Buttons/MainBtn";

const ContactForm = () => {
  const form = useRef();

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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
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
      <label className="floating-label mb-10">
        <input
          className="input input-md w-full"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <span>Subject</span>
      </label>

      <textarea
        className="textarea mb-10 w-full"
        name="message"
        placeholder="Your Message"
        required
        rows={7}
      ></textarea>
      <MainBtn classes="w-fit ms-auto" text="Send Message" type="submit" />
    </form>
  );
};

export default ContactForm;
