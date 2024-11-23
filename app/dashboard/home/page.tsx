import DashboardLayout from "@/layouts/dasboard";

export default function Dashboard() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="w-full ml-60 px-5 bg-[#F9F9FA] min-h-screen">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hello, Isola Pelumi 👋
        </h2>
        <p className="text-sm text-gray-600 py-2">
          Here is what’s happening on Dashboard Since it was launced
        </p>
      </div>
    </DashboardLayout>
  );
}
