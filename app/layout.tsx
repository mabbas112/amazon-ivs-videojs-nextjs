import "../global.css";

export default async function RootLayout({
  children,
}: any) {
  return (
    <html lang={'en'}>
      <head>
        <title>NextJs: Amazon IVs with VideoJS</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="NextJs: Amazon IVs with VideoJS" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
