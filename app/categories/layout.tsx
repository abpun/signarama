import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="custom-scrollbar overflow-y-auto">
        {children}
        <Footer />
    </div>
  );
}