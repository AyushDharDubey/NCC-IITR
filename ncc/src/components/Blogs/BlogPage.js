import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import './BlogPage.css';

export default function BlogPage() {
    const params = useParams();

    const blogId = params.blogId;


    const blogs = {
        "blog-aj": {
            title: "NCC IITR in Pre-Pandemic Days",
            author: "Abhishek Jha",
            date: "29 July, 2021",
            imgSrc: "/images/blogs/ajBlog.jpg",
            content: [
                "When the historic Pearl Gate welcomes the new students inside the campus of the oldest technical institute in Asia, there is anticipation, excitement and joy in the air. The students, even after having done an extensive amount of research, are in awe of what all the institute has to offer, and the groups and clubs of IIT Roorkee are ready with open arms to welcome their new members. Among these groups is the 3UK CTR National Cadet Corps, one of the most decorated and respected groups of the campus. Known for its regular and active participation in numerous programmes of national importance, the NCC of IIT Roorkee is one of its kind, providing students with an opportunity to better themselves in myriad ways, inculcating in them the values of discipline, unity, teamwork and patriotism and inciting in them an insatiable hunger to do something for the country, to make our nation proud; these are the values and thoughts which leave an impact, strong and lifelong, on the personality of the cadets.",
                "The NCC IIT Roorkee celebrates Independence and Republic days with an impressive Guard of Honour to the Director of the institute. Against a background of the venerated James Thomason building and the lush green grounds in front of it, the cadets, properly dressed and groomed, with weapons in their hands and glow of pride in their eyes, are the jewels of the celebration of National Festivals. What is behind this auspicious show is an enormous amount of discipline in the cadets, and a persistent effort to become better, better at everything that they do. During the practice marches, not everyone is equally comfortable with holding the rifle and parading, but they hold on and try to do the things as perfectly as possible. Not everyone is on time for the practice in the beginning but with time, the cadets become more serious about their punctuality. This is the first thing that the NCC teaches its cadets, the importance of time and punctuality; the spirit of unity and the value of discipline.",
                "During their course of stay in the campus, the cadets attend the lectures taken by the ANOs who involve the cadets intellectually and provide them with the necessary mental inputs required for personality development and building of a great character. The classes and march sessions at the 3 UK CTR NCC unit held weekly help with the physical development and involvement of the cadets and this habit helps, after two or three years of JEE preparation, in developing a healthy lifestyle and a good, disciplined life.",
                "The 3 UK CTR NCC organizes many events in the campus too and has a substantial campus presence. Cleanliness and tree-plantation drives are organized regularly to make people aware about the environment and the problems it is facing. The cadets also get an opportunity to interact with a huge number of people from different backgrounds during these drives leading to the development of communication skills in them. Treasure hunts are held every year, with a good number of people participating in them to make the hunts successful. The NCC IIT Roorkee also holds sports meets and competitions having both indoor and outdoor sports, which witness huge popularity among students, and they develop the values of unity and team-spirit. The cadets also have chance to get into the core team of the NCC and it leads to development of several skills in the cadets, be it writing ability, or creative designing or organizing abilities, the cadets get the opportunity to develop them leading to their betterment at a personal level, too.",
                "The NCC is nothing without its physical activities. The 3 UK CTR NCC holds treks for its cadets to various places, embellished with the beauty of mother nature and in the heart of the Himalayas, where the cadets get the opportunity to witness nature in its raw form and get a break from the routine life in tranquility and enchantment of nature. Firing events are also organized by the NCC to give the cadets a firsthand experience at the act of shooting, which acts as a basic military training should the need ever arise.",
                "The NCC IIT Roorkee also provides its cadets with a preliminary knowledge about the Indian army, its hierarchy and proud history. The values of patriotism and love for one’s nation is invoked in the cadets upon learning about the supreme sacrifices made by our brave-hearts.",
                "It would not be an exaggeration to say that the 3 UK CTR NCC leaves a lifelong impression upon the students which are or have been a part of it. The values of humility, team-work, patriotism, discipline, unity, collectiveness and many more, learnt from the NCC, are retained in the individual even after leaving the campus, but they guide one in every walk of life, they show way whenever one is stuck somewhere and these are the values which lead the person to groom a character, determined as a mountain, taller than most of the people around and having compassion and empathy for everyone. This is the mark which the NCC leaves, this is the mark of Humanity.."
            ]
        },
        "blog-vm": {
            title: "Role of NCC in Social Life",
            author: "Varun Mishra",
            date: "3 Aug, 2021",
            imgSrc: "/images/blogs/vm.jpg",
            content: [
                "The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation-building. The NCC provides opportunities to the country's youth for their overall development with a sense of Duty, Commitment, Dedication, Discipline, and Moral Values to become able leaders and valuable citizens.",
                "emphasizes social service as it believes that selfless social service makes the youth virtuous and makes them dedicated to the people and nation.",
                "One of the aims of the National Cadet Corps is to develop ideals of selfless service amongst the youth of the nation and to create a human resource that is always available for the service of the country; it has stood for its aim and provided its service both in militancy and public whenever the nation needed it.",
                "NCC undertakes various public service and community development programmes that help in the upliftment of weaker sections of society, protecting the environment, providing crucial help during emergencies and calamities to the people, with developing a zeal towards selfless service among youth.", "NCC frequently organizes health camps, blood donation camps, plantation drives, awareness rallies against dowry, female infanticide, and provides help in slum clearance, which helps build the nation and provide many people a better life.",
                "During these difficult times of COVID-19 also NCC has done a remarkable job; it has helped the local authorities in the distribution of rations, medical facilities & essential commodities. It organized many awareness camps in remote places, provided service at helplines/call centers, helped in data & traffic management. NCC IIT Roorkee also undertook a donation drive in which rations, clothes, and essential commodities were distributed to the needy people of Roorkee.",
                "We salute these selfless efforts of innumerable NCC cadets of the country and firmly believe that NCC will always rise to the Nations call."
            ]
        },
        "blog-ca": {
            title: " The Silent Pillars of Indian Army",
            author: "Chayan Ailawalia",
            date: "15 Aug, 2021",
            imgSrc: "/images/blogs/general.jpg",
            content: [
                "Most of us have easy and beautiful childhood memories. Going to school, meeting friends, going to the playground to play with friends, spending time with parents, and getting scolded for our mischiefs, without which the day always felt incomplete, are pleasant memories of our childhood. Weekends were fun as we spent the whole day with our family, playing games, watching movies, or sometimes going on a short trip. The memories of festivals are always scintillating in our minds. The happiness and joy of celebrating the festivals with our loved ones are always special. But everybody is not fortunate enough to experience this smooth, joyful life.",
                "We have always believed that the life of armed personnel is very strenuous, and we owe them a lot. But the families of armed personnel also have to go through a lot in their life, especially if it is a nuclear family. A transfer is a common thing in the life of all the armed personnel. Every two or three years, a soldier is transferred to a new different city. Here the problem kicks off. The families of armed personnel have two choices: either to shift to the city along with the family's bread earner and live in the family quarters or stay in a single city away from their loved ones. The officers who are not much involved in the field job, such as doctors and engineers, usually prefer the first option. But this regular shifting is very tiring and disturbing for the families, especially children. The children have to leave all their friends behind, whom they played with every day, and go to a whole new city, and struggle to make new friends again. Though they can receive the love and care of a father, they are unable to make some good friends who can stay with for their whole school life, someone they can trust and rely on in times of sorrow. This migration even takes them away from all their relatives. The process leaves them wholly abandoned in an unfamiliar city with no one to support in times of any crisis.",
                "Even if the family decides to stay in a particular city, their life isn't easier. In most cases, the absence of a male who owes the responsibility of the livelihood makes the entire responsibility rest on the mother and the children. When other children enjoy their lives carefree and lively, the children of armed personnel are bound by specific responsibilities. Though they have freedom, but to a limited extent. Also, it becomes tough for a mother to fulfill both parents' duties. The love and the duty of the father are always yearned.",
                "Either way, the life of the family of every soldier has struggles on its way. We thank our soldiers for giving their everything to the nation. But we should also realize and respect the contribution of their families. The hardships they have to go through so that the soldier can give his hundred percent to the duty should never go unnoticed.",
                "NCC IIT Roorkee expresses gratitude to all those families and children who gave up their comfort so that we don't have to do so."
            ]
        },
        "blog-rs": {
            title: "Technological Advancements in the\nIndian Army",
            author: "Rohini Shrivastava",
            date: "15 Aug, 2021",
            imgSrc: "/images/blogs/rs.jpg",
            content: [
                "Amidst the dusty winds of the thorny Thar, beyond the freezing frost in the Siachen and within the grips of the formidable forests of the north-eastern hills, the Indian army stands unabashed and undeterred in their spirits to serve the nation. The fourth-largest in the world, the Indian army boasts of an incredible count of over three million active personnel who battle terrific terrains to safeguard our nation. To further enhance efficiency and improve efficacy, the Indian army is constantly striving to inculcate technologies and other advancements that shall help them scale greater heights of success and accomplishments.",
                "Multiple platforms designed and developed by the Defence Research and Development Organisation (DRDO), which have been handed over to the armed forces of the country, have greatly strengthened the security architecture of India. The use of Ballistic missiles defence systems has played a major role in the Indian army. The ballistic missile is a rocket-propelled self-guided strategic weapon that follows a ballistic trajectory to deliver a payload from its launch site to a pre-determined target. These advanced missiles can carry conventional high explosives as well as chemical, biological, or nuclear munitions. The Indian army has already stepped in to embrace the next generation (5G) technology to bring artificial intelligence and unmanned vehicles to centre stage in a bid to compete with the most advanced armed forces worldwide. This technology has been estimated to usher in entirely different use cases and eventually boost defence capabilities to pre-empt the enemy.",
                "Along with this, advanced satellite communication devices also play an indispensable role in the Indian Army to maintain communication in real-time and drastically increase the chances of winning conflicts. Information and Communications Technology (ICT) has enabled the defence department to produce high-end military equipment to be used by the forces. Hybrid computers are also being widely used to control Radio Detection and Ranging (RADAR) in national defence.",
                "Similarly drones, another technological advancement, have proved to be pathbreaking for dropping bombs, firing missiles, or crashing armed Unmanned Aerial Vehicles (UAVs) into the target. The specialised Stealth feature allows drones to go extremely close to their targets virtually undetected by making deep penetrations. The Bhabha Atomic Research Centre (BARC) along with DRDO has designed the KALI (Kilo Ampere Linear Injector) which is a linear electron accelerator rumoured to have directed-energy weapon capabilities. The weapon is designed so that it can be used to destroy missiles and aircraft through soft-kill. This secret weapon shall be an answer to any uninvited missile aimed to disturb the peace of India.",
                "In October 2021, India successfully launched Agni 5, an Inter-Continental Ballistic Missile (ICBM) which shall soon be inducted into the armed forces. It is estimated to be 24 times faster than the speed of sound and is equipped with a ring laser gyroscope inertial navigation system (NavIC) that works with satellite guidance. The missile can hit its target with pinpoint precision and can be launched from mobile launchers.",
                "With these technological advancements, the Indian army has showcased its technical brilliance and has boosted the efficiency manifold. These massive advancements will surely result in unbelievable achievements and mammoth victories in the future.",
            ]

        }
    };

    return (
        <div className="blog">
            <h2 style={{ textAlign: "center", fontSize: "40px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginBottom: "15px" }}>
                <u style={{ textDecorationThickness: "0px", textUnderlineOffset: "10px" }}>{blogs[blogId]['title']}</u>
            </h2>
            <h4 style={{ textAlign: "center", fontWeight: "normal", fontSize: "27px", color: "#212487", marginTop: "0px" }}>
                By {blogs[blogId]['author']} | {blogs[blogId]['date']}
            </h4>
            <img src={blogs[blogId]['imgSrc']} alt="NCC-IITR" class="image"></img>
            <div class="blog-text mb-5">
            {blogs[blogId]['content'].map((para, key) => (
                <p>{para}</p>
            ))}
                <br />
                <p>Jai Hind!</p>
            </div>
        </div >
    );
}