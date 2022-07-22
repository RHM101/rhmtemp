import PageHeader from "../components/PageHeader";
import CarouselCover1 from "../components/CarouselCover1";
import Carousel from "../components/Carousel1";

export default function Home() {
  return (
    <div className="w-auto h-full bg-blue-800">
      <div>
        <PageHeader />
      </div>
      <div className="flex-auto w-auto grid grid-row-2 ">
        <div className="flex-1 w-auto m-1 object-fit">
          <CarouselCover1 />
          <div className="flex-1 w-full h-1/2 m-1 ">
            <Carousel />
          </div>
          <h2 className=" flex-auto text-white italic text-5xl text-center">
            Welcome to Rising Hope Ministries{" "}
            <p>
              We are currently updating our site this may take upto 2 weeks
              While we are going through this process we are still in full
              operations{" "}
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}
