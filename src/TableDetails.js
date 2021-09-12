import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import './slider.css';

const TableDetails = (props) => {
    return (
        <div className="emiTable">
            <Table style={{ width: '100%', border: '2px solid #CCC' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>Loan Amount</strong></TableCell>
                        <TableCell className=""><strong>$</strong>{props.pAmount}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>Intrest %</strong></TableCell>
                        <TableCell className="">{props.intrest}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>Tenure (Months)</strong></TableCell>
                        <TableCell className="">{props.duration}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>EMI (Months)</strong></TableCell>
                        <TableCell className="">{props.pAmount}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>Total Intrest</strong></TableCell>
                        <TableCell className="">{props.totalAmountofIntrest}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ETableCellText"><strong>Total Payment</strong><br />( Loan Amount + Intrest)</TableCell>
                        <TableCell className="">{props.totalAmt ? props.totalAmt : 0}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    )
}

export default TableDetails;