import { Model } from '@nozbe/watermelondb'
import { children, field, lazy } from '@nozbe/watermelondb/decorators'

export default class NseAllData extends Model {
    static table = 'nsealldata'


    @field('nse_id') nse_id;
    @field('companyName') companyName;
    @field('lastUpdateTime') lastUpdateTime;
    @field('datadate') datadate;
    @field('identifier') identifier;
    @field('isDelisted') isDelisted;
    @field('isSuspended') isSuspended;
    @field('symbol') symbol;
    @field('preOpenMarketchange') preOpenMarketchange;
    @field('preOpenMarketIEP') preOpenMarketIEP;
    @field('preOpenMarketfinalPrice') preOpenMarketfinalPrice;
    @field('preOpenMarkettotalBuyQuantity') preOpenMarkettotalBuyQuantity;
    @field('preOpenMarkettotalSellQuantity') preOpenMarkettotalSellQuantity;
    @field('preOpenMarkettotalTradedVolume') preOpenMarkettotalTradedVolume;

    @field('basePrice') basePrice;
    @field('change') change;
    @field('close') close;
    @field('intraDayHighLowmax') intraDayHighLowmax;
    @field('intraDayHighLowmin') intraDayHighLowmin;
    @field('intraDayHighLowvalue') intraDayHighLowvalue;
    @field('lastPrice') lastPrice;
    @field('lowerCP') lowerCP;
    @field('upperCP') upperCP;
    @field('open') open;

    @field('weekHighLowmax') weekHighLowmax;
    @field('weekHighLowmaxDate') weekHighLowmaxDate;
    @field('weekHighLowmin') weekHighLowmin;
    @field('weekHighLowminDate') weekHighLowminDate;
    @field('surveillancesurv') surveillancesurv;
    @field('tradingStatus') tradingStatus;









}