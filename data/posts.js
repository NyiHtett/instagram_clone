import { users } from "./users";

export const posts = [
    {
        imageUrl: 'https://tvline.com/wp-content/uploads/2018/01/end-of-the-fucking-world.jpg',
        user: users[0].user,
        likes: 7000, 
        caption: 'Guys, Alysson came back! And the next journey would be go see her father, stay tune! 🏜️',
        profile_picture: users[0].image,
        comments: [
            {
                user: 'H-man',
                comment: 'not gonna be a hit'
            },
            
        ]
    },
    {
        imageUrl: 'https://filmschoolrejects.com/wp-content/uploads/2018/02/the-end-of-the-fing-world-james-alyssa.jpg',
        user: users[1].user,
        likes: 3000, 
        caption: 'I did not know james was gonna kill me',
        profile_picture: users[1].image,
        comments: [
            {
                user: 'H-man',
                comment: 'not gonna be a hit'
            },
            {
                user: 'R-man',
                comment: 'it is gonna be a hit'
            }
        ]
    },
    {
        imageUrl: 'https://d.newsweek.com/en/full/1569492/i-am-not-okay-this-cast.jpg?w=1600&h=1600&q=88&f=1563f0816d8acd938f8808c7b8c1bad1',
        user: users[2].user,
        likes: 1000, 
        caption: 'Proper relaxation',
        profile_picture: users[2].image,
        comments: [
            {
                user: 'H-man',
                comment: 'not gonna be a hit'
            },
            {
                user: 'R-man',
                comment: 'it is gonna be a hit'
            }
        ]
    },
    {
        imageUrl: 'https://www.looper.com/img/gallery/why-stanley-barber-from-i-am-not-okay-with-this-looks-so-familiar/intro-1584639292.jpg',
        user: users[3].user,
        likes: 1000, 
        caption: 'Music is everything',
        profile_picture: users[3].image,
        comments: [
            {
                user: 'H-man',
                comment: 'not gonna be a hit'
            },
            {
                user: 'R-man',
                comment: 'it is gonna be a hit'
            }
        ]
    },
    {
        imageUrl: 'https://tvline.com/wp-content/uploads/2018/01/end-of-the-fucking-world.jpg',
        user: users[4].user,
        likes: 1000, 
        caption: 'First time using canva connect and loving it',
        profile_picture: users[4].image,
        comments: [
            {
                user: 'H-man',
                comment: 'not gonna be a hit'
            },
            {
                user: 'R-man',
                comment: 'it is gonna be a hit'
            }
        ]
    }
];