export default function Design() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-12 my-12">
      <div className="basis-1/2 flex gap-5">
        <div className="basis-3/4">
          <img src="/assets/chair1.png" alt="" />
        </div>
        <div className="basis-1/4 flex flex-col gap-5">
          <div>
            <img src="/assets/chair2.png" alt="" className="object-contain" />
          </div>
          <div>
            <img src="/assets/chair3.png" alt="" className="object-contain" />
          </div>
          <div>
            <img src="/assets/chair4.png" alt="" className="object-contain" />
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
  );
}
