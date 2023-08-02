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
          title: 'Senior Software Engineer',
          company: 'Globant',
          companyMeta: 'Out-source company headquarted in Argentina',
          description:
          'Worked on 1 project with the customer from the UK. ' +
          'It was Procedural World toolset for AAA Game dev team. ' + 
          'Used .NET C#, WPF, SharpMake, Helix Perforce/P4 as main technologies. ' +
          'Leaded development process, promoted architectural improvements. ' +
          'Implemented features, fixed bugs, investigated issues, wrote UnitTests, reviewed code. ' +
          'Participated in daily SCRUM video-calls with the customer in English. ' + 
          'Reported about my work and discussed techical topics in English. ' +
          'Mentored Junior teammates. ',
          companyWebSite: 'https://www.globant.com/',
          datesBetween: '2022.04 - Present time',
          descriptionTags: ['.NET', 'C#', 'WPF', 'C++', 'Houdini', "SharpMake", "Asure DevOps", "TeamCity", "Helix Perforce/P4", "Swarm"]
        },
        {
          title: 'Senior Software Engineer',
          company: 'ICE Mortgage Technology',
          companyMeta: 'Product company headquarted in the USA and specializing in mortgage, fintech domain, banks of the USA.',
          description: 
          'Worked on 2 projects. '+  
          'The 1st project was the integrational service between Loan Origination Systems. ' +
          'The 2nd project was the web application for automation routine of Bank`s underwriter. ' +
          'Used .NET C#, .NET Core, MySql, Java, Spring, React, Docker, Kafka, Git as main technologies. ' +
          'Worked in disturbed team where one part of the team was in India and others were in Poland and Belarus' +
          'Implemented features, fixed bugs, investigated issues, wrote UnitTests, reviewed code. ' +
          'Participated in daily SCRUM video-calls with the colleagues from India and Poland in English. ' + 
          'Reported about my work and discussed technical topics in English. ',
          companyWebSite: 'www.icemortgagetechnology.com',
          datesBetween: '2019.08 - 2022.04',
          descriptionTags: ['.NET', 'C#', "Self-hosted", "API", "Window Scheduler", "RDP", "Deployment", "MySql", "XML", "Configuring",
           "Java", "Spring", "React", "Kafka", "Microservices", "PostgreSQL", "ELK", "Git" ]
        },
        {
          title: 'Senior Software Engineer',
          company: 'Leapwork',
          companyMeta: 'Product copmpany headquarted in Denmark.',
          description: 'Full-stack development of desktop client-server application for automation testing with no code. ' +
          'Used .NET C#, WPF, AKKA.NET, Signal-R, MySql, Git as main technologies. ' +
          'Worked in disturbed team where the part of team was in Denmark. ' + 
          'Implemented features, fixed bugs, investigated issues, wrote UnitTests, reviewed code. ' +
          'Participated in daily SCRUM video-calls with the colleagues from Denmark. ' + 
          'Reported about my work and discussed techical topics in English. ',
          companyWebSite: 'www.leapwork.com',
          datesBetween: '2018.05 - 2019.08',
          descriptionTags: ['.NET', 'C#', "WPF", "AKKA.NET", "Signal-R", "MySql", "Git" ]
        },
        {
          title: 'Software Engineer',
          company: 'OptixSoft',
          companyMeta: 'Product company headquarted in Belarus and specializing in maintaining of fiber lines.',
          description: 'Full-stack development of fiber line maintenance application, desktop & web versions.',
          companyWebSite: 'www.optixsoft.com',
          datesBetween: '2016.05 - 2018.05',
          descriptionTags: ['.NET', 'C#', "Silverlight", "WPF", "Angular 4", "Typescript", "MySql", "Git", "SVN" ]
        },
        {
          title: 'Software Engineer',
          company: 'Synesis',
          companyMeta: 'Product copmpany headquarted in Russia.',
          description: 'C# .NET game developing in Xamarin for Android and IOS platform. ' +
          'Worked on one project. It was the game for a mobile platform. ' +
          'Used technologies: .NET, Xamarin and company-made game engine. ' +
          'My responsibilities: fixed bugs, added new features. ' +
          'Team consisted of 4 programmers and 2 testers. ',
          companyWebSite: 'synesis-group.com',
          datesBetween: '2015.10 - 2016.01',
          descriptionTags: ['.NET', 'C#', "Xamarin", "Android", "iOS", "Git"]
        },
        {
          title: 'Junior Software Engineer',
          company: 'ADVIN',
          companyMeta: 'Product company headquarted in Belarus and specializing in x-ray security.',
          description: 
          'C# .NET developing security and robotic software. ' +
          'Participated in the development on a few projects: ' +
          'Baggage scanner - robotic x-ray security control of the baggage with its image display on the screen. ' +
          "Passenger's Control - robotic x-ray security control of people in full growth with their image display on the screen. " +
          'EPR - XYZ robotic hand with peristaltic pump, spectroanalyser.' +
          'Terascan - medical x-ray installation for irradiation of cancerous tumors. ' +
          
          'Used technology: .Net Framework 4.5, Windows Forms. ' +
          'My resposibilities: developed new software, migrated Delphi code-base to .NET C# code-base. ' +
          'Team consisted of 6 programmers and 2 testers. ',
          companyWebSite: 'www.advin.by',
          datesBetween: '2014.02 - 2015.10',
          descriptionTags: ['.NET', 'C#', "WinForms", "WPF", "C++", "Delphi", "X-Ray", "SerialPort", "Enternet", "Robotics", "Security", "SVN", "Git"]
        },
        {
          title: 'Trainee Software Engineer',
          company: 'Energomera',
          companyMeta: 'Product copmpany headquarted in Belarus  and specializing in ASCAPC. Automatic System for Commercial Accounting of Power Consumption.',
          description: 'C# .NET developing metrology sofware, cooperation with database. ' +
          'I worked there on a few projects for inner manufacture needs: '+
          'Product Lifecycle Management system. ' +
          'Metrology calibration/verification counters of power consumption. ' +
          'Generation reports. Used technology: .Net Framework 4.5, Windows Forms, ADO.NET ' +
          'My responsibilities: developed new software. Team consisted of 1 programmer. ',
          companyWebSite: 'energomera.by',
          datesBetween: '2012.08 - 2014.02',
          descriptionTags: ['.NET', 'C#', "WinForms", "ADO.NET", "SerialPort"]
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
          authorityMeta: 'B2 level, years of experience of voice communication'
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
      items: ['.NET', 'C#', 'WPF', 'WCF', 'JB dotTrace', 'TeamCity', 'Azure DevOps', 'Jenkins',
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
      items: ['Tech books about software engineering', 'Listening music', 'Self-motivation', 'Automatization routine', 'Radioelectronics/Physics/Math', 'DIY', 'Sport/Cycling/Gym']
    }
  ]
}
