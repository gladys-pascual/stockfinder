import PropTypes from "prop-types";
import { ResponsiveBar } from "@nivo/bar";
import "./Analysis.scss";

const AnalysisBarChart = ({
  strongBuy,
  buy,
  hold,
  sell,
  strongSell,
  total,
}) => {
  const strongBuyPercentage = +((strongBuy / total) * 100).toFixed(2);
  const buyPercentage = +((buy / total) * 100).toFixed(2);
  const holdPercentage = +((hold / total) * 100).toFixed(2);
  const sellPercentage = +((sell / total) * 100).toFixed(2);
  const strongSellPercentage = +((strongSell / total) * 100).toFixed(2);

  const data = [
    {
      analysis: "Strong Buy",
      "Strong Buy": strongBuyPercentage,
    },
    {
      analysis: "Buy",
      Buy: buyPercentage,
    },
    {
      analysis: "Hold",
      Hold: holdPercentage,
    },
    {
      analysis: "Sell",
      Sell: sellPercentage,
    },
    {
      analysis: "Strong Sell",
      "Strong Sell": strongSellPercentage,
    },
  ];

  return (
    <section className="analysis-bar-chart">
      <ResponsiveBar
        data={data}
        indexBy="analysis"
        keys={["Strong Buy", "Buy", "Hold", "Sell", "Strong Sell"]}
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        padding={0.3}
        colors={["#FF526D", "#FB9D2E", "#A7B0BA", "#6FB74E", "#10A57A"]}
        label={(d) => `${d.value}%`}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        isInteractive={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </section>
  );
};
AnalysisBarChart.propTypes = {
  strongBuy: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
  hold: PropTypes.number.isRequired,
  sell: PropTypes.number.isRequired,
  strongSell: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default AnalysisBarChart;
