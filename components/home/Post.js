import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import commentImage from '../../assets/comment.png'
import { color } from 'react-native-elements/dist/helpers'

const PostFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: ''
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    },
    

]

const PostHeader = ({post}) => {
    return (
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: post.profile_picture }} style = {styles.story}/>
            <Text style = {{color: "white"}}> {post.user}</Text>
        </View>

        <TouchableOpacity>
        <Text style = {{color: 'white', fontWeight:'900'}}> ... </Text>
        </TouchableOpacity>
    </View>
    );
}

const PostImage = ({post}) => (
    <View
    style = {{
        width: '100%',
        height: 450
    }}
    >
        <Image 
            source = {{uri: post.imageUrl}} 
            style = {{height: '100%', resizeMode: 'cover'}}
        />
    </View>
    
)

const PostFooter = () => (
    <View style = {{flexDirection: "row"}}>
        <View style = {styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl}/>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl}/>
            <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgUrl={PostFooterIcons[2].imageUrl}/>
        </View>
        <View style = {{flex: 1, alignItems:"flex-end"}}>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl}/>
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style = {imgStyle} source = {{uri: imgUrl}} />
    </TouchableOpacity>
)

const Post = ({post}) => {
  return (
    <View style = {{ marginBottom: 30}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post = {post} />
        <PostImage post = {post} />
        <View style = {{ marginHorizontal: 15, marginTop: 10}}>
            <PostFooter/>
            <Likes post = {post}/>
            <Caption post = {post}/>
            <ComementsSection post = {post}/>
        </View>
        
    </View>
  )
}

const Likes = ({post}) => (
    <View style = {{flexDirection: 'row', marginTop: 4}}>
    <Text style = {{color: 'white', fontWeight: 600}}> {post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style = {{marginTop: 5}}>
    <Text style = {{color: 'white'}}> 
         <Text style = {{fontWeight: 600}}>{post.user}</Text>
         <Text>  {post.caption}</Text>
    </Text>
    </View>
)

/**
 * post.comments.length => 0, 1, 2, 3
 * 0 
 */
const ComementsSection = ({post}) => (
    <View style = {{marginTop: 5}}>
    {!!post.comments.length && (        //Double negation (expose into true or false)
    <Text style = {{color:"grey"}}> 
        View {post.comments.length > 1 ? 'all':''} {post.comments.length} {''}
        {post.comments.length > 1 ? 'comments': 'comment'}
    </Text>
    )}
    <Comments post = {post}/>
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment, index) => (
        <View key = {index} style={{flexDirection: 'row', marginTop: 5}}>
            <Text style = {{color: 'white'}}>
                <Text style = {{fontWeight: 600}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

// 0 comments don't render component
// 1 comment => render without plural and all 
const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6, 
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 33, 
        height: 33, 
    },
    leftFooterIconsContainer: {
        flexDirection:"row",
        width:"32%",
        justifyContent:"space-between",
    },
    shareIcon: {
        transform: [{ rotate: '320deg'}],
        marginTop: -3,
    }
})
export default Post