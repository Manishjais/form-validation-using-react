import React, { useState }  from "react"

function Login(){
    const [userId, setUser]=useState("");
    const [Password, setPass]=useState("");
    const [Iderror, setId]=useState(false);
    const [passerror, setPassErrror]=useState(false);

    function Nosubmit(e){
       
        if(userId<3 || Password<8)alert("enter input feild");
        e.preventDefault();
    }
    function userHandler(e){
        let item =e.target.value.length;
        if(item < 4){
            setId(true);
            //console.log("input valid userId");
        }else{
            setId(false);
        }
        setUser(item);
    }
    function passHandler(e){
        let passItem =e.target.value.length;
        if(passItem< 8){
            setPassErrror(true);
            //console.log("input valid password");
        }else{
            setPassErrror(false);
        }
        setPass(passItem);
    }
    return(
        <div>
            <form onSubmit={Nosubmit}>
                <h1>Login Form</h1>
                <input style={{margin:10, padding: 5}} type="text" placeholder="Enter User Id" onChange={userHandler}></input>{Iderror ? <span>Invalid Id</span>:""}<br></br>
            
                <input style={{margin:10, padding: 5}} type="Password" placeholder="Enter Password" onChange={passHandler}></input>{passerror ? <span>Invalid Password</span>:""}<br></br>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login;