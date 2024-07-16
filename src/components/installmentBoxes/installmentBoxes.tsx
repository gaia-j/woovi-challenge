import InstalmentBox from "../installmentBox/installmentBox";
import {InstalmentBoxesProps} from "../../interfaces/interfaces";

export default function InstalmentBoxes({instalments, onClick, selected }: InstalmentBoxesProps) {
  return (
    <>
      {instalments.map((_,index) => {
        const instposition = index === 1 ? 'top' : index === instalments.length - 1 ? 'bottom' : 'middle'
        if (index>0) return (
          <InstalmentBox
            key={index}
            instposition={instposition}
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
