const Hero = () => {
  return (
    <div className="bg-[url('/hero5.jpg')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px] flex items-start justify-between pt-[10%]">

      <div className="flex flex-col text-white w-[50%]">
        <span className="text-[30px] mt-3">Donează sânge, salvează vieți!</span>
        <h1 className="text-[38px] mt-3">
          Printr-o singură donare de sânge poți ajuta până la trei persoane.
        </h1>

        <div className="flex items-center mt-[20px]">
          <button className="bg-red-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">
            Donează acum
          </button>
          <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">
            TEL : (+40) 729 652 706
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
