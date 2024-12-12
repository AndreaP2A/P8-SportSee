import "./layout.scss";
import Header from "./header/header.jsx";
import Sidebar from "./sidebar/sidebar.jsx";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
