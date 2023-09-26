import Content from "../components/Content";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <div className="grid grid-rows gap-y-12">
      <NavBar />
      <Content />
    </div>
  );
}

export default AppLayout;
