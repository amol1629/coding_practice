import React from "react";

const UseCallbackHookHeader = ({ logMessage }) => {
  console.log("UseCallbackHookHeader Rendered.");

  // Call the memoized function
  logMessage();
  return (
    <div className="text-center italic">This is useCallback hook header.</div> 
  );
};

// Using useCallback alone does not prevent child components from re-rendering. To achieve this, you should also use React.memo to memoize the child component. This way, the child component will only re-render if its props change.
export default React.memo(UseCallbackHookHeader);
