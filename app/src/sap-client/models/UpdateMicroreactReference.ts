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
    MicroreactProject,
    MicroreactProjectFromJSON,
    MicroreactProjectToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateMicroreactReference
 */
export interface UpdateMicroreactReference  {
    /**
     * 
     * @type {string}
     * @memberof UpdateMicroreactReference
     */
    id: string;
    /**
     * 
     * @type {MicroreactProject}
     * @memberof UpdateMicroreactReference
     */
    microreact: MicroreactProject;
}

export function UpdateMicroreactReferenceFromJSON(json: any): UpdateMicroreactReference {
    return {
        'id': json['id'],
        'microreact': MicroreactProjectFromJSON(json['microreact']),
    };
}

export function UpdateMicroreactReferenceToJSON(value?: UpdateMicroreactReference): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'microreact': MicroreactProjectToJSON(value.microreact),
    };
}

