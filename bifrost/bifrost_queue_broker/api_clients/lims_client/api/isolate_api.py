"""
    lims

    LIMS web service  # noqa: E501

    The version of the OpenAPI document: 1.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from api_clients.lims_client.api_client import ApiClient, Endpoint
from api_clients.lims_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from api_clients.lims_client.model.isolate_get_request import IsolateGetRequest
from api_clients.lims_client.model.isolate_get_response import IsolateGetResponse
from api_clients.lims_client.model.isolate_update_request import IsolateUpdateRequest
from api_clients.lims_client.model.isolate_update_response import IsolateUpdateResponse


class IsolateApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __post_actions_get_isolate(
            self,
            **kwargs
        ):
            """Get isolate  # noqa: E501

            Get isolate information  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.post_actions_get_isolate(async_req=True)
            >>> result = thread.get()


            Keyword Args:
                isolate_get_request (IsolateGetRequest): Isolate Id to fetch information for. [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                IsolateGetResponse
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            return self.call_with_http_info(**kwargs)

        self.post_actions_get_isolate = Endpoint(
            settings={
                'response_type': (IsolateGetResponse,),
                'auth': [
                    'cookieAuth'
                ],
                'endpoint_path': '/actions/GetIsolate',
                'operation_id': 'post_actions_get_isolate',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'isolate_get_request',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'isolate_get_request':
                        (IsolateGetRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'isolate_get_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__post_actions_get_isolate
        )

        def __post_actions_update_isolate(
            self,
            **kwargs
        ):
            """Update isolate  # noqa: E501

            Update isolate information  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.post_actions_update_isolate(async_req=True)
            >>> result = thread.get()


            Keyword Args:
                isolate_update_request (IsolateUpdateRequest): Isolate update. [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                IsolateUpdateResponse
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            return self.call_with_http_info(**kwargs)

        self.post_actions_update_isolate = Endpoint(
            settings={
                'response_type': (IsolateUpdateResponse,),
                'auth': [
                    'cookieAuth'
                ],
                'endpoint_path': '/actions/UpdateIsolate',
                'operation_id': 'post_actions_update_isolate',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'isolate_update_request',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'isolate_update_request':
                        (IsolateUpdateRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'isolate_update_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__post_actions_update_isolate
        )
