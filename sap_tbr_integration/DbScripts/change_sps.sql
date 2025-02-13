
/***** Change stored procedure *****/
USE [IB_Tarmbakdata]
GO


DROP PROCEDURE IF EXISTS [FVST_DTU].[UpdateIsolate]
GO

CREATE PROCEDURE [FVST_DTU].[UpdateIsolate](
    @IsolateId [nvarchar](14),
    @RunID [nvarchar](50),
    @Serotype [nvarchar](50) NULL,
    @ST [smallint] NULL,
    @FudNr [nvarchar](10) NULL,
    @ClusterId [nvarchar](50) NULL,
    @Species [nvarchar](50) NULL,
    @Subspecies [nvarchar](50) NULL,
    @Pathotype [nvarchar](10) NULL,
    @Adheasion [nvarchar](50) NULL,
    @Toxin [nvarchar](50) NULL,
    @Resistensgener [nvarchar](200) NULL,
    @AmrProfile [nvarchar](10) NULL,
    @Amikacin [nvarchar](10) NULL,
    @Ampicillin [nvarchar](10) NULL,
    @Azithromycin [nvarchar](10) NULL,
    @Cefepime [nvarchar](10) NULL,
    @Cefotaxime [nvarchar](10) NULL,
    @CefotaximeClavulanat [nvarchar](10) NULL,
    @Cefoxitin [nvarchar](10) NULL,
    @Ceftazidime [nvarchar](10) NULL,
    @CeftazidimeClavulanat [nvarchar](10) NULL,
    @Chloramphenicol [nvarchar](10) NULL,
    @Ciprofloxacin [nvarchar](10) NULL,
    @Clindamycin [nvarchar](10) NULL,
    @Colistin [nvarchar](10) NULL,
    @Daptomycin [nvarchar](10) NULL,
    @Ertapenem [nvarchar](10) NULL,
    @Erythromycin [nvarchar](10) NULL,
    @Fusidinsyre [nvarchar](10) NULL,
    @Gentamicin [nvarchar](10) NULL,
    @Imipenem [nvarchar](10) NULL,
    @Kanamycin [nvarchar](10) NULL,
    @Linezolid [nvarchar](10) NULL,
    @Meropenem [nvarchar](10) NULL,
    @Mupirocin [nvarchar](10) NULL,
    @Nalidixan [nvarchar](10) NULL,
    @Penicillin [nvarchar](10) NULL,
    @CeftazidimeClavulanatn [nvarchar](10) NULL,
    @Rifampin [nvarchar](10) NULL,
    @Streptomycin [nvarchar](10) NULL,
    @Sulfamethoxazole [nvarchar](10) NULL,
    @Teicoplanin [nvarchar](10) NULL,
    @Temocilin [nvarchar](10) NULL,
    @Tetracyklin [nvarchar](10) NULL,
    @Tiamulin [nvarchar](10) NULL,
    @Tigecycline [nvarchar](10) NULL,
    @Trimethoprim [nvarchar](10) NULL,
    @Vancomycin [nvarchar](10) NULL,
    @ResfinderVersion [nvarchar](10) NULL,
    @DateApprovedResistens [datetime] NULL,
    @DateApprovedSerotype [datetime] NULL,
    @DateApprovedQC [datetime] NULL,
    @DateApprovedST [datetime] NULL,
    @DateApprovedCluster [datetime] NULL,
    @DateApprovedToxin [datetime] NULL,
    @DateEpi [datetime] NULL,
	@TRST [nvarchar](10) NULL,
	@tcdA [nvarchar](10) NULL,
	@tcdB [nvarchar](10) NULL,
	@cdtAB [nvarchar](10) NULL,
	@tcdC_deletion [nvarchar](2) NULL, 
	@tcdC_117 [nvarchar](10) NULL,
	@tcdC_184T [nvarchar](10) NULL,
	@tcdC_A117T [nvarchar](10) NULL
)
AS
BEGIN
    UPDATE FVST_DTU.vw_Isolater_SAP
    SET
        Serotype = IsNull(@Serotype, Serotype),
        ST = IsNull(@ST, ST),
        RunID = IsNull(@RunID, RunID),
        FUDNR = IsNull(@FudNr, FUDNR),
        ClusterID = IsNull(@ClusterId, ClusterID),
        Species = IsNull(@Species, Species),
        Subspecies = IsNull(@Subspecies, Subspecies),
        pathotype = IsNull(@Pathotype, pathotype),
        Adheasion = IsNull(@Adheasion, Adheasion),
        Toxin = IsNull(@Toxin, Toxin),
        Dato_godkendt_serotype = IsNull(@DateApprovedSerotype, Dato_godkendt_serotype),
        Dato_godkendt_QC = IsNull(@DateApprovedQC, Dato_godkendt_QC),
        Dato_godkendt_ST = IsNull(@DateApprovedST, Dato_godkendt_ST),
        Dato_godkendt_toxin = IsNull(@DateApprovedToxin, Dato_godkendt_toxin),
        Dato_godkendt_cluster = IsNull(@DateApprovedCluster, Dato_godkendt_cluster),
        Dato_Epi = IsNull(@DateEpi, Dato_Epi)
    WHERE isolatnr = @IsolateId

	UPDATE FVST_DTU.vw_CDI_SAP
	SET
	    [TRST] = IsNull(@TRST, TRST),
	    [tcdA] = IsNull(@tcdA, tcdA),
	    [tcdB] = IsNull(@tcdB, tcdB),
	    [cdtAB] = IsNull(@cdtAB, cdtAB),
	    [tcdC_deletion] = IsNull(@tcdC_deletion, tcdC_deletion),
	    [tcdC_117] = IsNull(@tcdC_117, tcdC_117),
	    [tcdC_184T] = IsNull(@tcdC_184T, tcdC_184T),
	    [tcdC_A117T] = IsNull(@tcdC_A117T, tcdC_A117T)
	WHERE isolatnr = @IsolateId

    UPDATE FVST_DTU.vw_GenoRes_SAP
    SET
        Resistensgener = IsNull(@Resistensgener, Resistensgener),
        AMR_profil = IsNull(@AmrProfile, AMR_profil),
        AMR_Ami = IsNull(@Amikacin, AMR_Ami),
        AMR_Amp = IsNull(@Ampicillin, AMR_Amp),
        AMR_Azi = IsNull(@Azithromycin, AMR_Azi),
        AMR_Fep = IsNull(@Cefepime, AMR_Fep),
        AMR_Fot = IsNull(@Cefotaxime, AMR_Fot),
        AMR_F_C = IsNull(@CefotaximeClavulanat, AMR_F_C),
        AMR_Fox = IsNull(@Cefoxitin, AMR_Fox),
        AMR_Taz = IsNull(@Ceftazidime, AMR_Taz),
        AMR_T_C = IsNull(@CeftazidimeClavulanat, AMR_T_C),
        AMR_Chl = IsNull(@Chloramphenicol, AMR_Chl),
        AMR_Cip = IsNull(@Ciprofloxacin, AMR_Cip),
        AMR_Cli = IsNull(@Clindamycin, AMR_Cli),
        AMR_Col = IsNull(@Colistin, AMR_Col),
        AMR_Dap = IsNull(@Daptomycin, AMR_Dap),
        AMR_Etp = IsNull(@Ertapenem, AMR_Etp),
        AMR_Ery = IsNull(@Erythromycin, AMR_Ery),
        AMR_Fus = IsNull(@Fusidinsyre, AMR_Fus),
        AMR_Gen = IsNull(@Gentamicin, AMR_Gen),
        AMR_Imi = IsNull(@Imipenem, AMR_Imi),
        AMR_Kan = IsNull(@Kanamycin, AMR_Kan),
        AMR_Lzd = IsNull(@Linezolid, AMR_Lzd),
        AMR_Mero = IsNull(@Meropenem, AMR_Mero),
        AMR_Mup = IsNull(@Mupirocin, AMR_Mup),
        AMR_Nal = IsNull(@Nalidixan, AMR_Nal),
        AMR_Pen = IsNull(@Penicillin, AMR_Pen),
        AMR_Syn = IsNull(@CeftazidimeClavulanatn, AMR_Syn),
        AMR_Rif = IsNull(@Rifampin, AMR_Rif),
        AMR_Str = IsNull(@Streptomycin, AMR_Str),
        AMR_Sul = IsNull(@Sulfamethoxazole, AMR_Sul),
        AMR_Tei = IsNull(@Teicoplanin, AMR_Tei),
        AMR_Trm = IsNull(@Temocilin, AMR_Trm),
        AMR_Tet = IsNull(@Tetracyklin, AMR_Tet),
        AMR_Tia = IsNull(@Tiamulin, AMR_Tia),
        AMR_Tgc = IsNull(@Tigecycline, AMR_Tgc),
        AMR_Tmp = IsNull(@Trimethoprim, AMR_Tmp),
        AMR_Van = IsNull(@Vancomycin, AMR_Van),
        ResfinderVersion = IsNull(@ResfinderVersion, ResfinderVersion),
        Dato_godkendt_resistens = IsNull(@DateApprovedResistens, Dato_godkendt_resistens)
    WHERE isolatnr = @IsolateId
END
GO
