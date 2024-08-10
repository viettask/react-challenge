import React, { useEffect,useState } from "react";
import './TrafficLight.css';

const TrafficLight = (props) =>
{


    const lightLists = props.data;
    const activeColor = props.activeColor;

    const lightItems = lightLists.map((lightList, index) =>
        <div key={index} className='circle' style={{ backgroundColor: lightList.lightColor===activeColor?activeColor:'rgb(85,85,85)', display:'block' }}> </div>
    );



    return <div className="square">
            {lightItems}
    </div>


}

export default TrafficLight;