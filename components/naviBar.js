import Link from 'next/link';

const NaviBar = () => {

  return (
    <div className = "navi">
      <div className = "bar">
        <Link href = "/about"><span className = "naviItem">About</span></Link>
        <Link href = '/'><span className = "naviItem">Contact</span></Link>
      </div>
    </div>
  )
}

export default NaviBar;
