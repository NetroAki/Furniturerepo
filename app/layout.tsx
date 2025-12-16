import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "FurniturePicker - Find Your Perfect Furniture",
  description: "Compare and find the perfect furniture for your space. Filter by dimensions, materials, style, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              FurniturePicker - Your furniture comparison tool
            </p>
            <p className="text-xs mt-2 text-slate-400">
              Currently serving UK market. More countries coming soon.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
