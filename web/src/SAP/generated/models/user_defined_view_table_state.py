# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from .base_model_ import Model
from web.src.SAP.generated.models.user_defined_view_table_state_column_resizing import UserDefinedViewTableStateColumnResizing
from web.src.SAP.generated.models.user_defined_view_table_state_sort_by import UserDefinedViewTableStateSortBy
from .. import util

from web.src.SAP.generated.models.user_defined_view_table_state_column_resizing import UserDefinedViewTableStateColumnResizing  # noqa: E501
from web.src.SAP.generated.models.user_defined_view_table_state_sort_by import UserDefinedViewTableStateSortBy  # noqa: E501

class UserDefinedViewTableState(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, hidden_columns=None, column_resizing=None, sort_by=None, column_order=None):  # noqa: E501
        """UserDefinedViewTableState - a model defined in OpenAPI

        :param hidden_columns: The hidden_columns of this UserDefinedViewTableState.  # noqa: E501
        :type hidden_columns: List[str]
        :param column_resizing: The column_resizing of this UserDefinedViewTableState.  # noqa: E501
        :type column_resizing: UserDefinedViewTableStateColumnResizing
        :param sort_by: The sort_by of this UserDefinedViewTableState.  # noqa: E501
        :type sort_by: List[UserDefinedViewTableStateSortBy]
        :param column_order: The column_order of this UserDefinedViewTableState.  # noqa: E501
        :type column_order: List[str]
        """
        self.openapi_types = {
            'hidden_columns': List[str],
            'column_resizing': UserDefinedViewTableStateColumnResizing,
            'sort_by': List[UserDefinedViewTableStateSortBy],
            'column_order': List[str]
        }

        self.attribute_map = {
            'hidden_columns': 'hiddenColumns',
            'column_resizing': 'columnResizing',
            'sort_by': 'sortBy',
            'column_order': 'columnOrder'
        }

        self._hidden_columns = hidden_columns
        self._column_resizing = column_resizing
        self._sort_by = sort_by
        self._column_order = column_order

    @classmethod
    def from_dict(cls, dikt) -> 'UserDefinedViewTableState':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserDefinedView_tableState of this UserDefinedViewTableState.  # noqa: E501
        :rtype: UserDefinedViewTableState
        """
        return util.deserialize_model(dikt, cls)

    @property
    def hidden_columns(self):
        """Gets the hidden_columns of this UserDefinedViewTableState.


        :return: The hidden_columns of this UserDefinedViewTableState.
        :rtype: List[str]
        """
        return self._hidden_columns

    @hidden_columns.setter
    def hidden_columns(self, hidden_columns):
        """Sets the hidden_columns of this UserDefinedViewTableState.


        :param hidden_columns: The hidden_columns of this UserDefinedViewTableState.
        :type hidden_columns: List[str]
        """

        self._hidden_columns = hidden_columns

    @property
    def column_resizing(self):
        """Gets the column_resizing of this UserDefinedViewTableState.


        :return: The column_resizing of this UserDefinedViewTableState.
        :rtype: UserDefinedViewTableStateColumnResizing
        """
        return self._column_resizing

    @column_resizing.setter
    def column_resizing(self, column_resizing):
        """Sets the column_resizing of this UserDefinedViewTableState.


        :param column_resizing: The column_resizing of this UserDefinedViewTableState.
        :type column_resizing: UserDefinedViewTableStateColumnResizing
        """

        self._column_resizing = column_resizing

    @property
    def sort_by(self):
        """Gets the sort_by of this UserDefinedViewTableState.


        :return: The sort_by of this UserDefinedViewTableState.
        :rtype: List[UserDefinedViewTableStateSortBy]
        """
        return self._sort_by

    @sort_by.setter
    def sort_by(self, sort_by):
        """Sets the sort_by of this UserDefinedViewTableState.


        :param sort_by: The sort_by of this UserDefinedViewTableState.
        :type sort_by: List[UserDefinedViewTableStateSortBy]
        """

        self._sort_by = sort_by

    @property
    def column_order(self):
        """Gets the column_order of this UserDefinedViewTableState.


        :return: The column_order of this UserDefinedViewTableState.
        :rtype: List[str]
        """
        return self._column_order

    @column_order.setter
    def column_order(self, column_order):
        """Sets the column_order of this UserDefinedViewTableState.


        :param column_order: The column_order of this UserDefinedViewTableState.
        :type column_order: List[str]
        """

        self._column_order = column_order
