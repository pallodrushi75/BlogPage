import React from "react";
import { Fragment } from "react";

import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const MediumPost = ({ data }) => {
  return (
    <Fragment>
      <div className="Medium_Post">
        <div className="PostText">
          <h2>{data.title}</h2>
          <p>{data.paragraph}</p>
          <div className="PostTimeStamp">
            <div
              className="TimePara"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Aug 10 </span> &nbsp;-&nbsp;
              <span style={{ display: "flex", alignItems: "center" }}>
                5 mins ago <StarIcon />
              </span>
            </div>
            <BookmarkBorderIcon className="PostBookMark" />
          </div>
        </div>

        {data.image && (
          <div className="PostImg">
            <img src={data.image} alt="logo" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MediumPost;
