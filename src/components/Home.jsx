import Banner from "../shared/Banner";
import banner from "../assets/banner.jpg";


const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-24">
            <Banner banner={banner} heading={"T&D Freight To The Rescue!"} subheading={"You're #1 Option for hauling freight anywhere within the Tri-State!"} btn1={"contact"} btn2={"Request"} />

        </div>
    )
}

export default Home;