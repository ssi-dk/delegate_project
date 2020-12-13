import { css, keyframes } from "@emotion/react";
import theme from "app/app.theme";
import {
  DraggableStateSnapshot,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

export const getColumnStyle = (
  { isDragging, isDropAnimating }: DraggableStateSnapshot,
  draggableStyle: DraggingStyle | NotDraggingStyle
) =>
  css({
    ...draggableStyle,
    userSelect: "none",
    // prevent react-beautiful-dnd from blowing columns all over the place
    ...(!isDragging && { transform: "translate(0,0) !important" }),
    ...(!isDropAnimating && { transitionDuration: "0.001s" }),
    ...(isDragging && { transform: "translate(0, 0) !important"}),
    textAlign: "left",
    textOverflow: "ellipsis",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  export const headerDragClone = css({
    fontWeight: "bold",
    backgroundColor: theme.colors.gray[50],
    height: "50px",
    width: "149px",
    textAlign: "center",
    border: theme.borders["1px"],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })

export const headerButton = css({
  flex: "0 0 16px",
  verticalAlign: "center",
  alignSelf: "center",
});

export const headerName = css({
  verticalAlign: "center",
  flex: "1 1 auto",
  overflow: "hidden",
  textAlign: "center",
  textOverflow: "ellipsis",
});

export const cell = css({
  backgroundColor: theme.colors.white,
  width: "1%",
  padding: "0.8rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontSize: "15px",
  textAlign: "left",
  textOverflow: "ellipsis",
  ":last-child": {},
});

const ants = keyframes`to { background-position: 100% 100% }`;

export const selectedCell = css({
  border: "1px solid transparent",
  margin: "2px",
  background: `linear-gradient(white, white) padding-box,
     repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em`,
  animation: `${ants} 10s linear infinite`,
  fontWeight: "bold",
  maxWidth: "20em",
  borderBottom: "1px solid transparent",
});

export const approvedCell = css({
  border: "1px solid transparent",
  margin: "2px",
  fontWeight: "bold",
  maxWidth: "20em",
  backgroundColor: theme.colors.yellow[200],
});

export default css({
  display: "block",
  maxWidth: "100%",
  ".tableWrap": {
    display: "block",
    width: "100%",
  },
  "div[role=table]": {
    borderSpacing: 0,
  },
  "div[role=row]": {
    ":last-child": {
      td: {
        borderBottom: 0,
      },
    },
    borderBottom: theme.borders["1px"],
  },
  "div[role=rowgroup]": {
    borderBottom: theme.borders["2px"],
    width: "100%",
  },
  "div[role=separator]": css({
    borderLeft: theme.borders["2px"],
    position: "absolute",
    display: "inline-block",
    right: 0,
    top: 0,
    width: "1ch",
    height: "100%",
  }),
  "[role=columnheader]": css(
    {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      borderBottom: theme.borders["2px"],
      userSelect: "none",
      width: "1%",
      /* But "collapsed" cells should be as small as possible */
      "&.collapse": {
        width: "0.0000000001%",
      },
    },
    cell
  ),
  "div[role=cell]": { ...cell },
});
