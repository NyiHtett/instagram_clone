import { View, Text, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

const PLACEHODER_IMG = 'https://www.humblecc.com/wp-content/uploads/2020/01/placeholder-image.png';

const uploadPostScheme = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character')
})

const FormikPostUploader = () => {
    const {thumbnailUrl, setThumbnailUrl} = useState(PLACEHODER_IMG)
  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => console.log(values)}
    validationSchema= {uploadPostScheme}
    >
       {(handleBlur, handleChange, handleSubmit, values, errors, isValid) => 
         <>
         <View>
            <Image style = {{width: 100, height: 100}}
            source = {{uri: PLACEHODER_IMG}}/>
         
         <TextInput 
         placeholder='Write a caption...' 
         placeholderTextColor='grey'
         multiline = {true}
         />

         <TextInput 
            placeholder='Enter image Url...' 
            placeholderTextColor='grey'
            multiline = {true}
            />
         </View>
         </>
       }

    </Formik>
  )
}

export default FormikPostUploader