import Header from "../Header/Header";
import { ThemeProvider } from "next-themes";
const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="system"
        themes={["Yellow", "Green", "Blue", "Red", "Brown"]}
        enableSystem
      >
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
