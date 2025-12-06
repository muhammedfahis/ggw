// Centralized leader data for the Great Green Wall of Africa Foundation

export interface LeaderData {
    slug: string;
    name: string;
    title: string;
    role: string;
    image: string;
    category: "patron" | "board" | "management";
    bio: string;
    fullBio: string;
    highlights?: string[];
    distinctions?: string[];
    expertise?: string[];
    linkedin?: string;
    twitter?: string;
}

export const leadersData: LeaderData[] = [
    // PATRONS
    {
        slug: "olusegun-obasanjo",
        name: "His Excellency Olusegun Obasanjo",
        title: "Grand Patron",
        role: "Former President of Nigeria",
        image: "/assets/leadership/Olusegun Obasanjo.png",
        category: "patron",
        bio: "Former President of Nigeria (1999–2007) and respected African statesman, lending diplomatic authority and long-term vision to the Great Green Wall movement.",
        fullBio: "His Excellency Olusegun Obasanjo served as President of Nigeria from 1999 to 2007, bringing extensive democratic and diplomatic experience to his role as Grand Patron of the Great Green Wall of Africa Foundation. A respected statesman across the continent, he champions pan-African cooperation and long-term investment strategies that strengthen climate resilience and restoration economies across the Sahel.",
        expertise: ["Diplomacy", "Pan-African Leadership", "Governance"],
    },
    {
        slug: "aliko-dangote",
        name: "Aliko Dangote, GCON",
        title: "Patron",
        role: "Chairman Dangote Group",
        image: "/assets/leadership/Aliko Dangote.png",
        category: "patron",
        bio: "Chairman of the Dangote Group and one of Africa's most influential industrialists, championing private sector participation in climate and restoration initiatives.",
        fullBio: "As Chairman of the Dangote Group and one of Africa's most influential business leaders, Aliko Dangote brings private sector scale and long-term investment vision to the Great Green Wall. His leadership mobilizes industrial know-how and capital to strengthen restoration economies across the Sahel, demonstrating how business can drive sustainable development.",
        expertise: ["Industrial Leadership", "Private Sector Investment", "Infrastructure"],
    },
    {
        slug: "ramatoulaye-diallo-ndiaye",
        name: "Ramatoulaye Diallo N'diaye",
        title: "Chief Executive Officer",
        role: "Visionary African leader blending diplomacy, culture, climate action, and innovative finance",
        image: "/assets/leadership/Ramatoulaye Diallo N'diaye.jpeg",
        category: "patron",
        bio: "Visionary African leader blending diplomacy, cultural renaissance, climate action, and innovative finance. As CEO of GGWoA, she leads continent-wide restoration efforts. Former Minister of Culture, Handicrafts and Tourism of Mali, she champions frameworks like Culture as Capital and the Bridge of Dignity.",
        fullBio: `Ramatoulaye Diallo N'Diaye is a visionary African leader whose work blends diplomacy, cultural renaissance, climate action, and innovative finance into a uniquely powerful voice for transformation on the continent. Her journey reflects a lifelong commitment to dignity, heritage, ecological stewardship, and the belief that Africa's cultural and environmental wealth can serve as a foundation for a new era of prosperity.

As CEO of the Great Green Wall of Africa Foundation, she leads a continent wide mission to restore landscapes, build climate resilience, and unlock new pathways for sustainable development. Her work focuses on mobilizing impact capital, forging strategic partnerships across global institutions, and ensuring that African communities remain at the center of the transformation of the Great Green Wall into one of the world's most ambitious ecological projects.

Ramatoulaye also serves as Chair of the Africa Impact Finance Subgroup of the Global Impact Disclosure Taskforce, a role through which she helps shape a more inclusive global financial architecture for small and medium enterprises. Her leadership emphasizes transparency, dignity, and the central role of African voices in defining new standards for sustainability and impact.

Before entering the world of climate action and finance, Ramatoulaye served as Minister of Culture, Handicrafts and Tourism of Mali. In this role, she championed the protection of cultural heritage, the creative economy, and the global visibility of African cultural assets. Her diplomatic and cultural leadership has touched global platforms including UNESCO, world expositions, multilateral initiatives, and high level international forums.

Her signature frameworks such as Culture as Capital, the Bridge of Dignity, and the Ubuntu Earth Fund articulate a philosophy rooted in harmony between people, land, and identity. These concepts guide her work and inspire new models of development that honor Africa's traditions while embracing innovation, inclusion, and global collaboration.

Ramatoulaye holds a PhD from CEDS Dakar. Her research explores the Great Green Wall as a symbol of time, resilience, and generational responsibility. Today she stands among Africa's most influential and trusted voices working to advance climate justice, cultural sovereignty, peace, and human dignity across the continent and beyond.`,
        highlights: [
            "CEO of the Great Green Wall of Africa Foundation",
            "Chair, Africa Impact Finance Subgroup of the Global Impact Disclosure Taskforce",
            "Former Minister of Culture, Handicrafts and Tourism of Mali",
            "Board member of Human Capital Africa and the School of Politics, Policy and Governance",
            "PhD from CEDS Dakar on the Great Green Wall",
        ],
        distinctions: [
            "National Order of Mali",
            "National Order of France",
            "UNESCO 70th Anniversary Medal",
            "UAE Government Decoration",
        ],
        expertise: ["Cultural Diplomacy", "Climate Finance", "Impact Investment", "Heritage Protection", "Pan-African Leadership"],
    },

    // BOARD MEMBERS
    {
        slug: "frannie-leautier",
        name: "Dr. Frannie Leautier",
        title: "Managing Director of Southbridge Investments",
        role: "Development finance and innovative climate investment",
        image: "/assets/leadership/Dr. Frannie Leautier.png",
        category: "board",
        bio: "Senior Partner and CEO at SouthBridge Investments with a distinguished career at the World Bank Group and African Development Bank, leading infrastructure, risk and asset management across the African continent.",
        fullBio: "Dr. Frannie Leautier is a renowned development finance expert pioneering blended finance models that unlock inclusive, climate-resilient growth. As Managing Director of Southbridge Investments, she brings extensive experience from the World Bank Group and African Development Bank, structuring innovative financial instruments for sustainable infrastructure across Africa.",
        expertise: ["Development Finance", "Blended Finance", "Infrastructure Investment"],
    },
    {
        slug: "joseph-faluyi",
        name: "Joseph Faluyi",
        title: "COO and Executive Director",
        role: "Technology executive with 20+ years driving digital transformation and sustainable development",
        image: "/assets/leadership/Joseph Faluyi.png",
        category: "board",
        bio: "Technology executive with over 20 years in IT, digital, and financial services. Former Managing Principal at Capco driving fintech transformation, with experience at Deloitte and Dell Technologies. As COO of GGWoA, he manages internal operations, new business ventures, and strategic partnerships.",
        fullBio: `Joseph Faluyi is a technology executive with over 20 years of experience in the IT, digital, and financial services sectors. He held various IT management positions for many corporations where he led programs involving IT transformation, migration, and implementation on a global scale.

He was a Managing Principal with Capco, a global technology and management company specialized in driving digital transformation in the financial services industry, where he was responsible for the transformation of fintech and financial services solutions. He also worked for Deloitte, Dell Technologies and Applexus Technologies.

A strong advocate of social entrepreneurship and sustainability, Mr. Faluyi is currently the COO and Executive Director for GGWoA, an organization focused on facilitating sustainable developments in Africa, particularly climate change initiatives. He worked closely with the management and the board of directors to implement GGWoA's outreach strategy for Africa. He is responsible for the organization's internal operations and the development of new business ventures while managing relationships with all strategic partners.

Prior to GGWoA, Joseph Faluyi was an Executive with Winsun Technologies, a 3D construction technology company that combines resilient housing and infrastructure experience using innovative climate sustainable alternative raw materials and methodology.

Joseph holds a bachelor's degree in business management from the University of Phoenix and an MBA with concentration in technology management from the same university.`,
        highlights: [
            "COO and Executive Director for Great Green Wall of Africa (GGWoA)",
            "Former Managing Principal at Capco (fintech transformation)",
            "20+ years IT management experience at Deloitte, Dell Technologies, Applexus Technologies",
            "Executive at Winsun Technologies (climate-sustainable 3D construction)",
            "MBA in Technology Management from University of Phoenix",
        ],
        expertise: ["IT Transformation", "Digital Innovation", "Fintech Solutions", "Strategic Partnerships", "Social Entrepreneurship", "Operations Management"],
    },
    {
        slug: "youssou-ndour",
        name: "H.E. Youssou N'Dour",
        title: "Former Minister of Tourism for Senegal",
        role: "Cultural diplomacy and creative advocacy",
        image: "/assets/leadership/H.E. Youssou N'Dour .png",
        category: "board",
        bio: "World‑renowned Senegalese musician, activist and former Minister of Tourism and Culture, using his cultural platform to mobilize support for climate action.",
        fullBio: "H.E. Youssou N'Dour is a world-renowned Senegalese musician, activist, and former Minister of Tourism and Culture. He uses his global platform to connect culture, youth, and environmental stewardship for the Great Green Wall, demonstrating how creative expression can mobilize transformative climate action.",
        expertise: ["Cultural Diplomacy", "Creative Advocacy", "Youth Mobilization"],
    },
    {
        slug: "lassina-zerbo",
        name: "H.E. Dr. Lassina Zerbo",
        title: "Executive Secretary Emeritus CTBTO",
        role: "Former Prime Minister of Burkina Faso; Chairman Rwanda Atomic Energy Board",
        image: "/assets/leadership/H.E. Dr. Lassina Zerbo.png",
        category: "board",
        bio: "Geophysicist and nuclear science diplomat, former Executive Secretary of the CTBTO, advising on science‑driven governance and energy security for a resilient Sahel.",
        fullBio: "H.E. Dr. Lassina Zerbo is a distinguished geophysicist and nuclear science diplomat who served as Executive Secretary of the Comprehensive Nuclear Test-Ban Treaty Organization and Prime Minister of Burkina Faso. He advises the Great Green Wall on science-driven governance and energy security strategies for building Sahel resilience.",
        expertise: ["Science Diplomacy", "Energy Security", "Governance"],
    },
    {
        slug: "richad-soundardjee",
        name: "Richad Soundardjee",
        title: "Managing Director China International Capital Corporation",
        role: "Capital markets and emerging market finance",
        image: "/assets/leadership/Richad Soundardjee.png",
        category: "board",
        bio: "Managing Director at CICC with previous senior leadership at Société Générale, structuring capital markets solutions for emerging markets and sustainable infrastructure.",
        fullBio: "Richad Soundardjee serves as Managing Director at China International Capital Corporation, bringing extensive capital markets expertise from senior roles at Société Générale. He structures innovative financial solutions for emerging markets and sustainable infrastructure investments.",
        expertise: ["Capital Markets", "Emerging Markets Finance", "Infrastructure Finance"],
    },
    {
        slug: "abderrahmane-sissako",
        name: "Abderrahmane Sissako",
        title: "Film Director, Screenwriter, Producer",
        role: "Cultural storytelling and global advocacy",
        image: "/assets/leadership/Abderrahmane Sissako .png",
        category: "board",
        bio: "Mauritanian‑born Malian filmmaker behind works such as Timbuktu, Bamako and Waiting for Happiness, bringing global attention to stories of justice, culture and the environment.",
        fullBio: "Abderrahmane Sissako is a celebrated Mauritanian-born Malian filmmaker whose works including Timbuktu, Bamako, and Waiting for Happiness have brought global attention to African stories of justice, culture, and environmental stewardship. His cinematic vision amplifies the Great Green Wall's narrative power.",
        expertise: ["Filmmaking", "Cultural Storytelling", "Global Advocacy"],
    },
    {
        slug: "maman-sambo-sidikou",
        name: "H.E. Ambassador Maman Sambo Sidikou",
        title: "AU High Representative for Mali and the Sahel",
        role: "Former UN Special Rep. of the Secretary-General for West Africa and the Sahel",
        image: "/assets/leadership/Sambo Sidikou.png",
        category: "board",
        bio: "Nigerien diplomat with 35+ years serving Niger, UN, and AU in leadership positions. Currently AU High Representative for Mali and the Sahel. Former Executive Secretary of G5 Sahel, UN Special Representative in DRC (MONUSCO), Minister of Foreign Affairs of Niger, and Ambassador to the USA. PhD in Education from Florida State University.",
        fullBio: `Maman S. SIDIKOU, a Nigerien (Niger) citizen, was appointed in May 2021 as High Representative of the Chairperson of the African Union (AU) Commission for Mali and the Sahel (MISAHEL) and Head of Mission. He officially took office on August 6, 2021 in Bamako.

Previously, he assumed since February 2018, the functions of Executive Secretary of G5 SAHEL, a sub-regional organization created by five states (Burkina Faso, Mali, Mauritania, Niger, Chad) to coordinate their response to the challenges of terrorism, organized crime and climate change, while also acting together in the areas of humanitarian and sustainable development.

Maman SIDIKOU has a rich experience of more than 35 years in the service of the senior administration and diplomacy of Niger, the United Nations (UN) and the African Union (AU) where he was entrusted with several leadership positions.

In Niger, Mr. SIDIKOU was Director of Cabinet of the Head of State with the rank of Minister (1999), Minister of Foreign Affairs and African Integration (1997-1999) and Ambassador to the United States of America (2011-2014). He was also Director of the Cabinet of the Prime Minister and Director of the National Television.

On the continental level, he served as Special Representative of the Chairperson of the Commission (RSPC) in Somalia and Head of the AU Mission (AMISOM) from 2014 to 2015. His mission was to coordinate the AU's efforts in the fight against Al-Shabab and in the restoration of the state.

Subsequently, Mr. SIDIKOU was appointed by the UN Secretary General as Special Representative (SRSG) and Head of the United Nations Organization Stabilization Mission in the Democratic Republic of Congo (MONUSCO). From 2015 to 2018, his responsibilities included contributing to the holding of presidential elections (initially postponed), resulting in the first peaceful transfer of power in the DRC.

In addition, from 1999 to 2011, Mr. SIDIKOU worked for the World Bank (in Washington DC), UNICEF (in Nigeria, Afghanistan, and Jordan), and Save The Children - UK (in Rwanda and DRC).

PhD in Education from Florida State University in the United States of America and a Master's Degree in Communication from the University of Texas, Mr. SIDIKOU speaks English, French and Spanish, as well as several African languages, including Hausa and Djerma-Songhay.

He is married and has two children.`,
        highlights: [
            "AU High Representative for Mali and the Sahel (MISAHEL) - 2021 to present",
            "Executive Secretary of G5 Sahel - 2018 to 2021",
            "UN Special Representative (SRSG) and Head of MONUSCO in DRC - 2015 to 2018",
            "AU Special Representative in Somalia and Head of AMISOM - 2014 to 2015",
            "Minister of Foreign Affairs and African Integration of Niger - 1997 to 1999",
            "Ambassador of Niger to the United States of America - 2011 to 2014",
            "World Bank, UNICEF, Save The Children experience - 1999 to 2011",
        ],
        distinctions: [
            "PhD in Education from Florida State University",
            "Master's Degree in Communication from University of Texas",
            "Multilingual: English, French, Spanish, Hausa, Djerma-Songhay",
        ],
        expertise: ["Diplomacy", "Peace-building", "Regional Cooperation", "Counter-terrorism", "Humanitarian Development", "African Union Affairs", "UN Operations"],
    },
    {
        slug: "anna-getaneh",
        name: "Anna Getaneh",
        title: "Founder of African Mosaique",
        role: "Fashion designer, humanitarian, and social entrepreneur",
        image: "/assets/leadership/Anna Getaneh.png",
        category: "board",
        bio: "Former international model and fashion designer. Founder of African Mosaique (fashion design & manufacturing hub) and The Ethiopian Children's Fund (ECF) serving 1,000+ children. Design philosophy: Source, Design and Develop in Africa. Featured in Vogue, Marie Claire, ELLE. University of Maryland graduate in Business Management.",
        fullBio: `Anna Getaneh is a former acclaimed international model, fashion designer, a humanitarian and social entrepreneur.

Anna Getaneh is the founder and creative director of African Mosaique, a fashion design, manufacturing and marketing company that also serves as a promotional platform for emerging designers. African Mosaique was first founded in New York City 20 years ago, as a not-for-profit marketing initiative to advance direct African participation in leading fashion platforms internationally. It is now incorporated in Ethiopia and has built the first integrated design center and manufacturing hub in Legetafo. African Mosaique provides job opportunities primarily to women and youth, while sourcing locally and manufacturing, fashion and accessories for the local and international market. In 2016, African Mosaique launched the first fashion incubator program on the continent, to identify and provide a support system to emerging Ethiopian designers.

Anna Getaneh designs the in-house African Mosaique Collection, her design philosophy is based on 3 key elements: Source, Design and Develop in Africa.

Anna is also the founder and Chairman of The Ethiopian Children's Fund (ECF), a non-profit social enterprise based in rural Ethiopia, that comprises a large-scale integrated school and vocational training centre, a primary health centre, a farm and an environmental promotion and conservation site. The school has over 1,000 children enrolled, mostly orphans and children from highly disadvantaged low-income backgrounds. The project has been in successful operation for 22 years, and hundreds of students have graduated and performed well in the national exams.

Anna is a graduate of the University of Maryland, in Business Management Studies and Marketing. A former international model who worked globally out of New York and Paris for 10 years, featuring in major fashion events and leading magazines such as Vogue, Marie Claire, ELLE and made various appearances on TV programs of CNN, SABC and ETV.

She is happily married with two children.`,
        highlights: [
            "Founder & Creative Director of African Mosaique (fashion design & manufacturing)",
            "Founder & Chairman of The Ethiopian Children's Fund (1,000+ children enrolled)",
            "Launched Africa's first fashion incubator program (2016)",
            "Former international model (New York & Paris, 10 years)",
            "Featured in Vogue, Marie Claire, ELLE",
            "22 years of successful ECF operation with hundreds of graduates",
            "University of Maryland: Business Management & Marketing",
        ],
        distinctions: [
            "Featured in Vogue, Marie Claire, and ELLE magazines",
            "CNN, SABC, and ETV television appearances",
        ],
        expertise: ["Fashion Design", "Social Enterprise", "Philanthropy", "Youth Empowerment", "Women's Empowerment", "Sustainable Development"],
    },
    {
        slug: "vanessa-moungar",
        name: "Vanessa Moungar",
        title: "Chief Diversity Officer of the LVMH Group",
        role: "Diversity, equity and inclusion leadership",
        image: "/assets/leadership/Vanessa Moungar.png",
        category: "board",
        bio: "Chief Diversity Officer at LVMH, recognised for championing inclusive growth, gender equity and youth empowerment across the public and private sectors.",
        fullBio: "Vanessa Moungar serves as Chief Diversity Officer at LVMH, recognized globally for championing inclusive growth, gender equity, and youth empowerment across public and private sectors. Her expertise ensures that the Great Green Wall's benefits reach all communities equitably.",
        expertise: ["Diversity & Inclusion", "Gender Equity", "Youth Empowerment"],
    },
    {
        slug: "mariam-aidara-ba",
        name: "Dr Mariam Aidara Ba",
        title: "CEO of Dakar Science Po",
        role: "Political science and leadership development",
        image: "/assets/leadership/Dr Mariam Aidara Ba.png",
        category: "board",
        bio: "Political scientist and CEO of Dakar Science Po, shaping the next generation of African leaders in governance, policy and democratic innovation.",
        fullBio: "Dr. Mariam Aidara Ba is a political scientist and CEO of Dakar Science Po, dedicated to shaping the next generation of African leaders in governance, policy, and democratic innovation. Her work builds the leadership capacity essential for sustaining the Great Green Wall's transformative vision.",
        expertise: ["Political Science", "Leadership Development", "Governance"],
    },
    {
        slug: "manny-aly-ansar",
        name: "Manny Aly Ansar",
        title: "Founder, Timbuktu Cultural Desert Festival",
        role: "Cultural peace-building and dialogue",
        image: "/assets/leadership/Manny Aly Ansar.png",
        category: "board",
        bio: "Founder of the Timbuktu Cultural Desert Festival, using music, culture and storytelling to promote peace-building, dialogue and resilience in the Sahel.",
        fullBio: "Manny Aly Ansar is the founder of the Timbuktu Cultural Desert Festival, a transformative initiative that uses music, culture, and storytelling to promote peace-building, dialogue, and resilience in the Sahel. His work demonstrates the power of culture as a foundation for stability and hope.",
        expertise: ["Cultural Festivals", "Peace-building", "Community Resilience"],
    },
    {
        slug: "kenza-bounjou",
        name: "Kenza Bounjou",
        title: "Lawyer, Founding Partner at URITI",
        role: "Legal governance and impact structures",
        image: "/assets/leadership/Kenza Bounjou.png",
        category: "board",
        bio: "Lawyer and founding partner at URITI, advising on governance, investment and impact structures that align climate action with social justice.",
        fullBio: "Kenza Bounjou is a lawyer and founding partner at URITI, specializing in governance, investment, and impact structures that align climate action with social justice. Her legal expertise ensures that the Great Green Wall's frameworks promote equity and accountability.",
        expertise: ["Legal Governance", "Impact Investment", "Social Justice"],
    },
    {
        slug: "will-mbiakop",
        name: "Will Mbiakop",
        title: "Founder and Executive Chairman – ASCI",
        role: "Sports business leader and accomplished athlete championing Africa's sports and creative ecosystem",
        image: "/assets/leadership/Will Mbiakop.png",
        category: "board",
        bio: "Innovative sports business leader of Cameroonian and Moroccan heritage. Executive Chairman of AMW Consulting Dubai and African Sports and Creative Institute (ASCI). Led NBA Africa's business development generating 70% of revenue through ground-breaking partnerships. Author of 'Africa Sports Industry: Facts, Challenges and Opportunities'.",
        fullBio: `Will Mbiakop is an innovative and versatile sports business leader as well as an accomplished athlete. He is proudly African and a global citizen of Cameroonian and Moroccan heritage. Following a successful consulting career in innovation and technology for major corporations in the automotive and aeronautic sectors in Europe, Will founded AMW Consulting Dubai, UAE, and serves as its Executive Chairman. AMW's focus is on sports marketing, media, events and sports tourism. In 2009 under Will's leadership, AMW established a solid reputation as the sports business powerhouse of the Middle East and Africa region.

Will joined NBA Africa in 2015 to lead its business development effort. After 7 years, his department is generating 70% of the NBA Africa revenue, thanks to ground-breaking partnerships with Africa's top public and private organizations.

Will has an innate passion for sports, youth, education and the creative sector, all for economic development. He is deeply convinced that the sports and entertainment industry is an innovative solution to overcome Africa's major challenges.

Uplifting Africa sports and creative ecosystem is his mission as Executive Chairman of the African Sports and Creative Institute (ASCI).

Will Mbiakop holds an MBA with Merit from the Manchester Business School, he led the effort to publish a trailblazing book entitled "Africa sports Industry: Facts, Challenges and Opportunities". He launched the sports & sustainability program "One Million Wins" to fight climate change in Africa.

Will Mbiakop is a director on the Board of the Great Green Wall of Africa Foundation, and a senior advisor on sports industry for the Southbridge group.`,
        highlights: [
            "Executive Chairman of AMW Consulting Dubai (Middle East & Africa sports business powerhouse)",
            "NBA Africa Business Development Leader (70% of revenue generation)",
            "Executive Chairman of African Sports and Creative Institute (ASCI)",
            "Author: 'Africa Sports Industry: Facts, Challenges and Opportunities'",
            "Founder: 'One Million Wins' sports & sustainability program",
            "Board Director, Great Green Wall of Africa Foundation",
            "MBA with Merit from Manchester Business School",
        ],
        expertise: ["Sports Business", "Sports Marketing", "Business Development", "Strategic Partnerships", "Youth Development", "Sustainability", "Creative Industries"],
    },
];

// Helper function to get leader by slug
export function getLeaderBySlug(slug: string): LeaderData | undefined {
    return leadersData.find((leader) => leader.slug === slug);
}

// Helper function to get all leader slugs
export function getAllLeaderSlugs(): string[] {
    return leadersData.map((leader) => leader.slug);
}

// Helper function to create slug from name
export function createSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/['']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
