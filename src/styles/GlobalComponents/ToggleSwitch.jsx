import React, { useState } from "react";
import "./ToggleSwitchStyles.css";


function ToggleSwitch() {

  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className="toggle-switch">
      <input darkMode type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default ToggleSwitch;