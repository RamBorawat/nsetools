import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Text, Platform, PermissionsAndroid } from 'react-native';
import standards from '../../standards/standards';
import Colors from '../../standards/colors';
import { NseIndia } from "stock-nse-india";
import { database } from '../../..';
// import { request, PERMISSIONS } from 'react-native-permissions';

import { PERMISSIONS, request, RESULTS, } from 'react-native-permissions';

import { writer } from '@nozbe/watermelondb/decorators'
import * as RNFS from '@dr.pogodin/react-native-fs';
import DatabaseWriter from './DatabaseWriter';
import DatabaseReader from './DatabaseReader';
// var RNFS = require('react-native-fs');

const searchFunction = (query) => {
    // perform search
    console.log(query);
}
const Home = () => {
    const nseIndia = new NseIndia()



    const [nseData, setNseData] = useState([])
    const [StockData, setStockData] = useState([])
    const [fetching, setfetching] = useState(false)
    useEffect(() => {
        nseIndia.getAllStockSymbols().then(symbols => {
            console.log(symbols)
            setNseData(symbols)
            console.log(symbols.length)
        })
    }, [])
    // useEffect(() => {
    //     if (fetching)
    //         for (let i = 0; i < nseData.length; i++) {
    //             // console.log(nseData[i])
    //             nseIndia.getEquityDetails(nseData[i]).then(details => {
    //                 // console.log(details)
    //                 // setStockData(x => [...StockData, details])
    //                 StockData.push(details)
    //             })
    //         }
    //     setStockData(StockData)
    //     setfetching(false)
    // }, [fetching])



    useEffect(() => {
        let createArr = []
        console.log('Eight Requests');
        Promise.all([
            fetch('https://api.publicapis.org/random').then(res => res.json()),
            fetch('https://dog-api.kinduff.com/api/facts').then(res => res.json()),
            fetch('https://randomfox.ca/floof/').then(res => res.json()),
            fetch('https://api.catboys.com/img').then(res => res.json()),
            fetch('https://www.boredapi.com/api/activity/').then(res => res.json()),
            fetch('https://api.country.is/8.8.8.8').then(res => res.json()),
            fetch('https://api.kanye.rest').then(res => res.json()),
            fetch('https://api.quotable.io/random').then(res => res.json())
        ]).then((results) => {
            console.timeEnd('Eight Requests');
            console.log(JSON.stringify(results, null, 2));
        }).catch(e => {
            console.log(e)
        });
        // if (fetching)
        //     for (let i = 0; i < 10; i++) {
        //         // console.log(nseData[i])
        //         nseIndia.getEquityDetails(nseData[i]).then(details => {
        //             // console.log(details)
        //             // setStockData(x => [...StockData, details])
        //             StockData.push(details)
        //         })
        //     }
        // setStockData(StockData)
        // setfetching(false)
    }, [fetching])





    const changeFetch = () => {
        setfetching(!fetching)
    }
    // {"industryInfo": {"basicIndustry": "Diversified", "industry": "Diversified", "macro": "Diversified", "sector": "Diversified"}, "info": {"activeSeries": ["EQ"], "companyName": "3M India Limited", "debtSeries": [], "identifier": "3MINDIAEQN", "industry": "TRADING", "isCASec": false, "isDebtSec": false, "isDelisted": false, "isETFSec": false, "isFNOSec": false, "isMunicipalBond": false, "isSLBSec": true, "isSuspended": false, "isTop10": false, "isin": "INE470A01017", "symbol": "3MINDIA", "tempSuspendedSeries": []}, "metadata": {"industry": "Diversified", "isin": "INE470A01017", "lastUpdateTime": "18-May-2024 12:50:00", "listingDate": "13-Aug-2004", "pdSectorInd": "NIFTY 500                                         ", "pdSectorPe": 62.51, "pdSymbolPe": 62.51, "series": "EQ", "status": "Listed", "symbol": "3MINDIA"}, "preOpenMarket": {"Change": -112.79999999999927, "IEP": 30200.05, "ato": {"buy": 0, "sell": 0}, "atoBuyQty": 0, "atoSellQty": 0, "finalPrice": 30325, "finalQuantity": 117, "lastUpdateTime": "18-May-2024 11:22:26", "perChange": -0.3721194147036629, "preopen": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "prevClose": 30312.85, "totalBuyQuantity": 105, "totalSellQuantity": 39, "totalTradedVolume": 0}, "priceInfo": {"basePrice": 30312.85, "change": 1076.1500000000015, "checkINAV": false, "close": 31096.65, "iNavValue": null, "intraDayHighLow": {"max": 31389, "min": 30200.05, "value": 31389}, "lastPrice": 31389, "lowerCP": "28797.20", "open": 30200.05, "pChange": 3.550144575650265, "pPriceBand": "5", "previousClose": 30312.85, "upperCP": "31828.45", "vwap": 31016.48, "weekHighLow": {"max": 39876.1, "maxDate": "29-Dec-2023", "min": 23312.75, "minDate": "18-May-2023", "value": 31389}}, "sddDetails": {"SDDAuditor": "-", "SDDStatus": "-"}, "securityInfo": {"boardStatus": "Main", "classOfShare": "Equity", "derivatives": "No", "faceValue": 10, "issuedSize": 11265070, "sessionNo": "-", "slb": "Yes", "surveillance": {"desc": null, "surv": null}, "tradingSegment": "Normal Market", "tradingStatus": "Active"}}

    // "priceInfo": {"basePrice": 30312.85, "change": 1076.1500000000015, "checkINAV": false, "close": 31096.65, "iNavValue": null, "intraDayHighLow": {"max": 31389, "min": 30200.05, "value": 31389}, "lastPrice": 31389, "lowerCP": "28797.20", "open": 30200.05, "pChange": 3.550144575650265, "pPriceBand": "5", "previousClose": 30312.85, "upperCP": "31828.45", "vwap": 31016.48, "weekHighLow": {"max": 39876.1, "maxDate": "29-Dec-2023", "min": 23312.75, "minDate": "18-May-2023", "value": 31389}}
    const ItemRendering = ({ item }) => {
        return <View style={{ borderWidth: 1, borderColor: '#000', margin: 10, padding: 10, }}>
            <Text>Name : {item.info.symbol}</Text>
            <Text>Base Price : {item.priceInfo.basePrice}</Text>
            <Text>Last Price : {item.priceInfo.lastPrice}</Text>
            <Text>Change Price : {item.priceInfo.change}</Text>
        </View>
    }


    const [searchQuery, setSearchQuery] = useState('')
    const [items, setItems] = useState([
        {
            id: 1, workName: 'wood', category: 'carpenter', imageLink: '', rating: 3,
        },

        {
            id: 2, workName: 'wood', category: 'carpenter', imageLink: '', rating: 3,
        },

    ])

    let sddddd = { "industryInfo": { "basicIndustry": "Stockbroking & Allied", "industry": "Capital Markets", "macro": "Financial Services", "sector": "Financial Services" }, "info": { "activeSeries": ["EQ"], "companyName": "360 ONE WAM LIMITED", "debtSeries": [], "identifier": "360ONEEQN", "isCASec": false, "isDebtSec": false, "isDelisted": false, "isETFSec": false, "isFNOSec": false, "isMunicipalBond": false, "isSLBSec": true, "isSuspended": false, "isTop10": false, "isin": "INE466L01038", "symbol": "360ONE", "tempSuspendedSeries": [] }, "metadata": { "industry": "Stockbroking & Allied", "isin": "INE466L01038", "lastUpdateTime": "18-May-2024 12:50:00", "listingDate": "19-Sep-2019", "pdSectorInd": null, "pdSectorPe": 35.2, "pdSymbolPe": 35.2, "series": "EQ", "status": "Listed", "symbol": "360ONE" }, "preOpenMarket": { "Change": 12.350000000000023, "IEP": 799.95, "ato": { "buy": 434, "sell": 0 }, "atoBuyQty": 434, "atoSellQty": 0, "finalPrice": 791, "finalQuantity": 21735, "lastUpdateTime": "18-May-2024 11:22:29", "perChange": 1.568054850177758, "preopen": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "prevClose": 787.6, "totalBuyQuantity": 432, "totalSellQuantity": 6600, "totalTradedVolume": 582 }, "priceInfo": { "basePrice": 787.6, "change": -1.7000000000000455, "checkINAV": false, "close": 786.9, "iNavValue": null, "intraDayHighLow": { "max": 800, "min": 782.8, "value": 785.9 }, "lastPrice": 785.9, "lowerCP": "748.25", "open": 799.95, "pChange": -0.2158456069070652, "pPriceBand": "20", "previousClose": 787.6, "upperCP": "826.95", "vwap": 792.85, "weekHighLow": { "max": 900.95, "maxDate": "18-Apr-2024", "min": 399.15, "minDate": "19-May-2023", "value": 785.9 } }, "sddDetails": { "SDDAuditor": "-", "SDDStatus": "-" }, "securityInfo": { "boardStatus": "Main", "classOfShare": "Equity", "derivatives": "No", "faceValue": 1, "issuedSize": 359446406, "sessionNo": "-", "slb": "Yes", "surveillance": { "desc": null, "surv": null }, "tradingSegment": "Normal Market", "tradingStatus": "Active" } }


    return (
        <View>
            <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder='Search'
                onEndEditing={() => searchFunction(searchQuery)}
                style={{
                    borderRadius: 5,
                    borderColor: Colors.mainTheme,
                    borderWidth: 1,
                    padding: 5,
                    margin: 5
                }}
            />
            <Button
                title='fetch'
                onPress={() => changeFetch()}
            />
            <Button
                title='fetchsasaas'
                onPress={() => {
                    // requestStoragePermission()
                    // RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
                    //     .then((result) => {
                    //         console.log('GOT RESULT', result);

                    //         // stat the first file
                    //         return Promise.all([RNFS.stat(result[0].path), result[0].path]);
                    //     })
                    //     .then((statResult) => {
                    //         console.log('here')
                    //         if (statResult[0].isFile()) {
                    //             // if we have a file, read it
                    //             return RNFS.readFile(statResult[1], 'utf8');
                    //         }

                    //         return 'no file';
                    //     })
                    //     .then((contents) => {
                    //         // log the file contents
                    //         console.log('contents');
                    //         console.log(contents);
                    //     })
                    //     .catch((err) => {
                    //         console.log('err.message, err.code');
                    //         console.log(err.message, err.code);
                    //     });

                    // var path = RNFS.DocumentDirectoryPath + '/test.txt';

                    // RNFS.unlink(path)
                    //     .then(() => {
                    //         console.log('FILE DELETED');
                    //     })
                    //     // `unlink` will throw an error, if the item to unlink does not exist
                    //     .catch((err) => {
                    //         console.log(err.message);
                    //     });
                }}
            />
            <Button
                title='Show'
                onPress={async () => {
                    console.log('geting it')
                    // setfetching(false)
                    // setStockData(StockData)



                    // {"industryInfo": {"basicIndustry": "Diversified", "industry": "Diversified", "macro": "Diversified", "sector": "Diversified"}, 
                    //         "info": {"activeSeries": ["EQ"], "companyName": "3M India Limited", "debtSeries": [], "identifier": "3MINDIAEQN", "industry": "TRADING", "isCASec": false, "isDebtSec": false, "isDelisted": false, "isETFSec": false, "isFNOSec": false, "isMunicipalBond": false, "isSLBSec": true, "isSuspended": false, "isTop10": false, "isin": "INE470A01017", "symbol": "3MINDIA", "tempSuspendedSeries": []}, "metadata": {"industry": "Diversified", "isin": "INE470A01017", "lastUpdateTime": "18-May-2024 12:50:00", "listingDate": "13-Aug-2004", "pdSectorInd": "NIFTY 500", "pdSectorPe": 62.51, "pdSymbolPe": 62.51, "series": "EQ", "status": "Listed", "symbol": "3MINDIA"},
                    //         // "preOpenMarket": {"Change": -112.79999999999927, "IEP": 30200.05, "ato": {"buy": 0, "sell": 0}, "atoBuyQty": 0, "atoSellQty": 0, "finalPrice": 30325, "finalQuantity": 117, "lastUpdateTime": "18-May-2024 11:22:26", "perChange": -0.3721194147036629, "preopen": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "prevClose": 30312.85, "totalBuyQuantity": 105, "totalSellQuantity": 39, "totalTradedVolume": 0},
                    // "priceInfo": {"basePrice": 30312.85, "change": 1076.1500000000015, "checkINAV": false, "close": 31096.65, "iNavValue": null, "intraDayHighLow": {"max": 31389, "min": 30200.05, "value": 31389}, "lastPrice": 31389, "lowerCP": "28797.20", "open": 30200.05, "pChange": 3.550144575650265, "pPriceBand": "5", "previousClose": 30312.85, "upperCP": "31828.45", "vwap": 31016.48, "weekHighLow": {"max": 39876.1, "maxDate": "29-Dec-2023", "min": 23312.75, "minDate": "18-May-2023", "value": 31389}}, "sddDetails": {"SDDAuditor": "-", "SDDStatus": "-"}, "securityInfo": {"boardStatus": "Main", "classOfShare": "Equity", "derivatives": "No", "faceValue": 10, "issuedSize": 11265070, "sessionNo": "-", "slb": "Yes", "surveillance": {"desc": null, "surv": null}, "tradingSegment": "Normal Market", "tradingStatus": "Active"}}


                    // nse_id=StockData.  ,
                    // companyName=StockData.  ,
                    // lastUpdateTime=StockData.  ,
                    // datadate=StockData.  ,
                    // identifier=StockData.  ,
                    // isDelisted=StockData.  ,
                    // isSuspended=StockData.  ,
                    // symbol=StockData.  ,
                    // preOpenMarketchange=StockData.  ,
                    // preOpenMarketIEP=StockData.  ,
                    // preOpenMarketfinalPrice=StockData.  ,
                    // preOpenMarkettotalBuyQuantity=StockData.  ,
                    // preOpenMarkettotalSellQuantity=StockData.  ,
                    // preOpenMarkettotalTradedVolume=StockData.  ,
                    // basePrice=StockData.  ,
                    // change=StockData.  ,
                    // close=StockData.  ,
                    // intraDayHighLowmax=StockData.  ,
                    // intraDayHighLowmin=StockData.  ,
                    // intraDayHighLowvalue=StockData.  ,
                    // lastPrice=StockData.  ,
                    // lowerCP=StockData.  ,
                    // upperCP=StockData.  ,
                    // open=StockData.  ,
                    // weekHighLowmax=StockData.  ,
                    // weekHighLowmaxDate=StockData.  ,
                    // weekHighLowmin=StockData.  ,
                    // weekHighLowminDate=StockData.  ,
                    // surveillancesurv=StockData.  ,
                    // tradingStatus=StockData.  ,

                    // let somp = {
                    //     nse_id: sddddd.info.identifier,
                    //     companyName: sddddd.info.companyName,
                    //     lastUpdateTime: sddddd.metadata.lastUpdateTime,
                    //     datadate: Date.now(),
                    //     identifier: sddddd.info.symbol,
                    //     isDelisted: sddddd.info.isDelisted,
                    //     isSuspended: sddddd.info.isSuspended,
                    //     symbol: sddddd.info.symbol,
                    //     preOpenMarketchange: sddddd.preOpenMarket.Change,
                    //     preOpenMarketIEP: sddddd.preOpenMarket.IEP,
                    //     preOpenMarketfinalPrice: sddddd.preOpenMarket.finalPrice,
                    //     preOpenMarkettotalBuyQuantity: sddddd.preOpenMarket.totalBuyQuantity,
                    //     preOpenMarkettotalSellQuantity: sddddd.preOpenMarket.totalSellQuantity,
                    //     preOpenMarkettotalTradedVolume: sddddd.preOpenMarket.totalTradedVolume,
                    //     basePrice: sddddd.priceInfo.basePrice,
                    //     change: sddddd.priceInfo.change,
                    //     close: sddddd.priceInfo.close,
                    //     intraDayHighLowmax: sddddd.priceInfo.intraDayHighLow.max,
                    //     intraDayHighLowmin: sddddd.priceInfo.intraDayHighLow.min,
                    //     intraDayHighLowvalue: sddddd.priceInfo.intraDayHighLow.value,
                    //     lastPrice: sddddd.priceInfo.lastPrice,
                    //     lowerCP: sddddd.priceInfo.lowerCP,
                    //     upperCP: sddddd.priceInfo.upperCP,
                    //     open: sddddd.priceInfo.open,
                    //     weekHighLowmax: sddddd.priceInfo.weekHighLow.max,
                    //     weekHighLowmaxDate: sddddd.priceInfo.weekHighLow.maxDate,
                    //     weekHighLowmin: sddddd.priceInfo.weekHighLow.min,
                    //     weekHighLowminDate: sddddd.priceInfo.weekHighLow.minDate,
                    //     surveillancesurv: sddddd.securityInfo.surveillance.surv,
                    //     tradingStatus: sddddd.securityInfo.tradingStatus
                    // }
                    // console.log(somp)

                    // DatabaseWriter({
                    //     nse_id = StockData.identifier,
                    //     companyName = StockData.info.companyName,
                    //     lastUpdateTime = StockData.metadata.lastUpdateTime,
                    //     datadate = StockData.Date.now(),
                    //     identifier = StockData.info.metadata.symbol,
                    //     isDelisted = StockData.info.isDelisted,
                    //     isSuspended = StockData.info.isSuspended,
                    //     symbol = StockData.info.symbol,
                    //     preOpenMarketchange = StockData.preOpenMarket.change,
                    //     preOpenMarketIEP = StockData.preOpenMarket.IEP,
                    //     preOpenMarketfinalPrice = StockData.preOpenMarket.finalPrice,
                    //     preOpenMarkettotalBuyQuantity = StockData.preOpenMarket.totalBuyQuantity,
                    //     preOpenMarkettotalSellQuantity = StockData.preOpenMarket.totalSellQuantity,
                    //     preOpenMarkettotalTradedVolume = StockData.preOpenMarket.totalTradedVolume,
                    //     basePrice = StockData.priceInfo.basePrice,
                    //     change = StockData.priceInfo.change,
                    //     close = StockData.priceInfo.close,
                    //     intraDayHighLowmax = StockData.priceInfo.intraDayHighLow.max,
                    //     intraDayHighLowmin = StockData.priceInfo.intraDayHighLow.min,
                    //     intraDayHighLowvalue = StockData.priceInfo.intraDayHighLow.value,
                    //     lastPrice = StockData.priceInfo.lastPrice,
                    //     lowerCP = StockData.priceInfo.lowerCP,
                    //     upperCP = StockData.priceInfo.upperCP,
                    //     open = StockData.priceInfo.open,
                    //     weekHighLowmax = StockData.priceInfo.weekHighLow.max,
                    //     weekHighLowmaxDate = StockData.priceInfo.weekHighLow.maxDate,
                    //     weekHighLowmin = StockData.priceInfo.weekHighLow.min,
                    //     weekHighLowminDate = StockData.priceInfo.weekHighLow.minDate,
                    //     surveillancesurv = StockData.securityInfo.surveillance.surv,
                    //     tradingStatus = StockData.securityInfo.tradingStatus
                    // })

                    await DatabaseReader()
                    console.log('sone')

                    // requestCameraPermission()
                    // console.log(StockData)
                    // console.log(database)

                    // var path = RNFS.DocumentDirectoryPath + '/stockdata1.txt';

                    // // // write the file
                    // RNFS.writeFile(path, `this is file contents${JSON.stringify(StockData)}`, 'utf8')
                    //     .then((success) => {
                    //         console.log(path);
                    //         console.log('FILE WRITTEN!');
                    //     })
                    //     .catch((err) => {
                    //         console.log(err.message);
                    //     });

                    // RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
                    //     .then((result) => {
                    //         console.log('GOT RESULT', result);

                    //         // stat the first file
                    //         return Promise.all([RNFS.stat(result[0].path), result[0].path]);
                    //     })
                    //     .then((statResult) => {
                    //         console.log('here')
                    //         if (statResult[0].isFile()) {
                    //             // if we have a file, read it
                    //             return RNFS.readFile(statResult[1], 'utf8');
                    //         }

                    //         return 'no file';
                    //     })
                    //     .then((contents) => {
                    //         // log the file contents
                    //         console.log('contents');
                    //         console.log(contents);
                    //     })
                    //     .catch((err) => {
                    //         console.log('err.message, err.code');
                    //         console.log(err.message, err.code);
                    //     });


                    // var file = fs.createWriteStream('array.txt');
                    // file.on('error', function (err) { /* error handling */ });
                    // StockData.forEach(function (v) { file.write(v.join(', ') + '\n'); });
                    // file.end();

                    // const newPost = await database.write(async () => {
                    //     await database.get('posts').create(post => {
                    //         post.title = 'New post'
                    //         post.body = 'Lorem ipsum...'
                    //     }).catch(e => {
                    //         console.log(e, 'this is error')
                    //     })
                    // })


                    // const newPost = await database.write(async () => {
                    //     const post = await database.get('posts').create(post => {
                    //         post.title = 'New post'
                    //         post.body = 'Lorem ipsum...'
                    //     }).catch(e => {
                    //         console.log('r=error', e)
                    //     })
                    //     // const comment = await database.get('comments').create(comment => {
                    //     //     comment.post.set(post)
                    //     //     //   comment.author.id = someUserId
                    //     //     comment.body = 'Great post!'
                    //     // })

                    //     // Note: Value returned from the wrapped function will be returned to `database.write` caller
                    //     return post
                    // })
                    // q1emL56OlFiA40sq
                    // const post = await database.get('posts').find('q1emL56OlFiA40sq').then(x => {
                    //     console.log(x.body, x.title, 'this is content')
                    // }).catch(e => {
                    //     console.log(e, 'this is error accessing')
                    // })
                    // const postsCollection = database.get('posts')


                    // console.log(postsCollection, 'this is new post')
                    // console.log(post, 'this is new post')

                }}
            />

            <Button title='send data'
                onPress={() => {
                    console.log(StockData.length, 'this lens')
                    if (StockData.length > 2000) for (let i = 0; i < StockData.length; i++) {
                        let somp = {
                            nse_id: StockData[i].info.identifier,
                            companyName: StockData[i].info.companyName,
                            lastUpdateTime: StockData[i].metadata.lastUpdateTime,
                            datadate: Date.now(),
                            identifier: StockData[i].info.symbol,
                            isDelisted: StockData[i].info.isDelisted,
                            isSuspended: StockData[i].info.isSuspended,
                            symbol: StockData[i].info.symbol,
                            preOpenMarketchange: StockData[i].preOpenMarket.Change,
                            preOpenMarketIEP: StockData[i].preOpenMarket.IEP,
                            preOpenMarketfinalPrice: StockData[i].preOpenMarket.finalPrice,
                            preOpenMarkettotalBuyQuantity: StockData[i].preOpenMarket.totalBuyQuantity,
                            preOpenMarkettotalSellQuantity: StockData[i].preOpenMarket.totalSellQuantity,
                            preOpenMarkettotalTradedVolume: StockData[i].preOpenMarket.totalTradedVolume,
                            basePrice: StockData[i].priceInfo.basePrice,
                            change: StockData[i].priceInfo.change,
                            close: StockData[i].priceInfo.close,
                            intraDayHighLowmax: StockData[i].priceInfo.intraDayHighLow.max,
                            intraDayHighLowmin: StockData[i].priceInfo.intraDayHighLow.min,
                            intraDayHighLowvalue: StockData[i].priceInfo.intraDayHighLow.value,
                            lastPrice: StockData[i].priceInfo.lastPrice,
                            lowerCP: StockData[i].priceInfo.lowerCP,
                            upperCP: StockData[i].priceInfo.upperCP,
                            open: StockData[i].priceInfo.open,
                            weekHighLowmax: StockData[i].priceInfo.weekHighLow.max,
                            weekHighLowmaxDate: StockData[i].priceInfo.weekHighLow.maxDate,
                            weekHighLowmin: StockData[i].priceInfo.weekHighLow.min,
                            weekHighLowminDate: StockData[i].priceInfo.weekHighLow.minDate,
                            surveillancesurv: StockData[i].securityInfo.surveillance.surv,
                            tradingStatus: StockData[i].securityInfo.tradingStatus
                        }
                        DatabaseWriter(somp)
                        // console.log(somp)
                    }
                }} />

            {/* <FlatList */}
            {StockData && <FlatList
                style={{ borderWidth: 1, height: '70%' }}
                data={StockData}
                renderItem={({ item }) => <ItemRendering item={item} />}
                keyExtractor={item => item.info.identifier}
            />}


        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
