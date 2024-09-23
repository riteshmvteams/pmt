import Header from "@/components/sidebar/Header";
import AppLayout from "@/components/layouts/AppLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLayout>
      <div className="flex flex-col flex-1 overflow-auto scrollbar">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </AppLayout>
  );
}
