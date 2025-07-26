import FarmDetails from "@/app/components/dashboard/my-farms/FarmDetails/farmDetails";
import { JSX } from "react";

export default async function MyFarmsDetails({
  params,
}: {
  params: Promise<{ farmDetailsId: string }>;
}): Promise<JSX.Element> {
  const { farmDetailsId } = await params;

  return <FarmDetails farmDetailsId={farmDetailsId} />;
}
