export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}
