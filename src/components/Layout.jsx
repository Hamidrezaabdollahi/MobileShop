import BottomNavigation from "./BottomNavigation";
import { FilterSort } from "./FilterSort";
import Header from "./Header";
import { Navbar } from "./Navbar";
import { ProductSession } from "./ProductSession";

function Layout({data}) {
  return (
    <>
      <Header />
      <Navbar title="ساعت هوشمند">
        Logo
      </Navbar>
      <FilterSort />
      <ProductSession data={data} />
      <BottomNavigation />
    </>
  );
}

export default Layout;
