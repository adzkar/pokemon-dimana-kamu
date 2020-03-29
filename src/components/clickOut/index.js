import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, onClickOutside) {
  //Active if clicked on outside of element
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside();
    }
  }
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

}
function ClickOutside(props) {
  const { children, onClickOutside } = props;
  const wrapperRef = useRef(null);
  
  useOutsideAlerter(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutside;
