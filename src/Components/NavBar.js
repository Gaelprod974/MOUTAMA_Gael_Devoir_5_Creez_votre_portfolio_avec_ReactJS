import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark mb-3">
          <Container fluid>
            <div className="name">John Doe</div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'nav-link-custom active' : 'nav-link-custom'
                    }
                  >
                    Accueil
                  </NavLink>
                  <NavLink
                    to="/Services"
                    className={({ isActive }) =>
                      isActive ? 'nav-link-custom active' : 'nav-link-custom'
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/PorteFolio"
                    className={({ isActive }) =>
                      isActive ? 'nav-link-custom active' : 'nav-link-custom'
                    }
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      isActive ? 'nav-link-custom active' : 'nav-link-custom'
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/MentionsLegales"
                    className={({ isActive }) =>
                      isActive ? 'nav-link-custom active' : 'nav-link-custom'
                    }
                  >
                    Mention Légales
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
