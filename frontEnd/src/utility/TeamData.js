const members = [
    { name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    { name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    { name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com' },
    { name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    { name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    { name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
    { name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    { name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150',link:'https://www.linkedin.com' },
    { name: 'xyz', position: 'President', year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnI-U4PmhOmaaGJ_Cs4FJJCHSN8OCECA5jw&s/150' ,link:'https://www.linkedin.com'},
    { name: 'abc', position: 'Secretary',  year: "4th", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QGgimkc7qkXiLMPTRH-_-SeS7ggKX5wr5Q&s/150' ,link:'https://www.linkedin.com'},
  ];

  

  const events = [
    {
        image: './assets/eventImage1.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {
        image: './assets/eventImage2.jpg',
        title: 'Hackathon',
        date: 'Feb 10, 2024',
        description: '24-hour coding event. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {
        image: './assets/eventImage3.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates. Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic! '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {
        image: './assets/eventImage4.jpg',
        title: 'Hackathon',
        date: 'Feb 10, 2024',
        description: '24-hour coding event. '.repeat(50),
        link: 'https://www.linkedin.com'
    },
    {
        image: './assets/eventImage5.jpg',
        title: 'Tech Talk',
        date: 'Jan 15, 2024',
        description: 'A talk on emerging technologies. '.repeat(50),
        link: 'https://www.linkedin.com'
    }
];

  
  const oldEvents = [
    { image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
    { image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' },
    { image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
  ];

  const NewEvents = [
    {delete:true, image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' ,link:'https://www.linkedin.com'},
    {delete:true, image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.',link:'https://www.linkedin.com' },
    {delete:true, image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' ,link:'https://www.linkedin.com'},
    {delete:true, image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' ,link:'https://www.linkedin.com'},
    {delete:true, image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' ,link:'https://www.linkedin.com'}
  ];


  const newsData = [
    {
      id: 1,
      userName: "Tony Stack",
      title: "Shrimp and Chorizo Paella",
      date: "September 14, 2016",
      description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      avaterUrl: "assets/roboIm3.jpg",
      newsUrl: "assets/roboIm2.jpg",
    },
    {
      id: 2,
      userName: "Tony Stack",
      title: "The Best Ever Vegan Chocolate Chip Cookies",
      date: "July 5, 2023",
      description: "These chewy, gooey vegan chocolate chip cookies are the best! They're made with simple ingredients and are sure to satisfy your sweet tooth.",
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