import { CardConfigurationBean } from './card-configuration.model';
import { CardComponentBean } from './card-component.model';
export class CardBean {
    public cardID?: String;
    public datasource?: String;
    public cardName?: String;
    public cardPosition?: number;
    public cardConfigurationBean?: CardConfigurationBean;
    public cardComponentBean?: CardComponentBean;
    public gridID: String;
}


