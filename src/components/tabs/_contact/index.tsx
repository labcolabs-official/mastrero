import * as React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { Input, TextArea } from '@components/_form';

import { BsPerson } from 'react-icons/bs';
import { VscMailRead } from 'react-icons/vsc';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { GrTextAlignFull } from 'react-icons/gr';

const Contact = React.memo(() => {
  const [formData, setFormData] = React.useState<any>({});
  // const [status, setStatus] = React.useState<any>({
  //   isSubmitted: false,
  //   isSubmitting: false,
  // });

  const setFormDataHandler = (name: string, value: string): void => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const reachMeHandler = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
    fetch(`${process.env.GATSBY_CONTACT_FORM_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _subject: `🎊 ${formData['name']} has contacted you | Mastrero Site`,
        _replyto: formData['email'],
      }),
    })
      .then(r => r.json())
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Flex flexDir="column" justify="center" maxW={['100%', '88%', '500px']} mx={['auto', null, '10%']}>
      <Box as="form" onSubmit={reachMeHandler}>
        <Input
          name="name"
          value={formData['name']}
          update={setFormDataHandler}
          type="text"
          placeholder="Name"
          icon={BsPerson}
        />
        <Input
          name="email"
          value={formData['email']}
          update={setFormDataHandler}
          type="email"
          placeholder="Email"
          icon={VscMailRead}
        />
        <Input
          name="phone"
          value={formData['phone']}
          update={setFormDataHandler}
          type="tel"
          placeholder="Phone"
          isRequired={false}
          icon={FiPhoneCall}
        />
        <TextArea
          name="message"
          value={formData['message']}
          update={setFormDataHandler}
          placeholder="Message"
          isRequired={false}
          icon={GrTextAlignFull}
        />
        <Button
          w="100%"
          bg="secondary"
          color="white"
          borderRadius="0"
          _hover={{ opacity: 0.8 }}
          _active={{ opacity: 0.8 }}
          // onClick={reachMeHandler}
          type="submit"
          rightIcon={<FiSend />}>
          Reach me
        </Button>
      </Box>
    </Flex>
  );
});

export default Contact;
