export const project_data = [
    {
      header: 'Featured',
      color: 'purple',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/insta.png',],
        },
        {
          title: 'Instagram Clone Web Application',
          tech: ['Python', 'React', 'Flask', 'SQL'],
          preview: 'A fully functional Instagram Clone using dynamically-generated client side pages and a REST API.',
          description: 'I think a lot of Computer Science students fantasize about creating the "next big app" and this was no different. What better way to learn how it\'s done than to recreate it yourself! This project imitates all of the same functionality (and some of the looks) of the real-world application. It was pretty fun to build since it gave me an interesting look into the process of building large, scalable online applications.',
          color: 'blue',
        },
        {
          title: 'image_card',
          images: [ 'images/path.png', 'images/earth.jpg', 'images/earth1.jpg', 'images/earth2.jpg', 'images/earth3.jpg', 'images/tmp36.jpg', 'images/bare_pcb.jpg', 'images/altium_pcb.png',],
        },
        {
          title: 'Weather Balloon Payload',
          tech: ['C/C++', 'Arduino', 'Soldering', 'I2C', 'MATLAB'],
          preview: 'This project is probably my favorite to date - it won a class award!',
          description: 'Designed, built, tested, and deployed atmospheric instrumentation to analyze wind shear forces experienced by commercial airliners using a high-altitude weather balloon. This project was the result of a group effort between 5 other students throughout the course of an entire semester. We learned everything from basic electrical soldering to designing a top-specification atmospheric weather balloon. The intended real-world application of this project was to record the expected turbulence experienced by commercial airliners, and more specifically, how to avoid it.',
          github: 'https://github.com/pedroz2/weather_balloon',
          report: 'https://pedroz.dev/pdfs/final_report.pdf',
          poster: 'https://pedroz.dev/pdfs/team12_poster.pdf',
          color: 'yellow',
        },
        {
          title: 'image_card',
          images: [ 'images/stream.jpg',],
        },
        {
          title: 'Video Streaming Proxy',
          tech: ['C++', 'Multi-Threading', 'Sockets', 'HTTP', 'DNS'],
          description: 'Developed a video streaming proxy service with a team of 3 students utilizing C++ libraries for multithreading, sockets, and DNS queries. Incorporates features such as adaptive bitrate selection, throughput estimation, and multi-server load balancing to improve latency and buffering time of multiple video streams by over 40%',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/frontend.jpg', 'images/backend.jpg', 'images/mirror.png',],
        },
        {
          title: 'Smart Mirror',
          tech: ['Javascript', 'Electron', 'Raspberry-Pi',],
          description: 'Displaying morning routine information such as weather, music, and calendar on a one-way mirror for easy use. Runs on a Raspberry Pi built into the mirror using an open-source JavaScript framework called Magic Mirror.',
          github: 'https://github.com/pedroz2/smart_mirror',
          external: 'https://magicmirror.builders/',
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/buffer.png', 'images/buffer2.jpg', 'images/buffer3.png',],
        },
        {
          title: 'Buffer Overflow Security Analysis',
          tech: ['Python', 'C', 'GDB', 'Computer-Architecture',],
          description: 'An investigation into various control-flow hijacking vulnerabilities in application software. Focused on buffer overflows and remote-orientated programming.',
          report: 'https://pedroz.dev/pdfs/stack_smashing.pdf',
          external: 'https://owasp.org/www-community/vulnerabilities/Buffer_Overflow',
          color: 'cyan',
        },
      ]
    },
    {
      header: '2020',
      color: 'green',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/new_website.png',],
        },
        {
          title: 'Personal Website Update',
          description: 'Updated and rewrote my entire personal website using React and SCSS for this year\'s internship search. I hope you like it! ',
          tech: ['Bootstrap', 'React', 'SCSS', 'Javascript'],
          color: 'yellow',
          github: 'https://github.com/pedroz2/pedroz2.github.io',
          external: 'https://pedroz.dev/',
        },
        {
          title: 'image_card',
          images: [ 'images/mapreduce.png',],
        },
        {
          title: 'MapReduce Server Framework',
          description: 'Description is on the way!',
          tech: ['Python', 'Flask', 'Jinja2', 'Bootstrap'],
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/insta.png',],
        },
        {
          title: 'Instagram Clone Web Application',
          tech: ['Python', 'React', 'Flask', 'SQL'],
          description: 'A fully functional Instagram Clone using dynamically-generated client side pages and a REST API. Imitates almost all of the functionality (and some of the looks) of the actual social media application. ',
          color: 'blue',
        },
        {
          title: 'image_card',
          images: [ 'images/stream.jpg',],
        },
        {
          title: 'Video Streaming Proxy',
          tech: ['C++', 'Multi-Threading', 'Sockets', 'HTTP', 'DNS'],
          description: 'Developed a video streaming proxy service with a team of 3 students utilizing C++ libraries for multithreading, sockets, and DNS queries. Incorporates features such as adaptive bitrate selection, throughput estimation, and multi-server load balancing to improve latency and buffering time of multiple video streams by over 40%',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/buffer.png', 'images/buffer2.jpg', 'images/buffer3.png',],
        },
        {
          title: 'Buffer Overflow Security Analysis',
          tech: ['Python', 'C', 'GDB', 'Computer-Architecture',],
          description: 'An investigation into various control-flow hijacking vulnerabilities in application software. Focused on buffer overflows and remote-orientated programming.',
          external: 'https://owasp.org/www-community/vulnerabilities/Buffer_Overflow',
          color: 'cyan',
        }, 
        {
          title: 'image_card',
          images: [ 'images/lc2k.png',],
        },
        {
          title: 'LC-2K Linker, Pipelined Processor, and Cache Simulator',
          description: 'Description is on the way!',
          tech: ['Python', 'Flask', 'Jinja2', 'Spotify API', 'SQL'],
          color: 'cyan',
        },
        {
          title: 'image_card',
          images: [ 'images/xss.png',],
        },
        {
          title: 'Website Penetration Testing',
          tech: ['Python', 'C', 'GDB', 'Computer-Architecture',],
          description: 'An investigation into various web-security penetration attacks including SQL Injection, Cross Site Scripting (XSS), and Cross Site Request Forgery (CSRF).',
          external: 'https://owasp.org/www-community/vulnerabilities/Buffer_Overflow',
          color: 'cyan',
        }, 
        {
          title: 'image_card',
          images: [ 'images/mongo.png',],
        },
        {
          title: 'Fakebook MongoDB Database',
          description: 'Description is on the way!',
          tech: ['Python', 'Flask', 'Jinja2', 'Spotify API', 'SQL'],
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/crypto.jpg',],
        },
        {
          title: 'Cryptography Analysis',
          description: 'Description is on the way!',
          tech: ['Python', 'Flask', 'Jinja2', 'Spotify API', 'SQL'],
          color: 'green',
        },     
      ]
    },
    {
      header: '2019',
      color: 'yellow',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/path.png', 'images/earth.jpg', 'images/earth1.jpg', 'images/earth2.jpg', 'images/earth3.jpg', 'images/tmp36.jpg', 'images/bare_pcb.jpg', 'images/altium_pcb.png',],
        },
        {
          title: 'Weather Balloon Payload',
          tech: ['C/C++', 'Arduino', 'Soldering', 'I2C', 'MATLAB'],
          description: 'Designed, built, tested, and deployed atmospheric instrumentation to analyze wind shear forces experienced by commercial airliners using a high-altitude weather balloon. The intended real-world application of this project was to record the expected turbulence experienced by commercial airliners, and more specifically, how to avoid it. This project is probably my favorite to date - it won a class award!',
          images: [ 'images/path.png', 'images/earth.JPG', 'images/earth1.JPG', 'images/earth2.JPG', 'images/earth3.JPG', 'images/tmp36.jpg', 'images/bare_pcb.jpg', 'images/altium_pcb.png',],
          github: 'https://github.com/pedroz2/weather_balloon',
          report: 'https://pedroz.dev/pdfs/final_report.pdf',
          poster: 'https://pedroz.dev/pdfs/team12_poster.pdf',
          color: 'yellow',
        },
        {
          title: 'image_card',
          images: [ 'images/frontend.jpg', 'images/backend.jpg', 'images/mirror.png',],
        },
        {
          title: 'Smart Mirror',
          tech: ['Javascript', 'Electron', 'Raspberry-Pi',],
          description: 'Displaying morning routine information such as weather, music, and calendar on a one-way mirror for easy use. Runs on a Raspberry Pi built into the mirror using an open-source JavaScript framework called Magic Mirror.',
          github: 'https://github.com/pedroz2/smart_mirror',
          external: 'https://magicmirror.builders/',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/old_website.png',],
        },
        {
          title: 'Personal Website V1',
          description: 'This was a fun project that started as a way to further develop my front-end skills and ended as a moderate obsession. I am pretty proud of how it turned out, it looks pretty professional given the expectations I had going into it.',
          tech: ['HTML', 'CSS', 'JavaScript', 'Jekyll', 'Ruby'],
          external: 'https://pedroz.dev/old_website/',
          github: 'https://github.com/pedroz2/pedroz.dev/tree/old_website',
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/treasurehunt.jpg',],
        },
        {
          title: 'Treasure Hunt',
          description: 'This project was a deep dive on specific data structures, specifically the stack and queue. In summary, we were given a 2D 100x100 grid of a treasure map with land, water, obstructions, and the treasure. Our task was to find the treasure coordinate and more importantly, the correct path to that coordinate depending on the search mode used (Stack vs. Queue searching strategies). This was my first project you couldn\'t just code in one sitting - you needed to plan and think about the correct Data Structures to use for each part of the program.',
          tech: ['C++',],
          color: 'cyan',
        },
        {
          title: 'image_card',
          images: [ 'images/logmanager.jpg',],
        },
        {
          title: 'Log Manager',
          description: 'This project consisted of a user inputting a huge file of logs. Our task was to organize and index it, then allow the user to perform a handle of commands (such as print, sort, keyword search, time search, etc) to output a text file with only the logs they want. The main learning goal of this project was to understand the time complexities of different data structures and algorithms, as we had to fit all of the commands given within their relevant time allotment to pass the test.',
          tech: ['C++',],
          color: 'orange',
        },
        {
          title: 'image_card',
          images: [ 'images/pathfinder.jpg',],
        },
        {
          title: 'Path Finder',
          description: 'This project was aimed to reinforce the usage of pathfinding algorithms like Djikstra, Kruskal, and Prims, as well as reinforce the usage of more advanced programming techniques like Branch and Bound, Backtracing, and Dynamic Programming. We were given coordinates in a 2d map and had to find things such as the minimum spanning tree (shortest path) between two points, the most optimal path between all points with a given heuristic (for this project, we used nearest arbitrary insertion), and a moderately optimal path in a much faster time.',
          tech: ['C++',],
          color: 'green',
        },
      ]
    },
    {
      header: '2018',
      color: 'blue',
      projects: [   
        {
          title: 'image_card',
          images: [ 'images/content_resize.jpg',],
        },     
        {
          title: 'Content-Aware Image Resizing',
          description: 'This was a tool that essentially parsed individual pixels of an image and calculated the contrast between its surrounding pixels. Depending on the input you give the program (output length/width, crop/resize), it uses the contrast between sections of the image to decide where we can afford to resize an image without distorting its significant parts too much. The idea behind this project was to essentially find unimportant areas in the image that we can use to resize the image in hopes of changing the contents of the image as little as possible from the perspective of the viewer.',
          tech: ['C++',],
          color: 'blue',
        },
        {
          title: 'image_card',
          images: [ 'images/euchre.jpg',],
        },     
        {
          title: 'Euchre Simulator',
          description:
            'This project allowed users to have either 2 players playing against each other, or a few flavors of AI to play against.  It was my first project that was too large and complex to this about all at once. You had to break it up and use a wonderful thing called abstraction, which assumes that the other components of your program would work correctly (spoiler: they didn\'t). This was probably one of my most memorable projects, as my partner and I stayed up to coding until around 5 am to finish the project early for an upcoming busy week. It had countless edge cases that you had to account for and was my first introduction to more advanced debugging tools.',
          tech: ['C++',],
          color: 'yellow',
        },
        {
          title: 'image_card',
          images: [ 'images/piazzaclassifier.jpg',],
        },     
        {
          title: 'Piazza Post Classifier',
          description: 'The Piazza Post Classifier took in a large number of forum posts from Piazza and used machine learning/natural language processing with a dataset of prelabeled Piazza posts to generate connections between common keywords and their labels. Further posts can be entered into the program which then returns its prediction on the suggested topic the classifier thinks the post is from. I enjoyed this project as it was my first introduction to big data and using machine learning techniques to process and use that data. It was a neat project that had a satisfying result.',
          tech: ['C++',],
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/polish.jpg',],
        },     
        {
          title: 'Reverse Polish Notation Calculator',
          description: 'The idea behind the Reverse Polish Notation (RPN) Calculator is that it takes the arguments first, and then the operations that will be performed between them. Modern calculators do that in reverse - for example, 1+2-3 would be 1,2+3- in the RPN calculator. This project was meant to demonstrate and teach the stack data structure, which we also made by creating a wrapper on the C++ vector library.',
          tech: ['C++',],
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/shuttle.png',],
        },     
        {
          title: 'Braking Coefficient',
          description: 'This program simulated a shuttle landing with given system parameters including initial velocity, air braking coefficient, braking distance, and a few others. It would then return the most optimal braking coefficient - one that would use up as much of the runway as possible to reduce passenger discomfort, but also still result in a safe landing. The purpose of this project was essentially to get a grasp on using a program to help solve complex math and physics problems - it worked pretty well.',
          tech: ['C++',],
          color: 'yellow',
        },
      ]
    },
    
    {
      header: '2017',
      color: 'red',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/rps101.png',],
        },
        {
          title: 'RPS-101',
          preview: 'Essentially Rock Paper Scissors on a lot of steroids, with 101 different gestures to be exact.',
          description: 'Each gesture beats 50 other gestures, as well as loses to the remaining 50. RPS-101 had 5,050 different outcomes and just under a one percent chance of a tie - it was easily the move convoluted game I\'ve ever programmed. You can find more \'normal\' versions too, like RPS-15 and RPS-25 - I actually programmed those first and that\'s what led me to RPS-101. The funny thing is, I technically don\'t even know if it is bug-free because I never tested all 5050 outcomes.',
          external: 'https://www.umop.com/rps.htm',
          tech: ['Java',],
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/blackjack.jpg',],
        },
        {
          title: 'Blackjack',
          preview: 'Blackjack was probably the coolest project I made during my time in high school.',
          description: 'It featured an ASCII-based GUI (because I didn\'t know how to create an actual GUI) printed in your choice of CLI and allowed you to play a fully fleshed out Blackjack game with a predictable AI dealer. According to the specifications, the dealer would always take a card if it was 16 or less and stand otherwise. While the game is conceptually simple, I still have fond memories of creating my own version of it.',
          tech: ['Java',],
          color: 'blue',
        },
        {
          title: 'image_card',
          images: [ 'images/robocode.png',],
        },
        {
          title: 'Robocode Robot',
          preview: 'Robocode is a simple to use, educational Java framework that allows you to create autonomous robots.',
          description: 'The robots would be put in a gladiator-esque arena and fight against other robots to the death. There are many techniques that were ready to be implemented depending on your dedication - stuff like priority selection of enemy robots, leading targets for more accurate shots, and randomized movement depending on if another robot is aiming at you. You could make your robot have some personality as well - I know a few people who made their robot drive in circles, waiting until one person got close enough before it relentlessly chased them down with melee attacks. It was a pretty cool project that introducted me to using libraries and frameworks in your program.',
          tech: ['Java', 'Robocode',],
          external: 'https://robocode.sourceforge.io/',
          color: 'yellow',
        },
        {
          title: 'image_card',
          images: [ 'images/prime.png',],
        },
        {
          title: 'Prime Number Calculator',
          preview: 'A neat little project I did in high school that would generate a list of prime numbers smaller than N (given by the user).',
          description: 'Obviously, since I did not run this on a multi-million dollar supercomputer and only had moderate knowledge of programming/math, it was far more rudimentary than you think. Don\'t tell anyone, but I really only tested it up to 100 because that was all the project specification required. Despite it running on lots of spaghetti code, it still compiled and returned the results pretty fast.',
          tech: ['Java',],
          color: 'red',
        },    
      ]
    },  

    {
      header: '2016',
      color: 'green',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/barca.png',],
        },
        {
          title: 'FC Barcelona Fanclub',
          preview: 'When I first looked back at my old website to add it to this portfolio, the first thing I thought was "I remember this looking better."',
          description: 'I created this website in my high school Intro to Computer Science class - it was my first introduction to anything relevant to programming. After watching some basic YouTube tutorials, I built the website using simple container-based styling. It\'s not anything fancy, but it got the job done. Who knows why FC Barcelona haven\'t given me a contract yet?',
          tech: ['HTML', 'CSS'],
          external: 'https://pedroz.dev/fcb_website/FCBarca_main.html',
          color: 'cyan',
        },
      ]
    }, 
]