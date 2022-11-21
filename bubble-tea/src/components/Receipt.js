import React from "react";

import { Col, Divider, Row, Table } from 'antd';
// import 'antd/dist/antd.css';

const Receipt = ({receiptItem, price}) => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;

  return (
    <div style={{}}>
      <Row>
        <h1>Receipt</h1>
      </Row>

      <h3>StarDucks Bubble Tea</h3>
      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>{today}</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>{today}</td>
            </tr>
          </table>
        </Col>
      </Row>


      <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
          id: 1,
          name: 'Bubble Tea',
          price: `${price}`,
        }]}
          pagination={false}
        >
          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Price" dataIndex='price' />
        </Table>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Col>
          <table>
            <tr>
              <th>Subtotal :</th>
              <td>${price}</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>${(price * 0.13).toFixed(2)} </td>
            </tr>
            <tr>
              <th>Total :</th>
              <td>${(price * 1.13).toFixed(2)}</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48, textAlign: 'center' }}>
        Thank you for ordering at StarDucks!
      </Row>
    </div>
  );
};

export default Receipt;
