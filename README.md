node.js-express-personal-cheatsheet
סיכומים + נק חשובות + פאקגים מיוחדים ואקסטרה

<h4> Arrow function: </h4> 
<pre>
With arrow function: 
const showCarName = (_name)=>{...}

Without arrow function: 
function showCarName(_name){...}
</pre>

<h4> Require </h4> 
<pre>require ("./cars") - לדוגמא פה הריקוואייר שנמצא לדוגמא בקובץ הראשי יפעיל לי את את קובץ בשם מכוניות
</pre>




<h4> module.exports</h4> 
module.exports= nameOfFunctionOrClass; - (ניתן להשתמש בו רק פעם אחת במודול)נשתמש בזה על מנת להחצין פונקציה ספציפית של מחלקה או מחלקה שלמה 
על מנת לייבא שני פונקציות ומעלה נכניס אותם למחלקה ונשתמש במודולאקספורט לשם המחלקה כך : 
<pre>
*cars.js

class Cars{
static showCarName(){...}
showCarColor(){...}
}
static module.exports=Cars;
(  על מנת לממש מופע של מחלקה כקלאס מכוניותיש ליצור אובייקט מסוג מכונית שעליו יפעלו המתודות בקלאס מכונית או לחילופיןלשים קידומת סטטיק )
</pre>

 <h4> שימוש ב exports: </h4>
 <pre>
 *cars.js

exports.showCarName=(_name)=>{consol.log("name",_name)}
</pre>

<pre>
*app.js

const{showCarName}=require("./cars")

showCarName("")
</pre>


<h4> nodemon dependency </h4>
<pre>
instead of need to write node app.js to start spesific file u shlould use nodemon
especially in dev env
</pre>

<pre>

</pre>


Keboard shorcuts 
<pre>
Terminat process :
cntrl+ c

copy line shortcut:
alt+shift+arrowDown/UP

npm uninstall packageName
</pre>

