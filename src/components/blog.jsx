export default function Blog() {
  return (
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
              Interior design is the art, the interior designer is the artist.
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
              Interior design is the art, the interior designer is the artist.
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
              Interior design is the art, the interior designer is the artist.
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
              Interior design is the art, the interior designer is the artist.
            </h4>
            <div className="w-[30%] bg-[#FFDD5F] h-1"></div>
            <h5 className="font-Archivo_Narrow font-medium text-wrap text-md text-left">
              October 02, 2022 / Hastheme / in Chair
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
