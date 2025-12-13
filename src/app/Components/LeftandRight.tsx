"use client"
import { useEffect, useState } from "react"

function LeftandRight() {
  const[leftPound,setLeftPound]=useState<number>(0)
  const[rightPound,setRightPound]=useState<number>(0)
  const[leftPercentage,setLeftPercentage]=useState<number>(0)
  const[rightPercentage,setRightPercentage]=useState<number>(0)
  const[dailyPaymentLeft,setDailyPaymentLeft]=useState<number>(0)
  const[monthlyPaymentLeft,setMonthlyPaymentLeft]=useState<number>(0)
  const[annualPaymentLeft,setAnnualPaymentLeft]=useState<number>(0)
  const[dailyPaymentRight,setDailyPaymentRight]=useState<number>(0)
  const[monthlyPaymentRight,setMonthlyPaymentRight]=useState<number>(0)
  const[annualPaymentRight,setAnnualPaymentRight]=useState<number>(0)
  const handleLeftPoundChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const enterValued=parseFloat(event.target.value)
    if(isNaN(enterValued)||enterValued<0){
      console.warn('Invalid amount entered Please enter a non negative number')
    }
    setLeftPound(enterValued)
  }
  const handleLeftPercentage=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const enterPercentage=parseFloat(event.target.value)
    if(isNaN(enterPercentage)||enterPercentage<0){
      console.warn("Invalid and pleaseenter more than zero")
    }
    setLeftPercentage(enterPercentage)
  }
  const calculateLeftPercentage=()=>{
    const annualPaymentLeft=(leftPound*leftPercentage)/100
    const monthlyPaymentLeft=((leftPound*leftPercentage)/100)/12
    const dailyPaymentLeft=monthlyPaymentLeft&& monthlyPaymentLeft/30
    setAnnualPaymentLeft(annualPaymentLeft)
    setDailyPaymentLeft(dailyPaymentLeft)
    setMonthlyPaymentLeft(monthlyPaymentLeft)
  }
const handleRightPoundChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const enterValued=parseFloat(event.target.value)
  if(isNaN(enterValued)||enterValued<0){
    console.warn("Invalid amout Enter Non Negative number")
  }
  setRightPound(enterValued)
}
const handleRightPercentageChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const enterValued=parseFloat(event.target.value)
  if(isNaN(enterValued)||enterValued<0){
    console.warn("Invalid amout Enter Non Negative number" )
  }
  setRightPercentage(enterValued)
}
const calculateRightPercentage=()=>{
  const annualPaymentRight=rightPound*rightPercentage/100
  const monthlyPaymentRight=annualPaymentRight&&annualPaymentRight/12
  const dailyPaymentRight=monthlyPaymentRight&&monthlyPaymentRight/30
  setAnnualPaymentRight(annualPaymentRight)
  setMonthlyPaymentRight(monthlyPaymentRight)
  setDailyPaymentRight(dailyPaymentRight)
}
  useEffect(() => {
    calculateLeftPercentage();
    calculateRightPercentage()
}, [leftPound, rightPound, leftPercentage, rightPercentage]);

  return (
    <>
    <div className="leftform">
        <form id="leftform">
          <fieldset>
            <legend>I want to save</legend>
            <p>How much do you want to save</p>
            
            <div className="field-group">
            <span className="pound-sign">£</span>
            <input type="number" id="leftamount" value={leftPound} onChange={handleLeftPoundChange}></input>
            </div>
            
            <p>The saving rate is</p>
            
            <div className="field-percentage">
              <input type="number" id="leftpercentage" value={leftPercentage} onChange={handleLeftPercentage}></input>
              <span className="percentage">%</span>
            </div>
            <p>Your Daily Payment is <span className="ratebold">£{dailyPaymentLeft.toFixed(2)}</span></p>
            <p>Your Monthly Payment is <span className="ratebold">£{monthlyPaymentLeft.toFixed(2)}</span></p>
            <p>Your Annual Payment <span className="ratebold">£{annualPaymentLeft.toFixed(2)}</span></p>

          </fieldset>
        </form>
       </div>
       
       <div className="rightform">
       <fieldset>
            <legend>I want to borrow</legend>
            <p>How much do you want to borrow</p>
            
            <div className="field-group">
            <span className="pound-sign">£</span>
            <input type="number" id="rightamount" value={rightPound} onChange={handleRightPoundChange}></input>
            </div>
            
            <p>The saving rate is</p>
            <div className="field-percentage">
              <input type="number" id="rightpercentage" value={rightPercentage} onChange={handleRightPercentageChange}></input>
              <span className="percentage">%</span>
            </div>
            <p>Your Daily Earning <span className="ratebold">£{dailyPaymentRight.toFixed(2)}</span></p>
            <p>Your Monthly earnings <span className="ratebold">£{monthlyPaymentRight.toFixed(2)}</span></p>
            <p>Your annual earnings <span className="ratebold">£{annualPaymentRight.toFixed(2)}</span></p>

          </fieldset>

       </div>
    </>
  )
}

export default LeftandRight