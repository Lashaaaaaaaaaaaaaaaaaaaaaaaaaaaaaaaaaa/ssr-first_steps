export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>PR Layout</h1>
      {children}
    </div>
  );
}
