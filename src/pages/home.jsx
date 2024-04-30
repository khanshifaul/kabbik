function Home() {
  return (
    <>
      <main>
        <div className=" gap-5 bg-gradient-to-br from-CornSilk via-PeachPuff to-Goldenrod">
          <div className="container mx-auto flex md:flex-row flex-col justify-between">
            <div className="md:basis-1/2 my-0 px-2 md:my-12 order-2 md:order-1">
              <h1 className="text-Charcoal font-Oxanium font-semibold text-5xl md:text-8xl leading-tight">
                We <span className="text-LightSeaGreen">Provide High</span>{" "}
                <br />
                <span className="text-4xl md:text-5xl"> Quality Furniture</span>
              </h1>
              <p className="MidnightBlue">
                Choose and buy from wide and largest sofa collection of
                Bangladesh. Regal, the most loved and selling furniture brand in
                Bangladesh, brought to you modern, ergonomic, budget friendly
                sofa. Choose among various types of Sofa Such as Fabric Sofa,
                Wooden Sofa, Sofa cum beds, L-shaped Sofa at affordable prices,
                redefine your living room with our most unique ergonomically and
                quality crafted Sofas that suit your needs best.
              </p>
            </div>
            <div className="z-10 order-1 md:order-2 mx-auto">
              <img
                src="/assets/hero-img.png"
                alt="hero-img"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-MangoTango drop-shadow-md md:translate-y-[-50%]">
          <div className="container mx-auto flex items-center py-12 px-2">
            <button className="bg-ForestGreen font-Archivo_Narrow px-6 py-2 text-white font-medium rounded-md">
              Buy Now
            </button>
            <button className="font-Archivo_Narrow px-6 py-2  font-medium flex items-center gap-3">
              <img
                src="/assets/allproduct.png"
                alt="allproduct"
                className="bg-white p-1 rounded-sm"
              />
              All Product
            </button>
          </div>
        </div>

        <div className="translate-y-[-40%] md:translate-y-[-100%] flex justify-center gap-6 mx-2 md:mx-[25%] my-6 z-100">
          <div className="bg-gradient-to-b from-PaleAqua to-SkyBlue w-full font-semibold flex flex-col justify-center items-center p-4 rounded-3xl">
            <img src="/assets/cat_sofa.png" alt="cat_sofa" />
            Sofa
          </div>
          <div className="bg-gradient-to-b from-PaleAqua to-SkyBlue w-full font-semibold flex flex-col justify-center items-center p-4 rounded-3xl">
            <img src="/assets/cat_chair.png" alt="cat_chair" />
            Chair
          </div>
          <div className="bg-gradient-to-b from-PaleAqua to-SkyBlue w-full font-semibold flex flex-col justify-center items-center p-4 rounded-3xl">
            <img src="/assets/cat_bed.png" alt="cat_bed" />
            Bed
          </div>
        </div>
        <div className="container mx-auto">
          <div className="text-center md:translate-y-[-100%] my-6">
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

          <div className="flex flex-col md:flex-row px-2 gap-12 justify-between items-center font-Archivo_Narrow">
            {/*  */}
            <div className="flex flex-col w-full">
              <div className="translate-y-[30%]">
                <img
                  src="/assets/Tulip Chair.png"
                  alt="Tulip Chair Furniture"
                  className="object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
                <h4>Tulip Chair Furniture</h4>
                <img
                  src="/assets/Group 4686.png"
                  alt=""
                  className="mx-auto object-contain"
                />
                <h5>$12.09</h5>
                <button className="bg-MangoTango text-black px-6 rounded-lg w-fit">
                  Buy Now
                </button>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col w-full">
              <div className="translate-y-[30%]">
                <img
                  src="/assets/Beath Chair.png"
                  alt="Beath Chair Furniture"
                  className="object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
                <h4>Beath Chair Furniture</h4>
                <img
                  src="/assets/Group 4686.png"
                  alt=""
                  className="mx-auto object-contain"
                />
                <h5>$22.00</h5>
                <button className="bg-MangoTango text-black px-6 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="translate-y-[30%]">
                <img
                  src="/assets/Yellow armchair.png"
                  alt="Yellow armchair"
                  className="object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
                <h4>Yellow armchair</h4>
                <img
                  src="/assets/Group 4686.png"
                  alt=""
                  className="mx-auto object-contain"
                />
                <h5>$10.00</h5>
                <button className="bg-MangoTango text-black px-6 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="translate-y-[30%]">
                <img
                  src="/assets/Front view Chair.png"
                  alt="Front view Chair"
                  className="object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl rounded-tr-[50%] bg-DarkTeal text-center text-white py-6 pt-24">
                <h4>Front view Chair</h4>
                <img
                  src="/assets/Group 4686.png"
                  alt=""
                  className="mx-auto object-contain"
                />
                <h5>$19.03</h5>
                <button className="bg-MangoTango text-black px-6 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 container mx-auto my-12 px-2">
          <div className="bg-PaleTurquoise rounded-xl flex flex-col md:flex-row basis-2/3">
            <div className="basis-1/2">
              <div className="md:translate-x-[50%]">
                <div className="md:translate-y-[30%]">
                  <img
                    src="/assets/bigsale.png"
                    alt="bigsale furniture"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/2 bg-Teal text-white rounded-b-xl md:rounded-r-xl flex flex-col items-center gap-5 md:items-end px-12 py-6">
              <h2 className="font-Italianno text-3xl md:text-5xl pr-6">
                Furniture <br />
                <span className="pl-12 md:text-5xl">Big Sale</span>
              </h2>
              <button className="rounded-full bg-TealLite font-medium p-2 px-6">
                Order Now
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="basis-1/2">
              <div className="bg-Peach rounded-xl flex flex-col md:flex-row">
                <div className="basis-1/2">
                  <div className="md:translate-x-[30%]">
                    <div className="object-center">
                      <img
                        src="/assets/modern furniture.png"
                        alt="modern furniture"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="basis-5/6 bg-LightSalmon text-white rounded-b-xl md:rounded-r-xl flex flex-col gap-5 items-center md:items-end px-12 py-6">
                  <h2 className="font-K2D text-3xl">
                    Modern <br />
                    <span className="pl-6 text-5xl">Furniture</span>
                  </h2>
                  <button className="rounded-full bg-LightSalmon drop-shadow-xl shadow-LightSalmon font-medium p-2 px-6">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="basis-1/2">
              <div className="bg-PowderBlue rounded-xl flex flex-col md:flex-row">
                <div className="basis-1/2">
                  <div className="md:translate-x-[20%]">
                    <div className="">
                      <img
                        src="/assets/home comfort.png"
                        alt="home comfort"
                        className="object-cover md:min-w-[150%] mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 bg-LightGreen text-white rounded-b-xl md:rounded-r-xl flex flex-col gap-5 items-center md:items-end px-12 py-6">
                  <h2 className="font-Kalam text-3xl">Home Comfort</h2>
                  <button className="rounded-full bg-LightGreen drop-shadow-xl shadow-LightGreen font-medium p-2 px-6">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row gap-12 my-12">
          <div className="basis-1/2 flex gap-5">
            <div className="basis-3/4">
              <img src="/assets/chair1.png" alt="" />
            </div>
            <div className="basis-1/4 flex flex-col gap-5">
              <div>
                <img
                  src="/assets/chair2.png"
                  alt=""
                  className="object-contain"
                />
              </div>
              <div>
                <img
                  src="/assets/chair3.png"
                  alt=""
                  className="object-contain"
                />
              </div>
              <div>
                <img
                  src="/assets/chair4.png"
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-5 justify-center px-2">
            <h3 className="font-semibold font-Archivo_Narrow text-3xl">
              Designed to Fit <br /> <span className="text-3xl">Your Home</span>
            </h3>
            <p>
              Furniture Concepts is a contract furniture wholesaler serving the
              needs of group living environments including Community Housing,
              Treatment & Recovery Centers, Assisted Living, Camps, Conference
              Centers, Student Housing, Military Dorms & Quarters, and more!
              Behavioral Healthcare Facility Furniture.
            </p>
            <div className="flex items-center gap-5">
              <button className="bg-ForestGreen text-white rounded-md px-6 py-2">
                Shop Now
              </button>
              <button className="flex justify-center items-center">
                <img src="/assets/playbtn.png" alt="playbtn" />
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-6 justify-center items-center text-center px-2 pb-12">
          <h2 className="text-center text-3xl font-semibold">
            Our <span className="text-LightSeaGreen">Blog</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
            <div className="flex flex-col justify-start items-start">
              <img
                src="/assets/modern-vintage-interior-living-room-blueprint-home-decor-concept-green-couch-with-marble-table-blue-wall-hardwood-flooring-3d-render 1.png"
                alt=""
                className="object-cover w-96 h-48"
              />
              <div className="">
                <h4 className="font-Archivo_Narrow font-medium text-wrap text-2xl text-left">
                  Interior design is the art, the interior designer is the
                  artist.
                </h4>
                <div className="w-[30%] bg-[#FFDD5F] h-1"></div>
                <h5 className="font-Archivo_Narrow font-medium text-wrap text-md text-left">
                  October 02, 2022 / Hastheme / in Chair
                </h5>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <img
                src="/assets/tropical-interior-design-living-room.png"
                alt=""
                className="object-cover w-96 h-48"
              />
              <div className="">
                <h4 className="font-Archivo_Narrow font-medium text-wrap text-2xl text-left">
                  Interior design is the art, the interior designer is the
                  artist.
                </h4>
                <div className="w-[30%] bg-[#FFDD5F] h-1"></div>
                <h5 className="font-Archivo_Narrow font-medium text-wrap text-md text-left">
                  October 02, 2022 / Hastheme / in Chair
                </h5>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <img
                src="/assets/interior-design-with-photoframes-plants.png"
                alt=""
                className="object-cover w-96 h-48"
              />
              <div className="">
                <h4 className="font-Archivo_Narrow font-medium text-wrap text-2xl text-left">
                  Interior design is the art, the interior designer is the
                  artist.
                </h4>
                <div className="w-[30%] bg-[#FFDD5F] h-1"></div>
                <h5 className="font-Archivo_Narrow font-medium text-wrap text-md text-left">
                  October 02, 2022 / Hastheme / in Chair
                </h5>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <img
                src="/assets/beautiful-livingroom-with-white-couch-near-yellow-wall-3d-render 1.png"
                alt=""
                className="object-cover w-96 h-48"
              />
              <div className="">
                <h4 className="font-Archivo_Narrow font-medium text-wrap text-2xl text-left">
                  Interior design is the art, the interior designer is the
                  artist.
                </h4>
                <div className="w-[30%] bg-[#FFDD5F] h-1"></div>
                <h5 className="font-Archivo_Narrow font-medium text-wrap text-md text-left">
                  October 02, 2022 / Hastheme / in Chair
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </main>
    </>
  );
}

export default Home;
