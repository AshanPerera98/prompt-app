import "@styles/globals.css";

export const metadata = {
  title: "Prompt NextJS App",
  description: "Prompt nextjs app description",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="msin">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
