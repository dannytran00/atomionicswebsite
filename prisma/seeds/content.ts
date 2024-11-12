const ContentData = [
  {
    // id: 1,
    page: 'home',
    section: 'cover',
    title: 'Absolute gravity. <br />Moving base. <br />Drift free.',
    sub: null,
    description:
      'A revolutionary way of pinpointing resources <br /> to power the needs of humanity <br /> with <b>quantum gravimetry</b>.',
    image: 'cover.png',
    active: true,
  },
  {
    // id: 2,
    page: 'home',
    section: 'second',
    title: 'How can Atomionics enable the energy transition?',
    sub: null,
    description:
      'Pinpoint resources critical for the energy transition in a fraction of the time with moving-base gravimetry and AI-based 3D models of the subsurface',
    image: 'pinpoint.png',
    active: true,
  },
  {
    page: 'home',
    section: 'second',
    title: 'Accelerate',
    sub: 'Exploration Workflow',
    description: 'Survey large areas quickly in high resolution',
    image: 'accelerate.png',
    active: true,
  },
  {
    page: 'home',
    section: 'second',
    title: 'Enhance',
    sub: 'Target Discovery',
    description:
      'Identify regions of interest by using Gravio as a virtual drill',
    image: 'target.png',
    active: true,
  },
  {
    page: 'home',
    section: 'second',
    title: 'Minimize',
    sub: 'Environmental Externality',
    description: 'Reduce the need for invasive false positive drills',
    image: 'environmental.png',
    active: true,
  },
  {
    page: 'home',
    section: 'third',
    title: null,
    sub: null,
    description: null,
    image: 'gravio.png',
    active: true,
  },
  {
    page: 'home',
    section: 'third',
    title: 'Meet',
    sub: null,
    description: 'An Integrated Solution',
    image: 'gravio-logo.svg',
    active: true,
  },
  {
    page: 'home',
    section: 'third_map',
    title: 'Acquisition',
    sub: null,
    description:
      'A quantum gravimeter optimized to capture high-resolution gravity data while operational on a mobile vehicle for quick surveys',
    image: null,
    active: true,
  },
  {
    page: 'home',
    section: 'third_map',
    title: 'Analysis',
    sub: null,
    description:
      "Analyze Gravio's unique gravity datasets with our proprietary AI platform to unlock information hidden beneath the surface",
    image: null,
    active: true,
  },
  {
    page: 'home',
    section: 'third_map_image',
    title: 'Gravio Data',
    sub: null,
    description: null,
    image: 'gravio-graph.png',
    active: true,
  },

  {
    page: 'home',
    section: 'third_map_image',
    title: 'Classical Gravimeter',
    sub: null,
    description: null,
    image: 'classic-graph.png',
    active: true,
  },
  {
    page: 'home',
    section: 'third_map_second',
    title: 'Absolute gravity',
    sub: null,
    description:
      'Gravio is an absolute gravimeter, which ensures integration of datasets acquired at different time periods and compatibility with historical absolute gravity datasets',
    image: null,
    active: true,
  },
  {
    page: 'home',
    section: 'third_map_second',
    title: 'Operational all year',
    sub: null,
    description:
      "Gravio's plug and play operational capabilities in diverse climates and weather conditions enable surveys throughout the year without the need for a large crew",
    image: null,
    active: true,
  },
  {
    page: 'home',
    section: 'third_map_second',
    title: 'Drift-free data',
    sub: null,
    description:
      'Gravio enables long term monitoring of small-scale variations over time to track changes in remaining reserves during extraction by acquiring data that does not drift',
    image: null,
    active: true,
  },
  {
    page: 'home',
    section: 'third_map_second',
    title: 'Automated density inversion',
    sub: null,
    description:
      "Gravio's high spatial resolution data ensures improved correlation among neighboring data points for density inversion, which is automated using our AI platform",
    active: true,
  },

  {
    page: 'home',
    section: 'third_bottom',
    title: 'How does',
    sub: null,
    image: 'gravio-logo2.svg',
    description: 'add value?',
    active: true,
  },
  {
    page: 'home',
    section: 'third_bottom',
    title: null,
    sub: null,
    description:
      'Gravio generates actionable insights to <b>improve discovery rate and reduce false positive drills</b>',
    active: true,
  },
  {
    page: 'our solution',
    section: 'cover',
    title: null,
    sub: null,
    description: 'Using cold atom interferometry to pinpoint resources',
    image: 'gravio-logo3.svg',
    active: true,
  },
  {
    page: 'our solution',
    section: 'cover',
    title: null,
    sub: null,
    description: '',
    image: 'gravio3.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'cover',
    title: 'What is',
    sub: null,
    description: 'Cold Atom Interferometry?',
    image: null,
    active: true,
  },
  {
    page: 'our solution',
    section: 'second',
    title: null,
    sub: null,
    description:
      'The first commercially available absolute quantum gravimeter optimized for moving-base applications. It enables application areas that were not feasible before by automatically acquiring drift-free data on a moving platform.',
    image: 'gravio-logo4.svg',
    active: true,
  },
  {
    page: 'our solution',
    section: 'second',
    title: '',
    sub: null,
    description: null,
    image: 'gravio2.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'second',
    title: 'Drift Free Measurement',
    sub: null,
    description: null,
    image: 'drift.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'second',
    title: 'Moving Base Gravimetry',
    sub: null,
    description: null,
    image: 'moving.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'second',
    title: 'Autonomous Data Aquisition',
    sub: null,
    description: null,
    image: 'autonomous.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'third',
    title: null,
    sub: null,
    description:
      "An AI-based geophysical processing platform that utilizes Gravio's unique datasets to generate 3D models of the subsurface.",
    image: null,
    active: true,
  },
  {
    page: 'our solution',
    section: 'third',
    title: 'Pinpoint Targets',
    sub: null,
    description: null,
    image: 'target.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'third',
    title: 'Reduce False Positive Drills',
    sub: null,
    description: null,
    image: 'positive.png',
    active: true,
  },
  {
    page: 'our solution',
    section: 'third',
    title: 'Estimate Resources',
    sub: null,
    description: null,
    image: 'estimation.png',
    active: true,
  },
  {
    page: 'careers',
    section: 'cover',
    title: 'CREATE',
    description: 'Commercially Disruptive Solutions',
    image: 'create.png',
    active: true,
  },
  {
    page: 'careers',
    section: 'cover',
    title: 'SOLVE',
    description: 'The Hardest Problem Statements',
    image: 'solve.png',
    active: true,
  },
  {
    page: 'careers',
    section: 'cover',
    title: 'INNOVATE',
    description: 'In an Interdisciplinary Environment',
    image: 'innovate.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'second',
    title: 'Core Values ',
    sub: null,
    description: 'at Atomionics',
    image: '',
    active: true,
  },
  {
    page: 'careers',
    section: 'second',
    title: 'Growth Mindset',
    sub: null,
    description:
      'Intelligence can be developed. We welcome people who embrace challenges, persist in the face of setbacks, see effort as the path to mastery, learn from criticism, and find lessons and inspiration in the success of others.',
    image: 'value1.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'second',
    title: 'Extreme Ownership',

    sub: null,
    description:
      'Each person at Atomionics owns their role. They do whatever it takes to get the job done. We are responsible for not only the levers we control but also anything that affects our success.',

    image: 'value2.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'second',
    title: 'Empathy',

    sub: null,
    description:
      "We empathize with everyone we interact with. It is the first step to truly understand someone's problem and cater to their needs, whether they be internal stakeholders or external stakeholders.",

    image: 'value3.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'second',
    title: 'Idea Meritocracy',

    sub: null,
    description:
      'Atomionics practices a decision making system where the best ideas win out, which is not reliant on hierarchy. Decision making is based on scientific thought, strengthened by our open communication and transparency.',

    image: 'value4.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'third',
    title: 'A Day',
    sub: null,
    description: 'at Atomionics',
    image: null,
    active: true,
  },

  {
    page: 'careers',
    section: 'fourth',
    title: 'Employee Benefits',
    sub: null,
    description: null,
    image: null,
    active: true,
  },
  {
    page: 'careers',
    section: 'fourth',
    title: 'Medical Insurance',
    sub: null,
    description: null,
    image: 'benefit1.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'fourth',
    title: 'Equity',
    sub: null,
    description: null,
    image: 'benefit2.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'fourth',
    title: 'Unlimited Leaves',
    sub: null,
    description: null,
    image: 'benefit3.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'fourth',
    title: 'Book Allowance',
    sub: null,
    description: null,
    image: 'benefit4.png',
    active: true,
  },

  {
    page: 'careers',
    section: 'fifth',
    title: 'Listen to what our interns have to say!',
    sub: null,
    description: null,
    image: null,
    active: true,
  },

  {
    page: 'careers',
    section: 'sixth',
    title: 'Opportunities',
    sub: null,
    description:
      'We are actively expanding our team as we build the next generation sensing solutions.<br /> Drop a message to <b><a href="mailto:jobs@atomionics.com">jobs@atomionics.com</a></b> to learn more or apply below:',
    image: null,
    active: true,
  },
  {
    page: 'careers',
    section: 'sixth',
    title: 'Full-time opportunities',
    sub: null,
    description: 'https://wellfound.com/company/atomionics/jobs',
    image: 'opportunity1.png',
    active: true,
  },
  {
    page: 'careers',
    section: 'sixth',
    title: 'Intern with us',
    sub: null,
    description:
      'https://glints.com/sg/companies/atomionics/570fc38c-0448-4bbd-9334-43c8e4d9be2d',
    image: 'opportunity2.png',
    active: true,
  },

  {
    page: 'about us',
    section: 'cover',
    title: 'About Us',
    sub: null,
    description:
      ' Atomionics is a Singapore based startup building quantum sensors for resource exploration and navigation. Our sensors can build a 3D model of the subsurface, thus helping pinpoint resources critical for the energy transition, provide precise navigation,create a universal positioning system that works everywhere, as well as detect earthquakes and volcanic eruptions. We have deep expertise in bringing complex technologies from a lab environment to the dynamic real world. <br /><br />We are a focused group in a high-energy environment. The core of what we are building is called cold atom interferometry, where we cool down atoms to microkelvin temperatures by shooting lasers at them. This allows us to precisely measure the forces acting on them. Due to the complexity of our work, our employees get to interact with other domains such as electronics engineering, mechanical engineering, software engineering, and physics. Our company likes to treat our work as a “gym for our minds”. <br /> <br />In addition, we are backed by some fantastic investors from the private and public sectors, such as Wavemaker, SGInnovate, Cap Vista, 500 Startups, Paspalis, and other prominent angels.',
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'second',
    title: 'Vision',
    sub: null,
    description:
      'Support the resource exploration industry to enhance recovery, reduce costs, and minimize wastage',
    image: 'vision.png',
    active: true,
  },

  {
    page: 'about us',
    section: 'second',
    title: 'Mission',
    sub: null,
    description:
      'Make energy accessible to the masses because everyone has the right to resources',
    image: 'mission.png',
    active: true,
  },

  {
    page: 'about us',
    section: 'second',
    title: 'Purpose',
    sub: null,
    description:
      'Do more with less - minimize environmental externality while maximizing resource efficiency',
    image: 'purpose.png',
    active: true,
  },
  {
    page: 'about us',
    section: 'third',
    title: null,
    sub: null,
    description:
      'Strong Domain Expertise with Wide Interdisciplinary Capabilities',
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'media',
    title: 'Media',
    description: "Latest updates of what's happening on our social media",
    image: null,
    active: true,
  },
  {
    page: 'about us',
    section: 'faq',
    title: 'FAQ',
    description: 'Frequently Asked Questions',
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'faq_list',
    title: 'What is the working principle behind Gravio?',
    sub: null,
    description:
      'Gravio is powered by cold atom interferometry, a cutting-edge technology that exploits quantum states of atoms to measure variations in the Earth\'s gravitational field. As atoms experience different gravitational forces, their quantum states undergo changes, which Gravio detects with unparalleled precision. Analyzing these quantum states allows Gravio to provide highly accurate gravity measurements, enabling the identification of gravitational anomalies that may signify concealed resources below the Earth\'s surface.  For a more comprehensive understanding of our technology, you can explore the following papers:  <li class="underline"><a href="https://www.degruyter.com/document/doi/10.1515/aot-2020-0026/html" target="_blank"> Cold atom interferometry for inertial sensing in the field</a> </li> <li class="underline"><a href="https://opg.optica.org/abstract.cfm?uri=FiO-2019-FS3A.4" target="_blank"> Conceptualization, Design, and Prospects of Atom-Interferometry Based Full Tensor Gravity Gradiometer </a></li>',
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'faq_list',
    title: 'How can Gravio benefit resource exploration efforts?',
    sub: null,
    description:
      'Gravimetry has been a vital tool in resource exploration since the 20th century, enabling the detection of subsurface density anomalies through variations in the gravitational potential field. Gravio, with its revolutionary moving-base capability, takes this approach to the next level by facilitating continuous data capture. This empowers geophysicists and exploration teams to swiftly and precisely identify critical minerals, geothermal reservoirs, and other valuable resources, leading to targeted and cost-effective exploration campaigns while minimizing the risk of investing in non-prospective areas.',
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'faq_list',
    title: 'What types of resources can Gravio help detect?',
    sub: null,
    description:
      "Gravio's unique high-resolution gravity dataset enables the detection of diverse resources, encompassing critical mineral deposits crucial for the energy transition, hydrocarbon reservoirs, geothermal energy sources, and groundwater reserves, among others.",
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'faq_list',
    title:
      'How does Gravio contribute to reducing environmental impact during resource exploration?',
    sub: null,
    description:
      "Gravio's significant contribution to reducing environmental impact stems from its non-invasive and precise sensing capabilities. Unlike certain exploration methods that may involve drilling or ground disturbance, Gravio collects gravity data from the surface without altering the landscape physically. This approach minimizes environmental disruption, decreases carbon emissions related to exploration activities, and facilitates exploration in sensitive or protected areas with minimal impact on the ecosystem. Moreover, Gravio's exceptional high-resolution gravity dataset allows for pinpointing drill targets with greater accuracy, thereby reducing environmental impact from unnecessary drilling and avoiding false positives.",
    image: null,
    active: true,
  },

  {
    page: 'about us',
    section: 'faq_list',
    title:
      'Can Gravio be used for any other applications beyond resource exploration?',
    sub: null,
    description:
      "Gravio's versatility extends far beyond resource exploration, as it offers high precision and sensitivity valuable in various scientific and engineering domains. In geodesy, Gravio aids in measuring the Earth's gravitational field, enhancing our understanding of geophysical processes. Additionally, it finds applications in environmental monitoring, enabling the study of groundwater fluctuations, geohazard monitoring, and even contributing to research on climate change's impact on sea level variations. Moreover, Gravio's precise gravity measurements have significance in fundamental physics research, including tests of aspects of Einstein's theory of general relativity.",
    image: null,
    active: true,
  },
  {
    page: 'footer',
    section: 'footer',
    title: 'Atomionics Pte Ltd',
    sub: null,
    description:
      '#01-05, Corporation Place <br/> 2 Corporation Rd, Singapore - 618494',
    image: null,
    active: true,
  },
]
export default ContentData
