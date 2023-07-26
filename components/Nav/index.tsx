import React from 'react';

const Nav = (props) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <div className="flex flex-row bg-blue-500 text-black justify-around">
      <div className="flex basis-1/4 justify-evenly ">
        <div>home</div>
        <div>projects</div>
        <div>about</div>
        <div>contact</div>
      </div>
      <div className="flex grow justify-evenly">
        <div>icon</div>
      </div>
      <div className="flex basis-1/4 justify-evenly">
        <div>links</div>
      </div>
    </div>
  );
};
export default Nav;
