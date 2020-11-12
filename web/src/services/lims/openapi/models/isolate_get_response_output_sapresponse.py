# coding: utf-8

"""
    lims

    LIMS web service  # noqa: E501

    The version of the OpenAPI document: 1.0
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from web.src.services.lims.openapi.configuration import Configuration


class IsolateGetResponseOutputSapresponse(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'isolate_id': 'str',
        'isolate_approved': 'bool',
        'data': 'list[DataEntry]',
        'metadata': 'list[MetaDataEntry]',
        'success': 'bool'
    }

    attribute_map = {
        'isolate_id': 'isolateId',
        'isolate_approved': 'isolateApproved',
        'data': 'data',
        'metadata': 'metadata',
        'success': 'success'
    }

    def __init__(self, isolate_id=None, isolate_approved=None, data=None, metadata=None, success=None, local_vars_configuration=None):  # noqa: E501
        """IsolateGetResponseOutputSapresponse - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._isolate_id = None
        self._isolate_approved = None
        self._data = None
        self._metadata = None
        self._success = None
        self.discriminator = None

        if isolate_id is not None:
            self.isolate_id = isolate_id
        if isolate_approved is not None:
            self.isolate_approved = isolate_approved
        if data is not None:
            self.data = data
        if metadata is not None:
            self.metadata = metadata
        if success is not None:
            self.success = success

    @property
    def isolate_id(self):
        """Gets the isolate_id of this IsolateGetResponseOutputSapresponse.  # noqa: E501


        :return: The isolate_id of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :rtype: str
        """
        return self._isolate_id

    @isolate_id.setter
    def isolate_id(self, isolate_id):
        """Sets the isolate_id of this IsolateGetResponseOutputSapresponse.


        :param isolate_id: The isolate_id of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :type isolate_id: str
        """

        self._isolate_id = isolate_id

    @property
    def isolate_approved(self):
        """Gets the isolate_approved of this IsolateGetResponseOutputSapresponse.  # noqa: E501


        :return: The isolate_approved of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :rtype: bool
        """
        return self._isolate_approved

    @isolate_approved.setter
    def isolate_approved(self, isolate_approved):
        """Sets the isolate_approved of this IsolateGetResponseOutputSapresponse.


        :param isolate_approved: The isolate_approved of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :type isolate_approved: bool
        """

        self._isolate_approved = isolate_approved

    @property
    def data(self):
        """Gets the data of this IsolateGetResponseOutputSapresponse.  # noqa: E501


        :return: The data of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :rtype: list[DataEntry]
        """
        return self._data

    @data.setter
    def data(self, data):
        """Sets the data of this IsolateGetResponseOutputSapresponse.


        :param data: The data of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :type data: list[DataEntry]
        """

        self._data = data

    @property
    def metadata(self):
        """Gets the metadata of this IsolateGetResponseOutputSapresponse.  # noqa: E501


        :return: The metadata of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :rtype: list[MetaDataEntry]
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this IsolateGetResponseOutputSapresponse.


        :param metadata: The metadata of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :type metadata: list[MetaDataEntry]
        """

        self._metadata = metadata

    @property
    def success(self):
        """Gets the success of this IsolateGetResponseOutputSapresponse.  # noqa: E501


        :return: The success of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :rtype: bool
        """
        return self._success

    @success.setter
    def success(self, success):
        """Sets the success of this IsolateGetResponseOutputSapresponse.


        :param success: The success of this IsolateGetResponseOutputSapresponse.  # noqa: E501
        :type success: bool
        """

        self._success = success

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, IsolateGetResponseOutputSapresponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, IsolateGetResponseOutputSapresponse):
            return True

        return self.to_dict() != other.to_dict()
