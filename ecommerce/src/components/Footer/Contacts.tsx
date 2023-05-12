import { HStack, Text } from "@chakra-ui/react";
import { BsTelegram, BsFillTelephoneFill } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { TiMail } from "react-icons/ti";

const Contacts = () => {
  return (
    <HStack marginTop='20px'>
      <BsTelegram color='#2ba6e1'/>
      <Text>Telegram</Text>

      <BsFillTelephoneFill color='#12a600'/>
      <Text>Phone</Text>

      <FaViber color='#7b58e8'/>
      <Text>Viber</Text>
      
      <TiMail size='20px'/>
      <Text>Mail</Text>
    </HStack>
  );
};

export default Contacts;
