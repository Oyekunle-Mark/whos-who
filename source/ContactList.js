import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {
	render() {
		let filteredList = this.props.contacts.filter( 
			(contact) => contact.name.includes(this.props.filterText)
		);

		return (
			<ul>
				{filteredList.map((contact) =>
					<ContactItem key={contact.email} name={contact.name} email={contact.email} />
				)}
			</ul>
		)
	}
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
	filterText: PropTypes.string.isRequired,
}

export default ContactList;
