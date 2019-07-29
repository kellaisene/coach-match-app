import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';

class RequestCallModal extends Component {
	render() {
		const actions = [
			<FlatButton style={{ color: '#f44336' }} label="CANCEL" onClick={() => console.log('CANCEL')} />,
			<RaisedButton
				backgroundColor="#427efe"
				labelColor="#ffffff"
				label="SAVE CHANGES"
				onClick={(e) => this.handleSubmit(e)}
			/>
		];
		return <Dialog title="Request a Call" actions={actions} open={this.props.openModal} />;
	}
}
