import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import RoiBarChart from './RoiBarChart';

export default class RoiSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            pay_period: 52,
          business_size: 1
        };
      }


    componentDidMount() {
        this.getROI(this.state.business_size)
    }

    handleSwitch = (e) => {
        const state_pay_period = this.state.pay_period
        const size = this.state.business_size
        let pay_period = (state_pay_period === 52 ) ? 26 : 52
        this.setState({ pay_period }, () => this.getROI(size))
        if (pay_period === 52) {
            document.getElementById('fortnightly').style.color="#9B9B9B";
            document.getElementById('weekly').style.color="#fff";
        } else {
            document.getElementById('fortnightly').style.color="#fff";
            document.getElementById('weekly').style.color="#9B9B9B";
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let gradient = target.value * .09
        if (target instanceof HTMLInputElement) {
            document.getElementById('gradient').style.width=gradient+"%";
            this.setState({
                business_size: target.value
            }, () => {this.getROI(target.value)});
        }
    }
    

    getTimesheetSavings = (size) => {
        let timesheet_savings = (156 * 2 * 0.0167 * 32.04 * size)**1.05
        this.setState({ timesheet_savings })
        return timesheet_savings
    }

    getRosterOptimisation = (size) => {
        let roster_optimisation = 156 * 6 * 32.04* 0.01 * size
        this.setState({ roster_optimisation })
        return roster_optimisation
    }

    getReductionTime = (size) => {
        let reduction_time = this.state.pay_period * 0.05 * size * 32.04
        this.setState({ reduction_time })
        return reduction_time
    }

    getEliminationAward = (size) => {
        let elimination_award = size * 32.04 * 0.2 * this.state.pay_period
        this.setState({ elimination_award })
        return elimination_award
    }

    getAnnualSavings = (size) => {
        let timesheet_savings = this.getTimesheetSavings(size)
        let roster_optimisation = this.getRosterOptimisation(size)
        let reduction_time = this.getReductionTime(size)
        let elimination_award = this.getEliminationAward(size)

        let annual_savings = timesheet_savings + roster_optimisation + reduction_time + elimination_award
        this.setState({ annual_savings })
        return annual_savings
    }

    getAnnualSubscriptionCost = (size) => {
        let annual_subscription = size * 10 * 12
        this.setState({ annual_subscription })
        return annual_subscription
    }

    getROI = (size) => {
        let annual_subscription = this.getAnnualSubscriptionCost(size);
        let annual_savings = this.getAnnualSavings(size);
        let roi = (annual_savings/annual_subscription)*100;
        this.setState({roi})
        return  roi
    }
    
    render() {
        return(
            <div>
                <div className="staff">
                    <Row className="mb-5 pb-3">
                        <Col lg="6" md="6">
                            <p className="title desktop">Calculate your Return of Investment (ROI)</p>
                            <p className="title mobile">Calculate your ROI</p> 
                        </Col>
                        <Col lg="6" md="6">
                            <label id="switch" className="switch">
                                <input type="checkbox" value={this.state.pay_period} onClick={this.handleSwitch} />
                                <span className="slider round"></span>
                                <span id="weekly">Weekly</span>
                                <span id="fortnightly">Fortnightly</span>
                            </label>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg="2" md="2">
                            <p className="label">Staff Count</p>
                            <input type="nummber" className="staff-count" min="1" step="1" value={this.state.business_size} onChange={this.handleChange}/>
                        </Col>
                        <Col lg="8" md="8">
                            <span id="gradient"></span>
                            <input value={this.state.business_size}  className="w-100" type="range" min="1" max="1000" onChange={this.handleChange} />
                        </Col>
                        <Col lg="2" md="2">
                            <p className="label-right">1000+</p>
                        </Col>
                    </Row>
                    
                    <RoiBarChart 
                        timesheet_savings={Number(this.state.timesheet_savings).toFixed(2).toLocaleString()}
                        roster_optimisation={Number(this.state.roster_optimisation).toFixed(2).toLocaleString()}
                        reduction_time={Number(this.state.reduction_time).toFixed(2).toLocaleString()}
                        elimination_award={Number(this.state.elimination_award).toFixed(2).toLocaleString()}
                    />

                </div>
                <div className="annual">
                    <Row>
                        <Col md="4">
                                <p className="title">Annual Savings</p>
                                <p className="result">${Number(this.state.annual_savings).toFixed(2).toLocaleString()}</p>
                        </Col>
                        <Col md="4" className="middle">
                                <p className="title">Annual Subscription Cost</p>
                                <p className="result">${Number(this.state.annual_subscription).toFixed(2).toLocaleString()}</p>
                        </Col>
                        <Col md="4">
                                <p className="title">ROI</p>
                                <p className="result">{Math.round(Number(this.state.roi).toLocaleString())}%</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
