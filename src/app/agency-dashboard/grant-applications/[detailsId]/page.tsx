import GrantApplicationDetails from "@/app/components/agency/GrantApplication/grantApplicationDetails";
import { JSX } from "react";

export default async function GrantDetails({
  params,
}: {
  params: Promise<{ detailsId: string }>;
}): Promise<JSX.Element> {
  const { detailsId } = await params;

  return <GrantApplicationDetails detailsId={detailsId} />;
}
