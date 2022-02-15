import React, { useState } from 'react';
const UserContext = React.createContext();

const UserProvider = (props) => {
	const [state, setState] = useState({});
	return (
		<UserContext.Provider value={[state, setState]}>
			{props.children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
