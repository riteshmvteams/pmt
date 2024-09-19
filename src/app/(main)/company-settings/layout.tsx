import CheckInButton from "@/components/shared/CheckInButton";
import SettingsBreadCrumb from "./_components/SettingsBreadCrumb";
import CompanySettingsTabs from "./_components/CompanySettingsTabs";

export default function CompanySettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <SettingsBreadCrumb />
        <CheckInButton />
      </div>
      <div className="flex flex-col gap-4">
        <CompanySettingsTabs />
        {children}
      </div>
    </>
  );
}
