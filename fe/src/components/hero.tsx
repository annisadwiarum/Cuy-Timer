import { useQuery } from "@tanstack/react-query";

const fetchTest = async () => {
  const api = await fetch("http://localhost:1999/");
  const response = await api.json();
  return response;
};

function Hero() {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["api"],
    queryFn: fetchTest,
  });

  if (isError) return <div>error</div>;
  if (isLoading) return <div>loading</div>;
  if (isSuccess) return console.log(data);

  // const query = useQuery('api', getApi)

  return (
    <div className="flex-col flex items-center gap-8">
      <h1 className="text-5xl font-bold">😎 Cuytimer || {data.status}</h1>
      <input
        type="text"
        placeholder="type time.."
        className="input w-full max-w-xs p-2 text-gray-700 rounded-md border border-[#9c9185] "
      />
      <button className="bg-yellow-400 shadow-md rounded-md px-4 py-2 font-semibold text-[#8f6e4e] hover:transform hover:scale-110 transition-transform">
        Start
      </button>
    </div>
  );
}

export default Hero;
