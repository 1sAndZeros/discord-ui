import { FaHashtag, FaCog, FaUserPlus } from "react-icons/fa";

import PropTypes from "prop-types";

function ChannelList({ heading, channels }) {
  return (
    <div className="channel-list">
      <h4>{heading.toUpperCase()}</h4>
      <ul>
        {channels.map((channel, i) => {
          return (
            <li key={i}>
              <FaHashtag />
              <span className="channel-name">{channel}</span>
              <FaUserPlus className="settings-icon" />
              <FaCog className="settings-icon" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ChannelList.propTypes = {
  heading: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChannelList;
