import {  useEffect } from 'react'
import queryString from 'query-string';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        destorySession()
        console.log('hello')
        // eslint-disable-next-line
    },[])

    const destorySession = async() => {
        try {
            await axios.delete('/sso/v1/logout')
            const parsed = queryString.parse(window.location.search);
            const paramValue = parsed.continued;
            if (!paramValue) {
                navigate('/')
            } else {
                navigate('/?continued=' + encodeURI(paramValue))
            }
        } catch (error) {
            
        }
    }
}

export default Logout