import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";

export default function ContactPage(props) {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />;
    </>
  );
}
