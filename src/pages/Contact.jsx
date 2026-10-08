import { useState } from "react";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import { LocationIcon, PhoneIcon, ClockIcon } from "../components/Icons";

const info = [
  [<LocationIcon key="l" />, "Address", "236 5th SE Avenue, New York NY10000, United States"],
  [<PhoneIcon key="p" />, "Phone", "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789"],
  [<ClockIcon key="c" />, "Working Time", "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00"],
];
const blank = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(blank);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => { setForm({ ...form, [k]: e.target.value }); setSent(false); };
  const submit = (e) => { e.preventDefault(); setSent(true); setForm(blank); };

  return (
    <>
      <PageBanner title="Contact" />
      <section className="contact">
        <div className="contact__head">
          <h2>Get In Touch With Us</h2>
          <p>For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="row justify-content-center gx-4 contact__body">
          <div className="col-lg-3 col-xl-3">
            <ul className="contact__info">
              {info.map(([icon, title, text]) => (
                <li key={title}>{icon}<div><h3>{title}</h3><p style={{ whiteSpace: "pre-line" }}>{text}</p></div></li>
              ))}
            </ul>
          </div>
          <form className="col-lg-5 contact__form" onSubmit={submit}>
            <div className="field"><label htmlFor="c-name">Your name</label><input id="c-name" required placeholder="Abc" value={form.name} onChange={set("name")} /></div>
            <div className="field"><label htmlFor="c-email">Email address</label><input id="c-email" type="email" required placeholder="Abc@def.com" value={form.email} onChange={set("email")} /></div>
            <div className="field"><label htmlFor="c-subject">Subject</label><input id="c-subject" placeholder="This is an optional" value={form.subject} onChange={set("subject")} /></div>
            <div className="field"><label htmlFor="c-msg">Message</label><textarea id="c-msg" required placeholder="Hi! i’d like to ask about" value={form.message} onChange={set("message")} /></div>
            <button type="submit" className="btn-gold contact__submit">Submit</button>
            {sent && <p className="contact__ok">Message sent. We will get back to you soon.</p>}
          </form>
        </div>
      </section>
      <Features />
    </>
  );
}
