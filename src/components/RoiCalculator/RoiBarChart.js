import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Text} from 'recharts';


export default class RoiBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = { currentWidth: window.innerWidth };
      }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({currentWidth: window.innerWidth >= 768});
        this.yaxis()
    }

    yaxis = () => {
        if(this.state.currentWidth) {
            return (
                <YAxis type="number" tickFormatter={(data) => new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(data)} allowDecimals={false}/>
            )
        }
    }

    render() {
        const data = [
            {name: 'Timesheet rounding savings', label: this.props.timesheet_savings},
            {name: 'Roster optimisation', label: this.props.roster_optimisation},
            {name: 'Reduction in rostering admin time', label: this.props.reduction_time},
            {name: 'Elimination of manual award interpretation', label: this.props.elimination_award}
        ];

        //Tick
        class CustomizedAxisTick extends Component {
            render () {
              const {x, y, payload} = this.props;
                 return (
                  <g transform={`translate(${x},${y})`}>
                  <Text dy={16} fontSize={14} textAnchor="middle" verticalAnchor="start" width={80}>{payload.value}</Text>        
                </g>
              );
            }
        };

        //Tooltip
        const getIntroOfPage = (label) => {
            if (label === 'Timesheet rounding savings') {
              return 'Estimated savings from using Tanda’s Smart Timesheet Rounding that ensures staff are paid only for the hours they work with built in photo verification.';
            } if (label === 'Roster optimisation') {
              return 'Expected savings from having live, award interpreted wage data and overtime flags while building the roster.';
            } if (label === 'Reduction in rostering admin time') {
              return 'Admin savings by utilising Tanda’s simple online rostering solution with features like smart templates, forecasting and auto shift-filling.';
            } if (label === 'Elimination of manual award interpretation') {
              return 'Cost savings gained by removing the need for manual award interpretation with Tanda’s award interpreter handling pay calculations.';
            }
          }
        const CustomTooltip = ({ payload, label, active }) => {
        if (active) {
            return (

            <div className="staff-tooltip">
                <p>{label}</p>
                <p>{getIntroOfPage(label)}</p>
            </div>
            );
        }
            return null;
        }         
        
        const renderBarChart = (
            <div className="barChart">
                <ResponsiveContainer  width="100%" height="100%">
                    <BarChart width={400} height={300} data={data}>
                        <Tooltip content={<CustomTooltip />} />
                        <CartesianGrid stroke="#efefef" vertical={false} />
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#F76B1C" stopOpacity={1} />
                                <stop offset="24.36%" stopColor="#F9A842" stopOpacity={1} />
                                <stop offset="100%" stopColor="#FAD961" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Bar type="monotone" dataKey="label" fill="url(#colorUv)" barSize={60} >
                            <LabelList position="top" dataKey="label" formatter={(data) => new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(data)} />
                        </Bar>
                        <XAxis type="category" dataKey="name" interval={0} width={40} tick={<CustomizedAxisTick/>}  />
                        {this.yaxis()}
                    </BarChart>
                </ResponsiveContainer>
            </div>
          );

          
        return(
            <div>
                {renderBarChart}      
            </div>
        )
    }
}
  