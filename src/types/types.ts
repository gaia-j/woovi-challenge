import {Dispatch, SetStateAction} from "react";

export type StyledProps = {
  instposition: 'top' | 'middle' | 'bottom';
  active: number,
}

export type InstalmentBoxProps =  {
  instposition?: 'top' | 'middle' | 'bottom';
  active: number,
  index:number,
  selected: null | number
  onClick: Dispatch<SetStateAction<null|number>>
  instalment: {instalment: number, value: number}
  single?: boolean
}

export type InstalmentBoxesProps = {
  instalments: { instalment: number, value: number }[]
  selected: null | number
  onClick: Dispatch<SetStateAction<null|number>>
};