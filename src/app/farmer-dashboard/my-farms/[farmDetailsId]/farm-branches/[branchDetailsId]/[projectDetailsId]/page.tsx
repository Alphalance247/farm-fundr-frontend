import ProjectDetails from "@/app/components/dashboard/my-farms/projectDetails/projectsDetails";
import { JSX } from "react";

type Props = {
  params: {
    projectDetailsId: string;
    branchDetailsId: string;
    farmDetailsId: string;
  };
};

export default async function ProjectDetailsPage({
  params,
}: Props): Promise<JSX.Element> {
  const { projectDetailsId, branchDetailsId, farmDetailsId } = await params;

  return (
    <ProjectDetails
      projectDetailsId={projectDetailsId}
      branchDetailsId={branchDetailsId}
      farmDetailsId={farmDetailsId}
    />
  );
}
