import { iconTrophy, iconShield, iconBox, iconHeadset } from "../assets";

const items = [
  [iconTrophy, "High Quality", "crafted from top materials"],
  [iconShield, "Warranty Protection", "Over 2 years"],
  [iconBox, "Free Shipping", "Order over 150 $"],
  [iconHeadset, "24 / 7 Support", "Dedicated support"],
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        {items.map(([icon, title, text]) => (
          <div className="feature" key={title}>
            <img src={icon} alt="" />
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
