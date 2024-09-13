import CheckInButton from "@/components/shared/CheckInButton";
import SettingsBreadCrumb from "./_components/SettingsBreadCrumb";
import PersonalSettingsTabs from "./_components/PersonalSettingsTabs";

export default function PersonalSettingsLayout({
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
        <PersonalSettingsTabs />
        {children}
      </div>
    </>
  );
}
