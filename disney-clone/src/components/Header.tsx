import styled from "styled-components";
import logo from '/images/logo.svg'
import home from '/images/home-icon.svg'
import search from '/images/search-icon.svg' 
import watch from '/images/watchlist-icon.svg' 
import originals from '/images/original-icon.svg' 
import movie from '/images/movie-icon.svg' 
import series from '/images/series-icon.svg' 
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    return (
        <Nav>

            <Logo>
                <img src={logo} alt="Disney Logo" />
            </Logo>

            <NavMenu>
                
                <Link to="/home">
                    <img src={home} alt="Home icon" />
                    <span>home</span>
                </Link>

                <Link to="/home">
                    <img src={search} alt="Search icon" />
                    <span>search</span>
                </Link>

                <Link to="/home">
                    <img src={watch} alt="watchlist icon" />
                    <span>watchlist</span>
                </Link>

                <Link to="/home">
                    <img src={originals} alt="originals icon" />
                    <span>originals</span>
                </Link>

                <Link to="/home">
                    <img src={movie} alt="movies icon" />
                    <span>movies</span>
                </Link>

                <Link to="/home">
                    <img src={series} alt="series  icon" />
                    <span>series</span>
                </Link>

            </NavMenu>

        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px; 
    background-color: #090b13;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 100px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    
    img {
        display: block;
        width: 100%; 
    }   
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 30px;
            width: 30px;
            min-width: 20px;
            z-index: auto;
        }

        span{
            color: rgb (249, 249, 249);
            font-size: 16px; 
            letter-spacing: 1.42px;
            margin-top: 3px;
            margin-left: 5px;
            line-height: 1.08px;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            text-transform: uppercase;
        

            &:before {
                content: '';
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                height: 2px;
                opacity: 0;
                position: absolute;
                bottom: -8px;
                right: 0px;
                left: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`
export default Header