import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import './slider.css';
import TableDetails from './TableDetails';
import { Pie } from 'react-chartjs-2';
import { Table, TableCell, TableRow } from "@material-ui/core";
import { brown, orange } from "@material-ui/core/colors";
import sliderMarks from './sliderMarks';

function AllSlider() {

    const [pAmount, setAmount] = useState(1000000);
    const [intrest, setintrest] = useState(7);
    const [duration, setDuration] = useState(147);
    const maxDuration = 360;
    const intMax = 20;
    const maxValue = 6000000;

    const intr = intrest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    let totalAmountofCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    let totalAmountofIntrest = Math.round(totalAmt - totalAmountofCredit);

    const ammountChange = (event, newValue) => {
        setAmount(newValue);
    };
    const intrsetRate = (event, rate) => {
        setintrest(rate);
    };
    const getDuration = (event, time) => {
        setDuration(time);
    };



    return (
        <div className="CalApp">
            <h1 className="Calheading">EMI Calculator</h1>
            <Typography gutterBottom><strong>Loan Ammount</strong></Typography>
            <Slider
                defaultValue={pAmount}
                max={maxValue}
                marks={sliderMarks.marksAmt}
                valueLabelDisplay="auto"
                onChange={ammountChange}
            />
            <Typography gutterBottom><strong>Intrset Rate % </strong></Typography>
            <Slider
                defaultValue={intrest}
                max={intMax}
                marks={sliderMarks.marksInt}
                valueLabelDisplay="auto"
                onChange={intrsetRate}
            />
            <Typography gutterBottom><strong>Duration</strong></Typography>
            <Slider
                defaultValue={duration}
                max={maxDuration}
                marks={sliderMarks.marksTenure}
                valueLabelDisplay="auto"
                onChange={getDuration}
            />
            <Table>
                <TableRow>
                    <TableCell>
                        <TableDetails pAmount={pAmount} totalAmt={totalAmt} intrest={intrest} duration={duration} emi={emi} totalAmountofIntrest={totalAmountofIntrest} />
                    </TableCell>
                    <TableCell>
                        <Pie
                            data={{
                                labels: ['Total Intrest', 'Total Amount'],
                                datasets: [{
                                    data: [totalAmountofIntrest, pAmount],
                                    backgroundColor: ['#ffa500', '#ADFF2F']
                                }]
                            }}
                            width={200}
                            height={200}
                        ></Pie>
                    </TableCell>
                </TableRow>
            </Table>

        </div>
    );
}
export default AllSlider;