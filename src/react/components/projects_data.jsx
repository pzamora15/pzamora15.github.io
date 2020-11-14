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
          description: 'I think a lot of Computer Science students fantasize about creating the "next big app" - this was no different. What better way to learn how it\'s done than to recreate it yourself? This project imitates the same functionality of the real-world application using a React front end, Flask/Python backend, and SQL database. It was pretty fun to build since it gave me an interesting look into the process of building large, scalable online applications.',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/path.png', 'images/earth.jpg', 'images/earth1.jpg', 'images/earth2.jpg', 'images/earth3.jpg', 'images/tmp36.jpg', 'images/bare_pcb.jpg', 'images/altium_pcb.png',],
        },
        {
          title: 'Weather Balloon Payload',
          tech: ['C/C++', 'Arduino', 'Soldering', 'I2C', 'MATLAB'],
          preview: 'This project is probably my favorite to date - it won a class award!',
          description: 'This semester-long, 5 person project went from learning the basics of electrical wiring and soldering to launching a fully operational and to-specification atmospheric weather balloon. Our group elected to include two extra sensors, the MPU-9250 Gyroscope/Accelerometer, and the BMP-280 Barometer - with these, we were able to deduce wind shearing forces at different altitudes throughout Earth’s atmosphere. The intended real-world application of this project was to record the expected turbulence experienced by commercial airliners, and more specifically, how to avoid it.',
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
          tech: ['C++', 'Multi-Threading', 'Sockets', 'DNS',],
          preview: 'A program that was designed to streamline a user\'s video watching experience.',
          description: 'With video dominating much of the internet these days, building a project around video streams seemed very interesting. I worked with a team of 3 other students to create a mock proxy service that utilizes C++ libraries for multi-threading, sockets, and DNS services. We implemented techniques such as adaptive bitrate selection, throughput estimation, and DNS Server load balancing (using Content Delivery Networks) to improve the latency and buffering time of concurrent video streams by over 40%.',
          color: 'cyan',
        },
        {
          title: 'image_card',
          images: [ 'images/frontend.jpg', 'images/backend.jpg', 'images/mirror.png',],
        },
        {
          title: 'Smart Mirror',
          tech: ['JavaScript', 'Electron', 'Raspberry-Pi',],
          preview: 'I started this project as a direct answer to one of my daily problems, and it turned out pretty well.',
          description: 'I did a few weeks of YouTube research on how to build one and started over the summer. For me, the hardest part was creating a frame that would fit the mirror since I had no previous experience with woodworking. After that, I was able to connect everything up a set up a Raspberry PI server that I could remote into and install the Magic Mirror framework. I spent about a month configuring this huge JavaScript library, even using some third-party code (specifically for the calendar), and tried to get everything to my liking. I am pretty proud of the result. I can finally see the weather, date, and whatever I have to do that day in the mirror!',
          github: 'https://github.com/pedroz2/smart_mirror',
          external: 'https://magicmirror.builders/',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/mapreduce.png',],
        },
        {
          title: 'MapReduce Server Framework',
          preview: 'This project is centered around building a distributed server to run MapReduce jobs.',
          description: 'MapReduce is a well-known data processing algorithm that is specifically designed to be run in parallel across multiple machines for large datasets. At a high level, MapReduce can perform operations (such as counting words) at speeds far faster than any single computer due to it\'s special ability to split up work across multiple processors. This framework is designed to facilitate MapReduce jobs in a scalable fashion, using one Master thread and an arbitrary amount of Worker threads. Each Worker is able to communicate with the Master thread using both TCP and UDP Sockets to exchange information such as task assignments, heartbeats, worker errors, and status updates. ',
          tech: ['Python', 'Multi-Threading', 'Sockets', 'MapReduce'],
          color: 'red',
        }, 
      ]
    },
    {
      header: '2020',
      color: 'green',
      projects: [
        {
          title: 'image_card',
          images: [ 'images/mapreduce.png',],
        },
        {
          title: 'MapReduce Server Framework',
          preview: 'This project is centered around building a distributed server to run MapReduce jobs.',
          description: 'MapReduce is a well-known data processing algorithm that is specifically designed to be run in parallel across multiple machines for large datasets. At a high level, MapReduce can perform operations (such as counting words) at speeds far faster than any single computer due to it\'s special ability to split up work across multiple processors. This framework is designed to facilitate MapReduce jobs in a scalable fashion, using one Master thread and an arbitrary amount of Worker threads. Each Worker is able to communicate with the Master thread using both TCP and UDP Sockets to exchange information such as task assignments, heartbeats, worker errors, and status updates. ',
          tech: ['Python', 'Multi-Threading', 'Sockets', 'MapReduce'],
          color: 'blue',
        }, 
        {
          title: 'image_card',
          images: [ 'images/cuda.png',],
        },
        {
          title: 'Parallel RGB Image Convolution',
          preview: 'This is one of the projects from my Applied Parallel Computing with GPUs class.',
          description: 'Convolution can be used for many purposes in Image Processing, such as blurring, sharpening, edge detection, and more. This CUDA program runs on the University\'s computation cluster, and applies an arbitrary mask over each pixel in an image to achieve a desired effect. Since it runs on a GPU (rather than a normal, serial CPU) it is highly parallel and can compute over extremely large data sets in reasonable time. ',
          tech: ['C', 'CUDA', 'Parallel-Computation',],
          color: 'red',
        },        
        {
          title: 'image_card',
          images: [ 'images/new_website.png',],
        },
        {
          title: 'Personal Website Update',
          preview: 'I hope you like what I\'ve done with the place :)',
          description: 'Updated and rewrote my personal website using React and SCSS for this year\'s internship search - it was originally forked off of Shannon Lau\'s website (credited in my footer). I\'m still currently working on a few things for this website, such as how I am displaying my project cards. For now, I think I\'ve settled on a design I like.',
          tech: ['React', 'SCSS', 'JavaScript'],
          color: 'yellow',
          github: 'https://github.com/pedroz2/pedroz.dev',
          external: 'https://pedroz.dev/',
        },
        {
          title: 'image_card',
          images: [ 'images/insta.png',],
        },
        {
          title: 'Instagram Clone Web Application',
          tech: ['Python', 'React', 'Flask', 'SQL'],
          preview: 'A fully functional Instagram Clone using dynamically-generated client side pages and a REST API.',
          description: 'I think a lot of Computer Science students fantasize about creating the "next big app" - this was no different. What better way to learn how it\'s done than to recreate it yourself? This project imitates the same functionality of the real-world application using a React front end, Flask/Python backend, and SQL database. It was pretty fun to build since it gave me an interesting look into the process of building large, scalable online applications.',
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/stream.jpg',],
        },
        {
          title: 'Video Streaming Proxy',
          tech: ['C++', 'Multi-Threading', 'Sockets', 'DNS',],
          preview: 'A program that was designed to streamline a user\'s video watching experience.',
          description: 'With video dominating much of the internet these days, building a project around video streams seemed very interesting. I worked with a team of 3 other students to create a mock proxy service that utilizes C++ libraries for multi-threading, sockets, and DNS services. We implemented techniques such as adaptive bitrate selection, throughput estimation, and DNS Server load balancing (using Content Delivery Networks) to improve the latency and buffering time of concurrent video streams by over 40%.',
          color: 'cyan',
        },
        {
          title: 'image_card',
          images: [ 'images/udp.jpg',],
        },
        {
          title: 'Reliable Transport Protocol',
          tech: ['C++', 'UDP', 'Sockets',],
          preview: 'This project was an interesting challenge: build a reliable transport protocol ontop of UDP.',
          description: 'Knowing that UDP effectively screams into the void with no idea if you recieved the data, guaranteeing reliable transport is difficult. The idea behind this project is that you are effectively building your own version of TCP (the main transport protocol used by the internet today) from scratch. The protocol works on the simple idea that each outgoing packet has a corresponding acknowledgement packet sent by the reciever. If you do not get an acknowledgement from the reciever, you retransmit the packet. It also includes other important features such as sliding window transmission, buffering out-of-order packets, and selective repeat. ',
          external: 'https://www2.tkn.tu-berlin.de/teaching/rn/animations/gbn_sr/',
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/buffer.png',],
        },
        {
          title: 'Control Flow Hijacking',
          tech: ['Python', 'C', 'GDB',],
          preview: 'Who knew that writing past the end of an array in C could be so fun.',
          description: 'This project focused on control flow hijacking attacks, specifically buffer overflows and remote-orientated programming. We were giving multiple programs written in C with varying levels of security and wrote buffer overflow attacks that would hijack the call stack of the program to run malicious code. I learned a lot about GDB while working on this project, since we would use it to inspect the memory and individual instructions of the program to learn exactly what we would need to overwrite in order to gain control of the call stack.',
          external: 'https://owasp.org/www-community/vulnerabilities/Buffer_Overflow',
          color: 'yellow',
        }, 
        {
          title: 'image_card',
          images: [ 'images/lc2k.png',],
        },
        {
          title: 'LC-2K Linker, Pipelined Processor, and Cache Simulator',
          preview: 'This was the main project in Michigan\'s Computer Architecture course, easily one of my favorite classes ever.',
          description: 'LC-2K is a educational Microprocessor and Instruction Set created by the Michigan EECS department to help students understand computers at the assembly instruction level. Throughout the course of a semester, we created our own Microprocessor - first starting with a simple instruction assembler and simulator. We then added variable labeling and file linking functionality, so we could write LC-2K programs more easily and use multiple files. The next step was to rewrite our simulator to emulate a pipelined processor and add branching functionality to speed up execution and create more complex programs. Lastly, we programmed a memory cache alongside our processor and added functionality so the simulator could use it. ',
          tech: ['C', 'Computer-Architecture',],
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/xss.png',],
        },
        {
          title: 'Website Penetration Testing',
          preview: 'I had a lot of fun doing this project since most of it was just using really clever tricks to defeat the security measures.',
          description: 'This project explored the use of attacks like SQL Injection, Cross Site Scripting (XSS), and Cross Site Request Forgery (CSRF) on a unsecured, sample website. We were given various levels of security (For instance, XSS defenses included removing <script> tag, removing most HTML tags, and removing [;\'\\"] symbols) and expected to create a valid attack that would execute an arbritrary malicious payload on the website\'s backend.  ',
          external: 'https://owasp.org/www-community/vulnerabilities/Buffer_Overflow',
          tech: ['Python', 'SQL', 'JavaScript',],
          color: 'blue',
        }, 
        {
          title: 'image_card',
          images: [ 'images/mongo.png',],
        },
        {
          title: 'Fakebook SQL/MongoDB Database',
          preview: 'An exercise in database management for the fictional company Fakebook.',
          description: 'The purpose of this project was to build familiarity with both relational and non-relational database management systems. Specifically, we had to create mock databases using MongoDB and PostgreSQL that would store data for major features such as Users, Messages, Photos, and Events. We were given a built application with a front-end and we were reponsible for designing, building, and executing relevant queries inside of a C++ application that would allow the app to function. These queries ranged from very easy (find all users living in a specific city) to very hard (for each city, find the average friend count of users in the same city using MapReduce).',
          tech: ['C++', 'SQL', 'MongoDB', 'PostgreSQL',],
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/crypto.jpg',],
        },
        {
          title: 'Cryptography Analysis',
          preview: 'An investigation into the vulnerabilites of old cryptographic technology.',
          description: 'This project specifically investigated a few well-known vulnerabilites including the MD5/SHA length-extension attack and hash collisions, Cipher Frequency Analysis, RSA Signature forgery, and CBC Padding Oracle Attacks. All of these vulnerabilites are well-documented and were instrumental in the process of advancing modern cryptography. This was a very cool project to do, since it is effectively the real-life equivalent of the hacking you seen in movies or television.',
          tech: ['Python', 'Encyption', 'Hashing',],
          color: 'yellow',
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
          preview: 'This project is probably my favorite to date - it won a class award!',
          description: 'This semester-long, 5 person project went from learning the basics of electrical wiring and soldering to launching a fully operational and to-specification atmospheric weather balloon. Our group elected to include two extra sensors, the MPU-9250 Gyroscope/Accelerometer, and the BMP-280 Barometer - with these, we were able to deduce wind shearing forces at different altitudes throughout Earth’s atmosphere. The intended real-world application of this project was to record the expected turbulence experienced by commercial airliners, and more specifically, how to avoid it.',
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
          tech: ['JavaScript', 'Electron', 'Raspberry-Pi',],
          preview: 'I started this project as a direct answer to one of my daily problems, and it turned out pretty well.',
          description: 'I did a few weeks of YouTube research on how to build one and started over the summer. For me, the hardest part was creating a frame that would fit the mirror since I had no previous experience with woodworking. After that, I was able to connect everything up a set up a Raspberry PI server that I could remote into and install the Magic Mirror framework. I spent about a month configuring this huge JavaScript library, even using some third-party code (specifically for the calendar), and tried to get everything to my liking. I am pretty proud of the result. I can finally see the weather, date, and whatever I have to do that day in the mirror!',
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
          preview: 'The first iteration of my online portfolio.',
          description: 'This was a fun project that started as a way to further develop my front-end skills and ended as a moderate obsession. I am pretty proud of how it turned out, it looks pretty professional given the expectations I had going into it.  It first started as a React template website, but then I started using Hugo as a static site generator. I found the themes system in Hugo to be too much of a hassle so I switched to Jekyll in hopes of remedying that, but it didn\'t. I gave up on trying to use somebody else\'s theme and finally made my own.',
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
          preview: 'This project was deep dive into the stack and queue data structures.',
          description: 'We were given a 2D 100x100 grid of a treasure map with land, water, obstructions, and the treasure. Our task was to find the treasure coordinate and more importantly, the correct path to that coordinate depending on the search mode used (Stack vs. Queue searching strategies). This was my first project you couldn\'t just code in one sitting - you needed to plan and think about the correct Data Structures to use for each part of the program.',
          tech: ['C++',],
          color: 'cyan',
        },
        {
          title: 'image_card',
          images: [ 'images/pathfinder.jpg',],
        },
        {
          title: 'Path Finder',
          description: 'This project was aimed to reinforce the usage of pathfinding algorithms like Djikstra, Kruskal, and Prims, as well as reinforce the usage of more advanced programming techniques like Branch and Bound, Backtracing, and Dynamic Programming. We were given coordinates in a 2d map and had to find things such as the minimum spanning tree (shortest path) between two points, the most optimal path between all points with a given heuristic (for this project, we used nearest arbitrary insertion), and a moderately optimal path in a much faster time.',
          tech: ['C++',],
          color: 'orange',
        },
        {
          title: 'image_card',
          images: [ 'images/logmanager.jpg',],
        },
        {
          title: 'Log Manager',
          description: 'This project consisted of a user inputting a huge file of logs - our task was to organize and index it. Then we would allow the user to perform a handful of commands (such as print, sort, keyword search, time search, etc) to output a text file with only the logs they want. The main learning goal of this project was to understand the time complexities of different data structures and algorithms, as we had to fit all of the commands given within their relevant time allotment to pass the test.',
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
          preview: 'Still to this day, the concept of this program is insanely cool to me.',
          description: 'This was a tool that parsed individual pixels of an image and calculated the contrast between its surrounding pixels. Depending on the input you give the program (output length/width, crop/resize), it uses the contrast between sections of the image to decide where we can afford to resize an image without distorting its significant parts too much. The idea behind this project was to find unimportant areas in the image that we can use to resize the image in hopes of changing the contents of the image as little as possible from the perspective of the viewer.',
          tech: ['C++',],
          color: 'blue',
        },
        {
          title: 'image_card',
          images: [ 'images/euchre.jpg',],
        },     
        {
          title: 'Euchre Simulator',
          preview: 'This program simulated Euchre (a complex card game popular in Michigan) between 2 human players, or a few flavors of AI.',
          description: 'It was my first project that was too large and complex to this about all at once. You had to break it up and use a wonderful thing called abstraction, which assumes that the other components of your program would work correctly (spoiler: they didn\'t). This was probably one of my most memorable projects, as my partner and I stayed up to coding until around 5 am to finish the project early for an upcoming busy week. It had countless edge cases that you had to account for and was my first introduction to more advanced debugging tools.',
          tech: ['C++',],
          color: 'orange',
        },
        {
          title: 'image_card',
          images: [ 'images/piazzaclassifier.jpg',],
        },     
        {
          title: 'Piazza Post Classifier',
          description: 'The Piazza Post Classifier took in a large number of forum posts from Piazza and used natural language processing with a dataset of prelabeled Piazza posts to generate connections between common keywords and their labels. Further posts can be entered into the program which then returns its prediction on the suggested topic the classifier thinks the post is from. I enjoyed this project as it was my first introduction to big data and using machine learning techniques to process and use that data. It was a neat project that had a satisfying result.',
          tech: ['C++', 'Natural-Language-Processing'],
          color: 'green',
        },
        {
          title: 'image_card',
          images: [ 'images/polish.jpg',],
        },     
        {
          title: 'Reverse Polish Notation Calculator',
          description: 'The idea behind the everse Polish Notation (RPN) calculator is that it takes the arguments first, and then the operations that will be performed between them. Modern calculaters do that in reverse - for example, 1+2-3 would be 1,2+3- in the RPN calculator. This project was a cool way of demonstrating and learning the stack data structure, which we also made by creating a wrapper on the C++ vector library.',
          tech: ['C++',],
          color: 'red',
        },
        {
          title: 'image_card',
          images: [ 'images/shuttle.png',],
        },     
        {
          title: 'Braking Coefficient',
          description: 'This program simulated a shuttle landing with given system parameters including initial velocity, air braking coefficient, braking distance, and a few others. It would then return the most optimal braking coefficient - one that would use up as much of the runway as possible to reduce passenger discomfort, but also still result in a safe landing. The purpose of this project was to get a grasp on using a program to help solve complex math and physics problems - it worked pretty well.',
          tech: ['C++',],
          color: 'cyan',
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
          preview: 'Essentially Rock Paper Scissors on steroids, with 101 different gestures to be exact.',
          description: 'Each gesture beats 50 other gestures, as well as loses to the remaining 50. RPS-101 had 5,050 different outcomes and just under a one percent chance of a tie - it was easily the move convoluted game I\'ve ever programmed. You can find more \'normal\' versions too, like RPS-15 and RPS-25 (I actually programmed those first and that\'s what led me to RPS-101). The funny thing is, I technically don\'t even know if it is bug-free because I never tested all 5050 outcomes.',
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
          description: 'The robots would be put in a gladiator-esque arena and fight against other robots to the death. There are many techniques that were ready to be implemented depending on your dedication - stuff like priority selection of enemy robots, leading targets for more accurate shots, and randomized movement if another robot is aiming at you. You could make your robot have some personality as well - I know a few people who made their robot drive in circles, waiting until one person got close enough before it relentlessly chased them down with melee attacks. It was a pretty cool project that introducted me to using libraries and frameworks in your program.',
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