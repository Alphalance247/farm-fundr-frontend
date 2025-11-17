"use client";
import GoBackBtn from "@/app/components/common/goBack";
import Input from "@/app/components/common/input";
import Label from "@/app/components/common/label";
import Footer from "@/app/components/grant-page/footer";
import Header from "@/app/components/grant-page/header";

const GrantApplication = () => {
  const ApplicationHead = ({ text }: { text: string }) => {
    return (
      <p className="py-3 px-4 font-poppinsSemiBold text-xl text-[#5F5F5F] bg-[#ECF2FF] mb-3 rounded-md border border-[#C5D5FF]">
        {text}
      </p>
    );
  };
  return (
    <section>
      <Header />
      <div className="px-10 py-14 max-w-[1400px] mx-auto xl:px-4 xl:py-6">
        <GoBackBtn href="/grant-page/" />

        <div className="bg-white rounded-2xl p-6 border border-[#3056B5] mt-7">
          <form action="" className="flex flex-col gap-y-8">
            <div className="">
              <ApplicationHead text={"Personal Information"} />

              <div className="flex flex-col gap-y-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="" isImportant={true}>
                      First Name
                    </Label>
                    <Input
                      name="grant_name"
                      className=""
                      type="text"
                      value={"grant_name"}
                      placeholder="Grant name"
                      variant="tertiary"
                      onChange={
                        (e) => {}
                        //   setForm({ ...form, grant_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="" isImportant={true}>
                      Last name
                    </Label>
                    <Input
                      name="grant_name"
                      className=""
                      type="text"
                      value={"grant_name"}
                      placeholder="Grant name"
                      variant="tertiary"
                      onChange={
                        (e) => {}
                        //   setForm({ ...form, grant_name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="" isImportant={true}>
                      Email Address
                    </Label>
                    <Input
                      name="grant_name"
                      className=""
                      type="email"
                      value={""}
                      placeholder="johndoe@gmail.com"
                      variant="tertiary"
                      onChange={
                        (e) => {}
                        //   setForm({ ...form, grant_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="" isImportant={true}>
                      Phone Number
                    </Label>
                    <Input
                      name="grant_name"
                      className=""
                      type="text"
                      value={""}
                      placeholder="Enter Phone Number"
                      variant="tertiary"
                      onChange={
                        (e) => {}
                        //   setForm({ ...form, grant_name: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <ApplicationHead text={"Farm Information"} />
              <p className="text-[#DE4204] font-poppinsRegular text-sm mt-6 mb-4">
                Please provide the necessary details about your farm (*)
              </p>

              <div className="flex flex-col gap-y-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="" isImportant={true}>
                      Farm Name
                    </Label>
                    <Input
                      name="grant_name"
                      className=""
                      type="text"
                      value={""}
                      placeholder="Enter your farm name"
                      variant="tertiary"
                      onChange={
                        (e) => {}
                        //   setForm({ ...form, grant_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="" isImportant={true}>
                      Farm Location
                    </Label>
                    <div>
                      <select
                        id="fund_type"
                        name="fund_type"
                        value={""}
                        onChange={(e) => {
                          // setForm({ ...form, fund_type: e.target.value });
                          {
                          }
                        }}
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                      >
                        <option value="">Select Location</option>

                        <option key="" value="nill">
                          nill
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="" isImportant={true}>
                      Farm Type
                    </Label>
                    <div>
                      <select
                        id="fund_type"
                        name="fund_type"
                        value={""}
                        onChange={(e) => {
                          // setForm({ ...form, fund_type: e.target.value });
                          {
                          }
                        }}
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                      >
                        <option value="">Select Location</option>

                        <option key="" value="nill">
                          nill
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                    <div>
                      <Label className="" isImportant={true}>
                        Farm Size (1 plot/Acre)
                      </Label>
                      <Input
                        name="grant_name"
                        className=""
                        type="text"
                        value={""}
                        placeholder="Enter your farm name"
                        variant="tertiary"
                        onChange={
                          (e) => {}
                          //   setForm({ ...form, grant_name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label className="">. </Label>
                      <div>
                        <select
                          id="fund_type"
                          name="fund_type"
                          value={""}
                          onChange={(e) => {
                            // setForm({ ...form, fund_type: e.target.value });
                            {
                            }
                          }}
                          className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-3 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                        >
                          <option value="">Select Location</option>

                          <option key="" value="nill">
                            nill
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="" isImportant={true}>
                      Years in Operation
                    </Label>
                    <div>
                      <select
                        id="fund_type"
                        name="fund_type"
                        value={""}
                        onChange={(e) => {
                          // setForm({ ...form, fund_type: e.target.value });
                          {
                          }
                        }}
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                      >
                        <option value="">Select Location</option>

                        <option key="" value="nill">
                          nill
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label className="">Number of workers (Optional)</Label>
                    <div>
                      <select
                        id="fund_type"
                        name="fund_type"
                        value={""}
                        onChange={(e) => {
                          // setForm({ ...form, fund_type: e.target.value });
                          {
                          }
                        }}
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                      >
                        <option value=""></option>

                        <option key="" value="nill">
                          nill
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GrantApplication;
