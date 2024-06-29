// { name: 'nse_id', type: 'string', isIndexed: true },
// { name: 'companyName', type: 'string' },
// { name: 'lastUpdateTime', type: 'string' },
// { name: 'datadate', type: 'string' },
// { name: 'identifier', type: 'string' },
// { name: 'isDelisted', type: 'boolean' },
// { name: 'isSuspended', type: 'boolean' },
// { name: 'symbol', type: 'string' },
// { name: 'preOpenMarketchange', type: 'number' },
// { name: 'preOpenMarketIEP', type: 'number' },
// { name: 'preOpenMarketfinalPrice', type: 'number' },
// { name: 'preOpenMarkettotalBuyQuantity', type: 'number' },
// { name: 'preOpenMarkettotalSellQuantity', type: 'number' },
// { name: 'preOpenMarkettotalTradedVolume', type: 'number' },

import { database } from "../../..";

// { name: 'basePrice', type: 'number' },
// { name: 'change', type: 'number' },
// { name: 'close', type: 'number' },
// { name: 'intraDayHighLowmax', type: 'number' },
// { name: 'intraDayHighLowmin', type: 'number' },
// { name: 'intraDayHighLowvalue', type: 'number' },
// { name: 'lastPrice', type: 'number' },
// { name: 'lowerCP', type: 'number' },
// { name: 'upperCP', type: 'number' },
// { name: 'open', type: 'number' },

// { name: 'weekHighLowmax', type: 'number' },
// { name: 'weekHighLowmaxDate', type: 'string' },
// { name: 'weekHighLowmin', type: 'number' },
// { name: 'weekHighLowminDate', type: 'string' },
// { name: 'surveillancesurv', type: 'string' },
// { name: 'tradingStatus', type: 'string' },

export default async function (data) {
    console.log(data);
    const pa = await database.write(async () => {
        await database.get('nsealldata').create(post => {
            post.nse_id = data.nse_id;
            post.companyName = data.companyName;
            post.lastUpdateTime = data.lastUpdateTime;
            post.identifier = data.identifier;
            post.isDelisted = data.isDelisted;
            post.isSuspended = data.isSuspended;
            post.symbol = data.symbol;
            post.preOpenMarketchange = data.preOpenMarketchange;
            post.preOpenMarketIEP = data.preOpenMarketIEP;
            post.preOpenMarketfinalPrice = data.preOpenMarketfinalPrice;
            post.preOpenMarkettotalBuyQuantity = data.preOpenMarkettotalBuyQuantity;
            post.preOpenMarkettotalSellQuantity = data.preOpenMarkettotalSellQuantity;
            post.preOpenMarkettotalTradedVolume = data.preOpenMarkettotalTradedVolume;
            post.basePrice = data.basePrice;
            post.change = data.change;
            post.close = data.close;
            post.intraDayHighLowmax = data.intraDayHighLowmax;
            post.intraDayHighLowmin = data.intraDayHighLowmin;
            post.intraDayHighLowvalue = data.intraDayHighLowvalue;
            post.lastPrice = data.lastPrice;
            post.lowerCP = data.lowerCP;
            post.upperCP = data.upperCP;
            post.open = data.open;
            post.weekHighLowmax = data.weekHighLowmax;
            post.weekHighLowmaxDate = data.weekHighLowmaxDate;
            post.weekHighLowmin = data.weekHighLowmin;
            post.weekHighLowminDate = data.weekHighLowminDate;
            post.surveillancesurv = data.surveillancesurv;
            post.tradingStatus = data.tradingStatus;
        }).then(x => {
            console.log(x, 'this is x')
        }).catch(e => {
            console.log(e, 'this is error')
        })
    })
    console.log('pa this is the result');
    console.log(pa);
}

// export default async function (data) {
//     console.log(data);
//     const pa = await database.write(async () => {
//         await database.get('posts').create(post => {
//             post.title = data.title;
//             post.body = data.body;
//             post.post_id = 'jaisreeram';
//         }).then(x => {
//             console.log(x, 'this is x')
//         }).catch(e => {
//             console.log(e, 'this is error')
//         })
//     })
//     console.log('pa this is the result');
//     console.log(pa);
// }