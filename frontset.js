import React,{useState,useEffect} from 'react';


export default function Front(){
    const [optionsa,setOptions] = useState([]);

    const[answer,setAnswer] = useState(false);
    let id=1;
    const apiUrl = 'https://opentdb.com/api.php?amount=100'
    const fetchApi=()=>{
        

        fetch(apiUrl).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setOptions(data.results);
        })
    }

    useEffect(()=>{
       fetchApi();
    },[answer])

    const handleClick=(e)=>{
        console.log(e);
       if( optionsa.e===(optionsa.results)){
          alert('Correct Answer..')
       }
      
    }

    return(
        <div>
        {optionsa.map((val,id)=>{
            return(
                <div key={id++} style={{textAlign:'center'}}>
                <h3>{val.category}</h3>
                <h4>Difficulty: {val.difficulty}</h4><br/>
                <h2>Question is:</h2><br/>
                {val.question}
                <br/>
                <button onClick={()=> handleClick(val.correct_answer)} style={{width:200,height:40}}>{val.correct_answer}</button><br/><br/>
                <button onClick={()=>alert('incorrect answer!')} style={{width:200,height:40}}>{val.incorrect_answers[0]}</button><br/><br/>
                <button onClick={()=>alert('incorrect answer!')} style={{width:200,height:40}}>{val.incorrect_answers[1]}</button><br/><br/>
                <button onClick={()=>alert('incorrect answer!')} style={{width:200,height:40}}>{val.incorrect_answers[2]}</button><br/><br/>
               <hr></hr>
                </div>
            )
        })}

        </div>
    )
}