import {  useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyObj = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyObj);

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertAmount = () =>
    setConvertedAmount((amount * currencyObj[to]).toFixed(3));

  const BackgroundImage = `https://images.pexels.com/photos/8018103/pexels-photo-8018103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  return (
    <>
      <div
        id="backgroundDiv"
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
          boxShadow: "rgba(0, 0, 0, 99.5) 0px 0px 500px inset", // Inner shadow enhancement
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertAmount();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOptions}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}
                  onCurrencyChange={(value) => setFrom(value)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swapCurrency}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={currencyOptions}
                  selectCurrency={to}
                  onAmountChange={(value) => setAmount(value)}
                  onCurrencyChange={(value) => setTo(value)}
                  disableInputBox
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="fixed text-xl bottom-5 left-0 right-0 z-10 text-white text-center ">
        Created by <a href="https://github.com/L4TIF">L4TIF</a>
      </p>
    </>
  );
}

export default App;
