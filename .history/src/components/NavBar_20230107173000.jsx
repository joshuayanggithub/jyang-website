import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  const links = [
    {'id': 1, 'name': 'About'},
    {'id': 2, 'name': 'Projects'}, 
    {'id': 3, 'name': 'Setup'},
    {'id': 4, 'name': 'Contacts'}
  ]

  return (
    <div class="flex bg-sasskyblue w-full p-2 justify-between items-center">
      <div>
        <AiOutlineMenu size={50}></AiOutlineMenu>
      </div>

      <ul class="md:flex gap-20 p-3">
        {
          links.map((link) => 
            <li key={link.id}>
              <a href='#About' class="text-3xl text-white px-5 hover:bg-sasnavyblue duration-300 font-button">{link.name}</a>
            </li>
          )
        }
      </ul>

    </div>
  );
};

export default NavBar;