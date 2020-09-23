import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-designcode.svg"
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'


class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({hasScrolled: true}) 
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
        <Link to="/"> <img src={require('../images/logo-designcode.svg')} width="30"/> </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <StripeCheckout
          amount={5000}
          image="">
          <button>Buy</button>
        </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header
