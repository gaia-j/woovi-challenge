import {Dispatch, SetStateAction} from "react";
import InstalmentBox from "../installmentBox/installmentBox";

type InstalmentBoxProps = {
  instalments: { instalment: number, value: number }[]
  selected: null | number
  onClick: Dispatch<SetStateAction<null|number>>
};

export default function InstalmentBoxes({instalments, onClick, selected }: InstalmentBoxProps) {
  return (
    <>
      {instalments.map((_,index) => {
        const instposition = index === 0 ? 'top' : index === instalments.length - 1 ? 'bottom' : 'middle'
        const active = selected === index ? 1 : 0 // I know it's weird; just to solve dom issues.
        return (
          <InstalmentBox
            key={index}
            instposition={instposition}
            index={index}
            active={active}
            selected={selected}
            instalment={instalments[index]}
            onClick={onClick}
          />
        );
      })}
    </>
  )

}
