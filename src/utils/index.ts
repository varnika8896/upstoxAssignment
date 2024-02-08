import { outputType, dataType } from './types'

  export const initOutput : outputType = {
    list: [],
    summary: {
      currentValue : '',
      totalInvestment: '',
      totalPnl: '',
      todayPnl: '',
    }
};

  export const trainData = (data : dataType[]) => {

    const output : outputType = initOutput

    let currentValueTotal = 0;
    let totalInvestment = 0;
    let totalPnl = 0;
    let totalTodayPnl = 0

    data.map(d => {

      let currentValue = d.ltp * d.quantity;
      let investmentValue = d.avgPrice * d.quantity;
      let pnl = currentValue - investmentValue
      let todayPnl = (d.close - d.ltp) * d.quantity 

      currentValueTotal += currentValue; 
      totalInvestment += investmentValue;
      totalPnl += pnl;
      totalTodayPnl += todayPnl;

      let obj = {
        symbol : d.symbol,
        quantity : d.quantity.toString(),
        ltp : d.ltp.toFixed(2),
        pnl : pnl.toFixed(2)
      }

      output.list.push(obj)
    })

    output.summary.currentValue = currentValueTotal.toFixed(2);
    output.summary.totalInvestment = totalInvestment.toFixed(2);
    output.summary.todayPnl = totalTodayPnl.toFixed(2);
    output.summary.totalPnl = totalPnl.toFixed(2);

    return output;
  }
