import banner from "../assets/banner.jpg";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-28">
            <div className="gradientBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9">
                <div>
                    <div className="md:w-3/5">
                        <h2 className="md:text-7x1 text-4x1 font-bold text-white mb-6 leading-relaxed">T&D Freight To The Rescue!</h2>
                        <p className="text-[#EBEBEB] text-2x1 mb-8">You're #1 Option for hauling freight anywhere within the Tri-State!</p>
                    </div>
                    <div className="space-x-5 space-y-4">
                        <button className="btnPrimary">Contact</button>
                        <button className="btnPrimary">Request Consulting</button>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                        <img src={banner} alt="Truck Loading" className="lg:h-[386px]" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;