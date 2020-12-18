// tslint:disable
/**
 * SAP
 * Sekvensanalyseplatform
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalysisQuery
 */
export interface AnalysisQuery  {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AnalysisQuery
     */
    filters?: { [key: string]: string; };
}

export function AnalysisQueryFromJSON(json: any): AnalysisQuery {
    return {
        'filters': !exists(json, 'filters') ? undefined : json['filters'],
    };
}

export function AnalysisQueryToJSON(value?: AnalysisQuery): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'filters': value.filters,
    };
}


