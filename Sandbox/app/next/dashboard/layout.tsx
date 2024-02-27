export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      {children}
      <nav className="bg-slate-500 p-5  ">
          Dashboard only layout
      </nav>
      
      </>
    );
  }