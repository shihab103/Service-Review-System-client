import { useLoaderData } from "react-router"
import Banner from "./Banner"
import FeaturedServices from "./FeaturedServices"
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const servicesData = useLoaderData();
  return (
    <div>
      <div>
        <Banner/>
        <FeaturedServices servicesData={servicesData}/>
        <WhyChooseUs/>
      </div>
    </div>
  )
}

export default Home
