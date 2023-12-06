import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;