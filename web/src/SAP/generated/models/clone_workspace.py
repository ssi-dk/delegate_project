# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from web.src.SAP.generated.models.base_model_ import Model
from web.src.SAP.generated import util


class CloneWorkspace(Model):



    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
    Do not edit the class manually.
    """

    def __init__(self, name=None, id=None):  # noqa: E501
        """CloneWorkspace - a model defined in OpenAPI

        :param name: The name of this CloneWorkspace.  # noqa: E501
        :type name: str
        :param id: The id of this CloneWorkspace.  # noqa: E501
        :type id: str
        """
        self.openapi_types = {
            'name': str,
            'id': str,
        }

        self.attribute_map = {
            'name': 'name',
            'id': 'id',
        }

        self._name = name
        self._id = id

    @classmethod
    def from_dict(cls, dikt):
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The CloneWorkspace of this CloneWorkspace.  # noqa: E501
        :rtype: CloneWorkspace
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self):
        """Gets the name of this CloneWorkspace.


        :return: The name of this CloneWorkspace.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this CloneWorkspace.


        :param name: The name of this CloneWorkspace.
        :type name: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def id(self):
        """Gets the id of this CloneWorkspace.


        :return: The id of this CloneWorkspace.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CloneWorkspace.


        :param id: The id of this CloneWorkspace.
        :type id: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id
