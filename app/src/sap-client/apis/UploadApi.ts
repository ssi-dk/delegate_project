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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    BaseMetadata,
    BaseMetadataFromJSON,
    BaseMetadataToJSON,
} from '../models';

export interface BulkMetadataRequest {
    metadataTsv: string;
}

export interface MultiUploadRequest {
    metadataTsv: string;
    files: Array<Blob>;
}

export interface SingleUploadRequest {
    metadata: BaseMetadata;
    file: Blob;
}


/**
 * Manually upload metadata for previously uploaded sequence files
 */
function bulkMetadataRaw<T>(requestParameters: BulkMetadataRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.metadataTsv === null || requestParameters.metadataTsv === undefined) {
        throw new runtime.RequiredError('metadataTsv','Required parameter requestParameters.metadataTsv was null or undefined when calling bulkMetadata.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const formData = new FormData();
    if (requestParameters.metadataTsv !== undefined) {
        formData.append('metadata_tsv', requestParameters.metadataTsv as any);
    }

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/upload/bulk_metadata`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: formData,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Manually upload metadata for previously uploaded sequence files
*/
export function bulkMetadata<T>(requestParameters: BulkMetadataRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return bulkMetadataRaw(requestParameters, requestConfig);
}

/**
 * Manually upload multiple sequences with metadata
 */
function multiUploadRaw<T>(requestParameters: MultiUploadRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.metadataTsv === null || requestParameters.metadataTsv === undefined) {
        throw new runtime.RequiredError('metadataTsv','Required parameter requestParameters.metadataTsv was null or undefined when calling multiUpload.');
    }

    if (requestParameters.files === null || requestParameters.files === undefined) {
        throw new runtime.RequiredError('files','Required parameter requestParameters.files was null or undefined when calling multiUpload.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const formData = new FormData();
    if (requestParameters.metadataTsv !== undefined) {
        formData.append('metadata_tsv', requestParameters.metadataTsv as any);
    }

    if (requestParameters.files) {
        formData.append('files', requestParameters.files?.join(runtime.COLLECTION_FORMATS["csv"]));
    }

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/upload/multi_upload`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: formData,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Manually upload multiple sequences with metadata
*/
export function multiUpload<T>(requestParameters: MultiUploadRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return multiUploadRaw(requestParameters, requestConfig);
}

/**
 * Manually upload isolate with metadata
 */
function singleUploadRaw<T>(requestParameters: SingleUploadRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
        throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling singleUpload.');
    }

    if (requestParameters.file === null || requestParameters.file === undefined) {
        throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling singleUpload.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const formData = new FormData();
    if (requestParameters.metadata !== undefined) {
        formData.append('metadata', requestParameters.metadata as any);
    }

    if (requestParameters.file !== undefined) {
        formData.append('file', requestParameters.file as any);
    }

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/upload/single_upload`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: formData,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Manually upload isolate with metadata
*/
export function singleUpload<T>(requestParameters: SingleUploadRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return singleUploadRaw(requestParameters, requestConfig);
}
