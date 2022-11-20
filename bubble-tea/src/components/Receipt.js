import React from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

const Receipt= () => {
  return (
    <div style={{ padding: 20 }}>
      <Row>
        <Col>
          <Divider>Receipt</Divider>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>StarDucks Bubble Tea</h3>
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>10-01-2018</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>10-01-2018</td>
            </tr>
          </table>
        </Col>
      </Row>


      <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
            id: 1,
            name: 'Milk tea',
            toppings: 'Lychee',
            price: 10.00,
            quantity: 1
        }]}
        pagination={false}
        >
          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Toppings" dataIndex='toppings' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price" dataIndex='price' />
        </Table>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Col span={8} offset={16}>
          <table>
            <tr>
              <th>Subtotal :</th>
              <td>$10.00</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>$1.00 </td>
            </tr>
            <tr>
              <th>Total :</th>
              <td>$11.00</td>
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

render(<Receipt />, document.getElementById("root"));
