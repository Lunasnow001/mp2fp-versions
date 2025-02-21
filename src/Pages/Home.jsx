import { assets } from "../assets/assets";
import ScrollToTop from "../Components/Common/ScrollToTop";
import FAQs from "../Components/Layout/FAQs";
import Hero from "../Components/Layout/Hero";
import FloorplanOrder from "../Components/Products/FloorplanOrder";
import FloorplanViewer from "../Components/Products/FloorplanViewer";
// import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProcessTimeline from "../Components/Products/ProcessTimeline";
// import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";


const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: assets.PLAN_17 }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: assets.PLAN_18 }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 150,
    images: [{ url: assets.PLAN_19 }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 190,
    images: [{ url: assets.PLAN_20 }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 330,
    images: [{ url: assets.PLAN_21 }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 400,
    images: [{ url: assets.PLAN_22 }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 350,
    images: [{ url: assets.PLAN_23 }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 220,
    images: [{ url: assets.PLAN_16 }],
  },
];

const Home = () => {
  return (
    <div className="bg-[#f4f7f9]">
      <ScrollToTop />
      <Hero />
      {/* <div className="mx-auto container"> */}

      <FloorplanViewer />
      {/* <GenderCollectionSection /> */}
      <ProcessTimeline />
      <FloorplanOrder />
      <NewArrivals />
      {/* <ProductDetails /> */}
      <div className="mx-auto container">
        <h2 className="mt-20 mb-4 font-bold text-3xl text-center">
          All house model examples
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FAQs />

      {/* </div> */}
    </div>
  );
};

export default Home;
