export const CVData = {
  personalData: {
    name: 'Henadzi Myslitski',
    title: 'Senior Software Engineer',
    image: 'https://media.licdn.com/dms/image/D4D35AQE71YzduoIBCQ/profile-framedphoto-shrink_200_200/0/1689960496539?e=1691222400&v=beta&t=aqmD3ruOCU1zCbHtt5YJRo9c9nyqgQHLZs379XafUOM',
    contacts: [
      { type: 'email', value: 'fargutvest@gmail.com' },
      { type: 'phone', value: '+375 (29) 886 59 57' },
      { type: 'location', value: 'Minsk, Belarus' },
      { type: 'linkedin', value: 'www.linkedin.com/in/henadzi-myslitski-5383a2a6' },
      { type: 'github', value: 'github.com/fargutvest' }
    ]
  },
  sections: [
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Faculty of Computer Systems and Networks, System Engineer',
          authority: 'Belarusian State University of Informatics & Radielectronics',
          authorityWebSite: 'www.bsuir.by',
          rightSide: '2009 - 2013'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      icon: 'archive',
      items: [
	   {
          title: 'Software Designer',
          company: 'Globant',
          description: 'AAA Game dev',
          companyWebSite: 'https://www.globant.com/',
          datesBetween: '2022.04 - Present time',
          descriptionTags: ['.NET', 'C#', 'WPF', 'C++', 'Houdini']
        },
        {
          title: 'Senior Software Engineer',
          company: 'ICE Mortgage Technology',
          description: 'Fintech domain, full-stack.',
          companyWebSite: 'www.icemortgagetechnology.com',
          datesBetween: '2019.08 - 2022.04',
          descriptionTags: ['.NET', 'C#', "MySql", "Java", "Spring", "React", "Kafka", "ELK" ]
        },
        {
          title: 'Software Engineer',
          company: 'Leapwork',
          description: 'Full-stack development of desktop client-server "LEAPWORK" application for automation testing with no code.',
          companyWebSite: 'www.leapwork.com',
          datesBetween: '2018.05 - 2019.08',
          descriptionTags: ['.NET', 'C#', "WPF", "AKKA.NET", "MySql" ]
        },
        {
          title: 'Software Engineer',
          company: 'OptixSoft',
          description: 'Full-stack development of fiber line maintenance application, desktop & web versions.',
          companyWebSite: 'www.optixsoft.com',
          datesBetween: '2016.05 - 2018.05',
          descriptionTags: ['.NET', 'C#', "Silverlight", "WPF", "Angular 4", "Typescript", "MySql" ]
        },
        {
          title: 'Software Engineer',
          company: 'Synesis',
          description: 'Game dev for Android and iOS platforms. "WildRade Race & Shoot" game for modile.',
          companyWebSite: 'synesis-group.com',
          datesBetween: '2015.10 - 2016.01',
          descriptionTags: ['.NET', 'C#', "Xamarin", "Android", "iOS"]
        },
        {
          title: 'Software Engineer',
          company: 'ADANI',
          description: 
          'Developing software for X-Ray security and robotic hardware products.',
          companyWebSite: 'www.adani.by',
          datesBetween: '2014.02 - 2015.10',
          descriptionTags: ['.NET', 'C#', "WinForms", "C++", "Delphi", "SerialPort", "X-Ray"]
        },
        {
          title: 'Software Engineer',
          company: 'Energomera',
          description: 'Developing software for metrology calibration of energy counters.',
          companyWebSite: 'energomera.by',
          companyMeta: 'Fanipol, Belarus',
          datesBetween: '2012.08 - 2014.02',
          descriptionTags: ['.NET', 'C#', "MS SQL", "WinForms", "SerialPort"]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'English',
          authorityMeta: 'B2'
        },
        {
          authority: 'Russian',
          authorityMeta: 'Native'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills',
      icon: 'rocket',
      items: ['.NET', 'C#', 'WPF', 'WinForms', 'Xamarin', 'Silverlight', "AKKA.NET", 'C++', 'Delphi', 'X-Ray', 'Andriod', 'Java', 'Spring', 'React', 'Angular 4', 'Typescript', 'SQL', 'MySQL', 'Kafka', 'ELK']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Radioelectronics', 'DIY']
    }
  ]
}
