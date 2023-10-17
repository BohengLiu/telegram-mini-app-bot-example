import Web3App from "@/components/Web3Modal";
import ConnectBtn from "@/components/ConnectBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Web3App />
      <ConnectBtn />
    </main>
  );
}
