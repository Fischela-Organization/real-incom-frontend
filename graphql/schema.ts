import { gql } from "@apollo/client";

export const fetchMyNft = gql`
  query getDigis($account: ID!) {
    digis(where: { ownerAddress: $account }) {
      id
      metadataURI
      title
      description
      worth
      ownerAddress {
        id
      }
    }
  }
`;

export const fetchDigiSales = gql`
  query getDigiSales {
    digiSales {
      id
      isOnSale
      auctionId
      digi {
        id
        title
        metadataURI
        isOnSale
        description
        worth
        ownerAddress {
          id
        }
      }
    }
  }
`;

export const fetchMyDigiSales = gql`
  query getDigiSales($id: ID!) {
    digiSales(where: {digi_: {ownerAddress: $id}}) {
      id
      isOnSale
      auctionId
      digi {
        id
        title
        metadataURI
        isOnSale
        description
        worth
        ownerAddress {
          id
        }
      }
    }
  }
`;

export const fetchSingleDigi = gql`
  query digi($id: ID!) {
    digi(id: $id) {
      id
      metadataURI
      created
      isOnSale
      ownerAddress {
        id
      }
      creator {
        id
      }
      title
      description
      worth
    }
  }
`;
