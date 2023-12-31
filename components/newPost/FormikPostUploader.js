import { View, Text, Image, TextInput, Button, Platform } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements';

const PLACEHODER_IMG = 'https://www.humblecc.com/wp-content/uploads/2020/01/placeholder-image.png';

const uploadPostScheme = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHODER_IMG);

  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => console.log(values)}
    validationSchema= {uploadPostScheme}
    validateOnMount={true}
    >
       {({
         handleBlur,
         handleChange, 
         handleSubmit, 
         values, 
         errors, 
         isValid
       }) => 
         <>
         <View style = {{margin: 20, justifyContent: 'space-between', flexDirection:'row'}}>
            <Image 
            source = {{uri: thumbnailUrl ? thumbnailUrl : PLACEHODER_IMG}}
            style = {{width: 100, height: 100}}
            />
         
         <View style = {{flex: 1, marginLeft: 12}}>
         <TextInput 
         style = {{color: 'white', fontSize: 20}}
         placeholder='Write a caption...' 
         placeholderTextColor='grey'
         multiline = {true}
         onChangeText = {handleChange('caption')}
         onBlur={handleBlur('caption')}
         value = {values.caption}
         />
         </View>
         </View>

         <Divider width={0.2} orientation='vertical'/>

         <TextInput 
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style = {{color: 'white', fontSize: 18}}
            placeholder='Enter image Url...' 
            placeholderTextColor='grey'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value = {values.imageUrl}
            />
          {errors.imageUrl && (
            <Text style = {{fontSize: 10, color: 'red'}}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress = {handleSubmit} title = 'Share' disabled = {!isValid}></Button>
         </>
       }

    </Formik>
  )
}

export default FormikPostUploader