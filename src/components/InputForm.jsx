import React from 'react';
import { Button, Form, FormGroup, Input, Jumbotron, Row,Col } from 'reactstrap';
import useForm from './UseForm'
import ValidateInfo from './ValidateInfo.jsx'

const InputForm = ({ urls, setUrls }) => {
    const { UpdateInput, getUrl, inpValue, errors } = useForm(ValidateInfo, urls, setUrls)
    return (
 <div>
    <Form onSubmit={getUrl}>
     <FormGroup>
      <Jumbotron className='shadow' id='Jumbotron' style={{background:'rgb(3, 3, 3)'}}>
        <h1 className="display-4">Vimeo and YouTube Scrapper</h1>
        <hr className="my-2" />
        <p className="lead">Place where You can store your favorites videos</p>
      </Jumbotron>
          <Input  className='shadow' value={inpValue} onChange={UpdateInput} bsSize="lg" width="100%" id="urlInput" placeholder="Enter VIMEO or YOUTUBE url or Video ID">
          </Input>
             {errors && <h2>{errors}</h2>}
     </FormGroup>
     <Col>
     <Button className='shadow class="btn btn-warning btn-sm"' block>Add</Button>
     </Col>
    </Form>
    
 </div>
    );
  }
  
  export default InputForm;
  



