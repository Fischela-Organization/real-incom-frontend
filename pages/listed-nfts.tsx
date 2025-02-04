import { useState, useEffect, useContext } from 'react';

import withTransition from '../components/withTransition';

import { Loader, NFTCard } from '../components';
import { fetchDigiSales, fetchMyDigiSales } from '../graphql/schema';
import { useQuery } from '@apollo/client';
import { useMoralis } from 'react-moralis';
import AuctionCard from '../components/AuctionCard';

const ListedNFTs = () => {
  const fetchMyNFTsOrListedNFTs: any[] = []
  
  let nfts: any = [{
    image: "/creator9.png",
    i: 1,
    name: "Candy Crush Game",
    price: "4000000",
    owner: "0x929a9c9b9d9e9f9a9c9d9a9e9b9a9d9c9b9e9a9d9c9b9e9a",
    seller: "0x929a9c9b9d9e9f9a9c9d9a9e9b9a9d9c9b9e9a9d9c9b9e9a"
  }]
  let setNfts: any
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetchMyNFTsOrListedNFTs('fetchItemsListed')
  //     .then((items) => {
  //       setNfts(items);
  //       setIsLoading(false);
  //     });
  // }, []);

  const {account} = useMoralis()

  const {
    loading,
    data: digiSales,
    error,
  } = useQuery(fetchMyDigiSales, { variables: {id: account} });

  useEffect(() => {
    
  }, [digiSales]);

  if (loading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!loading && nfts.length === 0) {
    return (
      <div className="flexCenter sm:p-4 p-16 min-h-screen">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No Digi&apos;s Listed for Sale!</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">Listed Digi&apos;s for Sale</h2>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {digiSales && digiSales.digiSales.map((nft:any) => <AuctionCard key={nft.tokenId} nft={nft} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(ListedNFTs);
