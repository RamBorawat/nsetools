import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 4,
    tables: [
        // This is our new table!
        tableSchema(
            {
                name: 'posts',
                columns: [
                    { name: 'post_id', type: 'string', },
                    { name: 'body', type: 'string' },
                    { name: 'title', type: 'string' },
                ],
            },
            {
                name: 'comments',
                columns: [
                    { name: 'posts_id', type: 'string', isIndexed: true },
                    { name: 'body', type: 'string' },
                    { name: 'is_verified', type: 'boolean' },
                ],
            },
            // {

            // {"industryInfo": {"basicIndustry": "Diversified", "industry": "Diversified", "macro": "Diversified", "sector": "Diversified"}, 
            // "info": {"activeSeries": ["EQ"], "companyName": "3M India Limited", "debtSeries": [], "identifier": "3MINDIAEQN", "industry": "TRADING", "isCASec": false, "isDebtSec": false, "isDelisted": false, "isETFSec": false, "isFNOSec": false, "isMunicipalBond": false, "isSLBSec": true, "isSuspended": false, "isTop10": false, "isin": "INE470A01017", "symbol": "3MINDIA", "tempSuspendedSeries": []}, "metadata": {"industry": "Diversified", "isin": "INE470A01017", "lastUpdateTime": "18-May-2024 12:50:00", "listingDate": "13-Aug-2004", "pdSectorInd": "NIFTY 500", "pdSectorPe": 62.51, "pdSymbolPe": 62.51, "series": "EQ", "status": "Listed", "symbol": "3MINDIA"}, 
            // "preOpenMarket": {"Change": -112.79999999999927, "IEP": 30200.05, "ato": {"buy": 0, "sell": 0}, "atoBuyQty": 0, "atoSellQty": 0, "finalPrice": 30325, "finalQuantity": 117, "lastUpdateTime": "18-May-2024 11:22:26", "perChange": -0.3721194147036629, "preopen": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "prevClose": 30312.85, "totalBuyQuantity": 105, "totalSellQuantity": 39, "totalTradedVolume": 0}, 
            // "priceInfo": {"basePrice": 30312.85, "change": 1076.1500000000015, "checkINAV": false, "close": 31096.65, "iNavValue": null, "intraDayHighLow": {"max": 31389, "min": 30200.05, "value": 31389}, "lastPrice": 31389, "lowerCP": "28797.20", "open": 30200.05, "pChange": 3.550144575650265, "pPriceBand": "5", "previousClose": 30312.85, "upperCP": "31828.45", "vwap": 31016.48, "weekHighLow": {"max": 39876.1, "maxDate": "29-Dec-2023", "min": 23312.75, "minDate": "18-May-2023", "value": 31389}}, "sddDetails": {"SDDAuditor": "-", "SDDStatus": "-"}, "securityInfo": {"boardStatus": "Main", "classOfShare": "Equity", "derivatives": "No", "faceValue": 10, "issuedSize": 11265070, "sessionNo": "-", "slb": "Yes", "surveillance": {"desc": null, "surv": null}, "tradingSegment": "Normal Market", "tradingStatus": "Active"}}
            {
                name: 'nsealldatas',
                columns: [
                    { name: 'nse_id', type: 'string', isIndexed: true, },
                    { name: 'companyName', type: 'string', isOptional: true },
                    { name: 'lastUpdateTime', type: 'string', isOptional: true },
                    { name: 'datadate', type: 'string', isOptional: true },
                    { name: 'identifier', type: 'string', isOptional: true },
                    { name: 'isDelisted', type: 'boolean', isOptional: true },
                    { name: 'isSuspended', type: 'boolean', isOptional: true },
                    { name: 'symbol', type: 'string', isOptional: true },
                    { name: 'preOpenMarketchange', type: 'number', isOptional: true },
                    { name: 'preOpenMarketIEP', type: 'number', isOptional: true },
                    { name: 'preOpenMarketfinalPrice', type: 'number', isOptional: true },
                    { name: 'preOpenMarkettotalBuyQuantity', type: 'number', isOptional: true },
                    { name: 'preOpenMarkettotalSellQuantity', type: 'number', isOptional: true },
                    { name: 'preOpenMarkettotalTradedVolume', type: 'number', isOptional: true },

                    { name: 'basePrice', type: 'number', isOptional: true },
                    { name: 'change', type: 'number', isOptional: true },
                    { name: 'close', type: 'number', isOptional: true },
                    { name: 'intraDayHighLowmax', type: 'number', isOptional: true },
                    { name: 'intraDayHighLowmin', type: 'number', isOptional: true },
                    { name: 'intraDayHighLowvalue', type: 'number', isOptional: true },
                    { name: 'lastPrice', type: 'number', isOptional: true },
                    { name: 'lowerCP', type: 'number', isOptional: true },
                    { name: 'upperCP', type: 'number', isOptional: true },
                    { name: 'open', type: 'number', isOptional: true },

                    { name: 'weekHighLowmax', type: 'number', isOptional: true },
                    { name: 'weekHighLowmaxDate', type: 'string', isOptional: true },
                    { name: 'weekHighLowmin', type: 'number', isOptional: true },
                    { name: 'weekHighLowminDate', type: 'string', isOptional: true },
                    { name: 'surveillancesurv', type: 'string', isOptional: true },
                    { name: 'tradingStatus', type: 'string', isOptional: true },
                ],
            },
            {
                name: 'nseyesterdaydata',
                columns: [
                    { name: 'nse_id', type: 'string', isIndexed: true },
                    { name: 'datadate', type: 'number' },
                    { name: 'lastUpdateTime', type: 'string' },
                    { name: 'companyName', type: 'string' },
                    { name: 'symbol', type: 'string' },
                    { name: 'preOpenMarketchange', type: 'number' },
                    { name: 'preOpenMarketIEP', type: 'number' },
                    { name: 'preOpenMarketfinalPrice', type: 'number' },
                    { name: 'preOpenMarkettotalBuyQuantity', type: 'number' },
                    { name: 'preOpenMarkettotalSellQuantity', type: 'number' },
                    { name: 'preOpenMarkettotalTradedVolume', type: 'number' },

                    { name: 'basePrice', type: 'number' },
                    { name: 'change', type: 'number' },
                    { name: 'close', type: 'number' },
                    { name: 'intraDayHighLowmax', type: 'number' },
                    { name: 'intraDayHighLowmin', type: 'number' },
                    { name: 'intraDayHighLowvalue', type: 'number' },
                    { name: 'lastPrice', type: 'number' },
                    { name: 'lowerCP', type: 'number' },
                    { name: 'upperCP', type: 'number' },
                    { name: 'open', type: 'number' },
                ],
            },
            {
                name: 'nsetodaydata',
                columns: [
                    { name: 'nse_id', type: 'string', isIndexed: true },
                    { name: 'lastUpdateTime', type: 'string' },
                    { name: 'datadate', type: 'number' },
                    { name: 'companyName', type: 'string' },
                    { name: 'symbol', type: 'string' },
                    { name: 'preOpenMarketchange', type: 'number' },
                    { name: 'preOpenMarketIEP', type: 'number' },
                    { name: 'preOpenMarketfinalPrice', type: 'number' },
                    { name: 'preOpenMarkettotalBuyQuantity', type: 'number' },
                    { name: 'preOpenMarkettotalSellQuantity', type: 'number' },
                    { name: 'preOpenMarkettotalTradedVolume', type: 'number' },

                    { name: 'basePrice', type: 'number' },
                    { name: 'change', type: 'number' },
                    { name: 'close', type: 'number' },
                    { name: 'intraDayHighLowmax', type: 'number' },
                    { name: 'intraDayHighLowmin', type: 'number' },
                    { name: 'intraDayHighLowvalue', type: 'number' },
                    { name: 'lastPrice', type: 'number' },
                    { name: 'lowerCP', type: 'number' },
                    { name: 'upperCP', type: 'number' },
                    { name: 'open', type: 'number' },
                ],
            }
        ),
        // ...
    ]
})
