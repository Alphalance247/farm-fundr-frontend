import StoreFrontDetails from "@/app/components/store-font/store-front-project-details/storeFrontDetails";
import { JSX } from "react";

export default async function StoreFontProjectDetails({
  params,
}: {
  params: Promise<{ projectDetailsId: string }>;
}): Promise<JSX.Element> {
  const { projectDetailsId } = await params;

  return <StoreFrontDetails id={projectDetailsId} />;
}
