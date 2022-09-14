function header() {
    return `    
    <div id="navbar1">
        <h3>
            <a href="">IndiaToday</a>
        </h3>

        <h3>
            <a href="">Malayalam</a>
        </h3>

        <h3>
            <a href="">Business Today</a>
        </h3>

        <h3>
            <a href="">DailyO</a>
        </h3>

        <h3>
            <a href="">Aaj Tak</a>
        </h3>

        <h3>
            <a href="">Lallantop</a>
        </h3>

        <h3>
            <a href="">Bangla</a>
        </h3>

        <h3>
            <a href="">GNTTV</a>
        </h3>

        <h3>
            <a href="">iChowk</a>
        </h3>

        <h3>
            <a href="">Reader's Digest</a>
        </h3>
</div>

<div id="navbar2">
    <div id="bar1">
        <h2 id="news">NEWS</h2>
        <h2 id="live"><a href="livetv.html">LIVE TV</a></h2>
        <div id="logo">
            <img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52" 
            alt="IndiaToday" id="logo">
        </div>
        <h2 id="app">APP</h2>
        <h2 id="magazine">MAGAZINE</h2>
    </div>
</div>

<div id="navbar3">
    <div id='minimize'>
        <label id='minicon'>
        <i class='fas fa-bars'></i>   
    </div>
   <div id="categories">
        <div id="home"><a href="index.html">HOME</a></div>
        <div>MY FEED</div>
        <div id="india"> <a href="india.html">INDIA</a></div>
        <div id="world"><a href="india.html">WORLD</a></div>
        <div id="business"><a href="business.html">BUSINESS</a></div>
        <div id="tech"><a href="tech.html">TECH</a></div>
        <div id="health"><a href="health.html">HEALTH</a></div>
        <div id="sports"><a href="sports.html">SPORTS</a></div>
        <div id="college"><a href="college.html">BEST COLLEGE</a></div>
   </div>

   <div id="otherOptions">
        <div>
           <i class="fa-solid fa-grip-lines"></i>
        </div>
        
        <div id="business_icon">
           <i class="fa-solid fa-chart-line"></i>
        </div>
        
        <div id="entertain">
           <i class="fa-solid fa-tv"></i>
           </div>
        
        <div id="share">
           <i class="fa-solid fa-share-nodes"></i>
        </div>
        
        <div>
            <i id="searchIcon" class="material-icons accent">search</i>
            <input type="text" id="search">
            <i id="clear" class="material-icons">clear</i>
        </div>
        
        <div id="user">
            <i class="fa-solid fa-user"></i>
        </div>
        
   </div>
</div>
    `;
}

export { header };