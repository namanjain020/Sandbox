export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <nav className="bg-slate-300 p-5  ">
        Common layout
    </nav>
    {children}
    </>
  );
}