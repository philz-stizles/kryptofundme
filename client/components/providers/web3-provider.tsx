'use client';

import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';
import { CampaignProvider } from '@/context/campaign-context';

type Props = {
  children: React.ReactNode;
};

const Web3Provider = ({ children }: Props) => {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <CampaignProvider>{children}</CampaignProvider>
    </ThirdwebProvider>
  );
};

export default Web3Provider;
