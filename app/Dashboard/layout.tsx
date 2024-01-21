import { Sidebar } from "@/components";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="w-full  flex flex-col bg-light h-screen overflow-y-auto">
          {children}
        </div>
      </main>
    </>
  );
}
