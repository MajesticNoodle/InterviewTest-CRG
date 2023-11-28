const getTimeline = async () => { 
    const res = await fetch(`https://arthurfrost.qflo.co.za/`)
    const timeline = await res.json();     
    return timeline   }  
    export default getTimeline;