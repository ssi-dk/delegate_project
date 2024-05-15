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
    BioApiJobResponse,
    BioApiJobResponseFromJSON,
    BioApiJobResponseToJSON,
    NearestNeighborsRequest,
    NearestNeighborsRequestFromJSON,
    NearestNeighborsRequestToJSON,
} from '../models';

export interface PostRequest {
    body: NearestNeighborsRequest;
}


/**
 * Nearest Neighbors
 */
function postRaw<T>(requestParameters: PostRequest, requestConfig: runtime.TypedQueryConfig<T, BioApiJobResponse> = {}): QueryConfig<T> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling post.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/nearest_neighbors`,
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
        body: queryParameters || NearestNeighborsRequestToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BioApiJobResponseFromJSON(body), text);
    }

    return config;
}

/**
* Nearest Neighbors
*/
export function post<T>(requestParameters: PostRequest, requestConfig?: runtime.TypedQueryConfig<T, BioApiJobResponse>): QueryConfig<T> {
    return postRaw(requestParameters, requestConfig);
}

