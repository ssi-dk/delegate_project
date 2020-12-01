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
 * @interface TbrSpecificMetadata
 */
export interface TbrSpecificMetadata  {
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    cpr?: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    gender?: TbrSpecificMetadataGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TbrSpecificMetadata
     */
    age?: number;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    travel?: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    travel_country?: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    run_date: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    kma_received_date?: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    kma?: string;
    /**
     * 
     * @type {string}
     * @memberof TbrSpecificMetadata
     */
    region?: string;
}

export function TbrSpecificMetadataFromJSON(json: any): TbrSpecificMetadata {
    return {
        'cpr': !exists(json, 'cpr') ? undefined : json['cpr'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'age': !exists(json, 'age') ? undefined : json['age'],
        'travel': !exists(json, 'travel') ? undefined : json['travel'],
        'travel_country': !exists(json, 'travel_country') ? undefined : json['travel_country'],
        'run_date': json['run_date'],
        'kma_received_date': !exists(json, 'kma_received_date') ? undefined : json['kma_received_date'],
        'kma': !exists(json, 'kma') ? undefined : json['kma'],
        'region': !exists(json, 'region') ? undefined : json['region'],
    };
}

export function TbrSpecificMetadataToJSON(value?: TbrSpecificMetadata): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'cpr': value.cpr,
        'gender': value.gender,
        'name': value.name,
        'age': value.age,
        'travel': value.travel,
        'travel_country': value.travel_country,
        'run_date': value.run_date,
        'kma_received_date': value.kma_received_date,
        'kma': value.kma,
        'region': value.region,
    };
}

/**
* @export
* @enum {string}
*/
export enum TbrSpecificMetadataGenderEnum {
    M = 'M',
    K = 'K'
}


