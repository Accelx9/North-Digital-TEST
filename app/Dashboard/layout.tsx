import { Sidebar } from "@/components";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex overflow-x-hidden">
        <Sidebar />
        <div className="w-full  overflow-x-hidden flex flex-col bg-light h-screen">
          {children}
        </div>
      </main>
    </>
  );
}
