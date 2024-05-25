import Template1 from '../Templates/Template1'
import Template2 from '../Templates/Template2'
import Template3 from '../Templates/Template3'


// Stores All Templates As a json State 
const temp = [
    {
        id: 1,
        thumbnail: '/images/Template1.jpg',
        data: <Template1 />
    },

    {
        id: 2,
        thumbnail: '/images/Template2.jpg',
        data: <Template2 />
    },

    {
        id: 3,
        thumbnail: '/images/Template3.jpg',
        data: <Template3 />
    },

]

export default temp;