import "./styles.css";
import { useState } from "react";

import img_arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import ToggleSwitch from "./Toggle";
import { nanoid } from "nanoid";

export default function Main() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState({
    name: "",
    price: "",
  });
  
  function handleNextStep() {
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    setStep((prev) => prev - 1);
  }

  const steps = [
    <div className=" flex flex-col gap-3" key={nanoid(10)}>
      <h1 className=" text-3xl font-bold text-blue-950">Personal Info</h1>
      <p className=" text-gray-500 font-semibold">
        Please provide your name, email address, and phone number
      </p>
      <form className=" flex flex-col gap-1">
        <label
          className=" mt-2 text-[17px] text-blue-900 font-semibold"
          htmlFor="name"
        >
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          className=" border border-gray-900 rounded-[5px] p-1 text-xl font-semibold"
          type="text"
          placeholder="Enter Your Name..."
          required
        />
        <label
          className=" mt-2 text-[17px] text-blue-900 font-semibold"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          className=" border border-gray-900 rounded-[5px] p-1 text-xl font-semibold "
          type="email"
          placeholder="Enter Your Email Address..."
          required
        />
        <label
          className=" mt-2 text-[17px] text-blue-900 font-semibold"
          htmlFor="phone-number"
        >
          Phone Number
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone-number"
          className=" border border-gray-900 rounded-[5px] p-1 text-xl font-semibold"
          type="number"
          placeholder="Enter Your Phone Number..."
          required
        />
      </form>
    </div>,

    <div className=" flex flex-col gap-3" key={nanoid(10)}>
      <h1 className=" text-2xl font-bold text-blue-950">Select Plan</h1>
      <p className=" font-semibold text-gray-500">
        You have the option of monthly or yearly billing
      </p>

      <div className=" flex flex-wrap gap-5">
        <button
          onClick={() =>
            setPlan({
              name: "Arcade",
              price: "9",
            })
          }
          className=" border-2 border-blue-800 rounded-[10px] py-5 px-10 flex flex-col"
        >
          <img className=" w-[40px] object-cover" src={img_arcade} alt="" />
          <p className="pt-10 font-bold text-blue-950">Arcade</p>
          <p>$9/mo</p>
        </button>

        <button
          onClick={() =>
            setPlan({
              name: "Advanced",
              price: "12",
            })
          }
          className=" border-2 border-blue-800 rounded-[10px] py-5 px-10 flex flex-col"
        >
          <img className=" w-[40px] object-cover" src={advanced} alt="" />
          <p className="pt-10 font-bold text-blue-950">Advanced</p>
          <p>$12/mo</p>
        </button>

        <button
          onClick={() =>
            setPlan({
              name: "Pro",
              price: "15",
            })
          }
          className=" border-2 border-blue-800 rounded-[10px] py-5 px-10 flex flex-col"
        >
          <img className=" w-[40px] object-cover" src={pro} alt="" />
          <p className="pt-10 font-bold text-blue-950">Pro</p>
          <p>$15/mo</p>
        </button>
      </div>

      <ToggleSwitch />
    </div>,

    <div className=" flex flex-col gap-3" key={nanoid(10)}>
      <h1 className=" text-3xl font-bold text-blue-950">Pick add-ons</h1>
      <p className=" font-semibold text-gray-500">
        Add-ons helps enhance your gaming experience.
      </p>

      <div className=" mt-5 flex flex-col gap-5 md:w-full">
        <div className=" border border-blue-800 rounded-[10px] px-5 py-2 flex flex-wrap justify-between">
          <div className=" flex flex-row gap-3">
            <input
              value={"Online service"}
              className=" cursor-pointer"
              name="r"
              type="radio"
            />
            <div className=" font-semibold flex flex-col">
              <p className=" text-blue-900 font-bold">Online service</p>
              <p className=" text-gray-500">Access to multiplayer game</p>
            </div>
          </div>

          <p className=" font-semibold text-blue-800 self-center">+$1/mo</p>
        </div>

        <div className=" border border-blue-800 rounded-[10px] px-5 py-2 flex flex-wrap justify-between">
          <div className=" flex flex-row gap-3">
            <input
              value={"Larger Storage"}
              className=" cursor-pointer"
              name="r"
              type="radio"
            />
            <div className=" font-semibold flex flex-col">
              <p className="text-blue-900 font-bold">Larger Storage</p>
              <p className=" text-gray-500">Extra 1TB of cloud save</p>
            </div>
          </div>

          <p className=" font-semibold text-blue-800 self-center">+$2/mo</p>
        </div>

        <div className=" border border-blue-800 rounded-[10px] px-5 py-2 flex flex-wrap justify-between">
          <div className=" flex flex-row gap-3">
            <input
              value={"Customizable Profile"}
              className=" cursor-pointer"
              name="r"
              type="radio"
            />
            <div className=" font-semibold flex flex-col">
              <p className="text-blue-900 font-bold">Customizable Profile</p>
              <p className=" text-gray-500">Custom theme on your profile</p>
            </div>
          </div>

          <p className=" font-semibold text-blue-800 self-center">+$2/mo</p>
        </div>
      </div>
    </div>,

    <div className=" flex flex-col gap-3" key={nanoid(10)}>
      <h1 className=" text-3xl font-bold text-blue-950">Finishing up</h1>
      <p className=" text-gray-500 font-semibold">
        Double check everything looks OK before confirming.
      </p>

      <div className=" font-semibold mt-4 flex flex-col">
        <div className=" rounded-tl-[10px] rounded-tr-[10px] border border-transparent p-3 bg-[#eef5ff] flex flex-row justify-between">
          <p>
            {plan.name ? plan.name : "No plan selected"} (
            <button onClick={() => setStep(1)}>change</button>)
          </p>
          <p>${plan.price}/mo</p>
        </div>
        <span className=" h-[1px] rounded-[5px] bg-gray-600 md:w-full" />
        <div className=" border border-transparent p-3 bg-[#eef5ff] flex flex-row justify-between">
          <p>Online service</p>
          <p>$1/mo</p>
        </div>
        <span className=" h-[1px] rounded-[5px] bg-gray-600 md:w-full" />
        <div className=" rounded-bl-[10px] rounded-br-[10px] border border-transparent p-3 bg-[#eef5ff] flex flex-row justify-between">
          <p>Larger storage</p>
          <p>$2/mo</p>
        </div>
      </div>

      <div className=" pt-5 flex flex-wrap justify-between">
        <p className=" font-semibold text-gray-500">Total (per month)</p>
        <p className=" text-xl font-bold text-blue-900">
          +${Number(plan.price) + 1 + 2}/mo
        </p>
      </div>
    </div>,
  ];

  console.log(name, email, phone);
  return (
    <main>
      <div className=" m-auto mt-[8rem] flex flex-wrap gap-10 py-5 px-10 bg-white shadow rounded-[10px] h-auto md:w-[55rem] md:h-[30rem]">
        <div className=" side-bar flex flex-wrap border border-white gap-5 p-5 rounded-[10px] md:flex flex-col w-full md:w-auto">
          <div className=" flex flex-row gap-4">
            <button
              onClick={() => setStep(0)}
              className={` ${
                step === 0
                  ? "text-blue-950 bg-sky-500 border-transparent"
                  : "text-white bg-transparent"
              } font-semibold self-center w-[40px] h-[40px] flex justify-center items-center border rounded-[50%] text-xl p-1`}
            >
              1
            </button>
            <div className=" self-center flex flex-col">
              <p className=" uppercase text-gray-300">step 1</p>
              <p className=" text-white text-[17px] uppercase font-semibold">
                your info
              </p>
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <button
              onClick={() => setStep(1)}
              className={` ${
                step === 1
                  ? "text-blue-950 bg-sky-500 border-transparent"
                  : "text-white bg-transparent"
              } font-semibold self-center w-[40px] h-[40px] flex justify-center items-center border rounded-[50%] text-xl p-1`}
            >
              2
            </button>
            <div className=" flex flex-col">
              <p className=" uppercase text-gray-300">step 2</p>
              <p className=" text-white text-[17px] uppercase font-semibold">
                select plan
              </p>
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <button
              onClick={() => {
                setStep(2);
              }}
              className={` ${
                step === 2
                  ? "text-blue-950 bg-sky-500 border-transparent"
                  : "text-white bg-transparent"
              } font-semibold self-center w-[40px] h-[40px] flex justify-center items-center border rounded-[50%] text-xl p-1`}
            >
              3
            </button>
            <div className=" flex flex-col">
              <p className=" uppercase text-gray-300">step 3</p>
              <p className=" text-white text-[17px] uppercase font-semibold">
                add-ons
              </p>
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <button
              onClick={() => {
                setStep(3);
              }}
              className={` ${
                step === 3
                  ? "text-blue-950 bg-sky-500 border-transparent"
                  : "text-white bg-transparent"
              } font-semibold self-center w-[40px] h-[40px] flex justify-center items-center border rounded-[50%] text-xl p-1`}
            >
              4
            </button>
            <div className=" flex flex-col">
              <p className=" uppercase text-gray-300">step 4</p>
              <p className=" text-white text-[17px] uppercase font-semibold">
                summary
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-10">
          {steps[step]}
          <div className="flex flex-row justify-between">
            {step > 0 && (
              <button
                onClick={handlePreviousStep}
                className=" text-gray-500 text-[18px] capitalize font-semibold px-5 py-2 hover:text-blue-950 duration-200"
              >
                go back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className=" text-white capitalize rounded-[5px] font-semibold px-5 py-2 bg-blue-950"
              >
                next step
              </button>
            ) : (
              <button className=" font-semibold border border-transparent bg-violet-600 rounded-[5px] px-5 py-2 text-white hover:bg-violet-500 duration-300">
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
