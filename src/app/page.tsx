'use client';
import Image from 'next/image'
import { VirtualLed } from "@streamnbase/components/virtualLed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Image
        src="/SBX.png"
        width={200}
        height={200}
        alt="Streambase Network"
      />
      <VirtualLed text="streambase - comming soon" rotate="left" />
      {/* Session Description */}

      <p className='text-2xl pt-5 pb-5'>Welcome to <b>Streambase Network</b></p>
      <div className='text-center pb-5'>
        <p>Welcome to the unique blockchain system - Decentralized Train Station. With innovative thinking and a desire to build a decentralized network community, we introduce a unique model, similar to train stations, where each station is not only a transaction point but also a self-managed and independently developed space.</p>

        <p>Each station in our system has the ability to self-manage, with unique autonomous rights and the ability to expand independently. Stations not only participate in the transaction confirmation process but can also develop and deploy their own applications and services on the common platform.</p>

        <p>With the Proof of Authority (PoA) model, quick and efficient consensus enhances the overall system performance. Each station contributes to the decentralization and diversity of the community, creating a dynamic, flexible environment ready to face the challenges of today&rsquo;s blockchain market.</p>

        <p>Join us to experience the innovation and power of the Decentralized Train Station system - where each station is a new step in the development of the global blockchain community</p>

        <p>Moreover, each station has the capability to stake tokens and delegate from participating passengers, enabling them to actively participate in the network. Stations, acting as validators, can receive staked tokens from passengers who wish to delegate their assets. This mechanism not only enhances the engagement of the community but also provides an opportunity for passengers to contribute to the security and validation process of the Decentralized Train Station blockchain.</p>

        <p>Passengers, by staking their tokens or delegating, not only support the network but also stand a chance to earn rewards based on the successful validation and creation of new blocks. This innovative approach fosters a collaborative ecosystem where both stations and passengers mutually benefit from their active involvement in the blockchain network.</p>

        <p>Join us in the Decentralized Train Station ecosystem, where stations can stake and delegate tokens, creating a dynamic and participatory environment for both validators and passengers alike.</p>


      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://t.me/streambase" target="_blank">
          <Image
            src="/telegram-icon.webp"
            width={50}
            height={50}
            alt="Streambase Network"
          />
        </a>
        <a href="https://twitter.com/streambase" target="_blank">
          <Image
            src="/twitter-icon.webp"
            width={50}
            height={50}
            alt="Streambase Network"
          />
        </a>
        <a href="https://discord.gg/3nzcZQ6" target="_blank">
          <Image
            style={{
              background: 'white',
              borderRadius: '50%',
              padding: '5px'
            }}
            src="/discord-icon.png"
            width={50}
            height={50}
            alt="Streambase Network"
          />
        </a>
      </div>

    </main>
  )
}
