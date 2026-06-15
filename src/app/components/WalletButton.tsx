"use client";
import { useState } from "react";
import { connectWallet } from "../../utils/connectWallet";

function WalletButton() {
  const [wallet, setWallet] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    const addresss = await connectWallet();
    if (addresss) {
      setWallet(addresss);
    }
  };

  return (
    <>
      {wallet ? (
        <span className="px-4 py-2 bg-white rounded-full">
          {wallet.slice(0, 6)}...
          {wallet.slice(-4)}
        </span>
      ) : (
        <button
          onClick={() => handleConnectWallet()}
          className="px-4 py-2 bg-pink-500 text-white rounded-full cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default WalletButton;
