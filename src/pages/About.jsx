import PageBanner from "../components/PageBanner";
import Features from "../components/Features";

// NOTE: the uploaded designs contain no "About" screen. This route exists so the
// "About" nav link and footer link work; it only reuses the shared banner + benefits strip.
export default function About() {
  return (
    <>
      <PageBanner title="About" />
      <Features />
    </>
  );
}
