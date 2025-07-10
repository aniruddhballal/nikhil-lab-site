const People = () => {
  const principalInvestigator = {
    name: "Nikhil R. Gandasi (NRG)",
    education: [
      "Bachelors and Masters - University of Mysore, Mysore, India",
      "PhD - Uppsala University, Uppsala, Sweden",
      "Postdoc - Uppsala University, Uppsala, Sweden",
      "Postdoc - Academia-Industry strategic collaboration with Mercodia AB, Uppsala, Sweden",
      "Postdoc - University of Oxford, Oxford, UK",
      "Assistant professor (Guest) - University of Gothenburg, Gothenburg, Sweden",
      "Assistant professor - Developmental Biology and Genetics (DBG), Indian Institute of Science, Bangalore, India",
      "Adjunct Faculty - Institute of Medical cell biology, Uppsala University, Sweden"
    ],
    awards: [
      "Ramalingaswami fellow - 2021",
      "Daniel T. O'Connor Early Career Investigator Award - 2020",
      "European Foundation for Study of Diabetes's - Rising Star Award - 2018",
      "Young Investigator Award from Scandinavian Society for Study of Diabetes - 2015",
      "Travel awards - American Society of Cell biology, European Molecular Biology Organization,",
      "European Foundation for Study of Diabetes - 2011, 2012, 2013, 2014, 2017",
      "UGC Meritorious fellow - 2008"
    ],
    contact: {
      email: ["grnikhil@iisc.ac.in", "nikhil.gandasi@mcb.uu.se"],
      phone: "+91-80-22933460"
    }
  };

  const currentMembers = [
    {
      name: "Aishwarya M A",
      position: "PhD Student, Indian Institute of Science, Bengaluru (2022-present)",
      education: "Masters in Biochemistry - Bengaluru City University, Bengaluru, India",
      achievements: ["DBT-JRF - 2021", "DST-INSPIRE - 2020", "GATE - 2020, 2021"],
      contact: {
        email: "aishwaryama2@gmail.com",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Anuma Pallavi",
      position: "PhD Student, Indian Institute of Science, Bengaluru (2022-present)",
      education: "Masters in Animal Biology and Biotechnology - University of Hyderabad, Hyderabad, India",
      achievements: ["DBT-JRF - 2021", "GATE - 2021", "CSIR-NET (LS) - 2020", "TIFR - 2021", "Prathibha Award for University toppers - 2019"],
      contact: {
        email: "anumapallavi@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Meetu Singh",
      position: "Integrated- PhD Student (with Prof. Anu Rangarajan)",
      duration: "Indian Institute of Science, Bengaluru (2022-present)",
      education: "Bachelors in Life Sciences - Delhi University - Delhi, India",
      achievements: ["IIT-JAM - 2020"],
      contact: {
        email: "meetusingh@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Ananya Sarkar",
      position: "Integrated- PhD Student",
      duration: "Indian Institute of Science, Bengaluru (2024-present)",
      education: "Bachelors (Hons) in Microbiology - University of Calcutta - Kolkota, India",
      achievements: ["JAM BT - 2023", "TIFR-GS 2023", "GATE BT 2023", "GATE XL 2024"],
      contact: {
        email: "sananya@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Priyadarshini V",
      position: "PhD Student, Indian Institute of Science, Bengaluru (2022-present)",
      education: "Masters in Biotechnology - Indian Institute of Technology - Hyderabad, Hyderabad, India",
      achievements: ["DBT-JRF - 2021", "GATE - 2019"],
      contact: {
        email: "vpriyadarshi@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Sagarika Prabhakar",
      position: "PhD Student, Indian Institute of Science, Bengaluru (2024-present)",
      education: "M.Tech in Biotechnology - PSG College of Technology - Coimbatore, India",
      achievements: ["CSIR-NET - 2024", "GATE - 2021"],
      contact: {
        email: "sagarikap@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Saptadipa Paul",
      position: "Postdoc, Indian Institute of Science, Bengaluru (2023-present)",
      education: "PhD - Jain University - Bengaluru, India",
      achievements: [],
      contact: {
        email: "saptadipapaul08@gmail.com",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Bhavana S P",
      position: "Masters thesis student, Indian Institute of Science, Bengaluru (2024-present)",
      education: "Masters in Human Genetics, Dayananda Sagar University, Bengaluru , India",
      achievements: [],
      contact: {
        email: "bhavanasp22@gmail.com",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Yavanica S",
      position: "Masters thesis student , Indian Institute of Science, Bengaluru (2024-present)",
      education: "Int MSc, Yuvaraja's College, Mysore, India",
      achievements: [],
      contact: {
        email: "yavanica009@gmail.com",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Satyam Roy",
      position: "Masters thesis, Indian Institute of Science, Bengaluru (2024-present)",
      education: "MSc Life Sciences, Indian Institute of Science, Bengaluru",
      achievements: [],
      contact: {
        email: "satyamroy@iisc.ac.in",
        phone: "+91-80-22932490"
      }
    },
    {
      name: "Gangadhar",
      position: "Lab helper, Indian Institute of Science, Bengaluru (2022-present)",
      education: "",
      achievements: [],
      contact: {
        email: "",
        phone: "+91-80-22932490"
      }
    }
  ];

  const pastMembers = [
    {
      name: "Thamaraiselvi",
      position: "Bachelors in research, Indian Institute of Science, Bengaluru (2023-present)",
      education: "NEET-2022",
      currentStatus: ""
    },
    {
      name: "Heta Shah",
      position: "Masters thesis, Indian Institute of Science, Bengaluru (2024)",
      education: "MSc Biomedical Genetics, Vellore Institute of Technology, Vellore, India",
      currentStatus: ""
    },
    {
      name: "Prashasta Prathap",
      position: "Masters thesis, Indian Institute of Science, Bengaluru (2024)",
      education: "Masters in Bitechnology, St. Joseph's University, Bengaluru, India",
      currentStatus: ""
    },
    {
      name: "Sreevani P",
      position: "Masters thesis student, Indian Institute of Science, Bengaluru (2023-2024)",
      education: "BS-MS in Biology - IISER-Tirupati, India",
      currentStatus: ""
    },
    {
      name: "Manasa M",
      position: "Thesis intern, Indian Institute of Science, Bengaluru (2024)",
      education: "Integrated program in Biotechnology , PES University, Bengaluru, India",
      currentStatus: ""
    },
    {
      name: "Ramkumar S B",
      position: "MSc in Life Sciences, Indian Institute of Science, Bengaluru (2023-2024)",
      education: "BSc (Hons.) in Agriculture from University of Agricultural Sciences, Bengaluru, India",
      currentStatus: ""
    },
    {
      name: "Gayathri Mahadevan",
      position: "Research Intern, Indian Institute of Science, Bengaluru (2023-2024)",
      education: "MSc in Microbiology, Amity University, Noida, India",
      currentStatus: ""
    },
    {
      name: "Sristi Dey",
      position: "Research Intern, Indian Institute of Science, Bengaluru (2023-2024)",
      education: "B.tech in Biotechnology, SRM Institute of Science and Technology (SRMIST), Chennai, India",
      currentStatus: ""
    },
    {
      name: "Meera A Kharwa",
      position: "Masters thesis student",
      education: "Completed Intergrated MSc in Cell and Molecular Biology, Dr. Vikram Sarabhai Institute of Cell and Molecular biology, The Maharaja Sayajirao University of Vadodra, India",
      currentStatus: ""
    },
    {
      name: "Vibha V",
      position: "Bachelors thesis student",
      education: "Completed B.tech in Biotechnology - PES University - Bengaluru, India",
      currentStatus: ""
    },
    {
      name: "Ananya Arora",
      position: "MBBS intern",
      education: "Indian Institute of Science-MBBS Intern program completed",
      currentStatus: ""
    },
    {
      name: "Shruti Renganathan",
      position: "Bachelors thesis student",
      education: "Completed B.tech in Biotechnology - PES University - Bengaluru, India",
      currentStatus: ""
    },
    {
      name: "Sneha Sathapathi",
      position: "Masters thesis student",
      education: "Completed masters thesis, MSc in Biochemistry - University of Madras - Chennai, India",
      currentStatus: ""
    },
    {
      name: "Prajwal Nagle",
      position: "Masters thesis student",
      education: "Completed masters thesis student, BS-MS in Biology - IISER-Kolkata, India",
      currentStatus: ""
    },
    {
      name: "Abhishek Barua",
      position: "PhD intern",
      education: "Indian Institute of Science",
      currentStatus: ""
    },
    {
      name: "Niharika",
      position: "MBBS intern",
      education: "Indian Institute of Science-MBBS Intern program completed",
      currentStatus: ""
    },
    {
      name: "Chaitra N",
      position: "Masters thesis student",
      education: "Completed Masters thesis",
      currentStatus: ""
    },
    {
      name: "Shakar Said",
      position: "Pharmacy program thesis student",
      education: "Completed pharmacy program thesis - Pharmacist, Gothenburg, Sweden",
      currentStatus: ""
    },
    {
      name: "Jonathan Wahlund",
      position: "Bachelor thesis student",
      education: "Completed bachelor thesis - Pfizer Inc, Stockholm, Sweden",
      currentStatus: ""
    },
    {
      name: "Neha Sinha",
      position: "Masters thesis student",
      education: "Completed masters thesis",
      currentStatus: "Currently working as PhD student at University of Gothenburg, Sweden"
    },
    {
      name: "Sandeep Domkawale",
      position: "Masters thesis student",
      education: "Masters thesis",
      currentStatus: "Currently working as research and laboratory manager at Astrazeneca, Gothenburg, Sweden"
    },
    {
      name: "Komal Mohite",
      position: "Masters thesis student",
      education: "Completed masters thesis",
      currentStatus: "Currently at University of Sussex, UK"
    },
    {
      name: "Prajakta Belekar",
      position: "Masters thesis student",
      education: "Completed masters thesis",
      currentStatus: "Currently working as a PhD student in University of Innsbruck, Austria"
    }
  ];

  return (
    <div>
    <a href="/">← Back to Home</a>
      <h1>People</h1>
      
      <h2>Principal Investigator</h2>
      <div>
        <h3>{principalInvestigator.name}</h3>
        <h4>Education and Career</h4>
        {principalInvestigator.education.map((edu, index) => (
          <p key={index}>{edu}</p>
        ))}
        
        <h4>Awards</h4>
        {principalInvestigator.awards.map((award, index) => (
          <p key={index}>{award}</p>
        ))}
        
        <h4>Contact</h4>
        <p>Email: {principalInvestigator.contact.email.join(", ")}</p>
        <p>Phone: {principalInvestigator.contact.phone}</p>
      </div>

      <h2>Current Lab Members</h2>
      {currentMembers.map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p><strong>Position:</strong> {member.position}</p>
          {member.duration && <p><strong>Duration:</strong> {member.duration}</p>}
          {member.education && <p><strong>Education:</strong> {member.education}</p>}
          {member.achievements && member.achievements.length > 0 && (
            <div>
              <strong>Achievements:</strong>
              {member.achievements.map((achievement, achIndex) => (
                <p key={achIndex}>{achievement}</p>
              ))}
            </div>
          )}
          <div>
            <strong>Contact:</strong>
            {member.contact.email && <p>Email: {member.contact.email}</p>}
            {member.contact.phone && <p>Phone: {member.contact.phone}</p>}
          </div>
        </div>
      ))}

      <h2>Past Members</h2>
      {pastMembers.map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p><strong>Position:</strong> {member.position}</p>
          {member.education && <p><strong>Education:</strong> {member.education}</p>}
          {member.currentStatus && <p><strong>Current Status:</strong> {member.currentStatus}</p>}
        </div>
      ))}
    </div>
  );
};

export default People;