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
    Organization,
    OrganizationFromJSON,
    OrganizationToJSON,
} from './';

/**
 * 
 * @export
 * @interface BaseMetadata
 */
export interface BaseMetadata  {
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    sequence_id: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    sequence_filename?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    isolate_id: string;
    /**
     * 
     * @type {Organization}
     * @memberof BaseMetadata
     */
    institution: Organization;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    project_number?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    project_title?: string;
    /**
     * 
     * @type {Date}
     * @memberof BaseMetadata
     */
    date_sample?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BaseMetadata
     */
    date_received: Date;
    /**
     * 
     * @type {Date}
     * @memberof BaseMetadata
     */
    date_sofi?: Date;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    run_id: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMetadata
     */
    _public?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BaseMetadata
     */
    primary_isolate: boolean;
}

export function BaseMetadataFromJSON(json: any): BaseMetadata {
    return {
        'sequence_id': json['sequence_id'],
        'sequence_filename': !exists(json, 'sequence_filename') ? undefined : json['sequence_filename'],
        'isolate_id': json['isolate_id'],
        'institution': OrganizationFromJSON(json['institution']),
        'project_number': !exists(json, 'project_number') ? undefined : json['project_number'],
        'project_title': !exists(json, 'project_title') ? undefined : json['project_title'],
        'date_sample': !exists(json, 'date_sample') ? undefined : new Date(json['date_sample']),
        'date_received': new Date(json['date_received']),
        'date_sofi': !exists(json, 'date_sofi') ? undefined : new Date(json['date_sofi']),
        'run_id': json['run_id'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'primary_isolate': json['primary_isolate'],
    };
}

export function BaseMetadataToJSON(value?: BaseMetadata): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'sequence_id': value.sequence_id,
        'sequence_filename': value.sequence_filename,
        'isolate_id': value.isolate_id,
        'institution': OrganizationToJSON(value.institution),
        'project_number': value.project_number,
        'project_title': value.project_title,
        'date_sample': value.date_sample === undefined ? undefined : value.date_sample.toISOString(),
        'date_received': value.date_received.toISOString(),
        'date_sofi': value.date_sofi === undefined ? undefined : value.date_sofi.toISOString(),
        'run_id': value.run_id,
        'public': value._public,
        'primary_isolate': value.primary_isolate,
    };
}


