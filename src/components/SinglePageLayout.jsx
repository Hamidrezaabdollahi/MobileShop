import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Header from "./Header";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import { SingleProductSection } from "./SingleProductSection";
import BreadCrumb from "./BreadCrumb";
import SingleProductMobile from "./SingleProductMobile";

// import { useProducts } from "../context/ProductsContext";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SinglePageLayout() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/products/${id}`
        );
        setProduct(data);
      } catch (err) {
        if (axios.isCancel()) {
          setProduct([]);
          toast.error(err?.message);
        }
      }
    }
    fetchData();
  }, [id]);

  if (product)
    return (
      <>
        <Header />
        <Navbar addressToNavigate={-1} title={product.title}>
          <ChevronRightIcon className="size-8" />
        </Navbar>
        <div className="px-2 text-xs md:hidden">
          <BreadCrumb {...product} />
        </div>
        <SingleProductSection {...product} />
        <SingleProductMobile {...product} />
        <BottomNavigation />
      </>
    );
}

export default SinglePageLayout;
