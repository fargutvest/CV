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
          companyMeta: 'This is out-source copmpany headquarted in Argentina and specializing on out-sourcing.',
          description:
          'Worked on 1 project with UK customer. ' +
          'This is Procedural World toolset for AAA Game dev team. ' + 
          'Used .NET C# and WPF as main technologies. ' +
          'Leaded development process, promoted architectural improvements. ' +
          'Participated daily SCRUM video-calls with customer. ' + 
          'Reported about my work and discussed techical topics in English. ' +
          'Mentored Junior teammates. ',
          companyWebSite: 'https://www.globant.com/',
          datesBetween: '2022.04 - Present time',
          descriptionTags: ['.NET', 'C#', 'WPF', 'C++', 'Houdini']
        },
        {
          title: 'Senior Software Engineer',
          company: 'ICE Mortgage Technology',
          companyMeta: 'This is product copmpany headquarted in USA and specializing on mortagage.',
          description: 
          'Worked on 2 projects. '+  
          'First one is integrational service between Loan Origination Systems. ' +
          'Second one is web application for automation routine of Bank`s underwriter. ' +
          'Automated Underwriter Service (AUS) ' +
          'mortgage, fintech domain, banks of USA (no more details so far because NDA)',
          companyWebSite: 'www.icemortgagetechnology.com',
          datesBetween: '2019.08 - 2022.04',
          descriptionTags: ['.NET', 'C#', "MySql", "Java", "Spring", "React", "Kafka", "Microservices", "ELK" ]
        },
        {
          title: 'Software Engineer',
          company: 'Leapwork',
          companyMeta: 'This is product copmpany headquarted in Denmark with own product - named LEAPWORK.',
          description: 'Full-stack development of desktop client-server "LEAPWORK" application for automation testing with no code. (no more details so far because NDA)',
          companyWebSite: 'www.leapwork.com',
          datesBetween: '2018.05 - 2019.08',
          descriptionTags: ['.NET', 'C#', "WPF", "AKKA.NET", "MySql" ]
        },
        {
          title: 'Software Engineer',
          company: 'OptixSoft',
          companyMeta: 'This is product copmpany headquarted in Belarus and spicializing in maintain of fiber lines.',
          description: 'Full-stack development of fiber line maintenance application, desktop & web versions. (no more details so far because NDA)',
          companyWebSite: 'www.optixsoft.com',
          datesBetween: '2016.05 - 2018.05',
          descriptionTags: ['.NET', 'C#', "Silverlight", "WPF", "Angular 4", "Typescript", "MySql" ]
        },
        {
          title: 'Software Engineer',
          company: 'Synesis',
          companyMeta: 'This is product copmpany headquarted in Russia.',
          description: 'C# .NET game developing in Xamarin for Android and IOS platform. ' +
          'I worked there on one little project. It is game in race for mobile platform. ' +
          'Used technology: .NET, Xamarin and company-made game engine. ' +
          'My responsibilities: fix bugs, add new features. ' +
          'Team of 4 programmers and 2 testers. ',
          companyWebSite: 'synesis-group.com',
          datesBetween: '2015.10 - 2016.01',
          descriptionTags: ['.NET', 'C#', "Xamarin", "Android", "iOS"]
        },
        {
          title: 'Software Engineer',
          company: 'ADVIN',
          companyMeta: 'This is product copmpany headquarted in Belarus and specializing on x-ray security.',
          description: 
          'C# .NET developing security and robotic software. ' +
          'I there participated in develop on a few projects: ' +
          'Bagage scanner - robotic x-ray security control bagage with output image in to display. ' +
          'Control of passangers - robotic x-ray security control human in full growth with output image to display. ' +
          'Delivery of liquids in electron paramagnetic resonance spectrometer - servomotor installation for transfer liquids in to spectrometer. ' +
          'Terascan - medical x-ray installation for irradiation of cancerous tumors. ' +
          
          'Used technology: .Net Framework 4.5, Windows Forms. ' +
          'My resposibilities: develop new software in order to migrate with old Delphi code in to progressive C# code. ' +
          'Team of 6 programmers and 2 testers. ',
          companyWebSite: 'www.advin.by',
          datesBetween: '2014.02 - 2015.10',
          descriptionTags: ['.NET', 'C#', "WinForms", "C++", "Delphi", "SerialPort", "X-Ray"]
        },
        {
          title: 'Software Engineer',
          company: 'Energomera',
          companyMeta: 'This is product copmpany headquarted in Belarus  and specializing in ASCAPC. Automatic System for Commercial Accounting of Power Consumption.',
          description: 'C# .NET developing metrology sofware, cooperation with database. ' +
          'I worked there on a few projects for inner manufacture needs: Accounting operations manufacture operators in database. ' +
          'Metrology calibration, verification counters electroenergy. ' +
          'Generation reports. Used technology: .Net Framework 4.5, Windows Forms, ADO.NET ' +
          'My responsibilities: develop new software. Team of 1 programmer (me). ',
          companyWebSite: 'energomera.by',
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
          authorityMeta: 'B2 level, a lot of experience of voice communication with customer'
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
      items: ['.NET', 'C#', 'WPF', 'WCF', 'JB dotTrace', 
      'JB dotPeak', 'MS VS', 'MS VS Code', 'powershell', 'IoC', 
      'Design Patterns', 'SOLID', 'TDD',
      'WinForms', 'Xamarin', 'Silverlight', 'ADO.NET',
      "AKKA.NET", 'C++', 'Delphi', 
      'X-Ray', 'Andriod', 'Java', 'IOS', 'Mobile GameDev', 'AAA GameDev',
      'Product company', 'Out-source company', 
      'Spring', 'React', 'Angular 4', 
      'Typescript', 'SQL', 'MySQL', 'PostgreSQL',
      'Kafka', 'ELK', 'UML']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Tech books about software engineering', 'Radioelectronics/Physics/Math', 'DIY', 'Sport/Cycling/Gym']
    }
  ]
}
