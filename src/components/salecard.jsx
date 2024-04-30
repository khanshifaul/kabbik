export default function SaleCard() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 container mx-auto my-12 px-2">
      <div className="basis-3/5 bg-PaleTurquoise rounded-xl flex flex-col md:flex-row relative">
        <div className="w-full z-30 flex justify-center items-end md:pt-24">
          <img
            src="/assets/bigsale.png"
            alt="bigsale furniture"
            className="object-fit  z-30"
          />
        </div>
        <div className="w-full md:w-1/2 h-full md:absolute md:right-0 bg-Teal text-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl flex flex-col items-center gap-5 md:items-end px-4 py-6">
          <h2 className="font-Italianno text-3xl md:text-5xl md:pr-6">
            Furniture <br />
            <span className="pl-12 text-5xl text-nowrap">Big Sale</span>
          </h2>
          <button className="rounded-full bg-TealLite font-medium p-2 px-6 text-nowrap">
            Order Now
          </button>
        </div>
      </div>

      <div className="basis-2/5 flex flex-col gap-5">
        <div className="w-full h-full bg-Peach rounded-xl flex flex-row relative">
          <div className="w-full z-30 flex justify-start items-end p-2">
            <img
              src="/assets/modern furniture.png"
              alt="modern furniture"
              className="object-fit z-30"
            />
          </div>

          <div className="w-2/3 md:h-full md:absolute md:right-0 bg-LightSalmon text-white rounded-bl-none rounded-r-xl flex flex-col items-center md:items-end px-4 py-4">
            <h2 className="font-K2D text-3xl">
              Modern <br />
              <span className="pl-6 text-3xl">Furniture</span>
            </h2>
            <button className="rounded-full bg-LightSalmon drop-shadow-xl shadow-LightSalmon font-medium p-2 px-6 text-nowrap">
              Order Now
            </button>
          </div>
        </div>

        <div className="w-full h-full bg-PowderBlue rounded-xl flex flex-col md:flex-row relative">
          <div className="w-full z-30 flex justify-center items-end">
            <img
              src="/assets/home comfort.png"
              alt="home comfort"
              className="object-fit z-30"
            />
          </div>

          <div className="w-full md:w-1/2 h-full md:absolute md:right-0 bg-LightGreen text-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl flex flex-col items-center md:items-end px-4 py-4">
            <h2 className="font-Kalam text-3xl text-nowrap">Home Comfort</h2>
            <button className="rounded-full bg-LightGreen drop-shadow-xl shadow-LightGreen font-medium p-2 px-6 text-nowrap">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
