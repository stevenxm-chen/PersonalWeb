import NaviBar from '../components/naviBar.js';

function HomePage() {

  return (
  <div className = "homePage">
    <div className = 'Nav'><NaviBar /></div>
    <div className='subtitle'>
      <span className='inline'>Hey, I'm</span>
      <span className = 'title'>Ximing Chen</span>
      <span className='inline'>,</span>
      <span className='inline'>a web developer and a photographer</span>
      </div>
  </div>)
}

export default HomePage;