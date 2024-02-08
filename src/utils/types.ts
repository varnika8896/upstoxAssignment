export type dataType = {
    avgPrice : number,
    close : number,
    ltp: number,
    quantity: number,
    symbol: string,
  }

export type listType = {
    symbol: string,
    quantity : string,
    ltp: string,
    pnl: string
  };

export type summaryType = {
    currentValue : string,
    totalInvestment: string,
    totalPnl: string,
    todayPnl: string,
}

export type outputType = {
    list: listType[],
    summary: summaryType
}
