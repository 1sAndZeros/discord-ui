import "./ChannelIcon.css";
import PropTypes from "prop-types";

ChannelIcon.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  br: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

function ChannelIcon({
  children,
  bg = "rgba(255, 255, 255, 0.05)",
  br = "50%",
  color = "white",
  size = "30px",
}) {
  return (
    <div
      className="channel-icon"
      style={{
        background: bg,
        borderRadius: br,
        color: color,
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
}

export default ChannelIcon;
