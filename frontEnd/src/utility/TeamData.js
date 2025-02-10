const members = [
    {id: 1, name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    {id:2, name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    {id:3, name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com' },
    {id:4,  name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    {id:5, name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    {id:6, name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    {id:7, name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    {id:8, name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150',link:'https://www.linkedin.com' },
    {id:9, name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    {id:10, name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
  ];

  

  const events = [
    {   id: 1,
        image: './assets/eventImage1.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {   id: 2,
        image: './assets/eventImage2.jpg',
        title: 'Hackathon',
        date: 'Feb 10, 2024',
        description: '24-hour coding event. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {   id: 3,
        image: './assets/eventImage3.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates. Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic! '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {   id: 4,
        image: './assets/eventImage4.jpg',
        title: 'Hackathon',
        date: 'Feb 10, 2024',
        description: '24-hour coding event. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {   id: 5,
        image: './assets/eventImage5.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies. '.repeat(50),
        link: 'https://www.linkedin.com'
    }
];

  
  const oldEvents = [
    {id: 1, image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
    {id:2, image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    {id:3, image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' },
    {id:4, image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    {id:5, image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
  ];

  const NewEvents = [
    {id:1, delete:true, image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' ,link:'https://www.linkedin.com'},
    {id:2, delete:true, image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.',link:'https://www.linkedin.com' },
    {id:3, delete:true, image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' ,link:'https://www.linkedin.com'},
    {id:4, delete:true, image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' ,link:'https://www.linkedin.com'},
    {id:5, delete:true, image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' ,link:'https://www.linkedin.com'}
  ];


  const newsData = [
    {
      id: 1,
      userName: "Tony Stack",
      title: "Shrimp and Chorizo Paella",
      date: "September 14, 2016",
      description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      avaterUrl: "assets/roboIm3.jpg",
      newsUrl: "assets/roboIm2.jpg",
    },
    
    {
      id: 2,
      userName: "Tony Stack",
      title: "The Best Ever Vegan Chocolate Chip Cookies",
      date: "July 5, 2023",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque voluptates est nemo cumque vero perspiciatis quas magnam obcaecati fuga natus officiis earum voluptate molestias, sequi nihil unde cum laborum?Quam quia provident quaerat atque poimus animi, molestias vitae aliquam at ipsam itaque, aspernatur, dolorum officia pariatur numquam recusandae minima odio repellendus nisi! Esse beatae, corporis earum sed sint facere. Ad ab cum veniam facilis aut repellat autem atque incidunt cumque ipsum commodi, dolores rerum provident velit quo omnis quod modi saepe reiciendis fugit quos ex reprehenderit. Eos, modi dignissimos? At unde maiores deserunt temporibus porro adipisci quae velit eos officiis eveniet voluptate possimus veritatis fugiat aliquam doloremque eaque quod, quas eius ipsum reiciendis optio. Culpa atque cum quis voluptatem. est! Ea atque libero sequi neque numquam non! Dolor voluptates provident vitae! Maxime, deserunt illo? Rerum blanditiis ratione, accusamus amet a libero? Numquam inventore consectetur assumenda asperiores repellat laudantium! This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      avaterUrl: "assets/image1.jpg", // Replace with actual image path
      newsUrl: "assets/eventImage1.jpg", // Replace with actual image path
    },
    {
      id: 3,
      userName: "Tony Stack",
      title: "Easy Homemade Pizza",
      date: "March 21, 2024",
      description: "Learn how to make delicious homemade pizza from scratch! This recipe is easy to follow and perfect for a family dinner.",
      avaterUrl: "assets/image1.jpg", // Replace with actual image path
      newsUrl: "assets/eventImage2.jpg", // Replace with actual image path  
    },
    {
      id: 4,
      userName: "Tony Stack",
      title: "The Ultimate Guide to Traveling Southeast Asia",
      date: "October 10, 2022",
      description: "Discover the best places to visit, things to do, and tips for traveling in Southeast Asia.",
      avaterUrl: "assets/image1.jpg", // Replace with actual image path
      newsUrl: "assets/eventImage3.jpg", // Replace with actual image path
    },
    {
      id: 5,
      userName: "Tony Stack",
      title: "Top 10 Tips for Learning a New Language",
      date: "January 15, 2025",
      description: "Learn effective strategies for mastering a new language, from vocabulary building to immersion techniques.",
      avaterUrl: "assets/image4.jpg", // Replace with actual image path
      newsUrl: "assets/eventImage4.jpg", // Replace with actual image path
    }
  ];
  export { members, events,NewEvents, newsData,oldEvents };