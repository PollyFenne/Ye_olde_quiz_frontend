// Component to clean up the questions coming from API

import React from "react";

// Need to pass in questions and answers
const CleanData = (data) => {
  const cleanedQuestion = data.replace("&quot;", "").replace("&#039;s", "'");

  return <>{cleanedData}</>;
};

export default CleanData;
