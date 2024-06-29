import { Model } from '@nozbe/watermelondb'
import { children, field, lazy } from '@nozbe/watermelondb/decorators'

export default class NseTodayData extends Model {
    static table = 'nsetodaydata'

    @field('nse_id') nse_id;
    @field('lastUpdateTime') lastUpdateTime;
    @field('datadate') datadate;
    @field('companyName') companyName;
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
}