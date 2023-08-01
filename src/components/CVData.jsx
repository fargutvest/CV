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
          description: 'WPF Tools for AAA Game dev',
          companyWebSite: 'https://www.globant.com/',
          datesBetween: '2022.04 - Present time',
          descriptionTags: ['.NET', 'C#', 'WPF', 'C++', 'Houdini']
        },
        {
          title: 'Senior Software Engineer',
          company: 'ICE Mortgage Technology',
          description: 'mortgage, fintech domain, banks of USA',
          companyWebSite: 'www.icemortgagetechnology.com',
          datesBetween: '2019.08 - 2022.04',
          descriptionTags: ['.NET', 'C#', "MySql", "Java", "Spring", "React", "Kafka", "Microservices", "ELK" ]
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
          description: 'C# .NET game developing in Xamarin for Android and IOS platform.' +
          'I worked there on one little project. It is game in race for mobile platform.' +
          
          'Used technology: .NET, Xamarin and company-made game engine.' +
          'My responsibilities: fix bugs, add new features.' +
          'Team of 4 programmers and 2 testers.',
          companyWebSite: 'synesis-group.com',
          datesBetween: '2015.10 - 2016.01',
          descriptionTags: ['.NET', 'C#', "Xamarin", "Android", "iOS"]
        },
        {
          title: 'Software Engineer',
          company: 'ADANI',
          description: 
          'C# .NET developing security and robotic software.' +
          'I there participated in develop on a few projects:' +
          'Bagage scanner - robotic x-ray security control bagage with output image in to display.' +
          'Control of passangers - robotic x-ray security control human in full growth with output image to display.' +
          'Delivery of liquids in electron paramagnetic resonance spectrometer - servomotor installation for transfer liquids in to spectrometer.' +
          'Terascan - medical x-ray installation for irradiation of cancerous tumors.' +
          
          'Used technology: .Net Framework 4.5, Windows Forms.' +
          'My resposibilities: develop new software in order to migrate with old Delphi code in to progressive C# code.' +
          'Team of 6 programmers and 2 testers.',
          companyWebSite: 'www.adani.by',
          datesBetween: '2014.02 - 2015.10',
          descriptionTags: ['.NET', 'C#', "WinForms", "C++", "Delphi", "SerialPort", "X-Ray"]
        },
        {
          title: 'Software Engineer',
          company: 'Energomera',
          description: 'C# .NET developing metrology sofware, cooperation with database.' +
          'I worked there on a few projects for inner manufacture needs: Accounting operations manufacture operators in database.' +
          'Metrology calibration, verification counters electroenergy.' +
          'Generation reports. Used technology: .Net Framework 4.5, Windows Forms, ADO.NET' +
          'My responsibilities: develop new software. Team of 1 programmer (me).',
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
