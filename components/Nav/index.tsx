import React from 'react';

const Nav = (props) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <div>hello</div>
    </>
  );
};
export default Nav;
