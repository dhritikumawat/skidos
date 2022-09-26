import React, { useState, useEffect } from "react";
import "../Announcements/Announcements.css";

// font-awesome icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// API implementation for announcements list
function Announcements() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <>
      <div className="announcements_wrapper">
        {/* announcements cards start */}
        <div className="announcement_posts_list">
          {data.map((item) => (
            <div className="announcement_card">
              <h5>22/03/2022, 08:48:15</h5>
              <h3 className="announcement_title">{item.title}</h3>
              <div className="announcement_tag">ANNOUNCEMENTS</div>
              <div className="announcement_info">{item.body}</div>
              <div className="skidos_team">Skidos Team</div>
              <div className="feedback_wrapper">
                <div className="emoji">
                  <FontAwesomeIcon icon={faSmile} />
                </div>
                <div className="feedback_box_wrapper">
                  <input type="text" placeholder="Give us some feedback" />
                  <button className="send_feedback">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* sidebar tabs start */}
        <div className="sidebar">
          <div className="submit_announcement_wrapper">
            <button type="button">Submit an announcement</button>
          </div>
          <div className="allposts sidebar_items">
            <a href>ALL POSTS</a>
          </div>
          <div className="promotions sidebar_items">
            <a href>PROMOTIONS</a>
          </div>
          <div className="sidebar_items">
            <a href>ANNOUNCEMENTS</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcements;
