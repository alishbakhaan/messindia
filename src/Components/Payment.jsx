import { useState } from "react";
import logo from "../assets/logo.png";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("creditCard");

  return (
    <div>
      <img className="w-[220px] mt-10  max-sm: ml-2" src={logo} alt="logo" />

      
      <div className="text-center">
        <p className="text-[#7F4A84] text-4xl font-semibold ">Payment Method</p>
        <p className="text-2xl mt-4">Customer Information</p>
      </div>
     

      <div className=" first-div flex justify-center mt-8">
        <form className="flex-col">
          <div className="input-div flex gap-5 mt-2">
            <div>
              <p>Name</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 bordered-black transition-all w-[230px]"
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 transition-all w-[230px]"
              />
            </div>
            <div>
              <p>Email address</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 transition-all w-[230px]"
              />
            </div>
          </div>

          <div className="mt-10">
            <p>Payment</p>
            <div className="w-[740px] rounded-xl p-5 mt-3 text-center bg-[#f7f2f2]">
              <p>Your Total Payment</p>
              <p className="font-bold">Rs 28,156</p>
              <p>Pay May 1st, at 10:30</p>
            </div>
          </div>
        </form>
      </div>

      {/* Payment */}

      <div className="second-div flex justify-center">
        <div className="flex flex-col items-start space-y-4 mt-5">
          <div className="bg-[#f7f7f7] w-[46rem] p-2 rounded-lg">
            <input
              type="radio"
              id="creditCard"
              value="creditCard"
              checked={selectedOption === "creditCard"}
              onChange={() => setSelectedOption("creditCard")}
              className="mr-2"
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div className="bg-[#f7f7f7] w-[46rem] p-2 rounded-lg">
            <input
              type="radio"
              id="paypal"
              value="paypal"
              checked={selectedOption === "paypal"}
              onChange={() => setSelectedOption("paypal")}
              className="mr-2"
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="bg-[#f7f7f7] w-[46rem] p-2 rounded-lg">
            <input
              type="radio"
              id="stripe"
              value="stripe"
              checked={selectedOption === "stripe"}
              onChange={() => setSelectedOption("stripe")}
              className="mr-2"
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className=" w-[350px] flex justify-center p-2 text-white rounded-xl cursor-pointer bg-[#FE854E]">
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
