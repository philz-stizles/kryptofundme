'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Web3, { Contract, ContractAbi, Web3BaseProvider } from 'web3';

const defaultValue = {
  web3: null,
  provider: null,
  contract: null,
};

interface Web3Context {
  web3: Web3 | null;
  provider: Web3BaseProvider | null;
  contract: Contract<ContractAbi> | null;
}

const Web3Context = createContext<Web3Context>(defaultValue);

export const Web3Provider = ({ children }: PropsWithChildren) => {
  const [web3Apis, setWeb3Apis] = useState({
    web3: null,
    provider: null,
    contract: null,
  });

  useEffect(() => {}, []);

  return (
    <Web3Context.Provider value={{ ...web3Apis }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => useContext(Web3Context);
