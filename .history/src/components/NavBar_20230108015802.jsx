import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import Button from './Button'

const NavBar = () => {
  const links = [
    {'id': 1, 'name': 'About'},
    {'id': 2, 'name': 'Projects'}, 
    {'id': 3, 'name': 'Setup'},
    {'id': 4, 'name': 'Links'}
  ]

  return (
    <div class="md:flex bg-sasskyblue w-full justify-between items-center h-22">
      <div>
        <AiOutlineMenu size={50}></AiOutlineMenu>
      </div>

      <ul class="md:flex gap-20">
        {
          links.map((link) => 
            <li key={link.id}>
              <a href='#About' class="text-3xl text-white px-5 hover:bg-sasnavyblue hover:font-bold duration-300 uppercase font-navheader">{link.name}</a>
            </li>
          )
        }
      </ul>

      <Button> Email Me </Button>

    </div>
  );
};

export default NavBar;