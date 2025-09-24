import { JSX } from "react";
import InvestmentDetailsComponent from "../investmentDetails";

export default async function InvestmentDetails({
  params,
}: {
  params: Promise<{ investmentDetailsId: string }>;
}): Promise<JSX.Element> {
  const { investmentDetailsId } = await params;

  return (
    <InvestmentDetailsComponent investmentDetailsId={investmentDetailsId} />
  );
}
