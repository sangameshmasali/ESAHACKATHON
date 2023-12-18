import { Inject, Injectable } from '@angular/core';
import { BaseAPIService, BASE_API_PROVIDER } from '../../../env.config';
import { BaseHttpClientService } from '../../core';


@Injectable({
    providedIn: 'root'
})
export class SclsdataserviceService {

    constructor(
        private httpClient: BaseHttpClientService,
        @Inject(BASE_API_PROVIDER) private baseAPIProvider: BaseAPIService) {


    }
    postflushTimeData() {
        let data = new Array(300);
        for (var i = 0; i < data.length; i++) {
            data[i] = i + 1 + ' sec';
        }
        return data;
    }

    signalFilterTimeData() {
        let data = new Array(30);
        for (var i = 0; i < data.length; i++) {
            data[i] = i + 1 + ' sec';
        }
        return data;
    }


    // //Formula type

    // formulaType() {
    //     let data = [
    //         { id: 1, value: 'LinenType' },
    //         { id: 2, value: 'Custom Formula' }
    //     ]
    //     return data;
    // }

    // // Return 1 to 15 number 

    // formulaNumber() {
    //     let data = new Array(15);
    //     for (var i = 0; i < data.length; i++) {
    //         data[i] = i + 1;
    //     }
    //     return data;
    // }

    // defaultSignalNumber() {
    //     let data = new Array(6);
    //     for (var i = 0; i < data.length; i++) {
    //         data[i] = i + 1;
    //     }
    //     return data;
    // }

    // Dispensed Amount Calcluations 

    LToB(lb: number) {
        if (!!lb || lb === 0) {
            const lToB = (lb / 100);
            return Number(lToB.toFixed(2));
        }
        return null;
    }
    // SCLS Fourmula Default Data Load

    // Region wise(North America)

    defaultFourmulaData() {
        let defaultFourmulaRegion = {
            NorthAmerica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "AQN2 DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQNLT Sanitizer",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "AQN2 ClearlySoft",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "100 lb",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "RAGS/MOPS"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "POWER PAK"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "NEW LINEN"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            }

                        ],

                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                FormulaSummaryInfo: [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 4.4092,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": [


                        ]
                    }
                ],

                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "NorthAmerica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "11 Aug 2022",
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
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_08_11_2022_10:21:30",
                "_rid": "tSI+APbmEzsQCwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzsQCwAAAAAAAA==/",
                "_etag": "\"6e00ede2-0000-0200-0000-62f4d84b0000\"",
                "_attachments": "attachments/",
                "_ts": 1660213323
            },
            Europe: {
                "ControllerSettingsList": [
                    {
                        "Name": "Product 1",
                        "Value": "AQN Detergent",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQN Oxy",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "AQN Soft",
                        "HelpText": null
                    }
                ],
                "WasherDetailsList": [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "20 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "RAGS/MOPS"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "WHITE TABLE"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "COLOR TOWELS"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "COLOR SHEETS"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            }
                        ],
                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                "FormulaSummaryInfo": [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.15,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.1,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.15,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.1,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.025,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.15,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.125,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.15,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.125,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.025,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.175,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.175,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.125,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.225,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.15,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.025,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.125,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false, 
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 2,
                                "ProductName": "AQN Detergent",
                                "ActualProductAmount": 0.125,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQN Oxy",
                                "ActualProductAmount": 0.075,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 6,
                                "Signal": 3,
                                "ProductName": "AQN Soft",
                                "ActualProductAmount": 0.025,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": []
                    }
                ],
                "FileName": "D2052H012583_SCLS_09_02_2022_07:46:20",
                "IsDirty": false,
                "ConfigurationsDeviceSettings": [
                    {
                        "Name": "Region",
                        "Value": "Europe",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "02 Sep 2022",
                        "HelpText": null
                    },
                    {
                        "Name": "Unit of Measure",
                        "Value": "Metric",
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
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_09_02_2022_07:46:20",
                "_rid": "tSI+APbmEzs0CwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzs0CwAAAAAAAA==/",
                "_etag": "\"6207fc22-0000-0200-0000-6311b52e0000\"",
                "_attachments": "attachments/",
                "_ts": 1662104878
            }
            ,
            MiddleEastAfrica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "LT Detergent",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQN2 Destainer",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "LT ClearlySoft",
                        "HelpText": null
                    }


                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "45.4 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,


                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "RECLAIM"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "POWER PAK"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "NEW LINEN"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "WHITE TABLE"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "PRSNLS NO BLCH"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "PERSONALS BLCH"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "DELICATE"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "COLOR TOWELS"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "COLOR SHEETS"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "COLOR TABLE"
                            }

                        ],

                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                FormulaSummaryInfo: [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.440925,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.308647,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 5.51156,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 1.1464,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 1.1464,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.88185,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 1.98416,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 1.98416,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.396832,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.88185,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "LT Detergent",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN2 Destainer",
                                "ActualProductAmount": 0.308647,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],


                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "MiddleEastAfrica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "09 Aug 2022",
                        "HelpText": null
                    },
                    {
                        "Name": "Unit of Measure",
                        "Value": "Metric",
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
                        "Value": "Asia/Bangkok",
                        "HelpText": null
                    }


                ],
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_08_09_2022_09:31:55",
                "_rid": "tSI+APbmEzsMCwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzsMCwAAAAAAAA==/",
                "_etag": "\"c4009af8-0000-0200-0000-62f229c70000\"",
                "_attachments": "attachments/",
                "_ts": 1660037575

            },
            LatinAmerica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "Surge Plus",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQNLT Sanitizer",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "LT ClearlySoft",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "45.4 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,



                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "RECLAIM"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "POWER PAK"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "NEW LINEN"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "WHITE TABLE"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "PRSNLS NO BLCH"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "PERSONALS BLCH"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "DELICATE"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "COLOR TOWELS"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "COLOR SHEETS"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "COLOR TABLE"
                            }


                        ],

                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                FormulaSummaryInfo: [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.440925,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.308647,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 5.51156,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 1.1464,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 1.1464,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.88185,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.98416,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.98416,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.396832,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.88185,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.32277,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.30694,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45505,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.20462,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 13,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485017,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 2,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.40925,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 4,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.308647,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "LatinAmerica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "09 Aug 2022",
                        "HelpText": null
                    },
                    {
                        "Name": "Unit of Measure",
                        "Value": "Metric",
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
                        "Value": "GMT+0",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_08_09_2022_09:31:55",
                "_rid": "tSI+APbmEzsMCwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzsMCwAAAAAAAA==/",
                "_etag": "\"c4009af8-0000-0200-0000-62f229c70000\"",
                "_attachments": "attachments/",
                "_ts": 1660037575

            },
            AsiaPacific: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "Surge Plus",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQN LT Sanitizer",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "LT ClearlySoft",
                        "HelpText": null
                    }

                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000Ar9NAAS",
                        "WasherName": "Washer 1",
                        "AssetName": "TEST SCLS",
                        "Capacity": "45.4 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,




                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "RECLAIM"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "POWER PAK"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "NEW LINEN"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "WHITE TABLE"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "PRSNLS NO BLCH"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "PERSONALS BLCH"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "DELICATE"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "COLOR TOWELS"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "COLOR SHEETS"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "COLOR TABLE"
                            }



                        ],

                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                FormulaSummaryInfo: [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.44092,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.32276,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.308644,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.32276,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 5.5115,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 1.14639,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": []
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.4092,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 1.14639,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.4092,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.88184,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.98414,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.98414,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.396828,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.88184,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 1.32276,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 10,
                                "Signal": 3,
                                "ProductName": "LT ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "Surge Plus",
                                "ActualProductAmount": 4.4092,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 2,
                                "ProductName": "AQN LT Sanitizer",
                                "ActualProductAmount": 0.308644,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],




                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "AsiaPacific",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "11 Aug 2022",
                        "HelpText": null
                    },
                    {
                        "Name": "Unit of Measure",
                        "Value": "Metric",
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
                        "Value": "GMT+0",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_08_11_2022_12:48:32",
                "_rid": "tSI+APbmEzsUCwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzsUCwAAAAAAAA==/",
                "_etag": "\"770039b3-0000-0200-0000-62f4facf0000\"",
                "_attachments": "attachments/",
                "_ts": 1660222159
            },
            NorthAmericaLTC: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "AQN2 DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "AQNLT Sanitizer",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "AQN2 ClearlySoft",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "100 lb",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "RAGS/MOPS"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "POWER PAK"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "NEW LINEN"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "PRSNLS NO BLCH"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "(Unused)"
                            }

                        ],

                        "SignalFilterTime": "2 sec",
                        "AdvancedSignalMode": "NA"
                    }
                ],
                FormulaSummaryInfo: [
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 1,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 2,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 3.3069,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 3,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 4,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 4.4092,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.573196,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 5,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.485012,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 6,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 7,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 4.40920,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 31,
                                "Signal": 2,
                                "ProductName": "AQNLT Sanitizer",
                                "ActualProductAmount": 0.57320,
                                "IsSolidProduct": true,
                                "IsLocked": true,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 1.45504,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 8,
                        "FormulaSummaryList": [
                            {
                                "Id": 0,
                                "Number": 29,
                                "Signal": 1,
                                "ProductName": "AQN2 DETERGENT",
                                "ActualProductAmount": 2.2046,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 34,
                                "Signal": 3,
                                "ProductName": "AQN2 ClearlySoft",
                                "ActualProductAmount": 0.97002,
                                "IsSolidProduct": true,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 9,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 10,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 11,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 12,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 13,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 14,
                        "FormulaSummaryList": [


                        ]
                    },
                    {
                        "WasherNumber": 1,
                        "FormulaNumber": 15,
                        "FormulaSummaryList": [


                        ]
                    }
                ],

                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "NorthAmerica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "11 Aug 2022",
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
                "AdditionalInfo": {},
                "id": "D2052H012583_SCLS_08_11_2022_10:21:30",
                "_rid": "tSI+APbmEzsQCwAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEzsQCwAAAAAAAA==/",
                "_etag": "\"6e00ede2-0000-0200-0000-62f4d84b0000\"",
                "_attachments": "attachments/",
                "_ts": 1660213323
            },
            DefaultFormulasLeninType: {
                "DefaultFormulas": [
                    {
                        "FormulaNumber": 1,
                        "FormulaName": "WHITE SHEETS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 150,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 1,
                                "Region": "",
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 1,
                                "Region": "",
                                "FormulaName": "WHITE SHEETS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 1,
                                "Region": "",
                                "FormulaName": "WHITE SHEETS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 2,
                        "FormulaName": "WHITE TOWELS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 150,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 2,
                                "Region": "",
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 2,
                                "Region": "",
                                "FormulaName": "WHITE TOWELS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 66,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 2,
                                "Region": "",
                                "FormulaName": "WHITE TOWELS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 3,
                        "FormulaName": "BLANKETS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 3,
                                "Region": "",
                                "FormulaName": "BLANKETS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 3,
                                "Region": "",
                                "FormulaName": "BLANKETS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 4,
                        "FormulaName": "RECLAIM",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 250,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 4,
                                "Region": "",
                                "FormulaName": "RECLAIM"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 42,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 4,
                                "Region": "",
                                "FormulaName": "RECLAIM"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 5,
                        "FormulaName": "POWER PAK",
                        "Signals": [
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 5,
                                "Region": "",
                                "FormulaName": "POWER PAK"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 6,
                        "FormulaName": "Rags/Mops",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 6,
                                "Region": "",
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 6,
                                "Region": "",
                                "FormulaName": "Rags/Mops"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 7,
                        "FormulaName": "NEW LINEN",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 7,
                                "Region": "",
                                "FormulaName": "NEW LINEN"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 8,
                        "FormulaName": "WHITE TABLE",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 8,
                                "Region": "",
                                "FormulaName": "WHITE TABLE"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 8,
                                "Region": "",
                                "FormulaName": "WHITE TABLE"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 9,
                        "FormulaName": "PRSNLS NO BLCH",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 9,
                                "Region": "",
                                "FormulaName": "PRSNLS NO BLCH"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 44,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 9,
                                "Region": "",
                                "FormulaName": "PRSNLS NO BLCH"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 10,
                        "FormulaName": "PERSONALS BLCH",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 10,
                                "Region": "",
                                "FormulaName": "PERSONALS BLCH"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 18,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 10,
                                "Region": "",
                                "FormulaName": "PERSONALS BLCH"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 44,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 10,
                                "Region": "",
                                "FormulaName": "PERSONALS BLCH"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 11,
                        "FormulaName": "DIAPERS/PADS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 11,
                                "Region": "",
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 11,
                                "Region": "",
                                "FormulaName": "DIAPERS/PADS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 66,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 11,
                                "Region": "",
                                "FormulaName": "DIAPERS/PADS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 12,
                        "FormulaName": "DELICATE",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 12,
                                "Region": "",
                                "FormulaName": "DELICATE"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 12,
                                "Region": "",
                                "FormulaName": "DELICATE"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 13,
                        "FormulaName": "COLOR TOWELS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 150,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 13,
                                "Region": "",
                                "FormulaName": "COLOR TOWELS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 66,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 13,
                                "Region": "",
                                "FormulaName": "COLOR TOWELS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 14,
                        "FormulaName": "COLOR SHEETS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 150,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 14,
                                "Region": "",
                                "FormulaName": "COLOR SHEETS"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 14,
                                "Region": "",
                                "FormulaName": "COLOR SHEETS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 15,
                        "FormulaName": "COLOR TABLE",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 15,
                                "Region": "",
                                "FormulaName": "COLOR TABLE"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 16,
                        "FormulaName": "CURTAINS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 100,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 16,
                                "Region": "",
                                "FormulaName": "CURTAINS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 17,
                        "FormulaName": "DECONTAMINATE",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 17,
                                "Region": "",
                                "FormulaName": "DECONTAMINATE"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 18,
                        "FormulaName": "FOUL",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 18,
                                "Region": "",
                                "FormulaName": "FOUL"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 19,
                        "FormulaName": "INFECTIOUS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 19,
                                "Region": "",
                                "FormulaName": "INFECTIOUS"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 20,
                        "FormulaName": "MICROFIBRE",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 20,
                                "Region": "",
                                "FormulaName": "MICROFIBRE"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 20,
                                "Region": "",
                                "FormulaName": "MICROFIBRE"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 21,
                        "FormulaName": "PILLOWCASES",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 200,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 21,
                                "Region": "",
                                "FormulaName": "PILLOWCASES"
                            },
                            {
                                "SignalNumber": 2,
                                "PocketNumber": 2,
                                "ProductAmountForSCLS": 26,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 21,
                                "Region": "",
                                "FormulaName": "PILLOWCASES"
                            },
                            {
                                "SignalNumber": 3,
                                "PocketNumber": 3,
                                "ProductAmountForSCLS": 22,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 21,
                                "Region": "",
                                "FormulaName": "PILLOWCASES"
                            }
                        ]
                    },
                    {
                        "FormulaNumber": 22,
                        "FormulaName": "UNIFORMS",
                        "Signals": [
                            {
                                "SignalNumber": 1,
                                "PocketNumber": 1,
                                "ProductAmountForSCLS": 130,
                                "ProductAmountForLCLS": 25,
                                "ProductDelay": 0,
                                "FormulaNumber": 22,
                                "Region": "",
                                "FormulaName": "UNIFORMS"
                            }
                        ]
                    }
                ]
            }
        }
        return defaultFourmulaRegion;
    }

    sclsProductDataList() {
        let region = {
            NorthAmerica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "Surge Plus",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 DETERGENT",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 BioCare DETERGENT",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "ECL Detergent",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQNLT Sanitizer",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Color Safe Bleach",
                        "Pocket": 2,
                        "Number": 32,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Navi-Soft",
                        "Pocket": 3,
                        "Number": 7,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Navi-Sour IC",
                        "Pocket": 3,
                        "Number": 8,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "LT ClearlySoft",
                        "Pocket": 3,
                        "Number": 13,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC",
                        "Pocket": 3,
                        "Number": 33,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 ClearlySoft",
                        "Pocket": 3,
                        "Number": 34,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN BioCare SourSoft",
                        "Pocket": 3,
                        "Number": 35,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "ECL Soursoft",
                        "Pocket": 3,
                        "Number": 40,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC 4th",
                        "Pocket": 4,
                        "Number": 36,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Break",
                        "Pocket": 4,
                        "Number": 37,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Advacare 120",
                        "Pocket": 5,
                        "Number": 17,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Water Treatment MC",
                        "Pocket": 5,
                        "Number": 18,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Sour 7",
                        "Pocket": 5,
                        "Number": 19,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Boost",
                        "Pocket": 5,
                        "Number": 20,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Break III Xtra",
                        "Pocket": 5,
                        "Number": 21,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Builder C",
                        "Pocket": 5,
                        "Number": 22,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Enzymatic Special",
                        "Pocket": 5,
                        "Number": 23,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "LNDP",
                        "Pocket": 5,
                        "Number": 24,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Neutralizer",
                        "Pocket": 5,
                        "Number": 25,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Water Conditioner NP",
                        "Pocket": 5,
                        "Number": 26,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Natural satin",
                        "Pocket": 5,
                        "Number": 27,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Polycrisp",
                        "Pocket": 5,
                        "Number": 28,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            Europe: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "AQN Detergent",
                        "Pocket": 1,
                        "Number": 1,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Univ Detergent",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Oxy",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Destainer",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Soft",
                        "Pocket": 3,
                        "Number": 6,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Neutralizer",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Neutra-Plus",
                        "Pocket": 3,
                        "Number": 7,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Neutralizer 4th",
                        "Pocket": 4,
                        "Number": 8,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Neutra-Plus 4th",
                        "Pocket": 4,
                        "Number": 9,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Univ Det 4th",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN Oxy 4th",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Ozonit Performance",
                        "Pocket": 5,
                        "Number": 12,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Ecobrite Cond CE",
                        "Pocket": 5,
                        "Number": 13,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Ecobrite Safe Bleach",
                        "Pocket": 5,
                        "Number": 14,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Ecobrite Delicate",
                        "Pocket": 5,
                        "Number": 15,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Noxa Liquid",
                        "Pocket": 5,
                        "Number": 16,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]

            },
            MiddleEastAfrica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "LT Detergent",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Destainer",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "LT ClearlySoft",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Builder C",
                        "Pocket": 5,
                        "Number": 9,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Eco-Star Sour",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Eco-Star Sour Control",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Solvit",
                        "Pocket": 5,
                        "Number": 12,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Ozonit",
                        "Pocket": 5,
                        "Number": 13,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Oxy-Brite",
                        "Pocket": 5,
                        "Number": 14,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Corox",
                        "Pocket": 5,
                        "Number": 15,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            LatinAmerica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "Surge Plus",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Detergent",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQNLT Sanitizer",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Color Safe Bleach",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "LT ClearlySoft",
                        "Pocket": 3,
                        "Number": 13,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Navi-Soft",
                        "Pocket": 3,
                        "Number": 7,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Navi-Sour IC",
                        "Pocket": 3,
                        "Number": 8,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC",
                        "Pocket": 3,
                        "Number": 32,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Clearly Soft",
                        "Pocket": 3,
                        "Number": 33,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Softner",
                        "Pocket": 3,
                        "Number": 36,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC 4th",
                        "Pocket": 4,
                        "Number": 34,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Break",
                        "Pocket": 4,
                        "Number": 35,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Advacare 120",
                        "Pocket": 5,
                        "Number": 17,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Water Treatment MC",
                        "Pocket": 5,
                        "Number": 18,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Sour 7",
                        "Pocket": 5,
                        "Number": 19,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Boost",
                        "Pocket": 5,
                        "Number": 20,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Break III Xtra",
                        "Pocket": 5,
                        "Number": 21,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Builder C",
                        "Pocket": 5,
                        "Number": 22,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Enzymatic Special",
                        "Pocket": 5,
                        "Number": 23,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "LNDP",
                        "Pocket": 5,
                        "Number": 24,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Neutralizer",
                        "Pocket": 5,
                        "Number": 25,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Water Conditioner NP",
                        "Pocket": 5,
                        "Number": 26,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Natural satin",
                        "Pocket": 5,
                        "Number": 27,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Polycrisp",
                        "Pocket": 5,
                        "Number": 28,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Performance Bleach",
                        "Pocket": 5,
                        "Number": 36,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Emulsifier 150",
                        "Pocket": 5,
                        "Number": 37,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            AsiaPacific: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "Surge Plus",
                        "Pocket": 1,
                        "Number": 1,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Detergent",
                        "Pocket": 1,
                        "Number": 13,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN BioCare Detergent",
                        "Pocket": 1,
                        "Number": 14,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN LT Sanitizer",
                        "Pocket": 2,
                        "Number": 15,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Color Safe Bleach",
                        "Pocket": 2,
                        "Number": 16,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "LT ClearlySoft",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Navi-Soft",
                        "Pocket": 3,
                        "Number": 6,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC",
                        "Pocket": 3,
                        "Number": 17,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Clearly Soft",
                        "Pocket": 3,
                        "Number": 18,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN BioCare SourSoft",
                        "Pocket": 3,
                        "Number": 19,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Sour IC 4th",
                        "Pocket": 4,
                        "Number": 20,
                        "IsLocked": true,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "AQN2 Break",
                        "Pocket": 4,
                        "Number": 21,
                        "IsLocked": false,
                        "IsSolidProduct": true
                    },
                    {
                        "ProductName": "Turbo Boost",
                        "Pocket": 5,
                        "Number": 22,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Builder C",
                        "Pocket": 5,
                        "Number": 23,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Polycrisp",
                        "Pocket": 5,
                        "Number": 24,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "ESP softer AB",
                        "Pocket": 5,
                        "Number": 25,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Laundri Liquid Soft",
                        "Pocket": 5,
                        "Number": 26,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "ESP Bleach O",
                        "Pocket": 5,
                        "Number": 27,
                        "IsLocked": true,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Stabac",
                        "Pocket": 5,
                        "Number": 28,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Break",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Speed",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Builder",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Conditioner",
                        "Pocket": 5,
                        "Number": 32,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Inhibit",
                        "Pocket": 5,
                        "Number": 33,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Solv",
                        "Pocket": 5,
                        "Number": 34,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Oxybrite",
                        "Pocket": 5,
                        "Number": 35,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Performance",
                        "Pocket": 5,
                        "Number": 36,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "Turbo Performance Plus",
                        "Pocket": 5,
                        "Number": 37,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            }
        }
        return region;
    }

    positionList() {
        let data = [
            { id: 1, value: 'Before' },
            { id: 2, value: 'After' }
        ]
        return data;
    }
}

