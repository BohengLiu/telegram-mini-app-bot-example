import Web3App from '@/components/Web3Modal'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Web3App />
      <div className='w-full bg-blue-300 text-white'>
        Button
      </div>
    </main>
  )
}
