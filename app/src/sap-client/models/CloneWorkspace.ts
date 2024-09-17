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
/**
 * 
 * @export
 * @interface CloneWorkspace
 */
export interface CloneWorkspace  {
    /**
     * 
     * @type {string}
     * @memberof CloneWorkspace
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CloneWorkspace
     */
    id: string;
}

export function CloneWorkspaceFromJSON(json: any): CloneWorkspace {
    return {
        'name': json['name'],
        'id': json['id'],
    };
}

export function CloneWorkspaceToJSON(value?: CloneWorkspace): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'id': value.id,
    };
}


