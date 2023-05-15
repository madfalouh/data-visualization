import PropTypes from 'prop-types';
import { useState } from 'react';

function TabCard({ icon: Icon, label   , selected }) {



  return (
 <div className={`option   ${  selected ? "opt2" :""  }`}      >
    <div className="tab-card">
      <Icon className="icon" style={{ fontSize: "40px" }} />
      <p>{label}</p>
    </div>
</div>
  );
}

TabCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default TabCard;