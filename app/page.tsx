import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trending";

export default function Home() {
  return (
    <main className="bg-[#013B94] min-h-[160vh]">
      <div className="bg-cover bg-center bg-no-repeat custom-background ">
        <section className="max-w-7xl mx-auto p-6 pt-[15%]">
          <h2 className="font-bold text-5xl text-white ">
            Find your Next Stay
          </h2>
          <h3 className="text-white py-5 text-xl">
            Search low prices on hotels, homes and much more...
          </h3>
        </section>

        <section className="m-4 mt-10 px-2 lg:p-4">
          <SearchForm />
        </section>
      </div>

      <section className="mx-auto max-w-7xl my-[2%] p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold"> Trending Destinations </h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll scroll-auto">
          {trending_data.map((item) => (
            <div
              key={item.id}
              className="space-y-1 shrink-0 cursor-pointer rounded-lg hover:shadow-xl duration-200"
            >
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />
              <div className="pl-3 pb-3 ">
                <p className="font-bold">{item.title}</p>
                <p className=""> {item.location}</p>
                <p className="font-light text-sm">{item.description}</p>
              </div>{" "}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
