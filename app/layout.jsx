import Nav from "../components/Nav";
import Provider from "../components/Provider";
import "../styles/globals.css";

export const metadata = {
  title: "Tushar Promtify",
  description: "Tushar's Promtify.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
