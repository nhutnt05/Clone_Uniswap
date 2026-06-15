"use client";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { tokens } from "../../data/tokens";


function SwapCard() {
  const [fromToken, setFromToken] = useState(tokens[0]);
  // const [toToken, setToToken] = useState(tokens[1]);
  // console.log(fromToken);
  const [amount, setAmount] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-2xl font-bold ">Hoán đổi mọi lúc, mọi nơi.</div>
        <div className="w-105">
          <div className="border border-gray-300 p-4 rounded-xl mt-4">
            <div>Bán</div>
            <div className="my-4 flex items-center justify-between">
              <input
                type="text"
                placeholder="0"
                className="outline-none text-2xl flex-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <button className="flex items-center bg-white px-3 py-2 rounded-full">
                <select
                  value={fromToken.symbol}
                  onChange={(e) => {
                    const token = tokens.find((t) => t.symbol === e.target.value);
                    if (token) setFromToken(token);
                  }}
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
              </button>
            </div>
            <div> 0 US$</div>
          </div>

          <div className="border border-gray-300 p-4 rounded-xl mt-4">
            <span>Mua</span>
            <div className=" flex items-center justify-between">
              <input
                placeholder="0"
                className="outline-none text-2xl flex-1 w-50"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 flex items-center">
                Chọn token
                <IoMdArrowDropdown size={30} />
              </button>
            </div>
          </div>
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full mt-8 w-90">
          Bắt đầu
        </button>
      </div>
    </>
  );
}

export default SwapCard;
