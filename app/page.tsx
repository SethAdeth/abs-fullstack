import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import ValueProposition from "@/components/sections/ValueProposition";
import VideoDemo from "@/components/sections/VideoDemo";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WorkflowProcess from "@/components/sections/WorkflowProcess";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTAFinal from "@/components/sections/CTAFinal";
import FAQHome from "@/components/sections/FAQHome";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ValueProposition />
      <VideoDemo />
      <ServicesPreview />
      <WorkflowProcess />
      <CaseStudiesPreview />
      <CTAFinal />
      <FAQHome />
    </>
  );
}
