import {Dispatch, SetStateAction} from "react";

export interface StyledProps {
  instposition: 'top' | 'middle' | 'bottom';
  active: number,
}

export interface InstalmentBoxProps {
  instposition?: 'top' | 'middle' | 'bottom';
  active: number,
  index:number,
  selected: null | number
  onClick: Dispatch<SetStateAction<null|number>>
  instalment: {instalment: number, value: number, highlightText: string}
  single?: boolean
}

export interface InstalmentBoxesProps {
  instalments: { instalment: number, value: number, highlightText: string }[]
  selected: null | number
  onClick: Dispatch<SetStateAction<null|number>>
};