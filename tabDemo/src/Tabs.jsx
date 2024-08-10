import React, { useState } from "react";
import './Tabs.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const tabs = props.list;
  const listLabels = tabs.map((tab,index) =>  
    <div key={index} style={{display:'inline'}}> 
    <button onClick={()=> handleTabClick(tab.id)}>{tab.label}</button>
    </div>
  );

  const listContents = tabs.map((tab,index) =>  
    <div key={index} > 
    <p style={{
      display:tab.id===activeTab?'block':'none'
    }}>{tab.content}</p>
    </div>
  );

  return <>{listLabels} {listContents}
  </>;
};

export default Tabs;
