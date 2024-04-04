// tslint:disable
/**
 * SOFI
 * SOFI Sekvensanalyseplatform
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Phenotype,
    PhenotypeFromJSON,
    PhenotypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface SampleCategoriesResistance
 */
export interface SampleCategoriesResistance  {
    /**
     * 
     * @type {string}
     * @memberof SampleCategoriesResistance
     */
    summary?: string;
    /**
     * 
     * @type {{ [key: string]: Phenotype; }}
     * @memberof SampleCategoriesResistance
     */
    report?: { [key: string]: Phenotype; };
}

export function SampleCategoriesResistanceFromJSON(json: any): SampleCategoriesResistance {
    return {
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'report': !exists(json, 'report') ? undefined : mapValues(json['report'], PhenotypeFromJSON),
    };
}

export function SampleCategoriesResistanceToJSON(value?: SampleCategoriesResistance): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'summary': value.summary,
        'report': value.report === undefined ? undefined : mapValues(value.report, PhenotypeToJSON),
    };
}

