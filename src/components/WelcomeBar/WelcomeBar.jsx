import React, { Fragment } from "react";
import { Layout, Typography } from "antd";
import "./WelcomeBar.css";
import { LuClock2 } from "react-icons/lu";
//import { useAuthenticator } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from '../../assets/helloani.json'

const { Header } = Layout;
const { Title, Text } = Typography;
// const h1parentVariants ={
//   visible:{
//     transition:{
//       staggerChildren:0.1
//     }
//   }
// }
const h1Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const WelcomeBar = () => {
  const user = "kishore"
  //const { user, signOut } = useAuthenticator((context) => [context.user]);
  const heading1 = "Welcome"
const heading2 = `${user}!`
  return (
    <Fragment>
    
    <Header className="welcome-bar">
      <>
      <div className="bgimg"> 
    <Lottie  className="key1"  animationData={animationData} />
    </div>
      <div>
        <Title level={1} className="welcome-title">
          {/* <p className="wlcm">Welcome</p>&nbsp; <p className="key"> {user.username}!</p> */}
          <motion.div className="heading"   >
            {heading1.split('').map((head,index)=>{

              return head === " " ? <p>&nbsp;</p> : <motion.p className="wlcm" variants={h1Variants} initial="hidden" animate="visible" transition={{delay:index * 0.1,type:"spring",stiffness:120}}>{head}</motion.p>

            })}
            &nbsp;
            {heading2.split('').map((head,index)=>{

return head === " " ? <p>&nbsp;</p> : <motion.p className="key" variants={h1Variants} initial="hidden" animate="visible" transition={{delay:index * 0.1,type:"spring",stiffness:120}}>{head}</motion.p>

})}
          </motion.div>
        </Title>
        </div>
        <Text className="last-logged">
          <span className="log-icon">
            <LuClock2 />
          </span>
          <span className="last-logged-text">Last Logged in:</span>
          <span className="logged-in-details">
            September 1st 2024, 8:18:11 pm
          </span>
        </Text>
      
      </>
    </Header>
    </Fragment>
  );
};

export default WelcomeBar;
