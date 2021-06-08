# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from web.src.SAP.generated.models.base_model_ import Model
from web.src.SAP.generated.models.lims_metadata import LimsMetadata
from web.src.SAP.generated.models.organization import Organization
from web.src.SAP.generated.models.tbr_metadata import TbrMetadata
from web.src.SAP.generated import util

from web.src.SAP.generated.models.lims_metadata import LimsMetadata  # noqa: E501
from web.src.SAP.generated.models.organization import Organization  # noqa: E501
from web.src.SAP.generated.models.tbr_metadata import TbrMetadata  # noqa: E501

class MetadataReloadResponse(Model):



    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
    Do not edit the class manually.
    """

    def __init__(self, sequence_id=None, isolate_id=None, institution=None, project_number=None, project_title=None, sampling_date=None, received_date=None, sofi_date=None, run_id=None, public=None, provided_species=None, primary_isolate=None, cpr_nr=None, gender=None, name=None, age=None, travel=None, travel_country=None, run_date=None, kma_received_date=None, kma=None, region=None, fud_number=None, cluster_id=None, epi_export=None, chr_number=None, cvr_number=None, aut_number=None, product_type=None, product=None, origin_country=None, animal_species=None, sample_info=None):  # noqa: E501
        """MetadataReloadResponse - a model defined in OpenAPI

        :param sequence_id: The sequence_id of this MetadataReloadResponse.  # noqa: E501
        :type sequence_id: str
        :param isolate_id: The isolate_id of this MetadataReloadResponse.  # noqa: E501
        :type isolate_id: str
        :param institution: The institution of this MetadataReloadResponse.  # noqa: E501
        :type institution: Organization
        :param project_number: The project_number of this MetadataReloadResponse.  # noqa: E501
        :type project_number: float
        :param project_title: The project_title of this MetadataReloadResponse.  # noqa: E501
        :type project_title: str
        :param sampling_date: The sampling_date of this MetadataReloadResponse.  # noqa: E501
        :type sampling_date: datetime
        :param received_date: The received_date of this MetadataReloadResponse.  # noqa: E501
        :type received_date: datetime
        :param sofi_date: The sofi_date of this MetadataReloadResponse.  # noqa: E501
        :type sofi_date: datetime
        :param run_id: The run_id of this MetadataReloadResponse.  # noqa: E501
        :type run_id: str
        :param public: The public of this MetadataReloadResponse.  # noqa: E501
        :type public: str
        :param provided_species: The provided_species of this MetadataReloadResponse.  # noqa: E501
        :type provided_species: str
        :param primary_isolate: The primary_isolate of this MetadataReloadResponse.  # noqa: E501
        :type primary_isolate: bool
        :param cpr_nr: The cpr_nr of this MetadataReloadResponse.  # noqa: E501
        :type cpr_nr: str
        :param gender: The gender of this MetadataReloadResponse.  # noqa: E501
        :type gender: str
        :param name: The name of this MetadataReloadResponse.  # noqa: E501
        :type name: str
        :param age: The age of this MetadataReloadResponse.  # noqa: E501
        :type age: int
        :param travel: The travel of this MetadataReloadResponse.  # noqa: E501
        :type travel: str
        :param travel_country: The travel_country of this MetadataReloadResponse.  # noqa: E501
        :type travel_country: str
        :param run_date: The run_date of this MetadataReloadResponse.  # noqa: E501
        :type run_date: datetime
        :param kma_received_date: The kma_received_date of this MetadataReloadResponse.  # noqa: E501
        :type kma_received_date: datetime
        :param kma: The kma of this MetadataReloadResponse.  # noqa: E501
        :type kma: str
        :param region: The region of this MetadataReloadResponse.  # noqa: E501
        :type region: str
        :param fud_number: The fud_number of this MetadataReloadResponse.  # noqa: E501
        :type fud_number: str
        :param cluster_id: The cluster_id of this MetadataReloadResponse.  # noqa: E501
        :type cluster_id: str
        :param epi_export: The epi_export of this MetadataReloadResponse.  # noqa: E501
        :type epi_export: str
        :param chr_number: The chr_number of this MetadataReloadResponse.  # noqa: E501
        :type chr_number: str
        :param cvr_number: The cvr_number of this MetadataReloadResponse.  # noqa: E501
        :type cvr_number: str
        :param aut_number: The aut_number of this MetadataReloadResponse.  # noqa: E501
        :type aut_number: str
        :param product_type: The product_type of this MetadataReloadResponse.  # noqa: E501
        :type product_type: str
        :param product: The product of this MetadataReloadResponse.  # noqa: E501
        :type product: str
        :param origin_country: The origin_country of this MetadataReloadResponse.  # noqa: E501
        :type origin_country: str
        :param animal_species: The animal_species of this MetadataReloadResponse.  # noqa: E501
        :type animal_species: str
        :param sample_info: The sample_info of this MetadataReloadResponse.  # noqa: E501
        :type sample_info: str
        """
        self.openapi_types = {
            'sequence_id': str,
            'isolate_id': str,
            'institution': Organization,
            'project_number': float,
            'project_title': str,
            'sampling_date': datetime,
            'received_date': datetime,
            'sofi_date': datetime,
            'run_id': str,
            'public': str,
            'provided_species': str,
            'primary_isolate': bool,
            'cpr_nr': str,
            'gender': str,
            'name': str,
            'age': int,
            'travel': str,
            'travel_country': str,
            'run_date': datetime,
            'kma_received_date': datetime,
            'kma': str,
            'region': str,
            'fud_number': str,
            'cluster_id': str,
            'epi_export': str,
            'chr_number': str,
            'cvr_number': str,
            'aut_number': str,
            'product_type': str,
            'product': str,
            'origin_country': str,
            'animal_species': str,
            'sample_info': str,
        }

        self.attribute_map = {
            'sequence_id': 'sequence_id',
            'isolate_id': 'isolate_id',
            'institution': 'institution',
            'project_number': 'project_number',
            'project_title': 'project_title',
            'sampling_date': 'sampling_date',
            'received_date': 'received_date',
            'sofi_date': 'sofi_date',
            'run_id': 'run_id',
            'public': 'public',
            'provided_species': 'provided_species',
            'primary_isolate': 'primary_isolate',
            'cpr_nr': 'cpr_nr',
            'gender': 'gender',
            'name': 'name',
            'age': 'age',
            'travel': 'travel',
            'travel_country': 'travel_country',
            'run_date': 'run_date',
            'kma_received_date': 'kma_received_date',
            'kma': 'kma',
            'region': 'region',
            'fud_number': 'fud_number',
            'cluster_id': 'cluster_id',
            'epi_export': 'epi_export',
            'chr_number': 'chr_number',
            'cvr_number': 'cvr_number',
            'aut_number': 'aut_number',
            'product_type': 'product_type',
            'product': 'product',
            'origin_country': 'origin_country',
            'animal_species': 'animal_species',
            'sample_info': 'sample_info',
        }

        self._sequence_id = sequence_id
        self._isolate_id = isolate_id
        self._institution = institution
        self._project_number = project_number
        self._project_title = project_title
        self._sampling_date = sampling_date
        self._received_date = received_date
        self._sofi_date = sofi_date
        self._run_id = run_id
        self._public = public
        self._provided_species = provided_species
        self._primary_isolate = primary_isolate
        self._cpr_nr = cpr_nr
        self._gender = gender
        self._name = name
        self._age = age
        self._travel = travel
        self._travel_country = travel_country
        self._run_date = run_date
        self._kma_received_date = kma_received_date
        self._kma = kma
        self._region = region
        self._fud_number = fud_number
        self._cluster_id = cluster_id
        self._epi_export = epi_export
        self._chr_number = chr_number
        self._cvr_number = cvr_number
        self._aut_number = aut_number
        self._product_type = product_type
        self._product = product
        self._origin_country = origin_country
        self._animal_species = animal_species
        self._sample_info = sample_info

    @classmethod
    def from_dict(cls, dikt):
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The MetadataReloadResponse of this MetadataReloadResponse.  # noqa: E501
        :rtype: MetadataReloadResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def sequence_id(self):
        """Gets the sequence_id of this MetadataReloadResponse.


        :return: The sequence_id of this MetadataReloadResponse.
        :rtype: str
        """
        return self._sequence_id

    @sequence_id.setter
    def sequence_id(self, sequence_id):
        """Sets the sequence_id of this MetadataReloadResponse.


        :param sequence_id: The sequence_id of this MetadataReloadResponse.
        :type sequence_id: str
        """
        if sequence_id is None:
            raise ValueError("Invalid value for `sequence_id`, must not be `None`")  # noqa: E501

        self._sequence_id = sequence_id

    @property
    def isolate_id(self):
        """Gets the isolate_id of this MetadataReloadResponse.


        :return: The isolate_id of this MetadataReloadResponse.
        :rtype: str
        """
        return self._isolate_id

    @isolate_id.setter
    def isolate_id(self, isolate_id):
        """Sets the isolate_id of this MetadataReloadResponse.


        :param isolate_id: The isolate_id of this MetadataReloadResponse.
        :type isolate_id: str
        """
        if isolate_id is None:
            raise ValueError("Invalid value for `isolate_id`, must not be `None`")  # noqa: E501

        self._isolate_id = isolate_id

    @property
    def institution(self):
        """Gets the institution of this MetadataReloadResponse.


        :return: The institution of this MetadataReloadResponse.
        :rtype: Organization
        """
        return self._institution

    @institution.setter
    def institution(self, institution):
        """Sets the institution of this MetadataReloadResponse.


        :param institution: The institution of this MetadataReloadResponse.
        :type institution: Organization
        """
        if institution is None:
            raise ValueError("Invalid value for `institution`, must not be `None`")  # noqa: E501

        self._institution = institution

    @property
    def project_number(self):
        """Gets the project_number of this MetadataReloadResponse.


        :return: The project_number of this MetadataReloadResponse.
        :rtype: float
        """
        return self._project_number

    @project_number.setter
    def project_number(self, project_number):
        """Sets the project_number of this MetadataReloadResponse.


        :param project_number: The project_number of this MetadataReloadResponse.
        :type project_number: float
        """

        self._project_number = project_number

    @property
    def project_title(self):
        """Gets the project_title of this MetadataReloadResponse.


        :return: The project_title of this MetadataReloadResponse.
        :rtype: str
        """
        return self._project_title

    @project_title.setter
    def project_title(self, project_title):
        """Sets the project_title of this MetadataReloadResponse.


        :param project_title: The project_title of this MetadataReloadResponse.
        :type project_title: str
        """

        self._project_title = project_title

    @property
    def sampling_date(self):
        """Gets the sampling_date of this MetadataReloadResponse.


        :return: The sampling_date of this MetadataReloadResponse.
        :rtype: datetime
        """
        return self._sampling_date

    @sampling_date.setter
    def sampling_date(self, sampling_date):
        """Sets the sampling_date of this MetadataReloadResponse.


        :param sampling_date: The sampling_date of this MetadataReloadResponse.
        :type sampling_date: datetime
        """

        self._sampling_date = sampling_date

    @property
    def received_date(self):
        """Gets the received_date of this MetadataReloadResponse.


        :return: The received_date of this MetadataReloadResponse.
        :rtype: datetime
        """
        return self._received_date

    @received_date.setter
    def received_date(self, received_date):
        """Sets the received_date of this MetadataReloadResponse.


        :param received_date: The received_date of this MetadataReloadResponse.
        :type received_date: datetime
        """
        if received_date is None:
            raise ValueError("Invalid value for `received_date`, must not be `None`")  # noqa: E501

        self._received_date = received_date

    @property
    def sofi_date(self):
        """Gets the sofi_date of this MetadataReloadResponse.


        :return: The sofi_date of this MetadataReloadResponse.
        :rtype: datetime
        """
        return self._sofi_date

    @sofi_date.setter
    def sofi_date(self, sofi_date):
        """Sets the sofi_date of this MetadataReloadResponse.


        :param sofi_date: The sofi_date of this MetadataReloadResponse.
        :type sofi_date: datetime
        """

        self._sofi_date = sofi_date

    @property
    def run_id(self):
        """Gets the run_id of this MetadataReloadResponse.


        :return: The run_id of this MetadataReloadResponse.
        :rtype: str
        """
        return self._run_id

    @run_id.setter
    def run_id(self, run_id):
        """Sets the run_id of this MetadataReloadResponse.


        :param run_id: The run_id of this MetadataReloadResponse.
        :type run_id: str
        """
        if run_id is None:
            raise ValueError("Invalid value for `run_id`, must not be `None`")  # noqa: E501

        self._run_id = run_id

    @property
    def public(self):
        """Gets the public of this MetadataReloadResponse.


        :return: The public of this MetadataReloadResponse.
        :rtype: str
        """
        return self._public

    @public.setter
    def public(self, public):
        """Sets the public of this MetadataReloadResponse.


        :param public: The public of this MetadataReloadResponse.
        :type public: str
        """

        self._public = public

    @property
    def provided_species(self):
        """Gets the provided_species of this MetadataReloadResponse.


        :return: The provided_species of this MetadataReloadResponse.
        :rtype: str
        """
        return self._provided_species

    @provided_species.setter
    def provided_species(self, provided_species):
        """Sets the provided_species of this MetadataReloadResponse.


        :param provided_species: The provided_species of this MetadataReloadResponse.
        :type provided_species: str
        """
        if provided_species is None:
            raise ValueError("Invalid value for `provided_species`, must not be `None`")  # noqa: E501

        self._provided_species = provided_species

    @property
    def primary_isolate(self):
        """Gets the primary_isolate of this MetadataReloadResponse.


        :return: The primary_isolate of this MetadataReloadResponse.
        :rtype: bool
        """
        return self._primary_isolate

    @primary_isolate.setter
    def primary_isolate(self, primary_isolate):
        """Sets the primary_isolate of this MetadataReloadResponse.


        :param primary_isolate: The primary_isolate of this MetadataReloadResponse.
        :type primary_isolate: bool
        """
        if primary_isolate is None:
            raise ValueError("Invalid value for `primary_isolate`, must not be `None`")  # noqa: E501

        self._primary_isolate = primary_isolate

    @property
    def cpr_nr(self):
        """Gets the cpr_nr of this MetadataReloadResponse.


        :return: The cpr_nr of this MetadataReloadResponse.
        :rtype: str
        """
        return self._cpr_nr

    @cpr_nr.setter
    def cpr_nr(self, cpr_nr):
        """Sets the cpr_nr of this MetadataReloadResponse.


        :param cpr_nr: The cpr_nr of this MetadataReloadResponse.
        :type cpr_nr: str
        """

        self._cpr_nr = cpr_nr

    @property
    def gender(self):
        """Gets the gender of this MetadataReloadResponse.


        :return: The gender of this MetadataReloadResponse.
        :rtype: str
        """
        return self._gender

    @gender.setter
    def gender(self, gender):
        """Sets the gender of this MetadataReloadResponse.


        :param gender: The gender of this MetadataReloadResponse.
        :type gender: str
        """
        allowed_values = ["M", "K"]  # noqa: E501
        if gender not in allowed_values:
            raise ValueError(
                "Invalid value for `gender` ({0}), must be one of {1}"
                .format(gender, allowed_values)
            )

        self._gender = gender

    @property
    def name(self):
        """Gets the name of this MetadataReloadResponse.


        :return: The name of this MetadataReloadResponse.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this MetadataReloadResponse.


        :param name: The name of this MetadataReloadResponse.
        :type name: str
        """

        self._name = name

    @property
    def age(self):
        """Gets the age of this MetadataReloadResponse.


        :return: The age of this MetadataReloadResponse.
        :rtype: int
        """
        return self._age

    @age.setter
    def age(self, age):
        """Sets the age of this MetadataReloadResponse.


        :param age: The age of this MetadataReloadResponse.
        :type age: int
        """
        if age is not None and age > 128:  # noqa: E501
            raise ValueError("Invalid value for `age`, must be a value less than or equal to `128`")  # noqa: E501
        if age is not None and age < 0:  # noqa: E501
            raise ValueError("Invalid value for `age`, must be a value greater than or equal to `0`")  # noqa: E501

        self._age = age

    @property
    def travel(self):
        """Gets the travel of this MetadataReloadResponse.


        :return: The travel of this MetadataReloadResponse.
        :rtype: str
        """
        return self._travel

    @travel.setter
    def travel(self, travel):
        """Sets the travel of this MetadataReloadResponse.


        :param travel: The travel of this MetadataReloadResponse.
        :type travel: str
        """

        self._travel = travel

    @property
    def travel_country(self):
        """Gets the travel_country of this MetadataReloadResponse.


        :return: The travel_country of this MetadataReloadResponse.
        :rtype: str
        """
        return self._travel_country

    @travel_country.setter
    def travel_country(self, travel_country):
        """Sets the travel_country of this MetadataReloadResponse.


        :param travel_country: The travel_country of this MetadataReloadResponse.
        :type travel_country: str
        """

        self._travel_country = travel_country

    @property
    def run_date(self):
        """Gets the run_date of this MetadataReloadResponse.


        :return: The run_date of this MetadataReloadResponse.
        :rtype: datetime
        """
        return self._run_date

    @run_date.setter
    def run_date(self, run_date):
        """Sets the run_date of this MetadataReloadResponse.


        :param run_date: The run_date of this MetadataReloadResponse.
        :type run_date: datetime
        """
        if run_date is None:
            raise ValueError("Invalid value for `run_date`, must not be `None`")  # noqa: E501

        self._run_date = run_date

    @property
    def kma_received_date(self):
        """Gets the kma_received_date of this MetadataReloadResponse.


        :return: The kma_received_date of this MetadataReloadResponse.
        :rtype: datetime
        """
        return self._kma_received_date

    @kma_received_date.setter
    def kma_received_date(self, kma_received_date):
        """Sets the kma_received_date of this MetadataReloadResponse.


        :param kma_received_date: The kma_received_date of this MetadataReloadResponse.
        :type kma_received_date: datetime
        """

        self._kma_received_date = kma_received_date

    @property
    def kma(self):
        """Gets the kma of this MetadataReloadResponse.


        :return: The kma of this MetadataReloadResponse.
        :rtype: str
        """
        return self._kma

    @kma.setter
    def kma(self, kma):
        """Sets the kma of this MetadataReloadResponse.


        :param kma: The kma of this MetadataReloadResponse.
        :type kma: str
        """

        self._kma = kma

    @property
    def region(self):
        """Gets the region of this MetadataReloadResponse.


        :return: The region of this MetadataReloadResponse.
        :rtype: str
        """
        return self._region

    @region.setter
    def region(self, region):
        """Sets the region of this MetadataReloadResponse.


        :param region: The region of this MetadataReloadResponse.
        :type region: str
        """

        self._region = region

    @property
    def fud_number(self):
        """Gets the fud_number of this MetadataReloadResponse.


        :return: The fud_number of this MetadataReloadResponse.
        :rtype: str
        """
        return self._fud_number

    @fud_number.setter
    def fud_number(self, fud_number):
        """Sets the fud_number of this MetadataReloadResponse.


        :param fud_number: The fud_number of this MetadataReloadResponse.
        :type fud_number: str
        """

        self._fud_number = fud_number

    @property
    def cluster_id(self):
        """Gets the cluster_id of this MetadataReloadResponse.


        :return: The cluster_id of this MetadataReloadResponse.
        :rtype: str
        """
        return self._cluster_id

    @cluster_id.setter
    def cluster_id(self, cluster_id):
        """Sets the cluster_id of this MetadataReloadResponse.


        :param cluster_id: The cluster_id of this MetadataReloadResponse.
        :type cluster_id: str
        """

        self._cluster_id = cluster_id

    @property
    def epi_export(self):
        """Gets the epi_export of this MetadataReloadResponse.


        :return: The epi_export of this MetadataReloadResponse.
        :rtype: str
        """
        return self._epi_export

    @epi_export.setter
    def epi_export(self, epi_export):
        """Sets the epi_export of this MetadataReloadResponse.


        :param epi_export: The epi_export of this MetadataReloadResponse.
        :type epi_export: str
        """

        self._epi_export = epi_export

    @property
    def chr_number(self):
        """Gets the chr_number of this MetadataReloadResponse.


        :return: The chr_number of this MetadataReloadResponse.
        :rtype: str
        """
        return self._chr_number

    @chr_number.setter
    def chr_number(self, chr_number):
        """Sets the chr_number of this MetadataReloadResponse.


        :param chr_number: The chr_number of this MetadataReloadResponse.
        :type chr_number: str
        """

        self._chr_number = chr_number

    @property
    def cvr_number(self):
        """Gets the cvr_number of this MetadataReloadResponse.


        :return: The cvr_number of this MetadataReloadResponse.
        :rtype: str
        """
        return self._cvr_number

    @cvr_number.setter
    def cvr_number(self, cvr_number):
        """Sets the cvr_number of this MetadataReloadResponse.


        :param cvr_number: The cvr_number of this MetadataReloadResponse.
        :type cvr_number: str
        """

        self._cvr_number = cvr_number

    @property
    def aut_number(self):
        """Gets the aut_number of this MetadataReloadResponse.


        :return: The aut_number of this MetadataReloadResponse.
        :rtype: str
        """
        return self._aut_number

    @aut_number.setter
    def aut_number(self, aut_number):
        """Sets the aut_number of this MetadataReloadResponse.


        :param aut_number: The aut_number of this MetadataReloadResponse.
        :type aut_number: str
        """

        self._aut_number = aut_number

    @property
    def product_type(self):
        """Gets the product_type of this MetadataReloadResponse.


        :return: The product_type of this MetadataReloadResponse.
        :rtype: str
        """
        return self._product_type

    @product_type.setter
    def product_type(self, product_type):
        """Sets the product_type of this MetadataReloadResponse.


        :param product_type: The product_type of this MetadataReloadResponse.
        :type product_type: str
        """

        self._product_type = product_type

    @property
    def product(self):
        """Gets the product of this MetadataReloadResponse.


        :return: The product of this MetadataReloadResponse.
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this MetadataReloadResponse.


        :param product: The product of this MetadataReloadResponse.
        :type product: str
        """

        self._product = product

    @property
    def origin_country(self):
        """Gets the origin_country of this MetadataReloadResponse.


        :return: The origin_country of this MetadataReloadResponse.
        :rtype: str
        """
        return self._origin_country

    @origin_country.setter
    def origin_country(self, origin_country):
        """Sets the origin_country of this MetadataReloadResponse.


        :param origin_country: The origin_country of this MetadataReloadResponse.
        :type origin_country: str
        """

        self._origin_country = origin_country

    @property
    def animal_species(self):
        """Gets the animal_species of this MetadataReloadResponse.


        :return: The animal_species of this MetadataReloadResponse.
        :rtype: str
        """
        return self._animal_species

    @animal_species.setter
    def animal_species(self, animal_species):
        """Sets the animal_species of this MetadataReloadResponse.


        :param animal_species: The animal_species of this MetadataReloadResponse.
        :type animal_species: str
        """

        self._animal_species = animal_species

    @property
    def sample_info(self):
        """Gets the sample_info of this MetadataReloadResponse.


        :return: The sample_info of this MetadataReloadResponse.
        :rtype: str
        """
        return self._sample_info

    @sample_info.setter
    def sample_info(self, sample_info):
        """Sets the sample_info of this MetadataReloadResponse.


        :param sample_info: The sample_info of this MetadataReloadResponse.
        :type sample_info: str
        """

        self._sample_info = sample_info
