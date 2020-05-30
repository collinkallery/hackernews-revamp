import React from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const AllPreviewsContainer = (props) => {
  const storyPromises = props.dataIDs.map((id) => {
    return <ArticlePreview id={id} />;
  });

  return <div>{storyPromises}</div>;
};

export default AllPreviewsContainer;
