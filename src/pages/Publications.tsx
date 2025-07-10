const Publications = () => {
  const publications = [
    {
      id: 1,
      authors: "NR Gandasi, P Rorsman",
      year: 2024,
      title: "An unclear role for the GLP-1 metabolite GLP-1 (9–36) in human islet physiology. Reply to Matveyenko A, Vella A.",
      journal: "Diabetologia",
      pages: "1-2",
      note: ""
    },
    {
      id: 2,
      authors: "S Paul, A Pallavi, NR Gandasi#",
      year: 2024,
      title: "Exploring the potential of pheophorbide A, a chlorophyll-derived compound in modulating GLUT for maintaining glucose homeostasis.",
      journal: "Frontiers in Endocrinology",
      pages: "15, 1330058",
      note: "#corresponding author"
    },
    {
      id: 3,
      authors: "M Singh and NR Gandasi#",
      year: 2024,
      title: "Intricate interplay between endocrine and exocrine pancreas.",
      journal: "iScienceNotes",
      pages: "accepted",
      note: "#corresponding author"
    },
    {
      id: 4,
      authors: "AA Makam, A Dubey, S Maharana, NR Gandasi#",
      year: 2023,
      title: "Algorithm for automatic detection of insulin granule exocytosis in human pancreatic β-cells.",
      journal: "bioRxiv",
      pages: "2023.11. 14.566999",
      note: "#corresponding author"
    },
    {
      id: 5,
      authors: "NR Gandasi, R Gao, L Kothegala, A Pearce, C Santos, S Acreman, ...P Rorsman",
      year: 2023,
      title: "GLP-1 metabolite GLP-1 (9–36) is a systemic inhibitor of mouse and human pancreatic islet glucagon secretion.",
      journal: "Diabetologia",
      pages: "1-19",
      note: ""
    },
    {
      id: 6,
      authors: "P Veerabhadraswamy, P Belekar, L Kothegala, NR Gandasi#",
      year: 2023,
      title: "Localization and function of multivesicular-bodies that release exosomes in islet cells: dysregulation during type-2 diabetes.",
      journal: "bioRxiv",
      pages: "2023.04. 13.536686",
      note: "#corresponding author"
    },
    {
      id: 7,
      authors: "NR Gandasi#, A Rangarajan, H Rao, M Singh, L Kothegala",
      year: 2023,
      title: "Pancreatic Islet Biobanking Facilities in India: The Need of the Hour to Deal with Diabetes?",
      journal: "Journal of the Indian Institute of Science",
      pages: "1-5",
      note: "#corresponding author"
    },
    {
      id: 8,
      authors: "Kothegala L, Miranda C, Singh M, Krieger J-P, NR Gandasi#",
      year: 2023,
      title: "Somatostatin Containing δ-Cell Number Is Reduced in Type-2 Diabetes.",
      journal: "Int. J. Mol. Sci.",
      pages: "24(4), 3449",
      note: "#corresponding author"
    },
    {
      id: 9,
      authors: "R Vaid, A Mendez, K Thombare, RB Panadero, R Robinot, BF Fonseca, NR Gandasi, J Ringlander, MH Baig, J-J Dong, JY Cho, B Reinius, LA Chakrabarti, K Nystrom, T Mondal",
      year: 2023,
      title: "Global loss of cellular m6A RNA methylation following infection with different SARS-CoV-2 variants",
      journal: "Genome Res.",
      pages: "gr.276407.121",
      note: "In the News"
    },
    {
      id: 10,
      authors: "AA Makam, A Biswas, L Kothegala, NR Gandasi#",
      year: 2022,
      title: "Setting the Stage for Insulin Granule Dysfunction during Type-1-Diabetes: Is ER Stress the Culprit?",
      journal: "Biomedicines",
      pages: "Oct 25;10(11):2695",
      note: "#corresponding author"
    },
    {
      id: 11,
      authors: "NR Gandasi#, V Arapi, P Belekar, M Mickael, L Granlund, L Kothegala, R Fredriksson, S Bagchi",
      year: 2021,
      title: "Glutamine uptake via SNAT6 and Caveolin regulates glutamine-glutamate",
      journal: "Intl J Mol Sci",
      pages: "Jan 25;22(3):1167",
      note: "#corresponding author"
    },
    {
      id: 12,
      authors: "A Hatamie, L Ren, H Dou, NR Gandasi, P Rorsman, AG Ewing",
      year: 2020,
      title: "Nanoscale amperometry reveals only a fraction of vesicular serotonin content is released during exocytosis from beta cells",
      journal: "Angew Chem",
      pages: "10.1002/anie.202015902",
      note: ""
    },
    {
      id: 13,
      authors: "M Omar-Hmeadi, PE Lund, NR Gandasi, A Tengholm, S Barg",
      year: 2020,
      title: "Paracrine control of α-cell glucagon exocytosis is compromised in human type-2 diabetes.",
      journal: "Nature Communications",
      pages: "11:1896",
      note: "In the News"
    },
    {
      id: 14,
      authors: "V Petrenko, NR Gandasi, D Sage, A Tengholm, S Barg, C Dibner",
      year: 2020,
      title: "In pancreatic islets from type 2 diabetes patients the dampened circadian oscillators lead to reduced insulin and glucagon exocytosis.",
      journal: "PNAS",
      pages: "117 (5) 2484-2495",
      note: "In the News"
    },
    {
      id: 15,
      authors: "P Nguyen, NR Gandasi, B Xie, S Sugahara, Y Xu, and O Idevall-Hagren",
      year: 2019,
      title: "The PI(4)P phosphatase Sac2 controls insulin granule docking and release.",
      journal: "Journal of Cell biology",
      pages: "218;11",
      note: ""
    },
    {
      id: 16,
      authors: "Guček A, NR Gandasi, Omar-Hmeadi M, Bakke M, Døskeland SO, Tengholm A, Barg S",
      year: 2019,
      title: "Fusion pore regulation by cAMP/Epac2 controls cargo release during insulin exocytosis.",
      journal: "Elife",
      pages: "20;8. pii: e41711",
      note: ""
    },
    {
      id: 17,
      authors: "P Yin, NR Gandasi, S Arora, M Omar-Hmeadi, J Saras, S Barg",
      year: 2018,
      title: "Syntaxin clusters at secretory granules in its closed munc18-bound conformation.",
      journal: "Molecular biology of the Cell",
      pages: "1;29(22):2700-2708",
      note: ""
    },
    {
      id: 18,
      authors: "M Omar-Hmeadi, NR Gandasi, S Barg",
      year: 2018,
      title: "PI(4,5)P2 is not required for secretory granule docking and syntaxin clustering.",
      journal: "Traffic",
      pages: "19(6):436-445",
      note: ""
    },
    {
      id: 19,
      authors: "SV Korol, Z Jin, Y Jin, AK Bhandage, A Tengholm, NR Gandasi, S Barg, D Espes, PO Carlsson, D Laver, B Birnir",
      year: 2018,
      title: "Functional characterization of native, high-affinity GABAA receptors in human pancreatic β cells.",
      journal: "eBioMedecine",
      pages: "30:273-282",
      note: "In the News"
    },
    {
      id: 20,
      authors: "NR Gandasi, P Yin, M Omar-Hmeadi, EO Laakso, P Vikman, S Barg",
      year: 2018,
      title: "Glucose dependent granule docking limits insulin secretion and is decreased in human type-2 diabetes.",
      journal: "Cell Metabolism",
      pages: "27(2)",
      note: "In the News"
    },
    {
      id: 21,
      authors: "VA Salunkhe, JK Ofori, NR Gandasi, SA Salö, S Hansson, ME Andersson, A Wendt, S Barg, JLS Esguerra, L Eliasson",
      year: 2017,
      title: "MiR-335 overexpression impairs insulin secretion through defective priming of insulin vesicles.",
      journal: "Physiology Reports",
      pages: "5(21)",
      note: ""
    },
    {
      id: 22,
      authors: "NR Gandasi#, I Alenkvist#, S Barg, A Tengholm",
      year: 2017,
      title: "Recruitment of Epac2A to Insulin Granule Docking Sites Regulates Priming for Exocytosis.",
      journal: "Diabetes",
      pages: "66(10):2610-2622",
      note: "# equal contribution, In the News"
    },
    {
      id: 23,
      authors: "NR Gandasi, P Yin, M Riz, G Cortese, M Chibalina, P Rorsman, A Sherman, MG Pedersen and S Barg",
      year: 2017,
      title: "Ca2+ channel clustering with insulincontaining granules is disturbed in type 2 diabetes.",
      journal: "Journal of Clinical Investigation",
      pages: "127(6):2353-2364",
      note: "In the News"
    },
    {
      id: 24,
      authors: "Cortese G, NR Gandasi, Barg S, Pedersen MG",
      year: 2016,
      title: "Statistical Frailty Modeling for Quantitative Analysis of Exocytotic Events Recorded by Live Cell Imaging: Rapid Release of Insulin-Containing Granules Is Impaired in Human Diabetic β-cells.",
      journal: "PLoS ONE",
      pages: "11(12): e0167282",
      note: ""
    },
    {
      id: 25,
      authors: "NR Gandasi, K Vestö, M Helou, P Yin, J Saras and S Barg",
      year: 2015,
      title: "Survey of red fluorescence proteins as markers for secretory granule exocytosis.",
      journal: "PLoS ONE",
      pages: "10(6): e0127801",
      note: ""
    },
    {
      id: 26,
      authors: "U Krus, BC King, V Nagaraj, NR Gandasi, J Sjölander, P Buda, E Garcia-Vaz, E Ottosson-Laakso, P Storm, MF Gomez, M Fex, P Vikman, E Zhang, S Barg, AM Blom, and E Renström",
      year: 2014,
      title: "The complement inhibitor CD59 plays a fundamental role in insulin secretion by controlling recycling of exocytotic fusion proteins.",
      journal: "Cell Metabolism",
      pages: "19:883-90",
      note: ""
    },
    {
      id: 27,
      authors: "NR Gandasi and S Barg",
      year: 2014,
      title: "Contact-induced clustering of syntaxin and munc18 docks secretory granules at the exocytosis site.",
      journal: "Nature Communications",
      pages: "5:3914",
      note: "In the News"
    }
  ];

  const bookChapter = {
    authors: "NR Gandasi#, V Arapi, P Belekar, M Mickael, L Granlund, L Kothegala, R Fredriksson, S Bagchi",
    year: 2021,
    title: "Glutamine-Glutamate Cycle in Neuronal Cells",
    book: "Prime Archives in Molecular Sciences: 2nd Edition",
    note: "#corresponding author"
  };

  const googleScholar = "https://scholar.google.se/citations?user=DvAF6w0AAAAJ&hl=sv";

  const lecturesAndPosters = [
    {
      year: 2022,
      title: "STEM for girls",
      location: "Indian Institute of Science, Bengaluru, India",
      type: "Invited lecture"
    },
    {
      year: 2022,
      title: "Karyashala",
      location: "Indian Institute of Science, Bengaluru, India",
      type: "Invited lecture"
    },
    {
      year: 2022,
      title: "CMC-IISc Symposium",
      location: "Indian Institute of Science, Bengaluru, India",
      type: "Invited lecture"
    },
    {
      year: 2022,
      title: "Biospectrum-22",
      location: "Cochin University of Science and Technology, Kochi, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Centre for Cellular and Molecular Biology",
      location: "Hyderabad, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Indian Institute of Science",
      location: "Bangalore, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Indian Institute of Technology-Gandhinagar",
      location: "Gandhinagar, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Indian Institute of Technology-Palakkad",
      location: "Palakkad, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Tata Institute of Fundamental Research",
      location: "Hyderabad, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Indian Institute of Science Education and Research",
      location: "Trivandrum, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Shiv Nadar University",
      location: "Delhi NCR, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Amity University",
      location: "Delhi, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Amrita Vishwa Vidyapeetham",
      location: "Kollam, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "Cauvery College",
      location: "Trichy, India",
      type: "Invited lecture during a conference"
    },
    {
      year: 2021,
      title: "MMK and SDM College",
      location: "Mysore, India",
      type: "Invited lecture during a conference"
    },
    {
      year: 2021,
      title: "St.Philomena's College",
      location: "Mysore, India",
      type: "Invited lecture during a conference"
    },
    {
      year: 2021,
      title: "KLE Nijlingappa College",
      location: "Bangalore, India",
      type: "Invited lecture"
    },
    {
      year: 2021,
      title: "MS Ramaiah college",
      location: "Bangalore, India",
      type: "Invited lecture"
    },
    {
      year: 2020,
      title: "Indian Institute of Technology-Madras",
      location: "Chennai, India",
      type: "Invited lecture"
    },
    {
      year: 2020,
      title: "National Institute of Science Education and Research",
      location: "Bhubaneshwar, India",
      type: "Invited lecture"
    },
    {
      year: 2020,
      title: "German Diabetes Centre",
      location: "Dusseldorf, Germany",
      type: "Invited lecture"
    },
    {
      year: 2020,
      title: "Chromaffin Cell Society meeting",
      location: "Chennai, India",
      type: "Early Investigator Award Lecture"
    },
    {
      year: 2020,
      title: "Yuvaraja's College",
      location: "Mysore, India",
      type: "Invited lecture"
    },
    {
      year: 2019,
      title: "Rabs and RIM are differentially involved in docking and tethering of insulin granules. Biophysical Thematic meeting",
      location: "Padova, Italy",
      type: "Young Investigator Speaker"
    },
    {
      year: 2018,
      title: "Gothenburg University",
      location: "Gothenburg, Sweden",
      type: "Invited lecture"
    },
    {
      year: 2018,
      title: "European Association of Study of Diabetes",
      location: "Berlin, Germany",
      type: "Rising Star Award Lecture"
    },
    {
      year: 2017,
      title: "Department of Pharmacy, Uppsala University",
      location: "Uppsala, Sweden",
      type: "Invited lecture"
    },
    {
      year: 2017,
      title: "Beta cell workshop",
      location: "Dresden, Germany",
      type: "Invited lecture"
    },
    {
      year: 2015,
      title: "Scandinavian Society for Study of Diabetes",
      location: "Oslo, Norway",
      type: "Young Investigator Award lecture"
    },
    {
      year: 2015,
      title: "Molecular mechanisms of biphasic insulin secretion",
      location: "Acta Universitatis Upsaliensis",
      type: "Lecture"
    },
    {
      year: 2015,
      title: "Rabs and RIM are differentially involved in docking and tethering of insulin granules",
      location: "Diabetologia 58, S127-S127",
      type: "Lecture"
    },
    {
      year: 2015,
      title: "Quantitative Imaging of the Exocytosis Machinery Assembly",
      location: "Biophysical Journal 108 (2), 102a",
      type: "Poster"
    },
    {
      year: 2014,
      title: "Rab3/rabphilin is present on a subset of vesicles predestined to dock to RIM clusters at the plasma membrane",
      location: "Molecular Biology of the Cell 25",
      type: "Lecture"
    },
    {
      year: 2012,
      title: "Syntaxin recruitment to the release site marks the transition of insulin granules from tethered to docked",
      location: "Diabetologia 55, S171-S171",
      type: "Lecture"
    },
    {
      year: 2012,
      title: "The birth of a membrane nanodomain-syntaxin clusters assemble from single molecules during secretory granule docking",
      location: "Molecular biology of the cell 23",
      type: "Poster"
    },
    {
      year: 2011,
      title: "Quantitative analysis of syntaxin clusters during insulin granule docking",
      location: "Molecular biology of the cell 22",
      type: "Poster"
    },
    {
      year: 2010,
      title: "Quantitative analysis of t-SNARE and Ca2+-channel clusters near secretory granules",
      location: "Diabetologia 53 (Suppl. 1), S46-S46",
      type: "Lecture"
    }
  ];

  const links = [
    {
      title: "Subcellular view of islet cells to understand type-2 diabetes - NR Gandasi",
      url: "https://www.youtube.com/watch?v=n2a3xCTLzZA"
    },
    {
      title: "Rabs and RIM are differentially involved in docking and tethering of insulin granules - NR Gandasi",
      url: "https://www.easd.org/virtualmeeting/home.html#!resources/rabs-and-rim-are-differentially-involved-in-docking-and-tethering-of-insulin-granules--3"
    },
    {
      title: "Fusion pore regulation by cAMP/Epac2 controls cargo release during insulin exocytosis - S Barg",
      url: "https://www.easd.org/virtualmeeting/home.html#!resources/fusion-pore-regulation-by-camp-epac2-controls-cargo-release-during-insulin-exocytosis-73ca1bb6-e026-4536-9ef6-aff251b4094d"
    }
  ];

  return (
    <div>
    <a href="/">← Back to Home</a>
      <h1>Publications</h1>
      
      <h2>Research Publications</h2>
      {publications.map((pub) => (
        <div key={pub.id}>
          <p>
            <strong>{pub.id}.</strong> {pub.authors} ({pub.year}). {pub.title} <em>{pub.journal}</em>, {pub.pages}
            {pub.note && <span> - {pub.note}</span>}
          </p>
        </div>
      ))}

      <h2>Book Chapter</h2>
      <div>
        <p>
          {bookChapter.authors} ({bookChapter.year}). {bookChapter.title}, <em>{bookChapter.book}</em>
          {bookChapter.note && <span> - {bookChapter.note}</span>}
        </p>
      </div>

      <h2>Google Scholar Profile</h2>
      <p>
        <a href={googleScholar} target="_blank" rel="noopener noreferrer">
          {googleScholar}
        </a>
      </p>

      <h2>Lectures and Posters Presented</h2>
      {lecturesAndPosters.map((item, index) => (
        <div key={index}>
          <p>
            NR Gandasi ({item.year}) {item.title}, {item.location} - {item.type}
          </p>
        </div>
      ))}

      <h2>Links</h2>
      {links.map((link, index) => (
        <div key={index}>
          <p>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Publications;