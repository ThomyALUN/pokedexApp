import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Navigation />
			</AuthProvider>
		</NavigationContainer>
	);
}