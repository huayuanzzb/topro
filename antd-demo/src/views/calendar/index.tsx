import {useState} from 'react'
import AYear from "./Year"
import { Flex, Row, Button, Select } from "antd"


export default function ACalendar() {

    const [years, setYears] = useState([2024])
    const [year, setYear] = useState(2024)

    const handleChange = (value: string) => {
        setYear(parseInt(value, 10));
    };

    const onClickAdd = () => {
        setYears([...years, years[years.length-1]+1])
    }

    return (
        <div>
            <Row>
                <Select
                    defaultValue={year+''}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={years.map(y => { return {value: y, label: y} })}
                />
                <Button type="primary" onClick={onClickAdd}>Add</Button>
            </Row>
            <Flex wrap gap="small">
                <AYear year={year} />
            </Flex>
        </div>
    );
}
