import React,{useState,useRef} from 'react'
import './converter.css'
import SaveMeasure from './SaveMeasure'

const Converter = () => {

const myRef= useRef("")

    const [currentInput, setCurrentInput] = useState(0)
    const [currentValue , setCurrentValue] = useState(0)
    const [currentMeasure , setCurrentMeasure] = useState(0.6213)
    const [myMeasure, setMyMeasure] = useState("km")
    const [changeMeasure, setChangeMeasure] = useState("miles")
    const [savedNewMeasure, setSavedNewMeasure] = useState([])

   console.log(currentMeasure);
    const amount = (e) => {
        if(e.target.name === "amount"){
            const valor= e.target.value * currentMeasure
            setCurrentValue(valor.toFixed(2))
            setCurrentInput(e.target.value)
        }
    }

    const measure = (e) => {
        if(e.target.value === "value1"){
            const KmToMiles = 0.6213
            setCurrentMeasure(KmToMiles)
            setMyMeasure("km")
            setChangeMeasure("miles")
        }
        if(e.target.value === "value2"){
            const milesToKm = 1.60934
            setCurrentMeasure(milesToKm)
            setMyMeasure("miles")
            setChangeMeasure("km")
        }
        if(e.target.value === "value3"){
            const feetToMetres = 0.304
            setCurrentMeasure(feetToMetres)
            setMyMeasure("feet")
            setChangeMeasure("meters")
        }
        if(e.target.value === "value4"){
            const meterToFeet = 3.28084
            setCurrentMeasure(meterToFeet)
            setMyMeasure("meter")
            setChangeMeasure("feet")
        }
        if(e.target.value === "value5"){
            const cmToInches = 0.393701
            setCurrentMeasure(cmToInches)
            setMyMeasure("cm")
            setChangeMeasure("inches")
        }
        if(e.target.value === "value6"){
            const inchesToCm = 2.54
            setCurrentMeasure(inchesToCm)
            setMyMeasure("inches")
            setChangeMeasure("cm")
        }
        setCurrentValue(0)
        setCurrentInput(0)
    }

    const saveMeasure = () => {
        let newMeasure = {
            "input": currentInput,
            "measure": myMeasure,
            "value": currentValue,
            "change":changeMeasure
        }
        setSavedNewMeasure(savedNewMeasure=>[...savedNewMeasure,newMeasure]);
        setCurrentInput(0)
        setCurrentValue(0)
        }
 
    const deleteElement = (index) => {
        savedNewMeasure.splice(index,1)
        setSavedNewMeasure([...savedNewMeasure])
    }

    const change = (e) => {
        e.preventDefault()
        setCurrentValue(currentInput)
        setCurrentInput(currentValue)
        setMyMeasure(changeMeasure)
        setChangeMeasure(myMeasure)
        if(myRef.current.value === "value1"){
            myRef.current.value = "value2"
            setCurrentMeasure(1.60934)

        }else if (myRef.current.value === "value2"){
            myRef.current.value = "value1"
            setCurrentMeasure(0.6213)

        }else if (myRef.current.value === "3"){
            myRef.current.value = "value4"
            setCurrentMeasure(3.28084)

        }else if (myRef.current.value === "4"){
            myRef.current.value = "value3"
            setCurrentMeasure(0.304)

        }else if (myRef.current.value === "5"){
            myRef.current.value = "value6"
            setCurrentMeasure(2.54)
        }else if (myRef.current.value === "6"){
            myRef.current.value = "value5"
            setCurrentMeasure(0.393701)
        }
    }

  return (
    <>
    <div className="container">
        <p>convert</p>
        <form style={{marginRight:"80px"}}>
            <select className="select" onChange={measure} ref={myRef}>
                <option value="value1">Km → miles</option>
                <option value="value2">miles → Km</option>
                <option value="value3">feet → meters</option>
                <option value="value4">meters → feet</option>
                <option value="value5">cm → inches</option>
                <option value="value6">inches → cm</option>
            </select>
                <button className="invertresults" type="button" onClick={change}> ⇆</button>
            <input className="inputField" type="number" name="amount" onChange={amount} value={currentInput}></input>
        </form>
        <span className="measuretoconvert">{myMeasure}</span>
        <div className="result" >{currentValue} </div>
        <span className="measureresult">{changeMeasure}</span>
        <button className="like" type="button" onClick={saveMeasure}>❤</button>
    </div>

    <SaveMeasure measuresSaved={savedNewMeasure}
                 deleteElement={deleteElement}
                />

    </>
  )
}

export default Converter