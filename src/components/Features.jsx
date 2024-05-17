import driverpay from "../assets/driverpay.jpg";

const Features = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
                        Why T&D Over the Competition?
                    </h3>
                    <p className="text-base text-tertiary">
                        T&D Freight takes pride in ensuring that all of your needs are met! Whether you're a family moving, or a corporation looking for freight to be hauled, T&D has you covered! Owned and operated by the same man for over 3 years!
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                            <img src={driverpay} alt="Trucker behind wheel" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center lg:h-[386px]">Convenient Booking</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 mt-10">
                        <div>
                            <img src={driverpay} alt="Trucker behind wheel" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Reliable Service</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 mt-10">
                        <div>
                            <img src={driverpay} alt="Trucker behind wheel" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Affordable Rates</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 mt-10">
                        <div>
                            <img src={driverpay} alt="Trucker behind wheel" style={{ maxWidth: '400px', maxHeight: '400px' }} />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Experienced Drivers</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
