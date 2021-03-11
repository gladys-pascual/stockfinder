import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import CompanySummary from "../../components/CompanySummary/CompanySummary";
import "./Stock.scss";
import axios from "axios";
import LoadingSearchAPI from "../../components/Loading/LoadingSearchAPI";
import CompanyNews from "../../components/CompanyNews/CompanyNews";
import Graph from "../../components/Graph/Graph";
import Analysis from "../../components/Analysis/Analysis";

const Stock = () => {
  const { symbol } = useParams();
  const [companyProfile, setCompanyProfile] = useState(null);
  const [quote, setQuote] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [multiplier, setMultiplier] = useState(5);
  const [resolution, setResolution] = useState(60);

  //Get company data
  useEffect(() => {
    async function fetchCompanyProfile() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
        );
        setCompanyProfile(result.data);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    }
    fetchCompanyProfile();
  }, [symbol]);

  //Get quote data
  useEffect(() => {
    async function fetchQuote() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
        );
        setQuote(result.data);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    }
    fetchQuote();
  }, [symbol]);

  //Get stock prices
  const now = useMemo(() => {
    return Math.floor(Date.now() / 1000);
  }, []);

  const startDate = now - 86400 * multiplier;

  const startDateHandler = (multiplier, resolution) => {
    setMultiplier(multiplier);
    setResolution(resolution);
  };

  useEffect(() => {
    async function fetchStockData() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${startDate}&to=${now}&token=${process.env.REACT_APP_API_KEY}`
        );
        setStockData(result.data);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    }
    fetchStockData();
  }, [symbol, resolution, startDate, now]);

  return (
    <>
      {companyProfile && quote ? (
        <CompanySummary
          companyName={companyProfile.name}
          ticker={companyProfile.ticker}
          industry={companyProfile.finnhubIndustry}
          currentPrice={quote.c}
          openPrice={quote.o}
          prevClose={quote.pc}
          high={quote.h}
          low={quote.l}
          marketCap={companyProfile.marketCapitalization}
          ipo={companyProfile.ipo}
        />
      ) : (
        <LoadingSearchAPI />
      )}
      {stockData ? (
        <Graph
          startDateHandler={startDateHandler}
          close={stockData.c}
          date={stockData.t}
          multiplier={multiplier}
          // open={stockData.o}
          // high={stockData.h}
          // low={stockData.l}
        />
      ) : (
        <LoadingSearchAPI />
      )}

      {companyProfile && quote ? (
        <Analysis symbol={symbol} companyName={companyProfile.name} />
      ) : (
        <LoadingSearchAPI />
      )}

      {companyProfile && quote ? (
        <CompanyNews symbol={symbol} companyName={companyProfile.name} />
      ) : (
        <LoadingSearchAPI />
      )}
    </>
  );
};

export default Stock;
