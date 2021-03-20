import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/line";
import "./Graph.scss";
import dayjs from "dayjs";
import useWindowSize from "../../hooks/useWindowSize";

const Graph3M = ({ close, date }) => {
  const formatDate = date.map((date, i) => {
    return dayjs.unix(date).format("YYYY-MM-DD");
  });

  function aggregatingData(c, d) {
    const data = c.map((cost, index) => {
      return {
        x: d[index],
        y: cost,
      };
    });

    return data;
  }

  const data = aggregatingData(close, formatDate);
  const aggregatedData = [
    {
      id: "stock",
      data,
    },
  ];

  const color = close[close.length - 1] > close[0] ? "green" : "red";

  const size = useWindowSize();
  const axisBottomFormat =
    size.width < 1000
      ? null
      : {
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: "Date",
          legendOffset: 40,
          legendPosition: "middle",
          format: "%d %b %y",
          tickValues: "every 8 days",
          legend: "Date",
          legendOffset: 60,
        };

  return (
    <section className="graph-line-chart">
      <ResponsiveLine
        data={aggregatedData}
        margin={{ top: 50, right: 80, bottom: 80, left: 50 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%d %b %Y"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
        yFormat="<-$.2f"
        colors={[color]}
        axisBottom={axisBottomFormat}
        axisRight={{
          orient: "right",
          tickSize: 2,
          tickPadding: 2,
          tickRotation: 0,
          legend: "Price",
          legendOffset: +60,
          legendPosition: "middle",
          format: (value) =>
            `${Number(value).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}`,
        }}
        axisLeft={null}
        pointSize={4}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        crosshairType={"bottom-right"}
        animate={false}
      />
    </section>
  );
};

Graph3M.propTypes = {
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
};

export default Graph3M;
