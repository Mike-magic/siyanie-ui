import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import config from '../config/config.react'
import Header from '../header/header.react'
import Preloader from '../preloader/preloader.react'

export default class Page extends Component {
	constructor () {
		super()

		this.state = {
			preloading: true
		}
	}
	_preloaded () {
		this.setState({
			preloading: false
		})
	}
	render () {
		const {
			params: {
				section,
				project
			},
			content,
			footer,
			location: {
				pathname
			}
		} = this.props
		const {
			preloading
		} = this.state

		const key =
			section
				? section
				: project
					? project
					: pathname.split('/')[1] || 'root'

		return (
			<div
				className={`g-page__content ${preloading ? '_preloading' : 'preloaded'}`}
			>
				<Preloader preloaded={::this._preloaded} />
				<Header params={this.props.params} />
				<div className="g-page__line"></div>
				<ReactCSSTransitionGroup
					component="div"
					className={`g-page__main g-page__main--${pathname.split('/')[1]}`}
					transitionName="anim"
					transitionLeaveTimeout={config.trs * 2}
					transitionEnterTimeout={config.trs * 2}
				>
					{React.cloneElement(content || <div />, { key })}
				</ReactCSSTransitionGroup>
				<div className="g-page__line"></div>
				<ReactCSSTransitionGroup
					component="div"
					className={`footer__wrap ${!footer ? '_hidden' : ''}`}
					transitionName="anim"
					transitionLeaveTimeout={config.trs * 2}
					transitionEnterTimeout={config.trs * 2}
				>
					{React.cloneElement(footer || <div />, { key: footer ? key : 'hidden' })}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}
