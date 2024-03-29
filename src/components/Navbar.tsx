/*
 * @Author: LinRenJie
 * @Date: 2023-01-14 19:22:28
 * @LastEditTime: 2023-01-15 12:25:50
 * @Description: 
 * @FilePath: /react/src/components/Navbar.tsx
 * @Email: xoxosos666@gmail.com
 */
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        // sticky 粘性 随着滚动固定在顶部
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={"/About"} as={NavLink}>About</Nav.Link>
                    <Nav.Link to={"/Store"} as={NavLink}>Store</Nav.Link>
                </Nav>
                {cartQuantity > 0 &&  //数量大于0 才显示购物车
                    <Button
                        onClick={openCart}
                        variant='outline-primary'
                        className='rounded-circle'
                        style={{ width: '3rem', height: '3rem', position: 'relative' }}>
                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1978" >
                            <path
                                d="M346.112 806.912q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM772.096 808.96q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM944.128 227.328q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l21.504 0 21.504 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM867.328 194.56l-374.784 0 135.168-135.168q23.552-23.552 51.712-24.064t51.712 23.04z"
                                p-id="1979"></path>
                        </svg>
                        <div className='rounded-circle bg-danger d-flex justify-content-center
                align-items-center'
                            style={{
                                color: 'white',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%,25%)"
                            }}
                        >
                            {cartQuantity}
                        </div>
                    </Button>
                }
            </Container>
        </NavbarBs>
    )
}