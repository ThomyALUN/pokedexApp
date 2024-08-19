import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard, Modal, Alert } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import useAuth from '../../hooks/useAuth'
import { user, userDetails } from '../../utils/userDB'

export default function LoginForm() {

    const [error, setError] = useState('')

    const { login } = useAuth()

    const formik=useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setError('')
            const { username, password} = formData
            if(username !== user.username || password !=  user.password) {
                setError('Credenciales inválidas')
            } else {
                login(userDetails)
            }
        }
    })

    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput 
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text)=>formik.setFieldValue('username',text)}
            />
            <TextInput 
                placeholder='Contraseña'
                style={styles.input}
                secureTextEntry={true}
                autoCapitalize='none'
                value={formik.values.password}
                onChangeText={(text)=>formik.setFieldValue('password',text)}
            />
            <Pressable style={styles.button} title="Hola" onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const validationSchema = () => {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener mínimo 8 caracteres")
    }
}

const styles=StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        height: 40
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }
})