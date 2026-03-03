import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Etudes de cas et resultats clients. Decouvrez comment ABS Corporation transforme la presence numerique des leaders africains.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
