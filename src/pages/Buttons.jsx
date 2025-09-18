import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ButtonV1 from '../Common/ButtonV1'
import ButtonV2 from '../Common/ButtonV2'
import ButtonV3 from '../Common/ButtonV3'
import ButtonV4 from '../Common/ButtonV4'
import ButtonV5 from '../Common/ButtonV5'

const Buttons = () => {
  return (
    <>
    <div>
<h2 className=' flex justify-center  bg-amber-100 text-red-500 text-3xl p-[10px] font-bold '>We will see the buttons here</h2>

    </div>
<div className='ButtonsVersion height-[399px] bg-amber-100'>

<h3>Button Version 1: <br />

<ButtonV1 ContentV1={"Click Me"}/>
<ButtonV1 ContentV1="Submit"/>
<ButtonV1 ContentV1="Add to Cart"/>
<ButtonV1 ContentV1="Delete"/>
<ButtonV1 ContentV1="Update"/>
</h3>

<h3>
Button Version 2: <br />
<ButtonV2 ContentV2="Hide Me"/>
<ButtonV2 ContentV2="Find Me"/>
<ButtonV2 ContentV2="Seek Me"/>
<ButtonV2 ContentV2="For Me"/>
<ButtonV2 ContentV2="None"/>
</h3>

<h3>
    Button Version 3: <br />
<ButtonV3 ContentV3={"I am here"}/>
<ButtonV3 ContentV3={"Who are You"}/>
<ButtonV3 ContentV3={"Wanna do This"}/>
<ButtonV3 ContentV3={"What To Do"}/>
<ButtonV3 ContentV3={"You are none"}/>
</h3>


<h3>
    Button Version 4: <br />
    <ButtonV4 ContentV4={"I Go"}/>
    <ButtonV4 ContentV4={"I Do"}/>
    <ButtonV4 ContentV4={"You Go"}/>
    <ButtonV4 ContentV4={"You are not"}/>
    <ButtonV4 ContentV4={"What To Do"}/>
</h3>

<h3>
    Button Version 5: <br />
    <ButtonV5 ContentV5={"I am V5"}/>
    <ButtonV5 ContentV5={"You are V5"}/>
    <ButtonV5 ContentV5={"They are V5"}/>
    <ButtonV5 ContentV5={"He is  V5"}/>
    <ButtonV5 ContentV5={"All are V5"}/>
</h3>


</div>




    </>
  )
}

export default Buttons
