import PublicDetails from "@/app/components/grant-page/grantDetails";
import { JSX } from "react";

export default async function PublicGrantDetails({
  params,
}: {
  params: Promise<{ details: string }>;
}): Promise<JSX.Element> {
  const { details } = await params;

  return <PublicDetails detailsId={details} />;
}
