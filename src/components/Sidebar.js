import { React} from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../src/Sidebar.css';

export default function Slidebar(props) {

  return (
    <Menu>
      <a className="menu-item" href="/customersAdd">
        Add
      </a>
      {/* <a className="menu-item" href="/home">
        Delete
      </a> */}
      <a className="menu-item" href="/home" >
        Deactive
      </a>

    </Menu>

  );
};
