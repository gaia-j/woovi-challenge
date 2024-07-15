import InstalmentBox from "../installmentBox/installmentBox";
import {InstalmentBoxesProps} from "../../interfaces/interfaces";

export default function InstalmentBoxes({instalments, onClick, selected }: InstalmentBoxesProps) {
  return (
    <>
      {instalments.map((_,index) => {
        const instposition = index === 1 ? 'top' : index === instalments.length - 1 ? 'bottom' : 'middle'
        const active = selected === index ? 1 : 0 // I know it's weird; just to solve dom issues.
        if (index>0) return (
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
        return null
      })}
    </>
  )

}
