import { Injectable, Inject } from "@angular/core";
import { BASE_API_PROVIDER, BaseAPIService } from "../../../env.config";
import { BaseHttpClientService } from "../../core";

@Injectable({
    providedIn: 'root'
})
export class LclsdataserviceService {

    constructor(
        private httpClient: BaseHttpClientService,
        @Inject(BASE_API_PROVIDER) private baseAPIProvider: BaseAPIService) {
    }

    // LCLS Fourmula Default Data Load
    // Region wise(North America)
    defaultFourmulaData() {
        let defaultFourmulaRegion = {
            NorthAmerica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000B7iUAAS",
                        "WasherName": "Washer 1",
                        "AssetName": "SCLS Test 2",
                        "Capacity": "50 lb",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 120
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 180
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
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
            Europe: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "22.7 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 5
                            }
                        ]
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "Europe",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "04 Nov 2022",
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
                        "Value": "US/Central",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[3,5]"
                },
                "id": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "_rid": "tSI+APbmEztDDAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEztDDAAAAAAAAA==/",
                "_etag": "\"fe0489c3-0000-0200-0000-6364e03b0000\"",
                "_attachments": "attachments/",
                "_ts": 1667555387
            },
            MiddleEastAfrica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "22.7 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "25 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 120
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 180
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_04_2022_10:24:38",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "MiddleEastAfrica",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "04 Nov 2022",
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
                        "Value": "America/Mexico_City",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[2,3]"
                },
                "id": "D2052H012583_LCLS_11_04_2022_10:24:38",
                "_rid": "tSI+APbmEztHDAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEztHDAAAAAAAAA==/",
                "_etag": "\"ff045b9b-0000-0200-0000-6364e8d80000\"",
                "_attachments": "attachments/",
                "_ts": 1667557592
            },
            LatinAmerica: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "22.7 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 120
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 180
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "Europe",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "04 Nov 2022",
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
                        "Value": "US/Central",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[3,5]"
                },
                "id": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "_rid": "tSI+APbmEztDDAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEztDDAAAAAAAAA==/",
                "_etag": "\"fe0489c3-0000-0200-0000-6364e03b0000\"",
                "_attachments": "attachments/",
                "_ts": 1667555387
            },
            AsiaPacific: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "22.7 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "30 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 120
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 180
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "Europe",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "04 Nov 2022",
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
                        "Value": "US/Central",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[3,5]"
                },
                "id": "D2052H012583_LCLS_11_04_2022_09:47:10",
                "_rid": "tSI+APbmEztDDAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEztDDAAAAAAAAA==/",
                "_etag": "\"fe0489c3-0000-0200-0000-6364e03b0000\"",
                "_attachments": "attachments/",
                "_ts": 1667555387
            },
            GreaterChina: {
                ControllerSettingsList: [
                    {
                        "Name": "Product 1",
                        "Value": "DETERGENT",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 2",
                        "Value": "BLEACH-CHLORINE",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 3",
                        "Value": "SOUR",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 4",
                        "Value": "SOFTENER",
                        "HelpText": null
                    },
                    {
                        "Name": "Product 5",
                        "Value": "BUILDER",
                        "HelpText": null
                    }
                ],
                WasherDetailsList: [
                    {
                        "AssetID": "02i74000000AqixAAC",
                        "WasherName": "Washer 1",
                        "AssetName": "Ecolab Washer Ex100",
                        "Capacity": "22.7 kg",
                        "SignalMode": "Standard",
                        "RevertFormula": "No",
                        "PostFlushTime": "25 sec",
                        "WasherNumber": 1,
                        "Data": [
                            {
                                "Id": 1,
                                "HasError": false,
                                "FormulaName": "White Terry"
                            },
                            {
                                "Id": 2,
                                "HasError": false,
                                "FormulaName": "Colored Terry"
                            },
                            {
                                "Id": 3,
                                "HasError": false,
                                "FormulaName": "WhiteFlatwork"
                            },
                            {
                                "Id": 4,
                                "HasError": false,
                                "FormulaName": "ColorFlatwork"
                            },
                            {
                                "Id": 5,
                                "HasError": false,
                                "FormulaName": "White F&B"
                            },
                            {
                                "Id": 6,
                                "HasError": false,
                                "FormulaName": "Colored F&B"
                            },
                            {
                                "Id": 7,
                                "HasError": false,
                                "FormulaName": "Blankets"
                            },
                            {
                                "Id": 8,
                                "HasError": false,
                                "FormulaName": "Diapers/Pads"
                            },
                            {
                                "Id": 9,
                                "HasError": false,
                                "FormulaName": "DelicatNoBlch"
                            },
                            {
                                "Id": 10,
                                "HasError": false,
                                "FormulaName": "Rags/Mops"
                            },
                            {
                                "Id": 11,
                                "HasError": false,
                                "FormulaName": "UniformNoBlch"
                            },
                            {
                                "Id": 12,
                                "HasError": false,
                                "FormulaName": "PersnalsNoBlch"
                            },
                            {
                                "Id": 13,
                                "HasError": false,
                                "FormulaName": "Pillows"
                            },
                            {
                                "Id": 14,
                                "HasError": false,
                                "FormulaName": "Reclaim"
                            },
                            {
                                "Id": 15,
                                "HasError": false,
                                "FormulaName": "Power Pak"
                            }
                        ],
                        "SignalFilterTime": "3 sec",
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 5.2158,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
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
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 120
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 4,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                            {
                                "Id": 0,
                                "Number": 1,
                                "Signal": 1,
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.3039,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 180
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 7.8238,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 4.2378,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 3,
                                "Signal": 3,
                                "ProductName": "SOUR",
                                "ActualProductAmount": 1.6299,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 3,
                                "Number": 4,
                                "Signal": 3,
                                "ProductName": "SOFTENER",
                                "ActualProductAmount": 2.6079,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 1.9559,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 1,
                                "Number": 5,
                                "Signal": 1,
                                "ProductName": "BUILDER",
                                "ActualProductAmount": 9.7797,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            },
                            {
                                "Id": 2,
                                "Number": 2,
                                "Signal": 2,
                                "ProductName": "BLEACH-CHLORINE",
                                "ActualProductAmount": 3.2599,
                                "IsSolidProduct": false,
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
                                "ProductName": "DETERGENT",
                                "ActualProductAmount": 0,
                                "IsSolidProduct": false,
                                "IsLocked": false,
                                "HasError": false,
                                "ProductDelay": 0
                            }
                        ]
                    }
                ],
                "FileName": "D2052H012583_LCLS_11_04_2022_10:42:27",
                "IsDirty": false,
                ConfigurationsDeviceSettings: [
                    {
                        "Name": "Region",
                        "Value": "GreaterChina",
                        "HelpText": null
                    },
                    {
                        "Name": "Date & Time",
                        "Value": "04 Nov 2022",
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
                        "Value": "America/Mexico_City",
                        "HelpText": null
                    }
                ],
                "AdditionalInfo": {
                    "PumpProducts": "1:1:2:3:3:5:4:6:5:2",
                    "LockedPumps": "[2,3]"
                },
                "id": "D2052H012583_LCLS_11_04_2022_10:42:27",
                "_rid": "tSI+APbmEztIDAAAAAAAAA==",
                "_self": "dbs/tSI+AA==/colls/tSI+APbmEzs=/docs/tSI+APbmEztIDAAAAAAAAA==/",
                "_etag": "\"00057408-0000-0200-0000-6364ecc50000\"",
                "_attachments": "attachments/",
                "_ts": 1667558597
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

    lclsProductDataList() {
        let region = {
            NorthAmerica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            Europe: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            MiddleEastAfrica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            LatinAmerica: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            AsiaPacific: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
            GreaterChina: {
                FormulaSummaryInfo: [
                    {
                        "ProductName": "DETERGENT",
                        "Pocket": 1,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 1,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 1,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 1,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 1,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 1,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 1,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 1,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 1,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 1,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 2,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 2,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 2,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 2,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 2,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 2,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 2,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 2,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 2,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 2,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 3,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 3,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 3,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 3,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 3,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 3,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 3,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 3,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 3,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 3,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 4,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 4,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 4,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 4,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 4,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 4,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 4,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 4,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 4,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 4,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 5,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 5,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 5,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 5,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 5,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 5,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 5,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 5,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 5,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 5,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 6,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 6,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 6,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 6,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 6,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 6,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 6,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 6,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 6,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 6,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 7,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 7,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 7,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 7,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 7,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 7,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 7,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 7,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 7,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 7,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }, {
                        "ProductName": "DETERGENT",
                        "Pocket": 8,
                        "Number": 2,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BUILDER",
                        "Pocket": 8,
                        "Number": 3,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-CHLORINE",
                        "Pocket": 8,
                        "Number": 10,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BLEACH-OXYGEN",
                        "Pocket": 8,
                        "Number": 29,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOUR",
                        "Pocket": 8,
                        "Number": 30,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SOFTENER",
                        "Pocket": 8,
                        "Number": 39,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "BOOSTER",
                        "Pocket": 8,
                        "Number": 4,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "CONDITIONER",
                        "Pocket": 8,
                        "Number": 5,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "STARCH",
                        "Pocket": 8,
                        "Number": 11,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    },
                    {
                        "ProductName": "SPECIALTY",
                        "Pocket": 8,
                        "Number": 31,
                        "IsLocked": false,
                        "IsSolidProduct": false
                    }
                ]
            },
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