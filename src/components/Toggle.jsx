import { useState } from "react";

const ToggleSwitch = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggle = () => setIsMonthly(!isMonthly);

  return (
    <div className=" border border-transparent bg-[#eef5ff] rounded-[10px] flex items-center justify-center space-x-4 px-4 py-3">
      <span
        className={`text-sm font-medium ${
          isMonthly ? "text-blue-900" : "text-gray-400"
        }`}
      >
        Monthly
      </span>
      <div
        onClick={toggle}
        className="relative w-12 h-6 bg-blue-950 rounded-full cursor-pointer flex items-center"
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full transition-transform ${
            isMonthly ? "translate-x-0" : "translate-x-6"
          }`}
        ></div>
      </div>
      <span
        className={`text-sm font-medium ${
          !isMonthly ? "text-blue-900" : "text-gray-400"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleSwitch;
