/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import {
  useTable,
  useBlockLayout,
  Column,
  useResizeColumns,
  Row,
  useSortBy,
  useColumnOrder,
  TableState,
  IdType,
} from "react-table";
import { VariableSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { jsx } from "@emotion/react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Flex, IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import cleandeep from 'clean-deep'
import deepmerge from 'lodash.merge';
import dtStyle from "app/analysis/data-table/data-table.styles";
import { IndexableOf, NotEmpty, removeEmpty } from "utils";
import SelectionCheckBox from "./selection-check-box";
import { exportDataTable } from "./table-spy";
import { UserDefinedView } from "../../../sap-client/models";
import { StickyVariableSizeGrid } from "./sticky-variable-size-grid";
import DataTableColumnHeader from "./data-table-column-header";
import "./data-table-cell-styles.css";

export type DataTableSelection<T extends NotEmpty> = {
  [K in IndexableOf<T>]: { [k in IndexableOf<T>]: boolean };
};

type DataTableProps<T extends NotEmpty> = {
  columns: Column<T>[];
  data: T[];
  primaryKey: keyof T;
  canSelectColumn: (columnName: string) => boolean;
  canApproveColumn: (columnName: string) => boolean;
  canEditColumn: (columnName: string) => boolean;
  getDependentColumns: (columnName: keyof T) => Array<keyof T>;
  selectionClassName: string;
  approvableColumns: string[];
  onSelect: (sel: DataTableSelection<T>) => void;
  onDetailsClick: (isolateId: string) => void;
  view: UserDefinedView;
  getCellStyle: (rowId: string, columnId: string) => string;
  renderCellControl: (rowId: string, columnId: string, value: string) => JSX.Element;
};

function DataTable<T extends NotEmpty>(props: DataTableProps<T>) {
  const datagridRef = React.useRef<VariableSizeGrid>(null);

  const defaultColumn = React.useMemo(
    () => ({
      width: 140,
    }),
    []
  );
  const noop = React.useCallback(() => {}, []);

  const {
    columns,
    data,
    primaryKey,
    onSelect,
    onDetailsClick,
    selectionClassName,
    canEditColumn,
    approvableColumns,
    canSelectColumn,
    canApproveColumn,
    getDependentColumns,
    getCellStyle,
    renderCellControl,
    view,
  } = props;
  const [selection, setSelection] = React.useState({} as DataTableSelection<T>);

  const isInSelection = React.useCallback(
    (rowId, columnId) => {
      return selection[rowId] && selection[rowId][columnId];
    },
    [selection]
  );

  const [lastView, setLastView] = useState(view);

  const resolveViewState = React.useCallback(
    (s: TableState<T>) => {
      const nonEmptyState = cleandeep({...s});
      // use view as base, then play any nonEmptyState on top of it
      const merged: TableState<T> = {} as TableState<T>;
      deepmerge(merged, view, nonEmptyState) as TableState<T>;
      if (!merged?.sortBy) {
        merged.sortBy = [];
      }
      if (!merged?.columnResizing) {
        merged.columnResizing = JSON.parse(JSON.stringify(s.columnResizing));
      }
      // if the view changed, it overwrites whatever state we have
      if (view !== lastView) {
        deepmerge(merged, view) as TableState<T>;
        setLastView(view);
      }
      return merged as TableState<T>;
    },
    [view, lastView, setLastView]
  );

  const onSelectCell = React.useCallback(
    (rowId, columnId) => {
      const incSel = {
        ...selection,
        [rowId]: {
          ...(selection[rowId] || {}),
          [columnId]: !isInSelection(rowId, columnId),
        },
      };
      getDependentColumns(columnId).forEach((v) => {
        incSel[rowId][v as string] = !(
          selection[rowId] && selection[rowId][columnId]
        );
      });
      setSelection(incSel);
      onSelect(incSel);
    },
    [onSelect, isInSelection, selection, getDependentColumns]
  );

  const {
    state,
    getTableProps,
    getTableBodyProps,
    visibleColumns,
    rows,
    prepareRow,
    allColumns,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data: data ?? [],
      useControlledState: resolveViewState, 
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns,
    useColumnOrder,
    useSortBy
  );

  const { columnResizing } = state;

  // Make data table configuration externally visible
  exportDataTable(state);

  const calcTableSelectionState = React.useCallback(() => {
    const columnCount = approvableColumns.length;
    const count = Object.values(selection).reduce(
      (acc: number, val) =>
        acc + Object.values(val).reduce((a, v) => (v ? a + 1 : a), 0),
      0
    );
    if (count === 0) return { checked: false, indeterminate: false };
    if (count === columnCount * rows.length)
      return { checked: true, indeterminate: false };
    return { indeterminate: true, checked: false };
  }, [selection, rows, approvableColumns]);

  const calcRowSelectionState = React.useCallback(
    (row: Row<T>) => {
      const r = selection[row.original[primaryKey]] || {};
      const count = Object.values(r).reduce(
        (acc: number, val) => (val ? acc + 1 : acc),
        0
      );
      if (count === 0) return { checked: false, indeterminate: false };
      if (count === approvableColumns.length)
        return { checked: true, indeterminate: false };
      return { indeterminate: true, checked: false };
    },
    [selection, primaryKey, approvableColumns]
  );

  const calcColSelectionState = React.useCallback(
    (col: Column<T>) => {
      const c = Object.values(selection).filter((x) => x[col.id] === true);
      if (c.length === 0) return { checked: false, indeterminate: false };
      if (c.length === rows.length)
        return { checked: true, indeterminate: false };
      return { indeterminate: true, checked: false, visible: true };
    },
    [selection, rows]
  );

  const onSelectRow = React.useCallback(
    (row: Row<T>) => {
      const { checked } = calcRowSelectionState(row);
      const id = row.original[primaryKey];
      const cols = columns
        .filter((x) => typeof x.accessor === "string")
        .filter((x) => canApproveColumn(x.accessor as string))
        .map((x) => ({ [x.accessor as string]: !checked }))
        .reduce((acc, val) => ({ ...acc, ...val }), []);
      const incSel = { ...selection, [id]: { ...cols } };
      setSelection(incSel);
      onSelect(incSel);
    },
    [
      onSelect,
      selection,
      primaryKey,
      columns,
      calcRowSelectionState,
      canApproveColumn,
    ]
  );

  const onColumnResize = React.useCallback(
    (colIndex: number) => {
      if (datagridRef?.current?.resetAfterColumnIndex) {
        datagridRef.current.resetAfterColumnIndex(colIndex);
      }
    },
    [datagridRef]
  );

  const onSelectCol = React.useCallback(
    (col: Column<T>) => {
      const { checked } = calcColSelectionState(col);
      const sel = rows
        .map((r) => ({
          [r.original[primaryKey]]: {
            ...selection[r.original[primaryKey]],
            [col.id as string]: !checked,
          },
        }))
        .reduce((acc, val) => ({ ...acc, ...val }));
      const incSel = { ...selection, ...sel };
      getDependentColumns(col.id).forEach((c) => {
        rows
          .map((r) => r.original[primaryKey])
          .forEach((r: string) => {
            incSel[r][c as string] = !(selection[r] && selection[r][c]);
          });
      });
      setSelection(incSel);
      onSelect(incSel);
      onColumnResize(0);
    },
    [
      selection,
      primaryKey,
      rows,
      calcColSelectionState,
      onSelect,
      getDependentColumns,
      onColumnResize,
    ]
  );

  const onSelectAllRows = React.useCallback(() => {
    const { checked } = calcTableSelectionState();
    const allCols = approvableColumns
      .map((x) => ({ [x]: !checked }))
      .reduce((acc, val) => ({ ...acc, ...val }));
    const sel = rows
      .map((r) => ({ [r.original[primaryKey]]: allCols }))
      .reduce((acc, val) => ({ ...acc, ...val }));
    const incSel = { ...selection, ...sel };
    setSelection(incSel);
    onSelect(incSel);
  }, [
    selection,
    primaryKey,
    rows,
    approvableColumns,
    calcTableSelectionState,
    onSelect,
  ]);

  const rowClickHandler = React.useCallback(
    (row) => (e) => {
      onSelectRow(row);
      e.preventDefault();
      e.stopPropagation();
    },
    [onSelectRow]
  );

  const RenderCell = React.useCallback(
    ({ columnIndex, rowIndex, style }) => {
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      if (rowIndex === 0) {
        // we are the header 'row'
        const col = visibleColumns[columnIndex];
        if (!col) return <div />
        return (
          <div style={style}>
            <DataTableColumnHeader<T>
              column={col}
              columnIndex={columnIndex}
              calcColSelectionState={calcColSelectionState}
              canSelectColumn={canSelectColumn}
              onSelectCol={onSelectCol}
              onResize={onColumnResize}
            />
          </div>
        );
      }
      const rowId = rows[rowIndex - 1].original[primaryKey];
      const columnId = visibleColumns[columnIndex].id;
      const className = columnIndex === 0 ? "stickyCell" :
                            isInSelection(rowId, columnId) ? selectionClassName : getCellStyle(rowId, columnId);

      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          role="cell"
          style={style}
          className={className}
          onClick={
            canSelectColumn(columnId)
              ? () => onSelectCell(rowId, columnId)
              : noop
          }
          key={columnIndex}
        >
          <Flex>
            {columnIndex === 0 && (
              <React.Fragment>
                <SelectionCheckBox
                  onClick={rowClickHandler(rows[rowIndex - 1])}
                  {...calcRowSelectionState(rows[rowIndex - 1])}
                />
                <IconButton size="1em" variant="unstyled" onClick={() => onDetailsClick(rowId)} aria-label="Search database" icon={<ExternalLinkIcon marginTop="-0.5em"/>} ml="1"/>
              </React.Fragment>
            )}
            {renderCellControl(rowId, columnId, rows[rowIndex - 1].original[columnId])}
          </Flex>
        </div>
      );
    },
    [
      rows,
      selectionClassName,
      visibleColumns,
      primaryKey,
      calcColSelectionState,
      calcRowSelectionState,
      canSelectColumn,
      onSelectCol,
      onColumnResize,
      noop,
      onSelectCell,
      rowClickHandler,
      isInSelection,
      getCellStyle,
      onDetailsClick,
      renderCellControl,
    ]
  );

  const columnIds = React.useMemo(() => allColumns.map((o) => o.id), [
    allColumns,
  ]);

  const currentColOrder = React.useRef<Array<IdType<T>>>();

  const onDragStart = React.useCallback(() => {
    currentColOrder.current = columnIds;
  }, [columnIds, currentColOrder]);

  const onDragEnd = React.useCallback(
    (dragUpdateObj: DropResult) => {
      if (!dragUpdateObj.destination) {
        return;
      }

      const order = [...currentColOrder.current];
      const sIndex = dragUpdateObj.source.index;
      const dIndex =
        dragUpdateObj.destination && dragUpdateObj.destination.index;

      if (typeof sIndex === "number" && typeof dIndex === "number") {
        order.splice(sIndex, 1);
        order.splice(dIndex, 0, dragUpdateObj.draggableId);
        datagridRef.current.resetAfterIndices({
          columnIndex: dIndex < sIndex ? dIndex : sIndex,
          rowIndex: 1,
          shouldForceUpdate: false,
        });
        setColumnOrder(order);
      }
    },
    [currentColOrder, setColumnOrder, datagridRef]
  );

  const itemData = React.useMemo(() => {
    return {
      headers: visibleColumns,
      rows: [...[{}], ...rows],
      prepareRow,
    };
  }, [visibleColumns, rows, prepareRow]);

  const getColumnWidth = React.useCallback(
    (colIndex) => {
      const col = visibleColumns[colIndex];
      if (!col) return defaultColumn.width;
      if (!columnResizing.columnWidths[col.id]) {
        return defaultColumn.width;
      }
      return columnResizing.columnWidths[col.id];
    },
    [columnResizing, defaultColumn.width, visibleColumns]
  );

  // Render the UI for your table
  return (
    <AutoSizer>
      {({ height, width }) => (
        <div css={dtStyle}>
          <div role="table" {...getTableProps()} className="tableWrap">
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
              <div role="rowgroup" {...getTableBodyProps()}>
                <StickyVariableSizeGrid
                  itemData={itemData}
                  rowCount={itemData.rows.length}
                  height={height}
                  gridRef={datagridRef}
                  rowHeight={() => 35}
                  estimatedRowHeight={35}
                  columnWidth={getColumnWidth}
                  estimatedColumnWidth={defaultColumn.width}
                  overscanRowCount={5}
                  overscanColumnCount={2}
                  width={width}
                  columnCount={visibleColumns.length}
                >
                  {RenderCell}
                </StickyVariableSizeGrid>
              </div>
            </DragDropContext>
          </div>
        </div>
      )}
    </AutoSizer>
  );
}

export default React.memo(DataTable) as typeof DataTable;
