/*
 * @Author: LinRenJie
 * @Date: 2023-01-14 19:18:14
 * @LastEditTime: 2023-01-15 12:26:03
 * @Description: 
 * @FilePath: /react/src/pages/Store.tsx
 * @Email: xoxosos666@gmail.com
 */
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'
export default function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {
                    storeItems.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    )
                    )
                }
            </Row>
        </>
    )

}