import CardProjectSecton from "@/components/pages/projects/card-project-section";
import MoreOnGithubSection from "@/components/pages/projects/more-on-github-section";
import TitleSection from "@/components/pages/projects/title-section";
import { Divider } from "@/components/ui/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My - Projects",
  description: "A collection of projects I've worked on.",
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <Divider />
      <CardProjectSecton />
      <MoreOnGithubSection />
    </main>
  );
}