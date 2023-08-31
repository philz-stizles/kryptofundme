export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const nextAuthSecret = process.env.NEXTAUTH_SECRET as string;

export const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;


export const web3ProviderUrl = process.env
  .NEXT_PUBLIC_WEB3_PROVIDER_URL as string;
export const factoryAddress = process.env
  .NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS as string;
export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;
export const giphyApiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY as string;



export const mailServer = process.env.MAIL_SERVER;
