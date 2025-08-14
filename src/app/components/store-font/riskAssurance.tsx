import { getFarmPageProjectDetails } from "@/stores/farmpage/farmPageProjectDetails";

const RiskAssurance = () => {
  const { data: projectDetailsData } = getFarmPageProjectDetails();
  return (
    <div>
      {/* <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
        At Nelson Ade Farms, we prioritize building a trustworthy and
        sustainable platform for all stakeholders. To minimize risks and ensure
        the success of projects, we have implemented a comprehensive risk
        assurance framework. This framework covers critical areas such as
        project selection, fund management, and farm operations.
      </p>

      <div className="mt-12">
        <ul className="list-disc">
          <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-1 ml-6">
            Key Measures Include:
          </li>
          <ul className="list-disc">
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Thorough Vetting of Farms and Farmers: We conduct detailed
              background checks and assess the track record of farms and farmers
              before onboarding them onto the platform. Only verified and
              credible partners are approved for funding projects.
            </li>
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Insurance Coverage: Selected farming projects are insured against
              key risks such as extreme weather events, pest outbreaks, and
              fire, helping to protect both farmers and funders from unforeseen
              losses.
            </li>
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Regular Monitoring and Reporting: We maintain consistent oversight
              of funded farms, providing regular updates and performance reports
              to funders. Field officers and digital monitoring tools help track
              farm progress in real-time.
            </li>
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Diversification Strategies: To minimize the impact of risks, we
              encourage diversified project options across different farm types,
              locations, and crop cycles.
            </li>
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Risk Education for Funders: We provide transparent information
              about potential risks involved in agricultural investments and
              share strategies for managing expectations and making informed
              decisions.
            </li>
            <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
              Contingency Planning: We have structured contingency plans to
              respond promptly to emergencies or deviations from expected
              project outcomes, ensuring that appropriate steps are taken to
              protect investments.
            </li>
          </ul>

          <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-12">
            Through these measures, Nelson Ade Farms is committed to
            safeguarding investments and promoting the long-term success and
            sustainability of agricultural projects.
          </li>
        </ul>
      </div> */}
      {projectDetailsData?.data?.project?.risk_assurance || "N/A"}
    </div>
  );
};

export default RiskAssurance;
