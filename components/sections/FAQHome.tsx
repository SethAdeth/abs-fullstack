import SectionTitle from "@/components/ui/SectionTitle";
import FAQ from "@/components/ui/FAQ";
import { FAQ_HOME } from "@/lib/constants";

export default function FAQHome() {
  return (
    <section className="section-padding bg-[#F5F3FF]">
      <div className="container-abs">
        <SectionTitle
          title="Questions Fréquentes"
          subtitle="Tout ce que vous devez savoir sur le Digital Human Branding et nos services."
        />

        <div className="max-w-3xl mx-auto">
          <FAQ items={FAQ_HOME} />
        </div>
      </div>
    </section>
  );
}
