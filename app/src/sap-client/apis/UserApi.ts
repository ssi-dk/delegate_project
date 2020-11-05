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
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface CreateUserRequest {
    body: User;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    body: User;
}


/**
 * This can only be done by the logged in user.
 * Create user
 */
function createUserRaw<T>(requestParameters: CreateUserRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUser.');
    }

    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user`,
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
        body: queryParameters || UserToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* This can only be done by the logged in user.
* Create user
*/
export function createUser<T>(requestParameters: CreateUserRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return createUserRaw(requestParameters, requestConfig);
}

/**
 * This can only be done by the logged in user.
 * Delete user
 */
function deleteUserRaw<T>(requestParameters: DeleteUserRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
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
* This can only be done by the logged in user.
* Delete user
*/
export function deleteUser<T>(requestParameters: DeleteUserRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteUserRaw(requestParameters, requestConfig);
}

/**
 * Get user by user name
 */
function getUserByNameRaw<T>(requestParameters: GetUserByNameRequest, requestConfig: runtime.TypedQueryConfig<T, User> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(UserFromJSON(body), text);
    }

    return config;
}

/**
* Get user by user name
*/
export function getUserByName<T>(requestParameters: GetUserByNameRequest, requestConfig?: runtime.TypedQueryConfig<T, User>): QueryConfig<T> {
    return getUserByNameRaw(requestParameters, requestConfig);
}

/**
 * Logs user into the system
 */
function loginUserRaw<T>(requestParameters: LoginUserRequest, requestConfig: runtime.TypedQueryConfig<T, string> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
    }

    if (requestParameters.password === null || requestParameters.password === undefined) {
        throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
    }

    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.username !== undefined) {
        queryParameters['username'] = requestParameters.username;
    }


    if (requestParameters.password !== undefined) {
        queryParameters['password'] = requestParameters.password;
    }

    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user/login`,
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
        throw "OH NO";
    }

    return config;
}

/**
* Logs user into the system
*/
export function loginUser<T>(requestParameters: LoginUserRequest, requestConfig?: runtime.TypedQueryConfig<T, string>): QueryConfig<T> {
    return loginUserRaw(requestParameters, requestConfig);
}

/**
 * Logs out current logged in user session
 */
function logoutUserRaw<T>( requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user/logout`,
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
    }

    return config;
}

/**
* Logs out current logged in user session
*/
export function logoutUser<T>( requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return logoutUserRaw( requestConfig);
}

/**
 * This can only be done by the logged in user.
 * Updated user
 */
function updateUserRaw<T>(requestParameters: UpdateUserRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUser.');
    }

    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || UserToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* This can only be done by the logged in user.
* Updated user
*/
export function updateUser<T>(requestParameters: UpdateUserRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return updateUserRaw(requestParameters, requestConfig);
}

