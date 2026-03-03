import { User, Palette, Crown, Mic, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  User,
  Palette,
  Crown,
  Mic,
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-abs">
        <SectionTitle
          title="Notre Architecture d'Offres"
          subtitle="Des solutions sur-mesure pour chaque étape de votre transformation numérique."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || User;
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.subtitle}
                href={`/services#${service.id}`}
                ctaLabel="Découvrir →"
              />
            );
          })}

          {/* ABS Académie extra card */}
          <ServiceCard
            icon={GraduationCap}
            title="ABS Académie"
            description="Formations certifiantes en Prompt Engineering et branding IA. Développez les compétences qui façonnent l'avenir du leadership numérique."
            href="/academie"
            ctaLabel="Voir les formations →"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
