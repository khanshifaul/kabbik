export default function Popular() {
  return (
    <div className="container mx-auto mb-12">
      <div className="text-center my-6">
        <h2 className="uppercase text-black text-3xl font-semibold">
          Popular <span className="text-LightSeaGreen">We Have</span>
        </h2>
        <p className="MidnightBlue">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-2 md:gap-12 justify-between items-center font-Archivo_Narrow">
        {/*  */}
        <div className="flex flex-col w-full h-fit">
          <div className="h-60 flex justify-center items-end">
            <img
              src="/assets/Tulip Chair.png"
              alt="Tulip Chair Furniture"
              className="object-cover mx-auto z-30"
            />
          </div>
          <div className="translate-y-[-30%] flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
            <h4 className="text-xl text-nowrap">Tulip Chair Furniture</h4>
            <img
              src="/assets/Group 4686.png"
              alt=""
              className="mx-auto object-contain"
            />
            <h5 className="text-lg">$12.09</h5>
            <button className="bg-MangoTango text-black font-medium px-6 rounded-lg w-fit">
              Buy Now
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col w-full h-fit">
          <div className="h-60 flex justify-center items-end">
            <img
              src="/assets/Beath Chair.png"
              alt="Beath Chair Furniture"
              className="object-cover mx-auto z-30"
            />
          </div>
          <div className="translate-y-[-30%] flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
            <h4 className="text-xl text-nowrap">Beath Chair Furniture</h4>
            <img
              src="/assets/Group 4686.png"
              alt=""
              className="mx-auto object-contain"
            />
            <h5 className="text-lg">$22.00</h5>
            <button className="bg-MangoTango text-black font-medium px-6 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full h-fit">
          <div className="h-60 flex justify-center items-end">
            <img
              src="/assets/Yellow armchair.png"
              alt="Yellow armchair"
              className="object-cover mx-auto z-30"
            />
          </div>
          <div className="translate-y-[-30%] flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
            <h4 className="text-xl text-nowrap">Yellow armchair</h4>
            <img
              src="/assets/Group 4686.png"
              alt=""
              className="mx-auto object-contain"
            />
            <h5 className="text-lg">$10.00</h5>
            <button className="bg-MangoTango text-black font-medium px-6 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full h-fit">
          <div className="h-60 flex justify-center items-end">
            <img
              src="/assets/Front view Chair.png"
              alt="Front view Chair"
              className="object-cover mx-auto z-30"
            />
          </div>
          <div className="translate-y-[-30%] flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
            <h4 className="text-xl text-nowrap">Front view Chair</h4>
            <img
              src="/assets/Group 4686.png"
              alt=""
              className="mx-auto object-contain"
            />
            <h5 className="text-lg">$19.03</h5>
            <button className="bg-MangoTango text-black font-medium px-6 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
