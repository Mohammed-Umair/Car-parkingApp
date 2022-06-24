import {
  Button,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Paper,
  Alert,
  CardActions,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { slotContext } from "./Context";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const PaymentPage = () => {
  const [hours, setHours] = useState<any>("");
  const [minutes, setMinutes] = useState<any>("");
  const [sec, setSec] = useState<any>("");
  const [rate, setRate] = useState<any>(0);
  const [apiResponse, setApiResponse] = useState<any[]>([]);
  console.log("rate===>", rate);
  console.log("apiResponse===>", apiResponse);

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [open, setOpen] = useState(false);

  const { currCarSlot, createSlot, setCreateSlot }: any =
    useContext(slotContext);

  console.log("currCarSlot123", currCarSlot);

  // const data = useLocation().state;

  // console.log("data", data);

  // const timeCalculate = () => {
  //   const timeDuration: any =
  //     Math.abs(new Date().getTime() - new Date(currCarSlot?.time).getTime()) /
  //     3600000;
  //   console.log("timeDuration", timeDuration);
  //   const roundHours: any = Math.round(timeDuration);
  //   console.log("hrs", roundHours);
  //   setHours(roundHours);
  //   const roundMinutes: any = Math.round((timeDuration - roundHours) * 60);
  //   console.log("min", roundMinutes);
  //   setMinutes(roundMinutes);
  //   // const roundSeconds = Math.round((roundHours - roundMinutes) * 60);
  //   // console.log("sec", roundSeconds);
  // };
  
  useEffect(() => {
//      const starttime=currCarSlot.time.getTime()
//      console.log("starttime/////",starttime);
//       const currTime=new Date().getTime()
//       console.log("currTime///",currTime);
//  //////
//     const diffInhr = Math.abs(currTime - starttime)/3600000
//     console.log("hours....",diffInhr);
//     const diffInMs = Math.abs(currTime - starttime)/60000
//     console.log("Min....",diffInMs);
//     const diffInSE = Math.abs(currTime - starttime)/1000
//     console.log("sec....",diffInSE);
//     setSec(diffInSE)
    

//     const totalTimeDuration: any =
//       Math.abs(currTime - starttime) / 3600000;
//     console.log("totalTimeDuration", totalTimeDuration);
   
  
    },[sec] )
   

  useEffect(() => {
    ////////////////
    // timeCalculate();

     
    
    // const timeDuration: any =
    //   Math.abs(new Date().getTime() - new Date(currCarSlot?.time).getTime()) /
    //   3600000;
    // console.log("timeDuration", timeDuration);
    // const roundHours = Math.round(timeDuration);
    // console.log("hrs", roundHours);
    // setHours(roundHours);
    // const roundMinutes = Math.round((timeDuration - roundHours) * 60);
    // console.log("min", roundMinutes);
    // setMinutes(roundMinutes);
    
    const starttime=currCarSlot.time.getTime()
     console.log("starttime/////",starttime);
      const currTime=new Date().getTime()
      console.log("currTime///",currTime);
 //////
    const diffInhr:any = Math.abs(currTime - starttime)/3600000
    console.log("hours....",diffInhr);
    setHours(diffInhr)
    const diffInMs:any = Math.abs(currTime - starttime)/60000
    console.log("Min....",diffInMs);
    setMinutes(diffInMs)
    const diffInSE = Math.abs(currTime - starttime)/1000
    console.log("sec....",diffInSE);
  
      setSec(diffInSE )
    
    
    

    const totalTimeDuration: any =
      Math.abs(currTime - starttime) / 3600000;
    console.log("totalTimeDuration", totalTimeDuration);

    const DiffrenceInTime = Math.ceil(totalTimeDuration) 

    console.log("DiffrenceInTime", DiffrenceInTime*10);
    // setRate(DiffrenceInTime * 10);

    let amount;
    if (DiffrenceInTime < 2) {
      amount = 10;
    } else {
      amount = 10 + (DiffrenceInTime - 2) * 10;
    }
    setRate(amount);
  },[sec]);



  

  const handlePayment = async (id:any) => {
    setOpen(true)
    await axios
      .post(`https://httpstat.us/200`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "car-registration": currCarSlot.carno,
          charge: rate,
        }),
      })
      .then((response) => {
        // response.status === 200 ? setSuccess(true) : setFail(true);

        setApiResponse(response.data);
      });

      const newSlots: any = [];
    createSlot.forEach((item: any) => {
      if (item.id === id) {
        newSlots.push({
          ...item,
          allocated: true,
          carno: "",
          time: null,
        });
      } else {
        newSlots.push(item);
      }
    });
    setCreateSlot([...newSlots]);
    // navigate("/parkinglot");
  };
  const navigate = useNavigate();
  // const handleBack = (id: any) => {

  //   const newSlots: any = [];
  //   createSlot.forEach((item: any) => {
  //     if (item.id === id) {
  //       newSlots.push({
  //         ...item,
  //         allocated: true,
  //         carno: "",
  //         time: null,
  //       });
  //     } else {
  //       newSlots.push(item);
  //     }
  //   });
  //   setCreateSlot([...newSlots]);
  //   navigate("/parkinglot");
  // };

const handleBack=()=>{
  navigate("/parkinglot")
}

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            top: 40,
            width: "50%",
          }}
        >
          {success && <Alert severity="info">Payment Successful...!!</Alert>}
          {fail && <Alert severity="warning">Payment unSuccessful...!!</Alert>}
        </Box> */}
        {/* {currCarSlot?.map((elem: any) => {
        return ( */}

        {!open?
        <Card
          sx={{
            minWidth: 300,
            height: 300,
            mt: 2,
            boxShadow: 10,
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFDEE9",
            backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
          }}
        >
          <CardContent
            sx={{
              mt: 10,
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "monospace",
              }}
              color="orangered"
              gutterBottom
            >
              CarNo: <>{currCarSlot.carno} </>
              {/* CarNo: <>{data?.state?.carno} </> */}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "monospace",
              }}
              gutterBottom
            >
              {/* Time:<>{data?.state?.time}</> */}
              Time:<>{hours.toString().slice(0,1)}:{minutes.toString().slice(0,2)}:{sec.toString().slice(0,3)}</>
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "monospace",
              }}
              gutterBottom
            >
              Price:$ {rate}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "monospace",
                bgcolor: "White",
              }}
              onClick={()=>handlePayment(currCarSlot.id)}
            >
              Payment
            </Button>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "monospace",
                bgcolor: "white",
              }}
              // onClick={() => handleBack(currCarSlot.id)}
              onClick={handleBack}
            >
              Back to Slot
            </Button>
          </CardActions>
        </Card>:
        
          <Box 
          sx={{
            minWidth: 300,
            height: 300,
            mt: 2,
            boxShadow: 10,
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFDEE9",
            backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
          }}
          >
            <Alert 
            sx={{
              mt:10,
            }}
            severity="info">Payment Successful...!!</Alert>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "monospace",
                bgcolor: "white",
                mt:13,
              }}
              onClick={handleBack}
            >
              Back to Slot
            </Button>
          </Box>
        }
        {/* );
      })} */}
      </Box>
    </>
  );
};

export default PaymentPage;
