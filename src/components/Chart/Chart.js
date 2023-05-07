import ChartBar from'./ChartBar'
import './Chart.css'
const Chart = props => {
    const maxValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let chartMaxvalue = Math.max(...maxValues); 
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={chartMaxvalue}
                label={dataPoint.label}
            />)}
        </div>
    )
}

export default Chart;