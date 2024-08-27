import { ChevronRightIcon } from "@heroicons/react/16/solid"
import Header from "./Header"
import { Navbar } from "./Navbar"
import BottomNavigation from "./BottomNavigation"


function Favorites() {
  return (
    <div className="px-4">
      <Header />
      <Navbar addressToNavigate={-1} title="علاقه مندی ها">
        <ChevronRightIcon className="size-8" />
      </Navbar>
      <BottomNavigation />
    </div>
  )
}

export default Favorites





