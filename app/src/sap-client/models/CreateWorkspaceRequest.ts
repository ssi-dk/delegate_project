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
 * @interface CreateWorkspaceRequest
 */
export interface CreateWorkspaceRequest  {
    /**
     * 
     * @type {string}
     * @memberof CreateWorkspaceRequest
     */
    name: string;
}

export function CreateWorkspaceRequestFromJSON(json: any): CreateWorkspaceRequest {
    return {
        'name': json['name'],
    };
}

export function CreateWorkspaceRequestToJSON(value?: CreateWorkspaceRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
    };
}

