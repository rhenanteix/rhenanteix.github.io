import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import Select, { SelectOption } from '../../components/uielements/select';
import { borderRadius } from '../../config/style-util';
import { Link } from 'react-router-dom';

const Option = SelectOption;

class Conteudo extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Row justify="start" >
            <Col md={24} sm={24} xs={24}>
              <Box 
              title="Drive / Criar novo Conteúdo" 
              subtitle="1. Criar um título, selecione uma categoria e adicionar os links" >
                <ContentHolder>
                <Col md={12} sm={12} xs={12}>
                  <Input style={{ marginBottom: '15px', marginRight: '50px' , width: '80%' }} placeholder="Informe seu título aqui" /> 
                  <Select style={{ marginBottom: '15px', marginRight: '50px', width: '80%' }} placeholder="Selecione uma categoria" >
                    <Option value="Categoria 1" > Categoria 1 </Option>
                    <Option value="Categoria 2" > Categoria 2 </Option>
                  </Select> 
                  <Input style={{ marginBottom: '15px' , width: '80%' }} placeholder="Link ecommerce, endereço da loja" />
                  <Input style={{ marginBottom: '15px' , width: '80%' }} placeholder="Link do site" />
                  <Input style={{ marginBottom: '15px' , width: '80%' }} placeholder="Link do vídeo" />
                </Col>
                <Col md={8} sm={8} xs={8}>
                    <Button type="primary" style={{marginLeft: '10px', width:'69%'}}> Salvar e Publicar </Button>
                </Col>
                <Col md={8} sm={8} xs={8}>
                  <Button disabled style={{ margin: '15px 10px 15px 10px'}}>
                      Voltar
                  </Button>
                  <Button>
                    <Link to="maps">
                      Próximo
                    </Link>
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

export default Conteudo;