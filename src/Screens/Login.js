import React, { useState } from "react";
import { Text, StyleSheet, View, Image, useWindowDimensions, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import { AppColors } from "../Colors";
import CustomErrorMsg from "../Commons/CustomErrorMsg";
import LinearGradient from "react-native-linear-gradient";
import { AppText } from "../Text";

const Login = ({ navigation }) => {
	const { height, width, fontScale } = useWindowDimensions();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameErr, setUsernameErr] = useState("");
	const [passwordErr, setPasswordErr] = useState("");
	const [modal, setModal] = useState(true);

	const CLoseModal = () => {
		setModal(false)
		navigation.navigate('TimeLine')
	}

	const Warningpop = () => {
		return (
			<Modal
				visible={modal}
				transparent={true}
				animationType="none"
			>
				<View style={styles.modalContainer}>
					<View style={[styles.centerView, { width: width - 150 }]}>
						<Text style={styles.cantFindAccount1}>Cant find account</Text>
						<Text style={styles.weCantFind1}>we cant find an account with d.william. Try another phone number or email address, or if you don’t have an Picspile account, you can sign up.</Text>
						<View style={styles.devider} />
						<TouchableOpacity activeOpacity={0.8} style={styles.button1}>
							<Text style={styles.tryAgain}>Try Again</Text>
						</TouchableOpacity>
						<View style={styles.devider} />
						<TouchableOpacity onPress={() => CLoseModal()} activeOpacity={0.8} style={styles.button1}>
							<Text style={styles.tryAgain}>Sign up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		)
	}
	return (

		<View style={styles.container}>

			<Text style={[styles.logo, { fontSize: width / 5 }]}>{AppText.AppName}</Text>
			<View style={[styles.inputContainer, { width: width - 100 }]}>
				<TextInput
					style={styles.input}
					placeholder="Phone Number or Email"
					placeholderTextColor={AppColors.grayText}
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
			</View>
			{/* //Error */}
			<View style={{ height: 25 }}>
				{usernameErr != "" ?
					<CustomErrorMsg Error={usernameErr} />
					: null
				}
			</View>
			{/* //Error End*/}
			<View style={[styles.inputContainer, { width: width - 100 }]}>
				<TextInput
					style={styles.input}
					placeholder="Password"
					placeholderTextColor={AppColors.grayText}
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			{/* //Error */}
			<View style={{ height: 25 }}>
				{passwordErr != "" ?
					<CustomErrorMsg Error={passwordErr} />
					: null
				}
			</View>
			{/* //Error End*/}

			{/* Button */}
			<View>
				<LinearGradient colors={['#FF00B8', '#FF0000']} style={styles.linearGradient}>
					<TouchableOpacity onPress={() => setModal(true)} activeOpacity={0.8} style={[styles.button, { width: width - 100 }]}>
						<Text style={styles.loginText}>Login</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>

			<View style={styles.textXontainer}>
				<Text style={styles.forgottenYourLogin}>{`Forgotten your login details? `}</Text>
				<Text style={styles.getHelpWith}>Get help with logging in.</Text>
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={[styles.or, { width: width / 2 - 80 }]} />
				<Text style={[styles.getHelpWith, { paddingHorizontal: 10 }]}>OR</Text>
				<View style={[styles.or, { width: width / 2 - 80 }]} />
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={styles.logocontainer}>
					<Image style={styles.frameIcon} resizeMode="contain" source={require('../Assets/Google.png')} />
				</View>
				<View style={styles.logocontainer}>
					<Image style={styles.frameIcon} resizeMode="contain" source={require('../Assets/facebook.png')} />
				</View>
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
				<Text style={styles.signUp}>Don’t have an account?</Text>
				<Text style={[styles.signUp, { color: AppColors.blackText, fontWeight: 'bold' }]}> Sign up.</Text>
			</View>
			{Warningpop()}
		</View>

	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: AppColors.backgroundColor,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	logo: {
		color: AppColors.pinkColor,
		fontWeight: '900',
	},
	inputContainer: {
		backgroundColor: '#eaeaea',
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: AppColors.grayText
	},
	input: {
		color: AppColors.blackText,
		height: 50,
		padding: 10
	},
	linearGradient: {
		borderRadius: 10,
	},
	button: {
		borderRadius: 10,

	},
	loginText: {
		textAlign: 'center',
		padding: 16
	},
	forgottenYourLogin: {
		color: AppColors.grayText
	},
	getHelpWith: {
		color: AppColors.blackText
	},
	textXontainer: {
		flexDirection: 'row',
		paddingVertical: 15
	},
	or: {
		backgroundColor: AppColors.blackText,
		height: 1,
		borderRadius: 10
	},
	frameIcon: {
		width: 30,
		height: 30,
		margin: 10
	},
	logocontainer: {
		borderWidth: 1,
		borderColor: AppColors.pinkColor,
		borderRadius: 100 / 2,
		margin: 15,
		marginHorizontal: 20
	},
	signUp: {
		color: AppColors.grayText
	},
	cantFindAccount1: {
		fontSize: 20,
		fontWeight: "900",
		fontFamily: "Montserrat-SemiBold",
		color: "#000",
		padding: 10
	},
	modalContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: AppColors.transparent,
		flex: 1
	},
	centerView: {
		backgroundColor: AppColors.backgroundColor,
		borderRadius: 10,
		alignItems: 'center',
		paddingVertical: 10
	},
	weCantFind1: {
		fontSize: 13,
		fontFamily: "Montserrat-Regular",
		color: "#545454",
		textAlign: "center",
		width: '80%'
	},
	devider: {
		backgroundColor: AppColors.grayText,
		width: '100%',
		height: 1,
		margin: 10
	},
	tryAgain: {
		fontSize: 14,
		fontWeight: "700",
		fontFamily: "Montserrat-Medium",
		color: AppColors.blackText,
		textAlign: "center"
	},
	button1: {
		width: '100%',
	}
});

export default Login;
