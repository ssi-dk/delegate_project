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

import { exists, mapValues } from "../runtime";
import { Organization, OrganizationFromJSON, OrganizationToJSON } from "./";

/**
 *
 * @export
 * @interface Column
 */
export interface Column {
  /**
   *
   * @type {boolean}
   * @memberof Column
   */
  approvable?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Column
   */
  editable?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Column
   */
  pii?: boolean;
  /**
   *
   * @type {Array<Organization>}
   * @memberof Column
   */
  organizations?: Array<Organization>;
  /**
   *
   * @type {string}
   * @memberof Column
   */
  field_name?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof Column
   */
  approves_with?: Array<string>;
}

export function ColumnFromJSON(json: any): Column {
  return {
    approvable: !exists(json, "approvable") ? undefined : json["approvable"],
    editable: !exists(json, "editable") ? undefined : json["editable"],
    pii: !exists(json, "pii") ? undefined : json["pii"],
    organizations: !exists(json, "organizations")
      ? undefined
      : (json["organizations"] as Array<any>).map(OrganizationFromJSON),
    field_name: !exists(json, "field_name") ? undefined : json["field_name"],
    approves_with: !exists(json, "approves_with")
      ? undefined
      : json["approves_with"],
  };
}

export function ColumnToJSON(value?: Column): any {
  if (value === undefined) {
    return undefined;
  }
  return {
    approvable: value.approvable,
    editable: value.editable,
    pii: value.pii,
    organizations:
      value.organizations === undefined
        ? undefined
        : (value.organizations as Array<any>).map(OrganizationToJSON),
    field_name: value.field_name,
    approves_with: value.approves_with,
  };
}
