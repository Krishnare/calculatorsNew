import React, { useState, useEffect, useCallback } from "react";

const Caliculator = () => {
    const [addSum, setAddSum] = useState("");
    const [totalNum, setTotalNum] = useState(0);
    const [errorHandle, setErrorHandle] = useState("");
    const add = (numbers: any) => {
        if (numbers === "") {
            return 0;
        }
        const regex = /\d+/g;
        const delimiterMatch = numbers.match(regex);

        if (numbers.startsWith("//")) {
            if (delimiterMatch) {
                specialCharacters(delimiterMatch);
            }
        } else if (delimiterMatch.length > 0) {
            specialCharacters(delimiterMatch)
        }

        const numberArray = numbers.split(/,|\n/).map(Number);
        const negativeNumbers = numberArray.filter(n => n < 0);
        if (negativeNumbers.length > 0) {
            setErrorHandle("Negative Values not allowed: " + negativeNumbers);
            setTotalNum(0);
            return
        } else {
            setErrorHandle("");
        }
    }
    const specialCharacters = (spl: Array<number>) => {
        let sumNumbers = spl.reduce((sum: number, num: number) => Number(sum) + Number(num), 0);
        setTotalNum(sumNumbers);
        setErrorHandle("");
    }
    const inputValue = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e: any) => {
        const { value, name } = e.target;
        setAddSum(value);
    }, [setAddSum])

    return (
        <>
            <input type="text" onChange={inputValue} name="inputNumber" />
            <button onClick={() => add(addSum)}>Add</button>
            {totalNum > 0 ? <div>Total: {totalNum} </div> : null}
            {errorHandle ? <div>{errorHandle}</div> : null}
        </>
    )

}


export default Caliculator