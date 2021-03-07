import { useEffect, useState } from "react";
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
  // const [stockOneDay, setStockOneDay] = useState(null);

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
  // 1 day
  // const now = Date.now();
  // const oneDayAgo = now - 86400000 * 5;

  // useEffect(() => {
  //   async function fetchStockOneDay() {
  //     try {
  //       const result = await axios.get(
  //         `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${oneDayAgo}&to=${now}&token=${process.env.REACT_APP_API_KEY}`
  //       );
  //       console.log(result.data);
  //     } catch (err) {
  //       console.log("Error fetching and parsing data", err);
  //     }
  //   }
  //   fetchStockOneDay();
  // }, [symbol, oneDayAgo, now]);

  // 5 days

  // 1 month

  // 3 months

  // 1 year

  // 5 years

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

      <Graph />

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
