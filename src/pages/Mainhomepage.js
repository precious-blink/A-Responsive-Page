import { useCustom } from "../sidebarContext"
// import { IconName } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Mainhomepage = ()=>{
    const {openSidebar, closeSidebar} = useCustom()
    return(
        <>
        <div onMouseOver={closeSidebar}>
         <button style={{ backgroundColor: 'orangered', float: 'right'}} className="openBar" onClick={openSidebar}>NavBar</button>
         </div>

         <div className="imgCon">
        {/* <div>
         <button><i className="fa fa-bars" aria-hidden="true"></i></button>
        
        </div> */}
         <div className="">
         <h1 className="doubleU">W.</h1>
         <img className="img" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/90df77130670281.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg" height='250' width='600' alt=""/>
         <section>
          <div>
          <b><h1>The Bright</h1></b> 
          <b><h1>Future Of</h1></b> 
          <b><h1>Web 3.0?</h1></b>
          </div>

         <article>
          <p>We dive into the next evolution of the web that<br/>
             claims to put the power of the platforms back<br/>
             into the hands of the people. But is it really<br/>
             fulfilling it's promise?
          </p>
          <button className="button">Read More</button>
          </article> 
         </section>
         </div>
         <div className="secondimgCon">
          <nav className="nav">
            <ul className="ul">
              <li className="li">Home</li>
              <li className="li">New</li>
              <li className="li">Popular</li>
              <li className="li">Trending</li>
              <li className="li">Categories</li>
            </ul>
          </nav>
         <img className="img2" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c98e19161402635.Y3JvcCwxNjE2LDEyNjQsMCww.png" height='400' width='300' alt=""/>
         </div>
        

         </div>
         <div className="thirdCon">
            <article className="article">
              <img className="img3" src="https://t4.ftcdn.net/jpg/04/88/56/79/240_F_488567986_DRpJQqRa9EOBiFXZqQvOl000W62bWupf.jpg" width='130' />   
              <div>
                <h3>01</h3>
                <h4><b>Reviving Retro Pcs</b></h4>
                <p>What happens when old PCs</p>
                <p>are given modern upgrades?</p>
              </div>         
            </article>

            <article className="article2">
              <img className="img4" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/21293387.546517a3ee2d9.jpg" width='130' />
              <div>      
              <h3>02</h3>
                <h4><b>Top 10 Laptops Of 2022</b></h4>
                <p>Our best picks for various</p>
                <p>needs and budgets.</p>
              </div>       
            </article>
            <article className="article3">
              <img className="img5" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a67cd2114896159.6044997ce5842.jpg" width='130' />
              <div>      
              <h3>03</h3>
                <h4><b>The Growth Of Gaming</b></h4>
                <p>How the pandemic has</p>
                <p>sparked fresh opportunities.</p>
              </div>
             </article>
          </div>
        </>
        
    )
}
export default Mainhomepage