export const Multi = () => {
  return (
    <div className="bg-[#f4f4f4] h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-100 h-150 bg-white rounded-sm">
          <img className="w-10 h-10 mt-8 ml-8" src="/logo.png" alt="logo" />
          <h1 className="font-bold ml-8 mt-4">Join Us! 😎</h1>
          <p className="text-sm ml-8 text-[#8e8e8e]">
            Please provide all current information accurately.
          </p>
          <div className="flex gap-0.5 ml-8 mt-2">
            <p>First name</p>
            <p className="text-red-700">*</p>
          </div>
          <input
            className="border border-[#ced7e1] rounded-sm ml-8 mt-1 p-2 w-80"
            placeholder="Placeholder"
            type="text"
          />
          <div className="flex gap-0.5 ml-8 mt-2">
            <p>Last name</p>
            <p className="text-red-700">*</p>
          </div>
          <input
            className="border border-[#ced7e1] rounded-sm ml-8 mt-1 p-2 w-80"
            placeholder="Placeholder"
            type="text"
          />
          <div className="flex gap-0.5 ml-8 mt-2">
            <p>Username</p>
            <p className="text-red-700">*</p>
          </div>
          <input
            className="border border-[#ced7e1] rounded-sm ml-8 mt-1 p-2 w-80"
            placeholder="Placeholder"
            type="text"
          />
          <div className="flex justify-center ">
            <button className="bg-[#121315] text-white w-80 rounded-sm mt-21 p-1">
              Continue 1/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
