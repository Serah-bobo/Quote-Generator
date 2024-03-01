import QuoteDisplay from "./QuoteDisplay"
import SocialMediaIcons from "./SocialMediaIcons"
import { useEffect, useState,useCallback } from "react"
const QuoteGenerator = () => {
    const [quote,setQuote]=useState("")//setting our quote as empty,we'll use state to modify
    const [color, setColor]=useState('green')//setting our background color to white

    

   
    //fetching our data
    const fetchQuote=useCallback(async()=>{//async declares asychronous operation
      const colors=['red','blue']
      const changeColor=()=>{
        const randomColor=[Math.floor(Math.random()*colors.length)];
        setColor(randomColor)
        console.log(randomColor)
      }

      try{//try methodhandles error in execution 
          const response=await
          fetch('https://api.quotable.io/random');//get request and await pauses execution until the promise returned by fetch resolves 
          const data=await response.json();//once response is received from api the json method parses the body as json.await waits for parsing to complete
          setQuote(data.content);//updates quote variable with content from api
          changeColor();//changing background color
      }
      catch(err){
          console.log('error fetching quote',err);//displays if an error occurs
      }
  },[])
    //fetch quote on initial render
    useEffect(()=>{
        fetchQuote();
    },[fetchQuote] );//[] is a cleanup code 

    const handleGenerateQuote = () => {
      fetchQuote(); // Call fetchQuote on button click
  };
//change color code

  return (
    <div className="min-h-screen flex flex-col items-center justify-center"
    style={{color}}>
      <div className="max-w-lg p-8 rounded-lg shadow-lg text-center">
      <QuoteDisplay quote={quote}/>
      <SocialMediaIcons/>
      <button onClick={handleGenerateQuote}
      className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Generate New Quote
      </button>
     .

































































































      </div>
     
    </div>
  )
}

export default QuoteGenerator
