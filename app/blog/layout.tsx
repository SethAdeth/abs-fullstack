import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Ressources",
  description:
    "Articles, guides et analyses sur le Digital Human Branding, l'IA et le personal branding en Afrique. Ressources gratuites à télécharger.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
