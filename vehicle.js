var vehicles = [
  {name:"Tata Nexaon",Seats:"05", Arriving_Time:"2 minutes",Waitingcharge:"5 Rs",reviews:3.5,SuccessfulRides:"190", UnsuccessfulRides:"10",driver:{name:"Harish",Age:"25",contact:"9988554312"}},
  {name:"Hyundai Creta",Seats:"05", Arriving_Time:"5 minutes",Waitingcharge:"7 Rs",reviews:4.2,SuccessfulRides:"30", UnsuccessfulRides:"01",driver:{name:"Sachin",Age:"30",contact:"8088567853"}},
  {name:"Maruthi Brezza", Seats:"05",Arriving_Time:"3 minutes",Waitingcharge:"10 Rs",reviews:4.5,SuccessfulRides:"490", UnsuccessfulRides:"30",driver:{name:"Deepak",Age:"28",contact:"7468941467"}},
  {name:"Innova Crysta", Seats:"07",Arriving_Time:"10 minutes",Waitingcharge:"15 Rs",reviews:4.8,SuccessfulRides:"90", UnsuccessfulRides:"5",driver:{name:"Ganesh",Age:"35",contact:"8546712357"}},
  {name:"Toyota Fortuner",Seats:"07", Arriving_Time:"1 minutes",Waitingcharge:"20 Rs",reviews:5.0,SuccessfulRides:"10", UnsuccessfulRides:"00",driver:{name:"Rakesh",Age:"40",contact:"7458945621"}},
  
]

const getallvehicles = (req,res)=>{
  res.status(200).send(vehicles)
}

const getvehiclebyname = (req,res)=>{
  const name = req.params.name;
  const foundObject = vehicles.find(obj => obj.name === name);
  if(!foundObject){
    res.send({message:error.message})
  }
  res.json(foundObject)
}




module.exports = {getallvehicles,getvehiclebyname}
