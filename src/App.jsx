import Navbar from './components/Section1/Navbar.jsx'
import Page1Content from './components/Section1/Page1Content.jsx'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {

  const users = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'Satisfied is a feeling of happiness or contentment when your needs, expectations, or goals are fulfilled. It reflects a sense of achievement, comfort, or approval with a situation or result',
    tag:'Satisfied',
    color:'#EBC3CF'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'Underserved refers to people or communities that do not receive enough services, opportunities, or resources compared to others. It often describes groups with limited access to healthcare, education, technology, or support.',
    tag:'Underserved',
    color:'#2D3748'
    },
    {img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',intro:'Underbanked refers to individuals or and rely partly on alternative financial services like payday loans or money transfers. They may have a bank account but still lack full access to affordable financial tools and credit.',
    tag:'Underbanked',
    color:'#2B2B2B'
    },
    {img:'https://plus.unsplash.com/premium_photo-1722859456176-4ae0457e58e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',intro:'Analysers are tools, systems, information, or processes to identify patterns, detect issues, and provide insights. They help in decision-making by breaking complex information into understandable results.',
    tag:'Analysers',
    color:'#1A202C'
    },
    {img:'https://images.unsplash.com/photo-1762341117487-dbc411bcf574?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',intro:'An accountant is a professional who manages financial records, prepares reports, and ensures accurate tracking of income, and taxes. Businesses maintain financial stability and comply with financial regulations.',
    tag:'Accountant',
    color:'gray'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
