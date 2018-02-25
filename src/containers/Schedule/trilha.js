import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import Dropzone from '../../components/uielements/dropzone';
import Image from '../../image/upload.png';
import Form from '../../components/uielements/form';
import Datepicker from '../../components/uielements/datePicker';
import Select, { SelectOption } from '../../components/uielements/select';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const Option = SelectOption;

class Trilha extends Component {
  render() {
       const config = {
      iconFiletypes: ['.img'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };

    const ButtonStyleOne = {
      backgroundColor: '#888888',
      color: '#ffffff'
    };

   const ButtonStyleTwo = {
      backgroundColor: '#888888',
      color: '#ffffff',
      margin: '15px 10px 15px 10px',
      marginLeft: '40px'
    };

        const StyleQR = {
      color: '#ffffff',
      backgroundColor: '#BBBBBB',
      marginLeft: '40px',
      marginTop: '10px',
      width:'69%'
    };

    const StyleContent = {
      color: '#ffffff',
      backgroundColor: '#454545',
      marginLeft: '40px',
      marginTop: '15px',
      width:'69%'

    };

    const StyleButtonReplication = {
      margin: '15px 10px 15px 10px',
      marginLeft: '15px',
      color: '#ffffff',
      backgroundColor: '#454545'
    };

    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
            <Box 
              title="Drive / Programação do Evento" 
              subtitle="2. Defina as trilhas de cada dia do seu evento" >
                <ContentHolder>
                  <Col md={12} sm={12} xs={12}>
                    <Form layout="vertical">
                      <FormItem label=""> 
                        <div style={{ border: '1px solid' }} >
                          <div style={{textAlign: 'left'}}>  
                            <Icon type="calendar" style={{ marginLeft: '10px', marginRight: '10px'}} /> 
                          </div>
                          <Input placeholder="Nome da trilha" style={{width: '95%', margin: '10px' }} />
                          <Input size="small" style={{width: '29%', marginBottom: '10px', marginLeft:'10px', marginRight: '14px' }} placeholder="Atribua tema"/>
                          <Input size="small" style={{width: '29%', marginBottom: '10px', marginLeft:'10px', marginRight: '14px' }} placeholder="Atribua sala"/>
                          <Select size="small" style={{width: '29%', marginBottom: '10px'}} placeholder="Atribua Cor" >
                            <Option value="Cor1" > Cor 1 </Option>
                            <Option value="Cor2" > Cor 2 </Option>
                          </Select>
                          <div style={{textAlign: 'right'}}>  
                            <Icon type="delete" style={{ marginLeft: '10px', marginRight: '10px'}} /> 
                          </div>
                     <Button style={StyleButtonReplication}>
                        Replicar trilhas para os próximos dias   
                    </Button>

                    <Button>
                        Adicionar Trilha   
                    </Button>
                        </div>
                      </FormItem>
                    </Form>
                  </Col>               
                  <Col md={8} sm={8} xs={8}>
                      <Button type="default" style={{marginLeft: '40px', width:'69%'}}> Salvar e Publicar </Button>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Button style={ButtonStyleTwo}>
                        <Link to="schedule">
                        Voltar   
                      </Link>    
                    </Button>

                    <Button style={ButtonStyleOne}>
                     <Link to="evento" >
                        Próximo   
                      </Link> 
                    </Button>
                    <Box>
               <Col md={20} sm={20} xs={20} >
                  <Dropzone config={config}>
                    </Dropzone>  
                </Col>

              </Box>
              <Button type="default" style={StyleQR}>
                  Baixe seu QR code
              </Button>
              <br>
              </br>
              <Button type="default" style={StyleContent}>
                  Vincular conteudo a um canal
              </Button>

                  </Col>
                </ContentHolder>
              </Box>
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default Trilha;