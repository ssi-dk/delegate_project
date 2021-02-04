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

/**
 * 
 * @export
 * @enum {string}
 */
export enum Permission {
    search = 'search',
    export = 'export',
    approve = 'approve',
    phylogeny_read = 'phylogeny.read',
    phylogeny_write = 'phylogeny.write',
    gdpr_manage = 'gdpr.manage',
    permissions_write = 'permissions.write'
}

export function PermissionFromJSON(json: any): Permission {
    return json as Permission;
}

export function PermissionToJSON(value?: Permission): any {
    return value as any;
}

