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
/**
 *
 * @export
 * @interface UserDefinedView
 */
export interface UserDefinedView {
  /**
   *
   * @type {string}
   * @memberof UserDefinedView
   */
  name?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserDefinedView
   */
  columns?: Array<string>;
}

export function UserDefinedViewFromJSON(json: any): UserDefinedView {
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    columns: !exists(json, "columns") ? undefined : json["columns"],
  };
}

export function UserDefinedViewToJSON(value?: UserDefinedView): any {
  if (value === undefined) {
    return undefined;
  }
  return {
    name: value.name,
    columns: value.columns,
  };
}
