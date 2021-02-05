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

/**
 * 
 * @export
 * @enum {string}
 */
export enum Organization {
    SSI = 'SSI',
    FVST = 'FVST',
    Other = 'Other'
}

export function OrganizationFromJSON(json: any): Organization {
    return json as Organization;
}

export function OrganizationToJSON(value?: Organization): any {
    return value as any;
}

