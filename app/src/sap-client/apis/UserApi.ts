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
    UserDefinedView,
    UserDefinedViewFromJSON,
    UserDefinedViewToJSON,
    UserInfo,
    UserInfoFromJSON,
    UserInfoToJSON,
} from '../models';

export interface CreateUserViewRequest {
    userDefinedView?: UserDefinedView;
}

export interface DeleteViewRequest {
    name: string;
}


/**
 */
function createUserViewRaw<T>(requestParameters: CreateUserViewRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user/views`,
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
        body: queryParameters || UserDefinedViewToJSON(requestParameters.userDefinedView),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
*/
export function createUserView<T>(requestParameters: CreateUserViewRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return createUserViewRaw(requestParameters, requestConfig);
}

/**
 * Delete an existing view
 */
function deleteViewRaw<T>(requestParameters: DeleteViewRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
        throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteView.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user/views/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete an existing view
*/
export function deleteView<T>(requestParameters: DeleteViewRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteViewRaw(requestParameters, requestConfig);
}

/**
 */
function getUserViewsRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<UserDefinedView>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user/views`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(UserDefinedViewFromJSON), text);
    }

    return config;
}

/**
*/
export function getUserViews<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<UserDefinedView>>): QueryConfig<T> {
    return getUserViewsRaw( requestConfig);
}

/**
 * Describe the current user and their permissions
 */
function whoAmIRaw<T>( requestConfig: runtime.TypedQueryConfig<T, UserInfo> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/me`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(UserInfoFromJSON(body), text);
    }

    return config;
}

/**
* Describe the current user and their permissions
*/
export function whoAmI<T>( requestConfig?: runtime.TypedQueryConfig<T, UserInfo>): QueryConfig<T> {
    return whoAmIRaw( requestConfig);
}

