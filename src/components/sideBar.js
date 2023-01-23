import { useCustom } from "../sidebarContext"

const Sidebar = ()=>{
    const {sidebar, closeSidebar} = useCustom()
    return(
        <aside className={sidebar ? 'sideBar openSidebar' : 'sideBar'}>
            <h2>Shaping A New World</h2>
            <button style={{ float: 'right', border:'none', marginTop: '-7%', backgroundColor: 'black', color: 'white', fontWeight: 'bolder', fontSize: 'x-large'}} onClick={closeSidebar}><b>X</b></button>
            <nav>
                <ul>
                    <li className="li2">Home</li>
                    <li className="li2">New</li>
                    <li className="li2">Popular</li>
                    <li className="li2">Trending</li>
                    <li className="li2">Categories</li>
                </ul>
            </nav>

        </aside>
    )
}
export default Sidebar