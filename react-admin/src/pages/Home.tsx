import BigChartBox from "../components/BigChartBox"
import ChartBox from "../components/ChartBox"
import TopBox from "../components/TopBox"
import BarChartBox from "../components/barChartBox"
import PieChartBox from "../components/pieChartBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../data"
import "../styles/home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
    </div>
  )
}


export default Home