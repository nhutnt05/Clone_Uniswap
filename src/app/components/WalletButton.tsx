"use client";
import { useState } from "react";
interface WalletButtonProps {
  wallet: string | null;
  balance: string;
  onConnectWallet: () => Promise<void>;
}

function WalletButton({ wallet, balance, onConnectWallet }: WalletButtonProps) {
  return (
    <>
      {wallet ? (
        <>
          <span>{balance} ETH</span>
          <span className="px-4 py-2 bg-white rounded-full">
            {wallet.slice(0, 6)}...
            {wallet.slice(-4)}
          </span>
        </>
      ) : (
        <button
          onClick={onConnectWallet}
          className="px-4 py-2 bg-pink-500 text-white rounded-full cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default WalletButton;
