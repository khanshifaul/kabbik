import Blog from "../components/blog";
import Design from "../components/design";
import Popular from "../components/popular";
import SaleCard from "../components/salecard";

function Home() {
  return (
    <>
      <main>
        <div>
          <div className="bg-gradient-to-br from-CornSilk via-PeachPuff to-Goldenrod">
            <div className="container mx-auto flex md:flex-row flex-col justify-between">
              <div className="md:basis-1/2 my-0 px-2 md:my-12 order-2 md:order-1">
                <h1 className="text-Charcoal font-Oxanium font-semibold text-5xl md:text-6xl leading-tight">
                  We <span className="text-LightSeaGreen">Provide High</span>
                  <br />
                  <span className="text-4xl md:text-5xl">
                    Quality Furniture
                  </span>
                </h1>
                <p className="MidnightBlue pb-6">
                  Choose and buy from wide and largest sofa collection of
                  Bangladesh. Regal, the most loved and selling furniture brand
                  in Bangladesh, brought to you modern, ergonomic, budget
                  friendly sofa. Choose among various types of Sofa Such as
                  Fabric Sofa, Wooden Sofa, Sofa cum beds, L-shaped Sofa at
                  affordable prices, redefine your living room with our most
                  unique ergonomically and quality crafted Sofas that suit your
                  needs best.
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
        </div>

        <Popular />

        <SaleCard />

        <Design />

        <Blog />
      </main>
    </>
  );
}

export default Home;
