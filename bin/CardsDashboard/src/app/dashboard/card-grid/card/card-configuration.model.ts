export class CardConfigurationBean {
    configurationID?: String;
    threshold?: Number;
    type?: String;
}

export class APIConfigurationBean extends CardConfigurationBean {
    url?: String;
    headerBeanMap?: HeaderBean[];
    queryParameterBeanMap?: QueryParameterBean[];
}

export class DataBaseConfigurationBean extends CardConfigurationBean {
    databaseType?: String;
    databaseUserName?: String;
    schemaName?: String;
    databasePassword?: String;
}

export class HeaderBean {
    id?: String;
    key?: String;
    value?: String;
}

export class QueryParameterBean {
    id?: String;
    key?: String;
    value?: String;
}
