import { BrowserProvider } from "ethers";

// Local fallback type to avoid dependency on '@ethersproject/providers'
// when type declarations are not available in the environment.
// Ensure the minimal EIP-1193 shape (request) is present for BrowserProvider.
type ExternalProvider = {
    request: (args: { method: string; params?: unknown }) => Promise<unknown>;
} & Record<string, unknown>;

export async function connectWallet() {
    if (typeof window === "undefined" || !window.ethereum) {
        throw new Error("EIP-1193 provider (window.ethereum) is not available");
    }

    // window.ethereum may have a broad type; cast to ExternalProvider for typings
    const provider = new BrowserProvider(window.ethereum as ExternalProvider);

    const accounts = await provider.send("eth_requestAccounts", []);

    return accounts[0];
}