import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import data from '../../../data';

export default function ControlledCheckbox() {
    // Tablica z wszystkimi instr_type po której przechodzimy po kolei, 
    // i jeśli dany x type z tablicy równy
    // jest x checboxowanemu to dodajemy go do nowej tablicy

    const saxArr = ['Soprano', 'Alto', 'Tenor', 'Baritone', 'Clarinete']
    let arr_mouth = []

    const [checked, setChecked] = React.useState(true);

    
    // checked -> trzeba jakoś zwracać zaznaczony checkbox z AppCheckoxes tutaj

    function filter() {

        for (var j in saxArr){
            // if checked -> show only checked mouthpieces soo soprano checked shows only soprano
            if (checked === true){
                for (var i in data) {
                    if (data[i].instr_type === saxArr[j])  {
                        arr_mouth.push(data[i])
                    }
                    
                }
            }
        };
        console.log(arr_mouth);
        return (
            arr_mouth
        )
    };

        return (

        arr_mouth.map ...

        (<>
            <ControlledCheckbox 
            checked={checked}
            onChange={filter}/>
               
        <p>{props.instr_type}</p>)

        </>



    );
}