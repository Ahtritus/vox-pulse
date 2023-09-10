import CreateOrgCard from "@/components/CreateOrgCard";
import JoinOrgCard from "@/components/JoinOrgCard";
import OrgList from "@/components/OrgList";

export default function Home() {
  return (
    <div>
      <div className="mx-auto pt-24 py-4 px-6 flex mb-5 sticky top-0 z-50 justify-between items-center">
        <CreateOrgCard />
        <JoinOrgCard />
      </div>
      <div className="flex">
        <OrgList />
      </div>
    </div>
  );
}
