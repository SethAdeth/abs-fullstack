import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABS Academie",
  description:
    "Formations certifiantes en Prompt Engineering et IA Branding. Devenez maitre de l'IA pour votre business avec ABS Academie.",
};

export default function AcademieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
