import banner from "../assets/banner.jpg";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
    return (
        <div className="gradientBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9">
            <div>
                <div className="md:w-3/5">
                    <h2 className="md:text-7x1 text-4x1 font-bold text-white mb-6 leading-relaxed">{heading}</h2>
                    <p className="text-[#EBEBEB] text-2x1 mb-8">{subheading}</p>
                </div>
                <div className="space-x-5 space-y-4">
                    <button className="btnPrimary">{btn1}</button>
                    <button className="btnPrimary">{btn2}</button>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <img src={banner} alt="Truck Loading" className="lg:h-[386px]" />

                </div>
            </div>
        </div>
    )
}

export default Banner;