# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from .base_model_ import Model
from web.src.SAP.generated.models.base_metadata import BaseMetadata
from web.src.SAP.generated.models.lims_specific_metadata import LimsSpecificMetadata
from web.src.SAP.generated.models.organization import Organization
from .. import util

from web.src.SAP.generated.models.base_metadata import BaseMetadata  # noqa: E501
from web.src.SAP.generated.models.lims_specific_metadata import LimsSpecificMetadata  # noqa: E501
from web.src.SAP.generated.models.organization import Organization  # noqa: E501

class LimsMetadata(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, isolate_id=None, sequence_id=None, sequence_filename=None, institution=None, project_number=None, project_title=None, sampling_date=None, received_date=None, run_id=None, public=None, provided_species=None, primary_isolate=None, fud_number=None, cluster_id=None, epi_export=None, chr_number=None, aut_number=None, product_type=None, product=None, origin_country=None, animal_species=None, sample_info=None):  # noqa: E501
        """LimsMetadata - a model defined in OpenAPI

        :param isolate_id: The isolate_id of this LimsMetadata.  # noqa: E501
        :type isolate_id: str
        :param sequence_id: The sequence_id of this LimsMetadata.  # noqa: E501
        :type sequence_id: str
        :param sequence_filename: The sequence_filename of this LimsMetadata.  # noqa: E501
        :type sequence_filename: str
        :param institution: The institution of this LimsMetadata.  # noqa: E501
        :type institution: Organization
        :param project_number: The project_number of this LimsMetadata.  # noqa: E501
        :type project_number: float
        :param project_title: The project_title of this LimsMetadata.  # noqa: E501
        :type project_title: str
        :param sampling_date: The sampling_date of this LimsMetadata.  # noqa: E501
        :type sampling_date: str
        :param received_date: The received_date of this LimsMetadata.  # noqa: E501
        :type received_date: str
        :param run_id: The run_id of this LimsMetadata.  # noqa: E501
        :type run_id: str
        :param public: The public of this LimsMetadata.  # noqa: E501
        :type public: str
        :param provided_species: The provided_species of this LimsMetadata.  # noqa: E501
        :type provided_species: str
        :param primary_isolate: The primary_isolate of this LimsMetadata.  # noqa: E501
        :type primary_isolate: str
        :param fud_number: The fud_number of this LimsMetadata.  # noqa: E501
        :type fud_number: str
        :param cluster_id: The cluster_id of this LimsMetadata.  # noqa: E501
        :type cluster_id: str
        :param epi_export: The epi_export of this LimsMetadata.  # noqa: E501
        :type epi_export: str
        :param chr_number: The chr_number of this LimsMetadata.  # noqa: E501
        :type chr_number: float
        :param aut_number: The aut_number of this LimsMetadata.  # noqa: E501
        :type aut_number: str
        :param product_type: The product_type of this LimsMetadata.  # noqa: E501
        :type product_type: str
        :param product: The product of this LimsMetadata.  # noqa: E501
        :type product: str
        :param origin_country: The origin_country of this LimsMetadata.  # noqa: E501
        :type origin_country: str
        :param animal_species: The animal_species of this LimsMetadata.  # noqa: E501
        :type animal_species: str
        :param sample_info: The sample_info of this LimsMetadata.  # noqa: E501
        :type sample_info: str
        """
        self.openapi_types = {
            'isolate_id': str,
            'sequence_id': str,
            'sequence_filename': str,
            'institution': Organization,
            'project_number': float,
            'project_title': str,
            'sampling_date': str,
            'received_date': str,
            'run_id': str,
            'public': str,
            'provided_species': str,
            'primary_isolate': str,
            'fud_number': str,
            'cluster_id': str,
            'epi_export': str,
            'chr_number': float,
            'aut_number': str,
            'product_type': str,
            'product': str,
            'origin_country': str,
            'animal_species': str,
            'sample_info': str
        }

        self.attribute_map = {
            'isolate_id': 'isolate_id',
            'sequence_id': 'sequence_id',
            'sequence_filename': 'sequence_filename',
            'institution': 'institution',
            'project_number': 'project_number',
            'project_title': 'project_title',
            'sampling_date': 'sampling_date',
            'received_date': 'received_date',
            'run_id': 'run_id',
            'public': 'public',
            'provided_species': 'provided_species',
            'primary_isolate': 'primary_isolate',
            'fud_number': 'fud_number',
            'cluster_id': 'cluster_id',
            'epi_export': 'epi_export',
            'chr_number': 'chr_number',
            'aut_number': 'aut_number',
            'product_type': 'product_type',
            'product': 'product',
            'origin_country': 'origin_country',
            'animal_species': 'animal_species',
            'sample_info': 'sample_info'
        }

        self._isolate_id = isolate_id
        self._sequence_id = sequence_id
        self._sequence_filename = sequence_filename
        self._institution = institution
        self._project_number = project_number
        self._project_title = project_title
        self._sampling_date = sampling_date
        self._received_date = received_date
        self._run_id = run_id
        self._public = public
        self._provided_species = provided_species
        self._primary_isolate = primary_isolate
        self._fud_number = fud_number
        self._cluster_id = cluster_id
        self._epi_export = epi_export
        self._chr_number = chr_number
        self._aut_number = aut_number
        self._product_type = product_type
        self._product = product
        self._origin_country = origin_country
        self._animal_species = animal_species
        self._sample_info = sample_info

    @classmethod
    def from_dict(cls, dikt) -> 'LimsMetadata':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The LimsMetadata of this LimsMetadata.  # noqa: E501
        :rtype: LimsMetadata
        """
        return util.deserialize_model(dikt, cls)

    @property
    def isolate_id(self):
        """Gets the isolate_id of this LimsMetadata.


        :return: The isolate_id of this LimsMetadata.
        :rtype: str
        """
        return self._isolate_id

    @isolate_id.setter
    def isolate_id(self, isolate_id):
        """Sets the isolate_id of this LimsMetadata.


        :param isolate_id: The isolate_id of this LimsMetadata.
        :type isolate_id: str
        """
        if isolate_id is None:
            raise ValueError("Invalid value for `isolate_id`, must not be `None`")  # noqa: E501

        self._isolate_id = isolate_id

    @property
    def sequence_id(self):
        """Gets the sequence_id of this LimsMetadata.


        :return: The sequence_id of this LimsMetadata.
        :rtype: str
        """
        return self._sequence_id

    @sequence_id.setter
    def sequence_id(self, sequence_id):
        """Sets the sequence_id of this LimsMetadata.


        :param sequence_id: The sequence_id of this LimsMetadata.
        :type sequence_id: str
        """
        if sequence_id is None:
            raise ValueError("Invalid value for `sequence_id`, must not be `None`")  # noqa: E501

        self._sequence_id = sequence_id

    @property
    def sequence_filename(self):
        """Gets the sequence_filename of this LimsMetadata.


        :return: The sequence_filename of this LimsMetadata.
        :rtype: str
        """
        return self._sequence_filename

    @sequence_filename.setter
    def sequence_filename(self, sequence_filename):
        """Sets the sequence_filename of this LimsMetadata.


        :param sequence_filename: The sequence_filename of this LimsMetadata.
        :type sequence_filename: str
        """
        if sequence_filename is None:
            raise ValueError("Invalid value for `sequence_filename`, must not be `None`")  # noqa: E501

        self._sequence_filename = sequence_filename

    @property
    def institution(self):
        """Gets the institution of this LimsMetadata.


        :return: The institution of this LimsMetadata.
        :rtype: Organization
        """
        return self._institution

    @institution.setter
    def institution(self, institution):
        """Sets the institution of this LimsMetadata.


        :param institution: The institution of this LimsMetadata.
        :type institution: Organization
        """
        if institution is None:
            raise ValueError("Invalid value for `institution`, must not be `None`")  # noqa: E501

        self._institution = institution

    @property
    def project_number(self):
        """Gets the project_number of this LimsMetadata.


        :return: The project_number of this LimsMetadata.
        :rtype: float
        """
        return self._project_number

    @project_number.setter
    def project_number(self, project_number):
        """Sets the project_number of this LimsMetadata.


        :param project_number: The project_number of this LimsMetadata.
        :type project_number: float
        """

        self._project_number = project_number

    @property
    def project_title(self):
        """Gets the project_title of this LimsMetadata.


        :return: The project_title of this LimsMetadata.
        :rtype: str
        """
        return self._project_title

    @project_title.setter
    def project_title(self, project_title):
        """Sets the project_title of this LimsMetadata.


        :param project_title: The project_title of this LimsMetadata.
        :type project_title: str
        """

        self._project_title = project_title

    @property
    def sampling_date(self):
        """Gets the sampling_date of this LimsMetadata.


        :return: The sampling_date of this LimsMetadata.
        :rtype: str
        """
        return self._sampling_date

    @sampling_date.setter
    def sampling_date(self, sampling_date):
        """Sets the sampling_date of this LimsMetadata.


        :param sampling_date: The sampling_date of this LimsMetadata.
        :type sampling_date: str
        """

        self._sampling_date = sampling_date

    @property
    def received_date(self):
        """Gets the received_date of this LimsMetadata.


        :return: The received_date of this LimsMetadata.
        :rtype: str
        """
        return self._received_date

    @received_date.setter
    def received_date(self, received_date):
        """Sets the received_date of this LimsMetadata.


        :param received_date: The received_date of this LimsMetadata.
        :type received_date: str
        """
        if received_date is None:
            raise ValueError("Invalid value for `received_date`, must not be `None`")  # noqa: E501

        self._received_date = received_date

    @property
    def run_id(self):
        """Gets the run_id of this LimsMetadata.


        :return: The run_id of this LimsMetadata.
        :rtype: str
        """
        return self._run_id

    @run_id.setter
    def run_id(self, run_id):
        """Sets the run_id of this LimsMetadata.


        :param run_id: The run_id of this LimsMetadata.
        :type run_id: str
        """
        if run_id is None:
            raise ValueError("Invalid value for `run_id`, must not be `None`")  # noqa: E501

        self._run_id = run_id

    @property
    def public(self):
        """Gets the public of this LimsMetadata.


        :return: The public of this LimsMetadata.
        :rtype: str
        """
        return self._public

    @public.setter
    def public(self, public):
        """Sets the public of this LimsMetadata.


        :param public: The public of this LimsMetadata.
        :type public: str
        """

        self._public = public

    @property
    def provided_species(self):
        """Gets the provided_species of this LimsMetadata.


        :return: The provided_species of this LimsMetadata.
        :rtype: str
        """
        return self._provided_species

    @provided_species.setter
    def provided_species(self, provided_species):
        """Sets the provided_species of this LimsMetadata.


        :param provided_species: The provided_species of this LimsMetadata.
        :type provided_species: str
        """
        if provided_species is None:
            raise ValueError("Invalid value for `provided_species`, must not be `None`")  # noqa: E501

        self._provided_species = provided_species

    @property
    def primary_isolate(self):
        """Gets the primary_isolate of this LimsMetadata.


        :return: The primary_isolate of this LimsMetadata.
        :rtype: str
        """
        return self._primary_isolate

    @primary_isolate.setter
    def primary_isolate(self, primary_isolate):
        """Sets the primary_isolate of this LimsMetadata.


        :param primary_isolate: The primary_isolate of this LimsMetadata.
        :type primary_isolate: str
        """
        if primary_isolate is None:
            raise ValueError("Invalid value for `primary_isolate`, must not be `None`")  # noqa: E501

        self._primary_isolate = primary_isolate

    @property
    def fud_number(self):
        """Gets the fud_number of this LimsMetadata.


        :return: The fud_number of this LimsMetadata.
        :rtype: str
        """
        return self._fud_number

    @fud_number.setter
    def fud_number(self, fud_number):
        """Sets the fud_number of this LimsMetadata.


        :param fud_number: The fud_number of this LimsMetadata.
        :type fud_number: str
        """

        self._fud_number = fud_number

    @property
    def cluster_id(self):
        """Gets the cluster_id of this LimsMetadata.


        :return: The cluster_id of this LimsMetadata.
        :rtype: str
        """
        return self._cluster_id

    @cluster_id.setter
    def cluster_id(self, cluster_id):
        """Sets the cluster_id of this LimsMetadata.


        :param cluster_id: The cluster_id of this LimsMetadata.
        :type cluster_id: str
        """

        self._cluster_id = cluster_id

    @property
    def epi_export(self):
        """Gets the epi_export of this LimsMetadata.


        :return: The epi_export of this LimsMetadata.
        :rtype: str
        """
        return self._epi_export

    @epi_export.setter
    def epi_export(self, epi_export):
        """Sets the epi_export of this LimsMetadata.


        :param epi_export: The epi_export of this LimsMetadata.
        :type epi_export: str
        """

        self._epi_export = epi_export

    @property
    def chr_number(self):
        """Gets the chr_number of this LimsMetadata.


        :return: The chr_number of this LimsMetadata.
        :rtype: float
        """
        return self._chr_number

    @chr_number.setter
    def chr_number(self, chr_number):
        """Sets the chr_number of this LimsMetadata.


        :param chr_number: The chr_number of this LimsMetadata.
        :type chr_number: float
        """

        self._chr_number = chr_number

    @property
    def aut_number(self):
        """Gets the aut_number of this LimsMetadata.


        :return: The aut_number of this LimsMetadata.
        :rtype: str
        """
        return self._aut_number

    @aut_number.setter
    def aut_number(self, aut_number):
        """Sets the aut_number of this LimsMetadata.


        :param aut_number: The aut_number of this LimsMetadata.
        :type aut_number: str
        """

        self._aut_number = aut_number

    @property
    def product_type(self):
        """Gets the product_type of this LimsMetadata.


        :return: The product_type of this LimsMetadata.
        :rtype: str
        """
        return self._product_type

    @product_type.setter
    def product_type(self, product_type):
        """Sets the product_type of this LimsMetadata.


        :param product_type: The product_type of this LimsMetadata.
        :type product_type: str
        """

        self._product_type = product_type

    @property
    def product(self):
        """Gets the product of this LimsMetadata.


        :return: The product of this LimsMetadata.
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this LimsMetadata.


        :param product: The product of this LimsMetadata.
        :type product: str
        """

        self._product = product

    @property
    def origin_country(self):
        """Gets the origin_country of this LimsMetadata.


        :return: The origin_country of this LimsMetadata.
        :rtype: str
        """
        return self._origin_country

    @origin_country.setter
    def origin_country(self, origin_country):
        """Sets the origin_country of this LimsMetadata.


        :param origin_country: The origin_country of this LimsMetadata.
        :type origin_country: str
        """

        self._origin_country = origin_country

    @property
    def animal_species(self):
        """Gets the animal_species of this LimsMetadata.


        :return: The animal_species of this LimsMetadata.
        :rtype: str
        """
        return self._animal_species

    @animal_species.setter
    def animal_species(self, animal_species):
        """Sets the animal_species of this LimsMetadata.


        :param animal_species: The animal_species of this LimsMetadata.
        :type animal_species: str
        """

        self._animal_species = animal_species

    @property
    def sample_info(self):
        """Gets the sample_info of this LimsMetadata.


        :return: The sample_info of this LimsMetadata.
        :rtype: str
        """
        return self._sample_info

    @sample_info.setter
    def sample_info(self, sample_info):
        """Sets the sample_info of this LimsMetadata.


        :param sample_info: The sample_info of this LimsMetadata.
        :type sample_info: str
        """

        self._sample_info = sample_info