import React from 'react';

const NavBar = ( {setMenu} ) => {
  return (
    <nav className="ver">
        <div>
            <img class="" src="./img/cloudology.png" alt="RM" />
            <ul>
				<li><a href="#">Strona główna</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Rejestracja</a></li>
				<li><a href="#">Logowanie</a></li>
				<li><a href="#">Kontakt</a></li>
        	</ul>
        </div>
    </nav>
  );
}

export default NavBar;