import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MobileHeader = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas className='text-bg-light' placement={'end'} show={show} onHide={handleClose} name='top'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-2" style={{ fontSize: '2rem', fontWeight: '900' }}>
                <Link className="nav-link" to="/shop" onClick={handleClose}>
                  Shop
                </Link>
              </li>
              <li className="nav-item px-2" style={{ fontSize: '2rem', fontWeight: '900' }}>
                <Link className="nav-link" to="/about" onClick={handleClose}>
                  About
                </Link>
              </li>
              <li className="nav-item px-2" style={{ fontSize: '2rem', fontWeight: '900' }}>
                <Link className="nav-link" to="/contact" onClick={handleClose}>
                  Contact
                </Link>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileHeader;
