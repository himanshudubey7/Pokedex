import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer';
import { logout } from '../Redux/Slices/AuthSlice';
import './HomeLayout.css'; // Make sure this CSS file exists

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role || '');

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        if (drawerSide.length > 0) {
            drawerSide[0].style.width = 'auto';
        }
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        if (element.length > 0) {
            element[0].checked = false;
        }
    }

    async function handleLogout(e) {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res?.payload?.success) navigate("/");
    }

    return (
        <div className="home-layout">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="menu-icon">
                        <FiMenu onClick={changeWidth} size={"32px"} />
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay" onClick={hideDrawer}></label>
                    <ul className="drawer-menu">
                        <li className="drawer-close">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>

                        <li><Link to="/">Home</Link></li>
                        {isLoggedIn && role === 'ADMIN' && (
                            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                        )}
                        <li><Link to="/courses">All Courses</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>

                        {!isLoggedIn ? (
                            <li className="drawer-footer">
                                <Link to="/login" className="btn login">Login</Link>
                                <Link to="/signup" className="btn signup">Signup</Link>
                            </li>
                        ) : (
                            <li className="drawer-footer">
                                <Link to="/user/profile" className="btn login">Profile</Link>
                                <button onClick={handleLogout} className="btn signup">Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <main className="main-content">
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default HomeLayout;


