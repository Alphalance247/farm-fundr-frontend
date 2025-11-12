import GrantCard from "../components/grant-page/grantCard";
import Header from "../components/grant-page/header";

const GrantPage = () => {
  return (
    <section className="">
      <Header />

      <div className="max-w-[1400px] mx-auto px-10 py-14 grid grid-cols-3 gap-6">
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
      </div>
    </section>
  );
};

export default GrantPage;
