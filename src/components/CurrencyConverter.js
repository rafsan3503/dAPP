import axios from "axios";
import React, { useEffect, useState } from "react";
import { MORALIS_API } from "../utils/constants";
import Services from "./Services";

const CurrencyConverter = () => {
  const [bnbExchangeRate, setBnbExchangeRate] = useState(0);
  const [maticExchangeRate, setMaticExchangeRate] = useState(0);
  const [avaxExchangeRate, setAvaxExchangeRate] = useState(0);
  const [ftmExchangeRate, setFtmExchangeRate] = useState(0);
  const [linkExchangeRate, setLinkExchangeRate] = useState(0);
  const [adaExchangeRate, setAdaExchangeRate] = useState(0);
  const [atomExchangeRate, setAtomExchangeRate] = useState(0);
  const [solExchangeRate, setSolExchangeRate] = useState(0);
  const [sandExchangeRate, setSandExchangeRate] = useState(0);
  const [mboxExchangeRate, setMboxExchangeRate] = useState(0);
  const [kxaExchangeRate, setKxaExchangeRate] = useState(0);
  const [ibatExchangeRate, setIbatExchangeRate] = useState(0);

  const convert = async () => {
    const options9 = {
      url: "https://deep-index.moralis.io/api/v2/erc20/0x67b725d7e342d7B611fa85e859Df9697D9378B2e/price",
      params: { chain: "bsc" },
      headers: { accept: "application/json", "X-API-Key": MORALIS_API },
    };
    const options10 = {
      url: "https://deep-index.moralis.io/api/v2/erc20/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377/price",
      params: { chain: "bsc" },
      headers: { accept: "application/json", "X-API-Key": MORALIS_API },
    };
    const options11 = {
      url: "https://deep-index.moralis.io/api/v2/erc20/0x2223bF1D7c19EF7C06DAB88938EC7B85952cCd89/price",
      params: { chain: "bsc" },
      headers: { accept: "application/json", "X-API-Key": MORALIS_API },
    };
    const options12 = {
      url: "https://deep-index.moralis.io/api/v2/erc20/0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43/price",
      params: { chain: "bsc" },
      headers: { accept: "application/json", "X-API-Key": MORALIS_API },
    };

    axios.request(options9).then(function (response) {
      setSandExchangeRate(response.data["usdPrice"]);
    });
    axios.request(options10).then(function (response) {
      setMboxExchangeRate(response.data["usdPrice"]);
    });
    axios.request(options11).then(function (response) {
      setKxaExchangeRate(response.data["usdPrice"]);
    });
    axios
      .request(options12)
      .then(function (response) {
        setIbatExchangeRate(response.data["usdPrice"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins")
      .then((res) => res.json())
      .then((data) => {
        // bnb
        const bnb = data.coins.find((coin) => coin.name === "BNB").price;
        setBnbExchangeRate(bnb);

        // matic
        const matic = data.coins.find((coin) => coin.name === "Polygon").price;
        setMaticExchangeRate(matic);

        // avax
        const avax = data.coins.find((coin) => coin.name === "Avalanche").price;
        setAvaxExchangeRate(avax);

        // fantom
        const fantom = data.coins.find((coin) => coin.name === "Fantom").price;
        setFtmExchangeRate(fantom);

        // link
        const link = data.coins.find((coin) => coin.name === "Chainlink").price;
        setLinkExchangeRate(link);

        // ada
        const ada = data.coins.find((coin) => coin.name === "Cardano").price;
        setAdaExchangeRate(ada);

        // atom
        const atom = data.coins.find(
          (coin) => coin.name === "Cosmos Hub"
        ).price;
        setAtomExchangeRate(atom);

        // sol
        const sol = data.coins.find((coin) => coin.name === "Solana").price;
        setSolExchangeRate(sol);
      });

    convert();
  }, []);
  console.log(bnbExchangeRate);

  return (
    <Services>
      bnbExchangeRate={bnbExchangeRate}
      maticExchangeRate={maticExchangeRate}
      avaxExchangeRate={avaxExchangeRate}
      ftmExchangeRate={ftmExchangeRate}
      linkExchangeRate={linkExchangeRate}
      adaExchangeRate={adaExchangeRate}
      atomExchangeRate={atomExchangeRate}
      solExchangeRate={solExchangeRate}
      sandExchangeRate={sandExchangeRate}
      mboxExchangeRate={mboxExchangeRate}
      kxaExchangeRate={kxaExchangeRate}
      ibatExchangeRate={ibatExchangeRate}
    </Services>
  );
};

export default CurrencyConverter;
