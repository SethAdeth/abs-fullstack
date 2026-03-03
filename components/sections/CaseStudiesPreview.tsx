import SectionTitle from "@/components/ui/SectionTitle";
import { CaseStudyCard } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-[#FFFFFF]">
      <div className="container-abs">
        <SectionTitle
          title="Ils ont choisi l'Ubiquité"
          subtitle="Découvrez comment nos clients transforment leur présence numérique et multiplient leur impact."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CASE_STUDIES.slice(0, 3).map((study) => (
            <CaseStudyCard
              key={study.id}
              image={study.image}
              title={study.title}
              sector={study.sector}
              metrics={[
                { label: "Engagement", value: study.results.engagement },
                { label: "Résultats", value: study.results.leads },
                { label: "Temps gagné", value: study.results.time },
              ]}
              href="/portfolio"
              ctaLabel="Voir le cas"
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button href="/portfolio" variant="secondary" size="lg">
            Voir tous les résultats clients
          </Button>
        </div>
      </div>
    </section>
  );
}
