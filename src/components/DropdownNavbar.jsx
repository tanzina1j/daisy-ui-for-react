import React from 'react'

const DropdownNavbar = () => {
  return (
    <div>
      <div className="navbar">
  <div className="ps-4">
    <a className="text-5xl font-bold">DaisyUI</a>
  </div>
  <div className="flex grow justify-end px-2">
    <div className="flex text-3xl items-stretch">
      <a className="item">Home</a>
      <a className="item">About</a>
      <a className="item">Blog</a>
      <a className="item">Contact</a>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="item btn-ghost rounded-field">Dropdown</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content  rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DropdownNavbar
