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
    Approval,
    ApprovalFromJSON,
    ApprovalToJSON,
    ApprovalRequest,
    ApprovalRequestFromJSON,
    ApprovalRequestToJSON,
} from '../models';

export interface CancelApprovalRequest {
    approvalId: string;
}

export interface CreateApprovalRequest {
    body?: ApprovalRequest;
}


/**
 * Cancel a pending approval
 */
function cancelApprovalRaw<T>(requestParameters: CancelApprovalRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.approvalId === null || requestParameters.approvalId === undefined) {
        throw new runtime.RequiredError('approvalId','Required parameter requestParameters.approvalId was null or undefined when calling cancelApproval.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/approvals/{approval_id}`.replace(`{${"approval_id"}}`, encodeURIComponent(String(requestParameters.approvalId))),
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
* Cancel a pending approval
*/
export function cancelApproval<T>(requestParameters: CancelApprovalRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return cancelApprovalRaw(requestParameters, requestConfig);
}

/**
 * Submit approval/rejection information
 */
function createApprovalRaw<T>(requestParameters: CreateApprovalRequest, requestConfig: runtime.TypedQueryConfig<T, Approval> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/approvals`,
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
        body: queryParameters || ApprovalRequestToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ApprovalFromJSON(body), text);
    }

    return config;
}

/**
* Submit approval/rejection information
*/
export function createApproval<T>(requestParameters: CreateApprovalRequest, requestConfig?: runtime.TypedQueryConfig<T, Approval>): QueryConfig<T> {
    return createApprovalRaw(requestParameters, requestConfig);
}

/**
 * Get the entire approval matrix for all analysis
 */
function fullApprovalMatrixRaw<T>( requestConfig: runtime.TypedQueryConfig<T, { [key: string]: { [key: string]: ApprovalStatus; }; }> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/approvals/matrix`,
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
* Get the entire approval matrix for all analysis
*/
export function fullApprovalMatrix<T>( requestConfig?: runtime.TypedQueryConfig<T, { [key: string]: { [key: string]: ApprovalStatus; }; }>): QueryConfig<T> {
    return fullApprovalMatrixRaw( requestConfig);
}

/**
 * Retrieve list of approvals for authenticated user
 */
function getApprovalsRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<Approval>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/approvals`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ApprovalFromJSON), text);
    }

    return config;
}

/**
* Retrieve list of approvals for authenticated user
*/
export function getApprovals<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<Approval>>): QueryConfig<T> {
    return getApprovalsRaw( requestConfig);
}

