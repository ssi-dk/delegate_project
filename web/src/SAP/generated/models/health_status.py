# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from web.src.SAP.generated.models.base_model_ import Model
from web.src.SAP.generated import util


class HealthStatus(Model):



    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
    Do not edit the class manually.
    """

    """
    allowed enum values
    """
    UNHEALTHY = "Unhealthy"
    DEGRADED = "Degraded"
    HEALTHY = "Healthy"
    def __init__(self):  # noqa: E501
        """HealthStatus - a model defined in OpenAPI

        """
        self.openapi_types = {
        }

        self.attribute_map = {
        }

    @classmethod
    def from_dict(cls, dikt):
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The HealthStatus of this HealthStatus.  # noqa: E501
        :rtype: HealthStatus
        """
        return util.deserialize_model(dikt, cls)