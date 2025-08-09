import { useLoaderData } from "react-router"
import Banner from "./Banner"
import FeaturedServices from "./FeaturedServices"
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import About from "../../Pages/About/About";

const Home = () => {
  const servicesData = useLoaderData();
  return (
    <div>
      <div>
        <Banner/>
        <FeaturedServices servicesData={servicesData}/>
        <WhyChooseUs/>
        <About/>
        <ContactUs/>
      </div>
    </div>
  )
}

export default Home
