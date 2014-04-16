//This is the title for your window tab, and your Radar
document.title = "Manny's Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            //Adotp
            {"name":"Design patterns", "pc":{"r":30,"t":100},"movement":"c"},
            {"name":"Agile/Lean Development", "pc":{"r":20,"t":170},"movement":"c"},
            {"name":"RESTFul WS", "pc":{"r":50,"t":135},"movement":"c"},     
            //Trial
            {"name":"Functional Programming", "pc":{"r":190,"t":135},"movement":"t"},
            {"name":"TDD", "pc":{"r":120,"t":100},"movement":"t"},
            //Assess
            {"name":"Extreme Programming", "pc":{"r":230,"t":135},"movement":"t"},
            {"name":"Blue/Green Deployment", "pc":{"r":350,"t":165},"movement":"c"},
            //Hold
            {"name":"Scrum certification", "pc":{"r":350,"t":165},"movement":"c"},    
            {"name":"Evolutionary architecture", "pc":{"r":320,"t":95},"movement":"c"}
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            //adopt
            {"name":"Git", "pc":{"r":40,"t":20},"movement":"c"},   
            {"name":"Hibernate", "pc":{"r":50,"t":10},"movement":"c"}, 
            {"name":"Spring", "pc":{"r":70,"t":60},"movement":"c"},  
            {"name":"ASP.Net MVC", "pc":{"r":50,"t":70},"movement":"c"},      
            //trial
            {"name":"Chef", "pc":{"r":130,"t":20},"movement":"t"},   
            {"name":"Vagrant", "pc":{"r":150,"t":10},"movement":"t"},   
            //assess
            {"name":"Subversion", "pc":{"r":250,"t":10},"movement":"t"},  
            {"name":"Proto-Buffer", "pc":{"r":200,"t":45},"movement":"c"},

            //hold
            {"name":"MongoDB", "pc":{"r":310,"t":45},"movement":"t"},    
            {"name":"Apache Trief", "pc":{"r":330,"t":45},"movement":"c"},
            {"name":"Redis", "pc":{"r":300,"t":60},"movement":"c"},
            {"name":"Memcached", "pc":{"r":330,"t":60},"movement":"c"},
            {"name":"Code climate", "pc":{"r":315,"t":10},"movement":"c"},
            {"name":"Ruby in a Gem", "pc":{"r":330,"t":20},"movement":"c"}
            
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
        	//Adopt
            {"name":"Android", "pc":{"r":40,"t":200},"movement":"c"},  
            {"name":"ArcGIS", "pc":{"r":70,"t":230},"movement":"c"},  
            {"name":"RESTFul WS", "pc":{"r":50,"t":240},"movement":"c"},  
             {"name":"ExtJS Sencha", "pc":{"r":70,"t":260},"movement":"c"},  
            //Trial
            {"name":"AWS EC2", "pc":{"r":100,"t":190},"movement":"t"},  
            {"name":"Oracle 11g", "pc":{"r":150,"t":240},"movement":"c"},  
            {"name":"Hadoop", "pc":{"r":130,"t":200},"movement":"c"},
            //assess
            {"name":"GoogleApp Engine", "pc":{"r":210,"t":190},"movement":"c"},  
             
             //Hold
             {"name":"IOS Dev", "pc":{"r":350,"t":200},"movement":"c"},  
             {"name":"Protocol Buffer", "pc":{"r":300,"t":200},"movement":"c"},  
             
            
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
        	//adopt
        	{"name":"Java", "pc":{"r":20,"t":315},"movement":"c"}, 
        	{"name":"Javascript", "pc":{"r":40,"t":340},"movement":"c"}, 
        	{"name":"Python", "pc":{"r":90,"t":301},"movement":"c"},   
        	{"name":"C#", "pc":{"r":60,"t":295},"movement":"c"},   
        	
        	//trial        
            {"name":"Ruby", "pc":{"r":105,"t":340},"movement":"t"},   
            {"name":"HTML 5", "pc":{"r":150,"t":300},"movement":"c"}, 
            {"name":"VB.Net", "pc":{"r":180,"t":320},"movement":"c"}, 
            //assess
            {"name":"Go", "pc":{"r":250,"t":320},"movement":"t"},
            //hold
            {"name":"Scala", "pc":{"r":350,"t":320},"movement":"c"},   
            {"name":"JRuby", "pc":{"r":380,"t":330},"movement":"c"}, 
            {"name":"Clojure", "pc":{"r":360,"t":310},"movement":"c"}  
            
        ]
    }
];
