import { Injectable, Inject } from "@angular/core";
import { BASE_API_PROVIDER, BaseAPIService } from "../../../env.config";
import { BaseHttpClientService } from "../../core";

@Injectable({
    providedIn: 'root'
})
export class AlcsdataserviceService {

    constructor(
        private httpClient: BaseHttpClientService,
        @Inject(BASE_API_PROVIDER) private baseAPIProvider: BaseAPIService) {
    }

    defaultFourmulaData() {
        let defaultFourmulaRegion = {
            NorthAmerica: {
                ControllerSettingsList: [
                    {
                        "Name": "Pump 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Pump 2",
                        "Value": "BLEACH",
                        "HelpText": null
                    },
                    {
                        "Name": "Pump 3",
                        "Value": "SOUR",
                        "HelpText": null
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_03_2022_08:36:09",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "NorthAmerica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "03 Nov 2022",
                        "HelpText": null
                    },
                    {
                        "Name": "Unit of Measure",
                        "Value": "Standard",
                        "HelpText": null
                    },
                    {
                        "Name": "Number of Washers",
                        "Value": "1",
                        "HelpText": null
                    },
                    {
                        "Name": "Formula Selector",
                        "Value": "Yes",
                        "HelpText": null
                    },
                    {
                        "Name": "TM Language",
                        "Value": "English",
                        "HelpText": null
                    },
                    {
                        "Name": "Primary Language",
                        "Value": "English",
                        "HelpText": null
                    },
                    {
                        "Name": "Secondary Language",
                        "Value": "No Language Specified",
                        "HelpText": null
                    },
                    {
                        "Name": "Time Zone",
                        "Value": "US/Eastern",
                        "HelpText": null
                    }
                ],
                AdditionalInfo: {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[2,3]"
                },
                "id": "D2052H012583_LCLS_11_03_2022_08:36:09",
                "_rid": "tSI+APbmEzs9DAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzs9DAAAAAAAAA==/",
                "_etag": "\"b30400eb-0000-0200-0000-63637d880000\"",
                "_attachments": "attachments/",
                "_ts": 1667464584
            },
        }
        return defaultFourmulaRegion;
    }
}
