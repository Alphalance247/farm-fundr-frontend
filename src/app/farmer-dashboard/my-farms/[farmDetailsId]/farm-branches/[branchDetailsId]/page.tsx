import BranchDetails from "@/app/components/dashboard/my-farms/branchDetails/branchDetails";
import { JSX } from "react";

type Props = {
  params: Promise<{
    farmDetailsId: string;
    branchDetailsId: string;
  }>;
};

export default async function BranchDetailsPage({
  params,
}: Props): Promise<JSX.Element> {
  const { farmDetailsId, branchDetailsId } = await params;

  return <BranchDetails farmId={farmDetailsId} branchId={branchDetailsId} />;
}
