import MyGrantDetails from "@/app/components/agency/My-Grants/myGrantsDetails";
import { JSX } from "react";

export default async function MyGrantsDetails({
  params,
}: {
  params: Promise<{ grantsDetailsId: string }>;
}): Promise<JSX.Element> {
  const { grantsDetailsId } = await params;

  return <MyGrantDetails detailsId={grantsDetailsId} />;
}
