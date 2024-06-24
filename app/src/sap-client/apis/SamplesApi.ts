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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    Sample,
    SampleFromJSON,
    SampleToJSON,
} from '../models';

export interface GetSampleByIdRequest {
    sampleId: string;
}


/**
 * Get an individual sample by id
 */
function getSampleByIdRaw<T>(requestParameters: GetSampleByIdRequest, requestConfig: runtime.TypedQueryConfig<T, Sample> = {}): QueryConfig<T> {
    if (requestParameters.sampleId === null || requestParameters.sampleId === undefined) {
        throw new runtime.RequiredError('sampleId','Required parameter requestParameters.sampleId was null or undefined when calling getSampleById.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/samples/{sample_id}`.replace(`{${"sample_id"}}`, encodeURIComponent(String(requestParameters.sampleId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SampleFromJSON(body), text);
    }

    return config;
}

/**
* Get an individual sample by id
*/
export function getSampleById<T>(requestParameters: GetSampleByIdRequest, requestConfig?: runtime.TypedQueryConfig<T, Sample>): QueryConfig<T> {
    return getSampleByIdRaw(requestParameters, requestConfig);
}

