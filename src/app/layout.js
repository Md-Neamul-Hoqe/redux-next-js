import "./globals.css";

export const metadata = {
  title: {
    template: '%s - Redux with Next JS',
    default: 'Redux with Next JS'
  },
  description: "Practice Redux with Next JS app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
