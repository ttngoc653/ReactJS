import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./dashboard.scss";
import { dataOfChart } from "../../../dummyData.js";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export const Dashbroad = () => {
  return (
    <div className="dashbroad">
        <h1>Dashboard</h1>
          <FeaturedInfo />
          <Chart data={dataOfChart} title="Chart Analytics" grid dataKey1="uv" dataKey2="pv" dataKey3="amt" />
          <div className="homeWidgets">
              <WidgetSm />
              <WidgetLg />
          </div>
    </div>
  )
}

export default Dashbroad;