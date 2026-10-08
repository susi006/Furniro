import { Link } from "react-router-dom";
import { banner, logo } from "../assets";
import { ChevronRight } from "./Icons";

export default function PageBanner({ title, crumb = title }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="page-banner__inner">
        <img className="page-banner__logo" src={logo} alt="" />
        <h1>{title}</h1>
        <p className="page-banner__crumbs"><Link to="/">Home</Link><ChevronRight size={14} color="#000" /><span>{crumb}</span></p>
      </div>
    </section>
  );
}
