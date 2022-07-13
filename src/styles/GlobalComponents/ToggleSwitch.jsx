// import React, { useState } from "react";
import React, {useContext} from 'react';
import "./ToggleSwitchStyles.css";


function ToggleSwitch() {

  // const [isToggled, setIsToggled] = useState(false);
  // const onToggle = () => setIsToggled(!isToggled);

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const onToggle = () => {
    toggleDarkMode();
    setIsToggled(!isToggled);
  }

  return (
    <label className="toggle-switch">
      <input darkMode type="checkbox" checked={isToggled} onChange={onToggle} />
      {/* <span className="switch" /> */}
    </label>
  );
}

export default ToggleSwitch;





// import React, {useContext} from 'react';
// import {DarkModeContext} from '../../context/DarkModeContext';

// function Lightswitch() {
//     const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
//     const handleClick = () => {
//         toggleDarkMode();
//     }
//     return (
//         <div className="Lightswitch">
//             <img src={darkMode ? 
//             `../imgages/button-off.png` : `../images/button-on.png`} alt="Lightswitch on" onClick={handleClick}/>          
//         </div>
//     )
// }


// export default Lightswitch