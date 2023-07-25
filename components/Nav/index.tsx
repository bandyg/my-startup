import React from 'react';

const Nav = (props) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <div className="flex flex-row bg-black text-white">
      <div>home</div>
      <div>projects</div>
      <div>about</div>
      <div>contact</div>
    </div>
  );
};
export default Nav;
