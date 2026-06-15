"use client";

import { useState } from "react";
import SwapCard from "../../components/SwapCard";
import Navbar from "../../components/Navbar";
import { connectWallet, getBalance } from "../../../utils/connectWallet";

function HomePage() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");

  const handleConnectWallet = async () => {
    const address = await connectWallet();
    if (address) {
      setWallet(address);
      const rawBalance = await getBalance(address);
      setBalance(Number(rawBalance).toFixed(4));
    }
  };

  return (
    <div>
      <Navbar wallet={wallet} balance={balance} onConnectWallet={handleConnectWallet} />
      <SwapCard balance={balance} />
    </div>
  );
}

export default HomePage;
