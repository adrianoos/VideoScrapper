import React from 'react';
import { Button, Form, FormGroup, Input, Jumbotron, Row,Col } from 'reactstrap';
import useForm from './UseForm'
import ValidateInfo from './ValidateInfo'

const InputForm = ({ urls, setUrls }) => {
    const { UpdateInput, getUrl, inpValue, errors } = useForm(ValidateInfo, urls, setUrls) // custom hook 
    return (
 <div>
    <Form onSubmit={getUrl}>
     <FormGroup>
      <Jumbotron className='shadow' style={{background:'rgb(141, 141, 141)'}}>
        <h1 className="display-4">Vimeo and YouTube Scrapper</h1>
        <hr className="my-2" />
        <p className="lead">Place where You can store your favorites videos</p>
      </Jumbotron>
          <Input  className='shadow' value={inpValue} onChange={UpdateInput} bsSize="lg" width="100%" id="urlInput" placeholder="Enter VIMEO or YOUTUBE url or Video ID">
          </Input>
             {errors && <h2>{errors}</h2>}
     </FormGroup>
     <Row >
     <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Button className='shadow m-2' size="sm" block>Add</Button>
     </Col>
        
        </Row>
    </Form>
    
 </div>
    );
  }
  
  export default InputForm;
  



