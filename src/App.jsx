import "./App.css";
import ChannelIcon from "./components/channel-icons/ChannelIcon";
import { FaDiscord, FaCompass, FaCog, FaStickyNote } from "react-icons/fa";
import {
  BsDownload,
  BsPlusLg,
  BsHash,
  BsFillMicMuteFill,
  BsHeadphones,
  BsPlusCircleFill,
  BsFillGiftFill,
  BsEmojiSmileFill,
  BsFillBellFill,
  BsFillPinAngleFill,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import {
  BiSolidHelpCircle,
  BiSolidInbox,
  BiSearchAlt2,
  BiSolidPencil,
} from "react-icons/bi";
import { HiGif, HiUsers } from "react-icons/hi2";
import ChannelList from "./components/ChannelList";

function App() {
  return (
    <main>
      <section className="server-icons">
        <div className="section">
          <ChannelIcon>
            <FaDiscord />
          </ChannelIcon>
        </div>
        <div className="section">
          <ChannelIcon br="20px" bg="#5865f2">
            <span style={{ fontSize: "1rem" }}>HW</span>
          </ChannelIcon>
          <ChannelIcon>
            <BsPlusLg color="var(--clr-misc-green)" size={"20px"} />
          </ChannelIcon>
          <ChannelIcon>
            <FaCompass color="var(--clr-misc-green)" size={"20px"} />
          </ChannelIcon>
        </div>
        <div className="section">
          <ChannelIcon>
            <BsDownload color="var(--clr-misc-green)" size={"20px"} />
          </ChannelIcon>
        </div>
      </section>
      <div className="main-container">
        <nav id="navbar">
          <div className="channels">
            <h4>Hello World</h4>
            <AiOutlineDown />
          </div>
          <div className="main">
            <div style={{ display: "flex", alignItems: "center" }}>
              <BsHash size={"25px"} color="rgba(255,255,255,0.3)" />
              <strong>general</strong>
            </div>
            <div className="nav-right">
              <BsHash size={"25px"} />
              <BsFillBellFill size={"20px"} />
              <BsFillPinAngleFill size={"20px"} />
              <HiUsers size={"20px"} />
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <BiSearchAlt2 />
              </div>
              <BiSolidInbox size={"20px"} />
              <BiSolidHelpCircle size={"20px"} color="var(--clr-misc-green)" />
            </div>
          </div>
        </nav>
        <section className="channels-sidebar">
          <ChannelList heading="Text Channels" channels={["chat", "general"]} />
          <ChannelList heading="Voice Channels" channels={["General"]} />
          <div className="user">
            <ChannelIcon bg="var(--bg-user)">
              <FaDiscord color="var(--font-white)" />
            </ChannelIcon>
            <div className="name">
              <strong>User</strong>
              <p>another_user1</p>
            </div>
            <BsFillMicMuteFill />
            <BsHeadphones />
            <FaCog />
          </div>
        </section>
        <section className="central">
          <div className="welcome">
            <ChannelIcon size="50px">
              <BsHash size={"3rem"} />
            </ChannelIcon>
            <h4>
              <strong>Welcome to #general!</strong>
            </h4>
            <p>This is the start of the #general channel.</p>
            <p className="edit-channel">
              <BiSolidPencil color="var(--font-blue)" />
              {`${" Edit Channel!"}`}
            </p>
          </div>
          <div className="message">
            <div>
              <BsPlusCircleFill />
              <input type="text" placeholder="Message #general" />
              <BsFillGiftFill />
              <HiGif />
              <FaStickyNote />
              <BsEmojiSmileFill />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
