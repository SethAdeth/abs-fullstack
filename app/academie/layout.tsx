import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABS Académie",
  description:
    "Formations certifiantes en Prompt Engineering et IA Branding. Devenez maître de l'IA pour votre business avec ABS Académie.",
};

export default function AcademieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
