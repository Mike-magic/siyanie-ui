import { Component } from 'react'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

import Menu from '../menu/menu.react.js'
import Phone from '../phone/phone.react.js'
import Icon from '../icon/icon.react.js'

export default class Header extends Component {
	render () {
		return (
			<div className="header">
				<div className="header__content">
					<Link to="/" className="header__logo">
						<Icon className="header__logo-icon" icon="siyanie-colored" />
					</Link>
					<div className="header__nav">
						<div className="header__menu">
							<Menu params={this.props.params} />
						</div>
						<MediaQuery query="(min-width: 1024px)">
							<div className="header__phone">
								<Phone />
							</div>
						</MediaQuery>
					</div>
				</div>
			</div>
		)
	}
}
