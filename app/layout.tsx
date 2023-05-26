import "./globals.css";
import { Inter } from "next/font/google";
import ToasterToggle from "@/components/ui/toaster";
import Sidebar from "@/components/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import MobileNav from "@/components/nav/MobileNav";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import MadeBy from "@/components/sidebar/MadeBy";

export const metadata = {
  title: "Postly",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={inter.className}>
      <body className="relative h-screen overflow-hidden dark:bg-neutral-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="scroll relative h-screen">
            <div className="container mx-auto max-w-2xl">
              <ToasterToggle />
              <div className="relative grid max-w-2xl grid-cols-12">
                <div className="sticky left-0 top-0 z-20 hidden h-screen md:col-span-1 md:flex">
                  <Sidebar session={session} />
                </div>
                <div className="z-10 col-span-12 pb-10 md:col-span-8 md:pb-0">
                  {children}
                </div>
                <div className="sticky right-0 top-0 z-0 col-span-3 hidden h-screen md:flex">
                  <div className="mt-auto h-20 w-full pl-4">
                    <MadeBy />
                  </div>
                </div>
              </div>
              <MobileNav session={session} />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
