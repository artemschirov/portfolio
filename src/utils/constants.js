const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express',
  'MongoDB',
  'SASS',
  'Git',
  'GitHub',
  'Python',
  'Linux',
];

const PROJECTS = [
  {
    id: 0,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/how-to-learn',
    link: 'https://artemshchirov.github.io/how-to-learn/#en',
  },
  {
    id: 1,
    title: 'Around The World',
    subtitle:
      'Web page showing a user`s information and photos they have uploaded from around the World. Images can be deleted, liked, and new images added.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/artemshchirov/mesto-react',
    link: 'https://artemshchirov.github.io/mesto/',
  },
  {
    id: 2,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 3,
    title: 'Around The World',
    subtitle:
      'Web page showing a user`s information and photos they have uploaded from around the World. Images can be deleted, liked, and new images added.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 4,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 5,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 6,
    title: 'Around The World',
    subtitle:
      'Web page showing a user`s information and photos they have uploaded from around the World. Images can be deleted, liked, and new images added.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 7,
    title: 'How to Learn',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
  {
    id: 8,
    title: 'Travel',
    subtitle:
      'Web page describing various stops along the way of a train trip around the Portland.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/artemshchirov/russian-travel',
    link: 'https://artemshchirov.github.io/russian-travel/',
  },
];

const CARD_COUNT = {
  SMALL_DEVICE: {
    ADD: 3,
    START: 3,
  },
  MIDDLE_DEVICE: {
    ADD: 2,
    START: 4,
  },
  BIG_DEVICE: {
    ADD: 3,
    START: 6,
  },
};

const CARD_BREAKPOINT = {
  TWO: 1000,
  ONE: 700,
};

export { SKILLS, PROJECTS, CARD_COUNT, CARD_BREAKPOINT };
